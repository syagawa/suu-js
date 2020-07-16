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
  var head_zero = true;
  var is_decimal = false;

  for (var i = 0; i < arr.length; i++) {
    var num = Number(arr[i]);
    var isNumber = this.isNumber(num);

    if (!isNumber && arr[i] === ".") {
      is_decimal = true;
      continue;
    } else if (!isNumber) {
      throw new Error("This function has been called with incorrect parameters");
    } else if (head_zero && num === 0 && !is_decimal) {
      continue;
    }

    head_zero = false;

    if (is_decimal) {
      decimal.push(num);
    } else {
      _int.push(num);
    }
  }

  for (var _i = decimal.length - 1; _i >= 0; _i--) {
    var d = decimal[_i];

    if (d === 0) {
      decimal.pop();
    } else {
      break;
    }
  }

  return {
    "int": _int,
    decimal: decimal
  };
};

core.compare = function (a, b) {
  if (!a || !b) {
    return;
  }

  var a_arr, b_arr;

  if (a instanceof Array) {
    a_arr = a;
  } else {
    a_arr = core.numToArrayWithDecimal2(a);
  }

  if (b instanceof Array) {
    b_arr = b;
  } else {
    b_arr = core.numToArrayWithDecimal2(b);
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

    for (var _i2 = 0; _i2 < b_arr.length; _i2++) {
      var _elm = b_arr[_i2];

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

  for (var _i3 = 0; _i3 < a_arr.length; _i3++) {
    var aa = a_arr[_i3];
    var bb = b_arr[_i3];

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

    for (var _i4 = 0; _i4 < arr_a.length; _i4++) {
      var aa = arr_a[_i4] ? arr_a[_i4] : 0;
      var bb = arr_b[_i4] ? arr_b[_i4] : 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3UvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNPTlNUQU5UUyIsIk1JTiIsIlMiLCJLIiwibWFrZVN1Iiwic3UiLCJjb3B5U3UiLCJpc1N1IiwiU3UiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJ1bmRlZmluZWQiLCJzdHIiLCJTdHJpbmciLCJNYXRoIiwicmFuIiwiaXNaZXJvIiwiYXJyIiwic3BsaXQiLCJtdWx0aXBsaWNhdGlvbiIsInJhbmRvbUVsZW1lbnQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJpbnRlZ2VyIiwicmFuZG9tSW50IiwiaXNFcXVhbCIsImlzTGFyZ2UiLCJnZXROdW1iZXIiLCJzIiwicHVzaCIsInJlcyIsIm1ha2VQcmltZU51bWJlcnMiLCJOdW1iZXIiLCJnZXRTdHJpbmciLCJpc1ByaW1lTnVtYmVyIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwiYSIsImIiLCJpc051bWJlciIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImoiLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJuIiwiZGl2aXNvcnMiLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwibWF4Q29tbW9uRGl2aXNvciIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsImFycmF5U3VtbWF0aW9uIiwiQXJyYXkiLCJjb3JlIiwibnVtVG9BcnJheSIsImlzTnVtQXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJBIiwiQiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXJnZXIiLCJhcnJfYSIsImFycl9iIiwiZ2FwIiwib3ZlciIsImFycl9jIiwiX3JlcyIsImVsbV9hIiwiZWxtX2IiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsInNsaWNlIiwiRXJyb3IiLCJudW1Ub0FycmF5V2l0aERlY2ltYWwiLCJhcnIxIiwiYXJyMiIsInRndCIsIm51bVRvQXJyYXlXaXRoRGVjaW1hbDIiLCJpbnQiLCJkZWNpbWFsIiwiaGVhZF96ZXJvIiwiaXNfZGVjaW1hbCIsImQiLCJwb3AiLCJjb21wYXJlIiwiYV9hcnIiLCJiX2FyciIsIm5ld19hIiwiemVybyIsIm5ld19iIiwibyIsImVxdWFsIiwibGFyZ2UiLCJzbWFsbCIsImFhIiwiYmIiLCJmaXhDYXJyeSIsIm5ld19hcnIiLCJjYXJyeSIsInZhbCIsImFkZCIsImFfIiwiYl8iLCJhX2ludCIsImJfaW50IiwiYV9kZWMiLCJiX2RlYyIsImRlY19sZW4iLCJhX2QiLCJiX2QiLCJsZWd0aCIsImRlY19hcnIiLCJkZWNfY2FycnkiLCJpbnRfYXJyIiwiaW5mbyIsIlNLIiwiY29uc3RhbnRzIiwib3B0aW9uIiwibmVnYXRpdmUiLCJwYXJ0cyIsImludF9zdHIiLCJkZWNpbWFsX3N0ciIsImludDAiLCJtYXRjaCIsIm5ld19pbnRfc3RyIiwic3RhcnRfemVybyIsImRlYzAiLCJlbmRfemVybyIsIm5ld19kZWNpbWFsX3N0ciIsImRlY2ltYWxfYXJyIiwiZSIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJtZXNzYWdlIiwiWkVSTyIsIk9ORSIsInByb3RvdHlwZSIsImFjIiwicmVkdWNlIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpX2EiLCJpX2IiLCJkX2EiLCJkX2IiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNTbWFsbCIsImlzUG9zaXRpdmUiLCJpc05lZ2F0aXZlIiwidiIsIm1ha2VQb3NpdGl2ZSIsInN1YnRyYWN0IiwiaW50X2EiLCJkZWNfYSIsImludF9iIiwiZGVjX2IiLCJsZW5faSIsImxlbl9kIiwiaW50X3JlcyIsImRlY19yZXMiLCJuZWdhdGUiLCJhX2lkIiwiYl9pZCIsImFfaV9sZW4iLCJiX2lfbGVuIiwiYV9kX2xlbiIsImJfZF9sZW4iLCJkX2dhcCIsImFicyIsImRlYnQiLCJyZXNfYXJyYXkiLCJhX2VsbSIsImJfZWxtIiwic3BsaWNlIiwibWludXMiLCJuZXZhdGl2ZSIsIm1ha2VOZWdhdGl2ZSIsImRwX2EiLCJkcF9iIiwicmVzX2FyciIsInBvc19hIiwicG9zX2IiLCJwb3MiLCJwYWRFbmQiLCJwYWRTdGFydCIsImNvdW50IiwicmVtYWluIiwicGx1cyIsInRhc3UiLCJoaWt1IiwibXVsdGlwbHkiLCJrYWtlcnUiLCJ3YXJ1IiwibmV4dCIsInByZXYiLCJnZXREaXZpc29ycyIsImdldENvbW1vbkRpdmlzb3JzIiwiZGl2cyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJtdWx0aXBsZSIsImdldExlYXN0Q29tbW9uTXVsdGlwbGUiLCJtdWx0aSIsIm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSIsImZ1bmMiLCJjIiwibWFrZUx1Y2FzU2VxdWVuY2UiLCJpc0ZpYm9uYWNjaU51bWJlciIsIm9uZSIsImZpYnMiLCJpc0x1Y2FzTnVtYmVyIiwibHVjcyIsIm1ha2VTZXF1ZW5jZSIsIm90aGVycyIsImdldFNlcXVlbmNlIiwiZGlnaXRzdW0iLCJzcXVhcmUiLCJleHBvbmVudGlhdGUiLCJjdWJlIiwiaXNEZWZpY2llbnROdW1iZXIiLCJpc1BlcmZlY3ROdW1iZXIiLCJmYWN0b3JpYWwiLCJtYWtlUG9seWdvbmFsTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1ha2VUcmlhbmdsZU51bWJlcnMiLCJtYWtlU3F1YXJlTnVtYmVycyIsImlzVHJpYW5nbGVOdW1iZXIiLCJmaW5kIiwiaXNTcXVhcmVOdW1iZXIiLCJtYWtlTWVyc2VubmVOdW1iZXJzIiwidHdvIiwiZXgiLCJtYWtlTWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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SztBQUViRSxRQUFNLEVBQUVBLE1BRks7QUFHYkMsTUFBSSxFQUFFQSxJQUhPO0FBSWJDLElBQUUsRUFBRUE7QUFKUyxDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgc3UgZnJvbSBcIi4vc3UuanNcIjtcblxuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcbmNvbnN0IE1JTiA9IENPTlNUQU5UUy5NSU47XG5cbmNvbnN0IFMgPSB7fTtcbmNvbnN0IEsgPSB7fTtcblxuY29uc3QgbWFrZVN1ID0gc3UubWFrZVN1O1xuY29uc3QgY29weVN1ID0gc3UuY29weVN1O1xuY29uc3QgaXNTdSA9IHN1LmlzU3U7XG5jb25zdCBTdSA9IHN1LlN1O1xuXG5jb25zdCBGSVJTVF9QUklNRV9OVU1CRVIgPSAyO1xuXG5cbksucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gbWFrZVN1KDApO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSBtYWtlU3UoMSk7XG4gIH1cbiAgaWYoIWlzU3UobWluKSl7XG4gICAgbWluID0gbWFrZVN1KG1pbik7XG4gIH1cbiAgaWYoIWlzU3UobWF4KSl7XG4gICAgbWF4ID0gbWFrZVN1KG1heCk7XG4gIH1cblxuICBjb25zdCBzdHIgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gIGxldCByYW47XG5cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgaWYobWluLmlzWmVybygpKXtcbiAgICAgIHJhbiA9IG1ha2VTdSgwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJhbiA9IG1pbjtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICAgIHJhbiA9IG1ha2VTdShcIjAuXCIgKyBhcnJbMV0pLm11bHRpcGxpY2F0aW9uKG1heCk7XG4gIH1cbiAgcmV0dXJuIHJhbjtcbn07XG5cbksucmFuZG9tRWxlbWVudCA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgY29uc3QgaSA9IEsucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCkuaW50ZWdlcjtcbiAgcmV0dXJuIGFycmF5W2ldO1xufTtcblxuSy5yYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYoICFpc1N1KG1pbikgfHwgIWlzU3UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKG1pbi5pc0VxdWFsKG1heCkgfHwgbWluLmlzTGFyZ2UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbi5nZXROdW1iZXIoKTsgaSA8PSBtYXguZ2V0TnVtYmVyKCk7IGkrKyl7XG4gICAgY29uc3QgcyA9IG1ha2VTdShpKTtcbiAgICBhcnIucHVzaChzKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IEsucmFuZG9tRWxlbWVudChhcnIpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG5LLm1ha2VQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZihtYXggJiYgbWF4LmlzU3UgJiYgbWF4LmlzU3UoKSl7XG4gICAgbWF4ID0gTnVtYmVyKG1heC5nZXRTdHJpbmcoKSk7XG4gIH1cblxuICBjb25zdCBNQVggPSAxMDA7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBpZihtYXggPiBNQVgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgbWF4OyBpKyspe1xuICAgIGNvbnN0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGlmKHN1LmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgfVxuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2pdO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBzdW0gKz0gZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuXG5cbksuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgZW1wdHkuXCI7XG4gIH1cbiAgbGV0IGlwID0gMTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtpXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgaXAgPSBpcCAqIGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBhIE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5LLmRpdmlzaW9uID0gZnVuY3Rpb24oZGl2aWRlbmQsIGRpdmlzb3Ipe1xuICBpZihkaXZpZGVuZCA9PT0gdW5kZWZpbmVkIHx8IGRpdmlzb3IgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGRpdmlkZW5kIC8gZGl2aXNvcjtcbiAgcmV0dXJuIHtcbiAgICBpbnRlZ2VyOiB7XG4gICAgICByZW1haW5kZXI6IGRpdmlkZW5kICUgZGl2aXNvcixcbiAgICAgIHJlc3VsdDogTWF0aC5mbG9vcihyZXN1bHQpXG4gICAgfSxcbiAgICByZWFsTnVtYmVyOiByZXN1bHRcbiAgfTtcbn07XG5cbksuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgbGV0IGEgPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhICs9IGFycltpXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbksuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdW0gPSBLLmRpdmlzb3JzU3VtbWF0aW9uKG4pO1xuICBpZihzdW0gPiBuICogMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUEgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gbiAqIG47XG4gIGNvbnN0IHMgPSBTdHJpbmcobnVtKTtcbiAgY29uc3QgbGVuID0gcy5sZW5ndGg7XG4gIGxldCBmaXJzdF9sZW4gPSAwO1xuICBsZXQgYWZ0ZXJfbGVuID0gMDtcbiAgbGV0IGZpcnN0LCBhZnRlcjtcbiAgaWYoUy5pc09kZE51bWJlcihsZW4pKXtcbiAgICBmaXJzdF9sZW4gPSAobGVuIC0gMSkgLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbiArIDE7XG4gIH1lbHNle1xuICAgIGZpcnN0X2xlbiA9IGxlbiAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuO1xuICB9XG4gIGZpcnN0ID0gTnVtYmVyKHMuc3Vic3RyKDAsIGZpcnN0X2xlbikpO1xuICBhZnRlciA9IE51bWJlcihzLnN1YnN0cihmaXJzdF9sZW4sIGFmdGVyX2xlbikpO1xuXG4gIGlmKCggZmlyc3QgKyBhZnRlciApID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQiA9IGZ1bmN0aW9uKG4pe1xuXG4gIGNvbnN0IGFyciA9IFN0cmluZyhuKS5zcGxpdChcIlwiKTtcblxuICBjb25zdCBtaW4gPSBOdW1iZXIoYXJyLnNvcnQoKS5qb2luKFwiXCIpKTtcbiAgY29uc3QgbWF4ID0gTnVtYmVyKGFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG5cbiAgaWYoKG1heCAtIG1pbikgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQShuKSB8fCBLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNJbnRlZ2VyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4pO1xuICBpZiggZiA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8g6Kq/5ZKM5bmz5Z2HXG5LLmhhcm1vbmljTWVhbiA9IGZ1bmN0aW9uKGFycil7XG4gIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIHN1bSArPSAxIC8gYXJyW2ldO1xuICB9XG4gIHJldHVybiBsZW4gLyBzdW07XG59O1xuXG4vLyDoqr/lkozmlbDjgYvjganjgYbjgYtcbksuaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgY29uc3QgcmVzID0gSy5oYXJtb25pY01lYW4oYXJyKTtcbiAgaWYoUy5pc0ludGVnZXIocmVzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuUy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYobiA+IDAgJiYgUy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbksuY29sbGF0emhQcm9ibGVtID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBhcnIgPSBbXTtcblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24obil7XG4gICAgbGV0IHJlcyA9IG47XG4gICAgaWYoUy5pc09kZE51bWJlcihuKSl7XG4gICAgICByZXMgPSBuICogMyArIDE7XG4gICAgfWVsc2UgaWYoUy5pc0V2ZW5OdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAvIDI7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgd2hpbGUobnVtID4gMSl7XG4gICAgbnVtID0gY2FsYyhudW0pO1xuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODleOCp+ODq+ODnuODvOODhuOCueODiFxuLy8gSlPjga7mibHjgYjjgovnr4Tlm7LjgpLotoXjgYjjgabjgYTjgabjgYbjgb7jgY/li5XjgYvjgZpcbksuZmVybWF0VGVzdCA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFTLmlzSW50ZWdlcihuKSB8fCBTLmlzWmVybyhuKSB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzLiBcIiArIG4gKyBcIiBpcyBpbmNvcnJlY3QgcGFyYW1ldGVyLlwiO1xuICB9XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gMTAwO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMTsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgYSA9IEsucmFuZG9tSW50KDIsIG4gLSAxKTtcbiAgICBpZihLLm1heENvbW1vbkRpdmlzb3IoYSwgbikgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IE1hdGgucG93KGEsIG4gLSAxKSAlIG47XG4gICAgaWYocmVzICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCJNYXliZSBQcmltZSBOdW1iZXJcIjtcbn07XG5cbi8vIOe1hOOBv+WQiOOCj+OBm+aVsOOBruioiOeul1xuLy8gSy5jb21iaW5hdGlvbnMgPSBmdW5jdGlvbihhcnIpe1xuLy8gfTtcblxuLy8gMyA9PiBbMCwgM10sIFsxLCAyXSwgWzIsIDFdLCBbMywgMF1cbksuZ2V0SW5jbHVkZXNOdW1iZXJzID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCB0ZW1wID0gbnVtO1xuICBsZXQgYm9vbCA9IHRydWU7XG4gIHdoaWxlKGJvb2wpe1xuICAgIGNvbnN0IGEgPSB0ZW1wO1xuICAgIGNvbnN0IGIgPSBudW0gLXRlbXA7XG4gICAgY29uc3QgYXIgPSBbYSxiXTtcbiAgICBhcnIucHVzaChhcik7XG4gICAgdGVtcCA9IHRlbXAgLTE7XG4gICAgaWYodGVtcCA8IDApe1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyBmaWJvbmFjY2lcblxuXG5cblxuXG5cblxuLy8gdG9kbyAwc3RhcnRcbmNvbnN0IGFycmF5U3VtbWF0aW9uID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhKGEgaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICBhID0gY29yZS5udW1Ub0FycmF5KGEpO1xuICB9XG4gIGlmKCAhKGIgaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICBiID0gY29yZS5udW1Ub0FycmF5KGIpO1xuICB9XG5cbiAgaWYoIWNvcmUuaXNOdW1BcnJheShhKSB8fCAhY29yZS5pc051bUFycmF5KGIpKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYoY29yZS5pc1plcm8oYVswXSkgJiYgY29yZS5pc1plcm8oYlswXSkpe1xuICAgIHJldHVybiB7XG4gICAgICBhcnJheTogWzBdLFxuICAgICAgc3RyaW5nOiBcIjBcIixcbiAgICAgIG51bWJlcjogMCxcbiAgICAgIGxlbmd0aDogMVxuICAgIH07XG4gIH1cblxuICBjb25zdCBBID0gbWFrZVN1KGEpO1xuICBjb25zdCBCID0gbWFrZVN1KGIpO1xuXG4gIGNvbnNvbGUubG9nKEEsQik7XG5cbiAgY29uc3QgcmVzID0gY29yZS5nZXRMYXJnZXIoYSwgYik7XG4gIGNvbnN0IGFycl9hID0gcmVzWzBdO1xuICBjb25zdCBhcnJfYiA9IHJlc1sxXTtcbiAgY29uc3QgbGVuID0gYXJyX2EubGVuZ3RoO1xuXG4gIGNvbnN0IGdhcCA9IGxlbiAtIGFycl9iLmxlbmd0aDtcblxuICBsZXQgb3ZlciA9IDAsIGFycl9jID0gW107XG4gIGZvcihsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgYXJyX2MudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgYXJyX2MudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShhcnJfYyk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldExhcmdlciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnJfYSA9IFtdLCBhcnJfYiA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhW2ldO1xuICAgIGlmKGVsbV9hID09PSAwICYmIGFycl9hLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoZWxtX2EgPj0gIDAgJiYgZWxtX2EgPCAxMCl7XG4gICAgICBhcnJfYS5wdXNoKGVsbV9hKTtcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtX2IgPSBiW2ldO1xuICAgIGlmKGVsbV9iID09PSAwICYmIGFycl9iLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoZWxtX2IgPj0gIDAgJiYgZWxtX2IgPCAxMCl7XG4gICAgICBhcnJfYi5wdXNoKGVsbV9iKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzO1xuICBpZihhcnJfYS5sZW5ndGggPiBhcnJfYi5sZW5ndGgpe1xuICAgIHJlcyA9IFthLCBiXTtcbiAgfWVsc2UgaWYoYXJyX2EubGVuZ3RoIDwgYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYiwgYV07XG4gIH1lbHNle1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBlbG1fYWEgPSBhcnJfYVtpXTtcbiAgICAgIGNvbnN0IGVsbV9iYiA9IGFycl9iW2ldO1xuICAgICAgaWYoZWxtX2FhID4gZWxtX2JiKXtcbiAgICAgICAgcmVzID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hYSA8IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzID0gW2EsIGJdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogS1xufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWDogMTAwMDAsXG4gIE1JTjogLTEwMDAwLFxuICBEQlo6IFwiRGl2aXNpb24gYnkgWmVyb1wiLFxuICBOQU46IFwiTm90IGEgbnVtYmVyXCIsXG4gIE5PVFNVOiBcIkFyZ3VtZW50IGlzIG5vdCBTdS5cIlxufTtcbiIsImNvbnN0IGNvcmUgPSB7fTtcblxuY29yZS5pc051bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG4gICAgYXJyLnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyMSA9IFtdO1xuICBjb25zdCBhcnIyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgbGV0IHRndCA9IGFycjE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpZihlbG0gPT09IFwiLlwiICYmIHRndCA9PT0gYXJyMSl7XG4gICAgICAgIHRndCA9IGFycjI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGd0LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gWy4uLmFycjEsIFwiLlwiLCBhcnIyXTtcbn07XG5cbmNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGFyciA9IHN0ci5zcGxpdChcIlwiKTtcblxuICBjb25zdCBpbnQgPSBbXTtcbiAgY29uc3QgZGVjaW1hbCA9IFtdO1xuXG4gIGxldCBoZWFkX3plcm8gPSB0cnVlO1xuICBsZXQgaXNfZGVjaW1hbCA9IGZhbHNlO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcblxuICAgIGNvbnN0IG51bSA9IE51bWJlcihhcnJbaV0pO1xuICAgIGNvbnN0IGlzTnVtYmVyID0gdGhpcy5pc051bWJlcihudW0pO1xuICAgIGlmKCFpc051bWJlciAmJiBhcnJbaV0gPT09IFwiLlwiKXtcbiAgICAgIGlzX2RlY2ltYWwgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfWVsc2UgaWYoIWlzTnVtYmVyKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIik7XG4gICAgfWVsc2UgaWYoaGVhZF96ZXJvICYmIG51bSA9PT0gMCAmJiAhaXNfZGVjaW1hbCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaGVhZF96ZXJvID0gZmFsc2U7XG5cbiAgICBpZihpc19kZWNpbWFsKXtcbiAgICAgIGRlY2ltYWwucHVzaChudW0pO1xuICAgIH1lbHNle1xuICAgICAgaW50LnB1c2gobnVtKTtcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGkgPSBkZWNpbWFsLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBjb25zdCBkID0gZGVjaW1hbFtpXTtcbiAgICBpZihkID09PSAwKXtcbiAgICAgIGRlY2ltYWwucG9wKCk7XG4gICAgfWVsc2V7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGludDogaW50LFxuICAgIGRlY2ltYWw6IGRlY2ltYWxcbiAgfTtcbn07XG5cbmNvcmUuY29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZighYSB8fCAhYil7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGFfYXJyLCBiX2FycjtcbiAgaWYoYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICBhX2FyciA9IGE7XG4gIH1lbHNle1xuICAgIGFfYXJyID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwyKGEpO1xuICB9XG4gIGlmKGIgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgYl9hcnIgPSBiO1xuICB9ZWxzZXtcbiAgICBiX2FyciA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMihiKTtcbiAgfVxuXG4gIGlmKGFfYXJyWzBdID09PSAwKXtcbiAgICBjb25zdCBuZXdfYSA9IFtdO1xuICAgIGxldCB6ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYV9hcnIubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtID0gYV9hcnJbaV07XG4gICAgICBpZihlbG0gPT09IDAgJiYgemVybyl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbmV3X2EucHVzaChlbG0pO1xuICAgICAgemVybyA9IGZhbHNlO1xuICAgIH1cbiAgICBhX2FyciA9IG5ld19hO1xuICB9XG5cbiAgaWYoYl9hcnJbMF0gPT09IDApe1xuICAgIGNvbnN0IG5ld19iID0gW107XG4gICAgbGV0IHplcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBiX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBlbG0gPSBiX2FycltpXTtcbiAgICAgIGlmKGVsbSA9PT0gMCAmJiB6ZXJvKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBuZXdfYi5wdXNoKGVsbSk7XG4gICAgICB6ZXJvID0gZmFsc2U7XG4gICAgfVxuICAgIGJfYXJyID0gbmV3X2I7XG4gIH1cblxuICBjb25zdCBvID0ge1xuICAgIGVxdWFsOiBmYWxzZSxcbiAgICBsYXJnZTogbnVsbCxcbiAgICBzbWFsbDogbnVsbFxuICB9O1xuXG4gIGlmKGFfYXJyLmxlbmd0aCA+IGFfYXJyLmxlbmd0aCl7XG4gICAgby5sYXJnZSA9IGE7XG4gICAgby5zbWFsbCA9IGI7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgaWYoYV9hcnIubGVuZ3RoIDwgYV9hcnIubGVuZ3RoKXtcbiAgICBvLmxhcmdlID0gYjtcbiAgICBvLnNtYWxsID0gYTtcbiAgICByZXR1cm4gbztcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgYWEgPSBhX2FycltpXTtcbiAgICBjb25zdCBiYiA9IGJfYXJyW2ldO1xuICAgIGlmKGFhID4gYmIpe1xuICAgICAgby5sYXJnZSA9IGE7XG4gICAgICBvLnNtYWxsID0gYjtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICBpZihhYSA8IGJiKXtcbiAgICAgIG8ubGFyZ2UgPSBiO1xuICAgICAgby5zbWFsbCA9IGE7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gIH1cblxuICBvLmVxdWFsID0gdHJ1ZTtcbiAgcmV0dXJuIG87XG5cbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29yZS5maXhDYXJyeSA9IGZ1bmN0aW9uKGFycil7XG5cbiAgY29uc3QgbmV3X2FyciA9IFtdO1xuICBsZXQgY2FycnkgPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgdmFsID0gYXJyW2ldICsgY2Fycnk7XG4gICAgaWYodmFsID4gOSl7XG4gICAgICB2YWwgPSB2YWwgLSAxMDtcbiAgICAgIGNhcnJ5ID0gMTtcbiAgICB9ZWxzZSBpZiggdmFsID49IDAgJiYgdmFsIDw9IDkpe1xuICAgICAgY2FycnkgPSAwO1xuICAgIH1cblxuICAgIG5ld19hcnIucHVzaCh2YWwpO1xuICB9XG4gIGlmKGNhcnJ5ID4gMCl7XG4gICAgbmV3X2Fyci5wdXNoKGNhcnJ5KTtcbiAgfVxuXG4gIHJldHVybiBuZXdfYXJyO1xuXG59O1xuXG5jb3JlLmFkZCA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZighYSAmJiAhYil7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYV8gPSB0aGlzLm51bVRvQXJyYXlXaXRoRGVjaW1hbDIoYSk7XG4gIGNvbnN0IGJfID0gdGhpcy5udW1Ub0FycmF5V2l0aERlY2ltYWwyKGIpO1xuICBjb25zdCBhX2ludCA9IGFfLmludDtcbiAgY29uc3QgYl9pbnQgPSBiXy5pbnQ7XG4gIGNvbnN0IGFfZGVjID0gYV8uZGVjaW1hbDtcbiAgY29uc3QgYl9kZWMgPSBiXy5kZWNpbWFsO1xuXG4gIGxldCBkZWNfbGVuID0gYV9kZWMubGVuZ3RoO1xuICBpZihkZWNfbGVuIDwgYl9kZWMubGVuZ3RoKXtcbiAgICBkZWNfbGVuID0gYl9kZWMubGVuZ3RoO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGRlY19sZW47IGkrKyl7XG4gICAgY29uc3QgYV9kID0gYV9kZWNbaV07XG4gICAgY29uc3QgYl9kID0gYl9kZWNbaV07XG4gICAgaWYoIWNvcmUuaXNOdW1iZXIoYV9kKSl7XG4gICAgICBhX2RlYy5wdXNoKDApO1xuICAgIH1cbiAgICBpZighY29yZS5pc051bWJlcihiX2QpKXtcbiAgICAgIGJfZGVjLnB1c2goMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKGEsIGIpe1xuICAgIGNvbnN0IGFyciA9IFtdO1xuICAgIGxldCBhcnJfYSA9IGE7XG4gICAgbGV0IGFycl9iID0gYjtcbiAgICBpZihhLmxlbmd0aCA8IGIubGVuZ3RoKXtcbiAgICAgIGFycl9hID0gYjtcbiAgICAgIGFycl9iID0gYTtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGFhID0gYXJyX2FbaV0gPyBhcnJfYVtpXSA6IDA7XG4gICAgICBjb25zdCBiYiA9IGFycl9iW2ldID8gYXJyX2JbaV0gOiAwO1xuICAgICAgbGV0IHJlcyA9IGFhICsgYmI7XG4gICAgICBhcnIucHVzaChyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gY29yZS5maXhDYXJyeShhcnIpO1xuICB9O1xuXG4gIGNvbnN0IHsgZGVjX2FyciwgZGVjX2NhcnJ5IH0gPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsZW5ndGggPSBhX2RlYy5sZW5ndGggPCBiX2RlYy5sZW5ndGggPyBiX2RlYy5sZWd0aCA6IGFfZGVjLmxlbmd0aDtcbiAgICBjb25zdCByZXMgPSBjYWxjKGFfZGVjLnJldmVyc2UoKSwgYl9kZWMucmV2ZXJzZSgpKTtcblxuICAgIGxldCBjYXJyeSA9IDA7XG4gICAgaWYocmVzLmxlbmd0aCA+IGxlbmd0aCl7XG4gICAgICBjYXJyeSA9IHJlcy5wb3AoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlY19hcnI6IHJlcyxcbiAgICAgIGRlY19jYXJyeTogY2FycnlcbiAgICB9O1xuICB9KSgpO1xuXG4gIGxldCBpbnRfYXJyID0gKGZ1bmN0aW9uKGRlY19jYXJyeSl7XG4gICAgbGV0IHJlcyA9IGNhbGMoYV9pbnQucmV2ZXJzZSgpLCBiX2ludC5yZXZlcnNlKCkpO1xuXG4gICAgaWYoZGVjX2NhcnJ5ID4gMCl7XG4gICAgICBjb25zb2xlLmluZm8ocmVzKTtcbiAgICAgIHJlcyA9IGNhbGMocmVzLCBbZGVjX2NhcnJ5XSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH0pKGRlY19jYXJyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbnQ6IGludF9hcnIucmV2ZXJzZSgpLFxuICAgIGRlY2ltYWw6IGRlY19hcnIucmV2ZXJzZSgpXG4gIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCJpbXBvcnQgcyBmcm9tIFwiLi9zdS5qc1wiO1xuaW1wb3J0IFNLIGZyb20gXCIuL1NLLmpzXCI7XG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgczogcyxcbiAgUzogU0suUyxcbiAgSzogU0suSyxcbiAgY29yZTogY29yZVxufTsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IE1BWCA9IGNvbnN0YW50cy5NQVg7XG5jb25zdCBNSU4gPSBjb25zdGFudHMuTUlOO1xuY29uc3QgREJaID0gY29uc3RhbnRzLkRCWjtcbmNvbnN0IE5BTiA9IGNvbnN0YW50cy5OQU47XG5jb25zdCBOT1RTVSA9IGNvbnN0YW50cy5OT1RTVTtcblxuXG5jb25zdCBTdSA9IGZ1bmN0aW9uKG4sIG9wdGlvbil7XG4gIGlmKGlzTmFOKG4pKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuICBpZighbil7XG4gICAgbiA9IDA7XG4gIH1cbiAgaWYoIW9wdGlvbil7XG4gICAgb3B0aW9uID0ge307XG4gIH1cblxuICBsZXQgc3RyID0gU3RyaW5nKG4pO1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0gPT09IFwiLVwiKXtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCk7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIGlmKCFuZWdhdGl2ZSAmJiBvcHRpb24gJiYgb3B0aW9uLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihpc05hTihOdW1iZXIoc3RyKSkpe1xuICAgIHN0ciA9IFwiMFwiO1xuICB9XG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICBsZXQgaW50X3N0ciA9IHBhcnRzWzBdO1xuICBsZXQgZGVjaW1hbF9zdHIgPSBwYXJ0c1sxXTtcbiAgaWYoaW50X3N0cil7XG4gICAgY29uc3QgaW50MCA9IGludF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoaW50MCAmJiBpbnQwLmxlbmd0aCA9PT0gaW50X3N0ci5sZW5ndGgpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgbmV3X2ludF9zdHIgPSBcIlwiO1xuICAgIGxldCBzdGFydF96ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDxpbnRfc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKGludF9zdHJbaV0gIT09IFwiMFwiIHx8ICFzdGFydF96ZXJvKXtcbiAgICAgICAgc3RhcnRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfaW50X3N0ciArPSBpbnRfc3RyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2ludF9zdHIpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgaW50X3N0ciA9IG5ld19pbnRfc3RyO1xuICAgIH1cbiAgfVxuXG4gIGlmKGRlY2ltYWxfc3RyKXtcbiAgICBjb25zdCBkZWMwID0gZGVjaW1hbF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoZGVjMCAmJiBkZWMwLmxlbmd0aCA9PT0gZGVjaW1hbF9zdHIubGVuZ3RoKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBlbmRfemVybyA9IHRydWU7XG4gICAgbGV0IG5ld19kZWNpbWFsX3N0ciA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gZGVjaW1hbF9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgaWYoZGVjaW1hbF9zdHJbaV0gIT09IFwiMFwiIHx8ICFlbmRfemVybyl7XG4gICAgICAgIGVuZF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19kZWNpbWFsX3N0ciA9IGRlY2ltYWxfc3RyW2ldICsgbmV3X2RlY2ltYWxfc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2RlY2ltYWxfc3RyKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBkZWNpbWFsX3N0ciA9IG5ld19kZWNpbWFsX3N0cjtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBpbnRfYXJyO1xuICBsZXQgZGVjaW1hbF9hcnI7XG5cblxuICB0cnl7XG4gICAgaW50X2FyciA9IGNvcmUubnVtVG9BcnJheShpbnRfc3RyKTtcbiAgICBkZWNpbWFsX2FyciA9IGRlY2ltYWxfc3RyID8gY29yZS5udW1Ub0FycmF5KGRlY2ltYWxfc3RyKSA6IFswXTtcbiAgfWNhdGNoKGUpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG5cbiAgdGhpcy5pbnRlZ2VyID0gaW50X2FycjtcbiAgdGhpcy5kZWNpbWFsID0gZGVjaW1hbF9hcnI7XG4gIHRoaXMubmVnYXRpdmUgPSBuZWdhdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgXG4gIGxldCBkZW5vbWluYXRvciA9IFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNpbWFsLmxlbmd0aDsgaSsrKXtcbiAgICBkZW5vbWluYXRvci5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5mcmFjdGlvbiA9IHtcbiAgICBudW1lcmF0b3I6IHRoaXMuaW50ZWdlci5jb25jYXQodGhpcy5kZWNpbWFsKSxcbiAgICBkZW5vbWluYXRvcjogZGVub21pbmF0b3JcbiAgfTtcblxufTtcblxuY29uc3QgbWFrZVN1ID0gZnVuY3Rpb24obnVtLCBvcHRpb24pe1xuICBsZXQgcmVzO1xuICB0cnl7XG4gICAgcmVzID0gbmV3IFN1KG51bSwgb3B0aW9uKTtcbiAgfWNhdGNoKGUpe1xuICAgIHJlcyA9IGUubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG5cbn07XG5cbmNvbnN0IGlzU3UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKHN1IGluc3RhbmNlb2YgU3Upe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb3B5U3UgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IHN0ciA9IHN1LmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gIFpFUk86IG1ha2VTdSgwKSxcbiAgT05FOiBtYWtlU3UoMSksXG4gIEZJUlNUX1BSSU1FX05VTUJFUjogbWFrZVN1KDIpLFxuICBNQVg6IG1ha2VTdShNQVgpLFxuICBNSU46IG1ha2VTdShNSU4pXG59O1xuXG5cblN1LnByb3RvdHlwZS5nZXRTdHJpbmcgPSBmdW5jdGlvbigpe1xuICBsZXQgc3RyID0gU3RyaW5nKCB0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIGNvbnN0IGFjID0gdGhpcy5kZWNpbWFsLnJlZHVjZSgoYSxlKSA9PiBhICsgZSk7XG4gIGlmKGFjICE9PSAwKXtcbiAgICBzdHIgKz0gXCIuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gdGhpcy5uZWdhdGl2ZSA/IGAtJHtzdHJ9YCA6IHN0cjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5nZXRTdHJpbmcoKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0SW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcihcIjAuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdHIgPSB0aGlzLmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBnZXRMYXJnZSA9IGZ1bmN0aW9uKGEsIGIsIGFic29sdXRlID0gZmFsc2Upe1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBsZXQgZmllbGQgPSBbXTtcblxuICBjb25zdCBfYSA9IG1ha2VTdShhLmdldFN0cmluZygpKTtcbiAgY29uc3QgX2IgPSBtYWtlU3UoYi5nZXRTdHJpbmcoKSk7XG5cbiAgaWYoYWJzb2x1dGUpe1xuICAgIF9hLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgX2IubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmKF9hLmlzWmVybygpICYmIF9iLmlzWmVybygpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiAhX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBiO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoX2EuaW50ZWdlci5sZW5ndGggPiBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5pbnRlZ2VyLmxlbmd0aCA8IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgX2EuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gX2EuaW50ZWdlcltpXTtcbiAgICBsZXQgZWxtX2IgPSBfYi5pbnRlZ2VyW2ldO1xuICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICBicmVhaztcbiAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICBjb25zdCBsZW4gPSBfYS5kZWNpbWFsLmxlbmd0aCA+PSBfYi5kZWNpbWFsLmxlbmd0aCA/IF9hLmRlY2ltYWwubGVuZ3RoIDogX2IuZGVjaW1hbC5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IF9hLmRlY2ltYWxbaV0gPyBfYS5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGxldCBlbG1fYiA9IF9iLmRlY2ltYWxbaV0gPyBfYi5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKG5lZ2F0aXZlKXtcbiAgICBmaWVsZCA9IFtmaWVsZFsxXSwgZmllbGRbMF1dO1xuICB9XG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZmllbGRbMF07XG5cbn07XG5cblxuU3UucHJvdG90eXBlLmlzRXF1YWwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCBpX2EgPSBhLmludGVnZXI7XG4gIGNvbnN0IGlfYiA9IGIuaW50ZWdlcjtcbiAgY29uc3QgZF9hID0gYS5kZWNpbWFsO1xuICBjb25zdCBkX2IgPSBiLmRlY2ltYWw7XG5cbiAgY29uc3QgbGFyZ2UgPSBnZXRMYXJnZShhLCBiKTtcblxuICBpZighbGFyZ2Upe1xuICAgIGlmKGlfYS5sZW5ndGggPT09IGlfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGlfYVtpXSAhPT0gaV9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZSBpZihkX2EubGVuZ3RoID09PSBkX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihkX2FbaV0gIT09IGRfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoYS5uZWdhdGl2ZSA9PT0gYi5uZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59O1xuXG5TdS5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pbnRlZ2VyLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmludGVnZXJbMF0gPT09IDAgJiYgIXRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT25lID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMVwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMYXJnZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBhLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTbWFsbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBiLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1Bvc2l0aXZlKCkgJiYgdGhpcy5pc0ludGVnZXIoKSAmJiB0aGlzLmlzTGFyZ2UoQ09OU1RBTlRTLlpFUk8pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmNvbnRhaW5EZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdGhpcy5kZWNpbWFsLnJlZHVjZShmdW5jdGlvbihhLCB2KXtcbiAgICAgIHJldHVybiBhICsgdjtcbiAgfSk7XG4gIGlmKHJlcyA9PT0gMCl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gdGhpcy5jbG9uZSgpO1xuICBsZXQgYiA9IHN1LmNsb25lKCk7XG4gIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiO1xuICB9XG4gIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlO1xuICBpZihhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIGIubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGEuc3VidHJhY3QoYik7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIGEubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGIuc3VidHJhY3QoYSk7XG4gIH1cblxuICBsZXQgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJlcyA9IGE7XG4gIH1cbiAgbGV0IGludF9hID0gcmVzLmludGVnZXI7XG4gIGxldCBkZWNfYSA9IHJlcy5kZWNpbWFsO1xuICBsZXQgaW50X2IsIGRlY19iO1xuICBpZihyZXMgPT09IGEpe1xuICAgIGludF9iID0gYi5pbnRlZ2VyO1xuICAgIGRlY19iID0gYi5kZWNpbWFsO1xuICB9ZWxzZXtcbiAgICBpbnRfYiA9IGEuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGEuZGVjaW1hbDtcbiAgfVxuXG4gIGxldCBsZW5faSA9IGludF9hLmxlbmd0aDtcbiAgbGV0IGxlbl9kID0gZGVjX2EubGVuZ3RoO1xuXG4gIGlmKGRlY19iLmxlbmd0aCA+IGRlY19hLmxlbmd0aCl7XG4gICAgbGVuX2QgPSBkZWNfYi5sZW5ndGg7XG4gIH1cbiAgbGV0IG92ZXIgPSAwLFxuICAgICAgaW50X3JlcyA9IFtdLFxuICAgICAgZGVjX3JlcyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IGxlbl9kIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGRlY19hW2ldIHx8IDA7XG4gICAgbGV0IGVsbV9iID0gZGVjX2JbaV0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgZGVjX3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG5cbiAgZm9yKGxldCBpID0gZGVjX3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApe1xuICAgIGxldCBkID0gZGVjX3Jlc1tpXTtcbiAgICBpZihkID09PSAwKXtcbiAgICAgIGRlY19yZXMucG9wKCk7XG4gICAgfWVsc2V7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBnYXAgPSBsZW5faSAtIGludF9iLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gbGVuX2kgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gaW50X2FbaV07XG4gICAgbGV0IGVsbV9iID0gaW50X2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgaW50X3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBpbnRfcmVzLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoaW50X3Jlcy5qb2luKFwiXCIpICsgXCIuXCIgKyBkZWNfcmVzLmpvaW4oXCJcIiksIHtuZWdhdGl2ZTogbmVnYXRpdmV9KTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGIubmVnYXRlKCk7XG4gIH1cblxuICBpZihhLm5lZ2F0aXZlICE9PSBiLm5lZ2F0aXZlKXtcbiAgICBiLm5lZ2F0aXZlID0gIWIubmVnYXRpdmU7XG4gICAgcmV0dXJuIGEuYWRkKGIpO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gYS5uZWdhdGl2ZTtcblxuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiLCB0cnVlKTtcbiAgaWYocmVzICE9PSBhKXtcbiAgICBhID0gc3U7XG4gICAgYiA9IHRoaXM7XG4gICAgbmVnYXRpdmUgPSAhYS5uZWdhdGl2ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgYV9pX2xlbiA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGJfaV9sZW4gPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IGFfZF9sZW4gPSBhLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBiX2RfbGVuID0gYi5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgZF9nYXAgPSBNYXRoLmFicyhhX2RfbGVuIC0gYl9kX2xlbik7XG5cbiAgbGV0IGxlbl9pID0gMDtcbiAgbGV0IGxlbl9kID0gMDtcbiAgaWYoYV9pX2xlbiA+IGJfaV9sZW4pe1xuICAgIGxlbl9pICs9IGFfaV9sZW47XG4gIH1lbHNle1xuICAgIGxlbl9pICs9IGJfaV9sZW47XG4gIH1cbiAgaWYoYV9kX2xlbiA+IGJfZF9sZW4pe1xuICAgIGxlbl9kICs9IGFfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYl9pZC5wdXNoKDApO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGVuX2QgKz0gYl9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBhX2lkLnB1c2goMCk7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgZGVidCA9IDA7XG4gIGNvbnN0IHJlc19hcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuX2kgKyBsZW5fZDsgaSsrKXtcbiAgICBjb25zdCBpX2EgPSBhX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGlfYiA9IGJfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgYV9lbG0gPSAoYV9pZFtpX2FdID8gYV9pZFtpX2FdIDogMCkgLSBkZWJ0O1xuICAgIGNvbnN0IGJfZWxtID0gYl9pZFtpX2JdID8gYl9pZFtpX2JdIDogMDtcbiAgICBpZihhX2VsbSA+PSBiX2VsbSl7XG4gICAgICBkZWJ0ID0gMDtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KGFfZWxtIC0gYl9lbG0pO1xuICAgIH1lbHNle1xuICAgICAgZGVidCA9IDE7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdCgoZGVidCAqIDEwKSArIGFfZWxtIC0gYl9lbG0pO1xuICAgIH1cblxuICB9XG4gIHJlc19hcnJheS5zcGxpY2UocmVzX2FycmF5Lmxlbmd0aCAtIGxlbl9kLCAwLCBcIi5cIik7XG4gIGNvbnN0IG1pbnVzID0gbmVnYXRpdmUgPyBcIi1cIiA6IFwiXCI7XG5cbiAgY29uc3QgcmVzdWx0ID0gIG1ha2VTdShtaW51cyArIHJlc19hcnJheS5qb2luKFwiXCIpKTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICB0aGlzLm5ldmF0aXZlID0gZmFsc2U7XG4gIH1lbHNle1xuICAgIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm1ha2VQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLm5lZ2F0aXZlID0gZmFsc2U7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm1ha2VOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGljYXRpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKGEuaXNaZXJvKCkgfHwgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgZHBfYSA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGRwX2IgPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IHJlc19hcnIgPSBbXTtcbiAgZm9yKGxldCBpX2EgPSAwOyBpX2EgPCBhX2lkLmxlbmd0aDsgaV9hKyspe1xuICAgIGZvcihsZXQgaV9iID0gMDsgaV9iIDwgYl9pZC5sZW5ndGg7IGlfYisrKXtcbiAgICAgIGNvbnN0IGVsbV9hID0gYV9pZFtpX2FdO1xuICAgICAgY29uc3QgZWxtX2IgPSBiX2lkW2lfYl07XG4gICAgICBjb25zdCBwb3NfYSA9IGRwX2EgLSBpX2EgLTE7XG4gICAgICBjb25zdCBwb3NfYiA9IGRwX2IgLSBpX2IgLTE7XG4gICAgICBjb25zdCBwb3MgPSBwb3NfYSArIHBvc19iO1xuICAgICAgbGV0IHJlcyA9IGVsbV9hICogZWxtX2I7XG4gICAgICBsZXQgbGVuID0gTWF0aC5hYnMocG9zKTtcbiAgICAgIGxldCBzdHI7XG4gICAgICBpZihwb3MgPj0gMCl7XG4gICAgICAgIGxlbisrO1xuICAgICAgICBpZihyZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuICsgMSwgXCIwXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICBpZihsZW4gPT09IDEgJiYgcmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcylbMF0gKyBcIi5cIiArIFN0cmluZyhyZXMpWzFdO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBcIjAuXCIgKyBTdHJpbmcocmVzKS5wYWRTdGFydChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzX2Fyci5wdXNoKG1ha2VTdShzdHIpKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgcmVzID0gcmVzLmFkZChyZXNfYXJyW2ldKTtcbiAgfVxuXG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc2lvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcblxuICBpZihhLmlzWmVybygpICYmIGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBOQU47XG4gIH1lbHNlIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1lbHNlIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBEQlo7XG4gIH1cblxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBjb3VudCA9IG1ha2VTdSgwKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoYS5pc0xhcmdlKHN1bSkgfHwgYS5pc0VxdWFsKHN1bSkpe1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdSgxKSk7XG4gICAgc3VtID0gYi5tdWx0aXBsaWNhdGlvbihjb3VudCk7XG4gIH1cblxuICBjb3VudCA9IGNvdW50LnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIHN1bSA9IHN1bS5zdWJ0cmFjdChiKTtcbiAgY29uc3QgcmVtYWluID0gYS5zdWJ0cmFjdChzdW0pO1xuICBjb25zdCByZXMgPSBjb3VudDtcbiAgcmVzLnJlbWFpbmRlciA9IHJlbWFpbjtcbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG4gIHJldHVybiByZXM7XG59O1xuXG5cblN1LnByb3RvdHlwZS5wbHVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLnRhc3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubWludXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5oaWt1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5rYWtlcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS53YXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5kaXZpc2lvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmFkZChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgXG4gIGlmKCByZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPZGROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBpZiggIXJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyB0aGlzLmlzTGFyZ2UobWFrZVN1KGkpKTsgaSsrKXtcbiAgICBsZXQgc3UgPSBtYWtlU3UoaSk7XG4gICAgY29uc3QgcmVtYWluZGVyID0gdGhpcy5kaXZpc2lvbihzdSkucmVtYWluZGVyO1xuICAgIGlmKHJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIGFyci5wdXNoKHRoaXMpO1xuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldENvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGxldCBhID0gdGhpcztcbiAgbGV0IGIgPSBzdTtcblxuICBjb25zdCBhcnJfYSA9IGEuZ2V0RGl2aXNvcnMoKTtcbiAgaWYoYS5pc0VxdWFsKGIpKXtcbiAgICByZXR1cm4gYXJyX2E7XG4gIH1cbiAgY29uc3QgYXJyX2IgPSBiLmdldERpdmlzb3JzKCk7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFycl9iLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBlbG1fYiA9IGFycl9iW2pdO1xuICAgICAgaWYoZWxtX2EuaXNFcXVhbChlbG1fYikpe1xuICAgICAgICBkaXZzLnB1c2goZWxtX2EpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZzO1xufTtcblxuU3UucHJvdG90eXBlLmdldE1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0Q29tbW9uRGl2aXNvcnMoc3UpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBbdGhpc107XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjb3VudCA9IG1ha2VTdShcIjFcIik7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkgfHwgY291bnQuaXNFcXVhbChDT05TVEFOVFMuTUFYKSl7XG4gICAgYXJyLnB1c2godGhpcy5tdWx0aXBsaWNhdGlvbihjb3VudCkpO1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdShcIjFcIikpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuXG4gIGNvbnN0IG1heENvbW1vbkRpdmlzb3IgPSBhLmdldE1heENvbW1vbkRpdmlzb3IoYik7XG5cbiAgY29uc3QgbXVsdGkgPSBhLm11bHRpcGx5KGIpO1xuXG4gIGNvbnN0IHJlcyA9IG11bHRpLmRpdmlzaW9uKG1heENvbW1vbkRpdmlzb3IpO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblxuY29uc3QgbWFrZUZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oYSwgYil7XG5cbiAgaWYoIWlzU3UoYSkgfHwgIWlzU3UoYikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW2EsIGJdO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdLmlzTGFyZ2UoTUFYKSl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gYXJyW2Fyci5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBiID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjID0gYS5hZGQoYik7XG4gICAgYXJyLnB1c2goYyk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblxuY29uc3QgbWFrZUx1Y2FzU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gbWFrZUZpYm9uYWNjaVNlcXVlbmNlKG1ha2VTdSgyKSwgbWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcblxuICBjb25zdCBmaWJzID0gbWFrZUZpYm9uYWNjaVNlcXVlbmNlKHplcm8sIG9uZSk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBmaWJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGZpYnNbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMdWNhc051bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsdWNzID0gbWFrZUx1Y2FzU2VxdWVuY2UoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGx1Y3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gbHVjc1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuY29uc3QgbWFrZVNlcXVlbmNlID0gZnVuY3Rpb24oZmlyc3QsIG90aGVycyl7XG4gIGNvbnN0IGFycmF5ID0gW2ZpcnN0XTtcbiAgaWYoIW90aGVycyl7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBvdGhlcnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG0gPSBvdGhlcnNbaV07XG4gICAgaWYoIWlzU3UoZWxtKSl7XG4gICAgICBlbG0gPSBtYWtlU3UoZWxtKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuU3UucHJvdG90eXBlLmdldFNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuU3UucHJvdG90eXBlLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBzdW0gPSBzdW0uYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IGlwID0gYXJyWzBdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpcCA9IGlwLm11bHRpcGxpY2F0aW9uKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuU3UucHJvdG90eXBlLmRpZ2l0c3VtID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGEgPSBtYWtlU3UodGhpcy5pbnRlZ2VyW2ldKTtcbiAgICBzdW0gPSBzdW0uYWRkKGEpO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgyKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuY3ViZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgb25lID0gbWFrZVN1KFwiMVwiKTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgaWYoc3UuaXNFcXVhbChvbmUpKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsZXQgY291bnQgPSBvbmU7XG4gIGxldCByZXMgPSBjb3B5U3UodGhpcyk7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoc3UpKXtcbiAgICByZXMgPSB0aGlzLm11bHRpcGxpY2F0aW9uKHJlcyk7XG4gICAgY291bnQgPSBjb3VudC5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5pc09uZSgpIHx8IHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjJcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKG9uZSkpe1xuICAgIGxldCBlID0gdGhpcy5kaXZpc2lvbihjb3VudGVyKTtcbiAgICBpZihlLnJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldERpdmlzb3JzKCk7XG4gIGxldCBhID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhID0gYS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNMYXJnZSggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzRGVmaWNpZW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNTbWFsbCggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzUGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLnN1YnRyYWN0KHRoaXMpLmlzRXF1YWwodGhpcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5mYWN0b3JpYWwgPSBmdW5jdGlvbigpe1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZSh6ZXJvKSl7XG4gICAgcmVzID0gcmVzLm11bHRpcGxpY2F0aW9uKGNvdW50ZXIpO1xuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbmNvbnN0IG1ha2VQb2x5Z29uYWxOdW1iZXJzID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIWlzU3Uobikpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZihuLmlzU21hbGwobWFrZVN1KDMpKSl7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDEpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHJhbmdlID0gY3VycmVudDtcblxuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gbi5zdWJ0cmFjdChtYWtlU3UoMikpO1xuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgcmFuZ2UgPSByYW5nZS5hZGQoaW5jcmVtZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5hZGQocmFuZ2UpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBtYWtlVHJpYW5nbGVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgcmV0dXJuIG1ha2VQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSgzKSwgbWF4KTtcbn07XG5cbmNvbnN0IG1ha2VTcXVhcmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgcmV0dXJuIG1ha2VQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSg0KSwgbWF4KTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1RyaWFuZ2xlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3UgPSB0aGlzO1xuICBjb25zdCBhcnIgPSBtYWtlVHJpYW5nbGVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1NxdWFyZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVNxdWFyZU51bWJlcnMoc3UpO1xuICBjb25zdCByZXMgPSBhcnIuZmluZChlbG0gPT57XG4gICAgcmV0dXJuIGVsbS5pc0VxdWFsKHN1KTtcbiAgfSk7XG4gIGlmKHJlcyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cbiAgY29uc3QgdHdvID0gbWFrZVN1KDIpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMCk7XG4gIGxldCBleCA9IG1ha2VTdSgxKTtcbiAgXG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChtYXgpKXtcbiAgICBjdXJyZW50ID0gdHdvLmV4cG9uZW50aWF0ZShleCkuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICBleCA9IGV4LmFkZChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IG1hcnIgPSBtYWtlTWVyc2VubmVOdW1iZXJzKG1heCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbiA9IG1hcnJbaV07XG4gICAgaWYobi5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVOdW1iZXJzKG4pO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IG1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ha2VTdTogbWFrZVN1LFxuICBjb3B5U3U6IGNvcHlTdSxcbiAgaXNTdTogaXNTdSxcbiAgU3U6IFN1XG59OyJdLCJzb3VyY2VSb290IjoiIn0=