(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["su"] = factory();
	else
		root["su"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    MAX: 10000,
    MIN: -10000,
    DBZ: "Division by Zero",
    NAN: "Not a number",
    NOTSU: "Argument is not Su."
};


/***/ }),

/***/ "./core.ts":
/*!*****************!*\
  !*** ./core.ts ***!
  \*****************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var core = {};
var settings = {
    calculation_modes: ["suu", "js"],
    calculation_mode: 0,
};
core.changeCalculationMode = function (mode) {
    if (!mode) {
        return;
    }
    var index = settings.calculation_modes.findIndex(function (m) { return m === mode; });
    if (index >= 0) {
        settings.calculation_mode = index;
    }
};
core.getCalculationMode = function () {
    var m = settings.calculation_modes[settings.calculation_mode];
    return m;
};
core.makeError = function (o) {
    var error = new Error();
    try {
        var v = o.variable ? o.variable.toString() : "";
        var p = o.parameter ? o.parameter.toString() : "";
        var str = o.message;
        if (v) {
            str = "".concat(str, ", ").concat(v ? v : "");
        }
        if (p) {
            str = "".concat(str, ", ").concat(p ? p : "");
        }
        error = new Error(str);
    }
    catch (e) {
        if (e instanceof Error) {
            error = e;
        }
    }
    finally {
        return error;
    }
};
var isNumber = function (n) {
    if (typeof n === "number") {
        if (Number.isNaN(n)) {
            return false;
        }
        else {
            return true;
        }
    }
    return false;
};
core.isSuuNumber = function (n) {
    if (n.is_num_array) {
        return true;
    }
    return false;
};
core.moldNumArray = function (_a) {
    var array = _a.array, negative = _a.negative, decimal_index = _a.decimal_index;
    if (!array) {
        return core.makeError({ message: "Array is not exists", patameter: array });
    }
    if (typeof decimal_index !== "number" || isNaN(decimal_index)) {
        return core.makeError({ message: "decimal_index is not a number", patameter: decimal_index });
    }
    try {
        while (decimal_index < array.length && array[array.length - 1] === 0) {
            array.pop();
        }
        while (decimal_index > 1 && array[0] === 0) {
            array.shift();
            decimal_index--;
        }
        if (array.length === 0) {
            array.push(0);
            decimal_index = 1;
        }
        var o = {
            array: array,
            negative: !!negative,
            is_num_array: true,
            decimal_index: decimal_index,
            getJSNumber: function () {
                return Number(core.numArrayToString(this));
            },
            getString: function () {
                return core.numArrayToString(this);
            }
        };
        if (decimal_index === 0 || decimal_index > 0) {
            o.decimal_index = decimal_index;
        }
        else {
            o.decimal_index = array.length;
        }
        return o;
    }
    catch (e) {
        if (e instanceof Error) {
            return core.makeError({ message: e.message, parameter: array });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: array });
        }
    }
};
core.numToArrayWithDecimal = function (n) {
    if (!n && n !== 0) {
        return core.makeError({ message: "Parameter is undefined, null, or empty.", parameter: n });
    }
    if (n.is_num_array) {
        return core.clone(n);
    }
    if (typeof n === "object") {
        return core.makeError({ message: "Parameter is object.", parameter: n });
    }
    var str = String(n);
    var negative = false;
    while (str && str[0].match(/^-/)) {
        str = str.replace(/^-/, "");
        negative = !negative;
    }
    var dec_index;
    var res = str.match(/\./g);
    if (res && res.length > 1) {
        return core.makeError({ message: "2 or more decimal points", parameter: n });
    }
    if (res && res.length === 1) {
        var res1 = str.match(/\./);
        var first_index = res1 === null || res1 === void 0 ? void 0 : res1.index;
        dec_index = first_index;
        str = str.replace(/\./, "");
    }
    else {
        dec_index = str.length;
    }
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var num = Number(str[i]);
        if (!isNumber(num)) {
            return core.makeError({ message: "This method has been called with incorrect parameters", parameter: num });
        }
        arr.push(num);
    }
    return core.moldNumArray({ array: arr, negative: negative, decimal_index: dec_index });
};
core.numArrayToString = function (n) {
    if (!n.is_num_array || !n.array || !n.decimal_index) {
        return "";
    }
    try {
        var arr = __spreadArray([], n.array, true);
        arr.splice(n.decimal_index, 0, ".");
        var str = arr.join("");
        if (n.negative) {
            str = "-".concat(str);
        }
        return str.replace(/\.$/, "");
    }
    catch (err) {
        if (err instanceof Error) {
            return core.makeError({ message: err.message, parameter: n });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: n });
        }
    }
};
core.compare = function (a, b) {
    try {
        if (!a && a !== 0) {
            return core.makeError({ message: "Parameters are undefined, null, or empty.", parameter: [a, b] });
        }
        else if (!b && b !== 0) {
            return core.makeError({ message: "Parameters are undefined, null, or empty.", parameter: [a, b] });
        }
        var o = {
            small: null,
            large: null,
            equal: false
        };
        var a_ = a;
        var b_ = b;
        if (!a_.is_num_array) {
            a_ = core.numToArrayWithDecimal(a_);
            if (!a_) {
                return o;
            }
        }
        if (!b_.is_num_array) {
            b_ = core.numToArrayWithDecimal(b_);
            if (!b_) {
                return o;
            }
        }
        var a_array = a_.array;
        var b_array = b_.array;
        var a_len = a_array.length;
        var b_len = b_array.length;
        var a_str = a_array.join("");
        var b_str = b_array.join("");
        var a_int_len = a_.decimal_index;
        var b_int_len = b_.decimal_index;
        var a_dec_len = a_len - a_int_len;
        var b_dec_len = b_len - b_int_len;
        if (a_len === 1 && a_str === "0" && b_len === 1 && b_str === "0") {
            o.equal = true;
            return o;
        }
        if (!a_.negative && b_.negative) {
            o.small = b_;
            o.large = a_;
            return o;
        }
        if (a_.negative && !b_.negative) {
            o.small = a_;
            o.large = b_;
            return o;
        }
        var negative = a_.negative;
        var o_a_b = {
            large: negative ? b_ : a_,
            small: negative ? a_ : b_,
            equal: false,
        };
        var o_b_a = {
            large: negative ? a_ : b_,
            small: negative ? b_ : a_,
            equal: false
        };
        if (a_int_len > b_int_len) {
            return o_a_b;
        }
        if (a_int_len < b_int_len) {
            return o_b_a;
        }
        for (var i = 0; i < a_int_len; i++) {
            if (a_array[i] > b_array[i]) {
                return o_a_b;
            }
            if (a_array[i] < b_array[i]) {
                return o_b_a;
            }
        }
        var dec_len = a_dec_len > b_dec_len ? a_dec_len : b_dec_len;
        for (var i = 0; i < dec_len; i++) {
            var aa = a_array[a_int_len + i] ? a_array[a_int_len + i] : 0;
            var bb = b_array[b_int_len + i] ? b_array[b_int_len + i] : 0;
            if (aa > bb) {
                return o_a_b;
            }
            if (aa < bb) {
                return o_b_a;
            }
        }
        o.equal = true;
        return o;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.getLarge = function (a, b) {
    return core.compare(a, b).large;
};
core.getSmall = function (a, b) {
    return core.compare(a, b).small;
};
core.isEqual = function (a, b) {
    var res = core.compare(a, b);
    if (res.equal) {
        return true;
    }
    return false;
};
core.isSmall = function (a, b) {
    return core.isEqual(core.getSmall(a, b), a);
};
core.isLarge = function (a, b) {
    return core.isEqual(core.getLarge(a, b), a);
};
core.isZero = function (n) {
    if (!n) {
        return false;
    }
    if (!n.is_num_array) {
        return false;
    }
    var zero = core.getZero();
    return core.isEqual(zero, n);
};
core.isOne = function (n) {
    if (!n) {
        return false;
    }
    if (!n.is_num_array) {
        return false;
    }
    var one = core.getOne();
    if (core.isEqual(one, n)) {
        return true;
    }
    else {
        return false;
    }
};
core.getZero = function () {
    return core.numToArrayWithDecimal("0");
};
core.getOne = function () {
    return core.numToArrayWithDecimal("1");
};
core.fixCarry = function (arr, minus) {
    try {
        var minus_ = minus;
        for (var i = arr.length - 1; i >= 0; i--) {
            var elm = arr[i];
            if (elm < 0) {
                minus_ = true;
                break;
            }
            else if (elm === 0) {
                continue;
            }
            else {
                break;
            }
        }
        if (minus_) {
            var cache_1 = [];
            arr.forEach(function (elm) {
                cache_1.push(-elm);
            });
            arr = cache_1;
        }
        var new_arr = [];
        var carry = 0;
        for (var i = 0; i < arr.length; i++) {
            var val = Number(arr[i] + carry);
            if (val > 9) {
                var arr1 = String(val).split("");
                val = Number(arr1[arr1.length - 1]);
                var arr2 = arr1.slice(0, arr1.length - 1);
                carry = Number(arr2.join(""));
            }
            else if (val >= 0 && val <= 9) {
                carry = 0;
            }
            else {
                val = 10 + val;
                carry = -1;
            }
            new_arr.push(val);
        }
        if (carry !== 0) {
            new_arr.push(carry);
        }
        return {
            new_array: new_arr,
            minus: minus_
        };
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [arr, minus] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [arr, minus] });
        }
    }
};
core.clone = function (n) {
    try {
        if (!n) {
            return core.makeError({ message: "Parameter is not exists", parameter: n });
        }
        if (!n.is_num_array) {
            return core.makeError({ message: "Parameter is not compatible", parameter: n });
        }
        var o = __assign(__assign({}, n), { array: __spreadArray([], n.array, true) });
        return o;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [n] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [n] });
        }
    }
};
var add_and_subtract_js = function (a, b, mode) {
    if (!a || !b) {
        if (a !== 0 && b !== 0) {
            return core.makeError({ message: "Parameters are must be a Number or a String.", parameter: [a, b] });
        }
    }
    var plus;
    if (!mode) {
        return core.makeError({ message: "Parameters mode is required", parameter: [a, b, mode] });
        ;
    }
    else if (mode === "+") {
        plus = true;
    }
    else if (mode === "-") {
        plus = false;
    }
    else {
        return core.makeError({ message: "mode must be '+' or '-'.", parameter: mode });
    }
    try {
        var a_s = core.numArrayToString(a);
        var b_s = core.numArrayToString(b);
        var a_n = Number(a_s);
        var b_n = Number(b_s);
        if (plus) {
            return a_n + b_n;
        }
        else {
            return a_n - b_n;
        }
    }
    catch (err) {
        return core.makeError({ message: err.message, parameter: [a, b, mode] });
    }
};
core.add_and_subtract = function (a, b, mode) {
    if (!a || !b) {
        if (a !== 0 && b !== 0) {
            return core.makeError({ message: "Parameters are must be a Number or a String.", parameter: [a, b] });
        }
    }
    if (core.getCalculationMode() === "js") {
        return add_and_subtract_js(a, b, mode);
    }
    var plus;
    if (!mode) {
        return core.makeError({ message: "Parameters mode is required", parameter: [a, b, mode] });
        ;
    }
    else if (mode === "+") {
        plus = true;
    }
    else if (mode === "-") {
        plus = false;
    }
    else {
        return core.makeError({ message: "mode must be '+' or '-'.", parameter: mode });
    }
    try {
        var a_ = core.getZero();
        var b_ = core.getZero();
        if (a.is_num_array) {
            a_ = core.clone(a);
        }
        else {
            a_ = core.numToArrayWithDecimal(a ? a : 0);
        }
        if (b.is_num_array) {
            b_ = core.clone(b);
        }
        else {
            b_ = core.numToArrayWithDecimal(b ? b : 0);
        }
        var a_arr = a_.array;
        var b_arr = b_.array;
        var a_is_zero = core.isZero(a_);
        var b_is_zero = core.isZero(b_);
        if (a_is_zero && b_is_zero) {
            return a_;
        }
        else if (a_is_zero) {
            if (!plus) {
                b_.negative = !b_.negative;
            }
            return b_;
        }
        else if (b_is_zero) {
            return a_;
        }
        var a_dec_length = a_.array.length - a_.decimal_index;
        var b_dec_length = b_.array.length - b_.decimal_index;
        var dec_gap = a_dec_length - b_dec_length;
        if (dec_gap > 0) {
            b_arr.push.apply(b_arr, Array(dec_gap).fill(0));
        }
        else if (dec_gap < 0) {
            a_arr.push.apply(a_arr, Array(Math.abs(dec_gap)).fill(0));
        }
        var calc = function (_a) {
            var a = _a.a, b = _a.b, plus = _a.plus;
            var arr = [];
            var len = a.array.length;
            if (a.array.length < b.array.length) {
                len = b.array.length;
            }
            var arr_a = a.array;
            var arr_b = b.array;
            var a_one = a.negative ? -1 : 1;
            var b_one = b.negative ? -1 : 1;
            for (var i = 0; i < len; i++) {
                var aa = arr_a[i] ? arr_a[i] * a_one : 0;
                var bb = arr_b[i] ? arr_b[i] * b_one : 0;
                var res = plus ? aa + bb : aa - bb;
                arr.push(res);
            }
            return core.fixCarry(arr);
        };
        var _a = calc({
            a: {
                array: __spreadArray([], a_arr, true).reverse(),
                negative: a_.negative,
            },
            b: {
                array: __spreadArray([], b_arr, true).reverse(),
                negative: b_.negative
            },
            plus: plus
        }), new_array = _a.new_array, minus = _a.minus;
        var dec_length = a_dec_length >= b_dec_length ? a_dec_length : b_dec_length;
        var new_int_length = new_array.length - dec_length;
        var new_decimal_index = new_int_length;
        return core.moldNumArray({
            array: __spreadArray([], new_array, true).reverse(),
            negative: minus ? true : false,
            decimal_index: new_decimal_index
        });
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.add = function (a, b) {
    return core.add_and_subtract(a, b, "+");
};
core.subtract = function (a, b) {
    return core.add_and_subtract(a, b, "-");
};
var multiplication_js = function (a, b) {
    if (!a || !b) {
        if (a !== 0 && b !== 0) {
            return core.makeError({ message: "Parameters are must be a Number or a String.", parameter: [a, b] });
        }
    }
    try {
        var a_s = core.numArrayToString(a);
        var b_s = core.numArrayToString(b);
        var a_n = Number(a_s);
        var b_n = Number(b_s);
        return a_n * b_n;
    }
    catch (err) {
        return core.makeError({ message: err.message, parameter: [a, b] });
    }
};
core.multiplication = function (a, b) {
    if (!a || !b) {
        if (a !== 0 && b !== 0) {
            return core.makeError({ message: "Parameters are not exists", parameter: [a, b] });
        }
    }
    var a_ = core.getZero();
    var b_ = core.getZero();
    if (a.is_num_array) {
        a_ = core.clone(a);
    }
    else {
        a_ = core.numToArrayWithDecimal(a ? a : 0);
    }
    if (b.is_num_array) {
        b_ = core.clone(b);
    }
    else {
        b_ = core.numToArrayWithDecimal(b ? b : 0);
    }
    var a_arr = a_.array;
    var b_arr = b_.array;
    if (core.isZero(a_) || core.isZero(b_)) {
        return core.numToArrayWithDecimal("0");
    }
    if (core.isOne(a_)) {
        return b_;
    }
    if (core.isOne(b_)) {
        return a_;
    }
    try {
        var a_negative = a_.negative;
        var b_negative = b_.negative;
        var negative = void 0;
        if (a_negative && b_negative) {
            negative = false;
        }
        else if (a_negative || b_negative) {
            negative = true;
        }
        else {
            negative = false;
        }
        var a_dec_length = a_.array.length - a_.decimal_index;
        var b_dec_length = b_.array.length - b_.decimal_index;
        var dec_length = a_dec_length + b_dec_length;
        var calc = function (_a) {
            var a = _a.a, b = _a.b;
            var array = [];
            var arr_a = a.array;
            var arr_b = b.array;
            for (var i = 0; i < arr_a.length; i++) {
                var aa = arr_a[i] ? arr_a[i] : 0;
                var arr = new Array(i);
                arr.fill(0, 0, i);
                for (var j = 0; j < arr_b.length; j++) {
                    var bb = arr_b[j] ? arr_b[j] : 0;
                    var res = aa * bb;
                    arr.push(res);
                    var tgt_index = i + j;
                    var tgt = array[tgt_index];
                    if (!tgt) {
                        tgt = 0;
                    }
                    var new_tgt = tgt + res;
                    array[tgt_index] = new_tgt;
                }
            }
            return core.fixCarry(array);
        };
        var new_array = calc({
            a: {
                array: __spreadArray([], a_arr, true).reverse(),
                negative: a_.negative,
            },
            b: {
                array: __spreadArray([], b_arr, true).reverse(),
                negative: b_.negative
            },
        }).new_array;
        var new_decimal_index = new_array.length - dec_length;
        return core.moldNumArray({
            array: __spreadArray([], new_array, true).reverse(),
            negative: negative,
            decimal_index: new_decimal_index
        });
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.multiple = function (a, b) {
    return core.multiplication(a, b);
};
core.getDecimal = function (n) {
    try {
        var n_ = core.numToArrayWithDecimal(n);
        var str = "0.";
        var len = n_.array.length;
        if (len > 0) {
            for (var i = n_.decimal_index; i < len; i++) {
                var s = String(n_.array[i]);
                str = str + s;
            }
        }
        else {
            str = str + "0";
        }
        var num = core.numToArrayWithDecimal(str);
        return num;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: n });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: n });
        }
    }
};
core.division = function (a, b) {
    try {
        if (!a || !b) {
            if (a !== 0 && b !== 0) {
                return core.makeError({ message: "Parameters are not exists", parameter: [a, b] });
            }
        }
        var a_ = core.getZero();
        var b_ = core.getZero();
        if (a.is_num_array) {
            a_ = core.clone(a);
        }
        else {
            a_ = core.numToArrayWithDecimal(a ? a : 0);
        }
        if (b.is_num_array) {
            b_ = core.clone(b);
        }
        else {
            b_ = core.numToArrayWithDecimal(b ? b : 0);
        }
        if (core.isZero(b_)) {
            if (core.isLarge(a_, "0")) {
                return "Infinity";
            }
            else if (core.isSmall(a_, "0")) {
                return "Negative Infinity";
            }
            return "Not a Number";
        }
        if (core.isZero(a_)) {
            return __assign(__assign({}, core.getZero()), { remainder: core.getZero() });
        }
        if (core.isOne(b_)) {
            return __assign(__assign({}, a_), { remainder: core.getZero() });
        }
        if (core.isEqual(a_, b_)) {
            return __assign(__assign({}, core.getOne()), { remainder: core.getZero() });
        }
        var a_negative = a_.negative;
        var b_negative = b_.negative;
        if (a_.negative) {
            a_.negative = false;
        }
        if (b_.negative) {
            b_.negative = false;
        }
        var negative = void 0;
        if (a_negative && b_negative) {
            negative = false;
        }
        else if (a_negative || b_negative) {
            negative = true;
        }
        else {
            negative = false;
        }
        var calc = function (_a) {
            var a = _a.a, b = _a.b, max = _a.max;
            var result_arr = [];
            var remain = core.getZero();
            var a_ = core.clone(a);
            var b_ = core.clone(b);
            var decimal_index = a.decimal_index;
            var decimal_index_remain = decimal_index;
            var a_int = core.clone(a_);
            a_int.decimal_index = a_int.array.length;
            var a_zero_length = 0;
            var a_zero_res = a_.array.join("").match(/^0+/);
            if (a_zero_res && a_zero_res[0]) {
                a_zero_length = a_zero_res[0].length;
                a_int = core.numToArrayWithDecimal(a_int.array.slice(a_zero_length, a_int.array.length).join(""));
            }
            var b_int = core.clone(b_);
            b_int.decimal_index = b_int.array.length;
            var b_zero_length = 0;
            var b_zero_res = b_int.array.join("").match(/^0+/);
            if (b_zero_res && b_zero_res[0]) {
                b_zero_length = b_zero_res[0].length;
                b_int = core.numToArrayWithDecimal(b_int.array.slice(b_zero_length, b_int.array.length).join(""));
            }
            var zero_gap = a_zero_length - b_zero_length;
            var a_array = __spreadArray([], a_int.array, true);
            var a_decimal_length = a_.array.length - a_.decimal_index;
            var b_decimal_length = b_.array.length - b_.decimal_index;
            var decimal_gap = a_decimal_length - b_decimal_length;
            var times = Number(core.add(a_int.array.length, max).array.join(""));
            var a_len = a_int.array.length;
            var remain_is_decimal = false;
            var remain_arr = [0];
            var decimal_count = 0;
            var remain_and_a_len_gap = 0;
            for (var i = 0; i < times; i++) {
                var is_less = true;
                var count = core.getZero();
                var remain1 = core.multiplication(remain, "10");
                var remain2 = String(a_array.slice(i, i + 1).length === 1 ? a_array.slice(i, i + 1)[0] : "0");
                remain = core.add(remain1, remain2);
                remain_and_a_len_gap = remain.array.length - a_len;
                var product = core.getZero();
                if (i === a_len) {
                    decimal_index = i;
                    if (core.isZero(remain)) {
                        break;
                    }
                    else {
                        remain_is_decimal = true;
                        decimal_count = decimal_count++;
                    }
                }
                else if (i > a_len) {
                    decimal_count = decimal_count++;
                    if (core.isZero(remain)) {
                        break;
                    }
                }
                var max_count = max;
                while (is_less) {
                    count = core.add(count, "1");
                    if (core.isLarge(count, max_count)) {
                        is_less = false;
                        break;
                    }
                    var pre_product = product;
                    product = core.multiplication(b_int, count);
                    if (core.isEqual(remain, product)) {
                        is_less = false;
                        var result = count;
                        result_arr.push(result);
                        remain = core.subtract(remain, product);
                        break;
                    }
                    if (core.isLarge(product, remain)) {
                        is_less = false;
                        var result = core.subtract(count, "1");
                        result_arr.push(result);
                        remain = core.subtract(remain, pre_product);
                        if (remain_is_decimal) {
                            remain_arr.push(0);
                        }
                        break;
                    }
                }
            }
            remain_arr.push.apply(remain_arr, remain.array);
            var new_arr = result_arr.flatMap(function (e) { return e.array; });
            if (zero_gap > 0) {
                for (var i = 0; i < zero_gap; i++) {
                    new_arr.unshift(0);
                    decimal_index++;
                }
            }
            if (decimal_gap < 0) {
                for (var i = 0; i < Math.abs(decimal_gap); i++) {
                    new_arr.push(0);
                    decimal_index++;
                }
            }
            else if (decimal_gap > 0) {
                for (var i = 0; i < Math.abs(decimal_gap); i++) {
                    new_arr.unshift(0);
                }
            }
            if (remain_and_a_len_gap > 0) {
                for (var i = 0; i < remain_and_a_len_gap; i++) {
                    var tgt = remain_arr[0];
                    if (tgt === 0) {
                        remain_arr.shift();
                    }
                    else {
                        decimal_index_remain = decimal_index_remain - remain_and_a_len_gap;
                    }
                    remain_arr.push(0);
                }
            }
            else if (remain_and_a_len_gap < 0) {
                var len = Math.abs(remain_and_a_len_gap);
                var arr = Array(len).fill(0);
                remain_arr.unshift.apply(remain_arr, arr);
            }
            if (remain_is_decimal) {
                remain_arr = __spreadArray([], remain_arr, true);
            }
            return {
                new_array: new_arr,
                decimal_index: decimal_index,
                remain_array: remain_arr,
                remain_decimal_index: decimal_index_remain,
            };
        };
        var max_times_if_not_divisible = core.numToArrayWithDecimal("10");
        var _a = calc({ a: a_, b: b_, max: max_times_if_not_divisible }), new_array = _a.new_array, decimal_index = _a.decimal_index, remain_array = _a.remain_array, remain_decimal_index = _a.remain_decimal_index;
        var remainder = core.moldNumArray({
            array: __spreadArray([], remain_array, true),
            negative: negative,
            decimal_index: remain_decimal_index
        });
        var quotient = core.moldNumArray({
            array: __spreadArray([], new_array, true),
            negative: negative,
            decimal_index: decimal_index
        });
        return __assign(__assign({}, quotient), { remainder: remainder });
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.divide = function (a, b) {
    return core.division(a, b);
};
core.floor = function (num) {
    try {
        var n = core.numToArrayWithDecimal(num);
        var is_decimal = n.decimal_index < n.array.length;
        var dec = n.array.slice(n.decimal_index, n.array.length);
        var dec_n = core.numToArrayWithDecimal(dec.join(""));
        if (core.isZero(dec_n)) {
            return n;
        }
        var n_ = __assign(__assign({}, n), { array: n.array.slice(0, n.decimal_index) });
        if (n.negative && is_decimal) {
            n_ = core.subtract(n_, "1");
        }
        return n_;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: num });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: num });
        }
    }
};
core.ceil = function (num) {
    try {
        var n = core.numToArrayWithDecimal(num);
        var is_decimal = n.decimal_index < n.array.length;
        var dec = n.array.slice(n.decimal_index, n.array.length);
        var dec_n = core.numToArrayWithDecimal(dec.join(""));
        if (core.isZero(dec_n)) {
            return n;
        }
        var n_ = __assign(__assign({}, n), { array: n.array.slice(0, n.decimal_index) });
        if (!n.negative && is_decimal) {
            n_ = core.add(n_, "1");
        }
        return n_;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: num });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: num });
        }
    }
};
core.modulo = function (a, b) {
    try {
        if (!a || !b) {
            if (a !== 0 && b !== 0) {
                return core.makeError({ message: "Parameters are not exists", parameter: [a, b] });
            }
        }
        var a_ = core.getZero();
        var b_ = core.getZero();
        if (a.is_num_array) {
            a_ = core.clone(a);
        }
        else {
            a_ = core.numToArrayWithDecimal(a ? a : 0);
        }
        if (b.is_num_array) {
            b_ = core.clone(b);
        }
        else {
            b_ = core.numToArrayWithDecimal(b ? b : 0);
        }
        if (core.isZero(b_)) {
            if (core.isLarge(a_, "0")) {
                return "Infinity";
            }
            else if (core.isSmall(a_, "0")) {
                return "Negative Infinity";
            }
            return "Not a Number";
        }
        if (core.isZero(a_)) {
            return __assign(__assign({}, core.getZero()), { remainder: core.getZero() });
        }
        var a_posi = core.clone(a_);
        var b_posi = core.clone(b_);
        a_posi.negative = false;
        b_posi.negative = false;
        if (core.isLarge(b_posi, a_posi)) {
            var a_1 = core.numToArrayWithDecimal(a);
            return a_1;
        }
        if (core.isEqual(a_, b_)) {
            return __assign(__assign({}, core.getZero()), { remainder: core.getZero() });
        }
        var negative = void 0;
        if (a_.negative) {
            negative = true;
        }
        else {
            negative = false;
        }
        var calc = function (_a) {
            var a = _a.a, b = _a.b;
            var divided = core.divide(a, b);
            var floored = core.floor(divided);
            var multipled = core.multiple(b, floored);
            var res = core.subtract(a, multipled);
            return res;
        };
        var res = calc({ a: __assign(__assign({}, a_), { negative: false }), b: __assign(__assign({}, b_), { negative: false }) });
        var quotient = core.moldNumArray(__assign(__assign({}, res), { negative: negative }));
        return __assign({}, quotient);
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.getSuuNumber = function (n) {
    return core.numToArrayWithDecimal(n);
};
exports["default"] = core;


/***/ }),

