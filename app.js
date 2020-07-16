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

    if (!core.isNumber(elm)) {
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

    if (!core.isNumber(elm)) {
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
    var isNumber = core.isNumber(num);

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
      if (!core.isNumber(arr[i])) {
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

  var a_ = core.numToArrayWithDecimal2(a);
  var b_ = core.numToArrayWithDecimal2(b);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3UvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNPTlNUQU5UUyIsIk1JTiIsIlMiLCJLIiwibWFrZVN1Iiwic3UiLCJjb3B5U3UiLCJpc1N1IiwiU3UiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJ1bmRlZmluZWQiLCJzdHIiLCJTdHJpbmciLCJNYXRoIiwicmFuIiwiaXNaZXJvIiwiYXJyIiwic3BsaXQiLCJtdWx0aXBsaWNhdGlvbiIsInJhbmRvbUVsZW1lbnQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJpbnRlZ2VyIiwicmFuZG9tSW50IiwiaXNFcXVhbCIsImlzTGFyZ2UiLCJnZXROdW1iZXIiLCJzIiwicHVzaCIsInJlcyIsIm1ha2VQcmltZU51bWJlcnMiLCJOdW1iZXIiLCJnZXRTdHJpbmciLCJpc1ByaW1lTnVtYmVyIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwiYSIsImIiLCJpc051bWJlciIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImoiLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJuIiwiZGl2aXNvcnMiLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwibWF4Q29tbW9uRGl2aXNvciIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsImFycmF5U3VtbWF0aW9uIiwiQXJyYXkiLCJjb3JlIiwibnVtVG9BcnJheSIsImlzTnVtQXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJBIiwiQiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXJnZXIiLCJhcnJfYSIsImFycl9iIiwiZ2FwIiwib3ZlciIsImFycl9jIiwiX3JlcyIsImVsbV9hIiwiZWxtX2IiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsInNsaWNlIiwiRXJyb3IiLCJudW1Ub0FycmF5V2l0aERlY2ltYWwiLCJhcnIxIiwiYXJyMiIsInRndCIsIm51bVRvQXJyYXlXaXRoRGVjaW1hbDIiLCJpbnQiLCJkZWNpbWFsIiwiaGVhZF96ZXJvIiwiaXNfZGVjaW1hbCIsImQiLCJwb3AiLCJjb21wYXJlIiwiYV9hcnIiLCJiX2FyciIsIm5ld19hIiwiemVybyIsIm5ld19iIiwibyIsImVxdWFsIiwibGFyZ2UiLCJzbWFsbCIsImFhIiwiYmIiLCJmaXhDYXJyeSIsIm5ld19hcnIiLCJjYXJyeSIsInZhbCIsImFkZCIsImFfIiwiYl8iLCJhX2ludCIsImJfaW50IiwiYV9kZWMiLCJiX2RlYyIsImRlY19sZW4iLCJhX2QiLCJiX2QiLCJsZWd0aCIsImRlY19hcnIiLCJkZWNfY2FycnkiLCJpbnRfYXJyIiwiaW5mbyIsIlNLIiwiY29uc3RhbnRzIiwib3B0aW9uIiwibmVnYXRpdmUiLCJwYXJ0cyIsImludF9zdHIiLCJkZWNpbWFsX3N0ciIsImludDAiLCJtYXRjaCIsIm5ld19pbnRfc3RyIiwic3RhcnRfemVybyIsImRlYzAiLCJlbmRfemVybyIsIm5ld19kZWNpbWFsX3N0ciIsImRlY2ltYWxfYXJyIiwiZSIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJtZXNzYWdlIiwiWkVSTyIsIk9ORSIsInByb3RvdHlwZSIsImFjIiwicmVkdWNlIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpX2EiLCJpX2IiLCJkX2EiLCJkX2IiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNTbWFsbCIsImlzUG9zaXRpdmUiLCJpc05lZ2F0aXZlIiwidiIsIm1ha2VQb3NpdGl2ZSIsInN1YnRyYWN0IiwiaW50X2EiLCJkZWNfYSIsImludF9iIiwiZGVjX2IiLCJsZW5faSIsImxlbl9kIiwiaW50X3JlcyIsImRlY19yZXMiLCJuZWdhdGUiLCJhX2lkIiwiYl9pZCIsImFfaV9sZW4iLCJiX2lfbGVuIiwiYV9kX2xlbiIsImJfZF9sZW4iLCJkX2dhcCIsImFicyIsImRlYnQiLCJyZXNfYXJyYXkiLCJhX2VsbSIsImJfZWxtIiwic3BsaWNlIiwibWludXMiLCJuZXZhdGl2ZSIsIm1ha2VOZWdhdGl2ZSIsImRwX2EiLCJkcF9iIiwicmVzX2FyciIsInBvc19hIiwicG9zX2IiLCJwb3MiLCJwYWRFbmQiLCJwYWRTdGFydCIsImNvdW50IiwicmVtYWluIiwicGx1cyIsInRhc3UiLCJoaWt1IiwibXVsdGlwbHkiLCJrYWtlcnUiLCJ3YXJ1IiwibmV4dCIsInByZXYiLCJnZXREaXZpc29ycyIsImdldENvbW1vbkRpdmlzb3JzIiwiZGl2cyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJtdWx0aXBsZSIsImdldExlYXN0Q29tbW9uTXVsdGlwbGUiLCJtdWx0aSIsIm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSIsImZ1bmMiLCJjIiwibWFrZUx1Y2FzU2VxdWVuY2UiLCJpc0ZpYm9uYWNjaU51bWJlciIsIm9uZSIsImZpYnMiLCJpc0x1Y2FzTnVtYmVyIiwibHVjcyIsIm1ha2VTZXF1ZW5jZSIsIm90aGVycyIsImdldFNlcXVlbmNlIiwiZGlnaXRzdW0iLCJzcXVhcmUiLCJleHBvbmVudGlhdGUiLCJjdWJlIiwiaXNEZWZpY2llbnROdW1iZXIiLCJpc1BlcmZlY3ROdW1iZXIiLCJmYWN0b3JpYWwiLCJtYWtlUG9seWdvbmFsTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1ha2VUcmlhbmdsZU51bWJlcnMiLCJtYWtlU3F1YXJlTnVtYmVycyIsImlzVHJpYW5nbGVOdW1iZXIiLCJmaW5kIiwiaXNTcXVhcmVOdW1iZXIiLCJtYWtlTWVyc2VubmVOdW1iZXJzIiwidHdvIiwiZXgiLCJtYWtlTWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFQO0FBQ0QsQ0FoQkQ7O0FBbUJlO0FBQ2IzRCxRQUFNLEVBQUVBLE1BREs7QUFFYkUsUUFBTSxFQUFFQSxNQUZLO0FBR2JDLE1BQUksRUFBRUEsSUFITztBQUliQyxJQUFFLEVBQUVBO0FBSlMsQ0FBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0IHN1IGZyb20gXCIuL3N1LmpzXCI7XG5cbmltcG9ydCBDT05TVEFOVFMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5jb25zdCBNSU4gPSBDT05TVEFOVFMuTUlOO1xuXG5jb25zdCBTID0ge307XG5jb25zdCBLID0ge307XG5cbmNvbnN0IG1ha2VTdSA9IHN1Lm1ha2VTdTtcbmNvbnN0IGNvcHlTdSA9IHN1LmNvcHlTdTtcbmNvbnN0IGlzU3UgPSBzdS5pc1N1O1xuY29uc3QgU3UgPSBzdS5TdTtcblxuY29uc3QgRklSU1RfUFJJTUVfTlVNQkVSID0gMjtcblxuXG5LLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IG1ha2VTdSgwKTtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gbWFrZVN1KDEpO1xuICB9XG4gIGlmKCFpc1N1KG1pbikpe1xuICAgIG1pbiA9IG1ha2VTdShtaW4pO1xuICB9XG4gIGlmKCFpc1N1KG1heCkpe1xuICAgIG1heCA9IG1ha2VTdShtYXgpO1xuICB9XG5cbiAgY29uc3Qgc3RyID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBsZXQgcmFuO1xuXG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIGlmKG1pbi5pc1plcm8oKSl7XG4gICAgICByYW4gPSBtYWtlU3UoMCk7XG4gICAgfWVsc2V7XG4gICAgICByYW4gPSBtaW47XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByYW4gPSBtYWtlU3UoXCIwLlwiICsgYXJyWzFdKS5tdWx0aXBsaWNhdGlvbihtYXgpO1xuICB9XG4gIHJldHVybiByYW47XG59O1xuXG5LLnJhbmRvbUVsZW1lbnQgPSBmdW5jdGlvbihhcnJheSl7XG4gIGNvbnN0IGkgPSBLLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpLmludGVnZXI7XG4gIHJldHVybiBhcnJheVtpXTtcbn07XG5cbksucmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpe1xuXG4gIGlmKCAhaXNTdShtaW4pIHx8ICFpc1N1KG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZihtaW4uaXNFcXVhbChtYXgpIHx8IG1pbi5pc0xhcmdlKG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBtaW4uZ2V0TnVtYmVyKCk7IGkgPD0gbWF4LmdldE51bWJlcigpOyBpKyspe1xuICAgIGNvbnN0IHMgPSBtYWtlU3UoaSk7XG4gICAgYXJyLnB1c2gocyk7XG4gIH1cblxuICBjb25zdCByZXMgPSBLLnJhbmRvbUVsZW1lbnQoYXJyKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuSy5tYWtlUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYobWF4ICYmIG1heC5pc1N1ICYmIG1heC5pc1N1KCkpe1xuICAgIG1heCA9IE51bWJlcihtYXguZ2V0U3RyaW5nKCkpO1xuICB9XG5cbiAgY29uc3QgTUFYID0gMTAwO1xuICBpZighbWF4KXtcbiAgICBtYXggPSBNQVg7XG4gIH1cbiAgaWYobWF4ID4gTUFYKXtcbiAgICBtYXggPSBNQVg7XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IEZJUlNUX1BSSU1FX05VTUJFUjsgaSA8IG1heDsgaSsrKXtcbiAgICBjb25zdCBzdSA9IG1ha2VTdShpKTtcbiAgICBpZihzdS5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG4vLyDjg6bjg7zjgq/jg6rjg4Pjg4njga7kupLpmaTms5VcbksuZXVjbGlkZWFuQWxnb3JpdGhtID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhUy5pc051bWJlcihhKSB8fCAhUy5pc051bWJlcihiKSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKCBhID09PSBiKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCB0ZW1wO1xuICBpZiggYSA8IGIpe1xuICAgIHRlbXAgPSBhO1xuICAgIGEgPSBiO1xuICAgIGIgPSB0ZW1wO1xuICB9XG5cbiAgbGV0IGF0ZW1wID0gYTtcbiAgbGV0IGJ0ZW1wID0gYjtcbiAgbGV0IGN0ZW1wO1xuICBsZXQgcmVzO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGNvcHJpbWUgPSBcImNvcHJpbWVcIjtcbiAgd2hpbGUoY3RlbXAgIT09MCl7XG4gICAgY3RlbXAgPSBhdGVtcCAlIGJ0ZW1wO1xuICAgIGlmKGN0ZW1wID09PSAwKXtcbiAgICAgIHJlcyA9IGJ0ZW1wO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGN0ZW1wID09PSAxKXtcbiAgICAgIHJlcyA9IGNvcHJpbWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY291bnRlciA+PSBNQVgpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGF0ZW1wID0gYnRlbXA7XG4gICAgYnRlbXAgPSBjdGVtcDtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuSy5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gIH1cblxuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtqXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgc3VtICs9IGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblxuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gZmlib25hY2NpXG5cblxuXG5cblxuXG5cbi8vIHRvZG8gMHN0YXJ0XG5jb25zdCBhcnJheVN1bW1hdGlvbiA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIShhIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYSA9IGNvcmUubnVtVG9BcnJheShhKTtcbiAgfVxuICBpZiggIShiIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYiA9IGNvcmUubnVtVG9BcnJheShiKTtcbiAgfVxuXG4gIGlmKCFjb3JlLmlzTnVtQXJyYXkoYSkgfHwgIWNvcmUuaXNOdW1BcnJheShiKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKGFbMF0pICYmIGNvcmUuaXNaZXJvKGJbMF0pKXtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyYXk6IFswXSxcbiAgICAgIHN0cmluZzogXCIwXCIsXG4gICAgICBudW1iZXI6IDAsXG4gICAgICBsZW5ndGg6IDFcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgQSA9IG1ha2VTdShhKTtcbiAgY29uc3QgQiA9IG1ha2VTdShiKTtcblxuICBjb25zb2xlLmxvZyhBLEIpO1xuXG4gIGNvbnN0IHJlcyA9IGNvcmUuZ2V0TGFyZ2VyKGEsIGIpO1xuICBjb25zdCBhcnJfYSA9IHJlc1swXTtcbiAgY29uc3QgYXJyX2IgPSByZXNbMV07XG4gIGNvbnN0IGxlbiA9IGFycl9hLmxlbmd0aDtcblxuICBjb25zdCBnYXAgPSBsZW4gLSBhcnJfYi5sZW5ndGg7XG5cbiAgbGV0IG92ZXIgPSAwLCBhcnJfYyA9IFtdO1xuICBmb3IobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBjb25zdCBlbG1fYiA9IGFycl9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGFycl9jLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGFycl9jLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoYXJyX2MpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRMYXJnZXIgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyX2EgPSBbXSwgYXJyX2IgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYVtpXTtcbiAgICBpZihlbG1fYSA9PT0gMCAmJiBhcnJfYS5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9hID49ICAwICYmIGVsbV9hIDwgMTApe1xuICAgICAgYXJyX2EucHVzaChlbG1fYSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9iID0gYltpXTtcbiAgICBpZihlbG1fYiA9PT0gMCAmJiBhcnJfYi5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9iID49ICAwICYmIGVsbV9iIDwgMTApe1xuICAgICAgYXJyX2IucHVzaChlbG1fYik7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcztcbiAgaWYoYXJyX2EubGVuZ3RoID4gYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYSwgYl07XG4gIH1lbHNlIGlmKGFycl9hLmxlbmd0aCA8IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2IsIGFdO1xuICB9ZWxzZXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtX2FhID0gYXJyX2FbaV07XG4gICAgICBjb25zdCBlbG1fYmIgPSBhcnJfYltpXTtcbiAgICAgIGlmKGVsbV9hYSA+IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYWEgPCBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFM6IFMsXG4gIEs6IEtcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUuaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKXtcbiAgaWYoIG4gPT09IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuXG4vLyDphY3liJfjgafjga7oqIjnrpdcbmNvcmUubnVtVG9BcnJheSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKG4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IE51bWJlcihzdHIuc2xpY2UoaSwgaSArIDEpKTtcbiAgICBpZighY29yZS5pc051bWJlcihlbG0pKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIik7XG4gICAgfVxuICAgIGFyci5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFycjEgPSBbXTtcbiAgY29uc3QgYXJyMiA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGxldCB0Z3QgPSBhcnIxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IE51bWJlcihzdHJbaV0pO1xuICAgIGlmKCFjb3JlLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgaWYoZWxtID09PSBcIi5cIiAmJiB0Z3QgPT09IGFycjEpe1xuICAgICAgICB0Z3QgPSBhcnIyO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHRndC5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIFsuLi5hcnIxLCBcIi5cIiwgYXJyMl07XG59O1xuXG5jb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbDIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKG4pO1xuICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgaW50ID0gW107XG4gIGNvbnN0IGRlY2ltYWwgPSBbXTtcblxuICBsZXQgaGVhZF96ZXJvID0gdHJ1ZTtcbiAgbGV0IGlzX2RlY2ltYWwgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG5cbiAgICBjb25zdCBudW0gPSBOdW1iZXIoYXJyW2ldKTtcbiAgICBjb25zdCBpc051bWJlciA9IGNvcmUuaXNOdW1iZXIobnVtKTtcbiAgICBpZighaXNOdW1iZXIgJiYgYXJyW2ldID09PSBcIi5cIil7XG4gICAgICBpc19kZWNpbWFsID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1lbHNlIGlmKCFpc051bWJlcil7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIpO1xuICAgIH1lbHNlIGlmKGhlYWRfemVybyAmJiBudW0gPT09IDAgJiYgIWlzX2RlY2ltYWwpe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGhlYWRfemVybyA9IGZhbHNlO1xuXG4gICAgaWYoaXNfZGVjaW1hbCl7XG4gICAgICBkZWNpbWFsLnB1c2gobnVtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGludC5wdXNoKG51bSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBpID0gZGVjaW1hbC5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgY29uc3QgZCA9IGRlY2ltYWxbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNpbWFsLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbnQ6IGludCxcbiAgICBkZWNpbWFsOiBkZWNpbWFsXG4gIH07XG59O1xuXG5jb3JlLmNvbXBhcmUgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoIWEgfHwgIWIpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBhX2FyciwgYl9hcnI7XG4gIGlmKGEgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgYV9hcnIgPSBhO1xuICB9ZWxzZXtcbiAgICBhX2FyciA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMihhKTtcbiAgfVxuICBpZihiIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgIGJfYXJyID0gYjtcbiAgfWVsc2V7XG4gICAgYl9hcnIgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbDIoYik7XG4gIH1cblxuICBpZihhX2FyclswXSA9PT0gMCl7XG4gICAgY29uc3QgbmV3X2EgPSBbXTtcbiAgICBsZXQgemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGVsbSA9IGFfYXJyW2ldO1xuICAgICAgaWYoZWxtID09PSAwICYmIHplcm8pe1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIG5ld19hLnB1c2goZWxtKTtcbiAgICAgIHplcm8gPSBmYWxzZTtcbiAgICB9XG4gICAgYV9hcnIgPSBuZXdfYTtcbiAgfVxuXG4gIGlmKGJfYXJyWzBdID09PSAwKXtcbiAgICBjb25zdCBuZXdfYiA9IFtdO1xuICAgIGxldCB6ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYl9hcnIubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtID0gYl9hcnJbaV07XG4gICAgICBpZihlbG0gPT09IDAgJiYgemVybyl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbmV3X2IucHVzaChlbG0pO1xuICAgICAgemVybyA9IGZhbHNlO1xuICAgIH1cbiAgICBiX2FyciA9IG5ld19iO1xuICB9XG5cbiAgY29uc3QgbyA9IHtcbiAgICBlcXVhbDogZmFsc2UsXG4gICAgbGFyZ2U6IG51bGwsXG4gICAgc21hbGw6IG51bGxcbiAgfTtcblxuICBpZihhX2Fyci5sZW5ndGggPiBhX2Fyci5sZW5ndGgpe1xuICAgIG8ubGFyZ2UgPSBhO1xuICAgIG8uc21hbGwgPSBiO1xuICAgIHJldHVybiBvO1xuICB9XG4gIGlmKGFfYXJyLmxlbmd0aCA8IGFfYXJyLmxlbmd0aCl7XG4gICAgby5sYXJnZSA9IGI7XG4gICAgby5zbWFsbCA9IGE7XG4gICAgcmV0dXJuIG87XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYV9hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGFhID0gYV9hcnJbaV07XG4gICAgY29uc3QgYmIgPSBiX2FycltpXTtcbiAgICBpZihhYSA+IGJiKXtcbiAgICAgIG8ubGFyZ2UgPSBhO1xuICAgICAgby5zbWFsbCA9IGI7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoYWEgPCBiYil7XG4gICAgICBvLmxhcmdlID0gYjtcbiAgICAgIG8uc21hbGwgPSBhO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICB9XG5cbiAgby5lcXVhbCA9IHRydWU7XG4gIHJldHVybiBvO1xuXG59O1xuXG5jb3JlLmlzTnVtQXJyYXkgPSBmdW5jdGlvbihhcnIpe1xuICBpZiggYXJyIGluc3RhbmNlb2YgQXJyYXkgKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKCAhY29yZS5pc051bWJlcihhcnJbaV0pICl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvcmUuZml4Q2FycnkgPSBmdW5jdGlvbihhcnIpe1xuXG4gIGNvbnN0IG5ld19hcnIgPSBbXTtcbiAgbGV0IGNhcnJ5ID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IHZhbCA9IGFycltpXSArIGNhcnJ5O1xuICAgIGlmKHZhbCA+IDkpe1xuICAgICAgdmFsID0gdmFsIC0gMTA7XG4gICAgICBjYXJyeSA9IDE7XG4gICAgfWVsc2UgaWYoIHZhbCA+PSAwICYmIHZhbCA8PSA5KXtcbiAgICAgIGNhcnJ5ID0gMDtcbiAgICB9XG5cbiAgICBuZXdfYXJyLnB1c2godmFsKTtcbiAgfVxuICBpZihjYXJyeSA+IDApe1xuICAgIG5ld19hcnIucHVzaChjYXJyeSk7XG4gIH1cblxuICByZXR1cm4gbmV3X2FycjtcblxufTtcblxuY29yZS5hZGQgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoIWEgJiYgIWIpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwyKGEpO1xuICBjb25zdCBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMihiKTtcbiAgY29uc3QgYV9pbnQgPSBhXy5pbnQ7XG4gIGNvbnN0IGJfaW50ID0gYl8uaW50O1xuICBjb25zdCBhX2RlYyA9IGFfLmRlY2ltYWw7XG4gIGNvbnN0IGJfZGVjID0gYl8uZGVjaW1hbDtcblxuICBsZXQgZGVjX2xlbiA9IGFfZGVjLmxlbmd0aDtcbiAgaWYoZGVjX2xlbiA8IGJfZGVjLmxlbmd0aCl7XG4gICAgZGVjX2xlbiA9IGJfZGVjLmxlbmd0aDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBkZWNfbGVuOyBpKyspe1xuICAgIGNvbnN0IGFfZCA9IGFfZGVjW2ldO1xuICAgIGNvbnN0IGJfZCA9IGJfZGVjW2ldO1xuICAgIGlmKCFjb3JlLmlzTnVtYmVyKGFfZCkpe1xuICAgICAgYV9kZWMucHVzaCgwKTtcbiAgICB9XG4gICAgaWYoIWNvcmUuaXNOdW1iZXIoYl9kKSl7XG4gICAgICBiX2RlYy5wdXNoKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihhLCBiKXtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBsZXQgYXJyX2EgPSBhO1xuICAgIGxldCBhcnJfYiA9IGI7XG4gICAgaWYoYS5sZW5ndGggPCBiLmxlbmd0aCl7XG4gICAgICBhcnJfYSA9IGI7XG4gICAgICBhcnJfYiA9IGE7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldIDogMDtcbiAgICAgIGxldCByZXMgPSBhYSArIGJiO1xuICAgICAgYXJyLnB1c2gocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcmUuZml4Q2FycnkoYXJyKTtcbiAgfTtcblxuICBjb25zdCB7IGRlY19hcnIsIGRlY19jYXJyeSB9ID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbGVuZ3RoID0gYV9kZWMubGVuZ3RoIDwgYl9kZWMubGVuZ3RoID8gYl9kZWMubGVndGggOiBhX2RlYy5sZW5ndGg7XG4gICAgY29uc3QgcmVzID0gY2FsYyhhX2RlYy5yZXZlcnNlKCksIGJfZGVjLnJldmVyc2UoKSk7XG5cbiAgICBsZXQgY2FycnkgPSAwO1xuICAgIGlmKHJlcy5sZW5ndGggPiBsZW5ndGgpe1xuICAgICAgY2FycnkgPSByZXMucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkZWNfYXJyOiByZXMsXG4gICAgICBkZWNfY2Fycnk6IGNhcnJ5XG4gICAgfTtcbiAgfSkoKTtcblxuICBsZXQgaW50X2FyciA9IChmdW5jdGlvbihkZWNfY2Fycnkpe1xuICAgIGxldCByZXMgPSBjYWxjKGFfaW50LnJldmVyc2UoKSwgYl9pbnQucmV2ZXJzZSgpKTtcblxuICAgIGlmKGRlY19jYXJyeSA+IDApe1xuICAgICAgY29uc29sZS5pbmZvKHJlcyk7XG4gICAgICByZXMgPSBjYWxjKHJlcywgW2RlY19jYXJyeV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9KShkZWNfY2FycnkpO1xuXG4gIHJldHVybiB7XG4gICAgaW50OiBpbnRfYXJyLnJldmVyc2UoKSxcbiAgICBkZWNpbWFsOiBkZWNfYXJyLnJldmVyc2UoKVxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IHMgZnJvbSBcIi4vc3UuanNcIjtcbmltcG9ydCBTSyBmcm9tIFwiLi9TSy5qc1wiO1xuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHM6IHMsXG4gIFM6IFNLLlMsXG4gIEs6IFNLLkssXG4gIGNvcmU6IGNvcmVcbn07IiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBNQVggPSBjb25zdGFudHMuTUFYO1xuY29uc3QgTUlOID0gY29uc3RhbnRzLk1JTjtcbmNvbnN0IERCWiA9IGNvbnN0YW50cy5EQlo7XG5jb25zdCBOQU4gPSBjb25zdGFudHMuTkFOO1xuY29uc3QgTk9UU1UgPSBjb25zdGFudHMuTk9UU1U7XG5cblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZihpc05hTihuKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FycjtcbiAgbGV0IGRlY2ltYWxfYXJyO1xuXG5cbiAgdHJ5e1xuICAgIGludF9hcnIgPSBjb3JlLm51bVRvQXJyYXkoaW50X3N0cik7XG4gICAgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG4gIH1jYXRjaChlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgbGV0IHJlcztcbiAgdHJ5e1xuICAgIHJlcyA9IG5ldyBTdShudW0sIG9wdGlvbik7XG4gIH1jYXRjaChlKXtcbiAgICByZXMgPSBlLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmUgPyBgLSR7c3RyfWAgOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgY29uc3QgX2EgPSBtYWtlU3UoYS5nZXRTdHJpbmcoKSk7XG4gIGNvbnN0IF9iID0gbWFrZVN1KGIuZ2V0U3RyaW5nKCkpO1xuXG4gIGlmKGFic29sdXRlKXtcbiAgICBfYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIF9iLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihfYS5pc1plcm8oKSAmJiBfYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgIV9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKF9hLmludGVnZXIubGVuZ3RoID4gX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EuaW50ZWdlci5sZW5ndGggPCBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IF9hLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IF9hLmludGVnZXJbaV07XG4gICAgbGV0IGVsbV9iID0gX2IuaW50ZWdlcltpXTtcbiAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gX2EuZGVjaW1hbC5sZW5ndGggPj0gX2IuZGVjaW1hbC5sZW5ndGggPyBfYS5kZWNpbWFsLmxlbmd0aCA6IF9iLmRlY2ltYWwubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgZWxtX2EgPSBfYS5kZWNpbWFsW2ldID8gX2EuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBfYi5kZWNpbWFsW2ldID8gX2IuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZihuZWdhdGl2ZSl7XG4gICAgZmllbGQgPSBbZmllbGRbMV0sIGZpZWxkWzBdXTtcbiAgfVxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkWzBdO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgaV9hID0gYS5pbnRlZ2VyO1xuICBjb25zdCBpX2IgPSBiLmludGVnZXI7XG4gIGNvbnN0IGRfYSA9IGEuZGVjaW1hbDtcbiAgY29uc3QgZF9iID0gYi5kZWNpbWFsO1xuXG4gIGNvbnN0IGxhcmdlID0gZ2V0TGFyZ2UoYSwgYik7XG5cbiAgaWYoIWxhcmdlKXtcbiAgICBpZihpX2EubGVuZ3RoID09PSBpX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpX2FbaV0gIT09IGlfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2UgaWYoZF9hLmxlbmd0aCA9PT0gZF9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZF9hW2ldICE9PSBkX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGEubmVnYXRpdmUgPT09IGIubmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuU3UucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaW50ZWdlci5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnRlZ2VyWzBdID09PSAwICYmICF0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09uZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjFcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTGFyZ2UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYS5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYi5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNQb3NpdGl2ZSgpICYmIHRoaXMuaXNJbnRlZ2VyKCkgJiYgdGhpcy5pc0xhcmdlKENPTlNUQU5UUy5aRVJPKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGRwX2EgPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBkcF9iID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCByZXNfYXJyID0gW107XG4gIGZvcihsZXQgaV9hID0gMDsgaV9hIDwgYV9pZC5sZW5ndGg7IGlfYSsrKXtcbiAgICBmb3IobGV0IGlfYiA9IDA7IGlfYiA8IGJfaWQubGVuZ3RoOyBpX2IrKyl7XG4gICAgICBjb25zdCBlbG1fYSA9IGFfaWRbaV9hXTtcbiAgICAgIGNvbnN0IGVsbV9iID0gYl9pZFtpX2JdO1xuICAgICAgY29uc3QgcG9zX2EgPSBkcF9hIC0gaV9hIC0xO1xuICAgICAgY29uc3QgcG9zX2IgPSBkcF9iIC0gaV9iIC0xO1xuICAgICAgY29uc3QgcG9zID0gcG9zX2EgKyBwb3NfYjtcbiAgICAgIGxldCByZXMgPSBlbG1fYSAqIGVsbV9iO1xuICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHBvcyk7XG4gICAgICBsZXQgc3RyO1xuICAgICAgaWYocG9zID49IDApe1xuICAgICAgICBsZW4rKztcbiAgICAgICAgaWYocmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiArIDEsIFwiMFwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobGVuID09PSAxICYmIHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpWzBdICsgXCIuXCIgKyBTdHJpbmcocmVzKVsxXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gXCIwLlwiICsgU3RyaW5nKHJlcykucGFkU3RhcnQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc19hcnIucHVzaChtYWtlU3Uoc3RyKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcyA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc19hcnIubGVuZ3RoOyBpKyspe1xuICAgIHJlcyA9IHJlcy5hZGQocmVzX2FycltpXSk7XG4gIH1cblxuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY291bnQgPSBtYWtlU3UoXCIxXCIpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpIHx8IGNvdW50LmlzRXF1YWwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oY291bnQpKTtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoXCIxXCIpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGEsIGIpe1xuXG4gIGlmKCFpc1N1KGEpIHx8ICFpc1N1KGIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFthLCBiXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5cbmNvbnN0IG1ha2VMdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZShtYWtlU3UoMiksIG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG5cbiAgY29uc3QgZmlicyA9IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSh6ZXJvLCBvbmUpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IG1ha2VMdWNhc1NlcXVlbmNlKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsdWNzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGx1Y3NbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmNvbnN0IG1ha2VTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0LCBvdGhlcnMpe1xuICBjb25zdCBhcnJheSA9IFtmaXJzdF07XG4gIGlmKCFvdGhlcnMpe1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgb3RoZXJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gb3RoZXJzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblN1LnByb3RvdHlwZS5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBhID0gbWFrZVN1KHRoaXMuaW50ZWdlcltpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBtYWtlUG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFpc1N1KG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IGluY3JlbWVudCA9IG4uc3VidHJhY3QobWFrZVN1KDIpKTtcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZVRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMyksIG1heCk7XG59O1xuXG5jb25zdCBtYWtlU3F1YXJlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCksIG1heCk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVRyaWFuZ2xlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTcXVhcmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VTcXVhcmVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCBtYXJyID0gbWFrZU1lcnNlbm5lTnVtYmVycyhtYXgpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIFN1OiBTdVxufTsiXSwic291cmNlUm9vdCI6IiJ9