(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["su"] = factory();
	else
		root["su"] = factory();
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
      return false;
    } else {
      return true;
    }
  }

  return false;
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

core.numToArrayWithDecimal = function (n) {
  var arr1 = [];
  var arr2 = [];
  var str = String(n);
  var len = str.length;
  var tgt = arr1;

  for (var i = 0; i < len; i++) {
    var elm = Number(str[i]);

    if (!this.isNumber(elm)) {
      if (elm === "." && tgt === arr1) {
        tgt = arr2;
      } else {
        throw new Error("This function has been called with incorrect parameters");
      }
    }

    tgt.push(elm);
  }

  return [].concat(arr1, [".", arr2]);
};

core.numToArrayWithDecimal2 = function (n) {
  var str = String(n);
  var arr = str.split("");
  var _int = [];
  var decimal = [];
  var is_decimal = false;

  for (var i = 0; i < arr.length; i++) {
    var num = Number(arr[i]);
    var isNumber = this.isNumber(num);

    if (!isNumber && arr[i] === ".") {
      is_decimal = true;
      continue;
    } else if (!isNumber) {
      throw new Error("This function has been called with incorrect parameters");
    }

    if (is_decimal) {
      decimal.push(num);
    } else {
      _int.push(num);
    }
  }

  return {
    "int": _int,
    decimal: decimal
  };
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

core.add = function (a, b) {
  if (!a && !b) {
    return;
  }

  var a_ = this.numToArrayWithDecimal2(a);
  var b_ = this.numToArrayWithDecimal2(b);
  var a_int = a_["int"];
  var b_int = b_["int"];
  var a_dec = a_.decimal;
  var b_dec = b_.decimal;
  var dec_len = a_dec.length;

  if (dec_len < b_dec.length) {
    dec_len = b_dec.length;
  }

  for (var i = 0; i < dec_len; i++) {
    var a_d = a_dec[i];
    var b_d = b_dec[i];

    if (!core.isNumber(a_d)) {
      a_dec.push(0);
    }

    if (!core.isNumber(b_d)) {
      b_dec.push(0);
    }
  }

  var calc = function calc(a, b) {
    var arr = [];
    var arr_a = a;
    var arr_b = b;

    if (a.length < b.length) {
      arr_a = b;
      arr_b = a;
    }

    var carry = 0;

    for (var _i = 0; _i < arr_a.length; _i++) {
      var aa = arr_a[_i] ? arr_a[_i] : 0;
      var bb = arr_b[_i] ? arr_b[_i] : 0;
      var res = aa + bb + carry;

      if (res > 9) {
        res = res - 10;
        carry = 1;
      } else {
        carry = 0;
      }

      arr.push(res);
    }

    return {
      array: arr,
      carry: carry
    };
  };

  var _ref = function () {
    var res = calc(a_dec.reverse(), b_dec.reverse());
    return {
      dec_arr: res.array.reverse(),
      dec_carry: res.carry
    };
  }(),
      dec_arr = _ref.dec_arr,
      dec_carry = _ref.dec_carry;

  var int_arr = function (dec_carry) {
    var res = calc(a_int.reverse(), b_int.reverse());

    if (res.carry > 0) {
      res.array.push(res.carry);
    }

    if (dec_carry > 0) {
      res = calc(res.array, [dec_carry]);
    }

    return res.array.reverse();
  }(dec_carry);

  return {
    "int": int_arr,
    decimal: dec_arr
  };
};

/* harmony default export */ __webpack_exports__["default"] = (core);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _su_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./su.js */ "./su.js");
/* harmony import */ var _SK_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SK.js */ "./SK.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.js */ "./core.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  s: _su_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  S: _SK_js__WEBPACK_IMPORTED_MODULE_1__["default"].S,
  K: _SK_js__WEBPACK_IMPORTED_MODULE_1__["default"].K,
  core: _core_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3UvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNPTlNUQU5UUyIsIk1JTiIsIlMiLCJLIiwibWFrZVN1Iiwic3UiLCJjb3B5U3UiLCJpc1N1IiwiU3UiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJ1bmRlZmluZWQiLCJzdHIiLCJTdHJpbmciLCJNYXRoIiwicmFuIiwiaXNaZXJvIiwiYXJyIiwic3BsaXQiLCJtdWx0aXBsaWNhdGlvbiIsInJhbmRvbUVsZW1lbnQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJpbnRlZ2VyIiwicmFuZG9tSW50IiwiaXNFcXVhbCIsImlzTGFyZ2UiLCJnZXROdW1iZXIiLCJzIiwicHVzaCIsInJlcyIsIm1ha2VQcmltZU51bWJlcnMiLCJOdW1iZXIiLCJnZXRTdHJpbmciLCJpc1ByaW1lTnVtYmVyIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwiYSIsImIiLCJpc051bWJlciIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImoiLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJuIiwiZGl2aXNvcnMiLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwibWF4Q29tbW9uRGl2aXNvciIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsImFycmF5U3VtbWF0aW9uIiwiQXJyYXkiLCJjb3JlIiwibnVtVG9BcnJheSIsImlzTnVtQXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJBIiwiQiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXJnZXIiLCJhcnJfYSIsImFycl9iIiwiZ2FwIiwib3ZlciIsImFycl9jIiwiX3JlcyIsImVsbV9hIiwiZWxtX2IiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsInNsaWNlIiwiRXJyb3IiLCJudW1Ub0FycmF5V2l0aERlY2ltYWwiLCJhcnIxIiwiYXJyMiIsInRndCIsIm51bVRvQXJyYXlXaXRoRGVjaW1hbDIiLCJpbnQiLCJkZWNpbWFsIiwiaXNfZGVjaW1hbCIsImFkZCIsImFfIiwiYl8iLCJhX2ludCIsImJfaW50IiwiYV9kZWMiLCJiX2RlYyIsImRlY19sZW4iLCJhX2QiLCJiX2QiLCJjYXJyeSIsImFhIiwiYmIiLCJkZWNfYXJyIiwiZGVjX2NhcnJ5IiwiaW50X2FyciIsIlNLIiwiY29uc3RhbnRzIiwib3B0aW9uIiwibmVnYXRpdmUiLCJwYXJ0cyIsImludF9zdHIiLCJkZWNpbWFsX3N0ciIsImludDAiLCJtYXRjaCIsIm5ld19pbnRfc3RyIiwic3RhcnRfemVybyIsImRlYzAiLCJlbmRfemVybyIsIm5ld19kZWNpbWFsX3N0ciIsImRlY2ltYWxfYXJyIiwiZSIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJtZXNzYWdlIiwiWkVSTyIsIk9ORSIsInByb3RvdHlwZSIsImFjIiwicmVkdWNlIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpX2EiLCJpX2IiLCJkX2EiLCJkX2IiLCJsYXJnZSIsImNvbnRhaW5EZWNpbWFsIiwiaXNPbmUiLCJpc1NtYWxsIiwiaXNQb3NpdGl2ZSIsImlzTmVnYXRpdmUiLCJ2IiwibWFrZVBvc2l0aXZlIiwic3VidHJhY3QiLCJpbnRfYSIsImRlY19hIiwiaW50X2IiLCJkZWNfYiIsImxlbl9pIiwibGVuX2QiLCJpbnRfcmVzIiwiZGVjX3JlcyIsImQiLCJwb3AiLCJuZWdhdGUiLCJhX2lkIiwiYl9pZCIsImFfaV9sZW4iLCJiX2lfbGVuIiwiYV9kX2xlbiIsImJfZF9sZW4iLCJkX2dhcCIsImFicyIsImRlYnQiLCJyZXNfYXJyYXkiLCJhX2VsbSIsImJfZWxtIiwic3BsaWNlIiwibWludXMiLCJuZXZhdGl2ZSIsIm1ha2VOZWdhdGl2ZSIsImRwX2EiLCJkcF9iIiwicmVzX2FyciIsInBvc19hIiwicG9zX2IiLCJwb3MiLCJwYWRFbmQiLCJwYWRTdGFydCIsImNvdW50IiwicmVtYWluIiwicGx1cyIsInRhc3UiLCJoaWt1IiwibXVsdGlwbHkiLCJrYWtlcnUiLCJ3YXJ1IiwibmV4dCIsInByZXYiLCJnZXREaXZpc29ycyIsImdldENvbW1vbkRpdmlzb3JzIiwiZGl2cyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJtdWx0aXBsZSIsImdldExlYXN0Q29tbW9uTXVsdGlwbGUiLCJtdWx0aSIsIm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSIsImZ1bmMiLCJjIiwibWFrZUx1Y2FzU2VxdWVuY2UiLCJpc0ZpYm9uYWNjaU51bWJlciIsInplcm8iLCJvbmUiLCJmaWJzIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJtYWtlU2VxdWVuY2UiLCJvdGhlcnMiLCJnZXRTZXF1ZW5jZSIsImRpZ2l0c3VtIiwic3F1YXJlIiwiZXhwb25lbnRpYXRlIiwiY3ViZSIsImlzRGVmaWNpZW50TnVtYmVyIiwiaXNQZXJmZWN0TnVtYmVyIiwiZmFjdG9yaWFsIiwibWFrZVBvbHlnb25hbE51bWJlcnMiLCJjdXJyZW50IiwicmFuZ2UiLCJpbmNyZW1lbnQiLCJtYWtlVHJpYW5nbGVOdW1iZXJzIiwibWFrZVNxdWFyZU51bWJlcnMiLCJpc1RyaWFuZ2xlTnVtYmVyIiwiZmluZCIsImlzU3F1YXJlTnVtYmVyIiwibWFrZU1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzIiwibWFyciIsImlzTWVyc2VubmVOdW1iZXIiLCJtcyIsIm0iLCJpc01lcnNlbm5lUHJpbWVOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFB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QUNrSyxTQUFILENBQWFpSCxxQkFBYixHQUFxQyxZQUFVO0FBQzdDLE1BQU01TixDQUFDLEdBQUcsSUFBVjs7QUFDQSxNQUFHQSxDQUFDLENBQUM3QyxNQUFGLEVBQUgsRUFBYztBQUNaLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUc2QyxDQUFDLENBQUMySCxjQUFGLEVBQUgsRUFBc0I7QUFDcEIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTStGLEVBQUUsR0FBR0gsd0JBQXdCLENBQUN2TixDQUFELENBQW5DOztBQUNBLE9BQUksSUFBSXZDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR2lRLEVBQUUsQ0FBQ2hRLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQWtDO0FBQ2hDLFFBQUlrUSxDQUFDLEdBQUdELEVBQUUsQ0FBQ2pRLENBQUQsQ0FBVjs7QUFDQSxRQUFHa1EsQ0FBQyxDQUFDOVAsT0FBRixDQUFVbUMsQ0FBVixDQUFILEVBQWdCO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQWhCRDs7QUFtQmU7QUFDYjNELFFBQU0sRUFBRUEsTUFESztBQUViRSxRQUFNLEVBQUVBLE1BRks7QUFHYkMsTUFBSSxFQUFFQSxJQUhPO0FBSWJDLElBQUUsRUFBRUE7QUFKUyxDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgc3UgZnJvbSBcIi4vc3UuanNcIjtcblxuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcbmNvbnN0IE1JTiA9IENPTlNUQU5UUy5NSU47XG5cbmNvbnN0IFMgPSB7fTtcbmNvbnN0IEsgPSB7fTtcblxuY29uc3QgbWFrZVN1ID0gc3UubWFrZVN1O1xuY29uc3QgY29weVN1ID0gc3UuY29weVN1O1xuY29uc3QgaXNTdSA9IHN1LmlzU3U7XG5jb25zdCBTdSA9IHN1LlN1O1xuXG5jb25zdCBGSVJTVF9QUklNRV9OVU1CRVIgPSAyO1xuXG5cbksucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gbWFrZVN1KDApO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSBtYWtlU3UoMSk7XG4gIH1cbiAgaWYoIWlzU3UobWluKSl7XG4gICAgbWluID0gbWFrZVN1KG1pbik7XG4gIH1cbiAgaWYoIWlzU3UobWF4KSl7XG4gICAgbWF4ID0gbWFrZVN1KG1heCk7XG4gIH1cblxuICBjb25zdCBzdHIgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gIGxldCByYW47XG5cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgaWYobWluLmlzWmVybygpKXtcbiAgICAgIHJhbiA9IG1ha2VTdSgwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJhbiA9IG1pbjtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICAgIHJhbiA9IG1ha2VTdShcIjAuXCIgKyBhcnJbMV0pLm11bHRpcGxpY2F0aW9uKG1heCk7XG4gIH1cbiAgcmV0dXJuIHJhbjtcbn07XG5cbksucmFuZG9tRWxlbWVudCA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgY29uc3QgaSA9IEsucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCkuaW50ZWdlcjtcbiAgcmV0dXJuIGFycmF5W2ldO1xufTtcblxuSy5yYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYoICFpc1N1KG1pbikgfHwgIWlzU3UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKG1pbi5pc0VxdWFsKG1heCkgfHwgbWluLmlzTGFyZ2UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbi5nZXROdW1iZXIoKTsgaSA8PSBtYXguZ2V0TnVtYmVyKCk7IGkrKyl7XG4gICAgY29uc3QgcyA9IG1ha2VTdShpKTtcbiAgICBhcnIucHVzaChzKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IEsucmFuZG9tRWxlbWVudChhcnIpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG5LLm1ha2VQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZihtYXggJiYgbWF4LmlzU3UgJiYgbWF4LmlzU3UoKSl7XG4gICAgbWF4ID0gTnVtYmVyKG1heC5nZXRTdHJpbmcoKSk7XG4gIH1cblxuICBjb25zdCBNQVggPSAxMDA7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBpZihtYXggPiBNQVgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgbWF4OyBpKyspe1xuICAgIGNvbnN0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGlmKHN1LmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgfVxuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2pdO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBzdW0gKz0gZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuXG5cbksuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgZW1wdHkuXCI7XG4gIH1cbiAgbGV0IGlwID0gMTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtpXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgaXAgPSBpcCAqIGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBhIE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5LLmRpdmlzaW9uID0gZnVuY3Rpb24oZGl2aWRlbmQsIGRpdmlzb3Ipe1xuICBpZihkaXZpZGVuZCA9PT0gdW5kZWZpbmVkIHx8IGRpdmlzb3IgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGRpdmlkZW5kIC8gZGl2aXNvcjtcbiAgcmV0dXJuIHtcbiAgICBpbnRlZ2VyOiB7XG4gICAgICByZW1haW5kZXI6IGRpdmlkZW5kICUgZGl2aXNvcixcbiAgICAgIHJlc3VsdDogTWF0aC5mbG9vcihyZXN1bHQpXG4gICAgfSxcbiAgICByZWFsTnVtYmVyOiByZXN1bHRcbiAgfTtcbn07XG5cbksuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgbGV0IGEgPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhICs9IGFycltpXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbksuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdW0gPSBLLmRpdmlzb3JzU3VtbWF0aW9uKG4pO1xuICBpZihzdW0gPiBuICogMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUEgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gbiAqIG47XG4gIGNvbnN0IHMgPSBTdHJpbmcobnVtKTtcbiAgY29uc3QgbGVuID0gcy5sZW5ndGg7XG4gIGxldCBmaXJzdF9sZW4gPSAwO1xuICBsZXQgYWZ0ZXJfbGVuID0gMDtcbiAgbGV0IGZpcnN0LCBhZnRlcjtcbiAgaWYoUy5pc09kZE51bWJlcihsZW4pKXtcbiAgICBmaXJzdF9sZW4gPSAobGVuIC0gMSkgLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbiArIDE7XG4gIH1lbHNle1xuICAgIGZpcnN0X2xlbiA9IGxlbiAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuO1xuICB9XG4gIGZpcnN0ID0gTnVtYmVyKHMuc3Vic3RyKDAsIGZpcnN0X2xlbikpO1xuICBhZnRlciA9IE51bWJlcihzLnN1YnN0cihmaXJzdF9sZW4sIGFmdGVyX2xlbikpO1xuXG4gIGlmKCggZmlyc3QgKyBhZnRlciApID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQiA9IGZ1bmN0aW9uKG4pe1xuXG4gIGNvbnN0IGFyciA9IFN0cmluZyhuKS5zcGxpdChcIlwiKTtcblxuICBjb25zdCBtaW4gPSBOdW1iZXIoYXJyLnNvcnQoKS5qb2luKFwiXCIpKTtcbiAgY29uc3QgbWF4ID0gTnVtYmVyKGFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG5cbiAgaWYoKG1heCAtIG1pbikgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQShuKSB8fCBLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNJbnRlZ2VyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4pO1xuICBpZiggZiA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8g6Kq/5ZKM5bmz5Z2HXG5LLmhhcm1vbmljTWVhbiA9IGZ1bmN0aW9uKGFycil7XG4gIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIHN1bSArPSAxIC8gYXJyW2ldO1xuICB9XG4gIHJldHVybiBsZW4gLyBzdW07XG59O1xuXG4vLyDoqr/lkozmlbDjgYvjganjgYbjgYtcbksuaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgY29uc3QgcmVzID0gSy5oYXJtb25pY01lYW4oYXJyKTtcbiAgaWYoUy5pc0ludGVnZXIocmVzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuUy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYobiA+IDAgJiYgUy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbksuY29sbGF0emhQcm9ibGVtID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBhcnIgPSBbXTtcblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24obil7XG4gICAgbGV0IHJlcyA9IG47XG4gICAgaWYoUy5pc09kZE51bWJlcihuKSl7XG4gICAgICByZXMgPSBuICogMyArIDE7XG4gICAgfWVsc2UgaWYoUy5pc0V2ZW5OdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAvIDI7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgd2hpbGUobnVtID4gMSl7XG4gICAgbnVtID0gY2FsYyhudW0pO1xuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODleOCp+ODq+ODnuODvOODhuOCueODiFxuLy8gSlPjga7mibHjgYjjgovnr4Tlm7LjgpLotoXjgYjjgabjgYTjgabjgYbjgb7jgY/li5XjgYvjgZpcbksuZmVybWF0VGVzdCA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFTLmlzSW50ZWdlcihuKSB8fCBTLmlzWmVybyhuKSB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzLiBcIiArIG4gKyBcIiBpcyBpbmNvcnJlY3QgcGFyYW1ldGVyLlwiO1xuICB9XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gMTAwO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMTsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgYSA9IEsucmFuZG9tSW50KDIsIG4gLSAxKTtcbiAgICBpZihLLm1heENvbW1vbkRpdmlzb3IoYSwgbikgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IE1hdGgucG93KGEsIG4gLSAxKSAlIG47XG4gICAgaWYocmVzICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCJNYXliZSBQcmltZSBOdW1iZXJcIjtcbn07XG5cbi8vIOe1hOOBv+WQiOOCj+OBm+aVsOOBruioiOeul1xuLy8gSy5jb21iaW5hdGlvbnMgPSBmdW5jdGlvbihhcnIpe1xuLy8gfTtcblxuLy8gMyA9PiBbMCwgM10sIFsxLCAyXSwgWzIsIDFdLCBbMywgMF1cbksuZ2V0SW5jbHVkZXNOdW1iZXJzID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCB0ZW1wID0gbnVtO1xuICBsZXQgYm9vbCA9IHRydWU7XG4gIHdoaWxlKGJvb2wpe1xuICAgIGNvbnN0IGEgPSB0ZW1wO1xuICAgIGNvbnN0IGIgPSBudW0gLXRlbXA7XG4gICAgY29uc3QgYXIgPSBbYSxiXTtcbiAgICBhcnIucHVzaChhcik7XG4gICAgdGVtcCA9IHRlbXAgLTE7XG4gICAgaWYodGVtcCA8IDApe1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyBmaWJvbmFjY2lcblxuXG5cblxuXG5cblxuLy8gdG9kbyAwc3RhcnRcbmNvbnN0IGFycmF5U3VtbWF0aW9uID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhKGEgaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICBhID0gY29yZS5udW1Ub0FycmF5KGEpO1xuICB9XG4gIGlmKCAhKGIgaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICBiID0gY29yZS5udW1Ub0FycmF5KGIpO1xuICB9XG5cbiAgaWYoIWNvcmUuaXNOdW1BcnJheShhKSB8fCAhY29yZS5pc051bUFycmF5KGIpKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYoY29yZS5pc1plcm8oYVswXSkgJiYgY29yZS5pc1plcm8oYlswXSkpe1xuICAgIHJldHVybiB7XG4gICAgICBhcnJheTogWzBdLFxuICAgICAgc3RyaW5nOiBcIjBcIixcbiAgICAgIG51bWJlcjogMCxcbiAgICAgIGxlbmd0aDogMVxuICAgIH07XG4gIH1cblxuICBjb25zdCBBID0gbWFrZVN1KGEpO1xuICBjb25zdCBCID0gbWFrZVN1KGIpO1xuXG4gIGNvbnNvbGUubG9nKEEsQik7XG5cbiAgY29uc3QgcmVzID0gY29yZS5nZXRMYXJnZXIoYSwgYik7XG4gIGNvbnN0IGFycl9hID0gcmVzWzBdO1xuICBjb25zdCBhcnJfYiA9IHJlc1sxXTtcbiAgY29uc3QgbGVuID0gYXJyX2EubGVuZ3RoO1xuXG4gIGNvbnN0IGdhcCA9IGxlbiAtIGFycl9iLmxlbmd0aDtcblxuICBsZXQgb3ZlciA9IDAsIGFycl9jID0gW107XG4gIGZvcihsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgYXJyX2MudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgYXJyX2MudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShhcnJfYyk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldExhcmdlciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnJfYSA9IFtdLCBhcnJfYiA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhW2ldO1xuICAgIGlmKGVsbV9hID09PSAwICYmIGFycl9hLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoZWxtX2EgPj0gIDAgJiYgZWxtX2EgPCAxMCl7XG4gICAgICBhcnJfYS5wdXNoKGVsbV9hKTtcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtX2IgPSBiW2ldO1xuICAgIGlmKGVsbV9iID09PSAwICYmIGFycl9iLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoZWxtX2IgPj0gIDAgJiYgZWxtX2IgPCAxMCl7XG4gICAgICBhcnJfYi5wdXNoKGVsbV9iKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzO1xuICBpZihhcnJfYS5sZW5ndGggPiBhcnJfYi5sZW5ndGgpe1xuICAgIHJlcyA9IFthLCBiXTtcbiAgfWVsc2UgaWYoYXJyX2EubGVuZ3RoIDwgYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYiwgYV07XG4gIH1lbHNle1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBlbG1fYWEgPSBhcnJfYVtpXTtcbiAgICAgIGNvbnN0IGVsbV9iYiA9IGFycl9iW2ldO1xuICAgICAgaWYoZWxtX2FhID4gZWxtX2JiKXtcbiAgICAgICAgcmVzID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hYSA8IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzID0gW2EsIGJdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogS1xufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWDogMTAwMDAsXG4gIE1JTjogLTEwMDAwLFxuICBEQlo6IFwiRGl2aXNpb24gYnkgWmVyb1wiLFxuICBOQU46IFwiTm90IGEgbnVtYmVyXCIsXG4gIE5PVFNVOiBcIkFyZ3VtZW50IGlzIG5vdCBTdS5cIlxufTtcbiIsImNvbnN0IGNvcmUgPSB7fTtcblxuY29yZS5pc051bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG4gICAgYXJyLnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyMSA9IFtdO1xuICBjb25zdCBhcnIyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgbGV0IHRndCA9IGFycjE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpZihlbG0gPT09IFwiLlwiICYmIHRndCA9PT0gYXJyMSl7XG4gICAgICAgIHRndCA9IGFycjI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGd0LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gWy4uLmFycjEsIFwiLlwiLCBhcnIyXTtcbn07XG5cbmNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGFyciA9IHN0ci5zcGxpdChcIlwiKTtcblxuICBjb25zdCBpbnQgPSBbXTtcbiAgY29uc3QgZGVjaW1hbCA9IFtdO1xuXG4gIGxldCBpc19kZWNpbWFsID0gZmFsc2U7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKGFycltpXSk7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0aGlzLmlzTnVtYmVyKG51bSk7XG4gICAgaWYoIWlzTnVtYmVyICYmIGFycltpXSA9PT0gXCIuXCIpe1xuICAgICAgaXNfZGVjaW1hbCA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9ZWxzZSBpZighaXNOdW1iZXIpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG5cbiAgICBpZihpc19kZWNpbWFsKXtcbiAgICAgIGRlY2ltYWwucHVzaChudW0pO1xuICAgIH1lbHNle1xuICAgICAgaW50LnB1c2gobnVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGludDogaW50LFxuICAgIGRlY2ltYWw6IGRlY2ltYWxcbiAgfTtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29yZS5hZGQgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoIWEgJiYgIWIpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGFfID0gdGhpcy5udW1Ub0FycmF5V2l0aERlY2ltYWwyKGEpO1xuICBjb25zdCBiXyA9IHRoaXMubnVtVG9BcnJheVdpdGhEZWNpbWFsMihiKTtcblxuICBjb25zdCBhX2ludCA9IGFfLmludDtcbiAgY29uc3QgYl9pbnQgPSBiXy5pbnQ7XG5cbiAgY29uc3QgYV9kZWMgPSBhXy5kZWNpbWFsO1xuICBjb25zdCBiX2RlYyA9IGJfLmRlY2ltYWw7XG5cbiAgbGV0IGRlY19sZW4gPSBhX2RlYy5sZW5ndGg7XG4gIGlmKGRlY19sZW4gPCBiX2RlYy5sZW5ndGgpe1xuICAgIGRlY19sZW4gPSBiX2RlYy5sZW5ndGg7XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgZGVjX2xlbjsgaSsrKXtcbiAgICBjb25zdCBhX2QgPSBhX2RlY1tpXTtcbiAgICBjb25zdCBiX2QgPSBiX2RlY1tpXTtcbiAgICBpZighY29yZS5pc051bWJlcihhX2QpKXtcbiAgICAgIGFfZGVjLnB1c2goMCk7XG4gICAgfVxuICAgIGlmKCFjb3JlLmlzTnVtYmVyKGJfZCkpe1xuICAgICAgYl9kZWMucHVzaCgwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24oYSwgYil7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgbGV0IGFycl9hID0gYTtcbiAgICBsZXQgYXJyX2IgPSBiO1xuICAgIGlmKGEubGVuZ3RoIDwgYi5sZW5ndGgpe1xuICAgICAgYXJyX2EgPSBiO1xuICAgICAgYXJyX2IgPSBhO1xuICAgIH1cbiAgICBsZXQgY2FycnkgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldIDogMDtcbiAgICAgIGxldCByZXMgPSBhYSArIGJiICsgY2Fycnk7XG4gICAgICBpZihyZXMgPiA5KXtcbiAgICAgICAgcmVzID0gcmVzIC0xMDtcbiAgICAgICAgY2FycnkgPSAxO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKHJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFycmF5OiBhcnIsXG4gICAgICBjYXJyeTogY2FycnlcbiAgICB9O1xuICB9O1xuXG4gIFxuICBjb25zdCB7IGRlY19hcnIsIGRlY19jYXJyeSB9ID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcmVzID0gY2FsYyhhX2RlYy5yZXZlcnNlKCksIGJfZGVjLnJldmVyc2UoKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlY19hcnI6IHJlcy5hcnJheS5yZXZlcnNlKCksXG4gICAgICBkZWNfY2Fycnk6IHJlcy5jYXJyeVxuICAgIH07XG4gIH0pKCk7XG5cbiAgbGV0IGludF9hcnIgPSAoZnVuY3Rpb24oZGVjX2NhcnJ5KXtcbiAgICBsZXQgcmVzID0gY2FsYyhhX2ludC5yZXZlcnNlKCksIGJfaW50LnJldmVyc2UoKSk7XG4gICAgaWYocmVzLmNhcnJ5ID4gMCl7XG4gICAgICByZXMuYXJyYXkucHVzaChyZXMuY2FycnkpO1xuICAgIH1cblxuICAgIGlmKGRlY19jYXJyeSA+IDApe1xuICAgICAgcmVzID0gY2FsYyhyZXMuYXJyYXksIFtkZWNfY2FycnldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5hcnJheS5yZXZlcnNlKCk7XG4gIH0pKGRlY19jYXJyeSk7XG5cblxuICByZXR1cm4ge1xuICAgIGludDogaW50X2FycixcbiAgICBkZWNpbWFsOiBkZWNfYXJyXG4gIH07XG5cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBzIGZyb20gXCIuL3N1LmpzXCI7XG5pbXBvcnQgU0sgZnJvbSBcIi4vU0suanNcIjtcbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzOiBzLFxuICBTOiBTSy5TLFxuICBLOiBTSy5LLFxuICBjb3JlOiBjb3JlXG59OyIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuY29uc3QgTUFYID0gY29uc3RhbnRzLk1BWDtcbmNvbnN0IE1JTiA9IGNvbnN0YW50cy5NSU47XG5jb25zdCBEQlogPSBjb25zdGFudHMuREJaO1xuY29uc3QgTkFOID0gY29uc3RhbnRzLk5BTjtcbmNvbnN0IE5PVFNVID0gY29uc3RhbnRzLk5PVFNVO1xuXG5cbmNvbnN0IFN1ID0gZnVuY3Rpb24obiwgb3B0aW9uKXtcbiAgaWYoaXNOYU4obikpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG4gIGlmKCFuKXtcbiAgICBuID0gMDtcbiAgfVxuICBpZighb3B0aW9uKXtcbiAgICBvcHRpb24gPSB7fTtcbiAgfVxuXG4gIGxldCBzdHIgPSBTdHJpbmcobik7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKHN0clswXSA9PT0gXCItXCIpe1xuICAgIHN0ciA9IHN0ci5zbGljZSgxLCBzdHIubGVuZ3RoKTtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgaWYoIW5lZ2F0aXZlICYmIG9wdGlvbiAmJiBvcHRpb24ubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKGlzTmFOKE51bWJlcihzdHIpKSl7XG4gICAgc3RyID0gXCIwXCI7XG4gIH1cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IHN0ci5zcGxpdChcIi5cIik7XG4gIGxldCBpbnRfc3RyID0gcGFydHNbMF07XG4gIGxldCBkZWNpbWFsX3N0ciA9IHBhcnRzWzFdO1xuICBpZihpbnRfc3RyKXtcbiAgICBjb25zdCBpbnQwID0gaW50X3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihpbnQwICYmIGludDAubGVuZ3RoID09PSBpbnRfc3RyLmxlbmd0aCl7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBuZXdfaW50X3N0ciA9IFwiXCI7XG4gICAgbGV0IHN0YXJ0X3plcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPGludF9zdHIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoaW50X3N0cltpXSAhPT0gXCIwXCIgfHwgIXN0YXJ0X3plcm8pe1xuICAgICAgICBzdGFydF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19pbnRfc3RyICs9IGludF9zdHJbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfaW50X3N0cil7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBpbnRfc3RyID0gbmV3X2ludF9zdHI7XG4gICAgfVxuICB9XG5cbiAgaWYoZGVjaW1hbF9zdHIpe1xuICAgIGNvbnN0IGRlYzAgPSBkZWNpbWFsX3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihkZWMwICYmIGRlYzAubGVuZ3RoID09PSBkZWNpbWFsX3N0ci5sZW5ndGgpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IGVuZF96ZXJvID0gdHJ1ZTtcbiAgICBsZXQgbmV3X2RlY2ltYWxfc3RyID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSBkZWNpbWFsX3N0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICBpZihkZWNpbWFsX3N0cltpXSAhPT0gXCIwXCIgfHwgIWVuZF96ZXJvKXtcbiAgICAgICAgZW5kX3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2RlY2ltYWxfc3RyID0gZGVjaW1hbF9zdHJbaV0gKyBuZXdfZGVjaW1hbF9zdHI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfZGVjaW1hbF9zdHIpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGRlY2ltYWxfc3RyID0gbmV3X2RlY2ltYWxfc3RyO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGludF9hcnI7XG4gIGxldCBkZWNpbWFsX2FycjtcblxuXG4gIHRyeXtcbiAgICBpbnRfYXJyID0gY29yZS5udW1Ub0FycmF5KGludF9zdHIpO1xuICAgIGRlY2ltYWxfYXJyID0gZGVjaW1hbF9zdHIgPyBjb3JlLm51bVRvQXJyYXkoZGVjaW1hbF9zdHIpIDogWzBdO1xuICB9Y2F0Y2goZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cblxuICB0aGlzLmludGVnZXIgPSBpbnRfYXJyO1xuICB0aGlzLmRlY2ltYWwgPSBkZWNpbWFsX2FycjtcbiAgdGhpcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlID8gdHJ1ZSA6IGZhbHNlO1xuICBcbiAgbGV0IGRlbm9taW5hdG9yID0gWzFdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2ltYWwubGVuZ3RoOyBpKyspe1xuICAgIGRlbm9taW5hdG9yLnB1c2goMCk7XG4gIH1cblxuICB0aGlzLmZyYWN0aW9uID0ge1xuICAgIG51bWVyYXRvcjogdGhpcy5pbnRlZ2VyLmNvbmNhdCh0aGlzLmRlY2ltYWwpLFxuICAgIGRlbm9taW5hdG9yOiBkZW5vbWluYXRvclxuICB9O1xuXG59O1xuXG5jb25zdCBtYWtlU3UgPSBmdW5jdGlvbihudW0sIG9wdGlvbil7XG4gIGxldCByZXM7XG4gIHRyeXtcbiAgICByZXMgPSBuZXcgU3UobnVtLCBvcHRpb24pO1xuICB9Y2F0Y2goZSl7XG4gICAgcmVzID0gZS5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuY29uc3QgaXNTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoc3UgaW5zdGFuY2VvZiBTdSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGNvcHlTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgc3RyID0gc3UuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgWkVSTzogbWFrZVN1KDApLFxuICBPTkU6IG1ha2VTdSgxKSxcbiAgRklSU1RfUFJJTUVfTlVNQkVSOiBtYWtlU3UoMiksXG4gIE1BWDogbWFrZVN1KE1BWCksXG4gIE1JTjogbWFrZVN1KE1JTilcbn07XG5cblxuU3UucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdHIgPSBTdHJpbmcoIHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgY29uc3QgYWMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKChhLGUpID0+IGEgKyBlKTtcbiAgaWYoYWMgIT09IDApe1xuICAgIHN0ciArPSBcIi5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLm5lZ2F0aXZlID8gYC0ke3N0cn1gIDogc3RyO1xufTtcblxuU3UucHJvdG90eXBlLmdldE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmdldFN0cmluZygpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXREZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKFwiMC5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldExhcmdlID0gZnVuY3Rpb24oYSwgYiwgYWJzb2x1dGUgPSBmYWxzZSl7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGxldCBmaWVsZCA9IFtdO1xuXG4gIGNvbnN0IF9hID0gbWFrZVN1KGEuZ2V0U3RyaW5nKCkpO1xuICBjb25zdCBfYiA9IG1ha2VTdShiLmdldFN0cmluZygpKTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgX2EubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBfYi5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYoX2EuaXNaZXJvKCkgJiYgX2IuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmICFfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGI7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihfYS5pbnRlZ2VyLmxlbmd0aCA+IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLmludGVnZXIubGVuZ3RoIDwgX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBfYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBfYS5pbnRlZ2VyW2ldO1xuICAgIGxldCBlbG1fYiA9IF9iLmludGVnZXJbaV07XG4gICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIGNvbnN0IGxlbiA9IF9hLmRlY2ltYWwubGVuZ3RoID49IF9iLmRlY2ltYWwubGVuZ3RoID8gX2EuZGVjaW1hbC5sZW5ndGggOiBfYi5kZWNpbWFsLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGVsbV9hID0gX2EuZGVjaW1hbFtpXSA/IF9hLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgbGV0IGVsbV9iID0gX2IuZGVjaW1hbFtpXSA/IF9iLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZFswXTtcblxufTtcblxuXG5TdS5wcm90b3R5cGUuaXNFcXVhbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGEuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1NtYWxsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGIuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzUG9zaXRpdmUoKSAmJiB0aGlzLmlzSW50ZWdlcigpICYmIHRoaXMuaXNMYXJnZShDT05TVEFOVFMuWkVSTykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuY29udGFpbkRlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKGZ1bmN0aW9uKGEsIHYpe1xuICAgICAgcmV0dXJuIGEgKyB2O1xuICB9KTtcbiAgaWYocmVzID09PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGxldCBiID0gc3UuY2xvbmUoKTtcbiAgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgbmVnYXRpdmU7XG4gIGlmKGEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgYi5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYS5zdWJ0cmFjdChiKTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgYS5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYi5zdWJ0cmFjdChhKTtcbiAgfVxuXG4gIGxldCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmVzID0gYTtcbiAgfVxuICBsZXQgaW50X2EgPSByZXMuaW50ZWdlcjtcbiAgbGV0IGRlY19hID0gcmVzLmRlY2ltYWw7XG4gIGxldCBpbnRfYiwgZGVjX2I7XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgaW50X2IgPSBiLmludGVnZXI7XG4gICAgZGVjX2IgPSBiLmRlY2ltYWw7XG4gIH1lbHNle1xuICAgIGludF9iID0gYS5pbnRlZ2VyO1xuICAgIGRlY19iID0gYS5kZWNpbWFsO1xuICB9XG5cbiAgbGV0IGxlbl9pID0gaW50X2EubGVuZ3RoO1xuICBsZXQgbGVuX2QgPSBkZWNfYS5sZW5ndGg7XG5cbiAgaWYoZGVjX2IubGVuZ3RoID4gZGVjX2EubGVuZ3RoKXtcbiAgICBsZW5fZCA9IGRlY19iLmxlbmd0aDtcbiAgfVxuICBsZXQgb3ZlciA9IDAsXG4gICAgICBpbnRfcmVzID0gW10sXG4gICAgICBkZWNfcmVzID0gW107XG5cbiAgZm9yKGxldCBpID0gbGVuX2QgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gZGVjX2FbaV0gfHwgMDtcbiAgICBsZXQgZWxtX2IgPSBkZWNfYltpXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBkZWNfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cblxuICBmb3IobGV0IGkgPSBkZWNfcmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICl7XG4gICAgbGV0IGQgPSBkZWNfcmVzW2ldO1xuICAgIGlmKGQgPT09IDApe1xuICAgICAgZGVjX3Jlcy5wb3AoKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdhcCA9IGxlbl9pIC0gaW50X2IubGVuZ3RoO1xuICBmb3IobGV0IGkgPSBsZW5faSAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBpbnRfYVtpXTtcbiAgICBsZXQgZWxtX2IgPSBpbnRfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBpbnRfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGludF9yZXMudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShpbnRfcmVzLmpvaW4oXCJcIikgKyBcIi5cIiArIGRlY19yZXMuam9pbihcIlwiKSwge25lZ2F0aXZlOiBuZWdhdGl2ZX0pO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcblxuICBjb25zdCByZXN1bHQgPSAgbWFrZVN1KG1pbnVzICsgcmVzX2FycmF5LmpvaW4oXCJcIikpO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHRoaXMubmV2YXRpdmUgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZVBvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZU5lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuXG4gIGlmKGEuaXNaZXJvKCkgJiYgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIE5BTjtcbiAgfWVsc2UgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfWVsc2UgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIERCWjtcbiAgfVxuXG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gbWFrZVN1KDApO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICB3aGlsZShhLmlzTGFyZ2Uoc3VtKSB8fCBhLmlzRXF1YWwoc3VtKSl7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KDEpKTtcbiAgICBzdW0gPSBiLm11bHRpcGxpY2F0aW9uKGNvdW50KTtcbiAgfVxuXG4gIGNvdW50ID0gY291bnQuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgc3VtID0gc3VtLnN1YnRyYWN0KGIpO1xuICBjb25zdCByZW1haW4gPSBhLnN1YnRyYWN0KHN1bSk7XG4gIGNvbnN0IHJlcyA9IGNvdW50O1xuICByZXMucmVtYWluZGVyID0gcmVtYWluO1xuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuU3UucHJvdG90eXBlLnBsdXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUudGFzdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmhpa3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmtha2VydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLndhcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmRpdmlzaW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuYWRkKG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBcbiAgaWYoIHJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09kZE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIGlmKCAhcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldERpdmlzb3JzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IHRoaXMuaXNMYXJnZShtYWtlU3UoaSkpOyBpKyspe1xuICAgIGxldCBzdSA9IG1ha2VTdShpKTtcbiAgICBjb25zdCByZW1haW5kZXIgPSB0aGlzLmRpdmlzaW9uKHN1KS5yZW1haW5kZXI7XG4gICAgaWYocmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgYXJyLnB1c2godGhpcyk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0Q29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgbGV0IGEgPSB0aGlzO1xuICBsZXQgYiA9IHN1O1xuXG4gIGNvbnN0IGFycl9hID0gYS5nZXREaXZpc29ycygpO1xuICBpZihhLmlzRXF1YWwoYikpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IGIuZ2V0RGl2aXNvcnMoKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGVsbV9iID0gYXJyX2Jbal07XG4gICAgICBpZihlbG1fYS5pc0VxdWFsKGVsbV9iKSl7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cbiAgY29uc3QgYXJyID0gdGhpcy5nZXRDb21tb25EaXZpc29ycyhzdSk7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGNvdW50ID0gbWFrZVN1KFwiMVwiKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSB8fCBjb3VudC5pc0VxdWFsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBhcnIucHVzaCh0aGlzLm11bHRpcGxpY2F0aW9uKGNvdW50KSk7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KFwiMVwiKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRMZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG5cbiAgY29uc3QgbWF4Q29tbW9uRGl2aXNvciA9IGEuZ2V0TWF4Q29tbW9uRGl2aXNvcihiKTtcblxuICBjb25zdCBtdWx0aSA9IGEubXVsdGlwbHkoYik7XG5cbiAgY29uc3QgcmVzID0gbXVsdGkuZGl2aXNpb24obWF4Q29tbW9uRGl2aXNvcik7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuXG5jb25zdCBtYWtlRmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihhLCBiKXtcblxuICBpZighaXNTdShhKSB8fCAhaXNTdShiKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbYSwgYl07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuXG5jb25zdCBtYWtlTHVjYXNTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlRmlib25hY2NpU2VxdWVuY2UobWFrZVN1KDIpLCBtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuXG4gIGNvbnN0IGZpYnMgPSBtYWtlRmlib25hY2NpU2VxdWVuY2UoemVybywgb25lKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGZpYnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gZmlic1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0x1Y2FzTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGx1Y3MgPSBtYWtlTHVjYXNTZXF1ZW5jZSgpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbHVjcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBsdWNzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5jb25zdCBtYWtlU2VxdWVuY2UgPSBmdW5jdGlvbihmaXJzdCwgb3RoZXJzKXtcbiAgY29uc3QgYXJyYXkgPSBbZmlyc3RdO1xuICBpZighb3RoZXJzKXtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgZm9yKGxldCBpID0gMDsgaSA8IG90aGVycy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbSA9IG90aGVyc1tpXTtcbiAgICBpZighaXNTdShlbG0pKXtcbiAgICAgIGVsbSA9IG1ha2VTdShlbG0pO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5TdS5wcm90b3R5cGUuZ2V0U2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIHN1bSA9IHN1bS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xuICBsZXQgaXAgPSBhcnJbMF07XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGlwID0gaXAubXVsdGlwbGljYXRpb24oYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5TdS5wcm90b3R5cGUuZGlnaXRzdW0gPSBmdW5jdGlvbigpe1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYSA9IG1ha2VTdSh0aGlzLmludGVnZXJbaV0pO1xuICAgIHN1bSA9IHN1bS5hZGQoYSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDIpKTtcbn07XG5cblN1LnByb3RvdHlwZS5jdWJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgzKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBvbmUgPSBtYWtlU3UoXCIxXCIpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuICBpZihzdS5pc0VxdWFsKG9uZSkpe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGxldCBjb3VudCA9IG9uZTtcbiAgbGV0IHJlcyA9IGNvcHlTdSh0aGlzKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChzdSkpe1xuICAgIHJlcyA9IHRoaXMubXVsdGlwbGljYXRpb24ocmVzKTtcbiAgICBjb3VudCA9IGNvdW50Lm5leHQoKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuU3UucHJvdG90eXBlLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmlzT25lKCkgfHwgdGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMlwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2Uob25lKSl7XG4gICAgbGV0IGUgPSB0aGlzLmRpdmlzaW9uKGNvdW50ZXIpO1xuICAgIGlmKGUucmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0RGl2aXNvcnMoKTtcbiAgbGV0IGEgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgPSBhLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuU3UucHJvdG90eXBlLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc0xhcmdlKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNEZWZpY2llbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc1NtYWxsKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQZXJmZWN0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uc3VidHJhY3QodGhpcykuaXNFcXVhbCh0aGlzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmZhY3RvcmlhbCA9IGZ1bmN0aW9uKCl7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKHplcm8pKXtcbiAgICByZXMgPSByZXMubXVsdGlwbGljYXRpb24oY291bnRlcik7XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuY29uc3QgbWFrZVBvbHlnb25hbE51bWJlcnMgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighaXNTdShuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKG4uaXNTbWFsbChtYWtlU3UoMykpKXtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgcmFuZ2UgPSBjdXJyZW50O1xuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBpbmNyZW1lbnQgPSBuLnN1YnRyYWN0KG1ha2VTdSgyKSk7XG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChtYXgpKXtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICByYW5nZSA9IHJhbmdlLmFkZChpbmNyZW1lbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LmFkZChyYW5nZSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IG1ha2VUcmlhbmdsZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICByZXR1cm4gbWFrZVBvbHlnb25hbE51bWJlcnMobWFrZVN1KDMpLCBtYXgpO1xufTtcblxuY29uc3QgbWFrZVNxdWFyZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICByZXR1cm4gbWFrZVBvbHlnb25hbE51bWJlcnMobWFrZVN1KDQpLCBtYXgpO1xufTtcblxuU3UucHJvdG90eXBlLmlzVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VUcmlhbmdsZU51bWJlcnMoc3UpO1xuICBjb25zdCByZXMgPSBhcnIuZmluZChlbG0gPT57XG4gICAgcmV0dXJuIGVsbS5pc0VxdWFsKHN1KTtcbiAgfSk7XG4gIGlmKHJlcyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzU3F1YXJlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3UgPSB0aGlzO1xuICBjb25zdCBhcnIgPSBtYWtlU3F1YXJlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBtYWtlTWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCB0d28gPSBtYWtlU3UoMik7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY3VycmVudCA9IG1ha2VTdSgwKTtcbiAgbGV0IGV4ID0gbWFrZVN1KDEpO1xuICBcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGN1cnJlbnQgPSB0d28uZXhwb25lbnRpYXRlKGV4KS5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gZXguYWRkKG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cbiAgY29uc3QgbWFyciA9IG1ha2VNZXJzZW5uZU51bWJlcnMobWF4KTtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBuID0gbWFycltpXTtcbiAgICBpZihuLmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChuKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IG1ha2VNZXJzZW5uZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzKG4pO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWFrZVN1OiBtYWtlU3UsXG4gIGNvcHlTdTogY29weVN1LFxuICBpc1N1OiBpc1N1LFxuICBTdTogU3Vcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==