/***/ "./doc.ts":
/*!****************!*\
  !*** ./doc.ts ***!
  \****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var core_1 = __webpack_require__(/*! ./core */ "./core.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./utils.ts");
var map = {
    add: {
        ja: "加算"
    },
    subtract: {
        ja: "減算"
    },
    multiplication: {
        ja: "乗算"
    },
    multiple: {
        ja: "乗算"
    },
    division: {
        ja: "除算"
    },
    divide: {
        ja: "除算"
    },
    floor: {
        ja: "切り捨て"
    },
    ceil: {
        ja: "切り上げ"
    },
    clone: {
        ja: "クローン/コピー"
    },
    copy: {
        ja: "クローン/コピー"
    },
    getLarge: {
        ja: "2つの引数のうち大きい方を取得"
    },
    getSmall: {
        ja: "2つの引数のうち小さい方を取得"
    },
    isLarge: {
        ja: "第一引数が第二引数より大きいか"
    },
    isSmall: {
        ja: "第一引数が第二引数より小さいか"
    },
    isEqual: {
        ja: "第一引数と第二引数が等しいか"
    },
    getZero: {
        ja: "0を取得"
    },
    getOne: {
        ja: "1を取得"
    },
    isZero: {
        ja: "0かどうか"
    },
    isOne: {
        ja: "1かどうか"
    },
    square: {
        ja: "平方数"
    },
    getAbsolute: {
        ja: "絶対値の取得"
    },
    exponentiate: {
        ja: "べき乗",
    },
    getInteger: {
        ja: "整数部を取得",
    },
    getDecimal: {
        ja: "小数部を取得",
    },
    isNaturalNumber: {
        ja: "自然数かどうか",
    },
    includeDecimal: {
        ja: "小数部を含むかどうか"
    },
    isNegative: {
        ja: "負数かどうか"
    },
    isPositive: {
        ja: "正数かどうか"
    },
    negate: {
        ja: "正数の場合負数にする"
    },
    makePositive: {
        ja: "負数の場合正数にする"
    },
    getNext: {
        ja: "整数1を追加した数を取得"
    },
    getPrev: {
        ja: "整数1を引いた数を取得"
    },
    isInteger: {
        ja: "整数かどうか"
    },
    isEvenNumber: {
        ja: "偶数かどうか"
    },
    isOddNumber: {
        ja: "奇数かどうか"
    },
    getDivisors: {
        ja: "約数の取得"
    },
    commonDivisors: {
        ja: "引数1と引数2の公約数の取得"
    },
    greatestCommonDivisor: {
        ja: "引数1と引数2の最大公約数の取得"
    },
    commonMultiple: {
        ja: "引数1と引数2の公倍数の取得"
    },
    leastCommonMultiple: {
        ja: "引数1と引数2の最小公倍数の取得"
    },
    makeFibonacciSequence: {
        ja: "フィボナッチ数列を作成"
    },
    makeLucaSequence: {
        ja: "リュカ数列を作成"
    },
    makeTribonacciSequence: {
        ja: "トリボナッチ数列を作成"
    },
    makeTetranacciSequence: {
        ja: "テトラナッチ数列を作成"
    },
    makePentanacciSequence: {
        ja: "ペンタナッチ数列を作成"
    },
    makeHexanacciSequence: {
        ja: "ヘキサナッチ数列を作成"
    },
    makeHeptanacciSequence: {
        ja: "ヘプタナッチ数列を作成"
    },
    makeOctanacciSequence: {
        ja: "オクタナッチ数列を作成"
    },
    makeNonanacciSequence: {
        ja: "ノナナッチ数列を作成"
    },
    makeDecanacciSequence: {
        ja: "デカナッチ数列を作成"
    },
    makeUndecanacciSequence: {
        ja: "ウンデカナッチ数列を作成"
    },
    makeDodecanacciSequence: {
        ja: "ドデカナッチ数列を作成"
    },
    makeIcosanacciSequence: {
        ja: "イコサナッチ数列を作成"
    },
    summation: {
        ja: "総和"
    },
    infiniteProduct: {
        ja: "総乗/総積"
    },
    digitSum: {
        ja: "数字和/各桁の総和"
    },
    makeTriangleNumber: {
        ja: "三角数の生成"
    },
    makePronicNumber: {
        ja: "矩形数の生成"
    },
    factorial: {
        ja: "階乗"
    },
    modulo: {
        ja: "剰余演算"
    },
    isMersenneNumber: {
        ja: "メルセンヌ数かどうか"
    },
    makeMersenneNumbers: {
        ja: "メルセンヌ数の生成"
    },
    isPrimeNumber: {
        ja: "素数かどうか"
    },
    makePrimeNumbers: {
        ja: "素数の生成"
    },
    isMersennePrimeNumber: {
        ja: "メルセンヌ素数かどうか"
    },
    isCompositeNumber: {
        ja: "合成数かどうか"
    },
    isHarshadNumber: {
        ja: "ハーシャッド数かどうか"
    },
    isZuckermanNumber: {
        ja: "ズッカーマン数かどうか"
    },
    isRepunitNumber: {
        ja: "レピュニット数かどうか"
    },
    getInversionNumber: {
        ja: "転倒数の取得"
    },
    getReciprocal: {
        ja: "逆数の取得"
    },
    getReverse: {
        ja: "数の逆順の取得"
    },
    getRandomNumberByLinearCongruentialGenerators: {
        ja: "線形合同法での疑似乱数取得"
    },
    getRandomNumberByMiddleSquareMethod: {
        ja: "平方採中法での疑似乱数取得"
    },
    getRandomNumberByLinearFeedbackShiftRegister: {
        ja: "線形帰還シフトレジスタによる疑似乱数取得"
    },
    isSophieGermainPrime: {
        ja: "ソフィージェルマン素数かどうか"
    },
    isSafePrime: {
        ja: "安全素数かどうか"
    },
    getFermatNumber: {
        ja: "フェルマー数の取得"
    },
    isFermatNumber: {
        ja: "フェルマー数かどうか"
    },
    isFermatPrime: {
        ja: "フェルマー素数かどうか"
    },
    getCullenNumber: {
        ja: "カレン数の取得"
    },
    isCullenNumber: {
        ja: "カレン数かどうか"
    },
    isCullenPrime: {
        ja: "カレン素数かどうか"
    },
    getProthNumber: {
        ja: "プロス数の取得"
    },
    makeProthNumbers: {
        ja: "プロス数の生成"
    },
    isProthNumber: {
        ja: "プロス数かどうか"
    },
    isProthPrime: {
        ja: "プロス素数かどうか"
    },
    makePierpontNumber: {
        ja: "ピアポント数の生成"
    },
    makePierpontPrimes: {
        ja: "ピアポント素数の生成"
    },
    isPierpontPrime: {
        ja: "ピアポント素数かどうか"
    },
};
var whatIs = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "" : _b, _c = _a.lang, lang = _c === void 0 ? "ja" : _c;
    if (!name) {
        return "";
    }
    var target = utils_1.default[name];
    if (!target) {
        target = core_1.default[name];
    }
    var exists = target ? true : false;
    if (!exists) {
        return "";
    }
    var res = map[name];
    if (res && res[lang]) {
        return res[lang];
    }
    var other_lang = Object.keys(res)[0];
    if (other_lang) {
        return res[other_lang];
    }
    return "";
};
exports["default"] = whatIs;


/***/ }),

/***/ "./random.ts":
/*!*******************!*\
  !*** ./random.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var core_1 = __webpack_require__(/*! ./core */ "./core.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./utils.ts");
var random = {};
var seeds = {};
var getSeed = function (name) {
    return seeds[name];
};
var setSeed = function (seed, name) {
    seeds[name] = seed;
};
var getOrSetSeed = function (seed, name) {
    if (seed) {
        seeds[name] = seed;
    }
    else {
        seed = seeds[name];
    }
    return seed;
};
var register1 = 0x1111;
var register2 = 0x1111;
var lfsr = function (seed) {
    console.log("register", register1.toString(2));
    if (seed) {
        console.log("seed", seed.toString(2));
        register1 = 0xffff & seed;
        register2 = 0xffff & seed;
        console.log("register1", register1.toString(2));
        console.log("register2", register2.toString(2));
    }
    var bit1 = seed & 0xffff;
    var bit2 = seed & 0xffff;
    console.log("bit", bit1.toString(2));
    var res1 = (register1 & 0x0001);
    console.log("res1", res1.toString(2));
    var res2 = res1 ^ ((register1 & 0x0004) >> 2);
    console.log("res2", res2.toString(2));
    var res3 = res2 ^ ((register1 & 0x0008) >> 3);
    console.log("res3", res3.toString(2));
    bit1 = res3 ^ ((register1 & 0x0020) >> 5);
    console.log("bit", bit1.toString(2));
    bit2 = (register2 & 0x0001) ^
        ((register2 & 0x0004) >> 2) ^
        ((register2 & 0x0008) >> 3) ^
        ((register2 & 0x0020) >> 5);
    // console.log("bit", bit.toString(2))
    register1 = (register1 >> 1) | (bit1 << 15);
    register2 = (register2 >> 1) | (bit2 << 15);
    // console.log("register", seed.toString(2))
    return {
        register1: register1,
        register2: register2,
        bit1: bit1,
        bit2: bit2
    };
};
random.getNotRandomNumber = function (seed) {
    var myName = "getNotRandomNumber";
    var storedSeed = getSeed(myName);
    if (!storedSeed) {
        throw new Error("Require seed parameter");
    }
    setSeed(storedSeed, myName);
    return core_1.default.getSuuNumber(storedSeed);
};
random.getRandomNumber = function (seed) {
    var num = Math.random();
    return core_1.default.getSuuNumber(num);
};
random.getRandomNumberByMiddleSquareMethod = function (seed) {
    var myName = "getRandomNumberByMiddleSquareMethod";
    var storedSeed = getSeed(myName);
    var first = core_1.default.getSuuNumber(storedSeed ? storedSeed : "1234");
    var res = utils_1.default.square(first);
    var second = res.array.slice(2, 6).join("");
    if (res.array.length === 7) {
        second = res.array.slice(1, 5).join("");
    }
    var secondnum = core_1.default.getSuuNumber(second);
    setSeed(second, myName);
    return secondnum;
};
random.getRandomNumberByLinearCongruentialGenerators = function (seed) {
    var myName = "getRandomNumberByLinearCongruentialGenerators";
    var a = core_1.default.getSuuNumber("3");
    var b = core_1.default.getSuuNumber("5");
    var m = core_1.default.getSuuNumber("13");
    var storedSeed = getSeed(myName);
    var new_seed = core_1.default.getSuuNumber(storedSeed ? storedSeed : "8");
    setSeed(new_seed, myName);
    // (a x seed + b) mod m
    var res1 = core_1.default.multiple(a, new_seed);
    var res2 = core_1.default.add(res1, b);
    var res3 = core_1.default.modulo(res2, m);
    return res3;
};
var register = 0x1111;
random.getRandomNumberByLinearFeedbackShiftRegister = function (seed) {
    var myName = "getRandomNumberByLinearFeedbackShiftRegister";
    console.log("register", register.toString(2));
    var storedSeed = getSeed(myName);
    if (!storedSeed && seed) {
        setSeed(seed, myName);
        console.log("seed", seed.toString(2));
        register = 0xffff & seed;
        console.log("register1", register.toString(2));
    }
    var bit = seed & 0xffff;
    console.log("bit", bit.toString(2));
    var res1 = (register & 0x0001);
    console.log("res1", res1.toString(2));
    var res2 = res1 ^ ((register & 0x0004) >> 2);
    console.log("res2", res2.toString(2));
    var res3 = res2 ^ ((register & 0x0008) >> 3);
    console.log("res3", res3.toString(2));
    bit = res3 ^ ((register & 0x0020) >> 5);
    console.log("bit", bit.toString(2));
    register = (register >> 1) | (bit << 15);
    setSeed(register, myName);
    return register;
};
exports["default"] = random;


