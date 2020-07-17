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
  var negative = false;

  if (str[0].match(/-/)) {
    str = str.replace(/^-/, "");
    negative = true;
  }

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
    decimal: decimal,
    negative: negative
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3UvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNPTlNUQU5UUyIsIk1JTiIsIlMiLCJLIiwibWFrZVN1Iiwic3UiLCJjb3B5U3UiLCJpc1N1IiwiU3UiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJ1bmRlZmluZWQiLCJzdHIiLCJTdHJpbmciLCJNYXRoIiwicmFuIiwiaXNaZXJvIiwiYXJyIiwic3BsaXQiLCJtdWx0aXBsaWNhdGlvbiIsInJhbmRvbUVsZW1lbnQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJpbnRlZ2VyIiwicmFuZG9tSW50IiwiaXNFcXVhbCIsImlzTGFyZ2UiLCJnZXROdW1iZXIiLCJzIiwicHVzaCIsInJlcyIsIm1ha2VQcmltZU51bWJlcnMiLCJOdW1iZXIiLCJnZXRTdHJpbmciLCJpc1ByaW1lTnVtYmVyIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwiYSIsImIiLCJpc051bWJlciIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImoiLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJuIiwiZGl2aXNvcnMiLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwibWF4Q29tbW9uRGl2aXNvciIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsImFycmF5U3VtbWF0aW9uIiwiQXJyYXkiLCJjb3JlIiwibnVtVG9BcnJheSIsImlzTnVtQXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJBIiwiQiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXJnZXIiLCJhcnJfYSIsImFycl9iIiwiZ2FwIiwib3ZlciIsImFycl9jIiwiX3JlcyIsImVsbV9hIiwiZWxtX2IiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsInNsaWNlIiwiRXJyb3IiLCJudW1Ub0FycmF5V2l0aERlY2ltYWwiLCJhcnIxIiwiYXJyMiIsInRndCIsIm51bVRvQXJyYXlXaXRoRGVjaW1hbDIiLCJuZWdhdGl2ZSIsIm1hdGNoIiwicmVwbGFjZSIsImludCIsImRlY2ltYWwiLCJoZWFkX3plcm8iLCJpc19kZWNpbWFsIiwiZCIsInBvcCIsImNvbXBhcmUiLCJhX2FyciIsImJfYXJyIiwibmV3X2EiLCJ6ZXJvIiwibmV3X2IiLCJvIiwiZXF1YWwiLCJsYXJnZSIsInNtYWxsIiwiYWEiLCJiYiIsImZpeENhcnJ5IiwibmV3X2FyciIsImNhcnJ5IiwidmFsIiwiYWRkIiwiYV8iLCJiXyIsImFfaW50IiwiYl9pbnQiLCJhX2RlYyIsImJfZGVjIiwiZGVjX2xlbiIsImFfZCIsImJfZCIsImxlZ3RoIiwiZGVjX2FyciIsImRlY19jYXJyeSIsImludF9hcnIiLCJpbmZvIiwiU0siLCJjb25zdGFudHMiLCJvcHRpb24iLCJwYXJ0cyIsImludF9zdHIiLCJkZWNpbWFsX3N0ciIsImludDAiLCJuZXdfaW50X3N0ciIsInN0YXJ0X3plcm8iLCJkZWMwIiwiZW5kX3plcm8iLCJuZXdfZGVjaW1hbF9zdHIiLCJkZWNpbWFsX2FyciIsImUiLCJkZW5vbWluYXRvciIsImZyYWN0aW9uIiwibnVtZXJhdG9yIiwiY29uY2F0IiwibWVzc2FnZSIsIlpFUk8iLCJPTkUiLCJwcm90b3R5cGUiLCJhYyIsInJlZHVjZSIsImdldEludGVnZXIiLCJnZXREZWNpbWFsIiwiY2xvbmUiLCJnZXRMYXJnZSIsImFic29sdXRlIiwiZmllbGQiLCJfYSIsIl9iIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwiY29udGFpbkRlY2ltYWwiLCJpc09uZSIsImlzU21hbGwiLCJpc1Bvc2l0aXZlIiwiaXNOZWdhdGl2ZSIsInYiLCJtYWtlUG9zaXRpdmUiLCJzdWJ0cmFjdCIsImludF9hIiwiZGVjX2EiLCJpbnRfYiIsImRlY19iIiwibGVuX2kiLCJsZW5fZCIsImludF9yZXMiLCJkZWNfcmVzIiwibmVnYXRlIiwiYV9pZCIsImJfaWQiLCJhX2lfbGVuIiwiYl9pX2xlbiIsImFfZF9sZW4iLCJiX2RfbGVuIiwiZF9nYXAiLCJhYnMiLCJkZWJ0IiwicmVzX2FycmF5IiwiYV9lbG0iLCJiX2VsbSIsInNwbGljZSIsIm1pbnVzIiwibmV2YXRpdmUiLCJtYWtlTmVnYXRpdmUiLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImRpdnMiLCJnZXRNYXhDb21tb25EaXZpc29yIiwibXVsdGlwbGUiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJtYWtlRmlib25hY2NpU2VxdWVuY2UiLCJmdW5jIiwiYyIsIm1ha2VMdWNhc1NlcXVlbmNlIiwiaXNGaWJvbmFjY2lOdW1iZXIiLCJvbmUiLCJmaWJzIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJtYWtlU2VxdWVuY2UiLCJvdGhlcnMiLCJnZXRTZXF1ZW5jZSIsImRpZ2l0c3VtIiwic3F1YXJlIiwiZXhwb25lbnRpYXRlIiwiY3ViZSIsImlzRGVmaWNpZW50TnVtYmVyIiwiaXNQZXJmZWN0TnVtYmVyIiwiZmFjdG9yaWFsIiwibWFrZVBvbHlnb25hbE51bWJlcnMiLCJjdXJyZW50IiwicmFuZ2UiLCJpbmNyZW1lbnQiLCJtYWtlVHJpYW5nbGVOdW1iZXJzIiwibWFrZVNxdWFyZU51bWJlcnMiLCJpc1RyaWFuZ2xlTnVtYmVyIiwiZmluZCIsImlzU3F1YXJlTnVtYmVyIiwibWFrZU1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzIiwibWFyciIsImlzTWVyc2VubmVOdW1iZXIiLCJtcyIsIm0iLCJpc01lcnNlbm5lUHJpbWVOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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SSxJQUFJdkMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHZ1IsRUFBRSxDQUFDL1EsTUFBdEIsRUFBOEJELENBQUMsRUFBL0IsRUFBa0M7QUFDaEMsUUFBSWlSLENBQUMsR0FBR0QsRUFBRSxDQUFDaFIsQ0FBRCxDQUFWOztBQUNBLFFBQUdpUixDQUFDLENBQUM3USxPQUFGLENBQVVtQyxDQUFWLENBQUgsRUFBZ0I7QUFDZCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sS0FBUDtBQUNELENBaEJEOztBQW1CZTtBQUNiM0QsUUFBTSxFQUFFQSxNQURLO0FBRWJFLFFBQU0sRUFBRUEsTUFGSztBQUdiQyxNQUFJLEVBQUVBLElBSE87QUFJYkMsSUFBRSxFQUFFQTtBQUpTLENBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcbmltcG9ydCBzdSBmcm9tIFwiLi9zdS5qc1wiO1xuXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuY29uc3QgTUlOID0gQ09OU1RBTlRTLk1JTjtcblxuY29uc3QgUyA9IHt9O1xuY29uc3QgSyA9IHt9O1xuXG5jb25zdCBtYWtlU3UgPSBzdS5tYWtlU3U7XG5jb25zdCBjb3B5U3UgPSBzdS5jb3B5U3U7XG5jb25zdCBpc1N1ID0gc3UuaXNTdTtcbmNvbnN0IFN1ID0gc3UuU3U7XG5cbmNvbnN0IEZJUlNUX1BSSU1FX05VTUJFUiA9IDI7XG5cblxuSy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSBtYWtlU3UoMCk7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IG1ha2VTdSgxKTtcbiAgfVxuICBpZighaXNTdShtaW4pKXtcbiAgICBtaW4gPSBtYWtlU3UobWluKTtcbiAgfVxuICBpZighaXNTdShtYXgpKXtcbiAgICBtYXggPSBtYWtlU3UobWF4KTtcbiAgfVxuXG4gIGNvbnN0IHN0ciA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IHJhbjtcblxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBpZihtaW4uaXNaZXJvKCkpe1xuICAgICAgcmFuID0gbWFrZVN1KDApO1xuICAgIH1lbHNle1xuICAgICAgcmFuID0gbWluO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgcmFuID0gbWFrZVN1KFwiMC5cIiArIGFyclsxXSkubXVsdGlwbGljYXRpb24obWF4KTtcbiAgfVxuICByZXR1cm4gcmFuO1xufTtcblxuSy5yYW5kb21FbGVtZW50ID0gZnVuY3Rpb24oYXJyYXkpe1xuICBjb25zdCBpID0gSy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKS5pbnRlZ2VyO1xuICByZXR1cm4gYXJyYXlbaV07XG59O1xuXG5LLnJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcblxuICBpZiggIWlzU3UobWluKSB8fCAhaXNTdShtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYobWluLmlzRXF1YWwobWF4KSB8fCBtaW4uaXNMYXJnZShtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gbWluLmdldE51bWJlcigpOyBpIDw9IG1heC5nZXROdW1iZXIoKTsgaSsrKXtcbiAgICBjb25zdCBzID0gbWFrZVN1KGkpO1xuICAgIGFyci5wdXNoKHMpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gSy5yYW5kb21FbGVtZW50KGFycik7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbksubWFrZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKG1heCAmJiBtYXguaXNTdSAmJiBtYXguaXNTdSgpKXtcbiAgICBtYXggPSBOdW1iZXIobWF4LmdldFN0cmluZygpKTtcbiAgfVxuXG4gIGNvbnN0IE1BWCA9IDEwMDtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gTUFYO1xuICB9XG4gIGlmKG1heCA+IE1BWCl7XG4gICAgbWF4ID0gTUFYO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBGSVJTVF9QUklNRV9OVU1CRVI7IGkgPCBtYXg7IGkrKyl7XG4gICAgY29uc3Qgc3UgPSBtYWtlU3UoaSk7XG4gICAgaWYoc3UuaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblxuLy8g44Om44O844Kv44Oq44OD44OJ44Gu5LqS6Zmk5rOVXG5LLmV1Y2xpZGVhbkFsZ29yaXRobSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIVMuaXNOdW1iZXIoYSkgfHwgIVMuaXNOdW1iZXIoYikpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZiggYSA9PT0gYil7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgdGVtcDtcbiAgaWYoIGEgPCBiKXtcbiAgICB0ZW1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdGVtcDtcbiAgfVxuXG4gIGxldCBhdGVtcCA9IGE7XG4gIGxldCBidGVtcCA9IGI7XG4gIGxldCBjdGVtcDtcbiAgbGV0IHJlcztcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBjb3ByaW1lID0gXCJjb3ByaW1lXCI7XG4gIHdoaWxlKGN0ZW1wICE9PTApe1xuICAgIGN0ZW1wID0gYXRlbXAgJSBidGVtcDtcbiAgICBpZihjdGVtcCA9PT0gMCl7XG4gICAgICByZXMgPSBidGVtcDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjdGVtcCA9PT0gMSl7XG4gICAgICByZXMgPSBjb3ByaW1lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGNvdW50ZXIgPj0gTUFYKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBhdGVtcCA9IGJ0ZW1wO1xuICAgIGJ0ZW1wID0gY3RlbXA7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5cblxuSy5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBlbXB0eS5cIjtcbiAgfVxuICBsZXQgaXAgPSAxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2ldO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpcCA9IGlwICogZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IGEgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBpcDtcbn07XG5cbksuZGl2aXNpb24gPSBmdW5jdGlvbihkaXZpZGVuZCwgZGl2aXNvcil7XG4gIGlmKGRpdmlkZW5kID09PSB1bmRlZmluZWQgfHwgZGl2aXNvciA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gZGl2aWRlbmQgLyBkaXZpc29yO1xuICByZXR1cm4ge1xuICAgIGludGVnZXI6IHtcbiAgICAgIHJlbWFpbmRlcjogZGl2aWRlbmQgJSBkaXZpc29yLFxuICAgICAgcmVzdWx0OiBNYXRoLmZsb29yKHJlc3VsdClcbiAgICB9LFxuICAgIHJlYWxOdW1iZXI6IHJlc3VsdFxuICB9O1xufTtcblxuSy5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBsZXQgYSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgKz0gYXJyW2ldO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuSy5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHN1bSA9IEsuZGl2aXNvcnNTdW1tYXRpb24obik7XG4gIGlmKHN1bSA+IG4gKiAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBuICogbjtcbiAgY29uc3QgcyA9IFN0cmluZyhudW0pO1xuICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcbiAgbGV0IGZpcnN0X2xlbiA9IDA7XG4gIGxldCBhZnRlcl9sZW4gPSAwO1xuICBsZXQgZmlyc3QsIGFmdGVyO1xuICBpZihTLmlzT2RkTnVtYmVyKGxlbikpe1xuICAgIGZpcnN0X2xlbiA9IChsZW4gLSAxKSAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuICsgMTtcbiAgfWVsc2V7XG4gICAgZmlyc3RfbGVuID0gbGVuIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW47XG4gIH1cbiAgZmlyc3QgPSBOdW1iZXIocy5zdWJzdHIoMCwgZmlyc3RfbGVuKSk7XG4gIGFmdGVyID0gTnVtYmVyKHMuc3Vic3RyKGZpcnN0X2xlbiwgYWZ0ZXJfbGVuKSk7XG5cbiAgaWYoKCBmaXJzdCArIGFmdGVyICkgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVCID0gZnVuY3Rpb24obil7XG5cbiAgY29uc3QgYXJyID0gU3RyaW5nKG4pLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IG1pbiA9IE51bWJlcihhcnIuc29ydCgpLmpvaW4oXCJcIikpO1xuICBjb25zdCBtYXggPSBOdW1iZXIoYXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcblxuICBpZigobWF4IC0gbWluKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKEsuaXNLYXByZWthck51bWJlclR5cGVBKG4pIHx8IEsuaXNLYXByZWthck51bWJlclR5cGVCKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgZiA9IE1hdGguZmxvb3Iobik7XG4gIGlmKCBmID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyDoqr/lkozlubPlnYdcbksuaGFybW9uaWNNZWFuID0gZnVuY3Rpb24oYXJyKXtcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgc3VtICs9IDEgLyBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGxlbiAvIHN1bTtcbn07XG5cbi8vIOiqv+WSjOaVsOOBi+OBqeOBhuOBi1xuSy5pc0hhcm1vbmljRGl2aXNvck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBjb25zdCByZXMgPSBLLmhhcm1vbmljTWVhbihhcnIpO1xuICBpZihTLmlzSW50ZWdlcihyZXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID4gMCAmJiBTLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuSy5jb2xsYXR6aFByb2JsZW0gPSBmdW5jdGlvbihudW0pe1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihuKXtcbiAgICBsZXQgcmVzID0gbjtcbiAgICBpZihTLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gKiAzICsgMTtcbiAgICB9ZWxzZSBpZihTLmlzRXZlbk51bWJlcihuKSl7XG4gICAgICByZXMgPSBuIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB3aGlsZShudW0gPiAxKXtcbiAgICBudW0gPSBjYWxjKG51bSk7XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44OV44Kn44Or44Oe44O844OG44K544OIXG4vLyBKU+OBruaJseOBiOOCi+evhOWbsuOCkui2heOBiOOBpuOBhOOBpuOBhuOBvuOBj+WLleOBi+OBmlxuSy5mZXJtYXRUZXN0ID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIVMuaXNJbnRlZ2VyKG4pIHx8IFMuaXNaZXJvKG4pIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnMuIFwiICsgbiArIFwiIGlzIGluY29ycmVjdCBwYXJhbWV0ZXIuXCI7XG4gIH1cblxuICBpZighbWF4KXtcbiAgICBtYXggPSAxMDA7XG4gIH1cblxuICBmb3IobGV0IGkgPSAxOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBhID0gSy5yYW5kb21JbnQoMiwgbiAtIDEpO1xuICAgIGlmKEsubWF4Q29tbW9uRGl2aXNvcihhLCBuKSAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gTWF0aC5wb3coYSwgbiAtIDEpICUgbjtcbiAgICBpZihyZXMgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIk1heWJlIFByaW1lIE51bWJlclwiO1xufTtcblxuLy8g57WE44G/5ZCI44KP44Gb5pWw44Gu6KiI566XXG4vLyBLLmNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGFycil7XG4vLyB9O1xuXG4vLyAzID0+IFswLCAzXSwgWzEsIDJdLCBbMiwgMV0sIFszLCAwXVxuSy5nZXRJbmNsdWRlc051bWJlcnMgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHRlbXAgPSBudW07XG4gIGxldCBib29sID0gdHJ1ZTtcbiAgd2hpbGUoYm9vbCl7XG4gICAgY29uc3QgYSA9IHRlbXA7XG4gICAgY29uc3QgYiA9IG51bSAtdGVtcDtcbiAgICBjb25zdCBhciA9IFthLGJdO1xuICAgIGFyci5wdXNoKGFyKTtcbiAgICB0ZW1wID0gdGVtcCAtMTtcbiAgICBpZih0ZW1wIDwgMCl7XG4gICAgICBib29sID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIGZpYm9uYWNjaVxuXG5cblxuXG5cblxuXG4vLyB0b2RvIDBzdGFydFxuY29uc3QgYXJyYXlTdW1tYXRpb24gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICEoYSBpbnN0YW5jZW9mIEFycmF5KSApe1xuICAgIGEgPSBjb3JlLm51bVRvQXJyYXkoYSk7XG4gIH1cbiAgaWYoICEoYiBpbnN0YW5jZW9mIEFycmF5KSApe1xuICAgIGIgPSBjb3JlLm51bVRvQXJyYXkoYik7XG4gIH1cblxuICBpZighY29yZS5pc051bUFycmF5KGEpIHx8ICFjb3JlLmlzTnVtQXJyYXkoYikpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZihjb3JlLmlzWmVybyhhWzBdKSAmJiBjb3JlLmlzWmVybyhiWzBdKSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFycmF5OiBbMF0sXG4gICAgICBzdHJpbmc6IFwiMFwiLFxuICAgICAgbnVtYmVyOiAwLFxuICAgICAgbGVuZ3RoOiAxXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IEEgPSBtYWtlU3UoYSk7XG4gIGNvbnN0IEIgPSBtYWtlU3UoYik7XG5cbiAgY29uc29sZS5sb2coQSxCKTtcblxuICBjb25zdCByZXMgPSBjb3JlLmdldExhcmdlcihhLCBiKTtcbiAgY29uc3QgYXJyX2EgPSByZXNbMF07XG4gIGNvbnN0IGFycl9iID0gcmVzWzFdO1xuICBjb25zdCBsZW4gPSBhcnJfYS5sZW5ndGg7XG5cbiAgY29uc3QgZ2FwID0gbGVuIC0gYXJyX2IubGVuZ3RoO1xuXG4gIGxldCBvdmVyID0gMCwgYXJyX2MgPSBbXTtcbiAgZm9yKGxldCBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgY29uc3QgZWxtX2IgPSBhcnJfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBhcnJfYy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBhcnJfYy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGFycl9jKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0TGFyZ2VyID0gZnVuY3Rpb24oYSwgYil7XG4gIGNvbnN0IGFycl9hID0gW10sIGFycl9iID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFbaV07XG4gICAgaWYoZWxtX2EgPT09IDAgJiYgYXJyX2EubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZihlbG1fYSA+PSAgMCAmJiBlbG1fYSA8IDEwKXtcbiAgICAgIGFycl9hLnB1c2goZWxtX2EpO1xuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG1fYiA9IGJbaV07XG4gICAgaWYoZWxtX2IgPT09IDAgJiYgYXJyX2IubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZihlbG1fYiA+PSAgMCAmJiBlbG1fYiA8IDEwKXtcbiAgICAgIGFycl9iLnB1c2goZWxtX2IpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXM7XG4gIGlmKGFycl9hLmxlbmd0aCA+IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2EsIGJdO1xuICB9ZWxzZSBpZihhcnJfYS5sZW5ndGggPCBhcnJfYi5sZW5ndGgpe1xuICAgIHJlcyA9IFtiLCBhXTtcbiAgfWVsc2V7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGVsbV9hYSA9IGFycl9hW2ldO1xuICAgICAgY29uc3QgZWxtX2JiID0gYXJyX2JbaV07XG4gICAgICBpZihlbG1fYWEgPiBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2FhIDwgZWxtX2JiKXtcbiAgICAgICAgcmVzID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNle1xuICAgICAgICByZXMgPSBbYSwgYl07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBTOiBTLFxuICBLOiBLXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYOiAxMDAwMCxcbiAgTUlOOiAtMTAwMDAsXG4gIERCWjogXCJEaXZpc2lvbiBieSBaZXJvXCIsXG4gIE5BTjogXCJOb3QgYSBudW1iZXJcIixcbiAgTk9UU1U6IFwiQXJndW1lbnQgaXMgbm90IFN1LlwiXG59O1xuIiwiY29uc3QgY29yZSA9IHt9O1xuXG5jb3JlLmlzTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUuaXNaZXJvID0gZnVuY3Rpb24obil7XG4gIGlmKCBuID09PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cblxuLy8g6YWN5YiX44Gn44Gu6KiI566XXG5jb3JlLm51bVRvQXJyYXkgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBOdW1iZXIoc3RyLnNsaWNlKGksIGkgKyAxKSk7XG4gICAgaWYoIWNvcmUuaXNOdW1iZXIoZWxtKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIpO1xuICAgIH1cbiAgICBhcnIucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbCA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIxID0gW107XG4gIGNvbnN0IGFycjIgPSBbXTtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKG4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBsZXQgdGd0ID0gYXJyMTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBOdW1iZXIoc3RyW2ldKTtcbiAgICBpZighY29yZS5pc051bWJlcihlbG0pKXtcbiAgICAgIGlmKGVsbSA9PT0gXCIuXCIgJiYgdGd0ID09PSBhcnIxKXtcbiAgICAgICAgdGd0ID0gYXJyMjtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0Z3QucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBbLi4uYXJyMSwgXCIuXCIsIGFycjJdO1xufTtcblxuY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwyID0gZnVuY3Rpb24obil7XG4gIGxldCBzdHIgPSBTdHJpbmcobik7XG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0ubWF0Y2goLy0vKSl7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL14tLywgXCJcIik7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYXJyID0gc3RyLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IGludCA9IFtdO1xuICBjb25zdCBkZWNpbWFsID0gW107XG5cbiAgbGV0IGhlYWRfemVybyA9IHRydWU7XG4gIGxldCBpc19kZWNpbWFsID0gZmFsc2U7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKGFycltpXSk7XG4gICAgY29uc3QgaXNOdW1iZXIgPSBjb3JlLmlzTnVtYmVyKG51bSk7XG4gICAgaWYoIWlzTnVtYmVyICYmIGFycltpXSA9PT0gXCIuXCIpe1xuICAgICAgaXNfZGVjaW1hbCA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9ZWxzZSBpZighaXNOdW1iZXIpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9ZWxzZSBpZihoZWFkX3plcm8gJiYgbnVtID09PSAwICYmICFpc19kZWNpbWFsKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBoZWFkX3plcm8gPSBmYWxzZTtcblxuICAgIGlmKGlzX2RlY2ltYWwpe1xuICAgICAgZGVjaW1hbC5wdXNoKG51bSk7XG4gICAgfWVsc2V7XG4gICAgICBpbnQucHVzaChudW0pO1xuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY2ltYWwubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGNvbnN0IGQgPSBkZWNpbWFsW2ldO1xuICAgIGlmKGQgPT09IDApe1xuICAgICAgZGVjaW1hbC5wb3AoKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW50OiBpbnQsXG4gICAgZGVjaW1hbDogZGVjaW1hbCxcbiAgICBuZWdhdGl2ZTogbmVnYXRpdmVcbiAgfTtcbn07XG5cbmNvcmUuY29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZighYSB8fCAhYil7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGFfYXJyLCBiX2FycjtcbiAgaWYoYSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICBhX2FyciA9IGE7XG4gIH1lbHNle1xuICAgIGFfYXJyID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwyKGEpO1xuICB9XG4gIGlmKGIgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgYl9hcnIgPSBiO1xuICB9ZWxzZXtcbiAgICBiX2FyciA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMihiKTtcbiAgfVxuXG4gIGlmKGFfYXJyWzBdID09PSAwKXtcbiAgICBjb25zdCBuZXdfYSA9IFtdO1xuICAgIGxldCB6ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYV9hcnIubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtID0gYV9hcnJbaV07XG4gICAgICBpZihlbG0gPT09IDAgJiYgemVybyl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbmV3X2EucHVzaChlbG0pO1xuICAgICAgemVybyA9IGZhbHNlO1xuICAgIH1cbiAgICBhX2FyciA9IG5ld19hO1xuICB9XG5cbiAgaWYoYl9hcnJbMF0gPT09IDApe1xuICAgIGNvbnN0IG5ld19iID0gW107XG4gICAgbGV0IHplcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBiX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBlbG0gPSBiX2FycltpXTtcbiAgICAgIGlmKGVsbSA9PT0gMCAmJiB6ZXJvKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBuZXdfYi5wdXNoKGVsbSk7XG4gICAgICB6ZXJvID0gZmFsc2U7XG4gICAgfVxuICAgIGJfYXJyID0gbmV3X2I7XG4gIH1cblxuICBjb25zdCBvID0ge1xuICAgIGVxdWFsOiBmYWxzZSxcbiAgICBsYXJnZTogbnVsbCxcbiAgICBzbWFsbDogbnVsbCxcbiAgfTtcblxuICBpZihhX2Fyci5sZW5ndGggPiBhX2Fyci5sZW5ndGgpe1xuICAgIG8ubGFyZ2UgPSBhO1xuICAgIG8uc21hbGwgPSBiO1xuICAgIHJldHVybiBvO1xuICB9XG4gIGlmKGFfYXJyLmxlbmd0aCA8IGFfYXJyLmxlbmd0aCl7XG4gICAgby5sYXJnZSA9IGI7XG4gICAgby5zbWFsbCA9IGE7XG4gICAgcmV0dXJuIG87XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYV9hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGFhID0gYV9hcnJbaV07XG4gICAgY29uc3QgYmIgPSBiX2FycltpXTtcbiAgICBpZihhYSA+IGJiKXtcbiAgICAgIG8ubGFyZ2UgPSBhO1xuICAgICAgby5zbWFsbCA9IGI7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoYWEgPCBiYil7XG4gICAgICBvLmxhcmdlID0gYjtcbiAgICAgIG8uc21hbGwgPSBhO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICB9XG5cbiAgby5lcXVhbCA9IHRydWU7XG4gIHJldHVybiBvO1xuXG59O1xuXG5jb3JlLmlzTnVtQXJyYXkgPSBmdW5jdGlvbihhcnIpe1xuICBpZiggYXJyIGluc3RhbmNlb2YgQXJyYXkgKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKCAhY29yZS5pc051bWJlcihhcnJbaV0pICl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvcmUuZml4Q2FycnkgPSBmdW5jdGlvbihhcnIpe1xuXG4gIGNvbnN0IG5ld19hcnIgPSBbXTtcbiAgbGV0IGNhcnJ5ID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IHZhbCA9IGFycltpXSArIGNhcnJ5O1xuICAgIGlmKHZhbCA+IDkpe1xuICAgICAgdmFsID0gdmFsIC0gMTA7XG4gICAgICBjYXJyeSA9IDE7XG4gICAgfWVsc2UgaWYoIHZhbCA+PSAwICYmIHZhbCA8PSA5KXtcbiAgICAgIGNhcnJ5ID0gMDtcbiAgICB9XG5cbiAgICBuZXdfYXJyLnB1c2godmFsKTtcbiAgfVxuICBpZihjYXJyeSA+IDApe1xuICAgIG5ld19hcnIucHVzaChjYXJyeSk7XG4gIH1cblxuICByZXR1cm4gbmV3X2FycjtcblxufTtcblxuY29yZS5hZGQgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoIWEgJiYgIWIpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwyKGEpO1xuICBjb25zdCBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMihiKTtcbiAgY29uc3QgYV9pbnQgPSBhXy5pbnQ7XG4gIGNvbnN0IGJfaW50ID0gYl8uaW50O1xuICBjb25zdCBhX2RlYyA9IGFfLmRlY2ltYWw7XG4gIGNvbnN0IGJfZGVjID0gYl8uZGVjaW1hbDtcblxuICBsZXQgZGVjX2xlbiA9IGFfZGVjLmxlbmd0aDtcbiAgaWYoZGVjX2xlbiA8IGJfZGVjLmxlbmd0aCl7XG4gICAgZGVjX2xlbiA9IGJfZGVjLmxlbmd0aDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBkZWNfbGVuOyBpKyspe1xuICAgIGNvbnN0IGFfZCA9IGFfZGVjW2ldO1xuICAgIGNvbnN0IGJfZCA9IGJfZGVjW2ldO1xuICAgIGlmKCFjb3JlLmlzTnVtYmVyKGFfZCkpe1xuICAgICAgYV9kZWMucHVzaCgwKTtcbiAgICB9XG4gICAgaWYoIWNvcmUuaXNOdW1iZXIoYl9kKSl7XG4gICAgICBiX2RlYy5wdXNoKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihhLCBiKXtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBsZXQgYXJyX2EgPSBhO1xuICAgIGxldCBhcnJfYiA9IGI7XG4gICAgaWYoYS5sZW5ndGggPCBiLmxlbmd0aCl7XG4gICAgICBhcnJfYSA9IGI7XG4gICAgICBhcnJfYiA9IGE7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldIDogMDtcbiAgICAgIGxldCByZXMgPSBhYSArIGJiO1xuICAgICAgYXJyLnB1c2gocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcmUuZml4Q2FycnkoYXJyKTtcbiAgfTtcblxuICBjb25zdCB7IGRlY19hcnIsIGRlY19jYXJyeSB9ID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbGVuZ3RoID0gYV9kZWMubGVuZ3RoIDwgYl9kZWMubGVuZ3RoID8gYl9kZWMubGVndGggOiBhX2RlYy5sZW5ndGg7XG4gICAgY29uc3QgcmVzID0gY2FsYyhhX2RlYy5yZXZlcnNlKCksIGJfZGVjLnJldmVyc2UoKSk7XG5cbiAgICBsZXQgY2FycnkgPSAwO1xuICAgIGlmKHJlcy5sZW5ndGggPiBsZW5ndGgpe1xuICAgICAgY2FycnkgPSByZXMucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkZWNfYXJyOiByZXMsXG4gICAgICBkZWNfY2Fycnk6IGNhcnJ5XG4gICAgfTtcbiAgfSkoKTtcblxuICBsZXQgaW50X2FyciA9IChmdW5jdGlvbihkZWNfY2Fycnkpe1xuICAgIGxldCByZXMgPSBjYWxjKGFfaW50LnJldmVyc2UoKSwgYl9pbnQucmV2ZXJzZSgpKTtcblxuICAgIGlmKGRlY19jYXJyeSA+IDApe1xuICAgICAgY29uc29sZS5pbmZvKHJlcyk7XG4gICAgICByZXMgPSBjYWxjKHJlcywgW2RlY19jYXJyeV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9KShkZWNfY2FycnkpO1xuXG4gIHJldHVybiB7XG4gICAgaW50OiBpbnRfYXJyLnJldmVyc2UoKSxcbiAgICBkZWNpbWFsOiBkZWNfYXJyLnJldmVyc2UoKVxuICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IHMgZnJvbSBcIi4vc3UuanNcIjtcbmltcG9ydCBTSyBmcm9tIFwiLi9TSy5qc1wiO1xuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHM6IHMsXG4gIFM6IFNLLlMsXG4gIEs6IFNLLkssXG4gIGNvcmU6IGNvcmVcbn07IiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBNQVggPSBjb25zdGFudHMuTUFYO1xuY29uc3QgTUlOID0gY29uc3RhbnRzLk1JTjtcbmNvbnN0IERCWiA9IGNvbnN0YW50cy5EQlo7XG5jb25zdCBOQU4gPSBjb25zdGFudHMuTkFOO1xuY29uc3QgTk9UU1UgPSBjb25zdGFudHMuTk9UU1U7XG5cblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZihpc05hTihuKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FycjtcbiAgbGV0IGRlY2ltYWxfYXJyO1xuXG5cbiAgdHJ5e1xuICAgIGludF9hcnIgPSBjb3JlLm51bVRvQXJyYXkoaW50X3N0cik7XG4gICAgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG4gIH1jYXRjaChlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgbGV0IHJlcztcbiAgdHJ5e1xuICAgIHJlcyA9IG5ldyBTdShudW0sIG9wdGlvbik7XG4gIH1jYXRjaChlKXtcbiAgICByZXMgPSBlLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmUgPyBgLSR7c3RyfWAgOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgY29uc3QgX2EgPSBtYWtlU3UoYS5nZXRTdHJpbmcoKSk7XG4gIGNvbnN0IF9iID0gbWFrZVN1KGIuZ2V0U3RyaW5nKCkpO1xuXG4gIGlmKGFic29sdXRlKXtcbiAgICBfYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIF9iLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihfYS5pc1plcm8oKSAmJiBfYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgIV9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKF9hLmludGVnZXIubGVuZ3RoID4gX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EuaW50ZWdlci5sZW5ndGggPCBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IF9hLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IF9hLmludGVnZXJbaV07XG4gICAgbGV0IGVsbV9iID0gX2IuaW50ZWdlcltpXTtcbiAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gX2EuZGVjaW1hbC5sZW5ndGggPj0gX2IuZGVjaW1hbC5sZW5ndGggPyBfYS5kZWNpbWFsLmxlbmd0aCA6IF9iLmRlY2ltYWwubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgZWxtX2EgPSBfYS5kZWNpbWFsW2ldID8gX2EuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBfYi5kZWNpbWFsW2ldID8gX2IuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZihuZWdhdGl2ZSl7XG4gICAgZmllbGQgPSBbZmllbGRbMV0sIGZpZWxkWzBdXTtcbiAgfVxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkWzBdO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgaV9hID0gYS5pbnRlZ2VyO1xuICBjb25zdCBpX2IgPSBiLmludGVnZXI7XG4gIGNvbnN0IGRfYSA9IGEuZGVjaW1hbDtcbiAgY29uc3QgZF9iID0gYi5kZWNpbWFsO1xuXG4gIGNvbnN0IGxhcmdlID0gZ2V0TGFyZ2UoYSwgYik7XG5cbiAgaWYoIWxhcmdlKXtcbiAgICBpZihpX2EubGVuZ3RoID09PSBpX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpX2FbaV0gIT09IGlfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2UgaWYoZF9hLmxlbmd0aCA9PT0gZF9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZF9hW2ldICE9PSBkX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGEubmVnYXRpdmUgPT09IGIubmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuU3UucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaW50ZWdlci5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnRlZ2VyWzBdID09PSAwICYmICF0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09uZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjFcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTGFyZ2UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYS5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYi5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNQb3NpdGl2ZSgpICYmIHRoaXMuaXNJbnRlZ2VyKCkgJiYgdGhpcy5pc0xhcmdlKENPTlNUQU5UUy5aRVJPKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGRwX2EgPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBkcF9iID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCByZXNfYXJyID0gW107XG4gIGZvcihsZXQgaV9hID0gMDsgaV9hIDwgYV9pZC5sZW5ndGg7IGlfYSsrKXtcbiAgICBmb3IobGV0IGlfYiA9IDA7IGlfYiA8IGJfaWQubGVuZ3RoOyBpX2IrKyl7XG4gICAgICBjb25zdCBlbG1fYSA9IGFfaWRbaV9hXTtcbiAgICAgIGNvbnN0IGVsbV9iID0gYl9pZFtpX2JdO1xuICAgICAgY29uc3QgcG9zX2EgPSBkcF9hIC0gaV9hIC0xO1xuICAgICAgY29uc3QgcG9zX2IgPSBkcF9iIC0gaV9iIC0xO1xuICAgICAgY29uc3QgcG9zID0gcG9zX2EgKyBwb3NfYjtcbiAgICAgIGxldCByZXMgPSBlbG1fYSAqIGVsbV9iO1xuICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHBvcyk7XG4gICAgICBsZXQgc3RyO1xuICAgICAgaWYocG9zID49IDApe1xuICAgICAgICBsZW4rKztcbiAgICAgICAgaWYocmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiArIDEsIFwiMFwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobGVuID09PSAxICYmIHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpWzBdICsgXCIuXCIgKyBTdHJpbmcocmVzKVsxXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gXCIwLlwiICsgU3RyaW5nKHJlcykucGFkU3RhcnQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc19hcnIucHVzaChtYWtlU3Uoc3RyKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcyA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc19hcnIubGVuZ3RoOyBpKyspe1xuICAgIHJlcyA9IHJlcy5hZGQocmVzX2FycltpXSk7XG4gIH1cblxuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY291bnQgPSBtYWtlU3UoXCIxXCIpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpIHx8IGNvdW50LmlzRXF1YWwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oY291bnQpKTtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoXCIxXCIpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGEsIGIpe1xuXG4gIGlmKCFpc1N1KGEpIHx8ICFpc1N1KGIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFthLCBiXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5cbmNvbnN0IG1ha2VMdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZShtYWtlU3UoMiksIG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG5cbiAgY29uc3QgZmlicyA9IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSh6ZXJvLCBvbmUpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IG1ha2VMdWNhc1NlcXVlbmNlKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsdWNzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGx1Y3NbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmNvbnN0IG1ha2VTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0LCBvdGhlcnMpe1xuICBjb25zdCBhcnJheSA9IFtmaXJzdF07XG4gIGlmKCFvdGhlcnMpe1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgb3RoZXJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gb3RoZXJzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblN1LnByb3RvdHlwZS5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBhID0gbWFrZVN1KHRoaXMuaW50ZWdlcltpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBtYWtlUG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFpc1N1KG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IGluY3JlbWVudCA9IG4uc3VidHJhY3QobWFrZVN1KDIpKTtcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZVRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMyksIG1heCk7XG59O1xuXG5jb25zdCBtYWtlU3F1YXJlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCksIG1heCk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVRyaWFuZ2xlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTcXVhcmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VTcXVhcmVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCBtYXJyID0gbWFrZU1lcnNlbm5lTnVtYmVycyhtYXgpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIFN1OiBTdVxufTsiXSwic291cmNlUm9vdCI6IiJ9