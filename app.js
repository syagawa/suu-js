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
};

core.compare = function (a, b) {
  if (!a || !b) {
    return;
  }

  var a_arr, b_arr;

  if (a instanceof Array) {
    a_arr = a;
  } else {
    a_arr = core.numToArray(a);
  }

  if (b instanceof Array) {
    b_arr = b;
  } else {
    b_arr = core.numToArray(b);
  }

  if (a_arr[0] === 0) {
    var new_a = [];
    var zero = true;

    for (var i = 0; i < a_arr.length; i++) {
      var elm = a_arr[i];

      if (elm === 0 && zero) {
        continue;
      }

      new_a.push(elm);
      zero = false;
    }

    a_arr = new_a;
  }

  if (b_arr[0] === 0) {
    var new_b = [];
    var _zero = true;

    for (var _i = 0; _i < b_arr.length; _i++) {
      var _elm = b_arr[_i];

      if (_elm === 0 && _zero) {
        continue;
      }

      new_b.push(_elm);
      _zero = false;
    }

    b_arr = new_b;
  }

  var o = {
    equal: false,
    large: null,
    small: null
  };

  if (a_arr.length > a_arr.length) {
    o.large = a;
    o.small = b;
    return o;
  }

  if (a_arr.length < a_arr.length) {
    o.large = b;
    o.small = a;
    return o;
  }

  for (var _i2 = 0; _i2 < a_arr.length; _i2++) {
    var aa = a_arr[_i2];
    var bb = b_arr[_i2];

    if (aa > bb) {
      o.large = a;
      o.small = b;
      return o;
    }

    if (aa < bb) {
      o.large = b;
      o.small = a;
      return o;
    }
  }

  o.equal = true;
  return o;
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

core.fixCarry = function (arr) {
  var new_arr = [];
  var carry = 0;

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i] + carry;

    if (val > 9) {
      val = val - 10;
      carry = 1;
    } else if (val >= 0 && val <= 9) {
      carry = 0;
    }

    new_arr.push(val);
  }

  if (carry > 0) {
    new_arr.push(carry);
  }

  return new_arr;
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

    for (var _i3 = 0; _i3 < arr_a.length; _i3++) {
      var aa = arr_a[_i3] ? arr_a[_i3] : 0;
      var bb = arr_b[_i3] ? arr_b[_i3] : 0;
      var res = aa + bb;
      arr.push(res);
    }

    return core.fixCarry(arr);
  };

  var _ref = function () {
    var length = a_dec.length < b_dec.length ? b_dec.legth : a_dec.length;
    var res = calc(a_dec.reverse(), b_dec.reverse());
    var carry = 0;

    if (res.length > length) {
      carry = res.pop();
    }

    return {
      dec_arr: res,
      dec_carry: carry
    };
  }(),
      dec_arr = _ref.dec_arr,
      dec_carry = _ref.dec_carry;

  var int_arr = function (dec_carry) {
    var res = calc(a_int.reverse(), b_int.reverse());

    if (dec_carry > 0) {
      console.info(res);
      res = calc(res, [dec_carry]);
    }

    return res;
  }(dec_carry);

  return {
    "int": int_arr.reverse(),
    decimal: dec_arr.reverse()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3UvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNPTlNUQU5UUyIsIk1JTiIsIlMiLCJLIiwibWFrZVN1Iiwic3UiLCJjb3B5U3UiLCJpc1N1IiwiU3UiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJ1bmRlZmluZWQiLCJzdHIiLCJTdHJpbmciLCJNYXRoIiwicmFuIiwiaXNaZXJvIiwiYXJyIiwic3BsaXQiLCJtdWx0aXBsaWNhdGlvbiIsInJhbmRvbUVsZW1lbnQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJpbnRlZ2VyIiwicmFuZG9tSW50IiwiaXNFcXVhbCIsImlzTGFyZ2UiLCJnZXROdW1iZXIiLCJzIiwicHVzaCIsInJlcyIsIm1ha2VQcmltZU51bWJlcnMiLCJOdW1iZXIiLCJnZXRTdHJpbmciLCJpc1ByaW1lTnVtYmVyIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwiYSIsImIiLCJpc051bWJlciIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImoiLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJuIiwiZGl2aXNvcnMiLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwibWF4Q29tbW9uRGl2aXNvciIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsImFycmF5U3VtbWF0aW9uIiwiQXJyYXkiLCJjb3JlIiwibnVtVG9BcnJheSIsImlzTnVtQXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJBIiwiQiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXJnZXIiLCJhcnJfYSIsImFycl9iIiwiZ2FwIiwib3ZlciIsImFycl9jIiwiX3JlcyIsImVsbV9hIiwiZWxtX2IiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsImNvbXBhcmUiLCJhX2FyciIsImJfYXJyIiwibmV3X2EiLCJ6ZXJvIiwibmV3X2IiLCJvIiwiZXF1YWwiLCJsYXJnZSIsInNtYWxsIiwiYWEiLCJiYiIsInNsaWNlIiwiRXJyb3IiLCJudW1Ub0FycmF5V2l0aERlY2ltYWwiLCJhcnIxIiwiYXJyMiIsInRndCIsIm51bVRvQXJyYXlXaXRoRGVjaW1hbDIiLCJpbnQiLCJkZWNpbWFsIiwiaXNfZGVjaW1hbCIsImZpeENhcnJ5IiwibmV3X2FyciIsImNhcnJ5IiwidmFsIiwiYWRkIiwiYV8iLCJiXyIsImFfaW50IiwiYl9pbnQiLCJhX2RlYyIsImJfZGVjIiwiZGVjX2xlbiIsImFfZCIsImJfZCIsImxlZ3RoIiwicG9wIiwiZGVjX2FyciIsImRlY19jYXJyeSIsImludF9hcnIiLCJpbmZvIiwiU0siLCJjb25zdGFudHMiLCJvcHRpb24iLCJuZWdhdGl2ZSIsInBhcnRzIiwiaW50X3N0ciIsImRlY2ltYWxfc3RyIiwiaW50MCIsIm1hdGNoIiwibmV3X2ludF9zdHIiLCJzdGFydF96ZXJvIiwiZGVjMCIsImVuZF96ZXJvIiwibmV3X2RlY2ltYWxfc3RyIiwiZGVjaW1hbF9hcnIiLCJlIiwiZGVub21pbmF0b3IiLCJmcmFjdGlvbiIsIm51bWVyYXRvciIsImNvbmNhdCIsIm1lc3NhZ2UiLCJaRVJPIiwiT05FIiwicHJvdG90eXBlIiwiYWMiLCJyZWR1Y2UiLCJnZXRJbnRlZ2VyIiwiZ2V0RGVjaW1hbCIsImNsb25lIiwiZ2V0TGFyZ2UiLCJhYnNvbHV0ZSIsImZpZWxkIiwiX2EiLCJfYiIsImlfYSIsImlfYiIsImRfYSIsImRfYiIsImNvbnRhaW5EZWNpbWFsIiwiaXNPbmUiLCJpc1NtYWxsIiwiaXNQb3NpdGl2ZSIsImlzTmVnYXRpdmUiLCJ2IiwibWFrZVBvc2l0aXZlIiwic3VidHJhY3QiLCJpbnRfYSIsImRlY19hIiwiaW50X2IiLCJkZWNfYiIsImxlbl9pIiwibGVuX2QiLCJpbnRfcmVzIiwiZGVjX3JlcyIsImQiLCJuZWdhdGUiLCJhX2lkIiwiYl9pZCIsImFfaV9sZW4iLCJiX2lfbGVuIiwiYV9kX2xlbiIsImJfZF9sZW4iLCJkX2dhcCIsImFicyIsImRlYnQiLCJyZXNfYXJyYXkiLCJhX2VsbSIsImJfZWxtIiwic3BsaWNlIiwibWludXMiLCJuZXZhdGl2ZSIsIm1ha2VOZWdhdGl2ZSIsImRwX2EiLCJkcF9iIiwicmVzX2FyciIsInBvc19hIiwicG9zX2IiLCJwb3MiLCJwYWRFbmQiLCJwYWRTdGFydCIsImNvdW50IiwicmVtYWluIiwicGx1cyIsInRhc3UiLCJoaWt1IiwibXVsdGlwbHkiLCJrYWtlcnUiLCJ3YXJ1IiwibmV4dCIsInByZXYiLCJnZXREaXZpc29ycyIsImdldENvbW1vbkRpdmlzb3JzIiwiZGl2cyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJtdWx0aXBsZSIsImdldExlYXN0Q29tbW9uTXVsdGlwbGUiLCJtdWx0aSIsIm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSIsImZ1bmMiLCJjIiwibWFrZUx1Y2FzU2VxdWVuY2UiLCJpc0ZpYm9uYWNjaU51bWJlciIsIm9uZSIsImZpYnMiLCJpc0x1Y2FzTnVtYmVyIiwibHVjcyIsIm1ha2VTZXF1ZW5jZSIsIm90aGVycyIsImdldFNlcXVlbmNlIiwiZGlnaXRzdW0iLCJzcXVhcmUiLCJleHBvbmVudGlhdGUiLCJjdWJlIiwiaXNEZWZpY2llbnROdW1iZXIiLCJpc1BlcmZlY3ROdW1iZXIiLCJmYWN0b3JpYWwiLCJtYWtlUG9seWdvbmFsTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1ha2VUcmlhbmdsZU51bWJlcnMiLCJtYWtlU3F1YXJlTnVtYmVycyIsImlzVHJpYW5nbGVOdW1iZXIiLCJmaW5kIiwiaXNTcXVhcmVOdW1iZXIiLCJtYWtlTWVyc2VubmVOdW1iZXJzIiwidHdvIiwiZXgiLCJtYWtlTWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RUFBRSxDQUFDa0wsU0FBSCxDQUFhOEcscUJBQWIsR0FBcUMsWUFBVTtBQUM3QyxNQUFNek8sQ0FBQyxHQUFHLElBQVY7O0FBQ0EsTUFBR0EsQ0FBQyxDQUFDN0MsTUFBRixFQUFILEVBQWM7QUFDWixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFHNkMsQ0FBQyxDQUFDMEksY0FBRixFQUFILEVBQXNCO0FBQ3BCLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU02RixFQUFFLEdBQUdILHdCQUF3QixDQUFDcE8sQ0FBRCxDQUFuQzs7QUFDQSxPQUFJLElBQUl2QyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUc4USxFQUFFLENBQUM3USxNQUF0QixFQUE4QkQsQ0FBQyxFQUEvQixFQUFrQztBQUNoQyxRQUFJK1EsQ0FBQyxHQUFHRCxFQUFFLENBQUM5USxDQUFELENBQVY7O0FBQ0EsUUFBRytRLENBQUMsQ0FBQzNRLE9BQUYsQ0FBVW1DLENBQVYsQ0FBSCxFQUFnQjtBQUNkLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FoQkQ7O0FBbUJlO0FBQ2IzRCxRQUFNLEVBQUVBLE1BREs7QUFFYkUsUUFBTSxFQUFFQSxNQUZLO0FBR2JDLE1BQUksRUFBRUEsSUFITztBQUliQyxJQUFFLEVBQUVBO0FBSlMsQ0FBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0IHN1IGZyb20gXCIuL3N1LmpzXCI7XG5cbmltcG9ydCBDT05TVEFOVFMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5jb25zdCBNSU4gPSBDT05TVEFOVFMuTUlOO1xuXG5jb25zdCBTID0ge307XG5jb25zdCBLID0ge307XG5cbmNvbnN0IG1ha2VTdSA9IHN1Lm1ha2VTdTtcbmNvbnN0IGNvcHlTdSA9IHN1LmNvcHlTdTtcbmNvbnN0IGlzU3UgPSBzdS5pc1N1O1xuY29uc3QgU3UgPSBzdS5TdTtcblxuY29uc3QgRklSU1RfUFJJTUVfTlVNQkVSID0gMjtcblxuXG5LLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IG1ha2VTdSgwKTtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gbWFrZVN1KDEpO1xuICB9XG4gIGlmKCFpc1N1KG1pbikpe1xuICAgIG1pbiA9IG1ha2VTdShtaW4pO1xuICB9XG4gIGlmKCFpc1N1KG1heCkpe1xuICAgIG1heCA9IG1ha2VTdShtYXgpO1xuICB9XG5cbiAgY29uc3Qgc3RyID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBsZXQgcmFuO1xuXG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIGlmKG1pbi5pc1plcm8oKSl7XG4gICAgICByYW4gPSBtYWtlU3UoMCk7XG4gICAgfWVsc2V7XG4gICAgICByYW4gPSBtaW47XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByYW4gPSBtYWtlU3UoXCIwLlwiICsgYXJyWzFdKS5tdWx0aXBsaWNhdGlvbihtYXgpO1xuICB9XG4gIHJldHVybiByYW47XG59O1xuXG5LLnJhbmRvbUVsZW1lbnQgPSBmdW5jdGlvbihhcnJheSl7XG4gIGNvbnN0IGkgPSBLLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpLmludGVnZXI7XG4gIHJldHVybiBhcnJheVtpXTtcbn07XG5cbksucmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpe1xuXG4gIGlmKCAhaXNTdShtaW4pIHx8ICFpc1N1KG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZihtaW4uaXNFcXVhbChtYXgpIHx8IG1pbi5pc0xhcmdlKG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBtaW4uZ2V0TnVtYmVyKCk7IGkgPD0gbWF4LmdldE51bWJlcigpOyBpKyspe1xuICAgIGNvbnN0IHMgPSBtYWtlU3UoaSk7XG4gICAgYXJyLnB1c2gocyk7XG4gIH1cblxuICBjb25zdCByZXMgPSBLLnJhbmRvbUVsZW1lbnQoYXJyKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuSy5tYWtlUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYobWF4ICYmIG1heC5pc1N1ICYmIG1heC5pc1N1KCkpe1xuICAgIG1heCA9IE51bWJlcihtYXguZ2V0U3RyaW5nKCkpO1xuICB9XG5cbiAgY29uc3QgTUFYID0gMTAwO1xuICBpZighbWF4KXtcbiAgICBtYXggPSBNQVg7XG4gIH1cbiAgaWYobWF4ID4gTUFYKXtcbiAgICBtYXggPSBNQVg7XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IEZJUlNUX1BSSU1FX05VTUJFUjsgaSA8IG1heDsgaSsrKXtcbiAgICBjb25zdCBzdSA9IG1ha2VTdShpKTtcbiAgICBpZihzdS5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG4vLyDjg6bjg7zjgq/jg6rjg4Pjg4njga7kupLpmaTms5VcbksuZXVjbGlkZWFuQWxnb3JpdGhtID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhUy5pc051bWJlcihhKSB8fCAhUy5pc051bWJlcihiKSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKCBhID09PSBiKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCB0ZW1wO1xuICBpZiggYSA8IGIpe1xuICAgIHRlbXAgPSBhO1xuICAgIGEgPSBiO1xuICAgIGIgPSB0ZW1wO1xuICB9XG5cbiAgbGV0IGF0ZW1wID0gYTtcbiAgbGV0IGJ0ZW1wID0gYjtcbiAgbGV0IGN0ZW1wO1xuICBsZXQgcmVzO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGNvcHJpbWUgPSBcImNvcHJpbWVcIjtcbiAgd2hpbGUoY3RlbXAgIT09MCl7XG4gICAgY3RlbXAgPSBhdGVtcCAlIGJ0ZW1wO1xuICAgIGlmKGN0ZW1wID09PSAwKXtcbiAgICAgIHJlcyA9IGJ0ZW1wO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGN0ZW1wID09PSAxKXtcbiAgICAgIHJlcyA9IGNvcHJpbWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY291bnRlciA+PSBNQVgpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGF0ZW1wID0gYnRlbXA7XG4gICAgYnRlbXAgPSBjdGVtcDtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuSy5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gIH1cblxuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtqXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgc3VtICs9IGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblxuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gZmlib25hY2NpXG5cblxuXG5cblxuXG5cbi8vIHRvZG8gMHN0YXJ0XG5jb25zdCBhcnJheVN1bW1hdGlvbiA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIShhIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYSA9IGNvcmUubnVtVG9BcnJheShhKTtcbiAgfVxuICBpZiggIShiIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYiA9IGNvcmUubnVtVG9BcnJheShiKTtcbiAgfVxuXG4gIGlmKCFjb3JlLmlzTnVtQXJyYXkoYSkgfHwgIWNvcmUuaXNOdW1BcnJheShiKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKGFbMF0pICYmIGNvcmUuaXNaZXJvKGJbMF0pKXtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyYXk6IFswXSxcbiAgICAgIHN0cmluZzogXCIwXCIsXG4gICAgICBudW1iZXI6IDAsXG4gICAgICBsZW5ndGg6IDFcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgQSA9IG1ha2VTdShhKTtcbiAgY29uc3QgQiA9IG1ha2VTdShiKTtcblxuICBjb25zb2xlLmxvZyhBLEIpO1xuXG4gIGNvbnN0IHJlcyA9IGNvcmUuZ2V0TGFyZ2VyKGEsIGIpO1xuICBjb25zdCBhcnJfYSA9IHJlc1swXTtcbiAgY29uc3QgYXJyX2IgPSByZXNbMV07XG4gIGNvbnN0IGxlbiA9IGFycl9hLmxlbmd0aDtcblxuICBjb25zdCBnYXAgPSBsZW4gLSBhcnJfYi5sZW5ndGg7XG5cbiAgbGV0IG92ZXIgPSAwLCBhcnJfYyA9IFtdO1xuICBmb3IobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBjb25zdCBlbG1fYiA9IGFycl9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGFycl9jLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGFycl9jLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoYXJyX2MpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRMYXJnZXIgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyX2EgPSBbXSwgYXJyX2IgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYVtpXTtcbiAgICBpZihlbG1fYSA9PT0gMCAmJiBhcnJfYS5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9hID49ICAwICYmIGVsbV9hIDwgMTApe1xuICAgICAgYXJyX2EucHVzaChlbG1fYSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9iID0gYltpXTtcbiAgICBpZihlbG1fYiA9PT0gMCAmJiBhcnJfYi5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9iID49ICAwICYmIGVsbV9iIDwgMTApe1xuICAgICAgYXJyX2IucHVzaChlbG1fYik7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcztcbiAgaWYoYXJyX2EubGVuZ3RoID4gYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYSwgYl07XG4gIH1lbHNlIGlmKGFycl9hLmxlbmd0aCA8IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2IsIGFdO1xuICB9ZWxzZXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtX2FhID0gYXJyX2FbaV07XG4gICAgICBjb25zdCBlbG1fYmIgPSBhcnJfYltpXTtcbiAgICAgIGlmKGVsbV9hYSA+IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYWEgPCBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFM6IFMsXG4gIEs6IEtcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUuaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKXtcbiAgaWYoIG4gPT09IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb3JlLmNvbXBhcmUgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoIWEgfHwgIWIpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBhX2FyciwgYl9hcnI7XG4gIGlmKGEgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgYV9hcnIgPSBhO1xuICB9ZWxzZXtcbiAgICBhX2FyciA9IGNvcmUubnVtVG9BcnJheShhKTtcbiAgfVxuICBpZihiIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgIGJfYXJyID0gYjtcbiAgfWVsc2V7XG4gICAgYl9hcnIgPSBjb3JlLm51bVRvQXJyYXkoYik7XG4gIH1cblxuXG4gIGlmKGFfYXJyWzBdID09PSAwKXtcbiAgICBjb25zdCBuZXdfYSA9IFtdO1xuICAgIGxldCB6ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYV9hcnIubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtID0gYV9hcnJbaV07XG4gICAgICBpZihlbG0gPT09IDAgJiYgemVybyl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbmV3X2EucHVzaChlbG0pO1xuICAgICAgemVybyA9IGZhbHNlO1xuICAgIH1cbiAgICBhX2FyciA9IG5ld19hO1xuICB9XG5cbiAgaWYoYl9hcnJbMF0gPT09IDApe1xuICAgIGNvbnN0IG5ld19iID0gW107XG4gICAgbGV0IHplcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBiX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBlbG0gPSBiX2FycltpXTtcbiAgICAgIGlmKGVsbSA9PT0gMCAmJiB6ZXJvKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBuZXdfYi5wdXNoKGVsbSk7XG4gICAgICB6ZXJvID0gZmFsc2U7XG4gICAgfVxuICAgIGJfYXJyID0gbmV3X2I7XG4gIH1cblxuICBjb25zdCBvID0ge1xuICAgIGVxdWFsOiBmYWxzZSxcbiAgICBsYXJnZTogbnVsbCxcbiAgICBzbWFsbDogbnVsbFxuICB9O1xuXG5cbiAgaWYoYV9hcnIubGVuZ3RoID4gYV9hcnIubGVuZ3RoKXtcbiAgICBvLmxhcmdlID0gYTtcbiAgICBvLnNtYWxsID0gYjtcbiAgICByZXR1cm4gbztcbiAgfVxuICBpZihhX2Fyci5sZW5ndGggPCBhX2Fyci5sZW5ndGgpe1xuICAgIG8ubGFyZ2UgPSBiO1xuICAgIG8uc21hbGwgPSBhO1xuICAgIHJldHVybiBvO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBhYSA9IGFfYXJyW2ldO1xuICAgIGNvbnN0IGJiID0gYl9hcnJbaV07XG4gICAgaWYoYWEgPiBiYil7XG4gICAgICBvLmxhcmdlID0gYTtcbiAgICAgIG8uc21hbGwgPSBiO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAgIGlmKGFhIDwgYmIpe1xuICAgICAgby5sYXJnZSA9IGI7XG4gICAgICBvLnNtYWxsID0gYTtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgfVxuXG4gIG8uZXF1YWwgPSB0cnVlO1xuICByZXR1cm4gbztcblxufTtcblxuLy8g6YWN5YiX44Gn44Gu6KiI566XXG5jb3JlLm51bVRvQXJyYXkgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBOdW1iZXIoc3RyLnNsaWNlKGksIGkgKyAxKSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIpO1xuICAgIH1cbiAgICBhcnIucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbCA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIxID0gW107XG4gIGNvbnN0IGFycjIgPSBbXTtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKG4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBsZXQgdGd0ID0gYXJyMTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBOdW1iZXIoc3RyW2ldKTtcbiAgICBpZighdGhpcy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlmKGVsbSA9PT0gXCIuXCIgJiYgdGd0ID09PSBhcnIxKXtcbiAgICAgICAgdGd0ID0gYXJyMjtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0Z3QucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBbLi4uYXJyMSwgXCIuXCIsIGFycjJdO1xufTtcblxuY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgYXJyID0gc3RyLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IGludCA9IFtdO1xuICBjb25zdCBkZWNpbWFsID0gW107XG5cbiAgbGV0IGlzX2RlY2ltYWwgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG5cbiAgICBjb25zdCBudW0gPSBOdW1iZXIoYXJyW2ldKTtcbiAgICBjb25zdCBpc051bWJlciA9IHRoaXMuaXNOdW1iZXIobnVtKTtcbiAgICBpZighaXNOdW1iZXIgJiYgYXJyW2ldID09PSBcIi5cIil7XG4gICAgICBpc19kZWNpbWFsID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1lbHNlIGlmKCFpc051bWJlcil7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIpO1xuICAgIH1cblxuICAgIGlmKGlzX2RlY2ltYWwpe1xuICAgICAgZGVjaW1hbC5wdXNoKG51bSk7XG4gICAgfWVsc2V7XG4gICAgICBpbnQucHVzaChudW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW50OiBpbnQsXG4gICAgZGVjaW1hbDogZGVjaW1hbFxuICB9O1xufTtcblxuY29yZS5pc051bUFycmF5ID0gZnVuY3Rpb24oYXJyKXtcbiAgaWYoIGFyciBpbnN0YW5jZW9mIEFycmF5ICl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiggIXRoaXMuaXNOdW1iZXIoYXJyW2ldKSApe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb3JlLmZpeENhcnJ5ID0gZnVuY3Rpb24oYXJyKXtcblxuICBjb25zdCBuZXdfYXJyID0gW107XG4gIGxldCBjYXJyeSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGxldCB2YWwgPSBhcnJbaV0gKyBjYXJyeTtcbiAgICBpZih2YWwgPiA5KXtcbiAgICAgIHZhbCA9IHZhbCAtIDEwO1xuICAgICAgY2FycnkgPSAxO1xuICAgIH1lbHNlIGlmKCB2YWwgPj0gMCAmJiB2YWwgPD0gOSl7XG4gICAgICBjYXJyeSA9IDA7XG4gICAgfVxuXG4gICAgbmV3X2Fyci5wdXNoKHZhbCk7XG4gIH1cbiAgaWYoY2FycnkgPiAwKXtcbiAgICBuZXdfYXJyLnB1c2goY2FycnkpO1xuICB9XG5cbiAgcmV0dXJuIG5ld19hcnI7XG5cbn07XG5cbmNvcmUuYWRkID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCFhICYmICFiKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBhXyA9IHRoaXMubnVtVG9BcnJheVdpdGhEZWNpbWFsMihhKTtcbiAgY29uc3QgYl8gPSB0aGlzLm51bVRvQXJyYXlXaXRoRGVjaW1hbDIoYik7XG4gIGNvbnN0IGFfaW50ID0gYV8uaW50O1xuICBjb25zdCBiX2ludCA9IGJfLmludDtcbiAgY29uc3QgYV9kZWMgPSBhXy5kZWNpbWFsO1xuICBjb25zdCBiX2RlYyA9IGJfLmRlY2ltYWw7XG5cbiAgbGV0IGRlY19sZW4gPSBhX2RlYy5sZW5ndGg7XG4gIGlmKGRlY19sZW4gPCBiX2RlYy5sZW5ndGgpe1xuICAgIGRlY19sZW4gPSBiX2RlYy5sZW5ndGg7XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgZGVjX2xlbjsgaSsrKXtcbiAgICBjb25zdCBhX2QgPSBhX2RlY1tpXTtcbiAgICBjb25zdCBiX2QgPSBiX2RlY1tpXTtcbiAgICBpZighY29yZS5pc051bWJlcihhX2QpKXtcbiAgICAgIGFfZGVjLnB1c2goMCk7XG4gICAgfVxuICAgIGlmKCFjb3JlLmlzTnVtYmVyKGJfZCkpe1xuICAgICAgYl9kZWMucHVzaCgwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24oYSwgYil7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgbGV0IGFycl9hID0gYTtcbiAgICBsZXQgYXJyX2IgPSBiO1xuICAgIGlmKGEubGVuZ3RoIDwgYi5sZW5ndGgpe1xuICAgICAgYXJyX2EgPSBiO1xuICAgICAgYXJyX2IgPSBhO1xuICAgIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgYWEgPSBhcnJfYVtpXSA/IGFycl9hW2ldIDogMDtcbiAgICAgIGNvbnN0IGJiID0gYXJyX2JbaV0gPyBhcnJfYltpXSA6IDA7XG4gICAgICBsZXQgcmVzID0gYWEgKyBiYjtcbiAgICAgIGFyci5wdXNoKHJlcyk7XG4gICAgfVxuICAgIHJldHVybiBjb3JlLmZpeENhcnJ5KGFycik7XG4gIH07XG5cbiAgY29uc3QgeyBkZWNfYXJyLCBkZWNfY2FycnkgfSA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IGxlbmd0aCA9IGFfZGVjLmxlbmd0aCA8IGJfZGVjLmxlbmd0aCA/IGJfZGVjLmxlZ3RoIDogYV9kZWMubGVuZ3RoO1xuICAgIGNvbnN0IHJlcyA9IGNhbGMoYV9kZWMucmV2ZXJzZSgpLCBiX2RlYy5yZXZlcnNlKCkpO1xuXG4gICAgbGV0IGNhcnJ5ID0gMDtcbiAgICBpZihyZXMubGVuZ3RoID4gbGVuZ3RoKXtcbiAgICAgIGNhcnJ5ID0gcmVzLnBvcCgpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGVjX2FycjogcmVzLFxuICAgICAgZGVjX2NhcnJ5OiBjYXJyeVxuICAgIH07XG4gIH0pKCk7XG5cbiAgbGV0IGludF9hcnIgPSAoZnVuY3Rpb24oZGVjX2NhcnJ5KXtcbiAgICBsZXQgcmVzID0gY2FsYyhhX2ludC5yZXZlcnNlKCksIGJfaW50LnJldmVyc2UoKSk7XG5cbiAgICBpZihkZWNfY2FycnkgPiAwKXtcbiAgICAgIGNvbnNvbGUuaW5mbyhyZXMpO1xuICAgICAgcmVzID0gY2FsYyhyZXMsIFtkZWNfY2FycnldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfSkoZGVjX2NhcnJ5KTtcblxuICByZXR1cm4ge1xuICAgIGludDogaW50X2Fyci5yZXZlcnNlKCksXG4gICAgZGVjaW1hbDogZGVjX2Fyci5yZXZlcnNlKClcbiAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBzIGZyb20gXCIuL3N1LmpzXCI7XG5pbXBvcnQgU0sgZnJvbSBcIi4vU0suanNcIjtcbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzOiBzLFxuICBTOiBTSy5TLFxuICBLOiBTSy5LLFxuICBjb3JlOiBjb3JlXG59OyIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuY29uc3QgTUFYID0gY29uc3RhbnRzLk1BWDtcbmNvbnN0IE1JTiA9IGNvbnN0YW50cy5NSU47XG5jb25zdCBEQlogPSBjb25zdGFudHMuREJaO1xuY29uc3QgTkFOID0gY29uc3RhbnRzLk5BTjtcbmNvbnN0IE5PVFNVID0gY29uc3RhbnRzLk5PVFNVO1xuXG5cbmNvbnN0IFN1ID0gZnVuY3Rpb24obiwgb3B0aW9uKXtcbiAgaWYoaXNOYU4obikpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG4gIGlmKCFuKXtcbiAgICBuID0gMDtcbiAgfVxuICBpZighb3B0aW9uKXtcbiAgICBvcHRpb24gPSB7fTtcbiAgfVxuXG4gIGxldCBzdHIgPSBTdHJpbmcobik7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKHN0clswXSA9PT0gXCItXCIpe1xuICAgIHN0ciA9IHN0ci5zbGljZSgxLCBzdHIubGVuZ3RoKTtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgaWYoIW5lZ2F0aXZlICYmIG9wdGlvbiAmJiBvcHRpb24ubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKGlzTmFOKE51bWJlcihzdHIpKSl7XG4gICAgc3RyID0gXCIwXCI7XG4gIH1cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IHN0ci5zcGxpdChcIi5cIik7XG4gIGxldCBpbnRfc3RyID0gcGFydHNbMF07XG4gIGxldCBkZWNpbWFsX3N0ciA9IHBhcnRzWzFdO1xuICBpZihpbnRfc3RyKXtcbiAgICBjb25zdCBpbnQwID0gaW50X3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihpbnQwICYmIGludDAubGVuZ3RoID09PSBpbnRfc3RyLmxlbmd0aCl7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBuZXdfaW50X3N0ciA9IFwiXCI7XG4gICAgbGV0IHN0YXJ0X3plcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPGludF9zdHIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoaW50X3N0cltpXSAhPT0gXCIwXCIgfHwgIXN0YXJ0X3plcm8pe1xuICAgICAgICBzdGFydF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19pbnRfc3RyICs9IGludF9zdHJbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfaW50X3N0cil7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBpbnRfc3RyID0gbmV3X2ludF9zdHI7XG4gICAgfVxuICB9XG5cbiAgaWYoZGVjaW1hbF9zdHIpe1xuICAgIGNvbnN0IGRlYzAgPSBkZWNpbWFsX3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihkZWMwICYmIGRlYzAubGVuZ3RoID09PSBkZWNpbWFsX3N0ci5sZW5ndGgpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IGVuZF96ZXJvID0gdHJ1ZTtcbiAgICBsZXQgbmV3X2RlY2ltYWxfc3RyID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSBkZWNpbWFsX3N0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICBpZihkZWNpbWFsX3N0cltpXSAhPT0gXCIwXCIgfHwgIWVuZF96ZXJvKXtcbiAgICAgICAgZW5kX3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2RlY2ltYWxfc3RyID0gZGVjaW1hbF9zdHJbaV0gKyBuZXdfZGVjaW1hbF9zdHI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfZGVjaW1hbF9zdHIpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGRlY2ltYWxfc3RyID0gbmV3X2RlY2ltYWxfc3RyO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGludF9hcnI7XG4gIGxldCBkZWNpbWFsX2FycjtcblxuXG4gIHRyeXtcbiAgICBpbnRfYXJyID0gY29yZS5udW1Ub0FycmF5KGludF9zdHIpO1xuICAgIGRlY2ltYWxfYXJyID0gZGVjaW1hbF9zdHIgPyBjb3JlLm51bVRvQXJyYXkoZGVjaW1hbF9zdHIpIDogWzBdO1xuICB9Y2F0Y2goZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cblxuICB0aGlzLmludGVnZXIgPSBpbnRfYXJyO1xuICB0aGlzLmRlY2ltYWwgPSBkZWNpbWFsX2FycjtcbiAgdGhpcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlID8gdHJ1ZSA6IGZhbHNlO1xuICBcbiAgbGV0IGRlbm9taW5hdG9yID0gWzFdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2ltYWwubGVuZ3RoOyBpKyspe1xuICAgIGRlbm9taW5hdG9yLnB1c2goMCk7XG4gIH1cblxuICB0aGlzLmZyYWN0aW9uID0ge1xuICAgIG51bWVyYXRvcjogdGhpcy5pbnRlZ2VyLmNvbmNhdCh0aGlzLmRlY2ltYWwpLFxuICAgIGRlbm9taW5hdG9yOiBkZW5vbWluYXRvclxuICB9O1xuXG59O1xuXG5jb25zdCBtYWtlU3UgPSBmdW5jdGlvbihudW0sIG9wdGlvbil7XG4gIGxldCByZXM7XG4gIHRyeXtcbiAgICByZXMgPSBuZXcgU3UobnVtLCBvcHRpb24pO1xuICB9Y2F0Y2goZSl7XG4gICAgcmVzID0gZS5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuY29uc3QgaXNTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoc3UgaW5zdGFuY2VvZiBTdSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGNvcHlTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgc3RyID0gc3UuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgWkVSTzogbWFrZVN1KDApLFxuICBPTkU6IG1ha2VTdSgxKSxcbiAgRklSU1RfUFJJTUVfTlVNQkVSOiBtYWtlU3UoMiksXG4gIE1BWDogbWFrZVN1KE1BWCksXG4gIE1JTjogbWFrZVN1KE1JTilcbn07XG5cblxuU3UucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdHIgPSBTdHJpbmcoIHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgY29uc3QgYWMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKChhLGUpID0+IGEgKyBlKTtcbiAgaWYoYWMgIT09IDApe1xuICAgIHN0ciArPSBcIi5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLm5lZ2F0aXZlID8gYC0ke3N0cn1gIDogc3RyO1xufTtcblxuU3UucHJvdG90eXBlLmdldE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmdldFN0cmluZygpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXREZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKFwiMC5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldExhcmdlID0gZnVuY3Rpb24oYSwgYiwgYWJzb2x1dGUgPSBmYWxzZSl7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGxldCBmaWVsZCA9IFtdO1xuXG4gIGNvbnN0IF9hID0gbWFrZVN1KGEuZ2V0U3RyaW5nKCkpO1xuICBjb25zdCBfYiA9IG1ha2VTdShiLmdldFN0cmluZygpKTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgX2EubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBfYi5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYoX2EuaXNaZXJvKCkgJiYgX2IuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmICFfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGI7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihfYS5pbnRlZ2VyLmxlbmd0aCA+IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLmludGVnZXIubGVuZ3RoIDwgX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBfYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBfYS5pbnRlZ2VyW2ldO1xuICAgIGxldCBlbG1fYiA9IF9iLmludGVnZXJbaV07XG4gICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIGNvbnN0IGxlbiA9IF9hLmRlY2ltYWwubGVuZ3RoID49IF9iLmRlY2ltYWwubGVuZ3RoID8gX2EuZGVjaW1hbC5sZW5ndGggOiBfYi5kZWNpbWFsLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGVsbV9hID0gX2EuZGVjaW1hbFtpXSA/IF9hLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgbGV0IGVsbV9iID0gX2IuZGVjaW1hbFtpXSA/IF9iLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZFswXTtcblxufTtcblxuXG5TdS5wcm90b3R5cGUuaXNFcXVhbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGEuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1NtYWxsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGIuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzUG9zaXRpdmUoKSAmJiB0aGlzLmlzSW50ZWdlcigpICYmIHRoaXMuaXNMYXJnZShDT05TVEFOVFMuWkVSTykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuY29udGFpbkRlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKGZ1bmN0aW9uKGEsIHYpe1xuICAgICAgcmV0dXJuIGEgKyB2O1xuICB9KTtcbiAgaWYocmVzID09PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGxldCBiID0gc3UuY2xvbmUoKTtcbiAgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgbmVnYXRpdmU7XG4gIGlmKGEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgYi5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYS5zdWJ0cmFjdChiKTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgYS5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYi5zdWJ0cmFjdChhKTtcbiAgfVxuXG4gIGxldCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmVzID0gYTtcbiAgfVxuICBsZXQgaW50X2EgPSByZXMuaW50ZWdlcjtcbiAgbGV0IGRlY19hID0gcmVzLmRlY2ltYWw7XG4gIGxldCBpbnRfYiwgZGVjX2I7XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgaW50X2IgPSBiLmludGVnZXI7XG4gICAgZGVjX2IgPSBiLmRlY2ltYWw7XG4gIH1lbHNle1xuICAgIGludF9iID0gYS5pbnRlZ2VyO1xuICAgIGRlY19iID0gYS5kZWNpbWFsO1xuICB9XG5cbiAgbGV0IGxlbl9pID0gaW50X2EubGVuZ3RoO1xuICBsZXQgbGVuX2QgPSBkZWNfYS5sZW5ndGg7XG5cbiAgaWYoZGVjX2IubGVuZ3RoID4gZGVjX2EubGVuZ3RoKXtcbiAgICBsZW5fZCA9IGRlY19iLmxlbmd0aDtcbiAgfVxuICBsZXQgb3ZlciA9IDAsXG4gICAgICBpbnRfcmVzID0gW10sXG4gICAgICBkZWNfcmVzID0gW107XG5cbiAgZm9yKGxldCBpID0gbGVuX2QgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gZGVjX2FbaV0gfHwgMDtcbiAgICBsZXQgZWxtX2IgPSBkZWNfYltpXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBkZWNfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cblxuICBmb3IobGV0IGkgPSBkZWNfcmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICl7XG4gICAgbGV0IGQgPSBkZWNfcmVzW2ldO1xuICAgIGlmKGQgPT09IDApe1xuICAgICAgZGVjX3Jlcy5wb3AoKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdhcCA9IGxlbl9pIC0gaW50X2IubGVuZ3RoO1xuICBmb3IobGV0IGkgPSBsZW5faSAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBpbnRfYVtpXTtcbiAgICBsZXQgZWxtX2IgPSBpbnRfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBpbnRfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGludF9yZXMudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShpbnRfcmVzLmpvaW4oXCJcIikgKyBcIi5cIiArIGRlY19yZXMuam9pbihcIlwiKSwge25lZ2F0aXZlOiBuZWdhdGl2ZX0pO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcblxuICBjb25zdCByZXN1bHQgPSAgbWFrZVN1KG1pbnVzICsgcmVzX2FycmF5LmpvaW4oXCJcIikpO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHRoaXMubmV2YXRpdmUgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZVBvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZU5lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuXG4gIGlmKGEuaXNaZXJvKCkgJiYgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIE5BTjtcbiAgfWVsc2UgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfWVsc2UgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIERCWjtcbiAgfVxuXG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gbWFrZVN1KDApO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICB3aGlsZShhLmlzTGFyZ2Uoc3VtKSB8fCBhLmlzRXF1YWwoc3VtKSl7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KDEpKTtcbiAgICBzdW0gPSBiLm11bHRpcGxpY2F0aW9uKGNvdW50KTtcbiAgfVxuXG4gIGNvdW50ID0gY291bnQuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgc3VtID0gc3VtLnN1YnRyYWN0KGIpO1xuICBjb25zdCByZW1haW4gPSBhLnN1YnRyYWN0KHN1bSk7XG4gIGNvbnN0IHJlcyA9IGNvdW50O1xuICByZXMucmVtYWluZGVyID0gcmVtYWluO1xuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuU3UucHJvdG90eXBlLnBsdXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUudGFzdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmhpa3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmtha2VydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLndhcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmRpdmlzaW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuYWRkKG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBcbiAgaWYoIHJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09kZE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIGlmKCAhcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldERpdmlzb3JzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IHRoaXMuaXNMYXJnZShtYWtlU3UoaSkpOyBpKyspe1xuICAgIGxldCBzdSA9IG1ha2VTdShpKTtcbiAgICBjb25zdCByZW1haW5kZXIgPSB0aGlzLmRpdmlzaW9uKHN1KS5yZW1haW5kZXI7XG4gICAgaWYocmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgYXJyLnB1c2godGhpcyk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0Q29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgbGV0IGEgPSB0aGlzO1xuICBsZXQgYiA9IHN1O1xuXG4gIGNvbnN0IGFycl9hID0gYS5nZXREaXZpc29ycygpO1xuICBpZihhLmlzRXF1YWwoYikpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IGIuZ2V0RGl2aXNvcnMoKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGVsbV9iID0gYXJyX2Jbal07XG4gICAgICBpZihlbG1fYS5pc0VxdWFsKGVsbV9iKSl7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cbiAgY29uc3QgYXJyID0gdGhpcy5nZXRDb21tb25EaXZpc29ycyhzdSk7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGNvdW50ID0gbWFrZVN1KFwiMVwiKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSB8fCBjb3VudC5pc0VxdWFsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBhcnIucHVzaCh0aGlzLm11bHRpcGxpY2F0aW9uKGNvdW50KSk7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KFwiMVwiKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRMZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG5cbiAgY29uc3QgbWF4Q29tbW9uRGl2aXNvciA9IGEuZ2V0TWF4Q29tbW9uRGl2aXNvcihiKTtcblxuICBjb25zdCBtdWx0aSA9IGEubXVsdGlwbHkoYik7XG5cbiAgY29uc3QgcmVzID0gbXVsdGkuZGl2aXNpb24obWF4Q29tbW9uRGl2aXNvcik7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuXG5jb25zdCBtYWtlRmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihhLCBiKXtcblxuICBpZighaXNTdShhKSB8fCAhaXNTdShiKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbYSwgYl07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuXG5jb25zdCBtYWtlTHVjYXNTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlRmlib25hY2NpU2VxdWVuY2UobWFrZVN1KDIpLCBtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuXG4gIGNvbnN0IGZpYnMgPSBtYWtlRmlib25hY2NpU2VxdWVuY2UoemVybywgb25lKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGZpYnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gZmlic1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0x1Y2FzTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGx1Y3MgPSBtYWtlTHVjYXNTZXF1ZW5jZSgpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbHVjcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBsdWNzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5jb25zdCBtYWtlU2VxdWVuY2UgPSBmdW5jdGlvbihmaXJzdCwgb3RoZXJzKXtcbiAgY29uc3QgYXJyYXkgPSBbZmlyc3RdO1xuICBpZighb3RoZXJzKXtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgZm9yKGxldCBpID0gMDsgaSA8IG90aGVycy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbSA9IG90aGVyc1tpXTtcbiAgICBpZighaXNTdShlbG0pKXtcbiAgICAgIGVsbSA9IG1ha2VTdShlbG0pO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5TdS5wcm90b3R5cGUuZ2V0U2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIHN1bSA9IHN1bS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xuICBsZXQgaXAgPSBhcnJbMF07XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGlwID0gaXAubXVsdGlwbGljYXRpb24oYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5TdS5wcm90b3R5cGUuZGlnaXRzdW0gPSBmdW5jdGlvbigpe1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYSA9IG1ha2VTdSh0aGlzLmludGVnZXJbaV0pO1xuICAgIHN1bSA9IHN1bS5hZGQoYSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDIpKTtcbn07XG5cblN1LnByb3RvdHlwZS5jdWJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgzKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBvbmUgPSBtYWtlU3UoXCIxXCIpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuICBpZihzdS5pc0VxdWFsKG9uZSkpe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGxldCBjb3VudCA9IG9uZTtcbiAgbGV0IHJlcyA9IGNvcHlTdSh0aGlzKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChzdSkpe1xuICAgIHJlcyA9IHRoaXMubXVsdGlwbGljYXRpb24ocmVzKTtcbiAgICBjb3VudCA9IGNvdW50Lm5leHQoKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuU3UucHJvdG90eXBlLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmlzT25lKCkgfHwgdGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMlwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2Uob25lKSl7XG4gICAgbGV0IGUgPSB0aGlzLmRpdmlzaW9uKGNvdW50ZXIpO1xuICAgIGlmKGUucmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0RGl2aXNvcnMoKTtcbiAgbGV0IGEgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgPSBhLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuU3UucHJvdG90eXBlLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc0xhcmdlKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNEZWZpY2llbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc1NtYWxsKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQZXJmZWN0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uc3VidHJhY3QodGhpcykuaXNFcXVhbCh0aGlzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmZhY3RvcmlhbCA9IGZ1bmN0aW9uKCl7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKHplcm8pKXtcbiAgICByZXMgPSByZXMubXVsdGlwbGljYXRpb24oY291bnRlcik7XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuY29uc3QgbWFrZVBvbHlnb25hbE51bWJlcnMgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighaXNTdShuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKG4uaXNTbWFsbChtYWtlU3UoMykpKXtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgcmFuZ2UgPSBjdXJyZW50O1xuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBpbmNyZW1lbnQgPSBuLnN1YnRyYWN0KG1ha2VTdSgyKSk7XG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChtYXgpKXtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICByYW5nZSA9IHJhbmdlLmFkZChpbmNyZW1lbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LmFkZChyYW5nZSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IG1ha2VUcmlhbmdsZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICByZXR1cm4gbWFrZVBvbHlnb25hbE51bWJlcnMobWFrZVN1KDMpLCBtYXgpO1xufTtcblxuY29uc3QgbWFrZVNxdWFyZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICByZXR1cm4gbWFrZVBvbHlnb25hbE51bWJlcnMobWFrZVN1KDQpLCBtYXgpO1xufTtcblxuU3UucHJvdG90eXBlLmlzVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VUcmlhbmdsZU51bWJlcnMoc3UpO1xuICBjb25zdCByZXMgPSBhcnIuZmluZChlbG0gPT57XG4gICAgcmV0dXJuIGVsbS5pc0VxdWFsKHN1KTtcbiAgfSk7XG4gIGlmKHJlcyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzU3F1YXJlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3UgPSB0aGlzO1xuICBjb25zdCBhcnIgPSBtYWtlU3F1YXJlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBtYWtlTWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCB0d28gPSBtYWtlU3UoMik7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY3VycmVudCA9IG1ha2VTdSgwKTtcbiAgbGV0IGV4ID0gbWFrZVN1KDEpO1xuICBcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGN1cnJlbnQgPSB0d28uZXhwb25lbnRpYXRlKGV4KS5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gZXguYWRkKG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cbiAgY29uc3QgbWFyciA9IG1ha2VNZXJzZW5uZU51bWJlcnMobWF4KTtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBuID0gbWFycltpXTtcbiAgICBpZihuLmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChuKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IG1ha2VNZXJzZW5uZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzKG4pO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWFrZVN1OiBtYWtlU3UsXG4gIGNvcHlTdTogY29weVN1LFxuICBpc1N1OiBpc1N1LFxuICBTdTogU3Vcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==