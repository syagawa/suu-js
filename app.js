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

  for (var i = 1; i < MAX; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJNQVgiLCJDT05TVEFOVFMiLCJNSU4iLCJTIiwiSyIsIm1ha2VTdSIsInN1IiwiY29weVN1IiwiaXNTdSIsIlN1IiwiRklSU1RfUFJJTUVfTlVNQkVSIiwicmFuZG9tIiwibWluIiwibWF4IiwidW5kZWZpbmVkIiwic3RyIiwiU3RyaW5nIiwiTWF0aCIsInJhbiIsImlzWmVybyIsImFyciIsInNwbGl0IiwibXVsdGlwbGljYXRpb24iLCJyYW5kb21FbGVtZW50IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaW50ZWdlciIsInJhbmRvbUludCIsImlzRXF1YWwiLCJpc0xhcmdlIiwiZ2V0TnVtYmVyIiwicyIsInB1c2giLCJyZXMiLCJtYWtlUHJpbWVOdW1iZXJzIiwiaXNQcmltZU51bWJlciIsImV1Y2xpZGVhbkFsZ29yaXRobSIsImEiLCJiIiwiaXNOdW1iZXIiLCJ0ZW1wIiwiYXRlbXAiLCJidGVtcCIsImN0ZW1wIiwiY291bnRlciIsImNvcHJpbWUiLCJjb21tb25EaXZpc29ycyIsImFycl9hIiwiZGl2aXNvcnMiLCJhcnJfYiIsImRpdnMiLCJrIiwiZWxtX2EiLCJsIiwiZWxtX2IiLCJtYXhDb21tb25EaXZpc29yIiwibXVsdGlwbGUiLCJuIiwibGVhc3RDb21tb25NdWx0aXBsZSIsImJpZyIsImoiLCJzdW1tYXRpb24iLCJhcmd1bWVudHMiLCJzdW0iLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwiTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwicG93IiwiZ2V0SW5jbHVkZXNOdW1iZXJzIiwiYm9vbCIsImFyIiwiYXJyYXlTdW1tYXRpb24iLCJBcnJheSIsImNvcmUiLCJudW1Ub0FycmF5IiwiaXNOdW1BcnJheSIsInN0cmluZyIsIm51bWJlciIsIkEiLCJCIiwiY29uc29sZSIsImxvZyIsImdldExhcmdlciIsImdhcCIsIm92ZXIiLCJhcnJfYyIsIl9yZXMiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsIk5hTiIsInNsaWNlIiwiRXJyb3IiLCJnbG9iYWwiLCJTSyIsInNlbGYiLCJjb25zdGFudHMiLCJvcHRpb24iLCJuZWdhdGl2ZSIsInBhcnRzIiwiaW50X3N0ciIsImRlY2ltYWxfc3RyIiwiaW50MCIsIm1hdGNoIiwibmV3X2ludF9zdHIiLCJzdGFydF96ZXJvIiwiZGVjMCIsImVuZF96ZXJvIiwibmV3X2RlY2ltYWxfc3RyIiwiaW50X2FyciIsImRlY2ltYWxfYXJyIiwiZSIsImRlY2ltYWwiLCJkZW5vbWluYXRvciIsImZyYWN0aW9uIiwibnVtZXJhdG9yIiwiY29uY2F0IiwibWVzc2FnZSIsImdldFN0cmluZyIsIlpFUk8iLCJPTkUiLCJwcm90b3R5cGUiLCJhYyIsInJlZHVjZSIsImdldEludGVnZXIiLCJnZXREZWNpbWFsIiwiY2xvbmUiLCJnZXRMYXJnZSIsImFic29sdXRlIiwiZmllbGQiLCJfYSIsIl9iIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwibGFyZ2UiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNTbWFsbCIsImlzUG9zaXRpdmUiLCJpc05lZ2F0aXZlIiwidiIsImFkZCIsIm1ha2VQb3NpdGl2ZSIsInN1YnRyYWN0IiwiaW50X2EiLCJkZWNfYSIsImludF9iIiwiZGVjX2IiLCJsZW5faSIsImxlbl9kIiwiaW50X3JlcyIsImRlY19yZXMiLCJkIiwicG9wIiwibmVnYXRlIiwiYV9pZCIsImJfaWQiLCJhX2lfbGVuIiwiYl9pX2xlbiIsImFfZF9sZW4iLCJiX2RfbGVuIiwiZF9nYXAiLCJhYnMiLCJkZWJ0IiwicmVzX2FycmF5IiwiYV9lbG0iLCJiX2VsbSIsInNwbGljZSIsIm1pbnVzIiwibmV2YXRpdmUiLCJtYWtlTmVnYXRpdmUiLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJtYWtlRmlib25hY2NpU2VxdWVuY2UiLCJmdW5jIiwiYyIsIm1ha2VMdWNhc1NlcXVlbmNlIiwiaXNGaWJvbmFjY2lOdW1iZXIiLCJ6ZXJvIiwib25lIiwiZmlicyIsImlzTHVjYXNOdW1iZXIiLCJsdWNzIiwibWFrZVNlcXVlbmNlIiwib3RoZXJzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsIm1ha2VQb2x5Z29uYWxOdW1iZXJzIiwiY3VycmVudCIsInJhbmdlIiwiaW5jcmVtZW50IiwibWFrZVRyaWFuZ2xlTnVtYmVycyIsIm1ha2VTcXVhcmVOdW1iZXJzIiwiaXNUcmlhbmdsZU51bWJlciIsImZpbmQiLCJpc1NxdWFyZU51bWJlciIsIm1ha2VNZXJzZW5uZU51bWJlcnMiLCJ0d28iLCJleCIsIm1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyIsIm1hcnIiLCJpc01lcnNlbm5lTnVtYmVyIiwibXMiLCJtIiwiaXNNZXJzZW5uZVByaW1lTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FB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RUFBc0I7QUFDcEIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTThGLEVBQUUsR0FBR0gsd0JBQXdCLENBQUNoTixDQUFELENBQW5DOztBQUNBLE9BQUksSUFBSWpDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR29QLEVBQUUsQ0FBQ25QLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQWtDO0FBQ2hDLFFBQUlxUCxDQUFDLEdBQUdELEVBQUUsQ0FBQ3BQLENBQUQsQ0FBVjs7QUFDQSxRQUFHcVAsQ0FBQyxDQUFDalAsT0FBRixDQUFVNkIsQ0FBVixDQUFILEVBQWdCO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQWhCRDs7QUFtQmU7QUFDYnJELFFBQU0sRUFBRUEsTUFESztBQUViRSxRQUFNLEVBQUVBLE1BRks7QUFHYkMsTUFBSSxFQUFFQSxJQUhPO0FBSWJDLElBQUUsRUFBRUE7QUFKUyxDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgc3UgZnJvbSBcIi4vc3UuanNcIjtcblxuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcbmNvbnN0IE1JTiA9IENPTlNUQU5UUy5NSU47XG5cbmNvbnN0IFMgPSB7fTtcbmNvbnN0IEsgPSB7fTtcblxuY29uc3QgbWFrZVN1ID0gc3UubWFrZVN1O1xuY29uc3QgY29weVN1ID0gc3UuY29weVN1O1xuY29uc3QgaXNTdSA9IHN1LmlzU3U7XG5jb25zdCBTdSA9IHN1LlN1O1xuXG5jb25zdCBGSVJTVF9QUklNRV9OVU1CRVIgPSAyO1xuXG5cbksucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gbWFrZVN1KDApO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSBtYWtlU3UoMSk7XG4gIH1cbiAgaWYoIWlzU3UobWluKSl7XG4gICAgbWluID0gbWFrZVN1KG1pbik7XG4gIH1cbiAgaWYoIWlzU3UobWF4KSl7XG4gICAgbWF4ID0gbWFrZVN1KG1heCk7XG4gIH1cblxuICBjb25zdCBzdHIgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gIGxldCByYW47XG5cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgaWYobWluLmlzWmVybygpKXtcbiAgICAgIHJhbiA9IG1ha2VTdSgwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJhbiA9IG1pbjtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICAgIHJhbiA9IG1ha2VTdShcIjAuXCIgKyBhcnJbMV0pLm11bHRpcGxpY2F0aW9uKG1heCk7XG4gIH1cbiAgcmV0dXJuIHJhbjtcbn07XG5cbksucmFuZG9tRWxlbWVudCA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgY29uc3QgaSA9IEsucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCkuaW50ZWdlcjtcbiAgcmV0dXJuIGFycmF5W2ldO1xufTtcblxuSy5yYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYoICFpc1N1KG1pbikgfHwgIWlzU3UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKG1pbi5pc0VxdWFsKG1heCkgfHwgbWluLmlzTGFyZ2UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbi5nZXROdW1iZXIoKTsgaSA8PSBtYXguZ2V0TnVtYmVyKCk7IGkrKyl7XG4gICAgY29uc3QgcyA9IG1ha2VTdShpKTtcbiAgICBhcnIucHVzaChzKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IEsucmFuZG9tRWxlbWVudChhcnIpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG5LLm1ha2VQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBjb25zdCBNQVggPSAxMDA7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBpZihtYXggPiBNQVgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgbWF4OyBpKyspe1xuICAgIGNvbnN0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGlmKHN1LmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLmNvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFycl9hID0gSy5kaXZpc29ycyhhKTtcbiAgaWYoYSA9PT0gYil7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gSy5kaXZpc29ycyhiKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBrID0gMDsgayA8IGFycl9hLmxlbmd0aDsgaysrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2tdO1xuICAgIGZvcihsZXQgbCA9IDA7IGwgPCBhcnJfYi5sZW5ndGg7IGwrKyl7XG4gICAgICBjb25zdCBlbG1fYiA9IGFycl9iW2xdO1xuICAgICAgaWYoZWxtX2EgPT09IGVsbV9iKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cbksubWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnIgPSBLLmNvbW1vbkRpdmlzb3JzKGEsIGIpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cbksubXVsdGlwbGUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBNQVg7IGkrKyl7XG4gICAgYXJyLnB1c2gobiAqIGkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5LLmxlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgbGV0IGJpZztcbiAgaWYoIGEgPCBiKXtcbiAgICBiaWcgPSBiO1xuICB9ZWxzZXtcbiAgICBiaWcgPSBhO1xuICB9XG4gIGNvbnN0IGFycl9hID0gW107XG4gIGNvbnN0IGFycl9iID0gW107XG5cbiAgbGV0IGkgPTE7XG4gIHdoaWxlKGkgPD0gYmlnKXtcbiAgICBhcnJfYS5wdXNoKCBhICogaSk7XG4gICAgaSsrO1xuICB9XG4gIGxldCBqID0xO1xuICB3aGlsZShqIDw9IGJpZyl7XG4gICAgYXJyX2IucHVzaCggYiAqIGopO1xuICAgIGorKztcbiAgfVxuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIHJldHVybiBlbG1fYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gZmlib25hY2NpXG5cblxuXG5cblxuXG5cbi8vIHRvZG8gMHN0YXJ0XG5jb25zdCBhcnJheVN1bW1hdGlvbiA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIShhIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYSA9IGNvcmUubnVtVG9BcnJheShhKTtcbiAgfVxuICBpZiggIShiIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYiA9IGNvcmUubnVtVG9BcnJheShiKTtcbiAgfVxuXG4gIGlmKCFjb3JlLmlzTnVtQXJyYXkoYSkgfHwgIWNvcmUuaXNOdW1BcnJheShiKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKGFbMF0pICYmIGNvcmUuaXNaZXJvKGJbMF0pKXtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyYXk6IFswXSxcbiAgICAgIHN0cmluZzogXCIwXCIsXG4gICAgICBudW1iZXI6IDAsXG4gICAgICBsZW5ndGg6IDFcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgQSA9IG1ha2VTdShhKTtcbiAgY29uc3QgQiA9IG1ha2VTdShiKTtcblxuICBjb25zb2xlLmxvZyhBLEIpO1xuXG4gIGNvbnN0IHJlcyA9IGNvcmUuZ2V0TGFyZ2VyKGEsIGIpO1xuICBjb25zdCBhcnJfYSA9IHJlc1swXTtcbiAgY29uc3QgYXJyX2IgPSByZXNbMV07XG4gIGNvbnN0IGxlbiA9IGFycl9hLmxlbmd0aDtcblxuICBjb25zdCBnYXAgPSBsZW4gLSBhcnJfYi5sZW5ndGg7XG5cbiAgbGV0IG92ZXIgPSAwLCBhcnJfYyA9IFtdO1xuICBmb3IobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBjb25zdCBlbG1fYiA9IGFycl9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGFycl9jLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGFycl9jLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoYXJyX2MpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRMYXJnZXIgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyX2EgPSBbXSwgYXJyX2IgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYVtpXTtcbiAgICBpZihlbG1fYSA9PT0gMCAmJiBhcnJfYS5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9hID49ICAwICYmIGVsbV9hIDwgMTApe1xuICAgICAgYXJyX2EucHVzaChlbG1fYSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9iID0gYltpXTtcbiAgICBpZihlbG1fYiA9PT0gMCAmJiBhcnJfYi5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9iID49ICAwICYmIGVsbV9iIDwgMTApe1xuICAgICAgYXJyX2IucHVzaChlbG1fYik7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcztcbiAgaWYoYXJyX2EubGVuZ3RoID4gYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYSwgYl07XG4gIH1lbHNlIGlmKGFycl9hLmxlbmd0aCA8IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2IsIGFdO1xuICB9ZWxzZXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtX2FhID0gYXJyX2FbaV07XG4gICAgICBjb25zdCBlbG1fYmIgPSBhcnJfYltpXTtcbiAgICAgIGlmKGVsbV9hYSA+IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYWEgPCBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFM6IFMsXG4gIEs6IEtcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUuaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG4gICAgYXJyLnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29yZS5pc051bUFycmF5ID0gZnVuY3Rpb24oYXJyKXtcbiAgaWYoIGFyciBpbnN0YW5jZW9mIEFycmF5ICl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiggIXRoaXMuaXNOdW1iZXIoYXJyW2ldKSApe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IHMgZnJvbSBcIi4vc3UuanNcIjtcbmltcG9ydCBTSyBmcm9tIFwiLi9TSy5qc1wiO1xuXG4oZnVuY3Rpb24oZ2xvYmFsLCBzKXtcbiAgZ2xvYmFsLnMgPSBzO1xuICBnbG9iYWwuSyA9IFNLLks7XG59KShnbG9iYWwgfHwgc2VsZiwgcyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBNQVggPSBjb25zdGFudHMuTUFYO1xuY29uc3QgTUlOID0gY29uc3RhbnRzLk1JTjtcbmNvbnN0IERCWiA9IGNvbnN0YW50cy5EQlo7XG5jb25zdCBOQU4gPSBjb25zdGFudHMuTkFOO1xuY29uc3QgTk9UU1UgPSBjb25zdGFudHMuTk9UU1U7XG5cblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZihpc05hTihuKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FycjtcbiAgbGV0IGRlY2ltYWxfYXJyO1xuXG5cbiAgdHJ5e1xuICAgIGludF9hcnIgPSBjb3JlLm51bVRvQXJyYXkoaW50X3N0cik7XG4gICAgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG4gIH1jYXRjaChlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgbGV0IHJlcztcbiAgdHJ5e1xuICAgIHJlcyA9IG5ldyBTdShudW0sIG9wdGlvbik7XG4gIH1jYXRjaChlKXtcbiAgICByZXMgPSBlLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmUgPyBgLSR7c3RyfWAgOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgY29uc3QgX2EgPSBtYWtlU3UoYS5nZXRTdHJpbmcoKSk7XG4gIGNvbnN0IF9iID0gbWFrZVN1KGIuZ2V0U3RyaW5nKCkpO1xuXG4gIGlmKGFic29sdXRlKXtcbiAgICBfYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIF9iLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihfYS5pc1plcm8oKSAmJiBfYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgIV9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKF9hLmludGVnZXIubGVuZ3RoID4gX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EuaW50ZWdlci5sZW5ndGggPCBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IF9hLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IF9hLmludGVnZXJbaV07XG4gICAgbGV0IGVsbV9iID0gX2IuaW50ZWdlcltpXTtcbiAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gX2EuZGVjaW1hbC5sZW5ndGggPj0gX2IuZGVjaW1hbC5sZW5ndGggPyBfYS5kZWNpbWFsLmxlbmd0aCA6IF9iLmRlY2ltYWwubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgZWxtX2EgPSBfYS5kZWNpbWFsW2ldID8gX2EuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBfYi5kZWNpbWFsW2ldID8gX2IuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZihuZWdhdGl2ZSl7XG4gICAgZmllbGQgPSBbZmllbGRbMV0sIGZpZWxkWzBdXTtcbiAgfVxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkWzBdO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgaV9hID0gYS5pbnRlZ2VyO1xuICBjb25zdCBpX2IgPSBiLmludGVnZXI7XG4gIGNvbnN0IGRfYSA9IGEuZGVjaW1hbDtcbiAgY29uc3QgZF9iID0gYi5kZWNpbWFsO1xuXG4gIGNvbnN0IGxhcmdlID0gZ2V0TGFyZ2UoYSwgYik7XG5cbiAgaWYoIWxhcmdlKXtcbiAgICBpZihpX2EubGVuZ3RoID09PSBpX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpX2FbaV0gIT09IGlfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2UgaWYoZF9hLmxlbmd0aCA9PT0gZF9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZF9hW2ldICE9PSBkX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGEubmVnYXRpdmUgPT09IGIubmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuU3UucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaW50ZWdlci5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnRlZ2VyWzBdID09PSAwICYmICF0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09uZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjFcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTGFyZ2UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYS5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYi5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNQb3NpdGl2ZSgpICYmIHRoaXMuaXNJbnRlZ2VyKCkgJiYgdGhpcy5pc0xhcmdlKENPTlNUQU5UUy5aRVJPKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGRwX2EgPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBkcF9iID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCByZXNfYXJyID0gW107XG4gIGZvcihsZXQgaV9hID0gMDsgaV9hIDwgYV9pZC5sZW5ndGg7IGlfYSsrKXtcbiAgICBmb3IobGV0IGlfYiA9IDA7IGlfYiA8IGJfaWQubGVuZ3RoOyBpX2IrKyl7XG4gICAgICBjb25zdCBlbG1fYSA9IGFfaWRbaV9hXTtcbiAgICAgIGNvbnN0IGVsbV9iID0gYl9pZFtpX2JdO1xuICAgICAgY29uc3QgcG9zX2EgPSBkcF9hIC0gaV9hIC0xO1xuICAgICAgY29uc3QgcG9zX2IgPSBkcF9iIC0gaV9iIC0xO1xuICAgICAgY29uc3QgcG9zID0gcG9zX2EgKyBwb3NfYjtcbiAgICAgIGxldCByZXMgPSBlbG1fYSAqIGVsbV9iO1xuICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHBvcyk7XG4gICAgICBsZXQgc3RyO1xuICAgICAgaWYocG9zID49IDApe1xuICAgICAgICBsZW4rKztcbiAgICAgICAgaWYocmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiArIDEsIFwiMFwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobGVuID09PSAxICYmIHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpWzBdICsgXCIuXCIgKyBTdHJpbmcocmVzKVsxXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gXCIwLlwiICsgU3RyaW5nKHJlcykucGFkU3RhcnQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc19hcnIucHVzaChtYWtlU3Uoc3RyKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcyA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc19hcnIubGVuZ3RoOyBpKyspe1xuICAgIHJlcyA9IHJlcy5hZGQocmVzX2FycltpXSk7XG4gIH1cblxuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY291bnQgPSBtYWtlU3UoXCIxXCIpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpIHx8IGNvdW50LmlzRXF1YWwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oY291bnQpKTtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoXCIxXCIpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGEsIGIpe1xuXG4gIGlmKCFpc1N1KGEpIHx8ICFpc1N1KGIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFthLCBiXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5cbmNvbnN0IG1ha2VMdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZShtYWtlU3UoMiksIG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG5cbiAgY29uc3QgZmlicyA9IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSh6ZXJvLCBvbmUpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IG1ha2VMdWNhc1NlcXVlbmNlKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsdWNzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGx1Y3NbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmNvbnN0IG1ha2VTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0LCBvdGhlcnMpe1xuICBjb25zdCBhcnJheSA9IFtmaXJzdF07XG4gIGlmKCFvdGhlcnMpe1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgb3RoZXJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gb3RoZXJzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblN1LnByb3RvdHlwZS5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBhID0gbWFrZVN1KHRoaXMuaW50ZWdlcltpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBtYWtlUG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFpc1N1KG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IGluY3JlbWVudCA9IG4uc3VidHJhY3QobWFrZVN1KDIpKTtcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZVRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMyksIG1heCk7XG59O1xuXG5jb25zdCBtYWtlU3F1YXJlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCksIG1heCk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVRyaWFuZ2xlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTcXVhcmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VTcXVhcmVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCBtYXJyID0gbWFrZU1lcnNlbm5lTnVtYmVycyhtYXgpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIFN1OiBTdVxufTsiXSwic291cmNlUm9vdCI6IiJ9