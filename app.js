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
/* harmony import */ var _su_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./su.js */ "./su.js");


(function (global) {
  global.makeSu = _su_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeSu;
  global.copySu = _su_js__WEBPACK_IMPORTED_MODULE_0__["default"].copySu;
  global.isSu = _su_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSu;
  global.Kei = _su_js__WEBPACK_IMPORTED_MODULE_0__["default"].Kei, global.Su = _su_js__WEBPACK_IMPORTED_MODULE_0__["default"].Su;
})(window);

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

  if (a.isZero() && b.isZero()) {
    return;
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
  if (this.isPositive() && this.isInteger() && this.isLarge(0)) {
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
  if (this.isNegative()) {
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU0suanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3UuanMiXSwibmFtZXMiOlsiUyIsIksiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJpc1ByaW1lTnVtYmVyIiwibiIsImlzTnVtYmVyIiwiTUFYIiwibWF4IiwiaSIsIm5leHROdW1iZXIiLCJwcmV2TnVtYmVyIiwicmFuZG9tIiwibWluIiwiQXJyYXkiLCJsZW5ndGgiLCJyYW5kb21FbGVtZW50IiwidW5kZWZpbmVkIiwibGVuIiwicmFuZCIsIk1hdGgiLCJhcnJheSIsInJhbmRvbUludCIsImFyciIsInB1c2giLCJyZXMiLCJwcmltZU51bWJlcnMiLCJmaWJvbmFjY2lTZXF1ZW5jZSIsInN0YXJ0IiwiZnVuYyIsImEiLCJOdW1iZXIiLCJiIiwiaXNGaWJvbmFjY2lOdW1iZXIiLCJmaWIiLCJpbmRleCIsImluZGV4T2YiLCJpc0V2ZW5OdW1iZXIiLCJpc09kZE51bWJlciIsImRpdmlzb3JzIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwidGVtcCIsImF0ZW1wIiwiYnRlbXAiLCJjdGVtcCIsImNvdW50ZXIiLCJjb3ByaW1lIiwiY29tbW9uRGl2aXNvcnMiLCJhcnJfYSIsImFycl9iIiwiZGl2cyIsImsiLCJlbG1fYSIsImwiLCJlbG1fYiIsIm1heENvbW1vbkRpdmlzb3IiLCJtdWx0aXBsZSIsImxlYXN0Q29tbW9uTXVsdGlwbGUiLCJiaWciLCJqIiwic3VtbWF0aW9uIiwiYXJndW1lbnRzIiwic3VtIiwiZWxtIiwiaW5maW5pdGVQcm9kdWN0IiwiaXAiLCJkaXZpc2lvbiIsImRpdmlkZW5kIiwiZGl2aXNvciIsInJlc3VsdCIsImludGVnZXIiLCJyZW1haW5kZXIiLCJmbG9vciIsInJlYWxOdW1iZXIiLCJkaXZpc29yc1N1bW1hdGlvbiIsImlzQWJ1bmRhbnROdW1iZXIiLCJpc0thcHJla2FyTnVtYmVyVHlwZUEiLCJudW0iLCJzIiwiU3RyaW5nIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsInN1YnN0ciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQiIsInNwbGl0Iiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJmZXJtYXRUZXN0IiwiaXNaZXJvIiwiY29uc29sZSIsImxvZyIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsIk1JTiIsImNvcmUiLCJpc05hTiIsIk5hTiIsIm51bVRvQXJyYXkiLCJzdHIiLCJzbGljZSIsImlzTnVtQXJyYXkiLCJnbG9iYWwiLCJtYWtlU3UiLCJjb3B5U3UiLCJpc1N1IiwiS2VpIiwiU3UiLCJ3aW5kb3ciLCJvcHRpb24iLCJuZWdhdGl2ZSIsInBhcnRzIiwiaW50X3N0ciIsImRlY2ltYWxfc3RyIiwiaW50MCIsIm1hdGNoIiwibmV3X2ludF9zdHIiLCJzdGFydF96ZXJvIiwiZGVjMCIsImVuZF96ZXJvIiwibmV3X2RlY2ltYWxfc3RyIiwiaW50X2FyciIsImRlY2ltYWxfYXJyIiwiZGVjaW1hbCIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJzdSIsImdldFN0cmluZyIsImdldE1lc3NhZ2UiLCJ0eXBlIiwiQ09OU1RBTlRTIiwiWkVSTyIsIk9ORSIsInByb3RvdHlwZSIsImFjIiwicmVkdWNlIiwiZSIsImdldE51bWJlciIsImdldEludGVnZXIiLCJnZXREZWNpbWFsIiwiZ2V0TGFyZ2UiLCJhYnNvbHV0ZSIsImZpZWxkIiwiaXNFcXVhbCIsImlfYSIsImlfYiIsImRfYSIsImRfYiIsImxhcmdlIiwiY29udGFpbkRlY2ltYWwiLCJpc09uZSIsImlzTGFyZ2UiLCJpc1NtYWxsIiwiaXNQb3NpdGl2ZSIsImlzTmVnYXRpdmUiLCJ2IiwiYWRkIiwiRXJyb3IiLCJzdWJ0cmFjdCIsImludF9hIiwiZGVjX2EiLCJpbnRfYiIsImRlY19iIiwibGVuX2kiLCJsZW5fZCIsIm92ZXIiLCJpbnRfcmVzIiwiZGVjX3JlcyIsIl9yZXMiLCJ1bnNoaWZ0IiwiZCIsInBvcCIsImdhcCIsIm5lZ2F0ZSIsImFfaWQiLCJiX2lkIiwiYV9pX2xlbiIsImJfaV9sZW4iLCJhX2RfbGVuIiwiYl9kX2xlbiIsImRfZ2FwIiwiYWJzIiwiZGVidCIsInJlc19hcnJheSIsImFfZWxtIiwiYl9lbG0iLCJzcGxpY2UiLCJtaW51cyIsIm51bWJlciIsIm5ldmF0aXZlIiwibWFrZVBvc2l0aXZlIiwibWFrZU5lZ2F0aXZlIiwibXVsdGlwbGljYXRpb24iLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJ6ZXJvIiwib25lIiwiYyIsImZpYnMiLCJsdWNhc1NlcXVlbmNlIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJsdWNhc1ByaW1lTnVtYmVycyIsImxzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsImlzVHJpYW5nbGVOdW1iZXIiLCJnZXRUcmlhbmdsZU51bWJlcnMiLCJnZXRQb2x5Z29uYWxOdW1iZXJzIiwiZ2V0U3F1YXJlTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciIsInJhbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFHQSxJQUFNQyxrQkFBa0IsR0FBRyxDQUEzQjs7QUFFQUYsQ0FBQyxDQUFDRyxhQUFGLEdBQWtCLFVBQVNDLENBQVQsRUFBVztBQUMzQixNQUFHLENBQUNKLENBQUMsQ0FBQ0ssUUFBRixDQUFXRCxDQUFYLENBQUosRUFBa0I7QUFDaEIsV0FB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QUcsQ0FBQ3dHLElBQUksQ0FBQzdHLEdBQUQsQ0FBUixFQUFjO0FBQ1pBLE9BQUcsR0FBRzJHLE1BQU0sQ0FBQzNHLEdBQUQsQ0FBWjtBQUNEOztBQUVELE1BQU11RyxHQUFHLEdBQUdoQyxNQUFNLENBQUMzRCxJQUFJLENBQUNSLE1BQUwsRUFBRCxDQUFsQjtBQUNBLE1BQUkyUCxHQUFKOztBQUVBLE1BQUd4SixHQUFHLEtBQUssR0FBWCxFQUFlO0FBQ2IsUUFBR2xHLEdBQUcsQ0FBQ3NGLE1BQUosRUFBSCxFQUFnQjtBQUNkb0ssU0FBRyxHQUFHcEosTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUNELEtBRkQsTUFFSztBQUNIb0osU0FBRyxHQUFHMVAsR0FBTjtBQUNEO0FBQ0YsR0FORCxNQU1LO0FBQ0gsUUFBSVUsR0FBRyxHQUFHd0YsR0FBRyxDQUFDekIsS0FBSixDQUFVLEdBQVYsQ0FBVjtBQUNBaUwsT0FBRyxHQUFHcEosTUFBTSxDQUFDLE9BQU81RixHQUFHLENBQUMsQ0FBRCxDQUFYLENBQU4sQ0FBc0J1TCxjQUF0QixDQUFxQ3RNLEdBQXJDLENBQU47QUFDRDs7QUFDRCxTQUFPK1AsR0FBUDtBQUNELENBNUJEOztBQThCZTtBQUNicEosUUFBTSxFQUFFQSxNQURLO0FBRWJDLFFBQU0sRUFBRUEsTUFGSztBQUdiQyxNQUFJLEVBQUVBLElBSE87QUFJYkMsS0FBRyxFQUFFcEgsd0NBSlE7QUFLYnFILElBQUUsRUFBRUE7QUFMUyxDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgTUFYLCBNSU4gfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcbmltcG9ydCB7IG1ha2VTdSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IFMgPSB7fTtcbmNvbnN0IEsgPSB7fTtcblxuXG5jb25zdCBGSVJTVF9QUklNRV9OVU1CRVIgPSAyO1xuXG5TLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIVMuaXNOdW1iZXIobikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuID09PSAwIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuID09PSAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKG4gPj0gTUFYKXtcbiAgICByZXR1cm4gYEFyZ3VtZW50IGV4Y2VlZHMgbWF4aW11bSB2YWx1ZSgke01BWH0pYDtcbiAgfVxuXG4gIGNvbnN0IG1heCA9IG47XG4gIGZvciggbGV0IGkgPSBtYXggLTE7IGkgPiAxOyBpLS0pe1xuICAgIGlmKCAobWF4ICUgaSkgPT09IDAgKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TLm5leHROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIVMuaXNOdW1iZXIobikpe1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gKytuO1xufTtcblxuUy5wcmV2TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFTLmlzTnVtYmVyKG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIC0tbjtcbn07XG5cbksucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuXG4gIGlmKG1pbiBpbnN0YW5jZW9mIEFycmF5ICYmIG1pbi5sZW5ndGggPiAwKXtcbiAgICByZXR1cm4gSy5yYW5kb21FbGVtZW50KG1pbik7XG4gIH1cblxuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gMDtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gMTtcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IG1heCAtIG1pbjtcbiAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XG4gIHJldHVybiAoIHJhbmQgKiBsZW4gKSArIG1pbjtcbn07XG5cbksucmFuZG9tRWxlbWVudCA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgY29uc3QgaSA9IEsucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCAtIDEpO1xuICByZXR1cm4gYXJyYXlbaV07XG59O1xuXG5LLnJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYoICFTLmlzTnVtYmVyKG1pbikgfHwgIVMuaXNOdW1iZXIobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKG1pbiA+PSBtYXgpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpKyspe1xuICAgIGFyci5wdXNoKGkpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gSy5yYW5kb21FbGVtZW50KGFycik7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbksucHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IEZJUlNUX1BSSU1FX05VTUJFUjsgaSA8IE1BWDsgaSsrKXtcbiAgICBpZihTLmlzUHJpbWVOdW1iZXIoaSkpe1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5LLmZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oc3RhcnQpe1xuICBpZihzdGFydCA9PT0gdW5kZWZpbmVkKXtcbiAgICBzdGFydCA9IDA7XG4gIH1cbiAgY29uc3QgYXJyID0gW3N0YXJ0LCBzdGFydCArIDFdO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdID49IE1BWCl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gTnVtYmVyKGFyclthcnIubGVuZ3RoIC0gMl0pO1xuICAgIGNvbnN0IGIgPSBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAxXSk7XG4gICAgYXJyLnB1c2goTnVtYmVyKGEgKyBiKSk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblMuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYobiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgZmliID0gSy5maWJvbmFjY2lTZXF1ZW5jZSgwKTtcbiAgY29uc3QgaW5kZXggPSBmaWIuaW5kZXhPZihuKTtcbiAgaWYoaW5kZXggPj0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCBTLmlzTnVtYmVyKG4pICYmIG4gJSAyID09PSAwICl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNPZGROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIFMuaXNOdW1iZXIobikgJiYgbiAlIDIgIT09IDAgKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuSy5kaXZpc29ycyA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8PSBuOyBpKyspe1xuICAgIGlmKG4gJSBpID09PSAwKXtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44Om44O844Kv44Oq44OD44OJ44Gu5LqS6Zmk5rOVXG5LLmV1Y2xpZGVhbkFsZ29yaXRobSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIVMuaXNOdW1iZXIoYSkgfHwgIVMuaXNOdW1iZXIoYikpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZiggYSA9PT0gYil7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgdGVtcDtcbiAgaWYoIGEgPCBiKXtcbiAgICB0ZW1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdGVtcDtcbiAgfVxuXG4gIGxldCBhdGVtcCA9IGE7XG4gIGxldCBidGVtcCA9IGI7XG4gIGxldCBjdGVtcDtcbiAgbGV0IHJlcztcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBjb3ByaW1lID0gXCJjb3ByaW1lXCI7XG4gIHdoaWxlKGN0ZW1wICE9PTApe1xuICAgIGN0ZW1wID0gYXRlbXAgJSBidGVtcDtcbiAgICBpZihjdGVtcCA9PT0gMCl7XG4gICAgICByZXMgPSBidGVtcDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjdGVtcCA9PT0gMSl7XG4gICAgICByZXMgPSBjb3ByaW1lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGNvdW50ZXIgPj0gTUFYKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBhdGVtcCA9IGJ0ZW1wO1xuICAgIGJ0ZW1wID0gY3RlbXA7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbksuY29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyX2EgPSBLLmRpdmlzb3JzKGEpO1xuICBpZihhID09PSBiKXtcbiAgICByZXR1cm4gYXJyX2E7XG4gIH1cbiAgY29uc3QgYXJyX2IgPSBLLmRpdmlzb3JzKGIpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGsgPSAwOyBrIDwgYXJyX2EubGVuZ3RoOyBrKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2Fba107XG4gICAgZm9yKGxldCBsID0gMDsgbCA8IGFycl9iLmxlbmd0aDsgbCsrKXtcbiAgICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbbF07XG4gICAgICBpZihlbG1fYSA9PT0gZWxtX2Ipe1xuICAgICAgICBkaXZzLnB1c2goZWxtX2EpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZzO1xufTtcblxuSy5tYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oYSwgYil7XG4gIGNvbnN0IGFyciA9IEsuY29tbW9uRGl2aXNvcnMoYSwgYik7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuSy5tdWx0aXBsZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IE1BWDsgaSsrKXtcbiAgICBhcnIucHVzaChuICogaSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbksubGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZihhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBsZXQgYmlnO1xuICBpZiggYSA8IGIpe1xuICAgIGJpZyA9IGI7XG4gIH1lbHNle1xuICAgIGJpZyA9IGE7XG4gIH1cbiAgY29uc3QgYXJyX2EgPSBbXTtcbiAgY29uc3QgYXJyX2IgPSBbXTtcblxuICBsZXQgaSA9MTtcbiAgd2hpbGUoaSA8PSBiaWcpe1xuICAgIGFycl9hLnB1c2goIGEgKiBpKTtcbiAgICBpKys7XG4gIH1cbiAgbGV0IGogPTE7XG4gIHdoaWxlKGogPD0gYmlnKXtcbiAgICBhcnJfYi5wdXNoKCBiICogaik7XG4gICAgaisrO1xuICB9XG5cbiAgZm9yKGxldCBrID0gMDsgayA8IGFycl9hLmxlbmd0aDsgaysrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2tdO1xuICAgIGZvcihsZXQgbCA9IDA7IGwgPCBhcnJfYi5sZW5ndGg7IGwrKyl7XG4gICAgICBjb25zdCBlbG1fYiA9IGFycl9iW2xdO1xuICAgICAgaWYoZWxtX2EgPT09IGVsbV9iKXtcbiAgICAgICAgcmV0dXJuIGVsbV9hO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuSy5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gIH1cblxuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtqXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgc3VtICs9IGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cbksuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgZW1wdHkuXCI7XG4gIH1cbiAgbGV0IGlwID0gMTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtpXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgaXAgPSBpcCAqIGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBhIE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5LLmRpdmlzaW9uID0gZnVuY3Rpb24oZGl2aWRlbmQsIGRpdmlzb3Ipe1xuICBpZihkaXZpZGVuZCA9PT0gdW5kZWZpbmVkIHx8IGRpdmlzb3IgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGRpdmlkZW5kIC8gZGl2aXNvcjtcbiAgcmV0dXJuIHtcbiAgICBpbnRlZ2VyOiB7XG4gICAgICByZW1haW5kZXI6IGRpdmlkZW5kICUgZGl2aXNvcixcbiAgICAgIHJlc3VsdDogTWF0aC5mbG9vcihyZXN1bHQpXG4gICAgfSxcbiAgICByZWFsTnVtYmVyOiByZXN1bHRcbiAgfTtcbn07XG5cbksuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgbGV0IGEgPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhICs9IGFycltpXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbksuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdW0gPSBLLmRpdmlzb3JzU3VtbWF0aW9uKG4pO1xuICBpZihzdW0gPiBuICogMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUEgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gbiAqIG47XG4gIGNvbnN0IHMgPSBTdHJpbmcobnVtKTtcbiAgY29uc3QgbGVuID0gcy5sZW5ndGg7XG4gIGxldCBmaXJzdF9sZW4gPSAwO1xuICBsZXQgYWZ0ZXJfbGVuID0gMDtcbiAgbGV0IGZpcnN0LCBhZnRlcjtcbiAgaWYoUy5pc09kZE51bWJlcihsZW4pKXtcbiAgICBmaXJzdF9sZW4gPSAobGVuIC0gMSkgLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbiArIDE7XG4gIH1lbHNle1xuICAgIGZpcnN0X2xlbiA9IGxlbiAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuO1xuICB9XG4gIGZpcnN0ID0gTnVtYmVyKHMuc3Vic3RyKDAsIGZpcnN0X2xlbikpO1xuICBhZnRlciA9IE51bWJlcihzLnN1YnN0cihmaXJzdF9sZW4sIGFmdGVyX2xlbikpO1xuXG4gIGlmKCggZmlyc3QgKyBhZnRlciApID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQiA9IGZ1bmN0aW9uKG4pe1xuXG4gIGNvbnN0IGFyciA9IFN0cmluZyhuKS5zcGxpdChcIlwiKTtcblxuICBjb25zdCBtaW4gPSBOdW1iZXIoYXJyLnNvcnQoKS5qb2luKFwiXCIpKTtcbiAgY29uc3QgbWF4ID0gTnVtYmVyKGFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG5cbiAgaWYoKG1heCAtIG1pbikgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQShuKSB8fCBLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNJbnRlZ2VyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4pO1xuICBpZiggZiA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8g6Kq/5ZKM5bmz5Z2HXG5LLmhhcm1vbmljTWVhbiA9IGZ1bmN0aW9uKGFycil7XG4gIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIHN1bSArPSAxIC8gYXJyW2ldO1xuICB9XG4gIHJldHVybiBsZW4gLyBzdW07XG59O1xuXG4vLyDoqr/lkozmlbDjgYvjganjgYbjgYtcbksuaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgY29uc3QgcmVzID0gSy5oYXJtb25pY01lYW4oYXJyKTtcbiAgaWYoUy5pc0ludGVnZXIocmVzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuUy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYobiA+IDAgJiYgUy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbksuY29sbGF0emhQcm9ibGVtID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBhcnIgPSBbXTtcblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24obil7XG4gICAgbGV0IHJlcyA9IG47XG4gICAgaWYoUy5pc09kZE51bWJlcihuKSl7XG4gICAgICByZXMgPSBuICogMyArIDE7XG4gICAgfWVsc2UgaWYoUy5pc0V2ZW5OdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAvIDI7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgd2hpbGUobnVtID4gMSl7XG4gICAgbnVtID0gY2FsYyhudW0pO1xuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODleOCp+ODq+ODnuODvOODhuOCueODiFxuLy8gSlPjga7mibHjgYjjgovnr4Tlm7LjgpLotoXjgYjjgabjgYTjgabjgYbjgb7jgY/li5XjgYvjgZpcbksuZmVybWF0VGVzdCA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFTLmlzSW50ZWdlcihuKSB8fCBTLmlzWmVybyhuKSB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzLiBcIiArIG4gKyBcIiBpcyBpbmNvcnJlY3QgcGFyYW1ldGVyLlwiO1xuICB9XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gMTAwO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMTsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgYSA9IEsucmFuZG9tSW50KDIsIG4gLSAxKTtcbiAgICBpZihLLm1heENvbW1vbkRpdmlzb3IoYSwgbikgIT09IDEpe1xuICAgICAgY29uc29sZS5sb2coYSwgbik7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gTWF0aC5wb3coYSwgbiAtIDEpICUgbjtcbiAgICBjb25zb2xlLmxvZyhpLCBuLCBhLCByZXMpO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogS1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYOiAxMDAwMCxcbiAgTUlOOiAtMTAwMDAsXG59XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUuaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICAgIH1cbiAgICBhcnIucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb3JlLmlzTnVtQXJyYXkgPSBmdW5jdGlvbihhcnIpe1xuICBpZiggYXJyIGluc3RhbmNlb2YgQXJyYXkgKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKCAhdGhpcy5pc051bWJlcihhcnJbaV0pICl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCJpbXBvcnQgcyBmcm9tIFwiLi9zdS5qc1wiO1xuXG4oZnVuY3Rpb24oZ2xvYmFsKXtcbiAgZ2xvYmFsLm1ha2VTdSA9IHMubWFrZVN1O1xuICBnbG9iYWwuY29weVN1ID0gcy5jb3B5U3U7XG4gIGdsb2JhbC5pc1N1ID0gcy5pc1N1O1xuICBnbG9iYWwuS2VpID0gcy5LZWksXG4gIGdsb2JhbC5TdSA9IHMuU3Vcbn0pKHdpbmRvdylcbiIsImltcG9ydCB7IEssIFMgfSBmcm9tIFwiLi9TSy5qc1wiO1xuaW1wb3J0IHsgTUFYLCBNSU4gfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBTdSA9IGZ1bmN0aW9uKG4sIG9wdGlvbil7XG4gIGlmKCFuKXtcbiAgICBuID0gMDtcbiAgfVxuICBpZighb3B0aW9uKXtcbiAgICBvcHRpb24gPSB7fTtcbiAgfVxuXG4gIGxldCBzdHIgPSBTdHJpbmcobik7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKHN0clswXSA9PT0gXCItXCIpe1xuICAgIHN0ciA9IHN0ci5zbGljZSgxLCBzdHIubGVuZ3RoKTtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgaWYoIW5lZ2F0aXZlICYmIG9wdGlvbiAmJiBvcHRpb24ubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKGlzTmFOKE51bWJlcihzdHIpKSl7XG4gICAgc3RyID0gXCIwXCI7XG4gIH1cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IHN0ci5zcGxpdChcIi5cIik7XG4gIGxldCBpbnRfc3RyID0gcGFydHNbMF07XG4gIGxldCBkZWNpbWFsX3N0ciA9IHBhcnRzWzFdO1xuICBpZihpbnRfc3RyKXtcbiAgICBjb25zdCBpbnQwID0gaW50X3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihpbnQwICYmIGludDAubGVuZ3RoID09PSBpbnRfc3RyLmxlbmd0aCl7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBuZXdfaW50X3N0ciA9IFwiXCI7XG4gICAgbGV0IHN0YXJ0X3plcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPGludF9zdHIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoaW50X3N0cltpXSAhPT0gXCIwXCIgfHwgIXN0YXJ0X3plcm8pe1xuICAgICAgICBzdGFydF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19pbnRfc3RyICs9IGludF9zdHJbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfaW50X3N0cil7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBpbnRfc3RyID0gbmV3X2ludF9zdHI7XG4gICAgfVxuICB9XG5cbiAgaWYoZGVjaW1hbF9zdHIpe1xuICAgIGNvbnN0IGRlYzAgPSBkZWNpbWFsX3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihkZWMwICYmIGRlYzAubGVuZ3RoID09PSBkZWNpbWFsX3N0ci5sZW5ndGgpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IGVuZF96ZXJvID0gdHJ1ZTtcbiAgICBsZXQgbmV3X2RlY2ltYWxfc3RyID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSBkZWNpbWFsX3N0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICBpZihkZWNpbWFsX3N0cltpXSAhPT0gXCIwXCIgfHwgIWVuZF96ZXJvKXtcbiAgICAgICAgZW5kX3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2RlY2ltYWxfc3RyID0gZGVjaW1hbF9zdHJbaV0gKyBuZXdfZGVjaW1hbF9zdHI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfZGVjaW1hbF9zdHIpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGRlY2ltYWxfc3RyID0gbmV3X2RlY2ltYWxfc3RyO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGludF9hcnIgPSBjb3JlLm51bVRvQXJyYXkoaW50X3N0cik7XG4gIGxldCBkZWNpbWFsX2FyciA9IGRlY2ltYWxfc3RyID8gY29yZS5udW1Ub0FycmF5KGRlY2ltYWxfc3RyKSA6IFswXTtcblxuICB0aGlzLmludGVnZXIgPSBpbnRfYXJyO1xuICB0aGlzLmRlY2ltYWwgPSBkZWNpbWFsX2FycjtcbiAgdGhpcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlID8gdHJ1ZSA6IGZhbHNlO1xuICBcbiAgbGV0IGRlbm9taW5hdG9yID0gWzFdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2ltYWwubGVuZ3RoOyBpKyspe1xuICAgIGRlbm9taW5hdG9yLnB1c2goMCk7XG4gIH1cblxuICB0aGlzLmZyYWN0aW9uID0ge1xuICAgIG51bWVyYXRvcjogdGhpcy5pbnRlZ2VyLmNvbmNhdCh0aGlzLmRlY2ltYWwpLFxuICAgIGRlbm9taW5hdG9yOiBkZW5vbWluYXRvclxuICB9O1xuXG59O1xuXG5jb25zdCBtYWtlU3UgPSBmdW5jdGlvbihudW0sIG9wdGlvbil7XG4gIHJldHVybiBuZXcgU3UobnVtLCBvcHRpb24pO1xufTtcblxuY29uc3QgaXNTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoc3UgaW5zdGFuY2VvZiBTdSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGNvcHlTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgc3RyID0gc3UuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldE1lc3NhZ2UgPSBmdW5jdGlvbih0eXBlKXtcbiAgaWYodHlwZSA9PT0gXCJub3RzdVwiKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgU3UuXCI7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59O1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gIFpFUk86IG1ha2VTdSgwKSxcbiAgT05FOiBtYWtlU3UoMSksXG4gIEZJUlNUX1BSSU1FX05VTUJFUjogbWFrZVN1KDIpLFxuICBNQVg6IG1ha2VTdShNQVgpLFxuICBNSU46IG1ha2VTdShNSU4pXG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmU/IFwiLVwiICsgc3RyOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgaWYoYWJzb2x1dGUpe1xuICAgIGEubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBiLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihhLmlzWmVybygpICYmIGIuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihhLmludGVnZXIubGVuZ3RoID4gYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihhLmludGVnZXIubGVuZ3RoIDwgYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9ZWxzZXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IGEuaW50ZWdlcltpXTtcbiAgICAgIGxldCBlbG1fYiA9IGIuaW50ZWdlcltpXTtcbiAgICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gYS5kZWNpbWFsLmxlbmd0aCA+PSBiLmRlY2ltYWwubGVuZ3RoID8gYS5kZWNpbWFsLmxlbmd0aCA6IGIuZGVjaW1hbC5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IGEuZGVjaW1hbFtpXSA/IGEuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBiLmRlY2ltYWxbaV0gPyBiLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZpZWxkWzBdO1xuICB9XG5cbn07XG5cblxuU3UucHJvdG90eXBlLmlzRXF1YWwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzID09PSBiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1Bvc2l0aXZlKCkgJiYgdGhpcy5pc0ludGVnZXIoKSAmJiB0aGlzLmlzTGFyZ2UoMCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNOZWdhdGl2ZSgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuU3UucHJvdG90eXBlLmNvbnRhaW5EZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdGhpcy5kZWNpbWFsLnJlZHVjZShmdW5jdGlvbihhLCB2KXtcbiAgICAgIHJldHVybiBhICsgdjtcbiAgfSk7XG4gIGlmKHJlcyA9PT0gMCl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0TWVzc2FnZShcIm5vdHN1XCIpKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gYS5zdWJ0cmFjdChiKTtcbiAgfVxuXG4gIGxldCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmVzID0gYTtcbiAgfVxuICBsZXQgaW50X2EgPSByZXMuaW50ZWdlcjtcbiAgbGV0IGRlY19hID0gcmVzLmRlY2ltYWw7XG4gIGxldCBpbnRfYiwgZGVjX2I7XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgaW50X2IgPSBiLmludGVnZXI7XG4gICAgZGVjX2IgPSBiLmRlY2ltYWw7XG4gIH1lbHNle1xuICAgIGludF9iID0gYS5pbnRlZ2VyO1xuICAgIGRlY19iID0gYS5kZWNpbWFsO1xuICB9XG5cbiAgbGV0IGxlbl9pID0gaW50X2EubGVuZ3RoO1xuICBsZXQgbGVuX2QgPSBkZWNfYS5sZW5ndGg7XG5cbiAgaWYoZGVjX2IubGVuZ3RoID4gZGVjX2EubGVuZ3RoKXtcbiAgICBsZW5fZCA9IGRlY19iLmxlbmd0aDtcbiAgfVxuICBsZXQgb3ZlciA9IDAsXG4gICAgICBpbnRfcmVzID0gW10sXG4gICAgICBkZWNfcmVzID0gW107XG5cblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0TWVzc2FnZShcIm5vdHN1XCIpKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcbiAgcmV0dXJuIG1ha2VTdShtaW51cyArIHJlc19hcnJheS5qb2luKFwiXCIpKTtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gbWFrZVN1KDApO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICB3aGlsZShhLmlzTGFyZ2Uoc3VtKSB8fCBhLmlzRXF1YWwoc3VtKSl7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KDEpKTtcbiAgICBzdW0gPSBiLm11bHRpcGxpY2F0aW9uKGNvdW50KTtcbiAgfVxuXG4gIGNvdW50ID0gY291bnQuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgc3VtID0gc3VtLnN1YnRyYWN0KGIpO1xuICBjb25zdCByZW1haW4gPSBhLnN1YnRyYWN0KHN1bSk7XG4gIGNvbnN0IHJlcyA9IGNvdW50O1xuICByZXMucmVtYWluZGVyID0gcmVtYWluO1xuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuU3UucHJvdG90eXBlLnBsdXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUudGFzdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmhpa3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmtha2VydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLndhcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmRpdmlzaW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuYWRkKG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBcbiAgaWYoIHJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09kZE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIGlmKCAhcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldERpdmlzb3JzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IHRoaXMuaXNMYXJnZShtYWtlU3UoaSkpOyBpKyspe1xuICAgIGxldCBzdSA9IG1ha2VTdShpKTtcbiAgICBjb25zdCByZW1haW5kZXIgPSB0aGlzLmRpdmlzaW9uKHN1KS5yZW1haW5kZXI7XG4gICAgaWYocmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgYXJyLnB1c2godGhpcyk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0Q29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgbGV0IGEgPSB0aGlzO1xuICBsZXQgYiA9IHN1O1xuXG4gIGNvbnN0IGFycl9hID0gYS5nZXREaXZpc29ycygpO1xuICBpZihhLmlzRXF1YWwoYikpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IGIuZ2V0RGl2aXNvcnMoKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGVsbV9iID0gYXJyX2Jbal07XG4gICAgICBpZihlbG1fYS5pc0VxdWFsKGVsbV9iKSl7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cbiAgY29uc3QgYXJyID0gdGhpcy5nZXRDb21tb25EaXZpc29ycyhzdSk7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IENPTlNUQU5UUy5NQVgubnVtYmVyOyBpKyspe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oaSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuXG4gIGNvbnN0IG1heENvbW1vbkRpdmlzb3IgPSBhLmdldE1heENvbW1vbkRpdmlzb3IoYik7XG5cbiAgY29uc3QgbXVsdGkgPSBhLm11bHRpcGx5KGIpO1xuXG4gIGNvbnN0IHJlcyA9IG11bHRpLmRpdmlzaW9uKG1heENvbW1vbkRpdmlzb3IpO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblN1LnByb3RvdHlwZS5maWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW3plcm8sIG9uZV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGZpYnMgPSB0aGlzLmZpYm9uYWNjaVNlcXVlbmNlKDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmx1Y2FzU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW21ha2VTdSgyKSwgbWFrZVN1KDEpXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMdWNhc051bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsdWNzID0gdGhpcy5sdWNhc1NlcXVlbmNlKDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbHVjcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBsdWNzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmx1Y2FzUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbHMgPSB0aGlzLmx1Y2FzU2VxdWVuY2UoKTtcbiAgY29uc3QgYXJyID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGxzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBsID0gbHNbaV07XG4gICAgaWYobC5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW3RoaXNdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gYXJndW1lbnRzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXRTZXF1ZW5jZSguLi5hcmd1bWVudHMpO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBzdW0gPSBzdW0uYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldFNlcXVlbmNlKC4uLmFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYSA9IG1ha2VTdSh0aGlzLmFycmF5W2ldKTtcbiAgICBzdW0gPSBzdW0uYWRkKGEpO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgyKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuY3ViZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgb25lID0gbWFrZVN1KFwiMVwiKTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgaWYoc3UuaXNFcXVhbChvbmUpKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsZXQgY291bnQgPSBvbmU7XG4gIGxldCByZXMgPSBjb3B5U3UodGhpcyk7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoc3UpKXtcbiAgICByZXMgPSB0aGlzLm11bHRpcGxpY2F0aW9uKHJlcyk7XG4gICAgY291bnQgPSBjb3VudC5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5pc09uZSgpIHx8IHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjJcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKG9uZSkpe1xuICAgIGxldCBlID0gdGhpcy5kaXZpc2lvbihjb3VudGVyKTtcbiAgICBpZihlLnJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldERpdmlzb3JzKCk7XG4gIGxldCBhID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhID0gYS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNMYXJnZSggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzRGVmaWNpZW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNTbWFsbCggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzUGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLnN1YnRyYWN0KHRoaXMpLmlzRXF1YWwodGhpcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5mYWN0b3JpYWwgPSBmdW5jdGlvbigpe1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZSh6ZXJvKSl7XG4gICAgcmVzID0gcmVzLm11bHRpcGxpY2F0aW9uKGNvdW50ZXIpO1xuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1RyaWFuZ2xlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgbGV0IGVsbSA9IG1ha2VTdSgxKTtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBiID0gdHJ1ZTtcbiAgd2hpbGUoYil7XG4gICAgcmVzID0gcmVzLnN1YnRyYWN0KGVsbSk7XG4gICAgaWYocmVzLmlzWmVybygpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZihyZXMuaXNTbWFsbChtYWtlU3UoMCkpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxtID0gZWxtLmFkZChtYWtlU3UoMSkpO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0VHJpYW5nbGVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZ2V0UG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmdldFNxdWFyZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5nZXRQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSg0KSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0UG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4pe1xuICBpZighaXNTdShuKSl7XG4gICAgbiA9IG1ha2VTdShuKTtcbiAgfVxuICBpZihuLmlzU21hbGwobWFrZVN1KDMpKSl7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDEpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHJhbmdlID0gY3VycmVudDtcblxuICBjb25zdCBpbmNyZW1lbnQgPSBuLnN1YnRyYWN0KG1ha2VTdSgyKSk7XG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSl7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgcmFuZ2UgPSByYW5nZS5hZGQoaW5jcmVtZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5hZGQocmFuZ2UpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUubWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgdHdvID0gbWFrZVN1KDIpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMCk7XG4gIGxldCBleCA9IG1ha2VTdSgxKTtcbiAgXG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLm1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbWFyciA9IHRoaXMubWVyc2VubmVOdW1iZXJzKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbiA9IG1hcnJbaV07XG4gICAgaWYobi5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSB0aGlzLm1lcnNlbm5lTnVtYmVycygpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IHRoaXMubWVyc2VubmVQcmltZU51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IG1ha2VTdSgwKTtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gbWFrZVN1KDEpO1xuICB9XG4gIGlmKCFpc1N1KG1pbikpe1xuICAgIG1pbiA9IG1ha2VTdShtaW4pO1xuICB9XG4gIGlmKCFpc1N1KG1heCkpe1xuICAgIG1heCA9IG1ha2VTdShtYXgpO1xuICB9XG5cbiAgY29uc3Qgc3RyID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBsZXQgcmFuO1xuXG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIGlmKG1pbi5pc1plcm8oKSl7XG4gICAgICByYW4gPSBtYWtlU3UoMCk7XG4gICAgfWVsc2V7XG4gICAgICByYW4gPSBtaW47XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByYW4gPSBtYWtlU3UoXCIwLlwiICsgYXJyWzFdKS5tdWx0aXBsaWNhdGlvbihtYXgpO1xuICB9XG4gIHJldHVybiByYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ha2VTdTogbWFrZVN1LFxuICBjb3B5U3U6IGNvcHlTdSxcbiAgaXNTdTogaXNTdSxcbiAgS2VpOiBLLFxuICBTdTogU3Vcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==