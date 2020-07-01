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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJNQVgiLCJDT05TVEFOVFMiLCJNSU4iLCJTIiwiSyIsIm1ha2VTdSIsInN1IiwiY29weVN1IiwiaXNTdSIsIlN1IiwiRklSU1RfUFJJTUVfTlVNQkVSIiwicmFuZG9tIiwibWluIiwibWF4IiwidW5kZWZpbmVkIiwic3RyIiwiU3RyaW5nIiwiTWF0aCIsInJhbiIsImlzWmVybyIsImFyciIsInNwbGl0IiwibXVsdGlwbGljYXRpb24iLCJyYW5kb21FbGVtZW50IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaW50ZWdlciIsInJhbmRvbUludCIsImlzRXF1YWwiLCJpc0xhcmdlIiwiZ2V0TnVtYmVyIiwicyIsInB1c2giLCJyZXMiLCJtYWtlUHJpbWVOdW1iZXJzIiwiaXNQcmltZU51bWJlciIsImlzRXZlbk51bWJlciIsIm4iLCJpc051bWJlciIsImlzT2RkTnVtYmVyIiwiZGl2aXNvcnMiLCJldWNsaWRlYW5BbGdvcml0aG0iLCJhIiwiYiIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsImNvbW1vbkRpdmlzb3JzIiwiYXJyX2EiLCJhcnJfYiIsImRpdnMiLCJrIiwiZWxtX2EiLCJsIiwiZWxtX2IiLCJtYXhDb21tb25EaXZpc29yIiwibXVsdGlwbGUiLCJsZWFzdENvbW1vbk11bHRpcGxlIiwiYmlnIiwiaiIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImVsbSIsImluZmluaXRlUHJvZHVjdCIsImlwIiwiZGl2aXNpb24iLCJkaXZpZGVuZCIsImRpdmlzb3IiLCJyZXN1bHQiLCJyZW1haW5kZXIiLCJmbG9vciIsInJlYWxOdW1iZXIiLCJkaXZpc29yc1N1bW1hdGlvbiIsImlzQWJ1bmRhbnROdW1iZXIiLCJpc0thcHJla2FyTnVtYmVyVHlwZUEiLCJudW0iLCJsZW4iLCJmaXJzdF9sZW4iLCJhZnRlcl9sZW4iLCJmaXJzdCIsImFmdGVyIiwiTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJmZXJtYXRUZXN0IiwicG93IiwiZ2V0SW5jbHVkZXNOdW1iZXJzIiwiYm9vbCIsImFyIiwiYXJyYXlTdW1tYXRpb24iLCJBcnJheSIsImNvcmUiLCJudW1Ub0FycmF5IiwiaXNOdW1BcnJheSIsInN0cmluZyIsIm51bWJlciIsIkEiLCJCIiwiY29uc29sZSIsImxvZyIsImdldExhcmdlciIsImdhcCIsIm92ZXIiLCJhcnJfYyIsIl9yZXMiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsIk5hTiIsInNsaWNlIiwiRXJyb3IiLCJnbG9iYWwiLCJTSyIsInNlbGYiLCJjb25zdGFudHMiLCJvcHRpb24iLCJuZWdhdGl2ZSIsInBhcnRzIiwiaW50X3N0ciIsImRlY2ltYWxfc3RyIiwiaW50MCIsIm1hdGNoIiwibmV3X2ludF9zdHIiLCJzdGFydF96ZXJvIiwiZGVjMCIsImVuZF96ZXJvIiwibmV3X2RlY2ltYWxfc3RyIiwiaW50X2FyciIsImRlY2ltYWxfYXJyIiwiZSIsImRlY2ltYWwiLCJkZW5vbWluYXRvciIsImZyYWN0aW9uIiwibnVtZXJhdG9yIiwiY29uY2F0IiwibWVzc2FnZSIsImdldFN0cmluZyIsIlpFUk8iLCJPTkUiLCJwcm90b3R5cGUiLCJhYyIsInJlZHVjZSIsImdldEludGVnZXIiLCJnZXREZWNpbWFsIiwiY2xvbmUiLCJnZXRMYXJnZSIsImFic29sdXRlIiwiZmllbGQiLCJfYSIsIl9iIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwibGFyZ2UiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNTbWFsbCIsImlzUG9zaXRpdmUiLCJpc05lZ2F0aXZlIiwidiIsImFkZCIsIm1ha2VQb3NpdGl2ZSIsInN1YnRyYWN0IiwiaW50X2EiLCJkZWNfYSIsImludF9iIiwiZGVjX2IiLCJsZW5faSIsImxlbl9kIiwiaW50X3JlcyIsImRlY19yZXMiLCJkIiwicG9wIiwibmVnYXRlIiwiYV9pZCIsImJfaWQiLCJhX2lfbGVuIiwiYl9pX2xlbiIsImFfZF9sZW4iLCJiX2RfbGVuIiwiZF9nYXAiLCJhYnMiLCJkZWJ0IiwicmVzX2FycmF5IiwiYV9lbG0iLCJiX2VsbSIsInNwbGljZSIsIm1pbnVzIiwibmV2YXRpdmUiLCJtYWtlTmVnYXRpdmUiLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJtYWtlRmlib25hY2NpU2VxdWVuY2UiLCJmdW5jIiwiYyIsIm1ha2VMdWNhc1NlcXVlbmNlIiwiaXNGaWJvbmFjY2lOdW1iZXIiLCJ6ZXJvIiwib25lIiwiZmlicyIsImlzTHVjYXNOdW1iZXIiLCJsdWNzIiwibWFrZVNlcXVlbmNlIiwib3RoZXJzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsIm1ha2VQb2x5Z29uYWxOdW1iZXJzIiwiY3VycmVudCIsInJhbmdlIiwiaW5jcmVtZW50IiwibWFrZVRyaWFuZ2xlTnVtYmVycyIsIm1ha2VTcXVhcmVOdW1iZXJzIiwiaXNUcmlhbmdsZU51bWJlciIsImZpbmQiLCJpc1NxdWFyZU51bWJlciIsIm1ha2VNZXJzZW5uZU51bWJlcnMiLCJ0d28iLCJleCIsIm1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyIsIm1hcnIiLCJpc01lcnNlbm5lTnVtYmVyIiwibXMiLCJtIiwiaXNNZXJzZW5uZVByaW1lTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FB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QUFQO0FBQ0QsQ0FoQkQ7O0FBbUJlO0FBQ2JqQyxRQUFNLEVBQUVBLE1BREs7QUFFYkUsUUFBTSxFQUFFQSxNQUZLO0FBR2JDLE1BQUksRUFBRUEsSUFITztBQUliQyxJQUFFLEVBQUVBO0FBSlMsQ0FBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0IHN1IGZyb20gXCIuL3N1LmpzXCI7XG5cbmltcG9ydCBDT05TVEFOVFMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5jb25zdCBNSU4gPSBDT05TVEFOVFMuTUlOO1xuXG5jb25zdCBTID0ge307XG5jb25zdCBLID0ge307XG5cbmNvbnN0IG1ha2VTdSA9IHN1Lm1ha2VTdTtcbmNvbnN0IGNvcHlTdSA9IHN1LmNvcHlTdTtcbmNvbnN0IGlzU3UgPSBzdS5pc1N1O1xuY29uc3QgU3UgPSBzdS5TdTtcblxuY29uc3QgRklSU1RfUFJJTUVfTlVNQkVSID0gMjtcblxuXG5LLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IG1ha2VTdSgwKTtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gbWFrZVN1KDEpO1xuICB9XG4gIGlmKCFpc1N1KG1pbikpe1xuICAgIG1pbiA9IG1ha2VTdShtaW4pO1xuICB9XG4gIGlmKCFpc1N1KG1heCkpe1xuICAgIG1heCA9IG1ha2VTdShtYXgpO1xuICB9XG5cbiAgY29uc3Qgc3RyID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBsZXQgcmFuO1xuXG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIGlmKG1pbi5pc1plcm8oKSl7XG4gICAgICByYW4gPSBtYWtlU3UoMCk7XG4gICAgfWVsc2V7XG4gICAgICByYW4gPSBtaW47XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByYW4gPSBtYWtlU3UoXCIwLlwiICsgYXJyWzFdKS5tdWx0aXBsaWNhdGlvbihtYXgpO1xuICB9XG4gIHJldHVybiByYW47XG59O1xuXG5LLnJhbmRvbUVsZW1lbnQgPSBmdW5jdGlvbihhcnJheSl7XG4gIGNvbnN0IGkgPSBLLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpLmludGVnZXI7XG4gIHJldHVybiBhcnJheVtpXTtcbn07XG5cbksucmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpe1xuXG4gIGlmKCAhaXNTdShtaW4pIHx8ICFpc1N1KG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZihtaW4uaXNFcXVhbChtYXgpIHx8IG1pbi5pc0xhcmdlKG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBtaW4uZ2V0TnVtYmVyKCk7IGkgPD0gbWF4LmdldE51bWJlcigpOyBpKyspe1xuICAgIGNvbnN0IHMgPSBtYWtlU3UoaSk7XG4gICAgYXJyLnB1c2gocyk7XG4gIH1cblxuICBjb25zdCByZXMgPSBLLnJhbmRvbUVsZW1lbnQoYXJyKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuSy5tYWtlUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgY29uc3QgTUFYID0gMTAwO1xuICBpZighbWF4KXtcbiAgICBtYXggPSBNQVg7XG4gIH1cbiAgaWYobWF4ID4gTUFYKXtcbiAgICBtYXggPSBNQVg7XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IEZJUlNUX1BSSU1FX05VTUJFUjsgaSA8IG1heDsgaSsrKXtcbiAgICBjb25zdCBzdSA9IG1ha2VTdShpKTtcbiAgICBpZihzdS5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG5TLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZiggUy5pc051bWJlcihuKSAmJiBuICUgMiA9PT0gMCApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCBTLmlzTnVtYmVyKG4pICYmIG4gJSAyICE9PSAwICl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbksuZGl2aXNvcnMgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKXtcbiAgICBpZihuICUgaSA9PT0gMCl7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLmNvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFycl9hID0gSy5kaXZpc29ycyhhKTtcbiAgaWYoYSA9PT0gYil7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gSy5kaXZpc29ycyhiKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBrID0gMDsgayA8IGFycl9hLmxlbmd0aDsgaysrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2tdO1xuICAgIGZvcihsZXQgbCA9IDA7IGwgPCBhcnJfYi5sZW5ndGg7IGwrKyl7XG4gICAgICBjb25zdCBlbG1fYiA9IGFycl9iW2xdO1xuICAgICAgaWYoZWxtX2EgPT09IGVsbV9iKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cbksubWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnIgPSBLLmNvbW1vbkRpdmlzb3JzKGEsIGIpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cbksubXVsdGlwbGUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBNQVg7IGkrKyl7XG4gICAgYXJyLnB1c2gobiAqIGkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5LLmxlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgbGV0IGJpZztcbiAgaWYoIGEgPCBiKXtcbiAgICBiaWcgPSBiO1xuICB9ZWxzZXtcbiAgICBiaWcgPSBhO1xuICB9XG4gIGNvbnN0IGFycl9hID0gW107XG4gIGNvbnN0IGFycl9iID0gW107XG5cbiAgbGV0IGkgPTE7XG4gIHdoaWxlKGkgPD0gYmlnKXtcbiAgICBhcnJfYS5wdXNoKCBhICogaSk7XG4gICAgaSsrO1xuICB9XG4gIGxldCBqID0xO1xuICB3aGlsZShqIDw9IGJpZyl7XG4gICAgYXJyX2IucHVzaCggYiAqIGopO1xuICAgIGorKztcbiAgfVxuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIHJldHVybiBlbG1fYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gZmlib25hY2NpXG5cblxuXG5cblxuXG5cbi8vIHRvZG8gMHN0YXJ0XG5jb25zdCBhcnJheVN1bW1hdGlvbiA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIShhIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYSA9IGNvcmUubnVtVG9BcnJheShhKTtcbiAgfVxuICBpZiggIShiIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYiA9IGNvcmUubnVtVG9BcnJheShiKTtcbiAgfVxuXG4gIGlmKCFjb3JlLmlzTnVtQXJyYXkoYSkgfHwgIWNvcmUuaXNOdW1BcnJheShiKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKGFbMF0pICYmIGNvcmUuaXNaZXJvKGJbMF0pKXtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyYXk6IFswXSxcbiAgICAgIHN0cmluZzogXCIwXCIsXG4gICAgICBudW1iZXI6IDAsXG4gICAgICBsZW5ndGg6IDFcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgQSA9IG1ha2VTdShhKTtcbiAgY29uc3QgQiA9IG1ha2VTdShiKTtcblxuICBjb25zb2xlLmxvZyhBLEIpO1xuXG4gIGNvbnN0IHJlcyA9IGNvcmUuZ2V0TGFyZ2VyKGEsIGIpO1xuICBjb25zdCBhcnJfYSA9IHJlc1swXTtcbiAgY29uc3QgYXJyX2IgPSByZXNbMV07XG4gIGNvbnN0IGxlbiA9IGFycl9hLmxlbmd0aDtcblxuICBjb25zdCBnYXAgPSBsZW4gLSBhcnJfYi5sZW5ndGg7XG5cbiAgbGV0IG92ZXIgPSAwLCBhcnJfYyA9IFtdO1xuICBmb3IobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBjb25zdCBlbG1fYiA9IGFycl9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGFycl9jLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGFycl9jLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoYXJyX2MpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRMYXJnZXIgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyX2EgPSBbXSwgYXJyX2IgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYVtpXTtcbiAgICBpZihlbG1fYSA9PT0gMCAmJiBhcnJfYS5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9hID49ICAwICYmIGVsbV9hIDwgMTApe1xuICAgICAgYXJyX2EucHVzaChlbG1fYSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9iID0gYltpXTtcbiAgICBpZihlbG1fYiA9PT0gMCAmJiBhcnJfYi5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9iID49ICAwICYmIGVsbV9iIDwgMTApe1xuICAgICAgYXJyX2IucHVzaChlbG1fYik7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcztcbiAgaWYoYXJyX2EubGVuZ3RoID4gYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYSwgYl07XG4gIH1lbHNlIGlmKGFycl9hLmxlbmd0aCA8IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2IsIGFdO1xuICB9ZWxzZXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtX2FhID0gYXJyX2FbaV07XG4gICAgICBjb25zdCBlbG1fYmIgPSBhcnJfYltpXTtcbiAgICAgIGlmKGVsbV9hYSA+IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYWEgPCBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFM6IFMsXG4gIEs6IEtcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUuaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG4gICAgYXJyLnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29yZS5pc051bUFycmF5ID0gZnVuY3Rpb24oYXJyKXtcbiAgaWYoIGFyciBpbnN0YW5jZW9mIEFycmF5ICl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiggIXRoaXMuaXNOdW1iZXIoYXJyW2ldKSApe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IHMgZnJvbSBcIi4vc3UuanNcIjtcbmltcG9ydCBTSyBmcm9tIFwiLi9TSy5qc1wiO1xuXG4oZnVuY3Rpb24oZ2xvYmFsLCBzKXtcbiAgZ2xvYmFsLnMgPSBzO1xuICBnbG9iYWwuSyA9IFNLLks7XG59KShnbG9iYWwgfHwgc2VsZiwgcyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBNQVggPSBjb25zdGFudHMuTUFYO1xuY29uc3QgTUlOID0gY29uc3RhbnRzLk1JTjtcbmNvbnN0IERCWiA9IGNvbnN0YW50cy5EQlo7XG5jb25zdCBOQU4gPSBjb25zdGFudHMuTkFOO1xuY29uc3QgTk9UU1UgPSBjb25zdGFudHMuTk9UU1U7XG5cblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZihpc05hTihuKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FycjtcbiAgbGV0IGRlY2ltYWxfYXJyO1xuXG5cbiAgdHJ5e1xuICAgIGludF9hcnIgPSBjb3JlLm51bVRvQXJyYXkoaW50X3N0cik7XG4gICAgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG4gIH1jYXRjaChlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgbGV0IHJlcztcbiAgdHJ5e1xuICAgIHJlcyA9IG5ldyBTdShudW0sIG9wdGlvbik7XG4gIH1jYXRjaChlKXtcbiAgICByZXMgPSBlLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmUgPyBgLSR7c3RyfWAgOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgY29uc3QgX2EgPSBtYWtlU3UoYS5nZXRTdHJpbmcoKSk7XG4gIGNvbnN0IF9iID0gbWFrZVN1KGIuZ2V0U3RyaW5nKCkpO1xuXG4gIGlmKGFic29sdXRlKXtcbiAgICBfYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIF9iLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihfYS5pc1plcm8oKSAmJiBfYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgIV9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKF9hLmludGVnZXIubGVuZ3RoID4gX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EuaW50ZWdlci5sZW5ndGggPCBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IF9hLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IF9hLmludGVnZXJbaV07XG4gICAgbGV0IGVsbV9iID0gX2IuaW50ZWdlcltpXTtcbiAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gX2EuZGVjaW1hbC5sZW5ndGggPj0gX2IuZGVjaW1hbC5sZW5ndGggPyBfYS5kZWNpbWFsLmxlbmd0aCA6IF9iLmRlY2ltYWwubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgZWxtX2EgPSBfYS5kZWNpbWFsW2ldID8gX2EuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBfYi5kZWNpbWFsW2ldID8gX2IuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZihuZWdhdGl2ZSl7XG4gICAgZmllbGQgPSBbZmllbGRbMV0sIGZpZWxkWzBdXTtcbiAgfVxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkWzBdO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgaV9hID0gYS5pbnRlZ2VyO1xuICBjb25zdCBpX2IgPSBiLmludGVnZXI7XG4gIGNvbnN0IGRfYSA9IGEuZGVjaW1hbDtcbiAgY29uc3QgZF9iID0gYi5kZWNpbWFsO1xuXG4gIGNvbnN0IGxhcmdlID0gZ2V0TGFyZ2UoYSwgYik7XG5cbiAgaWYoIWxhcmdlKXtcbiAgICBpZihpX2EubGVuZ3RoID09PSBpX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpX2FbaV0gIT09IGlfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2UgaWYoZF9hLmxlbmd0aCA9PT0gZF9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZF9hW2ldICE9PSBkX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGEubmVnYXRpdmUgPT09IGIubmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuU3UucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaW50ZWdlci5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnRlZ2VyWzBdID09PSAwICYmICF0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09uZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjFcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTGFyZ2UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYS5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYi5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNQb3NpdGl2ZSgpICYmIHRoaXMuaXNJbnRlZ2VyKCkgJiYgdGhpcy5pc0xhcmdlKENPTlNUQU5UUy5aRVJPKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGRwX2EgPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBkcF9iID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCByZXNfYXJyID0gW107XG4gIGZvcihsZXQgaV9hID0gMDsgaV9hIDwgYV9pZC5sZW5ndGg7IGlfYSsrKXtcbiAgICBmb3IobGV0IGlfYiA9IDA7IGlfYiA8IGJfaWQubGVuZ3RoOyBpX2IrKyl7XG4gICAgICBjb25zdCBlbG1fYSA9IGFfaWRbaV9hXTtcbiAgICAgIGNvbnN0IGVsbV9iID0gYl9pZFtpX2JdO1xuICAgICAgY29uc3QgcG9zX2EgPSBkcF9hIC0gaV9hIC0xO1xuICAgICAgY29uc3QgcG9zX2IgPSBkcF9iIC0gaV9iIC0xO1xuICAgICAgY29uc3QgcG9zID0gcG9zX2EgKyBwb3NfYjtcbiAgICAgIGxldCByZXMgPSBlbG1fYSAqIGVsbV9iO1xuICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHBvcyk7XG4gICAgICBsZXQgc3RyO1xuICAgICAgaWYocG9zID49IDApe1xuICAgICAgICBsZW4rKztcbiAgICAgICAgaWYocmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiArIDEsIFwiMFwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobGVuID09PSAxICYmIHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpWzBdICsgXCIuXCIgKyBTdHJpbmcocmVzKVsxXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gXCIwLlwiICsgU3RyaW5nKHJlcykucGFkU3RhcnQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc19hcnIucHVzaChtYWtlU3Uoc3RyKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcyA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc19hcnIubGVuZ3RoOyBpKyspe1xuICAgIHJlcyA9IHJlcy5hZGQocmVzX2FycltpXSk7XG4gIH1cblxuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY291bnQgPSBtYWtlU3UoXCIxXCIpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpIHx8IGNvdW50LmlzRXF1YWwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oY291bnQpKTtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoXCIxXCIpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGEsIGIpe1xuXG4gIGlmKCFpc1N1KGEpIHx8ICFpc1N1KGIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFthLCBiXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5cbmNvbnN0IG1ha2VMdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZShtYWtlU3UoMiksIG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG5cbiAgY29uc3QgZmlicyA9IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSh6ZXJvLCBvbmUpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IG1ha2VMdWNhc1NlcXVlbmNlKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsdWNzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGx1Y3NbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmNvbnN0IG1ha2VTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0LCBvdGhlcnMpe1xuICBjb25zdCBhcnJheSA9IFtmaXJzdF07XG4gIGlmKCFvdGhlcnMpe1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgb3RoZXJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gb3RoZXJzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblN1LnByb3RvdHlwZS5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBhID0gbWFrZVN1KHRoaXMuaW50ZWdlcltpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBtYWtlUG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFpc1N1KG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IGluY3JlbWVudCA9IG4uc3VidHJhY3QobWFrZVN1KDIpKTtcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZVRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMyksIG1heCk7XG59O1xuXG5jb25zdCBtYWtlU3F1YXJlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCksIG1heCk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVRyaWFuZ2xlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTcXVhcmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VTcXVhcmVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCBtYXJyID0gbWFrZU1lcnNlbm5lTnVtYmVycyhtYXgpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIFN1OiBTdVxufTsiXSwic291cmNlUm9vdCI6IiJ9