/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var core_1 = __webpack_require__(/*! ./core */ "./core.ts");
var utils = {};
utils.ts = function () { return "ts"; };
utils.getNumber = function (n) {
    return core_1.default.numToArrayWithDecimal(n);
};
utils.copy = function (n) {
    var c = core_1.default.clone(n);
    if (!c) {
        var s = core_1.default.numArrayToString(n);
        return core_1.default.numToArrayWithDecimal(s);
    }
    return c;
};
utils.getLarge = function (a, b) {
    return core_1.default.getLarge(a, b);
};
utils.getSmall = function (a, b) {
    return core_1.default.getSmall(a, b);
};
utils.isSmall = function (a, b) {
    return core_1.default.isSmall(a, b);
};
utils.isLarge = function (a, b) {
    return core_1.default.isLarge(a, b);
};
utils.isEqual = function (a, b) {
    return core_1.default.isEqual(a, b);
};
utils.getZero = function () {
    return core_1.default.getZero();
};
utils.getOne = function () {
    return core_1.default.getOne();
};
utils.isZero = function (n) {
    return core_1.default.isZero(n);
};
utils.isOne = function (n) {
    return core_1.default.isOne(n);
};
utils.square = function (n) {
    return core_1.default.multiplication(n, n);
};
utils.getAbsolute = function (n) {
    var num = utils.getNumber(n);
    if (num instanceof Error) {
        return num;
    }
    var clone = core_1.default.clone(num);
    if (clone.negative) {
        clone = utils.makePositive(clone);
    }
    return clone;
};
utils.exponentiate = function (base, exponent) {
    var b = utils.getNumber(base);
    var exp = utils.getNumber(exponent);
    if (utils.includeDecimal(exp)) {
        return core_1.default.makeError({ message: "Not supported if exponent is decimal", parameter: [exponent] });
    }
    if (!utils.isInteger(exp)) {
        return core_1.default.makeError({ message: "Exponent must be integer", parameter: [exponent] });
    }
    if (utils.isZero(exp)) {
        return core_1.default.getOne();
    }
    if (utils.isOne(exp)) {
        return b;
    }
    var multi = true;
    if (core_1.default.isSmall(exp, core_1.default.getZero())) {
        multi = false;
    }
    var count = core_1.default.getOne();
    var exp_abs = utils.getAbsolute(exp);
    var getBool = function (count) {
        return core_1.default.isSmall(count, exp_abs);
    };
    var res = b;
    var bool = getBool(count);
    while (bool) {
        if (multi) {
            res = core_1.default.multiple(res, b);
        }
        else {
            res = core_1.default.divide(res, b);
        }
        count = core_1.default.add(count, "1");
        bool = getBool(count);
    }
    return res;
};
utils.getInteger = function (n) {
    var str = "";
    for (var i = 0; i < n.decimal_index; i++) {
        var s = String(n.array[i]);
        str = str + s;
    }
    var num = utils.getNumber(str);
    return num;
};
utils.getDecimal = function (n) {
    return core_1.default.getDecimal(n);
};
utils.isNaturalNumber = function (n) {
    var decimal = utils.getDecimal(n);
    var is_zero = utils.isZero(decimal);
    if (is_zero && !n.negative) {
        return true;
    }
    return false;
};
utils.includeDecimal = function (n) {
    var decimal = utils.getDecimal(n);
    var is_zero = utils.isZero(decimal);
    if (is_zero) {
        return false;
    }
    return true;
};
utils.isNegative = function (n) {
    if (utils.isZero(n)) {
        return false;
    }
    var n_ = core_1.default.numToArrayWithDecimal(n);
    return n_.negative;
};
utils.isPositive = function (n) {
    if (utils.isZero(n)) {
        return false;
    }
    var n_ = core_1.default.numToArrayWithDecimal(n);
    return !n_.negative;
};
utils.negate = function (n) {
    var num = core_1.default.numToArrayWithDecimal(n);
    if (num) {
        num.negative = true;
    }
    return num;
};
utils.makePositive = function (n) {
    var num = core_1.default.numToArrayWithDecimal(n);
    if (num) {
        num.negative = false;
    }
    return num;
};
utils.getNext = function (n) {
    return core_1.default.add(n, "1");
};
utils.getPrev = function (n) {
    return core_1.default.subtract(n, "1");
};
utils.isInteger = function (n) {
    if (utils.isZero(n)) {
        return true;
    }
    var decimal = utils.getDecimal(n);
    if (utils.isEqual(decimal, "0")) {
        return true;
    }
    return false;
};
utils.isEvenNumber = function (n) {
    if (utils.isZero(n)) {
        return true;
    }
    if (!utils.isInteger(n)) {
        return false;
    }
    var res = core_1.default.modulo(n, "2");
    var is_zero = utils.isZero(res);
    if (is_zero) {
        return true;
    }
    return false;
};
utils.isOddNumber = function (n) {
    if (utils.isZero(n)) {
        return false;
    }
    if (!utils.isInteger(n)) {
        return false;
    }
    var res = core_1.default.modulo(n, "2");
    var is_zero = utils.isZero(res);
    if (!is_zero) {
        return true;
    }
    return false;
};
utils.getDivisors = function (n) {
    if (!n && n !== 0) {
        return core_1.default.makeError({ message: "Parameter must be integer", parameter: [n] });
    }
    var arr = [];
    var num = utils.getNumber(n);
    if (!num) {
        return arr;
    }
    if (core_1.default.isZero(num)) {
        return arr;
    }
    if (utils.isNaturalNumber(num)) {
        if (core_1.default.isOne(num)) {
            arr.push(num);
        }
        else {
            for (var i = core_1.default.getOne(); core_1.default.isEqual(num, i) || core_1.default.isLarge(num, i); i = core_1.default.add(i, "1")) {
                var res = core_1.default.division(num, i);
                if (!utils.isNaturalNumber(res)) {
                    continue;
                }
                var remainder = res.remainder;
                if (core_1.default.isZero(remainder)) {
                    arr.push(utils.getNumber(i));
                }
            }
        }
    }
    return arr;
};
utils.commonDivisors = function (a, b) {
    var arr = [];
    if (!a && a !== 0) {
        return arr;
    }
    if (!b && b !== 0) {
        return arr;
    }
    try {
        var a_ = utils.getNumber(a);
        var b_ = utils.getNumber(b);
        var a_divisors = utils.getDivisors(a_);
        if (core_1.default.isEqual(a_, b_)) {
            return a_divisors;
        }
        var b_divisors = utils.getDivisors(b_);
        for (var i = 0; i < a_divisors.length; i++) {
            var a_n = a_divisors[i];
            for (var j = 0; j < b_divisors.length; j++) {
                var b_n = b_divisors[j];
                if (core_1.default.isEqual(a_n, b_n)) {
                    arr.push(a_n);
                }
            }
        }
        return arr;
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
utils.greatestCommonDivisor = function (a, b) {
    try {
        var arr = utils.commonDivisors(a, b);
        return arr[arr.length - 1];
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
utils.commonMultiple = function (a, b, limit) {
    var limit_length = limit ? limit : 10;
    var arr = [];
    if (!a && a !== 0) {
        return arr;
    }
    if (!b && b !== 0) {
        return arr;
    }
    try {
        var a_ = utils.getNumber(a);
        var b_ = utils.getNumber(b);
        if (core_1.default.isEqual(a_, b_)) {
            arr.push(a_);
            return arr;
        }
        var a_arr = [];
        var b_arr_1 = [];
        for (var i = 1; i <= limit_length; i++) {
            var a_num = core_1.default.multiple(a_, i);
            a_arr.push(a_num);
        }
        for (var j = 1; j <= limit_length; j++) {
            var b_num = core_1.default.multiple(b_, j);
            b_arr_1.push(b_num);
        }
        a_arr.forEach(function (a_n) {
            var tgt = b_arr_1.find(function (b_n) { return core_1.default.isEqual(a_n, b_n); });
            if (tgt) {
                arr.push(tgt);
            }
        });
        return arr;
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [a, b, limit] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [a, b, limit] });
        }
    }
};
utils.leastCommonMultiple = function (a, b, limit) {
    var arr = utils.commonMultiple(a, b, limit);
    return arr[0];
};
var fibonacciReccurenceRelation = function (_a) {
    var array = _a.array, limit = _a.limit;
    var max = limit ? limit : 100;
    var items_length = array.length;
    var func = function (array) {
        if (array.length >= max) {
            return array;
        }
        try {
            var res = utils.getNumber("0");
            for (var i = 0; i < items_length; i++) {
                var index = array.length - (items_length - i);
                var num = array[index];
                res = core_1.default.add(res, num);
            }
            array.push(res);
            return func(array);
        }
        catch (err) {
            if (err instanceof Error) {
                return core_1.default.makeError({ message: err.message, parameter: [array, limit] });
            }
            else {
                return core_1.default.makeError({ message: "unknown error", paramater: [array, limit] });
            }
        }
    };
    return func(array);
};
var makeFibonacciInitialArray = function (_a) {
    var _b = _a.first, first = _b === void 0 ? "0" : _b, _c = _a.last, last = _c === void 0 ? "1" : _c, _d = _a.length, length = _d === void 0 ? 2 : _d;
    var len = length;
    var a = utils.getNumber(first);
    var b = utils.getNumber(last);
    var arr = [];
    try {
        for (var i = 0; i < len; i++) {
            var tgt = a;
            if (i === (len - 1)) {
                tgt = b;
            }
            arr.push(tgt);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [first, last, length] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [first, last, length] });
        }
    }
    return arr;
};
utils.makeFibonacciSequence = function (first, last) {
    if (first === void 0) { first = "0"; }
    if (last === void 0) { last = "1"; }
    var arr = makeFibonacciInitialArray({ first: first, last: last, length: 2 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeTribonacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 3 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeTetranacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 4 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makePentanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 5 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeHexanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 6 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeHeptanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 7 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeOctanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 8 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeNonanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 9 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeDecanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 10 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeUndecanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 11 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeDodecanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 12 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeIcosanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 20 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeLucaSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "2", last: "1", length: 2 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.summation = function (array) {
    if (!array || !Array.isArray(array)) {
        return core_1.default.makeError({ message: "Parameter must be Array.", parameter: [array] });
    }
    if (array.length === 0) {
        return core_1.default.makeError({ message: "array length is zero", parameter: [array] });
    }
    var sum = core_1.default.getZero();
    if (Array.isArray(array)) {
        try {
            for (var i = 0; i < array.length; i++) {
                sum = core_1.default.add(sum, array[i]);
            }
        }
        catch (err) {
            if (err instanceof Error) {
                return core_1.default.makeError({ message: err.message, parameter: [array] });
            }
            else {
                return core_1.default.makeError({ message: "unknown error", paramater: [array] });
            }
        }
    }
    return sum;
};
utils.infiniteProduct = function (array) {
    if (!array || !Array.isArray(array)) {
        return core_1.default.makeError({ message: "Parameter must be Array.", parameter: [array] });
    }
    if (array.length === 1) {
        return utils.getNumber(array[0]);
    }
    var res = array[0];
    try {
        for (var i = 1; i < array.length; i++) {
            res = core_1.default.multiple(res, array[i]);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [array] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [array] });
        }
    }
    return res;
};
utils.digitSum = function (num) {
    var n = utils.getNumber(num);
    if (!n || !Array.isArray(n.array)) {
        return core_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [num] });
    }
    var res = core_1.default.getZero();
    if (core_1.default.isZero(n)) {
        return res;
    }
    try {
        res = utils.summation(n.array);
        return res;
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [num] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [num] });
        }
    }
};
utils.makeTriangleNumber = function (num) {
    var n = utils.getNumber(num);
    if (core_1.default.isZero(n) || utils.isNegative(n) || !utils.isInteger(n)) {
        return core_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [num] });
    }
    var res1 = core_1.default.multiple(n, core_1.default.add(n, "1"));
    var res2 = core_1.default.divide(res1, "2");
    return res2;
};
utils.makePronicNumber = function (num) {
    var n = utils.getNumber(num);
    if (core_1.default.isZero(n)) {
        return core_1.default.getZero();
    }
    if (utils.isNegative(n) || !utils.isInteger(n)) {
        return core_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [num] });
    }
    try {
        var res = core_1.default.multiple(n, core_1.default.add(n, "1"));
        return res;
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [num] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [num] });
        }
    }
};
utils.factorial = function (num) {
    var n = utils.getNumber(num);
    if (core_1.default.isZero(n) || core_1.default.isOne(n)) {
        return core_1.default.getOne();
    }
    if (utils.isNegative(n) || !utils.isInteger(n)) {
        return core_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [num] });
    }
    var go = true;
    var temp = n;
    var current = n;
    var arr = [temp];
    try {
        while (go) {
            var target = core_1.default.subtract(current, "1");
            arr.push(target);
            current = target;
            if (core_1.default.isSmall(current, "2")) {
                go = false;
                break;
            }
        }
        return utils.infiniteProduct(arr);
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [num] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [num] });
        }
    }
};
utils.isMersenneNumber = function (num) {
    var num1 = utils.getNumber(num);
    if (!utils.isInteger(num1)) {
        return false;
    }
    if (utils.isZero(num1)) {
        return false;
    }
    if (utils.isNegative(num1)) {
        return false;
    }
    if (utils.isEvenNumber(num1)) {
        return false;
    }
    if (utils.isEqual(num1, "1")) {
        return true;
    }
    var num2 = core_1.default.add(num1, "1");
    var result = false;
    var n = num2;
    while (true) {
        n = core_1.default.division(n, "2");
        if (!utils.isInteger(n)) {
            break;
        }
        if (utils.isEqual(n, "1")) {
            result = true;
            break;
        }
        if (utils.isEqual(n, "2")) {
            result = true;
            break;
        }
        if (utils.isOddNumber(n)) {
            break;
        }
    }
    return result;
};
utils.makeMersenneNumbers = function (max) {
    var max_ = utils.getNumber(25);
    if (!max || core_1.default.isLarge(max, max_)) {
        max = max_;
    }
    max = core_1.default.add(max, utils.getNumber("1"));
    var two = utils.getNumber(2);
    var arr = [];
    var current = utils.getNumber(0);
    var ex = utils.getNumber(1);
    while (core_1.default.isSmall(ex, max)) {
        current = utils.exponentiate(two, ex);
        current = core_1.default.subtract(current, utils.getNumber(1));
        arr.push(current);
        ex = core_1.default.add(ex, utils.getNumber(1));
    }
    return arr;
};
// utils.trialDivision = function(n){
//   const num = utils.getNumber(n);
// };
utils.isPrimeNumber = function (n) {
    var num = utils.getNumber(n);
    if (utils.isZero(num)) {
        return false;
    }
    if (utils.isOne(num)) {
        return false;
    }
    if (utils.isEqual(num, "2")) {
        return true;
    }
    if (utils.isEvenNumber(num)) {
        return false;
    }
    if (utils.includeDecimal(num)) {
        return false;
    }
    if (utils.isSmall(num, utils.getNumber("0"))) {
        return false;
    }
    var prev = core_1.default.subtract(num, utils.getNumber("1"));
    var current = core_1.default.division(prev, utils.getNumber("2"));
    var is_prime = true;
    while (is_prime && core_1.default.isLarge(current, utils.getNumber("2"))) {
        var res = core_1.default.modulo(num, current);
        if (utils.isZero(res)) {
            is_prime = false;
            break;
        }
        current = core_1.default.subtract(current, utils.getNumber("1"));
    }
    return is_prime;
};
utils.makePrimeNumbers = function (maxlength) {
    var max_length = utils.getNumber(25);
    if (!maxlength || core_1.default.isLarge(maxlength, max_length)) {
        maxlength = max_length;
    }
    var arr = [];
    var num = utils.getNumber("0");
    var count = utils.getZero();
    while (core_1.default.isSmall(count, maxlength)) {
        num = core_1.default.add(num, utils.getNumber("1"));
        if (utils.isPrimeNumber(num)) {
            arr.push(num);
            count = utils.getNumber(arr.length);
        }
    }
    return arr;
};
utils.isMersennePrimeNumber = function (n) {
    if (utils.isPrimeNumber(n) && utils.isMersenneNumber(n)) {
        return true;
    }
    return false;
};
utils.isCompositeNumber = function (n) {
    if (!n && n !== 0) {
        return false;
    }
    var num = utils.getNumber(n);
    if (utils.isZero(num)) {
        return false;
    }
    if (utils.isOne(num)) {
        return false;
    }
    if (utils.isEvenNumber(n)) {
        if (utils.isLarge(n, "4")) {
            return true;
        }
    }
    var res = utils.isPrimeNumber(num);
    if (res instanceof Error) {
        return false;
    }
    if (typeof res === "boolean") {
        return !res;
    }
    return false;
};
utils.isHarshadNumber = function (n) {
    if (!n && n !== 0) {
        return false;
    }
    var num = utils.getNumber(n);
    if (utils.isEqual("0")) {
        return false;
    }
    if (utils.isSmall(num, "0")) {
        return false;
    }
    if (!utils.isInteger(num)) {
        return false;
    }
    var divisors = utils.getDivisors(n);
    var dsum = utils.digitSum(n);
    var bool = false;
    for (var i = 0; i < divisors.length; i++) {
        var d = divisors[i];
        if (utils.isEqual(d, dsum)) {
            bool = true;
            break;
        }
    }
    return bool;
};
utils.isZuckermanNumber = function (n) {
    var res = false;
    if (!n && n !== 0) {
        return res;
    }
    var num = utils.getNumber(n);
    if (utils.isEqual("0")) {
        return res;
    }
    if (utils.isNegative(num)) {
        return res;
    }
    if (!utils.isInteger(num)) {
        return res;
    }
    var product = utils.infiniteProduct(num.array);
    var divisors = utils.getDivisors(n);
    for (var i = 0; i < divisors.length; i++) {
        var d = divisors[i];
        if (utils.isEqual(product, d)) {
            res = true;
            break;
        }
    }
    return res;
};
utils.isRepunitNumber = function (n) {
    var res = false;
    if (!n && n !== 0) {
        return res;
    }
    var num = utils.getNumber(n);
    if (utils.isEqual("0")) {
        return res;
    }
    if (utils.isNegative(num)) {
        return res;
    }
    if (!utils.isInteger(num)) {
        return res;
    }
    var arr = num.array;
    res = true;
    for (var i = 0; i < arr.length; i++) {
        var elm = arr[i];
        if (elm !== 1) {
            res = false;
            break;
        }
    }
    return res;
};
var makeSophieGermanPrimeAndSafePrime = function (n) {
    var safe_prime_expected = utils.getNumber(n);
    var num1 = core_1.default.multiple(safe_prime_expected, "2");
    var sophie_german_expected = core_1.default.add(num1, "1");
    if (utils.isPrimeNumber(safe_prime_expected) && utils.isPrimeNumber(sophie_german_expected)) {
        return {
            sophieGermainPrime: safe_prime_expected,
            safePrime: sophie_german_expected,
        };
    }
    return {
        sophieGermainPrime: null,
        safePrime: null,
    };
};
utils.isSophieGermainPrime = function (n) {
    var _a = makeSophieGermanPrimeAndSafePrime(n), sophieGermainPrime = _a.sophieGermainPrime, safePrime = _a.safePrime;
    if (sophieGermainPrime && safePrime) {
        return true;
    }
    return false;
};
utils.isSafePrime = function (n) {
    var num1 = utils.getNumber(n);
    var num2 = core_1.default.subtract(num1, "1");
    var num3 = core_1.default.division(num2, "2");
    var _a = makeSophieGermanPrimeAndSafePrime(num3), sophieGermainPrime = _a.sophieGermainPrime, safePrime = _a.safePrime;
    if (sophieGermainPrime && safePrime) {
        return true;
    }
    return false;
};
var sort = function (array, order) {
    var new_arr = __spreadArray([], array, true);
    var asc = function (a_n, b_n) {
        if (a_n < b_n) {
            return -1;
        }
        else if (a_n > b_n) {
            return 1;
        }
        return 0;
    };
    var desc = function (a_n, b_n) {
        if (a_n < b_n) {
            return 1;
        }
        else if (a_n > b_n) {
            return -1;
        }
        return 0;
    };
    new_arr.sort(function (a, b) {
        var a_n = Number(a);
        var b_n = Number(b);
        if (order === "asc") {
            return asc(a_n, b_n);
        }
        else if (order === "desc") {
            return desc(a_n, b_n);
        }
        else {
            return asc(a_n, b_n);
        }
    });
    return new_arr;
};
utils.getInversionNumber = function (n) {
    var count = utils.getZero();
    if (!n && n !== 0) {
        return count;
    }
    var num = utils.getNumber(n);
    if (utils.isEqual("0")) {
        return count;
    }
    if (utils.isNegative(num)) {
        return count;
    }
    var orderedArray = sort(num.array, "asc");
    for (var i = 0; i < num.array.length; i++) {
        var ordered_elm = orderedArray[i];
        var original_elm = num.array[i];
        var gap = core_1.default.subtract(ordered_elm, original_elm);
        if (utils.isNegative(gap)) {
            continue;
        }
        if (utils.isZero(gap)) {
            continue;
        }
        count = core_1.default.add(count, gap);
    }
    return count;
};
utils.getReciprocal = function (n) {
    var res = null;
    if (!n && n !== 0) {
        return res;
    }
    var num = utils.getNumber(n);
    if (utils.isZero(num)) {
        return res;
    }
    if (utils.isOne(num)) {
        return utils.getOne();
    }
    res = core_1.default.division(utils.getOne(), num);
    return res;
};
utils.getReverse = function (n) {
    var res = null;
    if (!n && n !== 0) {
        return res;
    }
    var num = utils.getNumber(n);
    if (num.negative) {
        return res;
    }
    if (utils.includeDecimal(num)) {
        return res;
    }
    if (utils.isSmall(num, utils.getNumber("10"))) {
        return num;
    }
    var array = __spreadArray([], num.array, true).reverse();
    var str = array.join("");
    var new_num = utils.getNumber(str);
    return new_num;
};
utils.getFermatNumber = function (n) {
    var num = utils.getNumber(n);
    var base = utils.getNumber("2");
    var ex = utils.exponentiate(base, num);
    var one = utils.getOne();
    var res1 = utils.exponentiate(base, ex);
    var res2 = core_1.default.add(res1, one);
    return res2;
};
utils.isFermatNumber = function (n) {
    var num = utils.getNumber(n);
    var max = 6;
    var bool = false;
    for (var i = 0; i <= max; i++) {
        var f = utils.getFermatNumber("".concat(i));
        if (utils.isEqual(f, num)) {
            bool = true;
            break;
        }
    }
    return bool;
};
utils.isFermatPrime = function (n) {
    var num = utils.getNumber(n);
    if (utils.isFermatNumber(num) && utils.isPrimeNumber) {
        return true;
    }
    return false;
};
utils.getCullenNumber = function (n) {
    var num = utils.getNumber(n);
    var base = utils.getNumber("2");
    var ex = utils.exponentiate(base, num);
    var res1 = core_1.default.multiple(num, ex);
    var res2 = core_1.default.add(res1, utils.getOne());
    return res2;
};
utils.isCullenNumber = function (n) {
    var num = utils.getNumber(n);
    var max = 20;
    var bool = false;
    for (var i = 0; i <= max; i++) {
        var f = utils.getCullenNumber("".concat(i));
        if (utils.isEqual(f, num)) {
            bool = true;
            break;
        }
    }
    return bool;
};
utils.isCullenPrime = function (n) {
    var num = utils.getNumber(n);
    var bool = false;
    if (utils.isPrimeNumber(num) && utils.isCullenNumber(num)) {
        bool = true;
    }
    return bool;
};
utils.getProthNumber = function (k, n) {
    var k_num = utils.getNumber(k);
    var n_num = utils.getNumber(n);
    if (utils.isZero(k_num) || utils.isZero(n_num)) {
        return null;
    }
    if (utils.isSmall(k_num, utils.getZero()) || utils.isSmall(n_num, utils.getZero())) {
        return null;
    }
    if (utils.isInteger(k_num) || utils.isInteger(n_num)) {
        if (utils.isOddNumber(k_num)) {
            var ex = utils.exponentiate(utils.getNumber("2"), n_num);
            if (utils.isLarge(ex, k_num)) {
                var res = core_1.default.multiple(ex, k_num);
                var res2 = core_1.default.add(res, utils.getOne());
                return res2;
            }
        }
    }
    return null;
};
utils.makeProthNumbers = function (max) {
    var default_max = 10;
    if (!max) {
        max = default_max;
    }
    else if (max > default_max) {
        max = default_max;
    }
    var list = [];
    for (var i = 0; i < max; i++) {
        var k = utils.getNumber(String(i * 2 + 1));
        for (var j = 0; j < max; j++) {
            var n = utils.getNumber(String(j + 1));
            var res = utils.getProthNumber(k, n);
            if (res) {
                list.push(res);
            }
        }
    }
    list.sort(function (a, b) {
        var a_is_small = utils.isSmall(a, b);
        if (a_is_small) {
            return -1;
        }
        return 1;
    });
    return list;
};
utils.isProthNumber = function (n) {
    var num = utils.getNumber(n);
    var list = utils.makeProthNumbers();
    for (var i = 0; i < list.length; i++) {
        var p = list[i];
        if (utils.isEqual(p, num)) {
            return true;
        }
    }
    return false;
};
utils.isProthPrime = function (n) {
    var num = utils.getNumber(n);
    if (utils.isProthNumber(num) && utils.isPrimeNumber(num)) {
        return true;
    }
    return false;
};
utils.makePierpontNumber = function (u, v) {
    // 2u 3v + 1
    var u_n = utils.getNumber(u);
    var v_n = utils.getNumber(v);
    if (utils.isNegative(u_n) || utils.isNegative(v_n)) {
        return null;
    }
    if (!utils.isInteger(u_n) || !utils.isInteger(v_n)) {
        return null;
    }
    var res1 = utils.exponentiate(utils.getNumber("2"), u_n);
    var res2 = utils.exponentiate(utils.getNumber("3"), v_n);
    var res3 = core_1.default.multiple(res1, res2);
    var res = core_1.default.add(res3, utils.getOne());
    return res;
};
utils.makePierpontNumbers = function (max) {
    // 2u 3v + 1
    var list = [];
    var max_default = 10;
    if (!max) {
        max = max_default;
    }
    else if (max > max_default) {
        max = max_default;
    }
    for (var i = 0; i < max; i++) {
        var u = utils.getNumber(i);
        var _loop_1 = function (j) {
            var v = utils.getNumber(j);
            var res = utils.makePierpontNumber(u, v);
            if (res) {
                if (list.find(function (elm) {
                    return core_1.default.isEqual(elm, res);
                })) {
                    return "continue";
                }
                list.push(res);
            }
        };
        for (var j = 0; j < max; j++) {
            _loop_1(j);
        }
    }
    for (var i = 0; i < max; i++) {
        var v = utils.getNumber(i);
        var _loop_2 = function (j) {
            var u = utils.getNumber(j);
            var res = utils.makePierpontNumber(u, v);
            if (res) {
                if (list.find(function (elm) {
                    return core_1.default.isEqual(elm, res);
                })) {
                    return "continue";
                }
                list.push(res);
            }
        };
        for (var j = 0; j < max; j++) {
            _loop_2(j);
        }
    }
    list.sort(function (a, b) {
        var a_is_small = utils.isSmall(a, b);
        if (a_is_small) {
            return -1;
        }
        return 1;
    });
    return list;
};
utils.isPierpontPrime = function (n) {
    var num = utils.getNumber(n);
    if (utils.isZero(num)) {
        return false;
    }
    var arr = utils.makePierpontNumbers();
    for (var i = 0; i < arr.length; i++) {
        if (utils.isEqual(num, arr[i]) && utils.isPrimeNumber(num)) {
            return true;
        }
    }
    return false;
};
exports["default"] = utils;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var core_1 = __webpack_require__(/*! ./core */ "./core.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./utils.ts");
var random_1 = __webpack_require__(/*! ./random */ "./random.ts");
var doc_1 = __webpack_require__(/*! ./doc */ "./doc.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./constants.ts");
exports["default"] = {
    core: core_1.default,
    utils: utils_1.default,
    random: random_1.default,
    doc: doc_1.default,
    constants: constants_1.default,
    ts: true,
};

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3N1L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUudHMiLCJ3ZWJwYWNrOi8vc3UvLi9kb2MudHMiLCJ3ZWJwYWNrOi8vc3UvLi9yYW5kb20udHMiLCJ3ZWJwYWNrOi8vc3UvLi91dGlscy50cyIsIndlYnBhY2s6Ly9zdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdS8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYOiAxMDAwMCxcbiAgTUlOOiAtMTAwMDAsXG4gIERCWjogXCJEaXZpc2lvbiBieSBaZXJvXCIsXG4gIE5BTjogXCJOb3QgYSBudW1iZXJcIixcbiAgTk9UU1U6IFwiQXJndW1lbnQgaXMgbm90IFN1LlwiXG59O1xuIiwiaW1wb3J0IHtDb21wYXJlT2JqZWN0LCBTdXVOdW1iZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IGNvcmU6YW55ID0ge307XG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgY2FsY3VsYXRpb25fbW9kZXM6IFtcInN1dVwiLCBcImpzXCJdLFxuICBjYWxjdWxhdGlvbl9tb2RlOiAwLFxufTtcblxuY29yZS5jaGFuZ2VDYWxjdWxhdGlvbk1vZGUgPSBmdW5jdGlvbihtb2RlOiBzdHJpbmcpe1xuICBpZighbW9kZSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGluZGV4ID0gc2V0dGluZ3MuY2FsY3VsYXRpb25fbW9kZXMuZmluZEluZGV4KG0gPT4gbSA9PT0gbW9kZSk7XG4gIGlmKGluZGV4ID49IDApe1xuICAgIHNldHRpbmdzLmNhbGN1bGF0aW9uX21vZGUgPSBpbmRleDtcbiAgfVxufTtcblxuY29yZS5nZXRDYWxjdWxhdGlvbk1vZGUgPSBmdW5jdGlvbigpe1xuICBjb25zdCBtID0gc2V0dGluZ3MuY2FsY3VsYXRpb25fbW9kZXNbc2V0dGluZ3MuY2FsY3VsYXRpb25fbW9kZV07XG4gIHJldHVybiBtO1xufTtcblxuY29yZS5tYWtlRXJyb3IgPSBmdW5jdGlvbihvOiB7bWVzc2FnZTogc3RyaW5nLCB2YXJpYWJsZTogYW55LCBwYXJhbWV0ZXI6IGFueX0pOiBFcnJvcntcbiAgbGV0IGVycm9yID0gbmV3IEVycm9yKCk7XG4gIHRyeXtcbiAgICBjb25zdCB2ID0gby52YXJpYWJsZSA/IG8udmFyaWFibGUudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgY29uc3QgcCA9IG8ucGFyYW1ldGVyID8gby5wYXJhbWV0ZXIudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgbGV0IHN0ciA9IG8ubWVzc2FnZTtcbiAgICBpZih2KXtcbiAgICAgIHN0ciA9IGAke3N0cn0sICR7diA/IHYgOiBcIlwifWA7XG4gICAgfVxuICAgIGlmKHApe1xuICAgICAgc3RyID0gYCR7c3RyfSwgJHtwID8gcCA6IFwiXCJ9YDtcbiAgICB9XG4gICAgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgfWNhdGNoKGU6IHVua25vd24pe1xuICAgIGlmKGUgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuICB9ZmluYWxseXtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmNvbnN0IGlzTnVtYmVyID0gZnVuY3Rpb24obik6IEJvb2xlYW57XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUuaXNTdXVOdW1iZXIgPSBmdW5jdGlvbihuKTogQm9vbGVhbntcbiAgaWYobi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUubW9sZE51bUFycmF5ID0gZnVuY3Rpb24oeyBhcnJheSwgbmVnYXRpdmUsIGRlY2ltYWxfaW5kZXggfSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWFycmF5KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3IoeyBtZXNzYWdlOiBcIkFycmF5IGlzIG5vdCBleGlzdHNcIiwgcGF0YW1ldGVyOiBhcnJheX0pO1xuICB9XG5cbiAgaWYodHlwZW9mIGRlY2ltYWxfaW5kZXggIT09IFwibnVtYmVyXCIgfHwgaXNOYU4oZGVjaW1hbF9pbmRleCkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiZGVjaW1hbF9pbmRleCBpcyBub3QgYSBudW1iZXJcIiwgcGF0YW1ldGVyOiBkZWNpbWFsX2luZGV4fSk7XG4gIH1cbiAgdHJ5e1xuICAgIHdoaWxlKGRlY2ltYWxfaW5kZXggPCBhcnJheS5sZW5ndGggJiYgYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV0gPT09IDApe1xuICAgICAgYXJyYXkucG9wKCk7XG4gICAgfVxuICAgIHdoaWxlKGRlY2ltYWxfaW5kZXggPiAxICYmIGFycmF5WzBdID09PSAwKXtcbiAgICAgIGFycmF5LnNoaWZ0KCk7XG4gICAgICBkZWNpbWFsX2luZGV4LS07XG4gICAgfVxuXG4gICAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICAgIGFycmF5LnB1c2goMCk7XG4gICAgICBkZWNpbWFsX2luZGV4ID0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBvOiBTdXVOdW1iZXIgPSB7XG4gICAgICBhcnJheTogYXJyYXksXG4gICAgICBuZWdhdGl2ZTogISFuZWdhdGl2ZSxcbiAgICAgIGlzX251bV9hcnJheTogdHJ1ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXgsXG4gICAgICBnZXRKU051bWJlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIE51bWJlcihjb3JlLm51bUFycmF5VG9TdHJpbmcodGhpcykpO1xuICAgICAgfSxcbiAgICAgIGdldFN0cmluZzogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubnVtQXJyYXlUb1N0cmluZyh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmKGRlY2ltYWxfaW5kZXggPT09IDAgfHwgZGVjaW1hbF9pbmRleCA+IDApe1xuICAgICAgby5kZWNpbWFsX2luZGV4ID0gZGVjaW1hbF9pbmRleDtcbiAgICB9ZWxzZXtcbiAgICAgIG8uZGVjaW1hbF9pbmRleCA9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGU6IHVua25vd24pe1xuICAgIGlmKGUgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGUubWVzc2FnZSwgcGFyYW1ldGVyOiBhcnJheX0pO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBhcnJheX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5jb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyB1bmRlZmluZWQsIG51bGwsIG9yIGVtcHR5LlwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgfVxuXG4gIGlmKG4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gY29yZS5jbG9uZShuKTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBuID09PSBcIm9iamVjdFwiKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIG9iamVjdC5cIiwgcGFyYW1ldGVyOiBufSk7XG4gIH1cblxuICBsZXQgc3RyOiBzdHJpbmcgPSBTdHJpbmcobik7XG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICB3aGlsZShzdHIgJiYgc3RyWzBdLm1hdGNoKC9eLS8pKXtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXi0vLCBcIlwiKTtcbiAgICBuZWdhdGl2ZSA9ICFuZWdhdGl2ZTtcbiAgfVxuXG4gIGxldCBkZWNfaW5kZXg7XG4gIGxldCByZXMgPSBzdHIubWF0Y2goL1xcLi9nKTtcbiAgaWYocmVzICYmIHJlcy5sZW5ndGggPiAxKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiMiBvciBtb3JlIGRlY2ltYWwgcG9pbnRzXCIsIHBhcmFtZXRlcjogbn0pO1xuICB9XG4gIGlmKHJlcyAmJiByZXMubGVuZ3RoID09PSAxKXtcbiAgICBjb25zdCByZXMxID0gc3RyLm1hdGNoKC9cXC4vKTtcbiAgICBjb25zdCBmaXJzdF9pbmRleCA9IHJlczE/LmluZGV4XG4gICAgZGVjX2luZGV4ID0gZmlyc3RfaW5kZXhcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFwuLywgXCJcIik7XG4gIH1lbHNle1xuICAgIGRlY19pbmRleCA9IHN0ci5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBhcnI6IG51bWJlcltdID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIWlzTnVtYmVyKG51bSkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIsIHBhcmFtZXRlcjogbnVtfSk7XG4gICAgfVxuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoeyBhcnJheTogYXJyLCBuZWdhdGl2ZTogbmVnYXRpdmUsIGRlY2ltYWxfaW5kZXg6IGRlY19pbmRleH0pO1xuXG59O1xuXG5jb3JlLm51bUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbihuKTogc3RyaW5nIHwgRXJyb3Ige1xuICBpZighbi5pc19udW1fYXJyYXkgfHwgIW4uYXJyYXkgfHwgIW4uZGVjaW1hbF9pbmRleCl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0IGFyciA9IFsuLi5uLmFycmF5XTtcbiAgICBhcnIuc3BsaWNlKG4uZGVjaW1hbF9pbmRleCwgMCwgXCIuXCIpO1xuICAgIGxldCBzdHIgPSBhcnIuam9pbihcIlwiKTtcbiAgICBpZihuLm5lZ2F0aXZlKXtcbiAgICAgIHN0ciA9IGAtJHtzdHJ9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBufSk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG59KTtcbiAgICB9XG4gIH1cblxufTtcblxuY29yZS5jb21wYXJlID0gZnVuY3Rpb24oYSwgYik6IENvbXBhcmVPYmplY3QgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBpZighYSAmJiBhICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9ZWxzZSBpZighYiAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbzogQ29tcGFyZU9iamVjdCA9IHtcbiAgICAgIHNtYWxsOiBudWxsLFxuICAgICAgbGFyZ2U6IG51bGwsXG4gICAgICBlcXVhbDogZmFsc2VcbiAgICB9O1xuICAgIGxldCBhXyA9IGE7XG4gICAgbGV0IGJfID0gYjtcblxuICAgIGlmKCFhXy5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhXyk7XG4gICAgICBpZighYV8pe1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIWJfLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGJfKTtcbiAgICAgIGlmKCFiXyl7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyYXk6IG51bWJlcltdID0gYV8uYXJyYXk7XG4gICAgY29uc3QgYl9hcnJheTogbnVtYmVyW10gPSBiXy5hcnJheTtcblxuICAgIGNvbnN0IGFfbGVuOiBudW1iZXIgPSBhX2FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBiX2xlbjogbnVtYmVyID0gYl9hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgYV9zdHI6IHN0cmluZyA9IGFfYXJyYXkuam9pbihcIlwiKTtcbiAgICBjb25zdCBiX3N0cjogc3RyaW5nID0gYl9hcnJheS5qb2luKFwiXCIpO1xuXG4gICAgY29uc3QgYV9pbnRfbGVuID0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2ludF9sZW4gPSBiXy5kZWNpbWFsX2luZGV4O1xuXG4gICAgY29uc3QgYV9kZWNfbGVuID0gYV9sZW4gLSBhX2ludF9sZW47XG4gICAgY29uc3QgYl9kZWNfbGVuID0gYl9sZW4gLSBiX2ludF9sZW47XG5cbiAgICBpZihhX2xlbiA9PT0gMSAmJiBhX3N0ciA9PT0gXCIwXCIgJiYgYl9sZW4gPT09IDEgJiYgYl9zdHIgPT09IFwiMFwiKXtcbiAgICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAgIGlmKCFhXy5uZWdhdGl2ZSAmJiBiXy5uZWdhdGl2ZSl7XG4gICAgICBvLnNtYWxsID0gYl87XG4gICAgICBvLmxhcmdlID0gYV87XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoYV8ubmVnYXRpdmUgJiYgIWJfLm5lZ2F0aXZlKXtcbiAgICAgIG8uc21hbGwgPSBhXztcbiAgICAgIG8ubGFyZ2UgPSBiXztcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGNvbnN0IG5lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG5cbiAgICBjb25zdCBvX2FfYiA9IHtcbiAgICAgIGxhcmdlOiBuZWdhdGl2ZSA/IGJfIDogYV8sXG4gICAgICBzbWFsbDogbmVnYXRpdmUgPyBhXyA6IGJfLFxuICAgICAgZXF1YWw6IGZhbHNlLFxuICAgIH07XG4gICAgY29uc3Qgb19iX2EgPSB7XG4gICAgICBsYXJnZTogbmVnYXRpdmUgPyBhXyA6IGJfLFxuICAgICAgc21hbGw6IG5lZ2F0aXZlID8gYl8gOiBhXyxcbiAgICAgIGVxdWFsOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZihhX2ludF9sZW4gPiBiX2ludF9sZW4pe1xuICAgICAgcmV0dXJuIG9fYV9iO1xuICAgIH1cbiAgICBcbiAgICBpZihhX2ludF9sZW4gPCBiX2ludF9sZW4pe1xuICAgICAgcmV0dXJuIG9fYl9hO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhX2ludF9sZW47IGkrKyl7XG4gICAgICBpZihhX2FycmF5W2ldID4gYl9hcnJheVtpXSl7XG4gICAgICAgIHJldHVybiBvX2FfYjtcbiAgICAgIH1cbiAgICAgIGlmKGFfYXJyYXlbaV0gPCBiX2FycmF5W2ldKXtcbiAgICAgICAgcmV0dXJuIG9fYl9hOyAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVjX2xlbiA9IGFfZGVjX2xlbiA+IGJfZGVjX2xlbiA/IGFfZGVjX2xlbiA6IGJfZGVjX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGVjX2xlbjsgaSsrKXtcbiAgICAgIGNvbnN0IGFhID0gYV9hcnJheVthX2ludF9sZW4gKyBpXSA/IGFfYXJyYXlbYV9pbnRfbGVuICsgaV0gOiAwO1xuICAgICAgY29uc3QgYmIgPSBiX2FycmF5W2JfaW50X2xlbiArIGldID8gYl9hcnJheVtiX2ludF9sZW4gKyBpXSA6IDA7XG4gICAgICBpZihhYSA+IGJiKXtcbiAgICAgICAgcmV0dXJuIG9fYV9iO1xuICAgICAgfVxuICAgICAgaWYoYWEgPCBiYil7XG4gICAgICAgIHJldHVybiBvX2JfYTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvLmVxdWFsID0gdHJ1ZTtcbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxuXG59O1xuXG5jb3JlLmdldExhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5jb21wYXJlKGEsIGIpLmxhcmdlO1xufTtcblxuY29yZS5nZXRTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvcmUuY29tcGFyZShhLCBiKS5zbWFsbDtcbn07XG5cbmNvcmUuaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgY29uc3QgcmVzID0gY29yZS5jb21wYXJlKGEsIGIpO1xuICBpZihyZXMuZXF1YWwpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUuaXNTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbChjb3JlLmdldFNtYWxsKGEsIGIpLCBhKTtcbn07XG5cbmNvcmUuaXNMYXJnZSA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbChjb3JlLmdldExhcmdlKGEsIGIpLCBhKTtcbn07XG5cbmNvcmUuaXNaZXJvID0gZnVuY3Rpb24obik6IGJvb2xlYW4ge1xuICBpZighbil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKCFuLmlzX251bV9hcnJheSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHplcm8gPSBjb3JlLmdldFplcm8oKTtcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbCh6ZXJvLCBuKTtcbn07XG5cbmNvcmUuaXNPbmUgPSBmdW5jdGlvbihuKTogYm9vbGVhbiB7XG4gIGlmKCFuKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoIW4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgb25lID0gY29yZS5nZXRPbmUoKTtcbiAgaWYoY29yZS5pc0VxdWFsKG9uZSwgbikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvcmUuZ2V0WmVybyA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlciB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjBcIik7XG59O1xuXG5jb3JlLmdldE9uZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlciB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjFcIik7XG59O1xuXG5jb3JlLmZpeENhcnJ5ID0gZnVuY3Rpb24oYXJyOiBudW1iZXJbXSwgbWludXM6IGJvb2xlYW4pOiB7bmV3X2FycmF5OiBudW1iZXJbXSwgbWludXM6IGJvb2xlYW59IHtcbiAgdHJ5IHtcbiAgICBsZXQgbWludXNfID0gbWludXM7XG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pe1xuICAgICAgY29uc3QgZWxtID0gYXJyW2ldO1xuICAgICAgaWYoZWxtIDwgMCl7XG4gICAgICAgIG1pbnVzXyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtID09PSAwKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKG1pbnVzXyl7XG4gICAgICBjb25zdCBjYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgICAgIGFyci5mb3JFYWNoKCAoZWxtOiBudW1iZXIpID0+IHtcbiAgICAgICAgY2FjaGUucHVzaCgtZWxtKTtcbiAgICAgIH0pO1xuICAgICAgYXJyID0gY2FjaGU7XG4gICAgfVxuICAgIGNvbnN0IG5ld19hcnI6IG51bWJlcltdID0gW107XG4gICAgbGV0IGNhcnJ5ID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCB2YWwgPSBOdW1iZXIoYXJyW2ldICsgY2FycnkpO1xuICAgICAgaWYodmFsID4gOSl7XG4gICAgICAgIGNvbnN0IGFycjEgPSBTdHJpbmcodmFsKS5zcGxpdChcIlwiKTtcbiAgICAgICAgdmFsID0gTnVtYmVyKGFycjFbYXJyMS5sZW5ndGggLSAxXSk7XG4gICAgICAgIGNvbnN0IGFycjIgPSBhcnIxLnNsaWNlKDAsIGFycjEubGVuZ3RoIC0gMSk7XG4gICAgICAgIGNhcnJ5ID0gTnVtYmVyKGFycjIuam9pbihcIlwiKSk7XG4gICAgICB9ZWxzZSBpZiggdmFsID49IDAgJiYgdmFsIDw9IDkpe1xuICAgICAgICBjYXJyeSA9IDA7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFsID0gMTAgKyB2YWw7XG4gICAgICAgIGNhcnJ5ID0gLTE7XG5cbiAgICAgIH1cbiAgICAgIG5ld19hcnIucHVzaCh2YWwpO1xuICAgIH1cbiAgICBpZihjYXJyeSAhPT0gMCl7XG4gICAgICBuZXdfYXJyLnB1c2goY2FycnkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZXdfYXJyYXk6IG5ld19hcnIsXG4gICAgICBtaW51czogbWludXNfXG4gICAgfTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyLCBtaW51c119KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYXJyLCBtaW51c119KTtcbiAgICB9XG4gIH1cblxuXG59O1xuXG5jb3JlLmNsb25lID0gZnVuY3Rpb24objogYW55KTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICB0cnl7XG4gICAgaWYoIW4pe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogbn0pO1xuICAgIH1cbiAgICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBub3QgY29tcGF0aWJsZVwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgICB9XG4gICAgY29uc3QgbyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogWy4uLm4uYXJyYXldLFxuICAgIH07XG4gICAgcmV0dXJuIG87XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW25dfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW25dfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhZGRfYW5kX3N1YnRyYWN0X2pzID0gZnVuY3Rpb24oYSwgYiwgbW9kZSkge1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG11c3QgYmUgYSBOdW1iZXIgb3IgYSBTdHJpbmcuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxuICBsZXQgcGx1cztcbiAgaWYoIW1vZGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIG1vZGUgaXMgcmVxdWlyZWRcIiwgcGFyYW1ldGVyOiBbYSwgYiwgbW9kZV19KTs7XG4gIH1lbHNlIGlmKG1vZGUgPT09IFwiK1wiKXtcbiAgICBwbHVzID0gdHJ1ZTtcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCItXCIpe1xuICAgIHBsdXMgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIm1vZGUgbXVzdCBiZSAnKycgb3IgJy0nLlwiLCBwYXJhbWV0ZXI6IG1vZGV9KTtcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhX3MgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcoYSk7XG4gICAgY29uc3QgYl9zID0gY29yZS5udW1BcnJheVRvU3RyaW5nKGIpO1xuICBcbiAgICBjb25zdCBhX24gPSBOdW1iZXIoYV9zKTtcbiAgICBjb25zdCBiX24gPSBOdW1iZXIoYl9zKTtcblxuICAgIGlmKHBsdXMpe1xuICAgICAgcmV0dXJuIGFfbiArIGJfbjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBhX24gLSBiX247XG4gICAgfSAgXG4gIH1jYXRjaChlcnI6IEVycm9yIHwgYW55KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiLCBtb2RlXX0pO1xuICB9XG5cbn07XG5cblxuY29yZS5hZGRfYW5kX3N1YnRyYWN0ID0gZnVuY3Rpb24oYSwgYiwgbW9kZSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWEgfHwgIWIpe1xuICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbXVzdCBiZSBhIE51bWJlciBvciBhIFN0cmluZy5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmKGNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlKCkgPT09IFwianNcIil7XG4gICAgcmV0dXJuIGFkZF9hbmRfc3VidHJhY3RfanMoYSwgYiwgbW9kZSk7XG4gIH1cblxuXG4gIGxldCBwbHVzO1xuICBpZighbW9kZSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgbW9kZSBpcyByZXF1aXJlZFwiLCBwYXJhbWV0ZXI6IFthLCBiLCBtb2RlXX0pOztcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCIrXCIpe1xuICAgIHBsdXMgPSB0cnVlO1xuICB9ZWxzZSBpZihtb2RlID09PSBcIi1cIil7XG4gICAgcGx1cyA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwibW9kZSBtdXN0IGJlICcrJyBvciAnLScuXCIsIHBhcmFtZXRlcjogbW9kZX0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsZXQgYV86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnIgPSBhXy5hcnJheTtcbiAgICBjb25zdCBiX2FyciA9IGJfLmFycmF5O1xuXG5cbiAgICBjb25zdCBhX2lzX3plcm86IGJvb2xlYW4gPSBjb3JlLmlzWmVybyhhXyk7XG4gICAgY29uc3QgYl9pc196ZXJvOiBib29sZWFuID0gY29yZS5pc1plcm8oYl8pO1xuXG4gICAgaWYoYV9pc196ZXJvICYmIGJfaXNfemVybyl7XG4gICAgICByZXR1cm4gYV87XG4gICAgfWVsc2UgaWYoYV9pc196ZXJvKXtcbiAgICAgIGlmKCFwbHVzKXtcbiAgICAgICAgYl8ubmVnYXRpdmUgPSAhYl8ubmVnYXRpdmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYl87XG4gICAgfWVsc2UgaWYoYl9pc196ZXJvKXtcbiAgICAgIHJldHVybiBhXztcbiAgICB9XG5cbiAgICBjb25zdCBhX2RlY19sZW5ndGg6IG51bWJlciA9IGFfLmFycmF5Lmxlbmd0aCAtIGFfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgYl9kZWNfbGVuZ3RoOiBudW1iZXIgPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuXG4gICAgY29uc3QgZGVjX2dhcDogbnVtYmVyID0gYV9kZWNfbGVuZ3RoIC0gYl9kZWNfbGVuZ3RoO1xuXG4gICAgaWYoZGVjX2dhcCA+IDApe1xuICAgICAgYl9hcnIucHVzaCguLi5BcnJheShkZWNfZ2FwKS5maWxsKDApKTtcbiAgICB9ZWxzZSBpZihkZWNfZ2FwIDwgMCl7XG4gICAgICBhX2Fyci5wdXNoKC4uLkFycmF5KE1hdGguYWJzKGRlY19nYXApKS5maWxsKDApKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGIsIHBsdXN9KTogeyBuZXdfYXJyYXk6IG51bWJlcltdLCBtaW51czogYm9vbGVhbiB9IHtcbiAgICAgIGNvbnN0IGFycjogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCBsZW4gPSBhLmFycmF5Lmxlbmd0aDtcbiAgICAgIGlmKGEuYXJyYXkubGVuZ3RoIDwgYi5hcnJheS5sZW5ndGgpe1xuICAgICAgICBsZW4gPSBiLmFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFycl9hOiBudW1iZXJbXSA9IGEuYXJyYXk7XG4gICAgICBjb25zdCBhcnJfYjogbnVtYmVyW10gPSBiLmFycmF5O1xuICAgICAgY29uc3QgYV9vbmU6IG51bWJlciA9IGEubmVnYXRpdmUgPyAtMSA6IDE7XG4gICAgICBjb25zdCBiX29uZTogbnVtYmVyID0gYi5uZWdhdGl2ZSA/IC0xIDogMTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgIGNvbnN0IGFhID0gYXJyX2FbaV0gPyBhcnJfYVtpXSAqIGFfb25lIDogMDtcbiAgICAgICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldICogYl9vbmUgOiAwO1xuICAgICAgICBsZXQgcmVzID0gcGx1cyA/IGFhICsgYmIgOiBhYSAtIGJiO1xuICAgICAgICBhcnIucHVzaChyZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcmUuZml4Q2FycnkoYXJyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXksIG1pbnVzIH0gPSBjYWxjKHtcbiAgICAgIGE6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5hX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYV8ubmVnYXRpdmUsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBhcnJheTogWy4uLmJfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBiXy5uZWdhdGl2ZVxuICAgICAgfSxcbiAgICAgIHBsdXM6IHBsdXNcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlY19sZW5ndGggPSBhX2RlY19sZW5ndGggPj0gYl9kZWNfbGVuZ3RoID8gYV9kZWNfbGVuZ3RoIDogYl9kZWNfbGVuZ3RoO1xuICAgIGNvbnN0IG5ld19pbnRfbGVuZ3RoID0gbmV3X2FycmF5Lmxlbmd0aCAtIGRlY19sZW5ndGg7XG5cbiAgICBjb25zdCBuZXdfZGVjaW1hbF9pbmRleCA9IG5ld19pbnRfbGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ubmV3X2FycmF5XS5yZXZlcnNlKCksXG4gICAgICBuZWdhdGl2ZTogbWludXMgPyB0cnVlIDogZmFsc2UsXG4gICAgICBkZWNpbWFsX2luZGV4OiBuZXdfZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5jb3JlLmFkZCA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLmFkZF9hbmRfc3VidHJhY3QoYSwgYiwgXCIrXCIpO1xufTtcblxuY29yZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLmFkZF9hbmRfc3VidHJhY3QoYSwgYiwgXCItXCIpO1xufTtcblxuXG5jb25zdCBtdWx0aXBsaWNhdGlvbl9qcyA9IGZ1bmN0aW9uKGEsIGIpIHtcblxuICBpZighYSB8fCAhYil7XG4gICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBtdXN0IGJlIGEgTnVtYmVyIG9yIGEgU3RyaW5nLlwiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuICBcbiAgdHJ5e1xuICAgIGNvbnN0IGFfcyA9IGNvcmUubnVtQXJyYXlUb1N0cmluZyhhKTtcbiAgICBjb25zdCBiX3MgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcoYik7XG4gIFxuICAgIGNvbnN0IGFfbiA9IE51bWJlcihhX3MpO1xuICAgIGNvbnN0IGJfbiA9IE51bWJlcihiX3MpO1xuICBcbiAgICByZXR1cm4gYV9uICogYl9uO1xuICB9Y2F0Y2goZXJyOiBFcnJvciB8IGFueSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgfVxuXG59O1xuXG5jb3JlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcblxuICBpZighYSB8fCAhYil7XG4gICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGFfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgbGV0IGJfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgfWVsc2V7XG4gICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICB9XG4gIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gIH1lbHNle1xuICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgfVxuXG4gIGNvbnN0IGFfYXJyID0gYV8uYXJyYXk7XG4gIGNvbnN0IGJfYXJyID0gYl8uYXJyYXk7XG5cbiAgaWYoY29yZS5pc1plcm8oYV8pIHx8IGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMFwiKTtcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUoYV8pKXtcbiAgICByZXR1cm4gYl87XG4gIH1cblxuICBpZihjb3JlLmlzT25lKGJfKSl7XG4gICAgcmV0dXJuIGFfO1xuICB9XG5cbiAgdHJ5e1xuXG4gICAgY29uc3QgYV9uZWdhdGl2ZSA9IGFfLm5lZ2F0aXZlO1xuICAgIGNvbnN0IGJfbmVnYXRpdmUgPSBiXy5uZWdhdGl2ZTtcbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV9uZWdhdGl2ZSAmJiBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfWVsc2UgaWYoYV9uZWdhdGl2ZSB8fCBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYV9kZWNfbGVuZ3RoID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2RlY19sZW5ndGggPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGRlY19sZW5ndGggPSBhX2RlY19sZW5ndGggKyBiX2RlY19sZW5ndGg7XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGJ9KXtcbiAgICAgIGNvbnN0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xuICAgICAgY29uc3QgYXJyX2EgPSBhLmFycmF5O1xuICAgICAgY29uc3QgYXJyX2IgPSBiLmFycmF5O1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgYWEgPSBhcnJfYVtpXSA/IGFycl9hW2ldIDogMDtcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICAgICAgICBhcnIuZmlsbCgwLCAwLCBpKTtcblxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIGNvbnN0IGJiID0gYXJyX2Jbal0gPyBhcnJfYltqXSA6IDA7XG4gICAgICAgICAgbGV0IHJlcyA9IGFhICogYmI7XG4gICAgICAgICAgXG4gICAgICAgICAgYXJyLnB1c2gocmVzKTtcblxuICAgICAgICAgIGNvbnN0IHRndF9pbmRleCA9IGkgKyBqO1xuICAgICAgICAgIGxldCB0Z3Q6IG51bWJlciA9IGFycmF5W3RndF9pbmRleF07XG4gICAgICAgICAgaWYoIXRndCl7XG4gICAgICAgICAgICB0Z3QgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdfdGd0ID0gdGd0ICsgcmVzO1xuICAgICAgICAgIGFycmF5W3RndF9pbmRleF0gPSBuZXdfdGd0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29yZS5maXhDYXJyeShhcnJheSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgbmV3X2FycmF5IH0gPSBjYWxjKHtcbiAgICAgIGE6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5hX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYV8ubmVnYXRpdmUsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBhcnJheTogWy4uLmJfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBiXy5uZWdhdGl2ZVxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld19kZWNpbWFsX2luZGV4ID0gbmV3X2FycmF5Lmxlbmd0aCAtIGRlY19sZW5ndGg7XG5cbiAgICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLnJldmVyc2UoKSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IG5ld19kZWNpbWFsX2luZGV4XG4gICAgfSk7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbn07XG5cbmNvcmUubXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICByZXR1cm4gY29yZS5tdWx0aXBsaWNhdGlvbihhLCBiKTtcbn07XG5cbmNvcmUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBjb25zdCBuXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICAgIGxldCBzdHIgPSBcIjAuXCI7XG4gICAgY29uc3QgbGVuID0gbl8uYXJyYXkubGVuZ3RoO1xuICAgIGlmKGxlbiA+IDApe1xuICAgICAgZm9yKGxldCBpID0gbl8uZGVjaW1hbF9pbmRleDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgcyA9IFN0cmluZyhuXy5hcnJheVtpXSk7XG4gICAgICAgIHN0ciA9IHN0ciArIHM7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBzdHIgPSBzdHIgKyBcIjBcIjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoc3RyKTtcbiAgICByZXR1cm4gbnVtO1xuICB9Y2F0Y2goZXJyKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG59KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBufSk7XG4gICAgfVxuICB9XG59O1xuXG5cbmNvcmUuZGl2aXNpb24gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3IgfCBzdHJpbmcge1xuXG4gIHRyeSB7XG4gICAgaWYoIWEgfHwgIWIpe1xuICAgICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYV86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYl8pKXtcbiAgICAgIGlmKGNvcmUuaXNMYXJnZShhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiSW5maW5pdHlcIjtcbiAgICAgIH1lbHNlIGlmKGNvcmUuaXNTbWFsbChhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiTmVnYXRpdmUgSW5maW5pdHlcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIk5vdCBhIE51bWJlclwiO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGFfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldFplcm8oKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihjb3JlLmlzT25lKGJfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hXyxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRPbmUoKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhX25lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG4gICAgY29uc3QgYl9uZWdhdGl2ZSA9IGJfLm5lZ2F0aXZlO1xuXG4gICAgaWYoYV8ubmVnYXRpdmUpe1xuICAgICAgYV8ubmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihiXy5uZWdhdGl2ZSl7XG4gICAgICBiXy5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBuZWdhdGl2ZTtcbiAgICBpZihhX25lZ2F0aXZlICYmIGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9ZWxzZSBpZihhX25lZ2F0aXZlIHx8IGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGIsIG1heH0pe1xuICAgICAgY29uc3QgcmVzdWx0X2FycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCByZW1haW4gPSBjb3JlLmdldFplcm8oKTtcbiAgICAgIGNvbnN0IGFfID0gY29yZS5jbG9uZShhKTtcbiAgICAgIGNvbnN0IGJfID0gY29yZS5jbG9uZShiKTtcbiAgICAgIGxldCBkZWNpbWFsX2luZGV4ID0gYS5kZWNpbWFsX2luZGV4O1xuICAgICAgbGV0IGRlY2ltYWxfaW5kZXhfcmVtYWluID0gZGVjaW1hbF9pbmRleDtcblxuICAgICAgbGV0IGFfaW50ID0gY29yZS5jbG9uZShhXyk7XG4gICAgICBhX2ludC5kZWNpbWFsX2luZGV4ID0gYV9pbnQuYXJyYXkubGVuZ3RoO1xuICAgICAgbGV0IGFfemVyb19sZW5ndGggPSAwO1xuICAgICAgY29uc3QgYV96ZXJvX3JlcyA9IGFfLmFycmF5LmpvaW4oXCJcIikubWF0Y2goL14wKy8pO1xuICAgICAgaWYoYV96ZXJvX3JlcyAmJiBhX3plcm9fcmVzWzBdKXtcbiAgICAgICAgYV96ZXJvX2xlbmd0aCA9IGFfemVyb19yZXNbMF0ubGVuZ3RoO1xuICAgICAgICBhX2ludCA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGFfaW50LmFycmF5LnNsaWNlKGFfemVyb19sZW5ndGgsIGFfaW50LmFycmF5Lmxlbmd0aCkuam9pbihcIlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBiX2ludCA9IGNvcmUuY2xvbmUoYl8pO1xuICAgICAgYl9pbnQuZGVjaW1hbF9pbmRleCA9IGJfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCBiX3plcm9fbGVuZ3RoID0gMDtcbiAgICAgIGNvbnN0IGJfemVyb19yZXMgPSBiX2ludC5hcnJheS5qb2luKFwiXCIpLm1hdGNoKC9eMCsvKTtcbiAgICAgIGlmKGJfemVyb19yZXMgJiYgYl96ZXJvX3Jlc1swXSl7XG4gICAgICAgIGJfemVyb19sZW5ndGggPSBiX3plcm9fcmVzWzBdLmxlbmd0aDtcbiAgICAgICAgYl9pbnQgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiX2ludC5hcnJheS5zbGljZShiX3plcm9fbGVuZ3RoLCBiX2ludC5hcnJheS5sZW5ndGgpLmpvaW4oXCJcIikpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB6ZXJvX2dhcCA9IGFfemVyb19sZW5ndGggLSBiX3plcm9fbGVuZ3RoO1xuICAgICAgY29uc3QgYV9hcnJheSA9IFsuLi5hX2ludC5hcnJheV07XG4gICAgICBjb25zdCBhX2RlY2ltYWxfbGVuZ3RoID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICAgIGNvbnN0IGJfZGVjaW1hbF9sZW5ndGggPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuICAgICAgY29uc3QgZGVjaW1hbF9nYXAgPSBhX2RlY2ltYWxfbGVuZ3RoIC0gYl9kZWNpbWFsX2xlbmd0aDtcblxuICAgICAgY29uc3QgdGltZXMgPSBOdW1iZXIoY29yZS5hZGQoYV9pbnQuYXJyYXkubGVuZ3RoLCBtYXgpLmFycmF5LmpvaW4oXCJcIikpO1xuXG4gICAgICBjb25zdCBhX2xlbiA9IGFfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCByZW1haW5faXNfZGVjaW1hbCA9IGZhbHNlO1xuICAgICAgbGV0IHJlbWFpbl9hcnIgPSBbMF07XG5cbiAgICAgIGxldCBkZWNpbWFsX2NvdW50ID0gMDtcbiAgICAgIGxldCByZW1haW5fYW5kX2FfbGVuX2dhcCA9IDA7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGltZXM7IGkrKyl7XG4gICAgICAgIGxldCBpc19sZXNzID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNvdW50ID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbjEgPSBjb3JlLm11bHRpcGxpY2F0aW9uKHJlbWFpbiwgXCIxMFwiKTtcbiAgICAgICAgY29uc3QgcmVtYWluMiA9IFN0cmluZyhhX2FycmF5LnNsaWNlKGksIGkgKyAxKS5sZW5ndGggPT09IDEgPyBhX2FycmF5LnNsaWNlKGksIGkgKyAxKVswXSA6IFwiMFwiKTtcbiAgICAgICAgcmVtYWluID0gY29yZS5hZGQocmVtYWluMSwgcmVtYWluMik7XG5cbiAgICAgICAgcmVtYWluX2FuZF9hX2xlbl9nYXAgPSByZW1haW4uYXJyYXkubGVuZ3RoIC0gYV9sZW47XG4gICAgICAgIGxldCBwcm9kdWN0ID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICAgIGlmKGkgPT09IGFfbGVuKXtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4ID0gaTtcbiAgICAgICAgICBpZihjb3JlLmlzWmVybyhyZW1haW4pKXtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbl9pc19kZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlY2ltYWxfY291bnQgPSBkZWNpbWFsX2NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZihpID4gYV9sZW4pe1xuICAgICAgICAgIGRlY2ltYWxfY291bnQgPSBkZWNpbWFsX2NvdW50Kys7XG4gICAgICAgICAgaWYoY29yZS5pc1plcm8ocmVtYWluKSl7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXhfY291bnQgPSBtYXg7XG4gICAgICAgIHdoaWxlKGlzX2xlc3Mpe1xuICAgICAgICAgIGNvdW50ID0gY29yZS5hZGQoY291bnQsIFwiMVwiKTtcbiAgICAgICAgICBpZihjb3JlLmlzTGFyZ2UoY291bnQsIG1heF9jb3VudCkpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHByZV9wcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICBwcm9kdWN0ID0gY29yZS5tdWx0aXBsaWNhdGlvbihiX2ludCwgY291bnQpO1xuXG4gICAgICAgICAgaWYoY29yZS5pc0VxdWFsKHJlbWFpbiwgcHJvZHVjdCkpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnQ7XG4gICAgICAgICAgICByZXN1bHRfYXJyLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbiA9IGNvcmUuc3VidHJhY3QocmVtYWluLCBwcm9kdWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjb3JlLmlzTGFyZ2UocHJvZHVjdCwgcmVtYWluKSl7XG4gICAgICAgICAgICBpc19sZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3JlLnN1YnRyYWN0KGNvdW50LCBcIjFcIik7XG4gICAgICAgICAgICByZXN1bHRfYXJyLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbiA9IGNvcmUuc3VidHJhY3QocmVtYWluLCBwcmVfcHJvZHVjdCk7XG5cbiAgICAgICAgICAgIGlmKHJlbWFpbl9pc19kZWNpbWFsKXtcbiAgICAgICAgICAgICAgcmVtYWluX2Fyci5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlbWFpbl9hcnIucHVzaCguLi5yZW1haW4uYXJyYXkpO1xuICAgICAgY29uc3QgbmV3X2FyciA9IHJlc3VsdF9hcnIuZmxhdE1hcChlID0+IGUuYXJyYXkpO1xuXG4gICAgICBpZih6ZXJvX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgemVyb19nYXA7IGkrKyl7XG4gICAgICAgICAgbmV3X2Fyci51bnNoaWZ0KDApO1xuICAgICAgICAgIGRlY2ltYWxfaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihkZWNpbWFsX2dhcCA8IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5hYnMoZGVjaW1hbF9nYXApOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIucHVzaCgwKTtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKGRlY2ltYWxfZ2FwID4gMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBNYXRoLmFicyhkZWNpbWFsX2dhcCk7IGkrKyl7XG4gICAgICAgICAgbmV3X2Fyci51bnNoaWZ0KDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHJlbWFpbl9hbmRfYV9sZW5fZ2FwID4gMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZW1haW5fYW5kX2FfbGVuX2dhcDsgaSsrKXtcbiAgICAgICAgICBjb25zdCB0Z3QgPSByZW1haW5fYXJyWzBdO1xuICAgICAgICAgIGlmKHRndCA9PT0gMCl7XG4gICAgICAgICAgICByZW1haW5fYXJyLnNoaWZ0KCk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkZWNpbWFsX2luZGV4X3JlbWFpbiA9IGRlY2ltYWxfaW5kZXhfcmVtYWluIC0gcmVtYWluX2FuZF9hX2xlbl9nYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbWFpbl9hcnIucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYocmVtYWluX2FuZF9hX2xlbl9nYXAgPCAwKXtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5hYnMocmVtYWluX2FuZF9hX2xlbl9nYXApO1xuICAgICAgICBjb25zdCBhcnIgPSBBcnJheShsZW4pLmZpbGwoMCk7XG4gICAgICAgIHJlbWFpbl9hcnIudW5zaGlmdCguLi5hcnIpO1xuICAgICAgfVxuXG4gICAgICBpZihyZW1haW5faXNfZGVjaW1hbCl7XG4gICAgICAgIHJlbWFpbl9hcnIgPSBbLi4ucmVtYWluX2Fycl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5ld19hcnJheTogbmV3X2FycixcbiAgICAgICAgZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleCxcbiAgICAgICAgcmVtYWluX2FycmF5OiByZW1haW5fYXJyLFxuICAgICAgICByZW1haW5fZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleF9yZW1haW4sXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1heF90aW1lc19pZl9ub3RfZGl2aXNpYmxlID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIxMFwiKTtcblxuICAgIGNvbnN0IHsgbmV3X2FycmF5LCBkZWNpbWFsX2luZGV4LCByZW1haW5fYXJyYXksIHJlbWFpbl9kZWNpbWFsX2luZGV4fSA9IGNhbGMoe2E6IGFfLCBiOiBiXywgbWF4OiBtYXhfdGltZXNfaWZfbm90X2RpdmlzaWJsZX0pO1xuXG5cbiAgICBjb25zdCByZW1haW5kZXIgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLnJlbWFpbl9hcnJheV0sXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgICBkZWNpbWFsX2luZGV4OiByZW1haW5fZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBxdW90aWVudCA9IGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ubmV3X2FycmF5XSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXhcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5xdW90aWVudCxcbiAgICAgIHJlbWFpbmRlcjpyZW1haW5kZXIsXG4gICAgfVxuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuICBcbn07XG5cbmNvcmUuZGl2aWRlID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgcmV0dXJuIGNvcmUuZGl2aXNpb24oYSwgYik7XG59O1xuXG5jb3JlLmZsb29yID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICB0cnl7XG4gICAgY29uc3QgbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG51bSk7XG4gICAgY29uc3QgaXNfZGVjaW1hbCA9IG4uZGVjaW1hbF9pbmRleCA8IG4uYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGRlYyA9IG4uYXJyYXkuc2xpY2Uobi5kZWNpbWFsX2luZGV4LCBuLmFycmF5Lmxlbmd0aCk7XG4gICAgY29uc3QgZGVjX24gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChkZWMuam9pbihcIlwiKSk7XG4gICAgaWYoY29yZS5pc1plcm8oZGVjX24pKXtcbiAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBsZXQgbl8gPSB7XG4gICAgICAuLi5uLFxuICAgICAgYXJyYXk6IG4uYXJyYXkuc2xpY2UoMCwgbi5kZWNpbWFsX2luZGV4KVxuICAgIH07XG4gICAgaWYobi5uZWdhdGl2ZSAmJiBpc19kZWNpbWFsKXtcbiAgICAgIG5fID0gY29yZS5zdWJ0cmFjdChuXywgXCIxXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbl87XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbnVtfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogbnVtfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb3JlLmNlaWwgPSBmdW5jdGlvbihudW06IFN1dU51bWJlcik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGNvbnN0IG4gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChudW0pO1xuICAgIGNvbnN0IGlzX2RlY2ltYWwgPSBuLmRlY2ltYWxfaW5kZXggPCBuLmFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBkZWMgPSBuLmFycmF5LnNsaWNlKG4uZGVjaW1hbF9pbmRleCwgbi5hcnJheS5sZW5ndGgpO1xuICAgIGNvbnN0IGRlY19uID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoZGVjLmpvaW4oXCJcIikpO1xuICAgIGlmKGNvcmUuaXNaZXJvKGRlY19uKSl7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgbGV0IG5fID0ge1xuICAgICAgLi4ubixcbiAgICAgIGFycmF5OiBuLmFycmF5LnNsaWNlKDAsIG4uZGVjaW1hbF9pbmRleClcbiAgICB9O1xuICAgIGlmKCFuLm5lZ2F0aXZlICYmIGlzX2RlY2ltYWwpe1xuICAgICAgbl8gPSBjb3JlLmFkZChuXywgXCIxXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbl87XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbnVtfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogbnVtfSk7XG4gICAgfVxuICB9XG5cbn07XG5cblxuY29yZS5tb2R1bG8gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3IgfCBzdHJpbmcge1xuICB0cnl7XG4gICAgaWYoIWEgfHwgIWIpe1xuICAgICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYV8gPSBjb3JlLmdldFplcm8oKTtcbiAgICBsZXQgYl8gPSBjb3JlLmdldFplcm8oKTtcbiAgICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgfWVsc2V7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gICAgfVxuICAgIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhiXykpe1xuICAgICAgaWYoY29yZS5pc0xhcmdlKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJJbmZpbml0eVwiO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc1NtYWxsKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJOZWdhdGl2ZSBJbmZpbml0eVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiTm90IGEgTnVtYmVyXCI7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYV8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0WmVybygpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFfcG9zaSA9IGNvcmUuY2xvbmUoYV8pO1xuICAgIGNvbnN0IGJfcG9zaSA9IGNvcmUuY2xvbmUoYl8pO1xuICAgIGFfcG9zaS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIGJfcG9zaS5uZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYoY29yZS5pc0xhcmdlKGJfcG9zaSwgYV9wb3NpKSl7XG4gICAgICBjb25zdCBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEpO1xuICAgICAgcmV0dXJuIGFfO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNFcXVhbChhXywgYl8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0WmVybygpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBuZWdhdGl2ZTtcbiAgICBpZihhXy5uZWdhdGl2ZSl7XG4gICAgICBuZWdhdGl2ZSA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYn0pe1xuICAgICAgY29uc3QgZGl2aWRlZCA9IGNvcmUuZGl2aWRlKGEsIGIpO1xuICAgICAgY29uc3QgZmxvb3JlZCA9IGNvcmUuZmxvb3IoZGl2aWRlZCk7XG4gICAgICBjb25zdCBtdWx0aXBsZWQgPSBjb3JlLm11bHRpcGxlKGIsIGZsb29yZWQpO1xuICAgICAgY29uc3QgcmVzID0gY29yZS5zdWJ0cmFjdChhLCBtdWx0aXBsZWQpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzID0gY2FsYyh7YTogey4uLmFfLCBuZWdhdGl2ZTogZmFsc2V9LCBiOiB7Li4uYl8sIG5lZ2F0aXZlOiBmYWxzZX0gfSk7XG5cbiAgICBjb25zdCBxdW90aWVudCA9IGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5xdW90aWVudCxcbiAgICB9XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxufTtcblxuY29yZS5nZXRTdXVOdW1iZXIgPSAobjogYW55KSA9PiB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBtYXA6IG9iamVjdCA9IHtcbiAgYWRkOiB7XG4gICAgamE6IFwi5Yqg566XXCJcbiAgfSxcbiAgc3VidHJhY3Q6IHtcbiAgICBqYTogXCLmuJvnrpdcIlxuICB9LFxuICBtdWx0aXBsaWNhdGlvbjoge1xuICAgIGphOiBcIuS5l+eul1wiXG4gIH0sXG4gIG11bHRpcGxlOiB7XG4gICAgamE6IFwi5LmX566XXCJcbiAgfSxcbiAgZGl2aXNpb246IHtcbiAgICBqYTogXCLpmaTnrpdcIlxuICB9LFxuICBkaXZpZGU6IHtcbiAgICBqYTogXCLpmaTnrpdcIlxuICB9LFxuICBmbG9vcjoge1xuICAgIGphOiBcIuWIh+OCiuaNqOOBplwiXG4gIH0sXG4gIGNlaWw6IHtcbiAgICBqYTogXCLliIfjgorkuIrjgZJcIlxuICB9LFxuICBjbG9uZToge1xuICAgIGphOiBcIuOCr+ODreODvOODsy/jgrPjg5Tjg7xcIlxuICB9LFxuICBjb3B5OiB7XG4gICAgamE6IFwi44Kv44Ot44O844OzL+OCs+ODlOODvFwiXG4gIH0sXG4gIGdldExhcmdlOiB7XG4gICAgamE6IFwiMuOBpOOBruW8leaVsOOBruOBhuOBoeWkp+OBjeOBhOaWueOCkuWPluW+l1wiXG4gIH0sXG4gIGdldFNtYWxsOiB7XG4gICAgamE6IFwiMuOBpOOBruW8leaVsOOBruOBhuOBoeWwj+OBleOBhOaWueOCkuWPluW+l1wiXG4gIH0sXG4gIGlzTGFyZ2U6IHtcbiAgICBqYTogXCLnrKzkuIDlvJXmlbDjgYznrKzkuozlvJXmlbDjgojjgorlpKfjgY3jgYTjgYtcIlxuICB9LFxuICBpc1NtYWxsOiB7XG4gICAgamE6IFwi56ys5LiA5byV5pWw44GM56ys5LqM5byV5pWw44KI44KK5bCP44GV44GE44GLXCJcbiAgfSxcbiAgaXNFcXVhbDoge1xuICAgIGphOiBcIuesrOS4gOW8leaVsOOBqOesrOS6jOW8leaVsOOBjOetieOBl+OBhOOBi1wiXG4gIH0sXG4gIGdldFplcm86IHtcbiAgICBqYTogXCIw44KS5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0T25lOiB7XG4gICAgamE6IFwiMeOCkuWPluW+l1wiXG4gIH0sXG4gIGlzWmVybzoge1xuICAgIGphOiBcIjDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc09uZToge1xuICAgIGphOiBcIjHjgYvjganjgYbjgYtcIlxuICB9LFxuICBzcXVhcmU6IHtcbiAgICBqYTogXCLlubPmlrnmlbBcIlxuICB9LFxuICBnZXRBYnNvbHV0ZTp7XG4gICAgamE6IFwi57W25a++5YCk44Gu5Y+W5b6XXCJcbiAgfSxcbiAgZXhwb25lbnRpYXRlOiB7XG4gICAgamE6IFwi44G544GN5LmXXCIsXG4gIH0sXG4gIGdldEludGVnZXI6IHtcbiAgICBqYTogXCLmlbTmlbDpg6jjgpLlj5blvpdcIixcbiAgfSxcbiAgZ2V0RGVjaW1hbDoge1xuICAgIGphOiBcIuWwj+aVsOmDqOOCkuWPluW+l1wiLFxuICB9LFxuICBpc05hdHVyYWxOdW1iZXI6IHtcbiAgICBqYTogXCLoh6rnhLbmlbDjgYvjganjgYbjgYtcIixcbiAgfSxcbiAgaW5jbHVkZURlY2ltYWw6IHtcbiAgICBqYTogXCLlsI/mlbDpg6jjgpLlkKvjgoDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc05lZ2F0aXZlOiB7XG4gICAgamE6IFwi6LKg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNQb3NpdGl2ZToge1xuICAgIGphOiBcIuato+aVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIG5lZ2F0ZToge1xuICAgIGphOiBcIuato+aVsOOBruWgtOWQiOiyoOaVsOOBq+OBmeOCi1wiXG4gIH0sXG4gIG1ha2VQb3NpdGl2ZToge1xuICAgIGphOiBcIuiyoOaVsOOBruWgtOWQiOato+aVsOOBq+OBmeOCi1wiXG4gIH0sXG4gIGdldE5leHQ6IHtcbiAgICBqYTogXCLmlbTmlbAx44KS6L+95Yqg44GX44Gf5pWw44KS5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UHJldjoge1xuICAgIGphOiBcIuaVtOaVsDHjgpLlvJXjgYTjgZ/mlbDjgpLlj5blvpdcIlxuICB9LFxuICBpc0ludGVnZXI6IHtcbiAgICBqYTogXCLmlbTmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc0V2ZW5OdW1iZXI6IHtcbiAgICBqYTogXCLlgbbmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc09kZE51bWJlcjoge1xuICAgIGphOiBcIuWlh+aVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGdldERpdmlzb3JzOiB7XG4gICAgamE6IFwi57SE5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgY29tbW9uRGl2aXNvcnM6IHtcbiAgICBqYTogXCLlvJXmlbAx44Go5byV5pWwMuOBruWFrOe0hOaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGdyZWF0ZXN0Q29tbW9uRGl2aXNvcjoge1xuICAgIGphOiBcIuW8leaVsDHjgajlvJXmlbAy44Gu5pyA5aSn5YWs57SE5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgY29tbW9uTXVsdGlwbGU6IHtcbiAgIGphOiBcIuW8leaVsDHjgajlvJXmlbAy44Gu5YWs5YCN5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgbGVhc3RDb21tb25NdWx0aXBsZToge1xuICAgIGphOiBcIuW8leaVsDHjgajlvJXmlbAy44Gu5pyA5bCP5YWs5YCN5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgbWFrZUZpYm9uYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OV44Kj44Oc44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZUx1Y2FTZXF1ZW5jZToge1xuICAgIGphOiBcIuODquODpeOCq+aVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VUcmlib25hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4jjg6rjg5zjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlVGV0cmFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OG44OI44Op44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZVBlbnRhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODmuODs+OCv+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VIZXhhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODmOOCreOCteODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VIZXB0YW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5jjg5fjgr/jg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlT2N0YW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjgqrjgq/jgr/jg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlTm9uYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg47jg4rjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlRGVjYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4fjgqvjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlVW5kZWNhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuOCpuODs+ODh+OCq+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VEb2RlY2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OJ44OH44Kr44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZUljb3NhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuOCpOOCs+OCteODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIHN1bW1hdGlvbjoge1xuICAgIGphOiBcIue3j+WSjFwiXG4gIH0sXG4gIGluZmluaXRlUHJvZHVjdDoge1xuICAgIGphOiBcIue3j+S5ly/nt4/nqY1cIlxuICB9LFxuICBkaWdpdFN1bToge1xuICAgIGphOiBcIuaVsOWtl+WSjC/lkITmoYHjga7nt4/lkoxcIlxuICB9LFxuICBtYWtlVHJpYW5nbGVOdW1iZXI6IHtcbiAgICBqYTogXCLkuInop5LmlbDjga7nlJ/miJBcIlxuICB9LFxuICBtYWtlUHJvbmljTnVtYmVyOiB7XG4gICAgamE6IFwi55+p5b2i5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgZmFjdG9yaWFsOiB7XG4gICAgamE6IFwi6ZqO5LmXXCJcbiAgfSxcbiAgbW9kdWxvOiB7XG4gICAgamE6IFwi5Ymw5L2Z5ryU566XXCJcbiAgfSxcbiAgaXNNZXJzZW5uZU51bWJlcjoge1xuICAgIGphOiBcIuODoeODq+OCu+ODs+ODjOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIG1ha2VNZXJzZW5uZU51bWJlcnM6IHtcbiAgICBqYTogXCLjg6Hjg6vjgrvjg7Pjg4zmlbDjga7nlJ/miJBcIlxuICB9LFxuICBpc1ByaW1lTnVtYmVyOiB7XG4gICAgamE6IFwi57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgbWFrZVByaW1lTnVtYmVyczoge1xuICAgIGphOiBcIue0oOaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIGlzTWVyc2VubmVQcmltZU51bWJlcjoge1xuICAgIGphOiBcIuODoeODq+OCu+ODs+ODjOe0oOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzQ29tcG9zaXRlTnVtYmVyOiB7XG4gICAgamE6IFwi5ZCI5oiQ5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNIYXJzaGFkTnVtYmVyOiB7XG4gICAgamE6IFwi44OP44O844K344Oj44OD44OJ5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNadWNrZXJtYW5OdW1iZXI6IHtcbiAgICBqYTogXCLjgrrjg4Pjgqvjg7zjg57jg7PmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc1JlcHVuaXROdW1iZXI6IHtcbiAgICBqYTogXCLjg6zjg5Tjg6Xjg4vjg4Pjg4jmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBnZXRJbnZlcnNpb25OdW1iZXI6IHtcbiAgICBqYTogXCLou6LlgJLmlbDjga7lj5blvpdcIlxuICB9LFxuICBnZXRSZWNpcHJvY2FsOiB7XG4gICAgamE6IFwi6YCG5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmV2ZXJzZToge1xuICAgIGphOiBcIuaVsOOBrumAhumghuOBruWPluW+l1wiXG4gIH0sXG4gIGdldFJhbmRvbU51bWJlckJ5TGluZWFyQ29uZ3J1ZW50aWFsR2VuZXJhdG9yczoge1xuICAgIGphOiBcIue3muW9ouWQiOWQjOazleOBp+OBrueWkeS8vOS5seaVsOWPluW+l1wiXG4gIH0sXG4gIGdldFJhbmRvbU51bWJlckJ5TWlkZGxlU3F1YXJlTWV0aG9kOiB7XG4gICAgamE6IFwi5bmz5pa55o6h5Lit5rOV44Gn44Gu55aR5Ly85Lmx5pWw5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJGZWVkYmFja1NoaWZ0UmVnaXN0ZXI6IHtcbiAgICBqYTogXCLnt5rlvaLluLDpgoTjgrfjg5Xjg4jjg6zjgrjjgrnjgr/jgavjgojjgovnlpHkvLzkubHmlbDlj5blvpdcIlxuICB9LFxuICBpc1NvcGhpZUdlcm1haW5QcmltZToge1xuICAgIGphOiBcIuOCveODleOCo+ODvOOCuOOCp+ODq+ODnuODs+e0oOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzU2FmZVByaW1lOiB7XG4gICAgamE6IFwi5a6J5YWo57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgZ2V0RmVybWF0TnVtYmVyOiB7XG4gICAgamE6IFwi44OV44Kn44Or44Oe44O85pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgaXNGZXJtYXROdW1iZXI6IHtcbiAgICBqYTogXCLjg5Xjgqfjg6vjg57jg7zmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc0Zlcm1hdFByaW1lOiB7XG4gICAgamE6IFwi44OV44Kn44Or44Oe44O857Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgZ2V0Q3VsbGVuTnVtYmVyOiB7XG4gICAgamE6IFwi44Kr44Os44Oz5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgaXNDdWxsZW5OdW1iZXI6IHtcbiAgICBqYTogXCLjgqvjg6zjg7PmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc0N1bGxlblByaW1lOiB7XG4gICAgamE6IFwi44Kr44Os44Oz57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgZ2V0UHJvdGhOdW1iZXI6IHtcbiAgICBqYTogXCLjg5fjg63jgrnmlbDjga7lj5blvpdcIlxuICB9LFxuICBtYWtlUHJvdGhOdW1iZXJzOiB7XG4gICAgamE6IFwi44OX44Ot44K55pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgaXNQcm90aE51bWJlcjoge1xuICAgIGphOiBcIuODl+ODreOCueaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzUHJvdGhQcmltZToge1xuICAgIGphOiBcIuODl+ODreOCuee0oOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIG1ha2VQaWVycG9udE51bWJlcjoge1xuICAgIGphOiBcIuODlOOCouODneODs+ODiOaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIG1ha2VQaWVycG9udFByaW1lczoge1xuICAgIGphOiBcIuODlOOCouODneODs+ODiOe0oOaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIGlzUGllcnBvbnRQcmltZToge1xuICAgIGphOiBcIuODlOOCouODneODs+ODiOe0oOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG59O1xuXG5jb25zdCB3aGF0SXMgPSBmdW5jdGlvbih7bmFtZT1cIlwiLCBsYW5nPVwiamFcIn06IHsgbmFtZTogc3RyaW5nLCBsYW5nOiBzdHJpbmd9KTogc3RyaW5ne1xuICBpZighbmFtZSl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBsZXQgdGFyZ2V0ID0gdXRpbHNbbmFtZV07XG4gIGlmKCF0YXJnZXQpe1xuICAgIHRhcmdldCA9IGNvcmVbbmFtZV07XG4gIH1cblxuICBjb25zdCBleGlzdHMgPSB0YXJnZXQgPyB0cnVlIDogZmFsc2U7XG4gIGlmKCFleGlzdHMpe1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgY29uc3QgcmVzID0gbWFwW25hbWVdO1xuICBpZihyZXMgJiYgcmVzW2xhbmddKXtcbiAgICByZXR1cm4gcmVzW2xhbmddO1xuICB9XG4gIGNvbnN0IG90aGVyX2xhbmcgPSBPYmplY3Qua2V5cyhyZXMpWzBdO1xuICBpZihvdGhlcl9sYW5nKXtcbiAgICByZXR1cm4gcmVzW290aGVyX2xhbmddO1xuICB9XG5cbiAgcmV0dXJuIFwiXCI7XG5cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgd2hhdElzOyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5pbXBvcnQgeyBTdXVOdW1iZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCByYW5kb206YW55ID0ge307XHJcblxyXG5jb25zdCBzZWVkczphbnkgPSB7fTtcclxuXHJcbmNvbnN0IGdldFNlZWQgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHNlZWRzW25hbWVdO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0U2VlZCA9IChzZWVkOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIHNlZWRzW25hbWVdID0gc2VlZDtcclxufTtcclxuXHJcbmNvbnN0IGdldE9yU2V0U2VlZCA9IChzZWVkOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gXHJcbiAgaWYoc2VlZCl7XHJcbiAgICBzZWVkc1tuYW1lXSA9IHNlZWQ7XHJcbiAgfWVsc2V7XHJcbiAgICBzZWVkID0gc2VlZHNbbmFtZV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VlZDtcclxufTtcclxuXHJcbmxldCByZWdpc3RlcjEgPSAweDExMTE7XHJcbmxldCByZWdpc3RlcjIgPSAweDExMTE7XHJcbmNvbnN0IGxmc3IgPSAoc2VlZCkgPT4ge1xyXG5cclxuICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIsIHJlZ2lzdGVyMS50b1N0cmluZygyKSlcclxuICBcclxuICBpZihzZWVkKXtcclxuICAgIGNvbnNvbGUubG9nKFwic2VlZFwiLCBzZWVkLnRvU3RyaW5nKDIpKVxyXG4gICAgcmVnaXN0ZXIxID0gMHhmZmZmICYgc2VlZDtcclxuICAgIHJlZ2lzdGVyMiA9IDB4ZmZmZiAmIHNlZWQ7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyMVwiLCByZWdpc3RlcjEudG9TdHJpbmcoMikpXHJcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyMlwiLCByZWdpc3RlcjIudG9TdHJpbmcoMikpXHJcbiAgfVxyXG4gIGxldCBiaXQxID0gc2VlZCAmIDB4ZmZmZjtcclxuICBsZXQgYml0MiA9IHNlZWQgJiAweGZmZmY7XHJcbiAgY29uc29sZS5sb2coXCJiaXRcIiwgYml0MS50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMxID0gKHJlZ2lzdGVyMSAmIDB4MDAwMSk7XHJcbiAgY29uc29sZS5sb2coXCJyZXMxXCIsIHJlczEudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMiA9IHJlczEgXiAoKHJlZ2lzdGVyMSAmIDB4MDAwNCkgPj4gMik7XHJcbiAgY29uc29sZS5sb2coXCJyZXMyXCIsIHJlczIudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMyA9IHJlczIgXiAoKHJlZ2lzdGVyMSAmIDB4MDAwOCkgPj4gMyk7XHJcbiAgY29uc29sZS5sb2coXCJyZXMzXCIsIHJlczMudG9TdHJpbmcoMikpXHJcbiAgYml0MSA9IHJlczMgXiAoKHJlZ2lzdGVyMSAmIDB4MDAyMCkgPj4gNSk7XHJcbiAgY29uc29sZS5sb2coXCJiaXRcIiwgYml0MS50b1N0cmluZygyKSlcclxuICBiaXQyID0gKHJlZ2lzdGVyMiAmIDB4MDAwMSkgXlxyXG4gICAgKChyZWdpc3RlcjIgJiAweDAwMDQpID4+IDIpIF5cclxuICAgICgocmVnaXN0ZXIyICYgMHgwMDA4KSA+PiAzKSBeXHJcbiAgICAoKHJlZ2lzdGVyMiAmIDB4MDAyMCkgPj4gNSk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJiaXRcIiwgYml0LnRvU3RyaW5nKDIpKVxyXG5cclxuICByZWdpc3RlcjEgPSAocmVnaXN0ZXIxID4+IDEpIHwgKGJpdDEgPDwgMTUpO1xyXG4gIHJlZ2lzdGVyMiA9IChyZWdpc3RlcjIgPj4gMSkgfCAoYml0MiA8PCAxNSk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJyZWdpc3RlclwiLCBzZWVkLnRvU3RyaW5nKDIpKVxyXG4gIHJldHVybiB7XHJcbiAgICByZWdpc3RlcjE6IHJlZ2lzdGVyMSxcclxuICAgIHJlZ2lzdGVyMjogcmVnaXN0ZXIyLFxyXG4gICAgYml0MTogYml0MSxcclxuICAgIGJpdDI6IGJpdDJcclxuICB9O1xyXG5cclxufVxyXG5cclxuXHJcbnJhbmRvbS5nZXROb3RSYW5kb21OdW1iZXIgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXROb3RSYW5kb21OdW1iZXJcIjtcclxuICBjb25zdCBzdG9yZWRTZWVkID0gZ2V0U2VlZChteU5hbWUpO1xyXG4gIGlmKCFzdG9yZWRTZWVkKXtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmUgc2VlZCBwYXJhbWV0ZXJcIik7XHJcbiAgfVxyXG4gIHNldFNlZWQoc3RvcmVkU2VlZCwgbXlOYW1lKTtcclxuICByZXR1cm4gY29yZS5nZXRTdXVOdW1iZXIoc3RvcmVkU2VlZCk7XHJcbn07XHJcblxyXG5yYW5kb20uZ2V0UmFuZG9tTnVtYmVyID0gKHNlZWQ6IGFueSkgPT4ge1xyXG4gIGNvbnN0IG51bSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgcmV0dXJuIGNvcmUuZ2V0U3V1TnVtYmVyKG51bSk7XHJcbn07XHJcblxyXG5yYW5kb20uZ2V0UmFuZG9tTnVtYmVyQnlNaWRkbGVTcXVhcmVNZXRob2QgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXRSYW5kb21OdW1iZXJCeU1pZGRsZVNxdWFyZU1ldGhvZFwiO1xyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcbiAgY29uc3QgZmlyc3QgPSBjb3JlLmdldFN1dU51bWJlcihzdG9yZWRTZWVkID8gc3RvcmVkU2VlZCA6IFwiMTIzNFwiKTtcclxuICBjb25zdCByZXMgPSB1dGlscy5zcXVhcmUoZmlyc3QpO1xyXG4gIGxldCBzZWNvbmQgPSByZXMuYXJyYXkuc2xpY2UoMiwgNikuam9pbihcIlwiKTtcclxuICBpZihyZXMuYXJyYXkubGVuZ3RoID09PSA3KXtcclxuICAgIHNlY29uZCA9IHJlcy5hcnJheS5zbGljZSgxLCA1KS5qb2luKFwiXCIpO1xyXG4gIH1cclxuICBjb25zdCBzZWNvbmRudW0gPSBjb3JlLmdldFN1dU51bWJlcihzZWNvbmQpO1xyXG4gIHNldFNlZWQoc2Vjb25kLCBteU5hbWUpO1xyXG4gIHJldHVybiBzZWNvbmRudW07XHJcbn07XHJcblxyXG5yYW5kb20uZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJDb25ncnVlbnRpYWxHZW5lcmF0b3JzID0gKHNlZWQ6IGFueSkgPT4ge1xyXG4gIGNvbnN0IG15TmFtZSA9IFwiZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJDb25ncnVlbnRpYWxHZW5lcmF0b3JzXCI7XHJcbiAgY29uc3QgYSA9IGNvcmUuZ2V0U3V1TnVtYmVyKFwiM1wiKTtcclxuICBjb25zdCBiID0gY29yZS5nZXRTdXVOdW1iZXIoXCI1XCIpO1xyXG4gIGNvbnN0IG0gPSBjb3JlLmdldFN1dU51bWJlcihcIjEzXCIpO1xyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcbiAgY29uc3QgbmV3X3NlZWQgPSBjb3JlLmdldFN1dU51bWJlcihzdG9yZWRTZWVkID8gc3RvcmVkU2VlZCA6IFwiOFwiKTtcclxuICBzZXRTZWVkKG5ld19zZWVkLCBteU5hbWUpO1xyXG4gIC8vIChhIHggc2VlZCArIGIpIG1vZCBtXHJcbiAgY29uc3QgcmVzMSA9IGNvcmUubXVsdGlwbGUoYSwgbmV3X3NlZWQpO1xyXG4gIGNvbnN0IHJlczIgPSBjb3JlLmFkZChyZXMxLCBiKTtcclxuICBjb25zdCByZXMzID0gY29yZS5tb2R1bG8ocmVzMiwgbSk7XHJcbiAgcmV0dXJuIHJlczM7XHJcbn07XHJcblxyXG5sZXQgcmVnaXN0ZXIgPSAweDExMTE7XHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXJCeUxpbmVhckZlZWRiYWNrU2hpZnRSZWdpc3RlciA9IChzZWVkKSA9PiB7XHJcblxyXG4gIGNvbnN0IG15TmFtZSA9IFwiZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJGZWVkYmFja1NoaWZ0UmVnaXN0ZXJcIjtcclxuICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIsIHJlZ2lzdGVyLnRvU3RyaW5nKDIpKVxyXG4gIFxyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcblxyXG4gIGlmKCFzdG9yZWRTZWVkICYmIHNlZWQpe1xyXG4gICAgc2V0U2VlZChzZWVkLCBteU5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJzZWVkXCIsIHNlZWQudG9TdHJpbmcoMikpXHJcbiAgICByZWdpc3RlciA9IDB4ZmZmZiAmIHNlZWQ7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyMVwiLCByZWdpc3Rlci50b1N0cmluZygyKSlcclxuICB9XHJcbiAgbGV0IGJpdCA9IHNlZWQgJiAweGZmZmY7XHJcbiAgY29uc29sZS5sb2coXCJiaXRcIiwgYml0LnRvU3RyaW5nKDIpKVxyXG4gIGNvbnN0IHJlczEgPSAocmVnaXN0ZXIgJiAweDAwMDEpO1xyXG4gIGNvbnNvbGUubG9nKFwicmVzMVwiLCByZXMxLnRvU3RyaW5nKDIpKVxyXG4gIGNvbnN0IHJlczIgPSByZXMxIF4gKChyZWdpc3RlciAmIDB4MDAwNCkgPj4gMik7XHJcbiAgY29uc29sZS5sb2coXCJyZXMyXCIsIHJlczIudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMyA9IHJlczIgXiAoKHJlZ2lzdGVyICYgMHgwMDA4KSA+PiAzKTtcclxuICBjb25zb2xlLmxvZyhcInJlczNcIiwgcmVzMy50b1N0cmluZygyKSlcclxuICBiaXQgPSByZXMzIF4gKChyZWdpc3RlciAmIDB4MDAyMCkgPj4gNSk7XHJcbiAgY29uc29sZS5sb2coXCJiaXRcIiwgYml0LnRvU3RyaW5nKDIpKVxyXG4gIHJlZ2lzdGVyID0gKHJlZ2lzdGVyID4+IDEpIHwgKGJpdCA8PCAxNSk7XHJcblxyXG4gIHNldFNlZWQocmVnaXN0ZXIsIG15TmFtZSk7XHJcblxyXG4gIHJldHVybiByZWdpc3RlcjtcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTsiLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlXCI7XG5cbmltcG9ydCB7IFN1dU51bWJlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuY29uc3QgdXRpbHM6YW55ID0ge307XG5cbnV0aWxzLnRzID0gKCkgPT4ge3JldHVybiBcInRzXCJ9O1xuXG51dGlscy5nZXROdW1iZXIgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG59O1xuXG51dGlscy5jb3B5ID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgY29uc3QgYyA9IGNvcmUuY2xvbmUobik7XG4gIGlmKCFjKXtcbiAgICBjb25zdCBzID0gY29yZS5udW1BcnJheVRvU3RyaW5nKG4pO1xuICAgIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChzKTtcbiAgfVxuICByZXR1cm4gYztcbn07XG5cbnV0aWxzLmdldExhcmdlID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0TGFyZ2UoYSwgYik7XG59O1xuXG51dGlscy5nZXRTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLmdldFNtYWxsKGEsIGIpO1xufTtcblxudXRpbHMuaXNTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc1NtYWxsKGEsIGIpO1xufVxudXRpbHMuaXNMYXJnZSA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc0xhcmdlKGEsIGIpO1xufVxuXG51dGlscy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoYSwgYik7XG59XG5cbnV0aWxzLmdldFplcm8gPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLmdldFplcm8oKTtcbn07XG5cbnV0aWxzLmdldE9uZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0T25lKCk7XG59O1xuXG51dGlscy5pc1plcm8gPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgcmV0dXJuIGNvcmUuaXNaZXJvKG4pO1xufVxudXRpbHMuaXNPbmUgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgcmV0dXJuIGNvcmUuaXNPbmUobik7XG59XG5cbnV0aWxzLnNxdWFyZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLm11bHRpcGxpY2F0aW9uKG4sIG4pO1xufTtcblxudXRpbHMuZ2V0QWJzb2x1dGUgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIGNvbnN0IG51bTogYW55ID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZihudW0gaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuICBsZXQgY2xvbmUgPSBjb3JlLmNsb25lKG51bSk7XG4gIGlmKGNsb25lLm5lZ2F0aXZlKXtcbiAgICBjbG9uZSA9IHV0aWxzLm1ha2VQb3NpdGl2ZShjbG9uZSk7XG4gIH1cbiAgcmV0dXJuIGNsb25lO1xufTtcblxudXRpbHMuZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oYmFzZSwgZXhwb25lbnQpOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IGIgPSB1dGlscy5nZXROdW1iZXIoYmFzZSk7XG4gIGNvbnN0IGV4cCA9IHV0aWxzLmdldE51bWJlcihleHBvbmVudCk7XG5cbiAgaWYodXRpbHMuaW5jbHVkZURlY2ltYWwoZXhwKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIk5vdCBzdXBwb3J0ZWQgaWYgZXhwb25lbnQgaXMgZGVjaW1hbFwiLCBwYXJhbWV0ZXI6IFtleHBvbmVudF19KTtcbiAgfVxuXG4gIGlmKCF1dGlscy5pc0ludGVnZXIoZXhwKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIkV4cG9uZW50IG11c3QgYmUgaW50ZWdlclwiLCBwYXJhbWV0ZXI6IFtleHBvbmVudF19KTtcbiAgfVxuICBcbiAgaWYodXRpbHMuaXNaZXJvKGV4cCkpe1xuICAgIHJldHVybiBjb3JlLmdldE9uZSgpO1xuICB9XG4gIGlmKHV0aWxzLmlzT25lKGV4cCkpe1xuICAgIHJldHVybiBiO1xuICB9XG5cbiAgbGV0IG11bHRpID0gdHJ1ZTtcbiAgaWYoY29yZS5pc1NtYWxsKGV4cCwgY29yZS5nZXRaZXJvKCkpKXtcbiAgICBtdWx0aSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gY29yZS5nZXRPbmUoKTtcbiAgY29uc3QgZXhwX2FicyA9IHV0aWxzLmdldEFic29sdXRlKGV4cCk7XG4gIGNvbnN0IGdldEJvb2wgPSAoY291bnQpID0+IHtcbiAgICByZXR1cm4gY29yZS5pc1NtYWxsKGNvdW50LCBleHBfYWJzKTtcbiAgfVxuICBsZXQgcmVzID0gYjtcbiAgbGV0IGJvb2wgPSBnZXRCb29sKGNvdW50KTtcbiAgd2hpbGUoYm9vbCl7XG4gICAgaWYobXVsdGkpe1xuICAgICAgcmVzID0gY29yZS5tdWx0aXBsZShyZXMsIGIpO1xuICAgIH1lbHNle1xuICAgICAgcmVzID0gY29yZS5kaXZpZGUocmVzLCBiKTtcbiAgICB9XG4gICAgY291bnQgPSBjb3JlLmFkZChjb3VudCwgXCIxXCIpO1xuICAgIGJvb2wgPSBnZXRCb29sKGNvdW50KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxudXRpbHMuZ2V0SW50ZWdlciA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGxldCBzdHIgPSBcIlwiO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbi5kZWNpbWFsX2luZGV4OyBpKyspe1xuICAgIGNvbnN0IHMgPSBTdHJpbmcobi5hcnJheVtpXSk7XG4gICAgc3RyID0gc3RyICsgcztcbiAgfVxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIoc3RyKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cbnV0aWxzLmdldERlY2ltYWwgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXREZWNpbWFsKG4pO1xufTtcblxudXRpbHMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKGRlY2ltYWwpO1xuICBpZihpc196ZXJvICYmICFuLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pbmNsdWRlRGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBjb25zdCBkZWNpbWFsID0gdXRpbHMuZ2V0RGVjaW1hbChuKTtcbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhkZWNpbWFsKTtcbiAgaWYoaXNfemVybyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxudXRpbHMuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBuXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICByZXR1cm4gbl8ubmVnYXRpdmU7XG59O1xuXG51dGlscy5pc1Bvc2l0aXZlID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGlmKHV0aWxzLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIHJldHVybiAhbl8ubmVnYXRpdmU7XG59O1xuXG51dGlscy5uZWdhdGUgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgaWYobnVtKXtcbiAgICBudW0ubmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBudW07XG59O1xuXG51dGlscy5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgaWYobnVtKXtcbiAgICBudW0ubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gbnVtO1xufTtcblxuXG51dGlscy5nZXROZXh0ID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuYWRkKG4sIFwiMVwiKTtcbn07XG5cbnV0aWxzLmdldFByZXYgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5zdWJ0cmFjdChuLCBcIjFcIik7XG59O1xuXG51dGlscy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBpZih1dGlscy5pc0VxdWFsKGRlY2ltYWwsIFwiMFwiKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xuXG59O1xuXG5cbnV0aWxzLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcmVzID0gY29yZS5tb2R1bG8obiwgXCIyXCIpO1xuXG4gIGNvbnN0IGlzX3plcm8gPSB1dGlscy5pc1plcm8ocmVzKTtcbiAgaWYoaXNfemVybyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaXNPZGROdW1iZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhuLCBcIjJcIik7XG5cbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhyZXMpO1xuICBpZighaXNfemVybyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG51dGlscy5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgaW50ZWdlclwiLCBwYXJhbWV0ZXI6IFtuXX0pO1xuICB9XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgY29uc3QgbnVtOiBTdXVOdW1iZXIgPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYoIW51bSl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBpZihjb3JlLmlzWmVybyhudW0pKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKHV0aWxzLmlzTmF0dXJhbE51bWJlcihudW0pKXtcbiAgICBpZihjb3JlLmlzT25lKG51bSkpe1xuICAgICAgYXJyLnB1c2gobnVtKVxuICAgIH1lbHNle1xuICAgICAgZm9yKGxldCBpID0gY29yZS5nZXRPbmUoKTsgY29yZS5pc0VxdWFsKG51bSwgaSkgfHwgY29yZS5pc0xhcmdlKG51bSwgaSk7IGkgPSBjb3JlLmFkZChpLCBcIjFcIikpe1xuICAgICAgICBjb25zdCByZXM9IGNvcmUuZGl2aXNpb24obnVtLCBpKTtcbiAgICAgICAgaWYoIXV0aWxzLmlzTmF0dXJhbE51bWJlcihyZXMpKXtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1haW5kZXIgPSByZXMucmVtYWluZGVyO1xuICAgICAgICBpZihjb3JlLmlzWmVybyhyZW1haW5kZXIpKXtcbiAgICAgICAgICBhcnIucHVzaCh1dGlscy5nZXROdW1iZXIoaSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5jb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIGlmKCFhICYmIGEgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYoIWIgJiYgYiAhPT0gMCl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhXzogU3V1TnVtYmVyID0gdXRpbHMuZ2V0TnVtYmVyKGEpO1xuICAgIGNvbnN0IGJfOiBTdXVOdW1iZXIgPSB1dGlscy5nZXROdW1iZXIoYik7XG4gICAgXG4gICAgY29uc3QgYV9kaXZpc29yczogU3V1TnVtYmVyW10gPSB1dGlscy5nZXREaXZpc29ycyhhXyk7XG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgcmV0dXJuIGFfZGl2aXNvcnM7XG4gICAgfVxuICAgIGNvbnN0IGJfZGl2aXNvcnM6IFN1dU51bWJlcltdID0gdXRpbHMuZ2V0RGl2aXNvcnMoYl8pO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhX2Rpdmlzb3JzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGFfbjogU3V1TnVtYmVyID0gYV9kaXZpc29yc1tpXTtcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBiX2Rpdmlzb3JzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgY29uc3QgYl9uOiBTdXVOdW1iZXIgPSBiX2Rpdmlzb3JzW2pdO1xuICAgICAgICBpZihjb3JlLmlzRXF1YWwoYV9uLCBiX24pKXtcbiAgICAgICAgICBhcnIucHVzaChhX24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5ncmVhdGVzdENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIHRyeXtcbiAgICBjb25zdCBhcnIgPSB1dGlscy5jb21tb25EaXZpc29ycyhhLCBiKTtcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmNvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYiwgbGltaXQpOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuXG4gIGNvbnN0IGxpbWl0X2xlbmd0aCA9IGxpbWl0ID8gbGltaXQgOiAxMDtcbiAgY29uc3QgYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICBpZighYSAmJiBhICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKCFiICYmIGIgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICB0cnl7XG4gICAgY29uc3QgYV8gPSB1dGlscy5nZXROdW1iZXIoYSk7XG4gICAgY29uc3QgYl8gPSB1dGlscy5nZXROdW1iZXIoYik7XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICBhcnIucHVzaChhXyk7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IGJfYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbGltaXRfbGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgYV9udW0gPSBjb3JlLm11bHRpcGxlKGFfLCBpKTtcbiAgICAgIGFfYXJyLnB1c2goYV9udW0pO1xuICAgIH1cbiAgICBmb3IobGV0IGogPSAxOyBqIDw9IGxpbWl0X2xlbmd0aDsgaisrKXtcbiAgICAgIGNvbnN0IGJfbnVtID0gY29yZS5tdWx0aXBsZShiXywgaik7XG4gICAgICBiX2Fyci5wdXNoKGJfbnVtKTtcbiAgICB9XG5cbiAgICBhX2Fyci5mb3JFYWNoKGFfbiA9PiB7XG4gICAgICBjb25zdCB0Z3QgPSBiX2Fyci5maW5kKGJfbiA9PiBjb3JlLmlzRXF1YWwoYV9uLCBiX24pKTtcbiAgICAgIGlmKHRndCl7XG4gICAgICAgIGFyci5wdXNoKHRndCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiLCBsaW1pdF19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYiwgbGltaXRdfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5sZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYiwgbGltaXQpOiBTdXVOdW1iZXIge1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gdXRpbHMuY29tbW9uTXVsdGlwbGUoYSwgYiwgbGltaXQpO1xuICByZXR1cm4gYXJyWzBdO1xufTtcblxuXG5jb25zdCBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24gPSBmdW5jdGlvbih7YXJyYXksIGxpbWl0fSk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuXG4gIGNvbnN0IG1heCA9IGxpbWl0ID8gbGltaXQgOiAxMDA7XG5cbiAgY29uc3QgaXRlbXNfbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnJheSl7XG4gICAgaWYoYXJyYXkubGVuZ3RoID49IG1heCl7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHRyeXtcbiAgICAgIGxldCByZXMgPSB1dGlscy5nZXROdW1iZXIoXCIwXCIpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGl0ZW1zX2xlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5sZW5ndGggLSAoaXRlbXNfbGVuZ3RoIC0gaSk7XG4gICAgICAgIGNvbnN0IG51bSA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgcmVzID0gY29yZS5hZGQocmVzLCBudW0pO1xuICAgICAgfVxuICAgICAgYXJyYXkucHVzaChyZXMpO1xuICAgICAgcmV0dXJuIGZ1bmMoYXJyYXkpO1xuICAgIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthcnJheSwgbGltaXRdfSlcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheSwgbGltaXRdfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gZnVuYyhhcnJheSk7XG59O1xuXG5jb25zdCBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5ID0gZnVuY3Rpb24oeyBmaXJzdD1cIjBcIiwgbGFzdD1cIjFcIiwgbGVuZ3RoPTIgfSk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBsZW4gPSBsZW5ndGg7XG4gIGNvbnN0IGEgPSB1dGlscy5nZXROdW1iZXIoZmlyc3QpO1xuICBjb25zdCBiID0gdXRpbHMuZ2V0TnVtYmVyKGxhc3QpO1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIHRyeXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IHRndCA9IGE7XG4gICAgICBpZihpID09PSAobGVuIC0xKSl7XG4gICAgICAgIHRndCA9IGI7XG4gICAgICB9XG4gICAgICBhcnIucHVzaCh0Z3QpO1xuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbZmlyc3QsIGxhc3QsIGxlbmd0aF19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbZmlyc3QsIGxhc3QsIGxlbmd0aF19KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbnV0aWxzLm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0PVwiMFwiLCBsYXN0PVwiMVwiKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0LCBsYXN0LCBsZW5ndGg6IDJ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVRyaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDN9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVRldHJhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDR9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVBlbnRhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDV9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUhleGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogNn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlSGVwdGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogN30pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlT2N0YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA4fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VOb25hbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDl9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZURlY2FuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMTB9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVVuZGVjYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAxMX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlRG9kZWNhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDEyfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VJY29zYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAyMH0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlTHVjYVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjJcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5zdW1tYXRpb24gPSBmdW5jdGlvbihhcnJheSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWFycmF5IHx8ICFBcnJheS5pc0FycmF5KGFycmF5KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIEFycmF5LlwiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJhcnJheSBsZW5ndGggaXMgemVyb1wiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBsZXQgc3VtID0gY29yZS5nZXRaZXJvKCk7XG4gIGlmKEFycmF5LmlzQXJyYXkoYXJyYXkpKXtcbiAgICB0cnl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBzdW0gPSBjb3JlLmFkZChzdW0sIGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyYXldfSlcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheV19KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cbnV0aWxzLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKGFycmF5KTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIGlmKCFhcnJheSB8fCAhQXJyYXkuaXNBcnJheShhcnJheSkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBBcnJheS5cIiwgcGFyYW1ldGVyOiBbYXJyYXldfSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdXRpbHMuZ2V0TnVtYmVyKGFycmF5WzBdKTtcbiAgfVxuICBsZXQgcmVzID0gYXJyYXlbMF07XG4gIHRyeXtcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgcmVzID0gY29yZS5tdWx0aXBsZShyZXMsIGFycmF5W2ldKTtcbiAgICB9XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FycmF5XX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheV19KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbnV0aWxzLmRpZ2l0U3VtID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKCFuIHx8ICFBcnJheS5pc0FycmF5KG4uYXJyYXkpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbiAgbGV0IHJlcyA9IGNvcmUuZ2V0WmVybygpO1xuICBpZihjb3JlLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICB0cnl7XG4gICAgcmVzID0gdXRpbHMuc3VtbWF0aW9uKG4uYXJyYXkpXG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5tYWtlVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuICBpZihjb3JlLmlzWmVybyhuKSB8fCB1dGlscy5pc05lZ2F0aXZlKG4pIHx8ICF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuICBcbiAgY29uc3QgcmVzMSA9IGNvcmUubXVsdGlwbGUobiwgY29yZS5hZGQobiwgXCIxXCIpKTtcbiAgY29uc3QgcmVzMiA9IGNvcmUuZGl2aWRlKHJlczEsIFwiMlwiKTtcbiAgcmV0dXJuIHJlczI7XG59O1xuXG51dGlscy5tYWtlUHJvbmljTnVtYmVyID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gY29yZS5nZXRaZXJvKCk7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShuKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0ICByZXMgPSBjb3JlLm11bHRpcGxlKG4sIGNvcmUuYWRkKG4sIFwiMVwiKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mYWN0b3JpYWwgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pIHx8IGNvcmUuaXNPbmUobikpe1xuICAgIHJldHVybiBjb3JlLmdldE9uZSgpO1xuICB9XG5cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShuKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cblxuICBsZXQgZ28gPSB0cnVlO1xuICBsZXQgdGVtcCA9IG47XG4gIGxldCBjdXJyZW50ID0gbjtcbiAgY29uc3QgYXJyID0gW3RlbXBdO1xuICB0cnl7XG4gICAgd2hpbGUoZ28pe1xuICAgICAgY29uc3QgdGFyZ2V0ID0gY29yZS5zdWJ0cmFjdChjdXJyZW50LCBcIjFcIik7XG4gICAgICBhcnIucHVzaCh0YXJnZXQpO1xuICAgICAgY3VycmVudCA9IHRhcmdldDtcbiAgICAgIGlmKGNvcmUuaXNTbWFsbChjdXJyZW50LCBcIjJcIikpe1xuICAgICAgICBnbyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMuaW5maW5pdGVQcm9kdWN0KGFycik7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW251bV19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbbnVtXX0pO1xuICAgIH1cbiAgfVxufTtcblxuXG51dGlscy5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBudW0xID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihudW0xKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzWmVybyhudW0xKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobnVtMSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc0V2ZW5OdW1iZXIobnVtMSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc0VxdWFsKG51bTEsIFwiMVwiKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBudW0yID0gY29yZS5hZGQobnVtMSwgXCIxXCIpO1xuXG4gIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgbGV0IG4gPSBudW0yO1xuICB3aGlsZSh0cnVlKXtcbiAgICBuID0gY29yZS5kaXZpc2lvbihuLCBcIjJcIik7XG4gICAgaWYoIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYodXRpbHMuaXNFcXVhbChuLCBcIjFcIikpe1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZih1dGlscy5pc0VxdWFsKG4sIFwiMlwiKSl7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKHV0aWxzLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG5cbn07XG5cbnV0aWxzLm1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuXG4gIGNvbnN0IG1heF8gPSB1dGlscy5nZXROdW1iZXIoMjUpO1xuXG4gIGlmKCFtYXggfHwgY29yZS5pc0xhcmdlKG1heCwgbWF4Xykpe1xuICAgIG1heCA9IG1heF87XG4gIH1cblxuICBtYXggPSBjb3JlLmFkZChtYXgsIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICBjb25zdCB0d28gPSB1dGlscy5nZXROdW1iZXIoMik7XG4gIGNvbnN0IGFycjpTdXVOdW1iZXJbXSAgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXROdW1iZXIoMCk7XG4gIGxldCBleCA9IHV0aWxzLmdldE51bWJlcigxKTtcbiAgXG4gIHdoaWxlKGNvcmUuaXNTbWFsbChleCwgbWF4KSl7XG4gICAgY3VycmVudCA9IHV0aWxzLmV4cG9uZW50aWF0ZSh0d28sZXgpO1xuICAgIGN1cnJlbnQgPSBjb3JlLnN1YnRyYWN0KGN1cnJlbnQsIHV0aWxzLmdldE51bWJlcigxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBjb3JlLmFkZChleCwgdXRpbHMuZ2V0TnVtYmVyKDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gdXRpbHMudHJpYWxEaXZpc2lvbiA9IGZ1bmN0aW9uKG4pe1xuLy8gICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4vLyB9O1xuXG51dGlscy5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgaWYodXRpbHMuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc09uZShudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pc0VxdWFsKG51bSwgXCIyXCIpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzRXZlbk51bWJlcihudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMFwiKSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByZXYgPSBjb3JlLnN1YnRyYWN0KG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gIGxldCBjdXJyZW50ID0gY29yZS5kaXZpc2lvbihwcmV2LCB1dGlscy5nZXROdW1iZXIoXCIyXCIpKTtcblxuICBsZXQgaXNfcHJpbWUgPSB0cnVlO1xuXG4gIHdoaWxlKGlzX3ByaW1lICYmIGNvcmUuaXNMYXJnZShjdXJyZW50LCB1dGlscy5nZXROdW1iZXIoXCIyXCIpKSl7XG5cbiAgICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhudW0sIGN1cnJlbnQpO1xuICAgIGlmKHV0aWxzLmlzWmVybyhyZXMpKXtcbiAgICAgIGlzX3ByaW1lID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY3VycmVudCA9IGNvcmUuc3VidHJhY3QoY3VycmVudCwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gIH1cblxuICByZXR1cm4gaXNfcHJpbWU7XG5cbn07XG5cbnV0aWxzLm1ha2VQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXhsZW5ndGgpe1xuICBjb25zdCBtYXhfbGVuZ3RoID0gdXRpbHMuZ2V0TnVtYmVyKDI1KTtcbiAgaWYoIW1heGxlbmd0aCB8fCBjb3JlLmlzTGFyZ2UobWF4bGVuZ3RoLCBtYXhfbGVuZ3RoKSl7XG4gICAgbWF4bGVuZ3RoID0gbWF4X2xlbmd0aDtcbiAgfVxuICBjb25zdCBhcnI6U3V1TnVtYmVyW10gPSBbXTtcbiAgbGV0IG51bSA9IHV0aWxzLmdldE51bWJlcihcIjBcIik7XG4gIGxldCBjb3VudCA9IHV0aWxzLmdldFplcm8oKTtcbiAgd2hpbGUoY29yZS5pc1NtYWxsKGNvdW50LCBtYXhsZW5ndGgpKXtcbiAgICBudW0gPSBjb3JlLmFkZChudW0sIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICAgIGlmKHV0aWxzLmlzUHJpbWVOdW1iZXIobnVtKSl7XG4gICAgICBhcnIucHVzaChudW0pO1xuICAgICAgY291bnQgPSB1dGlscy5nZXROdW1iZXIoYXJyLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodXRpbHMuaXNQcmltZU51bWJlcihuKSAmJiB1dGlscy5pc01lcnNlbm5lTnVtYmVyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc0NvbXBvc2l0ZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzT25lKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzRXZlbk51bWJlcihuKSl7XG4gICAgaWYodXRpbHMuaXNMYXJnZShuLCBcIjRcIikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzID0gdXRpbHMuaXNQcmltZU51bWJlcihudW0pO1xuXG4gIGlmKHJlcyBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodHlwZW9mIHJlcyA9PT0gXCJib29sZWFuXCIpe1xuICAgIHJldHVybiAhcmVzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmlzSGFyc2hhZE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgXCIwXCIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZGl2aXNvcnMgPSB1dGlscy5nZXREaXZpc29ycyhuKTtcblxuICBjb25zdCBkc3VtID0gdXRpbHMuZGlnaXRTdW0obik7XG5cbiAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGRpdmlzb3JzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBkID0gZGl2aXNvcnNbaV07XG4gICAgaWYodXRpbHMuaXNFcXVhbChkLCBkc3VtKSl7XG4gICAgICBib29sID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm9vbDtcbn07XG5cbnV0aWxzLmlzWnVja2VybWFuTnVtYmVyID0gZnVuY3Rpb24obil7XG5cbiAgbGV0IHJlcyA9IGZhbHNlO1xuXG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIFxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuXG4gIGNvbnN0IHByb2R1Y3QgPSB1dGlscy5pbmZpbml0ZVByb2R1Y3QobnVtLmFycmF5KTtcbiAgY29uc3QgZGl2aXNvcnMgPSB1dGlscy5nZXREaXZpc29ycyhuKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgZGl2aXNvcnMubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGQgPSBkaXZpc29yc1tpXTtcbiAgICBpZih1dGlscy5pc0VxdWFsKHByb2R1Y3QsIGQpKXtcbiAgICAgIHJlcyA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbnV0aWxzLmlzUmVwdW5pdE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgcmVzID0gZmFsc2U7XG5cbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc0VxdWFsKFwiMFwiKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZih1dGlscy5pc05lZ2F0aXZlKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IGFyciA9IG51bS5hcnJheTtcbiAgcmVzID0gdHJ1ZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyW2ldO1xuICAgIGlmKGVsbSAhPT0gMSl7XG4gICAgICByZXMgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBtYWtlU29waGllR2VybWFuUHJpbWVBbmRTYWZlUHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc2FmZV9wcmltZV9leHBlY3RlZCA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgbnVtMSA9IGNvcmUubXVsdGlwbGUoc2FmZV9wcmltZV9leHBlY3RlZCwgXCIyXCIpO1xuICBjb25zdCBzb3BoaWVfZ2VybWFuX2V4cGVjdGVkID0gY29yZS5hZGQobnVtMSwgXCIxXCIpO1xuXG4gIGlmKHV0aWxzLmlzUHJpbWVOdW1iZXIoc2FmZV9wcmltZV9leHBlY3RlZCkgJiYgdXRpbHMuaXNQcmltZU51bWJlcihzb3BoaWVfZ2VybWFuX2V4cGVjdGVkKSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvcGhpZUdlcm1haW5QcmltZTogc2FmZV9wcmltZV9leHBlY3RlZCxcbiAgICAgIHNhZmVQcmltZTogc29waGllX2dlcm1hbl9leHBlY3RlZCxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc29waGllR2VybWFpblByaW1lOiBudWxsLFxuICAgIHNhZmVQcmltZTogbnVsbCxcbiAgfTtcblxufTtcblxudXRpbHMuaXNTb3BoaWVHZXJtYWluUHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgeyBzb3BoaWVHZXJtYWluUHJpbWUsIHNhZmVQcmltZSB9ID0gbWFrZVNvcGhpZUdlcm1hblByaW1lQW5kU2FmZVByaW1lKG4pO1xuICBpZihzb3BoaWVHZXJtYWluUHJpbWUgJiYgc2FmZVByaW1lKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc1NhZmVQcmltZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0xID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBjb25zdCBudW0yID0gY29yZS5zdWJ0cmFjdChudW0xLCBcIjFcIik7XG4gIGNvbnN0IG51bTMgPSBjb3JlLmRpdmlzaW9uKG51bTIsIFwiMlwiKTtcbiAgY29uc3QgeyBzb3BoaWVHZXJtYWluUHJpbWUsIHNhZmVQcmltZSB9ID0gbWFrZVNvcGhpZUdlcm1hblByaW1lQW5kU2FmZVByaW1lKG51bTMpO1xuXG4gIGlmKHNvcGhpZUdlcm1haW5QcmltZSAmJiBzYWZlUHJpbWUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcblxufTtcblxuY29uc3Qgc29ydCA9IGZ1bmN0aW9uKGFycmF5OiBbXSwgb3JkZXI/OiBcImFzY1wiIHwgXCJkZXNjXCIpe1xuXG4gIGNvbnN0IG5ld19hcnIgPSBbLi4uYXJyYXldO1xuXG4gIGNvbnN0IGFzYyA9IChhX24sIGJfbikgPT4ge1xuICAgIGlmKGFfbiA8IGJfbil7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfWVsc2UgaWYoYV9uID4gYl9uKXtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBkZXNjID0gKGFfbiwgYl9uKSA9PiB7XG4gICAgaWYoYV9uIDwgYl9uKXtcbiAgICAgIHJldHVybiAxO1xuICAgIH1lbHNlIGlmKGFfbiA+IGJfbil7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIG5ld19hcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFfbiA9IE51bWJlcihhKTtcbiAgICBjb25zdCBiX24gPSBOdW1iZXIoYik7XG5cbiAgICBpZihvcmRlciA9PT0gXCJhc2NcIil7XG4gICAgICByZXR1cm4gYXNjKGFfbiwgYl9uKTtcbiAgICB9ZWxzZSBpZihvcmRlciA9PT0gXCJkZXNjXCIpe1xuICAgICAgcmV0dXJuIGRlc2MoYV9uLCBiX24pO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGFzYyhhX24sIGJfbilcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3X2FycjtcblxufTtcblxudXRpbHMuZ2V0SW52ZXJzaW9uTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGxldCBjb3VudCA9IHV0aWxzLmdldFplcm8oKTtcblxuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBcbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShudW0pKXtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBjb25zdCBvcmRlcmVkQXJyYXk6IGFueVtdID0gc29ydChudW0uYXJyYXksIFwiYXNjXCIpO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBudW0uYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG9yZGVyZWRfZWxtID0gb3JkZXJlZEFycmF5W2ldO1xuICAgIGNvbnN0IG9yaWdpbmFsX2VsbSA9IG51bS5hcnJheVtpXTtcbiAgICBjb25zdCBnYXAgPSBjb3JlLnN1YnRyYWN0KG9yZGVyZWRfZWxtLCBvcmlnaW5hbF9lbG0pO1xuICAgIGlmKHV0aWxzLmlzTmVnYXRpdmUoZ2FwKSl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYodXRpbHMuaXNaZXJvKGdhcCkpe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvdW50ID0gY29yZS5hZGQoY291bnQsIGdhcCk7XG4gIH1cblxuICByZXR1cm4gY291bnQ7XG5cbn07XG5cblxudXRpbHMuZ2V0UmVjaXByb2NhbCA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgcmVzID0gbnVsbDtcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGlmKHV0aWxzLmlzT25lKG51bSkpe1xuICAgIHJldHVybiB1dGlscy5nZXRPbmUoKTtcbiAgfVxuXG4gIHJlcyA9IGNvcmUuZGl2aXNpb24odXRpbHMuZ2V0T25lKCksIG51bSk7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxudXRpbHMuZ2V0UmV2ZXJzZSA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgcmVzID0gbnVsbDtcblxuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKG51bS5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaWYodXRpbHMuaXNTbWFsbChudW0sIHV0aWxzLmdldE51bWJlcihcIjEwXCIpKSl7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5ID0gWy4uLm51bS5hcnJheV0ucmV2ZXJzZSgpO1xuICBjb25zdCBzdHIgPSBhcnJheS5qb2luKFwiXCIpO1xuICBjb25zdCBuZXdfbnVtID0gdXRpbHMuZ2V0TnVtYmVyKHN0cik7XG5cbiAgcmV0dXJuIG5ld19udW07XG5cbn07XG5cbnV0aWxzLmdldEZlcm1hdE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IGJhc2UgPSB1dGlscy5nZXROdW1iZXIoXCIyXCIpO1xuICBjb25zdCBleCA9IHV0aWxzLmV4cG9uZW50aWF0ZShiYXNlLCBudW0pO1xuICBjb25zdCBvbmUgPSB1dGlscy5nZXRPbmUoKTtcbiAgY29uc3QgcmVzMSA9IHV0aWxzLmV4cG9uZW50aWF0ZShiYXNlLCBleCk7XG4gIGNvbnN0IHJlczIgPSBjb3JlLmFkZChyZXMxLCBvbmUpO1xuICByZXR1cm4gcmVzMjtcbn07XG5cbnV0aWxzLmlzRmVybWF0TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgbWF4ID0gNjtcbiAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgZiA9IHV0aWxzLmdldEZlcm1hdE51bWJlcihgJHtpfWApO1xuICAgIGlmKHV0aWxzLmlzRXF1YWwoZiwgbnVtKSl7XG4gICAgICBib29sID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm9vbDtcbn07XG5cbnV0aWxzLmlzRmVybWF0UHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc0Zlcm1hdE51bWJlcihudW0pICYmIHV0aWxzLmlzUHJpbWVOdW1iZXIpe1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuZ2V0Q3VsbGVuTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgYmFzZSA9IHV0aWxzLmdldE51bWJlcihcIjJcIik7XG4gIGNvbnN0IGV4ID0gdXRpbHMuZXhwb25lbnRpYXRlKGJhc2UsIG51bSk7XG4gIGNvbnN0IHJlczEgPSBjb3JlLm11bHRpcGxlKG51bSwgZXgpO1xuICBjb25zdCByZXMyID0gY29yZS5hZGQocmVzMSwgdXRpbHMuZ2V0T25lKCkpO1xuICByZXR1cm4gcmVzMjtcbn07XG5cbnV0aWxzLmlzQ3VsbGVuTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgbWF4ID0gMjA7XG4gIGxldCBib29sID0gZmFsc2U7XG4gIGZvcihsZXQgaSA9IDA7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGYgPSB1dGlscy5nZXRDdWxsZW5OdW1iZXIoYCR7aX1gKTtcbiAgICBpZih1dGlscy5pc0VxdWFsKGYsIG51bSkpe1xuICAgICAgYm9vbCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvb2w7XG59O1xuXG51dGlscy5pc0N1bGxlblByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgaWYodXRpbHMuaXNQcmltZU51bWJlcihudW0pICYmIHV0aWxzLmlzQ3VsbGVuTnVtYmVyKG51bSkpe1xuICAgIGJvb2wgPSB0cnVlO1xuICB9XG4gIHJldHVybiBib29sO1xufTtcblxudXRpbHMuZ2V0UHJvdGhOdW1iZXIgPSBmdW5jdGlvbihrLCBuKXtcbiAgY29uc3Qga19udW0gPSB1dGlscy5nZXROdW1iZXIoayk7XG4gIGNvbnN0IG5fbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKHV0aWxzLmlzWmVybyhrX251bSkgfHwgdXRpbHMuaXNaZXJvKG5fbnVtKSl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYodXRpbHMuaXNTbWFsbChrX251bSwgdXRpbHMuZ2V0WmVybygpKSB8fCB1dGlscy5pc1NtYWxsKG5fbnVtLCB1dGlscy5nZXRaZXJvKCkpKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzSW50ZWdlcihrX251bSkgfHwgdXRpbHMuaXNJbnRlZ2VyKG5fbnVtKSl7XG4gICAgaWYodXRpbHMuaXNPZGROdW1iZXIoa19udW0pKXtcbiAgICAgIGNvbnN0IGV4ID0gdXRpbHMuZXhwb25lbnRpYXRlKHV0aWxzLmdldE51bWJlcihcIjJcIiksIG5fbnVtKTtcbiAgICAgIGlmKHV0aWxzLmlzTGFyZ2UoZXgsIGtfbnVtKSl7XG4gICAgICAgIGNvbnN0IHJlcyA9IGNvcmUubXVsdGlwbGUoZXgsIGtfbnVtKTtcbiAgICAgICAgY29uc3QgcmVzMiA9IGNvcmUuYWRkKHJlcywgdXRpbHMuZ2V0T25lKCkpO1xuICAgICAgICByZXR1cm4gcmVzMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcblxufTtcblxudXRpbHMubWFrZVByb3RoTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGNvbnN0IGRlZmF1bHRfbWF4ID0gMTA7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IGRlZmF1bHRfbWF4O1xuICB9ZWxzZSBpZihtYXggPiBkZWZhdWx0X21heCl7XG4gICAgbWF4ID0gZGVmYXVsdF9tYXg7XG4gIH1cbiAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKXtcbiAgICBjb25zdCBrID0gdXRpbHMuZ2V0TnVtYmVyKFN0cmluZyhpICogMiArIDEpKTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgbWF4OyBqKyspe1xuICAgICAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihTdHJpbmcoaiArIDEpKTtcbiAgICAgIGNvbnN0IHJlcyA9IHV0aWxzLmdldFByb3RoTnVtYmVyKGssIG4pO1xuICAgICAgaWYocmVzKXtcbiAgICAgICAgbGlzdC5wdXNoKHJlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxpc3Quc29ydCgoYTogU3V1TnVtYmVyLCBiOiBTdXVOdW1iZXIpID0+IHtcbiAgICBjb25zdCBhX2lzX3NtYWxsID0gdXRpbHMuaXNTbWFsbChhLCBiKVxuICAgIGlmKGFfaXNfc21hbGwpe1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiAxXG4gIH0pXG4gIHJldHVybiBsaXN0O1xufTtcblxudXRpbHMuaXNQcm90aE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IGxpc3QgPSB1dGlscy5tYWtlUHJvdGhOdW1iZXJzKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBwID0gbGlzdFtpXTtcbiAgICBpZih1dGlscy5pc0VxdWFsKHAsIG51bSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmlzUHJvdGhQcmltZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKHV0aWxzLmlzUHJvdGhOdW1iZXIobnVtKSAmJiB1dGlscy5pc1ByaW1lTnVtYmVyKG51bSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLm1ha2VQaWVycG9udE51bWJlciA9IGZ1bmN0aW9uKHUsIHYpe1xuICAvLyAydSAzdiArIDFcbiAgY29uc3QgdV9uID0gdXRpbHMuZ2V0TnVtYmVyKHUpO1xuICBjb25zdCB2X24gPSB1dGlscy5nZXROdW1iZXIodik7XG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUodV9uKSB8fCB1dGlscy5pc05lZ2F0aXZlKHZfbikpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmKCF1dGlscy5pc0ludGVnZXIodV9uKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKHZfbikpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlczEgPSB1dGlscy5leHBvbmVudGlhdGUodXRpbHMuZ2V0TnVtYmVyKFwiMlwiKSwgdV9uKTtcbiAgY29uc3QgcmVzMiA9IHV0aWxzLmV4cG9uZW50aWF0ZSh1dGlscy5nZXROdW1iZXIoXCIzXCIpLCB2X24pO1xuICBjb25zdCByZXMzID0gY29yZS5tdWx0aXBsZShyZXMxLCByZXMyKVxuICBjb25zdCByZXMgPSBjb3JlLmFkZChyZXMzLCB1dGlscy5nZXRPbmUoKSk7XG4gIHJldHVybiByZXM7XG59O1xuXG51dGlscy5tYWtlUGllcnBvbnROdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgLy8gMnUgM3YgKyAxXG4gIFxuICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuICBjb25zdCBtYXhfZGVmYXVsdCA9IDEwO1xuICBpZighbWF4KXtcbiAgICBtYXggPSBtYXhfZGVmYXVsdDtcbiAgfWVsc2UgaWYobWF4ID4gbWF4X2RlZmF1bHQpe1xuICAgIG1heCA9IG1heF9kZWZhdWx0O1xuICB9XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKyl7XG4gICAgbGV0IHUgPSB1dGlscy5nZXROdW1iZXIoaSk7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IG1heDsgaisrKXtcbiAgICAgIGxldCB2ID0gdXRpbHMuZ2V0TnVtYmVyKGopO1xuICAgICAgY29uc3QgcmVzOiBhbnkgPSB1dGlscy5tYWtlUGllcnBvbnROdW1iZXIodSwgdik7XG4gICAgICBpZihyZXMpe1xuICAgICAgICBpZihsaXN0LmZpbmQoKGVsbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb3JlLmlzRXF1YWwoZWxtLCByZXMpXG4gICAgICAgIH0pKXtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnB1c2gocmVzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspe1xuICAgIGxldCB2ID0gdXRpbHMuZ2V0TnVtYmVyKGkpO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBtYXg7IGorKyl7XG4gICAgICBsZXQgdSA9IHV0aWxzLmdldE51bWJlcihqKTtcbiAgICAgIGNvbnN0IHJlczogYW55ID0gdXRpbHMubWFrZVBpZXJwb250TnVtYmVyKHUsIHYpO1xuICAgICAgaWYocmVzKXtcbiAgICAgICAgaWYobGlzdC5maW5kKChlbG0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY29yZS5pc0VxdWFsKGVsbSwgcmVzKVxuICAgICAgICB9KSl7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wdXNoKHJlcylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGlzdC5zb3J0KChhOiBTdXVOdW1iZXIsIGI6IFN1dU51bWJlcikgPT4ge1xuICAgIGNvbnN0IGFfaXNfc21hbGwgPSB1dGlscy5pc1NtYWxsKGEsIGIpXG4gICAgaWYoYV9pc19zbWFsbCl7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIDFcbiAgfSlcbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG51dGlscy5pc1BpZXJwb250UHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGFyciA9IHV0aWxzLm1ha2VQaWVycG9udE51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaWYodXRpbHMuaXNFcXVhbChudW0sIGFycltpXSkgJiYgdXRpbHMuaXNQcmltZU51bWJlcihudW0pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCByYW5kb20gZnJvbSBcIi4vcmFuZG9tXCI7XG5pbXBvcnQgZG9jIGZyb20gXCIuL2RvY1wiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvcmU6IGNvcmUsXG4gIHV0aWxzOiB1dGlscyxcbiAgcmFuZG9tOiByYW5kb20sXG4gIGRvYzogZG9jLFxuICBjb25zdGFudHM6IGNvbnN0YW50cyxcbiAgdHM6IHRydWUsXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==