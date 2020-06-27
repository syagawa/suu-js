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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9jb3JlLmpzIiwid2VicGFjazovL3N1YXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3VhcHAvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL3N1YXBwLy4vc3UuanMiXSwibmFtZXMiOlsiTUFYIiwiTUlOIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJjb3JlIiwiaXNOdW1iZXIiLCJuIiwiTnVtYmVyIiwiaXNOYU4iLCJOYU4iLCJpc1plcm8iLCJudW1Ub0FycmF5IiwiYXJyIiwic3RyIiwiU3RyaW5nIiwibGVuIiwibGVuZ3RoIiwiaSIsImVsbSIsInNsaWNlIiwiRXJyb3IiLCJwdXNoIiwiaXNOdW1BcnJheSIsIkFycmF5IiwiZ2xvYmFsIiwicyIsInNlbGYiLCJjb25zdGFudHMiLCJTdSIsIm9wdGlvbiIsIm5lZ2F0aXZlIiwicGFydHMiLCJzcGxpdCIsImludF9zdHIiLCJkZWNpbWFsX3N0ciIsImludDAiLCJtYXRjaCIsIm5ld19pbnRfc3RyIiwic3RhcnRfemVybyIsImRlYzAiLCJlbmRfemVybyIsIm5ld19kZWNpbWFsX3N0ciIsImludF9hcnIiLCJkZWNpbWFsX2FyciIsImUiLCJpbnRlZ2VyIiwiZGVjaW1hbCIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJtYWtlU3UiLCJudW0iLCJyZXMiLCJtZXNzYWdlIiwiaXNTdSIsInN1IiwiY29weVN1IiwiZ2V0U3RyaW5nIiwiQ09OU1RBTlRTIiwiWkVSTyIsIk9ORSIsIkZJUlNUX1BSSU1FX05VTUJFUiIsInByb3RvdHlwZSIsImpvaW4iLCJhYyIsInJlZHVjZSIsImEiLCJnZXROdW1iZXIiLCJnZXRJbnRlZ2VyIiwiZ2V0RGVjaW1hbCIsImNsb25lIiwiZ2V0TGFyZ2UiLCJiIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJlbG1fYSIsImVsbV9iIiwiaXNFcXVhbCIsImlfYSIsImlfYiIsImRfYSIsImRfYiIsImxhcmdlIiwiY29udGFpbkRlY2ltYWwiLCJpc09uZSIsImlzTGFyZ2UiLCJpc1NtYWxsIiwiaXNJbnRlZ2VyIiwiaXNOYXR1cmFsTnVtYmVyIiwiaXNQb3NpdGl2ZSIsImlzTmVnYXRpdmUiLCJ2IiwiYWRkIiwibWFrZVBvc2l0aXZlIiwic3VidHJhY3QiLCJpbnRfYSIsImRlY19hIiwiaW50X2IiLCJkZWNfYiIsImxlbl9pIiwibGVuX2QiLCJvdmVyIiwiaW50X3JlcyIsImRlY19yZXMiLCJfcmVzIiwidW5zaGlmdCIsImQiLCJwb3AiLCJnYXAiLCJyZXN1bHQiLCJuZWdhdGUiLCJhX2lkIiwiYl9pZCIsImFfaV9sZW4iLCJiX2lfbGVuIiwiYV9kX2xlbiIsImJfZF9sZW4iLCJkX2dhcCIsIk1hdGgiLCJhYnMiLCJkZWJ0IiwicmVzX2FycmF5IiwiYV9lbG0iLCJiX2VsbSIsInNwbGljZSIsIm1pbnVzIiwibnVtYmVyIiwibmV2YXRpdmUiLCJtYWtlTmVnYXRpdmUiLCJtdWx0aXBsaWNhdGlvbiIsImRwX2EiLCJkcF9iIiwicmVzX2FyciIsInBvc19hIiwicG9zX2IiLCJwb3MiLCJwYWRFbmQiLCJwYWRTdGFydCIsImRpdmlzaW9uIiwiY291bnQiLCJzdW0iLCJyZW1haW4iLCJyZW1haW5kZXIiLCJwbHVzIiwidGFzdSIsImhpa3UiLCJtdWx0aXBseSIsImtha2VydSIsIndhcnUiLCJuZXh0IiwicHJldiIsImlzRXZlbk51bWJlciIsImlzT2RkTnVtYmVyIiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImFycl9hIiwiYXJyX2IiLCJkaXZzIiwiaiIsImdldE1heENvbW1vbkRpdmlzb3IiLCJtdWx0aXBsZSIsImdldExlYXN0Q29tbW9uTXVsdGlwbGUiLCJtYXhDb21tb25EaXZpc29yIiwibXVsdGkiLCJtYWtlRmlib25hY2NpU2VxdWVuY2UiLCJmdW5jIiwiYyIsIm1ha2VMdWNhc1NlcXVlbmNlIiwiaXNGaWJvbmFjY2lOdW1iZXIiLCJ6ZXJvIiwib25lIiwiZmlicyIsImYiLCJpc0x1Y2FzTnVtYmVyIiwibHVjcyIsIm1ha2VTZXF1ZW5jZSIsImZpcnN0Iiwib3RoZXJzIiwiYXJyYXkiLCJnZXRTZXF1ZW5jZSIsImFyZ3VtZW50cyIsInN1bW1hdGlvbiIsImluZmluaXRlUHJvZHVjdCIsImlwIiwiZGlnaXRzdW0iLCJzcXVhcmUiLCJleHBvbmVudGlhdGUiLCJjdWJlIiwiaXNQcmltZU51bWJlciIsImNvdW50ZXIiLCJkaXZpc29yc1N1bW1hdGlvbiIsImlzQWJ1bmRhbnROdW1iZXIiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsIm1ha2VQb2x5Z29uYWxOdW1iZXJzIiwibWF4IiwiY3VycmVudCIsInJhbmdlIiwiaW5jcmVtZW50IiwibWFrZVRyaWFuZ2xlTnVtYmVycyIsIm1ha2VTcXVhcmVOdW1iZXJzIiwiaXNUcmlhbmdsZU51bWJlciIsImZpbmQiLCJpc1NxdWFyZU51bWJlciIsIm1ha2VNZXJzZW5uZU51bWJlcnMiLCJ0d28iLCJleCIsIm1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyIsIm1hcnIiLCJpc01lcnNlbm5lTnVtYmVyIiwibXMiLCJtIiwiaXNNZXJzZW5uZVByaW1lTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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TixDQUFDLEdBQUcsSUFBVjs7QUFDQSxNQUFHQSxDQUFDLENBQUNJLE1BQUYsRUFBSCxFQUFjO0FBQ1osV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBR0osQ0FBQyxDQUFDZ0YsY0FBRixFQUFILEVBQXNCO0FBQ3BCLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU1nSSxFQUFFLEdBQUdILHdCQUF3QixDQUFDN00sQ0FBRCxDQUFuQzs7QUFDQSxPQUFJLElBQUlXLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR3FNLEVBQUUsQ0FBQ3RNLE1BQXRCLEVBQThCQyxDQUFDLEVBQS9CLEVBQWtDO0FBQ2hDLFFBQUlzTSxDQUFDLEdBQUdELEVBQUUsQ0FBQ3JNLENBQUQsQ0FBVjs7QUFDQSxRQUFHc00sQ0FBQyxDQUFDdkksT0FBRixDQUFVMUUsQ0FBVixDQUFILEVBQWdCO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQWhCRDs7QUFtQmU7QUFDYjZDLFFBQU0sRUFBRUEsTUFESztBQUViTSxRQUFNLEVBQUVBLE1BRks7QUFHYkYsTUFBSSxFQUFFQSxJQUhPO0FBSWIzQixJQUFFLEVBQUVBO0FBSlMsQ0FBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn1cbiIsImNvbnN0IGNvcmUgPSB7fTtcblxuY29yZS5pc051bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvcmUuaXNaZXJvID0gZnVuY3Rpb24obil7XG4gIGlmKCBuID09PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLy8g6YWN5YiX44Gn44Gu6KiI566XXG5jb3JlLm51bVRvQXJyYXkgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBOdW1iZXIoc3RyLnNsaWNlKGksIGkgKyAxKSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIpO1xuICAgIH1cbiAgICBhcnIucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb3JlLmlzTnVtQXJyYXkgPSBmdW5jdGlvbihhcnIpe1xuICBpZiggYXJyIGluc3RhbmNlb2YgQXJyYXkgKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKCAhdGhpcy5pc051bWJlcihhcnJbaV0pICl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCJpbXBvcnQgcyBmcm9tIFwiLi9zdS5qc1wiO1xuXG4oZnVuY3Rpb24oZ2xvYmFsLCBzKXtcbiAgZ2xvYmFsLnMgPSBzO1xufSkoZ2xvYmFsIHx8IHNlbGYsIHMpOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuY29uc3QgTUFYID0gY29uc3RhbnRzLk1BWDtcbmNvbnN0IE1JTiA9IGNvbnN0YW50cy5NSU47XG5jb25zdCBEQlogPSBjb25zdGFudHMuREJaO1xuY29uc3QgTkFOID0gY29uc3RhbnRzLk5BTjtcbmNvbnN0IE5PVFNVID0gY29uc3RhbnRzLk5PVFNVO1xuXG5cbmNvbnN0IFN1ID0gZnVuY3Rpb24obiwgb3B0aW9uKXtcbiAgaWYoaXNOYU4obikpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG4gIGlmKCFuKXtcbiAgICBuID0gMDtcbiAgfVxuICBpZighb3B0aW9uKXtcbiAgICBvcHRpb24gPSB7fTtcbiAgfVxuXG4gIGxldCBzdHIgPSBTdHJpbmcobik7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKHN0clswXSA9PT0gXCItXCIpe1xuICAgIHN0ciA9IHN0ci5zbGljZSgxLCBzdHIubGVuZ3RoKTtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgaWYoIW5lZ2F0aXZlICYmIG9wdGlvbiAmJiBvcHRpb24ubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKGlzTmFOKE51bWJlcihzdHIpKSl7XG4gICAgc3RyID0gXCIwXCI7XG4gIH1cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IHN0ci5zcGxpdChcIi5cIik7XG4gIGxldCBpbnRfc3RyID0gcGFydHNbMF07XG4gIGxldCBkZWNpbWFsX3N0ciA9IHBhcnRzWzFdO1xuICBpZihpbnRfc3RyKXtcbiAgICBjb25zdCBpbnQwID0gaW50X3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihpbnQwICYmIGludDAubGVuZ3RoID09PSBpbnRfc3RyLmxlbmd0aCl7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBuZXdfaW50X3N0ciA9IFwiXCI7XG4gICAgbGV0IHN0YXJ0X3plcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPGludF9zdHIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoaW50X3N0cltpXSAhPT0gXCIwXCIgfHwgIXN0YXJ0X3plcm8pe1xuICAgICAgICBzdGFydF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19pbnRfc3RyICs9IGludF9zdHJbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfaW50X3N0cil7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBpbnRfc3RyID0gbmV3X2ludF9zdHI7XG4gICAgfVxuICB9XG5cbiAgaWYoZGVjaW1hbF9zdHIpe1xuICAgIGNvbnN0IGRlYzAgPSBkZWNpbWFsX3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihkZWMwICYmIGRlYzAubGVuZ3RoID09PSBkZWNpbWFsX3N0ci5sZW5ndGgpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IGVuZF96ZXJvID0gdHJ1ZTtcbiAgICBsZXQgbmV3X2RlY2ltYWxfc3RyID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSBkZWNpbWFsX3N0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICBpZihkZWNpbWFsX3N0cltpXSAhPT0gXCIwXCIgfHwgIWVuZF96ZXJvKXtcbiAgICAgICAgZW5kX3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2RlY2ltYWxfc3RyID0gZGVjaW1hbF9zdHJbaV0gKyBuZXdfZGVjaW1hbF9zdHI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfZGVjaW1hbF9zdHIpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGRlY2ltYWxfc3RyID0gbmV3X2RlY2ltYWxfc3RyO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGludF9hcnI7XG4gIGxldCBkZWNpbWFsX2FycjtcblxuXG4gIHRyeXtcbiAgICBpbnRfYXJyID0gY29yZS5udW1Ub0FycmF5KGludF9zdHIpO1xuICAgIGRlY2ltYWxfYXJyID0gZGVjaW1hbF9zdHIgPyBjb3JlLm51bVRvQXJyYXkoZGVjaW1hbF9zdHIpIDogWzBdO1xuICB9Y2F0Y2goZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cblxuICB0aGlzLmludGVnZXIgPSBpbnRfYXJyO1xuICB0aGlzLmRlY2ltYWwgPSBkZWNpbWFsX2FycjtcbiAgdGhpcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlID8gdHJ1ZSA6IGZhbHNlO1xuICBcbiAgbGV0IGRlbm9taW5hdG9yID0gWzFdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2ltYWwubGVuZ3RoOyBpKyspe1xuICAgIGRlbm9taW5hdG9yLnB1c2goMCk7XG4gIH1cblxuICB0aGlzLmZyYWN0aW9uID0ge1xuICAgIG51bWVyYXRvcjogdGhpcy5pbnRlZ2VyLmNvbmNhdCh0aGlzLmRlY2ltYWwpLFxuICAgIGRlbm9taW5hdG9yOiBkZW5vbWluYXRvclxuICB9O1xuXG59O1xuXG5jb25zdCBtYWtlU3UgPSBmdW5jdGlvbihudW0sIG9wdGlvbil7XG4gIGxldCByZXM7XG4gIHRyeXtcbiAgICByZXMgPSBuZXcgU3UobnVtLCBvcHRpb24pO1xuICB9Y2F0Y2goZSl7XG4gICAgcmVzID0gZS5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuY29uc3QgaXNTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoc3UgaW5zdGFuY2VvZiBTdSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGNvcHlTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgc3RyID0gc3UuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgWkVSTzogbWFrZVN1KDApLFxuICBPTkU6IG1ha2VTdSgxKSxcbiAgRklSU1RfUFJJTUVfTlVNQkVSOiBtYWtlU3UoMiksXG4gIE1BWDogbWFrZVN1KE1BWCksXG4gIE1JTjogbWFrZVN1KE1JTilcbn07XG5cblxuU3UucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdHIgPSBTdHJpbmcoIHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgY29uc3QgYWMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKChhLGUpID0+IGEgKyBlKTtcbiAgaWYoYWMgIT09IDApe1xuICAgIHN0ciArPSBcIi5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLm5lZ2F0aXZlID8gYC0ke3N0cn1gIDogc3RyO1xufTtcblxuU3UucHJvdG90eXBlLmdldE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmdldFN0cmluZygpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXREZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKFwiMC5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldExhcmdlID0gZnVuY3Rpb24oYSwgYiwgYWJzb2x1dGUgPSBmYWxzZSl7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGxldCBmaWVsZCA9IFtdO1xuXG4gIGNvbnN0IF9hID0gbWFrZVN1KGEuZ2V0U3RyaW5nKCkpO1xuICBjb25zdCBfYiA9IG1ha2VTdShiLmdldFN0cmluZygpKTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgX2EubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBfYi5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYoX2EuaXNaZXJvKCkgJiYgX2IuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmICFfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGI7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihfYS5pbnRlZ2VyLmxlbmd0aCA+IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLmludGVnZXIubGVuZ3RoIDwgX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBfYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBfYS5pbnRlZ2VyW2ldO1xuICAgIGxldCBlbG1fYiA9IF9iLmludGVnZXJbaV07XG4gICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIGNvbnN0IGxlbiA9IF9hLmRlY2ltYWwubGVuZ3RoID49IF9iLmRlY2ltYWwubGVuZ3RoID8gX2EuZGVjaW1hbC5sZW5ndGggOiBfYi5kZWNpbWFsLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGVsbV9hID0gX2EuZGVjaW1hbFtpXSA/IF9hLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgbGV0IGVsbV9iID0gX2IuZGVjaW1hbFtpXSA/IF9iLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZFswXTtcblxufTtcblxuXG5TdS5wcm90b3R5cGUuaXNFcXVhbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGEuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1NtYWxsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGIuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzUG9zaXRpdmUoKSAmJiB0aGlzLmlzSW50ZWdlcigpICYmIHRoaXMuaXNMYXJnZShDT05TVEFOVFMuWkVSTykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuY29udGFpbkRlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKGZ1bmN0aW9uKGEsIHYpe1xuICAgICAgcmV0dXJuIGEgKyB2O1xuICB9KTtcbiAgaWYocmVzID09PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGxldCBiID0gc3UuY2xvbmUoKTtcbiAgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgbmVnYXRpdmU7XG4gIGlmKGEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgYi5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYS5zdWJ0cmFjdChiKTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgYS5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYi5zdWJ0cmFjdChhKTtcbiAgfVxuXG4gIGxldCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmVzID0gYTtcbiAgfVxuICBsZXQgaW50X2EgPSByZXMuaW50ZWdlcjtcbiAgbGV0IGRlY19hID0gcmVzLmRlY2ltYWw7XG4gIGxldCBpbnRfYiwgZGVjX2I7XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgaW50X2IgPSBiLmludGVnZXI7XG4gICAgZGVjX2IgPSBiLmRlY2ltYWw7XG4gIH1lbHNle1xuICAgIGludF9iID0gYS5pbnRlZ2VyO1xuICAgIGRlY19iID0gYS5kZWNpbWFsO1xuICB9XG5cbiAgbGV0IGxlbl9pID0gaW50X2EubGVuZ3RoO1xuICBsZXQgbGVuX2QgPSBkZWNfYS5sZW5ndGg7XG5cbiAgaWYoZGVjX2IubGVuZ3RoID4gZGVjX2EubGVuZ3RoKXtcbiAgICBsZW5fZCA9IGRlY19iLmxlbmd0aDtcbiAgfVxuICBsZXQgb3ZlciA9IDAsXG4gICAgICBpbnRfcmVzID0gW10sXG4gICAgICBkZWNfcmVzID0gW107XG5cbiAgZm9yKGxldCBpID0gbGVuX2QgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gZGVjX2FbaV0gfHwgMDtcbiAgICBsZXQgZWxtX2IgPSBkZWNfYltpXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBkZWNfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cblxuICBmb3IobGV0IGkgPSBkZWNfcmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICl7XG4gICAgbGV0IGQgPSBkZWNfcmVzW2ldO1xuICAgIGlmKGQgPT09IDApe1xuICAgICAgZGVjX3Jlcy5wb3AoKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdhcCA9IGxlbl9pIC0gaW50X2IubGVuZ3RoO1xuICBmb3IobGV0IGkgPSBsZW5faSAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBpbnRfYVtpXTtcbiAgICBsZXQgZWxtX2IgPSBpbnRfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBpbnRfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGludF9yZXMudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShpbnRfcmVzLmpvaW4oXCJcIikgKyBcIi5cIiArIGRlY19yZXMuam9pbihcIlwiKSwge25lZ2F0aXZlOiBuZWdhdGl2ZX0pO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcblxuICBjb25zdCByZXN1bHQgPSAgbWFrZVN1KG1pbnVzICsgcmVzX2FycmF5LmpvaW4oXCJcIikpO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHRoaXMubmV2YXRpdmUgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZVBvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZU5lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuXG4gIGlmKGEuaXNaZXJvKCkgJiYgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIE5BTjtcbiAgfWVsc2UgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfWVsc2UgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIERCWjtcbiAgfVxuXG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gbWFrZVN1KDApO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICB3aGlsZShhLmlzTGFyZ2Uoc3VtKSB8fCBhLmlzRXF1YWwoc3VtKSl7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KDEpKTtcbiAgICBzdW0gPSBiLm11bHRpcGxpY2F0aW9uKGNvdW50KTtcbiAgfVxuXG4gIGNvdW50ID0gY291bnQuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgc3VtID0gc3VtLnN1YnRyYWN0KGIpO1xuICBjb25zdCByZW1haW4gPSBhLnN1YnRyYWN0KHN1bSk7XG4gIGNvbnN0IHJlcyA9IGNvdW50O1xuICByZXMucmVtYWluZGVyID0gcmVtYWluO1xuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuU3UucHJvdG90eXBlLnBsdXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUudGFzdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmhpa3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmtha2VydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLndhcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmRpdmlzaW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuYWRkKG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBcbiAgaWYoIHJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09kZE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIGlmKCAhcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldERpdmlzb3JzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IHRoaXMuaXNMYXJnZShtYWtlU3UoaSkpOyBpKyspe1xuICAgIGxldCBzdSA9IG1ha2VTdShpKTtcbiAgICBjb25zdCByZW1haW5kZXIgPSB0aGlzLmRpdmlzaW9uKHN1KS5yZW1haW5kZXI7XG4gICAgaWYocmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgYXJyLnB1c2godGhpcyk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0Q29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgbGV0IGEgPSB0aGlzO1xuICBsZXQgYiA9IHN1O1xuXG4gIGNvbnN0IGFycl9hID0gYS5nZXREaXZpc29ycygpO1xuICBpZihhLmlzRXF1YWwoYikpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IGIuZ2V0RGl2aXNvcnMoKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGVsbV9iID0gYXJyX2Jbal07XG4gICAgICBpZihlbG1fYS5pc0VxdWFsKGVsbV9iKSl7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cbiAgY29uc3QgYXJyID0gdGhpcy5nZXRDb21tb25EaXZpc29ycyhzdSk7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGNvdW50ID0gbWFrZVN1KFwiMVwiKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSB8fCBjb3VudC5pc0VxdWFsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBhcnIucHVzaCh0aGlzLm11bHRpcGxpY2F0aW9uKGNvdW50KSk7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KFwiMVwiKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRMZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG5cbiAgY29uc3QgbWF4Q29tbW9uRGl2aXNvciA9IGEuZ2V0TWF4Q29tbW9uRGl2aXNvcihiKTtcblxuICBjb25zdCBtdWx0aSA9IGEubXVsdGlwbHkoYik7XG5cbiAgY29uc3QgcmVzID0gbXVsdGkuZGl2aXNpb24obWF4Q29tbW9uRGl2aXNvcik7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuXG5jb25zdCBtYWtlRmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihhLCBiKXtcblxuICBpZighaXNTdShhKSB8fCAhaXNTdShiKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbYSwgYl07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuXG5jb25zdCBtYWtlTHVjYXNTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlRmlib25hY2NpU2VxdWVuY2UobWFrZVN1KDIpLCBtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuXG4gIGNvbnN0IGZpYnMgPSBtYWtlRmlib25hY2NpU2VxdWVuY2UoemVybywgb25lKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGZpYnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gZmlic1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0x1Y2FzTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGx1Y3MgPSBtYWtlTHVjYXNTZXF1ZW5jZSgpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbHVjcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBsdWNzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5jb25zdCBtYWtlU2VxdWVuY2UgPSBmdW5jdGlvbihmaXJzdCwgb3RoZXJzKXtcbiAgY29uc3QgYXJyYXkgPSBbZmlyc3RdO1xuICBpZighb3RoZXJzKXtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgZm9yKGxldCBpID0gMDsgaSA8IG90aGVycy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbSA9IG90aGVyc1tpXTtcbiAgICBpZighaXNTdShlbG0pKXtcbiAgICAgIGVsbSA9IG1ha2VTdShlbG0pO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5TdS5wcm90b3R5cGUuZ2V0U2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIHN1bSA9IHN1bS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xuICBsZXQgaXAgPSBhcnJbMF07XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGlwID0gaXAubXVsdGlwbGljYXRpb24oYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5TdS5wcm90b3R5cGUuZGlnaXRzdW0gPSBmdW5jdGlvbigpe1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYSA9IG1ha2VTdSh0aGlzLmludGVnZXJbaV0pO1xuICAgIHN1bSA9IHN1bS5hZGQoYSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDIpKTtcbn07XG5cblN1LnByb3RvdHlwZS5jdWJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgzKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBvbmUgPSBtYWtlU3UoXCIxXCIpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuICBpZihzdS5pc0VxdWFsKG9uZSkpe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGxldCBjb3VudCA9IG9uZTtcbiAgbGV0IHJlcyA9IGNvcHlTdSh0aGlzKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChzdSkpe1xuICAgIHJlcyA9IHRoaXMubXVsdGlwbGljYXRpb24ocmVzKTtcbiAgICBjb3VudCA9IGNvdW50Lm5leHQoKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuU3UucHJvdG90eXBlLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmlzT25lKCkgfHwgdGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMlwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2Uob25lKSl7XG4gICAgbGV0IGUgPSB0aGlzLmRpdmlzaW9uKGNvdW50ZXIpO1xuICAgIGlmKGUucmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0RGl2aXNvcnMoKTtcbiAgbGV0IGEgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgPSBhLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuU3UucHJvdG90eXBlLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc0xhcmdlKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNEZWZpY2llbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc1NtYWxsKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQZXJmZWN0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uc3VidHJhY3QodGhpcykuaXNFcXVhbCh0aGlzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmZhY3RvcmlhbCA9IGZ1bmN0aW9uKCl7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKHplcm8pKXtcbiAgICByZXMgPSByZXMubXVsdGlwbGljYXRpb24oY291bnRlcik7XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuY29uc3QgbWFrZVBvbHlnb25hbE51bWJlcnMgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighaXNTdShuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKG4uaXNTbWFsbChtYWtlU3UoMykpKXtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgcmFuZ2UgPSBjdXJyZW50O1xuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBpbmNyZW1lbnQgPSBuLnN1YnRyYWN0KG1ha2VTdSgyKSk7XG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChtYXgpKXtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICByYW5nZSA9IHJhbmdlLmFkZChpbmNyZW1lbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LmFkZChyYW5nZSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IG1ha2VUcmlhbmdsZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICByZXR1cm4gbWFrZVBvbHlnb25hbE51bWJlcnMobWFrZVN1KDMpLCBtYXgpO1xufTtcblxuY29uc3QgbWFrZVNxdWFyZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICByZXR1cm4gbWFrZVBvbHlnb25hbE51bWJlcnMobWFrZVN1KDQpLCBtYXgpO1xufTtcblxuU3UucHJvdG90eXBlLmlzVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VUcmlhbmdsZU51bWJlcnMoc3UpO1xuICBjb25zdCByZXMgPSBhcnIuZmluZChlbG0gPT57XG4gICAgcmV0dXJuIGVsbS5pc0VxdWFsKHN1KTtcbiAgfSk7XG4gIGlmKHJlcyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzU3F1YXJlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3UgPSB0aGlzO1xuICBjb25zdCBhcnIgPSBtYWtlU3F1YXJlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBtYWtlTWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCB0d28gPSBtYWtlU3UoMik7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY3VycmVudCA9IG1ha2VTdSgwKTtcbiAgbGV0IGV4ID0gbWFrZVN1KDEpO1xuICBcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGN1cnJlbnQgPSB0d28uZXhwb25lbnRpYXRlKGV4KS5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gZXguYWRkKG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cbiAgY29uc3QgbWFyciA9IG1ha2VNZXJzZW5uZU51bWJlcnMobWF4KTtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBuID0gbWFycltpXTtcbiAgICBpZihuLmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChuKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IG1ha2VNZXJzZW5uZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzKG4pO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWFrZVN1OiBtYWtlU3UsXG4gIGNvcHlTdTogY29weVN1LFxuICBpc1N1OiBpc1N1LFxuICBTdTogU3Vcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==