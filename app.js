/******/ (function(modules) { // webpackBootstrap
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
      console.log(a, n);
      return "Composit Number";
    }

    var res = Math.pow(a, n - 1) % n;
    console.log(i, n, a, res);

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
  MIN: -10000
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
/* harmony import */ var _SK_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SK.js */ "./SK.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.js */ "./core.js");




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

var CONSTANTS = {
  ZERO: makeSu(0),
  ONE: makeSu(1),
  FIRST_PRIME_NUMBER: makeSu(2),
  MAX: makeSu(_constants_js__WEBPACK_IMPORTED_MODULE_1__["MAX"]),
  MIN: makeSu(_constants_js__WEBPACK_IMPORTED_MODULE_1__["MIN"])
};

Su.prototype.getString = function () {
  var str = String(this.integer.join(""));
  var ac = this.decimal.reduce(function (a, e) {
    return a + e;
  });

  if (ac !== 0) {
    str += "." + this.decimal.join("");
  }

  return this.negative ? "-" + str : str;
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

var getLarge = function getLarge(a, b) {
  var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var negative = false;
  var field = [];

  if (absolute) {
    a.negative = false;
    b.negative = false;
  }

  if (!a.negative && b.negative) {
    return a;
  } else if (a.negative && !b.negative) {
    return b;
  } else if (a.negative && b.negative) {
    negative = true;
  }

  if (a.integer.length > b.integer.length) {
    if (negative) {
      return b;
    }

    return a;
  } else if (a.integer.length < b.integer.length) {
    if (negative) {
      return a;
    }

    return b;
  } else {
    for (var i = 0; i < a.integer.length; i++) {
      var elm_a = a.integer[i];
      var elm_b = b.integer[i];

      if (elm_a > elm_b) {
        field = [a, b];
        break;
      } else if (elm_a < elm_b) {
        field = [b, a];
        break;
      }
    }
  }

  if (field.length === 0) {
    var len = a.decimal.length >= b.decimal.length ? a.decimal.length : b.decimal.length;

    for (var _i3 = 0; _i3 < len; _i3++) {
      var _elm_a = a.decimal[_i3] ? a.decimal[_i3] : 0;

      var _elm_b = b.decimal[_i3] ? b.decimal[_i3] : 0;

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
  } else {
    return field[0];
  }
};

Su.prototype.isEqual = function (su) {
  if (!isSu(su)) {
    su = makeSu(su);
  }

  var a = this;
  var b = su;
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
    su = makeSu(su);
  }

  var a = this;
  var b = su;
  var res = getLarge(a, b);

  if (!res) {
    return false;
  }

  if (res === a) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isSmall = function (su) {
  if (!isSu(su)) {
    su = makeSu(su);
  }

  var a = this;
  var b = su;
  var res = getLarge(a, b);

  if (!res) {
    return false;
  }

  if (res === b) {
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
  if (!this.negative && this.isInteger() && this.isLarge(0)) {
    return true;
  } else {
    return false;
  }
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
    return;
  }

  var a = copySu(this);
  var b = copySu(su);

  if (b.isZero()) {
    return a;
  }

  var negative;

  if (a.negative && b.negative) {
    negative = true;
  } else if (!a.negative && !b.negative) {
    negative = false;
  } else {
    return a.subtract(b);
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
  return result;
};

Su.prototype.subtract = function (su) {
  if (!isSu(su)) {
    return;
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
  return makeSu(minus + res_array.join(""));
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

Su.prototype.multiplication = function (su) {
  if (!isSu(su)) {
    return;
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
    return;
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

    if (this.division(su).remainder.isEqual(0)) {
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

(function (global) {
  global.makeSu = makeSu;
})(window);

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU0suanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOlsiUyIsIksiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJpc1ByaW1lTnVtYmVyIiwibiIsImlzTnVtYmVyIiwiTUFYIiwibWF4IiwiaSIsIm5leHROdW1iZXIiLCJwcmV2TnVtYmVyIiwicmFuZG9tIiwibWluIiwiQXJyYXkiLCJsZW5ndGgiLCJyYW5kb21FbGVtZW50IiwidW5kZWZpbmVkIiwibGVuIiwicmFuZCIsIk1hdGgiLCJhcnJheSIsInJhbmRvbUludCIsImFyciIsInB1c2giLCJyZXMiLCJwcmltZU51bWJlcnMiLCJmaWJvbmFjY2lTZXF1ZW5jZSIsInN0YXJ0IiwiZnVuYyIsImEiLCJOdW1iZXIiLCJiIiwiaXNGaWJvbmFjY2lOdW1iZXIiLCJmaWIiLCJpbmRleCIsImluZGV4T2YiLCJpc0V2ZW5OdW1iZXIiLCJpc09kZE51bWJlciIsImRpdmlzb3JzIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwidGVtcCIsImF0ZW1wIiwiYnRlbXAiLCJjdGVtcCIsImNvdW50ZXIiLCJjb3ByaW1lIiwiY29tbW9uRGl2aXNvcnMiLCJhcnJfYSIsImFycl9iIiwiZGl2cyIsImsiLCJlbG1fYSIsImwiLCJlbG1fYiIsIm1heENvbW1vbkRpdmlzb3IiLCJtdWx0aXBsZSIsImxlYXN0Q29tbW9uTXVsdGlwbGUiLCJiaWciLCJqIiwic3VtbWF0aW9uIiwiYXJndW1lbnRzIiwic3VtIiwiZWxtIiwiaW5maW5pdGVQcm9kdWN0IiwiaXAiLCJkaXZpc2lvbiIsImRpdmlkZW5kIiwiZGl2aXNvciIsInJlc3VsdCIsImludGVnZXIiLCJyZW1haW5kZXIiLCJmbG9vciIsInJlYWxOdW1iZXIiLCJkaXZpc29yc1N1bW1hdGlvbiIsImlzQWJ1bmRhbnROdW1iZXIiLCJpc0thcHJla2FyTnVtYmVyVHlwZUEiLCJudW0iLCJzIiwiU3RyaW5nIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsInN1YnN0ciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQiIsInNwbGl0Iiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJmZXJtYXRUZXN0IiwiaXNaZXJvIiwiY29uc29sZSIsImxvZyIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsIk1JTiIsImNvcmUiLCJpc05hTiIsIk5hTiIsIm51bVRvQXJyYXkiLCJzdHIiLCJzbGljZSIsImlzTnVtQXJyYXkiLCJTdSIsIm9wdGlvbiIsIm5lZ2F0aXZlIiwicGFydHMiLCJpbnRfc3RyIiwiZGVjaW1hbF9zdHIiLCJpbnQwIiwibWF0Y2giLCJuZXdfaW50X3N0ciIsInN0YXJ0X3plcm8iLCJkZWMwIiwiZW5kX3plcm8iLCJuZXdfZGVjaW1hbF9zdHIiLCJpbnRfYXJyIiwiZGVjaW1hbF9hcnIiLCJkZWNpbWFsIiwiZGVub21pbmF0b3IiLCJmcmFjdGlvbiIsIm51bWVyYXRvciIsImNvbmNhdCIsIm1ha2VTdSIsImlzU3UiLCJzdSIsImNvcHlTdSIsImdldFN0cmluZyIsIkNPTlNUQU5UUyIsIlpFUk8iLCJPTkUiLCJwcm90b3R5cGUiLCJhYyIsInJlZHVjZSIsImUiLCJnZXROdW1iZXIiLCJnZXRJbnRlZ2VyIiwiZ2V0RGVjaW1hbCIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsImlzRXF1YWwiLCJpX2EiLCJpX2IiLCJkX2EiLCJkX2IiLCJsYXJnZSIsImNvbnRhaW5EZWNpbWFsIiwiaXNPbmUiLCJpc0xhcmdlIiwiaXNTbWFsbCIsInYiLCJhZGQiLCJzdWJ0cmFjdCIsImludF9hIiwiZGVjX2EiLCJpbnRfYiIsImRlY19iIiwibGVuX2kiLCJsZW5fZCIsIm92ZXIiLCJpbnRfcmVzIiwiZGVjX3JlcyIsIl9yZXMiLCJ1bnNoaWZ0IiwiZCIsInBvcCIsImdhcCIsIm5lZ2F0ZSIsImFfaWQiLCJiX2lkIiwiYV9pX2xlbiIsImJfaV9sZW4iLCJhX2RfbGVuIiwiYl9kX2xlbiIsImRfZ2FwIiwiYWJzIiwiZGVidCIsInJlc19hcnJheSIsImFfZWxtIiwiYl9lbG0iLCJzcGxpY2UiLCJtaW51cyIsIm51bWJlciIsIm5ldmF0aXZlIiwibXVsdGlwbGljYXRpb24iLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJ6ZXJvIiwib25lIiwiYyIsImZpYnMiLCJsdWNhc1NlcXVlbmNlIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJsdWNhc1ByaW1lTnVtYmVycyIsImxzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsImlzVHJpYW5nbGVOdW1iZXIiLCJnZXRUcmlhbmdsZU51bWJlcnMiLCJnZXRQb2x5Z29uYWxOdW1iZXJzIiwiZ2V0U3F1YXJlTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJl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QUNmQSxRQUFNLENBQUN4SCxNQUFQLEdBQWdCQSxNQUFoQjtBQUNELENBRkQsRUFFR3lILE1BRkgsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBNQVgsIE1JTiB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0IHsgbWFrZVN1IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgUyA9IHt9O1xuY29uc3QgSyA9IHt9O1xuXG5cbmNvbnN0IEZJUlNUX1BSSU1FX05VTUJFUiA9IDI7XG5cblMuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4gPT09IDAgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4gPT09IDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYobiA+PSBNQVgpe1xuICAgIHJldHVybiBgQXJndW1lbnQgZXhjZWVkcyBtYXhpbXVtIHZhbHVlKCR7TUFYfSlgO1xuICB9XG5cbiAgY29uc3QgbWF4ID0gbjtcbiAgZm9yKCBsZXQgaSA9IG1heCAtMTsgaSA+IDE7IGktLSl7XG4gICAgaWYoIChtYXggJSBpKSA9PT0gMCApe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblMubmV4dE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiArK247XG59O1xuXG5TLnByZXZOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIVMuaXNOdW1iZXIobikpe1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gLS1uO1xufTtcblxuSy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYobWluIGluc3RhbmNlb2YgQXJyYXkgJiYgbWluLmxlbmd0aCA+IDApe1xuICAgIHJldHVybiBLLnJhbmRvbUVsZW1lbnQobWluKTtcbiAgfVxuXG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSAwO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSAxO1xuICB9XG5cbiAgY29uc3QgbGVuID0gbWF4IC0gbWluO1xuICBjb25zdCByYW5kID0gTWF0aC5yYW5kb20oKTtcbiAgcmV0dXJuICggcmFuZCAqIGxlbiApICsgbWluO1xufTtcblxuSy5yYW5kb21FbGVtZW50ID0gZnVuY3Rpb24oYXJyYXkpe1xuICBjb25zdCBpID0gSy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBhcnJheVtpXTtcbn07XG5cbksucmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZiggIVMuaXNOdW1iZXIobWluKSB8fCAhUy5pc051bWJlcihtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYobWluID49IG1heCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKyl7XG4gICAgYXJyLnB1c2goaSk7XG4gIH1cblxuICBjb25zdCByZXMgPSBLLnJhbmRvbUVsZW1lbnQoYXJyKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuSy5wcmltZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgTUFYOyBpKyspe1xuICAgIGlmKFMuaXNQcmltZU51bWJlcihpKSl7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbksuZmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihzdGFydCl7XG4gIGlmKHN0YXJ0ID09PSB1bmRlZmluZWQpe1xuICAgIHN0YXJ0ID0gMDtcbiAgfVxuICBjb25zdCBhcnIgPSBbc3RhcnQsIHN0YXJ0ICsgMV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0gPj0gTUFYKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAyXSk7XG4gICAgY29uc3QgYiA9IE51bWJlcihhcnJbYXJyLmxlbmd0aCAtIDFdKTtcbiAgICBhcnIucHVzaChOdW1iZXIoYSArIGIpKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuUy5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID09PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBmaWIgPSBLLmZpYm9uYWNjaVNlcXVlbmNlKDApO1xuICBjb25zdCBpbmRleCA9IGZpYi5pbmRleE9mKG4pO1xuICBpZihpbmRleCA+PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIFMuaXNOdW1iZXIobikgJiYgbiAlIDIgPT09IDAgKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc09kZE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZiggUy5pc051bWJlcihuKSAmJiBuICUgMiAhPT0gMCApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5LLmRpdmlzb3JzID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDw9IG47IGkrKyl7XG4gICAgaWYobiAlIGkgPT09IDApe1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg6bjg7zjgq/jg6rjg4Pjg4njga7kupLpmaTms5VcbksuZXVjbGlkZWFuQWxnb3JpdGhtID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhUy5pc051bWJlcihhKSB8fCAhUy5pc051bWJlcihiKSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKCBhID09PSBiKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCB0ZW1wO1xuICBpZiggYSA8IGIpe1xuICAgIHRlbXAgPSBhO1xuICAgIGEgPSBiO1xuICAgIGIgPSB0ZW1wO1xuICB9XG5cbiAgbGV0IGF0ZW1wID0gYTtcbiAgbGV0IGJ0ZW1wID0gYjtcbiAgbGV0IGN0ZW1wO1xuICBsZXQgcmVzO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGNvcHJpbWUgPSBcImNvcHJpbWVcIjtcbiAgd2hpbGUoY3RlbXAgIT09MCl7XG4gICAgY3RlbXAgPSBhdGVtcCAlIGJ0ZW1wO1xuICAgIGlmKGN0ZW1wID09PSAwKXtcbiAgICAgIHJlcyA9IGJ0ZW1wO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGN0ZW1wID09PSAxKXtcbiAgICAgIHJlcyA9IGNvcHJpbWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY291bnRlciA+PSBNQVgpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGF0ZW1wID0gYnRlbXA7XG4gICAgYnRlbXAgPSBjdGVtcDtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuSy5jb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZihhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnJfYSA9IEsuZGl2aXNvcnMoYSk7XG4gIGlmKGEgPT09IGIpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IEsuZGl2aXNvcnMoYik7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5LLm1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyID0gSy5jb21tb25EaXZpc29ycyhhLCBiKTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5LLm11bHRpcGxlID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgTUFYOyBpKyspe1xuICAgIGFyci5wdXNoKG4gKiBpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuSy5sZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGxldCBiaWc7XG4gIGlmKCBhIDwgYil7XG4gICAgYmlnID0gYjtcbiAgfWVsc2V7XG4gICAgYmlnID0gYTtcbiAgfVxuICBjb25zdCBhcnJfYSA9IFtdO1xuICBjb25zdCBhcnJfYiA9IFtdO1xuXG4gIGxldCBpID0xO1xuICB3aGlsZShpIDw9IGJpZyl7XG4gICAgYXJyX2EucHVzaCggYSAqIGkpO1xuICAgIGkrKztcbiAgfVxuICBsZXQgaiA9MTtcbiAgd2hpbGUoaiA8PSBiaWcpe1xuICAgIGFycl9iLnB1c2goIGIgKiBqKTtcbiAgICBqKys7XG4gIH1cblxuICBmb3IobGV0IGsgPSAwOyBrIDwgYXJyX2EubGVuZ3RoOyBrKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2Fba107XG4gICAgZm9yKGxldCBsID0gMDsgbCA8IGFycl9iLmxlbmd0aDsgbCsrKXtcbiAgICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbbF07XG4gICAgICBpZihlbG1fYSA9PT0gZWxtX2Ipe1xuICAgICAgICByZXR1cm4gZWxtX2E7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5LLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgfVxuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2pdO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBzdW0gKz0gZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuSy5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBlbXB0eS5cIjtcbiAgfVxuICBsZXQgaXAgPSAxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2ldO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpcCA9IGlwICogZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IGEgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBpcDtcbn07XG5cbksuZGl2aXNpb24gPSBmdW5jdGlvbihkaXZpZGVuZCwgZGl2aXNvcil7XG4gIGlmKGRpdmlkZW5kID09PSB1bmRlZmluZWQgfHwgZGl2aXNvciA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gZGl2aWRlbmQgLyBkaXZpc29yO1xuICByZXR1cm4ge1xuICAgIGludGVnZXI6IHtcbiAgICAgIHJlbWFpbmRlcjogZGl2aWRlbmQgJSBkaXZpc29yLFxuICAgICAgcmVzdWx0OiBNYXRoLmZsb29yKHJlc3VsdClcbiAgICB9LFxuICAgIHJlYWxOdW1iZXI6IHJlc3VsdFxuICB9O1xufTtcblxuSy5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBsZXQgYSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgKz0gYXJyW2ldO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuSy5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHN1bSA9IEsuZGl2aXNvcnNTdW1tYXRpb24obik7XG4gIGlmKHN1bSA+IG4gKiAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBuICogbjtcbiAgY29uc3QgcyA9IFN0cmluZyhudW0pO1xuICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcbiAgbGV0IGZpcnN0X2xlbiA9IDA7XG4gIGxldCBhZnRlcl9sZW4gPSAwO1xuICBsZXQgZmlyc3QsIGFmdGVyO1xuICBpZihTLmlzT2RkTnVtYmVyKGxlbikpe1xuICAgIGZpcnN0X2xlbiA9IChsZW4gLSAxKSAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuICsgMTtcbiAgfWVsc2V7XG4gICAgZmlyc3RfbGVuID0gbGVuIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW47XG4gIH1cbiAgZmlyc3QgPSBOdW1iZXIocy5zdWJzdHIoMCwgZmlyc3RfbGVuKSk7XG4gIGFmdGVyID0gTnVtYmVyKHMuc3Vic3RyKGZpcnN0X2xlbiwgYWZ0ZXJfbGVuKSk7XG5cbiAgaWYoKCBmaXJzdCArIGFmdGVyICkgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVCID0gZnVuY3Rpb24obil7XG5cbiAgY29uc3QgYXJyID0gU3RyaW5nKG4pLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IG1pbiA9IE51bWJlcihhcnIuc29ydCgpLmpvaW4oXCJcIikpO1xuICBjb25zdCBtYXggPSBOdW1iZXIoYXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcblxuICBpZigobWF4IC0gbWluKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKEsuaXNLYXByZWthck51bWJlclR5cGVBKG4pIHx8IEsuaXNLYXByZWthck51bWJlclR5cGVCKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgZiA9IE1hdGguZmxvb3Iobik7XG4gIGlmKCBmID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyDoqr/lkozlubPlnYdcbksuaGFybW9uaWNNZWFuID0gZnVuY3Rpb24oYXJyKXtcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgc3VtICs9IDEgLyBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGxlbiAvIHN1bTtcbn07XG5cbi8vIOiqv+WSjOaVsOOBi+OBqeOBhuOBi1xuSy5pc0hhcm1vbmljRGl2aXNvck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBjb25zdCByZXMgPSBLLmhhcm1vbmljTWVhbihhcnIpO1xuICBpZihTLmlzSW50ZWdlcihyZXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID4gMCAmJiBTLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuSy5jb2xsYXR6aFByb2JsZW0gPSBmdW5jdGlvbihudW0pe1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihuKXtcbiAgICBsZXQgcmVzID0gbjtcbiAgICBpZihTLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gKiAzICsgMTtcbiAgICB9ZWxzZSBpZihTLmlzRXZlbk51bWJlcihuKSl7XG4gICAgICByZXMgPSBuIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB3aGlsZShudW0gPiAxKXtcbiAgICBudW0gPSBjYWxjKG51bSk7XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44OV44Kn44Or44Oe44O844OG44K544OIXG4vLyBKU+OBruaJseOBiOOCi+evhOWbsuOCkui2heOBiOOBpuOBhOOBpuOBhuOBvuOBj+WLleOBi+OBmlxuSy5mZXJtYXRUZXN0ID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIVMuaXNJbnRlZ2VyKG4pIHx8IFMuaXNaZXJvKG4pIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnMuIFwiICsgbiArIFwiIGlzIGluY29ycmVjdCBwYXJhbWV0ZXIuXCI7XG4gIH1cblxuICBpZighbWF4KXtcbiAgICBtYXggPSAxMDA7XG4gIH1cblxuICBmb3IobGV0IGkgPSAxOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBhID0gSy5yYW5kb21JbnQoMiwgbiAtIDEpO1xuICAgIGlmKEsubWF4Q29tbW9uRGl2aXNvcihhLCBuKSAhPT0gMSl7XG4gICAgICBjb25zb2xlLmxvZyhhLCBuKTtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGNvbnNvbGUubG9nKGksIG4sIGEsIHJlcyk7XG4gICAgaWYocmVzICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCJNYXliZSBQcmltZSBOdW1iZXJcIjtcbn07XG5cbi8vIOe1hOOBv+WQiOOCj+OBm+aVsOOBruioiOeul1xuLy8gSy5jb21iaW5hdGlvbnMgPSBmdW5jdGlvbihhcnIpe1xuLy8gfTtcblxuLy8gMyA9PiBbMCwgM10sIFsxLCAyXSwgWzIsIDFdLCBbMywgMF1cbksuZ2V0SW5jbHVkZXNOdW1iZXJzID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCB0ZW1wID0gbnVtO1xuICBsZXQgYm9vbCA9IHRydWU7XG4gIHdoaWxlKGJvb2wpe1xuICAgIGNvbnN0IGEgPSB0ZW1wO1xuICAgIGNvbnN0IGIgPSBudW0gLXRlbXA7XG4gICAgY29uc3QgYXIgPSBbYSxiXTtcbiAgICBhcnIucHVzaChhcik7XG4gICAgdGVtcCA9IHRlbXAgLTE7XG4gICAgaWYodGVtcCA8IDApe1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBTOiBTLFxuICBLOiBLXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbn1cbiIsImNvbnN0IGNvcmUgPSB7fTtcblxuY29yZS5pc051bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvcmUuaXNaZXJvID0gZnVuY3Rpb24obil7XG4gIGlmKCBuID09PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLy8g6YWN5YiX44Gn44Gu6KiI566XXG5jb3JlLm51bVRvQXJyYXkgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBOdW1iZXIoc3RyLnNsaWNlKGksIGkgKyAxKSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gICAgfVxuICAgIGFyci5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCB7IEssIFMgfSBmcm9tIFwiLi9TSy5qc1wiO1xuaW1wb3J0IHsgTUFYLCBNSU4gfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZighbil7XG4gICAgbiA9IDA7XG4gIH1cbiAgaWYoIW9wdGlvbil7XG4gICAgb3B0aW9uID0ge307XG4gIH1cblxuICBsZXQgc3RyID0gU3RyaW5nKG4pO1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0gPT09IFwiLVwiKXtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCk7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIGlmKCFuZWdhdGl2ZSAmJiBvcHRpb24gJiYgb3B0aW9uLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihpc05hTihOdW1iZXIoc3RyKSkpe1xuICAgIHN0ciA9IFwiMFwiO1xuICB9XG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICBsZXQgaW50X3N0ciA9IHBhcnRzWzBdO1xuICBsZXQgZGVjaW1hbF9zdHIgPSBwYXJ0c1sxXTtcbiAgaWYoaW50X3N0cil7XG4gICAgY29uc3QgaW50MCA9IGludF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoaW50MCAmJiBpbnQwLmxlbmd0aCA9PT0gaW50X3N0ci5sZW5ndGgpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgbmV3X2ludF9zdHIgPSBcIlwiO1xuICAgIGxldCBzdGFydF96ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDxpbnRfc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKGludF9zdHJbaV0gIT09IFwiMFwiIHx8ICFzdGFydF96ZXJvKXtcbiAgICAgICAgc3RhcnRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfaW50X3N0ciArPSBpbnRfc3RyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2ludF9zdHIpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgaW50X3N0ciA9IG5ld19pbnRfc3RyO1xuICAgIH1cbiAgfVxuXG4gIGlmKGRlY2ltYWxfc3RyKXtcbiAgICBjb25zdCBkZWMwID0gZGVjaW1hbF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoZGVjMCAmJiBkZWMwLmxlbmd0aCA9PT0gZGVjaW1hbF9zdHIubGVuZ3RoKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBlbmRfemVybyA9IHRydWU7XG4gICAgbGV0IG5ld19kZWNpbWFsX3N0ciA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gZGVjaW1hbF9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgaWYoZGVjaW1hbF9zdHJbaV0gIT09IFwiMFwiIHx8ICFlbmRfemVybyl7XG4gICAgICAgIGVuZF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19kZWNpbWFsX3N0ciA9IGRlY2ltYWxfc3RyW2ldICsgbmV3X2RlY2ltYWxfc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2RlY2ltYWxfc3RyKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBkZWNpbWFsX3N0ciA9IG5ld19kZWNpbWFsX3N0cjtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBpbnRfYXJyID0gY29yZS5udW1Ub0FycmF5KGludF9zdHIpO1xuICBsZXQgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG5cbiAgdGhpcy5pbnRlZ2VyID0gaW50X2FycjtcbiAgdGhpcy5kZWNpbWFsID0gZGVjaW1hbF9hcnI7XG4gIHRoaXMubmVnYXRpdmUgPSBuZWdhdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgXG4gIGxldCBkZW5vbWluYXRvciA9IFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNpbWFsLmxlbmd0aDsgaSsrKXtcbiAgICBkZW5vbWluYXRvci5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5mcmFjdGlvbiA9IHtcbiAgICBudW1lcmF0b3I6IHRoaXMuaW50ZWdlci5jb25jYXQodGhpcy5kZWNpbWFsKSxcbiAgICBkZW5vbWluYXRvcjogZGVub21pbmF0b3JcbiAgfTtcblxufTtcblxuY29uc3QgbWFrZVN1ID0gZnVuY3Rpb24obnVtLCBvcHRpb24pe1xuICByZXR1cm4gbmV3IFN1KG51bSwgb3B0aW9uKTtcbn07XG5cbmNvbnN0IGlzU3UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKHN1IGluc3RhbmNlb2YgU3Upe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb3B5U3UgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IHN0ciA9IHN1LmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gIFpFUk86IG1ha2VTdSgwKSxcbiAgT05FOiBtYWtlU3UoMSksXG4gIEZJUlNUX1BSSU1FX05VTUJFUjogbWFrZVN1KDIpLFxuICBNQVg6IG1ha2VTdShNQVgpLFxuICBNSU46IG1ha2VTdShNSU4pXG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmU/IFwiLVwiICsgc3RyOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuXG5jb25zdCBnZXRMYXJnZSA9IGZ1bmN0aW9uKGEsIGIsIGFic29sdXRlID0gZmFsc2Upe1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBsZXQgZmllbGQgPSBbXTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIGIubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmKCFhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihhLmludGVnZXIubGVuZ3RoID4gYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihhLmludGVnZXIubGVuZ3RoIDwgYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9ZWxzZXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IGEuaW50ZWdlcltpXTtcbiAgICAgIGxldCBlbG1fYiA9IGIuaW50ZWdlcltpXTtcbiAgICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gYS5kZWNpbWFsLmxlbmd0aCA+PSBiLmRlY2ltYWwubGVuZ3RoID8gYS5kZWNpbWFsLmxlbmd0aCA6IGIuZGVjaW1hbC5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IGEuZGVjaW1hbFtpXSA/IGEuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBiLmRlY2ltYWxbaV0gPyBiLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZpZWxkWzBdO1xuICB9XG5cbn07XG5cblxuU3UucHJvdG90eXBlLmlzRXF1YWwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzID09PSBiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYoIXRoaXMubmVnYXRpdmUgJiYgdGhpcy5pc0ludGVnZXIoKSAmJiB0aGlzLmlzTGFyZ2UoMCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlO1xuICBpZihhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuXG4gIGZvcihsZXQgaSA9IGxlbl9kIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGRlY19hW2ldIHx8IDA7XG4gICAgbGV0IGVsbV9iID0gZGVjX2JbaV0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgZGVjX3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG5cbiAgZm9yKGxldCBpID0gZGVjX3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApe1xuICAgIGxldCBkID0gZGVjX3Jlc1tpXTtcbiAgICBpZihkID09PSAwKXtcbiAgICAgIGRlY19yZXMucG9wKCk7XG4gICAgfWVsc2V7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBnYXAgPSBsZW5faSAtIGludF9iLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gbGVuX2kgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gaW50X2FbaV07XG4gICAgbGV0IGVsbV9iID0gaW50X2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgaW50X3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBpbnRfcmVzLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoaW50X3Jlcy5qb2luKFwiXCIpICsgXCIuXCIgKyBkZWNfcmVzLmpvaW4oXCJcIiksIHtuZWdhdGl2ZTogbmVnYXRpdmV9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcbiAgcmV0dXJuIG1ha2VTdShtaW51cyArIHJlc19hcnJheS5qb2luKFwiXCIpKTtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGlmKHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlci5pc0VxdWFsKDApKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgYXJyLnB1c2godGhpcyk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0Q29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgbGV0IGEgPSB0aGlzO1xuICBsZXQgYiA9IHN1O1xuXG4gIGNvbnN0IGFycl9hID0gYS5nZXREaXZpc29ycygpO1xuICBpZihhLmlzRXF1YWwoYikpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IGIuZ2V0RGl2aXNvcnMoKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGVsbV9iID0gYXJyX2Jbal07XG4gICAgICBpZihlbG1fYS5pc0VxdWFsKGVsbV9iKSl7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cbiAgY29uc3QgYXJyID0gdGhpcy5nZXRDb21tb25EaXZpc29ycyhzdSk7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IENPTlNUQU5UUy5NQVgubnVtYmVyOyBpKyspe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oaSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuXG4gIGNvbnN0IG1heENvbW1vbkRpdmlzb3IgPSBhLmdldE1heENvbW1vbkRpdmlzb3IoYik7XG5cbiAgY29uc3QgbXVsdGkgPSBhLm11bHRpcGx5KGIpO1xuXG4gIGNvbnN0IHJlcyA9IG11bHRpLmRpdmlzaW9uKG1heENvbW1vbkRpdmlzb3IpO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblN1LnByb3RvdHlwZS5maWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW3plcm8sIG9uZV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGZpYnMgPSB0aGlzLmZpYm9uYWNjaVNlcXVlbmNlKDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmx1Y2FzU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW21ha2VTdSgyKSwgbWFrZVN1KDEpXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMdWNhc051bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsdWNzID0gdGhpcy5sdWNhc1NlcXVlbmNlKDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbHVjcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBsdWNzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmx1Y2FzUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbHMgPSB0aGlzLmx1Y2FzU2VxdWVuY2UoKTtcbiAgY29uc3QgYXJyID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGxzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBsID0gbHNbaV07XG4gICAgaWYobC5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW3RoaXNdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gYXJndW1lbnRzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXRTZXF1ZW5jZSguLi5hcmd1bWVudHMpO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBzdW0gPSBzdW0uYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldFNlcXVlbmNlKC4uLmFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYSA9IG1ha2VTdSh0aGlzLmFycmF5W2ldKTtcbiAgICBzdW0gPSBzdW0uYWRkKGEpO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgyKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuY3ViZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgb25lID0gbWFrZVN1KFwiMVwiKTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgaWYoc3UuaXNFcXVhbChvbmUpKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsZXQgY291bnQgPSBvbmU7XG4gIGxldCByZXMgPSBjb3B5U3UodGhpcyk7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoc3UpKXtcbiAgICByZXMgPSB0aGlzLm11bHRpcGxpY2F0aW9uKHJlcyk7XG4gICAgY291bnQgPSBjb3VudC5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5pc09uZSgpIHx8IHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjJcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKG9uZSkpe1xuICAgIGxldCBlID0gdGhpcy5kaXZpc2lvbihjb3VudGVyKTtcbiAgICBpZihlLnJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldERpdmlzb3JzKCk7XG4gIGxldCBhID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhID0gYS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNMYXJnZSggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzRGVmaWNpZW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNTbWFsbCggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzUGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLnN1YnRyYWN0KHRoaXMpLmlzRXF1YWwodGhpcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5mYWN0b3JpYWwgPSBmdW5jdGlvbigpe1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZSh6ZXJvKSl7XG4gICAgcmVzID0gcmVzLm11bHRpcGxpY2F0aW9uKGNvdW50ZXIpO1xuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1RyaWFuZ2xlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgbGV0IGVsbSA9IG1ha2VTdSgxKTtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBiID0gdHJ1ZTtcbiAgd2hpbGUoYil7XG4gICAgcmVzID0gcmVzLnN1YnRyYWN0KGVsbSk7XG4gICAgaWYocmVzLmlzWmVybygpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZihyZXMuaXNTbWFsbChtYWtlU3UoMCkpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxtID0gZWxtLmFkZChtYWtlU3UoMSkpO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0VHJpYW5nbGVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZ2V0UG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmdldFNxdWFyZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5nZXRQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSg0KSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0UG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4pe1xuICBpZighaXNTdShuKSl7XG4gICAgbiA9IG1ha2VTdShuKTtcbiAgfVxuICBpZihuLmlzU21hbGwobWFrZVN1KDMpKSl7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDEpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHJhbmdlID0gY3VycmVudDtcblxuICBjb25zdCBpbmNyZW1lbnQgPSBuLnN1YnRyYWN0KG1ha2VTdSgyKSk7XG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSl7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgcmFuZ2UgPSByYW5nZS5hZGQoaW5jcmVtZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5hZGQocmFuZ2UpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUubWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgdHdvID0gbWFrZVN1KDIpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMCk7XG4gIGxldCBleCA9IG1ha2VTdSgxKTtcbiAgXG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLm1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbWFyciA9IHRoaXMubWVyc2VubmVOdW1iZXJzKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbiA9IG1hcnJbaV07XG4gICAgaWYobi5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSB0aGlzLm1lcnNlbm5lTnVtYmVycygpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IHRoaXMubWVyc2VubmVQcmltZU51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IG1ha2VTdSgwKTtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gbWFrZVN1KDEpO1xuICB9XG4gIGlmKCFpc1N1KG1pbikpe1xuICAgIG1pbiA9IG1ha2VTdShtaW4pO1xuICB9XG4gIGlmKCFpc1N1KG1heCkpe1xuICAgIG1heCA9IG1ha2VTdShtYXgpO1xuICB9XG5cbiAgY29uc3Qgc3RyID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBsZXQgcmFuO1xuXG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIGlmKG1pbi5pc1plcm8oKSl7XG4gICAgICByYW4gPSBtYWtlU3UoMCk7XG4gICAgfWVsc2V7XG4gICAgICByYW4gPSBtaW47XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByYW4gPSBtYWtlU3UoXCIwLlwiICsgYXJyWzFdKS5tdWx0aXBsaWNhdGlvbihtYXgpO1xuICB9XG4gIHJldHVybiByYW47XG59O1xuXG4oZnVuY3Rpb24oZ2xvYmFsKXtcbiAgZ2xvYmFsLm1ha2VTdSA9IG1ha2VTdTtcbn0pKHdpbmRvdylcbiJdLCJzb3VyY2VSb290IjoiIn0=