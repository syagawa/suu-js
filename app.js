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
var K = _SK_js__WEBPACK_IMPORTED_MODULE_0__["default"].K;
var S = _SK_js__WEBPACK_IMPORTED_MODULE_0__["default"].S;

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
  Kei: K,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJTIiwiSyIsIkZJUlNUX1BSSU1FX05VTUJFUiIsImlzUHJpbWVOdW1iZXIiLCJuIiwiaXNOdW1iZXIiLCJNQVgiLCJtYXgiLCJpIiwibmV4dE51bWJlciIsInByZXZOdW1iZXIiLCJyYW5kb20iLCJtaW4iLCJBcnJheSIsImxlbmd0aCIsInJhbmRvbUVsZW1lbnQiLCJ1bmRlZmluZWQiLCJsZW4iLCJyYW5kIiwiTWF0aCIsImFycmF5IiwicmFuZG9tSW50IiwiYXJyIiwicHVzaCIsInJlcyIsInByaW1lTnVtYmVycyIsImlzRXZlbk51bWJlciIsImlzT2RkTnVtYmVyIiwiZGl2aXNvcnMiLCJldWNsaWRlYW5BbGdvcml0aG0iLCJhIiwiYiIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsImNvbW1vbkRpdmlzb3JzIiwiYXJyX2EiLCJhcnJfYiIsImRpdnMiLCJrIiwiZWxtX2EiLCJsIiwiZWxtX2IiLCJtYXhDb21tb25EaXZpc29yIiwibXVsdGlwbGUiLCJsZWFzdENvbW1vbk11bHRpcGxlIiwiYmlnIiwiaiIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImVsbSIsImluZmluaXRlUHJvZHVjdCIsImlwIiwiZGl2aXNpb24iLCJkaXZpZGVuZCIsImRpdmlzb3IiLCJyZXN1bHQiLCJpbnRlZ2VyIiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwicyIsIlN0cmluZyIsImZpcnN0X2xlbiIsImFmdGVyX2xlbiIsImZpcnN0IiwiYWZ0ZXIiLCJOdW1iZXIiLCJzdWJzdHIiLCJpc0thcHJla2FyTnVtYmVyVHlwZUIiLCJzcGxpdCIsInNvcnQiLCJqb2luIiwicmV2ZXJzZSIsImlzS2FwcmVrYXJOdW1iZXIiLCJpc0ludGVnZXIiLCJmIiwiaGFybW9uaWNNZWFuIiwiaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIiLCJpc05hdHVyYWxOdW1iZXIiLCJjb2xsYXR6aFByb2JsZW0iLCJjYWxjIiwiZmVybWF0VGVzdCIsImlzWmVybyIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsIk1JTiIsIkRCWiIsIk5BTiIsIk5PVFNVIiwiY29yZSIsImlzTmFOIiwiTmFOIiwibnVtVG9BcnJheSIsInN0ciIsInNsaWNlIiwiRXJyb3IiLCJpc051bUFycmF5IiwiZ2xvYmFsIiwic2VsZiIsImNvbnN0YW50cyIsIlNLIiwiU3UiLCJvcHRpb24iLCJuZWdhdGl2ZSIsInBhcnRzIiwiaW50X3N0ciIsImRlY2ltYWxfc3RyIiwiaW50MCIsIm1hdGNoIiwibmV3X2ludF9zdHIiLCJzdGFydF96ZXJvIiwiZGVjMCIsImVuZF96ZXJvIiwibmV3X2RlY2ltYWxfc3RyIiwiaW50X2FyciIsImRlY2ltYWxfYXJyIiwiZSIsImRlY2ltYWwiLCJkZW5vbWluYXRvciIsImZyYWN0aW9uIiwibnVtZXJhdG9yIiwiY29uY2F0IiwibWFrZVN1IiwibWVzc2FnZSIsImlzU3UiLCJzdSIsImNvcHlTdSIsImdldFN0cmluZyIsIkNPTlNUQU5UUyIsIlpFUk8iLCJPTkUiLCJwcm90b3R5cGUiLCJhYyIsInJlZHVjZSIsImdldE51bWJlciIsImdldEludGVnZXIiLCJnZXREZWNpbWFsIiwiY2xvbmUiLCJnZXRMYXJnZSIsImFic29sdXRlIiwiZmllbGQiLCJfYSIsIl9iIiwiaXNFcXVhbCIsImlfYSIsImlfYiIsImRfYSIsImRfYiIsImxhcmdlIiwiY29udGFpbkRlY2ltYWwiLCJpc09uZSIsImlzTGFyZ2UiLCJpc1NtYWxsIiwiaXNQb3NpdGl2ZSIsImlzTmVnYXRpdmUiLCJ2IiwiYWRkIiwibWFrZVBvc2l0aXZlIiwic3VidHJhY3QiLCJpbnRfYSIsImRlY19hIiwiaW50X2IiLCJkZWNfYiIsImxlbl9pIiwibGVuX2QiLCJvdmVyIiwiaW50X3JlcyIsImRlY19yZXMiLCJfcmVzIiwidW5zaGlmdCIsImQiLCJwb3AiLCJnYXAiLCJuZWdhdGUiLCJhX2lkIiwiYl9pZCIsImFfaV9sZW4iLCJiX2lfbGVuIiwiYV9kX2xlbiIsImJfZF9sZW4iLCJkX2dhcCIsImFicyIsImRlYnQiLCJyZXNfYXJyYXkiLCJhX2VsbSIsImJfZWxtIiwic3BsaWNlIiwibWludXMiLCJudW1iZXIiLCJuZXZhdGl2ZSIsIm1ha2VOZWdhdGl2ZSIsIm11bHRpcGxpY2F0aW9uIiwiZHBfYSIsImRwX2IiLCJyZXNfYXJyIiwicG9zX2EiLCJwb3NfYiIsInBvcyIsInBhZEVuZCIsInBhZFN0YXJ0IiwiY291bnQiLCJyZW1haW4iLCJwbHVzIiwidGFzdSIsImhpa3UiLCJtdWx0aXBseSIsImtha2VydSIsIndhcnUiLCJuZXh0IiwicHJldiIsImdldERpdmlzb3JzIiwiZ2V0Q29tbW9uRGl2aXNvcnMiLCJnZXRNYXhDb21tb25EaXZpc29yIiwiZ2V0TGVhc3RDb21tb25NdWx0aXBsZSIsIm11bHRpIiwibWFrZUZpYm9uYWNjaVNlcXVlbmNlIiwiZnVuYyIsImMiLCJpc0ZpYm9uYWNjaU51bWJlciIsInplcm8iLCJvbmUiLCJmaWJzIiwibHVjYXNTZXF1ZW5jZSIsImlzTHVjYXNOdW1iZXIiLCJsdWNzIiwibHVjYXNQcmltZU51bWJlcnMiLCJscyIsImdldFNlcXVlbmNlIiwiZGlnaXRzdW0iLCJzcXVhcmUiLCJleHBvbmVudGlhdGUiLCJjdWJlIiwiaXNEZWZpY2llbnROdW1iZXIiLCJpc1BlcmZlY3ROdW1iZXIiLCJmYWN0b3JpYWwiLCJpc1RyaWFuZ2xlTnVtYmVyIiwiZ2V0VHJpYW5nbGVOdW1iZXJzIiwiZ2V0UG9seWdvbmFsTnVtYmVycyIsImdldFNxdWFyZU51bWJlcnMiLCJjdXJyZW50IiwicmFuZ2UiLCJpbmNyZW1lbnQiLCJtZXJzZW5uZU51bWJlcnMiLCJ0d28iLCJleCIsIm1lcnNlbm5lUHJpbWVOdW1iZXJzIiwibWFyciIsImlzTWVyc2VubmVOdW1iZXIiLCJtcyIsIm0iLCJpc01lcnNlbm5lUHJpbWVOdW1iZXIiLCJyYW4iLCJLZWkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FB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Q0FBQ25ELElBQUksQ0FBQ1IsTUFBTCxFQUFELENBQWxCO0FBQ0EsTUFBSTJQLEdBQUo7O0FBRUEsTUFBRzlKLEdBQUcsS0FBSyxHQUFYLEVBQWU7QUFDYixRQUFHNUYsR0FBRyxDQUFDK0UsTUFBSixFQUFILEVBQWdCO0FBQ2QySyxTQUFHLEdBQUdqSSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQ0QsS0FGRCxNQUVLO0FBQ0hpSSxTQUFHLEdBQUcxUCxHQUFOO0FBQ0Q7QUFDRixHQU5ELE1BTUs7QUFDSCxRQUFJVSxHQUFHLEdBQUdrRixHQUFHLENBQUMxQixLQUFKLENBQVUsR0FBVixDQUFWO0FBQ0F3TCxPQUFHLEdBQUdqSSxNQUFNLENBQUMsT0FBTy9HLEdBQUcsQ0FBQyxDQUFELENBQVgsQ0FBTixDQUFzQm9MLGNBQXRCLENBQXFDbk0sR0FBckMsQ0FBTjtBQUNEOztBQUNELFNBQU8rUCxHQUFQO0FBQ0QsQ0E1QkQ7O0FBOEJlO0FBQ2JqSSxRQUFNLEVBQUVBLE1BREs7QUFFYkksUUFBTSxFQUFFQSxNQUZLO0FBR2JGLE1BQUksRUFBRUEsSUFITztBQUliZ0ksS0FBRyxFQUFFdFEsQ0FKUTtBQUtiK0csSUFBRSxFQUFFQSxFQUxTO0FBTWJxQyxVQUFRLEVBQUVBO0FBTkcsQ0FBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgTUFYLCBNSU4gfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcbmltcG9ydCB7IG1ha2VTdSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBTID0ge307XG5jb25zdCBLID0ge307XG5cblxuY29uc3QgRklSU1RfUFJJTUVfTlVNQkVSID0gMjtcblxuUy5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFTLmlzTnVtYmVyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobiA9PT0gMCB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobiA9PT0gMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZihuID49IE1BWCl7XG4gICAgcmV0dXJuIGBBcmd1bWVudCBleGNlZWRzIG1heGltdW0gdmFsdWUoJHtNQVh9KWA7XG4gIH1cblxuICBjb25zdCBtYXggPSBuO1xuICBmb3IoIGxldCBpID0gbWF4IC0xOyBpID4gMTsgaS0tKXtcbiAgICBpZiggKG1heCAlIGkpID09PSAwICl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuUy5uZXh0TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFTLmlzTnVtYmVyKG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuICsrbjtcbn07XG5cblMucHJldk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiAtLW47XG59O1xuXG5LLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcblxuICBpZihtaW4gaW5zdGFuY2VvZiBBcnJheSAmJiBtaW4ubGVuZ3RoID4gMCl7XG4gICAgcmV0dXJuIEsucmFuZG9tRWxlbWVudChtaW4pO1xuICB9XG5cbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IDA7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IDE7XG4gIH1cblxuICBjb25zdCBsZW4gPSBtYXggLSBtaW47XG4gIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICByZXR1cm4gKCByYW5kICogbGVuICkgKyBtaW47XG59O1xuXG5LLnJhbmRvbUVsZW1lbnQgPSBmdW5jdGlvbihhcnJheSl7XG4gIGNvbnN0IGkgPSBLLnJhbmRvbSgwLCBhcnJheS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGFycmF5W2ldO1xufTtcblxuSy5yYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKCAhUy5pc051bWJlcihtaW4pIHx8ICFTLmlzTnVtYmVyKG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZihtaW4gPj0gbWF4KXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSsrKXtcbiAgICBhcnIucHVzaChpKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IEsucmFuZG9tRWxlbWVudChhcnIpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG5LLnByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBGSVJTVF9QUklNRV9OVU1CRVI7IGkgPCBNQVg7IGkrKyl7XG4gICAgaWYoUy5pc1ByaW1lTnVtYmVyKGkpKXtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG5TLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZiggUy5pc051bWJlcihuKSAmJiBuICUgMiA9PT0gMCApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCBTLmlzTnVtYmVyKG4pICYmIG4gJSAyICE9PSAwICl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbksuZGl2aXNvcnMgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKXtcbiAgICBpZihuICUgaSA9PT0gMCl7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLmNvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFycl9hID0gSy5kaXZpc29ycyhhKTtcbiAgaWYoYSA9PT0gYil7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gSy5kaXZpc29ycyhiKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBrID0gMDsgayA8IGFycl9hLmxlbmd0aDsgaysrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2tdO1xuICAgIGZvcihsZXQgbCA9IDA7IGwgPCBhcnJfYi5sZW5ndGg7IGwrKyl7XG4gICAgICBjb25zdCBlbG1fYiA9IGFycl9iW2xdO1xuICAgICAgaWYoZWxtX2EgPT09IGVsbV9iKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cbksubWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnIgPSBLLmNvbW1vbkRpdmlzb3JzKGEsIGIpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cbksubXVsdGlwbGUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBNQVg7IGkrKyl7XG4gICAgYXJyLnB1c2gobiAqIGkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5LLmxlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgbGV0IGJpZztcbiAgaWYoIGEgPCBiKXtcbiAgICBiaWcgPSBiO1xuICB9ZWxzZXtcbiAgICBiaWcgPSBhO1xuICB9XG4gIGNvbnN0IGFycl9hID0gW107XG4gIGNvbnN0IGFycl9iID0gW107XG5cbiAgbGV0IGkgPTE7XG4gIHdoaWxlKGkgPD0gYmlnKXtcbiAgICBhcnJfYS5wdXNoKCBhICogaSk7XG4gICAgaSsrO1xuICB9XG4gIGxldCBqID0xO1xuICB3aGlsZShqIDw9IGJpZyl7XG4gICAgYXJyX2IucHVzaCggYiAqIGopO1xuICAgIGorKztcbiAgfVxuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIHJldHVybiBlbG1fYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gZmlib25hY2NpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogS1xufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWDogMTAwMDAsXG4gIE1JTjogLTEwMDAwLFxuICBEQlo6IFwiRGl2aXNpb24gYnkgWmVyb1wiLFxuICBOQU46IFwiTm90IGEgbnVtYmVyXCIsXG4gIE5PVFNVOiBcIkFyZ3VtZW50IGlzIG5vdCBTdS5cIlxufVxuIiwiY29uc3QgY29yZSA9IHt9O1xuXG5jb3JlLmlzTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKXtcbiAgaWYoIG4gPT09IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vLyDphY3liJfjgafjga7oqIjnrpdcbmNvcmUubnVtVG9BcnJheSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKG4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IE51bWJlcihzdHIuc2xpY2UoaSwgaSArIDEpKTtcbiAgICBpZighdGhpcy5pc051bWJlcihlbG0pKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIik7XG4gICAgfVxuICAgIGFyci5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBzIGZyb20gXCIuL3N1LmpzXCI7XG5cbihmdW5jdGlvbihnbG9iYWwsIHMpe1xuICBnbG9iYWwucyA9IHM7XG59KShnbG9iYWwgfHwgc2VsZiwgcyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IFNLIGZyb20gXCIuL1NLLmpzXCI7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IE1BWCA9IGNvbnN0YW50cy5NQVg7XG5jb25zdCBNSU4gPSBjb25zdGFudHMuTUlOO1xuY29uc3QgREJaID0gY29uc3RhbnRzLkRCWjtcbmNvbnN0IE5BTiA9IGNvbnN0YW50cy5OQU47XG5jb25zdCBOT1RTVSA9IGNvbnN0YW50cy5OT1RTVTtcblxuY29uc3QgSyA9IFNLLks7IFxuY29uc3QgUyA9IFNLLlM7XG5cbmNvbnN0IFN1ID0gZnVuY3Rpb24obiwgb3B0aW9uKXtcbiAgaWYoaXNOYU4obikpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG4gIGlmKCFuKXtcbiAgICBuID0gMDtcbiAgfVxuICBpZighb3B0aW9uKXtcbiAgICBvcHRpb24gPSB7fTtcbiAgfVxuXG4gIGxldCBzdHIgPSBTdHJpbmcobik7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKHN0clswXSA9PT0gXCItXCIpe1xuICAgIHN0ciA9IHN0ci5zbGljZSgxLCBzdHIubGVuZ3RoKTtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgaWYoIW5lZ2F0aXZlICYmIG9wdGlvbiAmJiBvcHRpb24ubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKGlzTmFOKE51bWJlcihzdHIpKSl7XG4gICAgc3RyID0gXCIwXCI7XG4gIH1cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IHN0ci5zcGxpdChcIi5cIik7XG4gIGxldCBpbnRfc3RyID0gcGFydHNbMF07XG4gIGxldCBkZWNpbWFsX3N0ciA9IHBhcnRzWzFdO1xuICBpZihpbnRfc3RyKXtcbiAgICBjb25zdCBpbnQwID0gaW50X3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihpbnQwICYmIGludDAubGVuZ3RoID09PSBpbnRfc3RyLmxlbmd0aCl7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBuZXdfaW50X3N0ciA9IFwiXCI7XG4gICAgbGV0IHN0YXJ0X3plcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPGludF9zdHIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoaW50X3N0cltpXSAhPT0gXCIwXCIgfHwgIXN0YXJ0X3plcm8pe1xuICAgICAgICBzdGFydF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19pbnRfc3RyICs9IGludF9zdHJbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfaW50X3N0cil7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBpbnRfc3RyID0gbmV3X2ludF9zdHI7XG4gICAgfVxuICB9XG5cbiAgaWYoZGVjaW1hbF9zdHIpe1xuICAgIGNvbnN0IGRlYzAgPSBkZWNpbWFsX3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihkZWMwICYmIGRlYzAubGVuZ3RoID09PSBkZWNpbWFsX3N0ci5sZW5ndGgpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IGVuZF96ZXJvID0gdHJ1ZTtcbiAgICBsZXQgbmV3X2RlY2ltYWxfc3RyID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSBkZWNpbWFsX3N0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICBpZihkZWNpbWFsX3N0cltpXSAhPT0gXCIwXCIgfHwgIWVuZF96ZXJvKXtcbiAgICAgICAgZW5kX3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2RlY2ltYWxfc3RyID0gZGVjaW1hbF9zdHJbaV0gKyBuZXdfZGVjaW1hbF9zdHI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfZGVjaW1hbF9zdHIpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGRlY2ltYWxfc3RyID0gbmV3X2RlY2ltYWxfc3RyO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGludF9hcnI7XG4gIGxldCBkZWNpbWFsX2FycjtcblxuXG4gIHRyeXtcbiAgICBpbnRfYXJyID0gY29yZS5udW1Ub0FycmF5KGludF9zdHIpO1xuICAgIGRlY2ltYWxfYXJyID0gZGVjaW1hbF9zdHIgPyBjb3JlLm51bVRvQXJyYXkoZGVjaW1hbF9zdHIpIDogWzBdO1xuICB9Y2F0Y2goZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cblxuICB0aGlzLmludGVnZXIgPSBpbnRfYXJyO1xuICB0aGlzLmRlY2ltYWwgPSBkZWNpbWFsX2FycjtcbiAgdGhpcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlID8gdHJ1ZSA6IGZhbHNlO1xuICBcbiAgbGV0IGRlbm9taW5hdG9yID0gWzFdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2ltYWwubGVuZ3RoOyBpKyspe1xuICAgIGRlbm9taW5hdG9yLnB1c2goMCk7XG4gIH1cblxuICB0aGlzLmZyYWN0aW9uID0ge1xuICAgIG51bWVyYXRvcjogdGhpcy5pbnRlZ2VyLmNvbmNhdCh0aGlzLmRlY2ltYWwpLFxuICAgIGRlbm9taW5hdG9yOiBkZW5vbWluYXRvclxuICB9O1xuXG59O1xuXG5jb25zdCBtYWtlU3UgPSBmdW5jdGlvbihudW0sIG9wdGlvbil7XG4gIGxldCByZXM7XG4gIHRyeXtcbiAgICByZXMgPSBuZXcgU3UobnVtLCBvcHRpb24pO1xuICB9Y2F0Y2goZSl7XG4gICAgcmVzID0gZS5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuY29uc3QgaXNTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoc3UgaW5zdGFuY2VvZiBTdSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGNvcHlTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgc3RyID0gc3UuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgWkVSTzogbWFrZVN1KDApLFxuICBPTkU6IG1ha2VTdSgxKSxcbiAgRklSU1RfUFJJTUVfTlVNQkVSOiBtYWtlU3UoMiksXG4gIE1BWDogbWFrZVN1KE1BWCksXG4gIE1JTjogbWFrZVN1KE1JTilcbn07XG5cblxuU3UucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdHIgPSBTdHJpbmcoIHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgY29uc3QgYWMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKChhLGUpID0+IGEgKyBlKTtcbiAgaWYoYWMgIT09IDApe1xuICAgIHN0ciArPSBcIi5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLm5lZ2F0aXZlID8gYC0ke3N0cn1gIDogc3RyO1xufTtcblxuU3UucHJvdG90eXBlLmdldE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmdldFN0cmluZygpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXREZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKFwiMC5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldExhcmdlID0gZnVuY3Rpb24oYSwgYiwgYWJzb2x1dGUgPSBmYWxzZSl7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGxldCBmaWVsZCA9IFtdO1xuXG4gIGNvbnN0IF9hID0gbWFrZVN1KGEuZ2V0U3RyaW5nKCkpO1xuICBjb25zdCBfYiA9IG1ha2VTdShiLmdldFN0cmluZygpKTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgX2EubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBfYi5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYoX2EuaXNaZXJvKCkgJiYgX2IuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmICFfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGI7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihfYS5pbnRlZ2VyLmxlbmd0aCA+IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLmludGVnZXIubGVuZ3RoIDwgX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBfYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBfYS5pbnRlZ2VyW2ldO1xuICAgIGxldCBlbG1fYiA9IF9iLmludGVnZXJbaV07XG4gICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIGNvbnN0IGxlbiA9IF9hLmRlY2ltYWwubGVuZ3RoID49IF9iLmRlY2ltYWwubGVuZ3RoID8gX2EuZGVjaW1hbC5sZW5ndGggOiBfYi5kZWNpbWFsLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGVsbV9hID0gX2EuZGVjaW1hbFtpXSA/IF9hLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgbGV0IGVsbV9iID0gX2IuZGVjaW1hbFtpXSA/IF9iLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZFswXTtcblxufTtcblxuXG5TdS5wcm90b3R5cGUuaXNFcXVhbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGEuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1NtYWxsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGIuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzUG9zaXRpdmUoKSAmJiB0aGlzLmlzSW50ZWdlcigpICYmIHRoaXMuaXNMYXJnZShDT05TVEFOVFMuWkVSTykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuY29udGFpbkRlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKGZ1bmN0aW9uKGEsIHYpe1xuICAgICAgcmV0dXJuIGEgKyB2O1xuICB9KTtcbiAgaWYocmVzID09PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGxldCBiID0gc3UuY2xvbmUoKTtcbiAgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgbmVnYXRpdmU7XG4gIGlmKGEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgYi5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYS5zdWJ0cmFjdChiKTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgYS5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYi5zdWJ0cmFjdChhKTtcbiAgfVxuXG4gIGxldCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmVzID0gYTtcbiAgfVxuICBsZXQgaW50X2EgPSByZXMuaW50ZWdlcjtcbiAgbGV0IGRlY19hID0gcmVzLmRlY2ltYWw7XG4gIGxldCBpbnRfYiwgZGVjX2I7XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgaW50X2IgPSBiLmludGVnZXI7XG4gICAgZGVjX2IgPSBiLmRlY2ltYWw7XG4gIH1lbHNle1xuICAgIGludF9iID0gYS5pbnRlZ2VyO1xuICAgIGRlY19iID0gYS5kZWNpbWFsO1xuICB9XG5cbiAgbGV0IGxlbl9pID0gaW50X2EubGVuZ3RoO1xuICBsZXQgbGVuX2QgPSBkZWNfYS5sZW5ndGg7XG5cbiAgaWYoZGVjX2IubGVuZ3RoID4gZGVjX2EubGVuZ3RoKXtcbiAgICBsZW5fZCA9IGRlY19iLmxlbmd0aDtcbiAgfVxuICBsZXQgb3ZlciA9IDAsXG4gICAgICBpbnRfcmVzID0gW10sXG4gICAgICBkZWNfcmVzID0gW107XG5cbiAgZm9yKGxldCBpID0gbGVuX2QgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gZGVjX2FbaV0gfHwgMDtcbiAgICBsZXQgZWxtX2IgPSBkZWNfYltpXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBkZWNfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cblxuICBmb3IobGV0IGkgPSBkZWNfcmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICl7XG4gICAgbGV0IGQgPSBkZWNfcmVzW2ldO1xuICAgIGlmKGQgPT09IDApe1xuICAgICAgZGVjX3Jlcy5wb3AoKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdhcCA9IGxlbl9pIC0gaW50X2IubGVuZ3RoO1xuICBmb3IobGV0IGkgPSBsZW5faSAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBpbnRfYVtpXTtcbiAgICBsZXQgZWxtX2IgPSBpbnRfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBpbnRfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGludF9yZXMudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShpbnRfcmVzLmpvaW4oXCJcIikgKyBcIi5cIiArIGRlY19yZXMuam9pbihcIlwiKSwge25lZ2F0aXZlOiBuZWdhdGl2ZX0pO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcblxuICBjb25zdCByZXN1bHQgPSAgbWFrZVN1KG1pbnVzICsgcmVzX2FycmF5LmpvaW4oXCJcIikpO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHRoaXMubmV2YXRpdmUgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZVBvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZU5lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuXG4gIGlmKGEuaXNaZXJvKCkgJiYgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIE5BTjtcbiAgfWVsc2UgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfWVsc2UgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIERCWjtcbiAgfVxuXG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gbWFrZVN1KDApO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICB3aGlsZShhLmlzTGFyZ2Uoc3VtKSB8fCBhLmlzRXF1YWwoc3VtKSl7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KDEpKTtcbiAgICBzdW0gPSBiLm11bHRpcGxpY2F0aW9uKGNvdW50KTtcbiAgfVxuXG4gIGNvdW50ID0gY291bnQuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgc3VtID0gc3VtLnN1YnRyYWN0KGIpO1xuICBjb25zdCByZW1haW4gPSBhLnN1YnRyYWN0KHN1bSk7XG4gIGNvbnN0IHJlcyA9IGNvdW50O1xuICByZXMucmVtYWluZGVyID0gcmVtYWluO1xuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuU3UucHJvdG90eXBlLnBsdXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUudGFzdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmhpa3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmtha2VydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLndhcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmRpdmlzaW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuYWRkKG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBcbiAgaWYoIHJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09kZE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIGlmKCAhcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldERpdmlzb3JzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IHRoaXMuaXNMYXJnZShtYWtlU3UoaSkpOyBpKyspe1xuICAgIGxldCBzdSA9IG1ha2VTdShpKTtcbiAgICBjb25zdCByZW1haW5kZXIgPSB0aGlzLmRpdmlzaW9uKHN1KS5yZW1haW5kZXI7XG4gICAgaWYocmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgYXJyLnB1c2godGhpcyk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0Q29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgbGV0IGEgPSB0aGlzO1xuICBsZXQgYiA9IHN1O1xuXG4gIGNvbnN0IGFycl9hID0gYS5nZXREaXZpc29ycygpO1xuICBpZihhLmlzRXF1YWwoYikpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IGIuZ2V0RGl2aXNvcnMoKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGVsbV9iID0gYXJyX2Jbal07XG4gICAgICBpZihlbG1fYS5pc0VxdWFsKGVsbV9iKSl7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cbiAgY29uc3QgYXJyID0gdGhpcy5nZXRDb21tb25EaXZpc29ycyhzdSk7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGNvdW50ID0gbWFrZVN1KFwiMVwiKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSB8fCBjb3VudC5pc0VxdWFsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBhcnIucHVzaCh0aGlzLm11bHRpcGxpY2F0aW9uKGNvdW50KSk7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KFwiMVwiKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRMZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG5cbiAgY29uc3QgbWF4Q29tbW9uRGl2aXNvciA9IGEuZ2V0TWF4Q29tbW9uRGl2aXNvcihiKTtcblxuICBjb25zdCBtdWx0aSA9IGEubXVsdGlwbHkoYik7XG5cbiAgY29uc3QgcmVzID0gbXVsdGkuZGl2aXNpb24obWF4Q29tbW9uRGl2aXNvcik7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuXG5jb25zdCBtYWtlRmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihhLCBiKXtcblxuICBpZighaXNTdShhKSB8fCAhaXNTdShiKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbYSwgYl07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuXG4gIGNvbnN0IGZpYnMgPSBtYWtlRmlib25hY2NpU2VxdWVuY2UoemVybywgb25lKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGZpYnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gZmlic1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5sdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFttYWtlU3UoMiksIG1ha2VTdSgxKV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IHRoaXMubHVjYXNTZXF1ZW5jZSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGx1Y3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gbHVjc1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5sdWNhc1ByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGxzID0gdGhpcy5sdWNhc1NlcXVlbmNlKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBscy5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbCA9IGxzW2ldO1xuICAgIGlmKGwuaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKGwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFt0aGlzXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbSA9IGFyZ3VtZW50c1tpXTtcbiAgICBpZighaXNTdShlbG0pKXtcbiAgICAgIGVsbSA9IG1ha2VTdShlbG0pO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcblxuU3UucHJvdG90eXBlLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0U2VxdWVuY2UoLi4uYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXRTZXF1ZW5jZSguLi5hcmd1bWVudHMpO1xuICBsZXQgaXAgPSBhcnJbMF07XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGlwID0gaXAubXVsdGlwbGljYXRpb24oYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5TdS5wcm90b3R5cGUuZGlnaXRzdW0gPSBmdW5jdGlvbigpe1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGEgPSBtYWtlU3UodGhpcy5hcnJheVtpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGxldCBlbG0gPSBtYWtlU3UoMSk7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgYiA9IHRydWU7XG4gIHdoaWxlKGIpe1xuICAgIHJlcyA9IHJlcy5zdWJ0cmFjdChlbG0pO1xuICAgIGlmKHJlcy5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYocmVzLmlzU21hbGwobWFrZVN1KDApKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsbSA9IGVsbS5hZGQobWFrZVN1KDEpKTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldFRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmdldFBvbHlnb25hbE51bWJlcnMobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRTcXVhcmVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZ2V0UG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCkpO1xufTtcblxuU3UucHJvdG90eXBlLmdldFBvbHlnb25hbE51bWJlcnMgPSBmdW5jdGlvbihuKXtcbiAgaWYoIWlzU3Uobikpe1xuICAgIG4gPSBtYWtlU3Uobik7XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gbi5zdWJ0cmFjdChtYWtlU3UoMikpO1xuICB3aGlsZShjdXJyZW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLm1lcnNlbm5lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGN1cnJlbnQgPSB0d28uZXhwb25lbnRpYXRlKGV4KS5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gZXguYWRkKG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5tZXJzZW5uZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG1hcnIgPSB0aGlzLm1lcnNlbm5lTnVtYmVycygpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gdGhpcy5tZXJzZW5uZU51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSB0aGlzLm1lcnNlbm5lUHJpbWVOdW1iZXJzKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSBtYWtlU3UoMCk7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IG1ha2VTdSgxKTtcbiAgfVxuICBpZighaXNTdShtaW4pKXtcbiAgICBtaW4gPSBtYWtlU3UobWluKTtcbiAgfVxuICBpZighaXNTdShtYXgpKXtcbiAgICBtYXggPSBtYWtlU3UobWF4KTtcbiAgfVxuXG4gIGNvbnN0IHN0ciA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IHJhbjtcblxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBpZihtaW4uaXNaZXJvKCkpe1xuICAgICAgcmFuID0gbWFrZVN1KDApO1xuICAgIH1lbHNle1xuICAgICAgcmFuID0gbWluO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgcmFuID0gbWFrZVN1KFwiMC5cIiArIGFyclsxXSkubXVsdGlwbGljYXRpb24obWF4KTtcbiAgfVxuICByZXR1cm4gcmFuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIEtlaTogSyxcbiAgU3U6IFN1LFxuICBnZXRMYXJnZTogZ2V0TGFyZ2Vcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==