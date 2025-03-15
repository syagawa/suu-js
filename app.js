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
            decimal_index: decimal_index
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
    var res = utils.summation([res1, res2, utils.getOne()]);
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
utils.makePierpontPrimes = function () {
    var arr1 = utils.makePierpontNumbers();
    console.log("a", arr1);
    var arr2 = [];
    for (var i = 0; i < arr1.length; i++) {
        console.log(i);
        var num = arr1[i];
        if (utils.isPrimeNumber(num)) {
            console.log("b");
            arr2.push(num);
        }
    }
    return arr2;
};
utils.isPierpontPrime = function (n) {
    var num = utils.getNumber(n);
    if (utils.isZero(num)) {
        return false;
    }
    var arr = utils.makePierpontPrimes();
    for (var i = 0; i < arr.length; i++) {
        if (utils.isEqual(num, arr[i])) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFNLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLElBQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsSUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUxQixPQUFPLFFBQVEsQ0FBQztB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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSw0REFBMEI7QUFDMUIsK0RBQTRCO0FBQzVCLGtFQUE4QjtBQUM5Qix5REFBd0I7QUFDeEIsMkVBQW1DO0FBRW5DLHFCQUFlO0lBQ2IsSUFBSSxFQUFFLGNBQUk7SUFDVixLQUFLLEVBQUUsZUFBSztJQUNaLE1BQU0sRUFBRSxnQkFBTTtJQUNkLEdBQUcsRUFBRSxhQUFHO0lBQ1IsU0FBUyxFQUFFLG1CQUFTO0lBQ3BCLEVBQUUsRUFBRSxJQUFJO0NBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUudHMiLCJ3ZWJwYWNrOi8vc3UvLi9kb2MudHMiLCJ3ZWJwYWNrOi8vc3UvLi9yYW5kb20udHMiLCJ3ZWJwYWNrOi8vc3UvLi91dGlscy50cyIsIndlYnBhY2s6Ly9zdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdS8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYOiAxMDAwMCxcbiAgTUlOOiAtMTAwMDAsXG4gIERCWjogXCJEaXZpc2lvbiBieSBaZXJvXCIsXG4gIE5BTjogXCJOb3QgYSBudW1iZXJcIixcbiAgTk9UU1U6IFwiQXJndW1lbnQgaXMgbm90IFN1LlwiXG59O1xuIiwiaW1wb3J0IHtDb21wYXJlT2JqZWN0LCBTdXVOdW1iZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IGNvcmU6YW55ID0ge307XG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgY2FsY3VsYXRpb25fbW9kZXM6IFtcInN1dVwiLCBcImpzXCJdLFxuICBjYWxjdWxhdGlvbl9tb2RlOiAwLFxufTtcblxuY29yZS5jaGFuZ2VDYWxjdWxhdGlvbk1vZGUgPSBmdW5jdGlvbihtb2RlOiBzdHJpbmcpe1xuICBpZighbW9kZSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGluZGV4ID0gc2V0dGluZ3MuY2FsY3VsYXRpb25fbW9kZXMuZmluZEluZGV4KG0gPT4gbSA9PT0gbW9kZSk7XG4gIGlmKGluZGV4ID49IDApe1xuICAgIHNldHRpbmdzLmNhbGN1bGF0aW9uX21vZGUgPSBpbmRleDtcbiAgfVxufTtcblxuY29yZS5nZXRDYWxjdWxhdGlvbk1vZGUgPSBmdW5jdGlvbigpe1xuICBjb25zdCBtID0gc2V0dGluZ3MuY2FsY3VsYXRpb25fbW9kZXNbc2V0dGluZ3MuY2FsY3VsYXRpb25fbW9kZV07XG4gIHJldHVybiBtO1xufTtcblxuY29yZS5tYWtlRXJyb3IgPSBmdW5jdGlvbihvOiB7bWVzc2FnZTogc3RyaW5nLCB2YXJpYWJsZTogYW55LCBwYXJhbWV0ZXI6IGFueX0pOiBFcnJvcntcbiAgbGV0IGVycm9yID0gbmV3IEVycm9yKCk7XG4gIHRyeXtcbiAgICBjb25zdCB2ID0gby52YXJpYWJsZSA/IG8udmFyaWFibGUudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgY29uc3QgcCA9IG8ucGFyYW1ldGVyID8gby5wYXJhbWV0ZXIudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgbGV0IHN0ciA9IG8ubWVzc2FnZTtcbiAgICBpZih2KXtcbiAgICAgIHN0ciA9IGAke3N0cn0sICR7diA/IHYgOiBcIlwifWA7XG4gICAgfVxuICAgIGlmKHApe1xuICAgICAgc3RyID0gYCR7c3RyfSwgJHtwID8gcCA6IFwiXCJ9YDtcbiAgICB9XG4gICAgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgfWNhdGNoKGU6IHVua25vd24pe1xuICAgIGlmKGUgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuICB9ZmluYWxseXtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmNvbnN0IGlzTnVtYmVyID0gZnVuY3Rpb24obik6IEJvb2xlYW57XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUuaXNTdXVOdW1iZXIgPSBmdW5jdGlvbihuKTogQm9vbGVhbntcbiAgaWYobi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUubW9sZE51bUFycmF5ID0gZnVuY3Rpb24oeyBhcnJheSwgbmVnYXRpdmUsIGRlY2ltYWxfaW5kZXggfSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWFycmF5KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3IoeyBtZXNzYWdlOiBcIkFycmF5IGlzIG5vdCBleGlzdHNcIiwgcGF0YW1ldGVyOiBhcnJheX0pO1xuICB9XG5cbiAgaWYodHlwZW9mIGRlY2ltYWxfaW5kZXggIT09IFwibnVtYmVyXCIgfHwgaXNOYU4oZGVjaW1hbF9pbmRleCkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiZGVjaW1hbF9pbmRleCBpcyBub3QgYSBudW1iZXJcIiwgcGF0YW1ldGVyOiBkZWNpbWFsX2luZGV4fSk7XG4gIH1cbiAgdHJ5e1xuICAgIHdoaWxlKGRlY2ltYWxfaW5kZXggPCBhcnJheS5sZW5ndGggJiYgYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV0gPT09IDApe1xuICAgICAgYXJyYXkucG9wKCk7XG4gICAgfVxuICAgIHdoaWxlKGRlY2ltYWxfaW5kZXggPiAxICYmIGFycmF5WzBdID09PSAwKXtcbiAgICAgIGFycmF5LnNoaWZ0KCk7XG4gICAgICBkZWNpbWFsX2luZGV4LS07XG4gICAgfVxuXG4gICAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICAgIGFycmF5LnB1c2goMCk7XG4gICAgICBkZWNpbWFsX2luZGV4ID0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBvOiBTdXVOdW1iZXIgPSB7XG4gICAgICBhcnJheTogYXJyYXksXG4gICAgICBuZWdhdGl2ZTogISFuZWdhdGl2ZSxcbiAgICAgIGlzX251bV9hcnJheTogdHJ1ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXhcbiAgICB9O1xuICAgIGlmKGRlY2ltYWxfaW5kZXggPT09IDAgfHwgZGVjaW1hbF9pbmRleCA+IDApe1xuICAgICAgby5kZWNpbWFsX2luZGV4ID0gZGVjaW1hbF9pbmRleDtcbiAgICB9ZWxzZXtcbiAgICAgIG8uZGVjaW1hbF9pbmRleCA9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGU6IHVua25vd24pe1xuICAgIGlmKGUgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGUubWVzc2FnZSwgcGFyYW1ldGVyOiBhcnJheX0pO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBhcnJheX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5jb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyB1bmRlZmluZWQsIG51bGwsIG9yIGVtcHR5LlwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgfVxuXG4gIGlmKG4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gY29yZS5jbG9uZShuKTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBuID09PSBcIm9iamVjdFwiKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIG9iamVjdC5cIiwgcGFyYW1ldGVyOiBufSk7XG4gIH1cblxuICBsZXQgc3RyOiBzdHJpbmcgPSBTdHJpbmcobik7XG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICB3aGlsZShzdHIgJiYgc3RyWzBdLm1hdGNoKC9eLS8pKXtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXi0vLCBcIlwiKTtcbiAgICBuZWdhdGl2ZSA9ICFuZWdhdGl2ZTtcbiAgfVxuXG4gIGxldCBkZWNfaW5kZXg7XG4gIGxldCByZXMgPSBzdHIubWF0Y2goL1xcLi9nKTtcbiAgaWYocmVzICYmIHJlcy5sZW5ndGggPiAxKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiMiBvciBtb3JlIGRlY2ltYWwgcG9pbnRzXCIsIHBhcmFtZXRlcjogbn0pO1xuICB9XG4gIGlmKHJlcyAmJiByZXMubGVuZ3RoID09PSAxKXtcbiAgICBjb25zdCByZXMxID0gc3RyLm1hdGNoKC9cXC4vKTtcbiAgICBjb25zdCBmaXJzdF9pbmRleCA9IHJlczE/LmluZGV4XG4gICAgZGVjX2luZGV4ID0gZmlyc3RfaW5kZXhcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFwuLywgXCJcIik7XG4gIH1lbHNle1xuICAgIGRlY19pbmRleCA9IHN0ci5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBhcnI6IG51bWJlcltdID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIWlzTnVtYmVyKG51bSkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIsIHBhcmFtZXRlcjogbnVtfSk7XG4gICAgfVxuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoeyBhcnJheTogYXJyLCBuZWdhdGl2ZTogbmVnYXRpdmUsIGRlY2ltYWxfaW5kZXg6IGRlY19pbmRleH0pO1xuXG59O1xuXG5jb3JlLm51bUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbihuKTogc3RyaW5nIHwgRXJyb3Ige1xuICBpZighbi5pc19udW1fYXJyYXkgfHwgIW4uYXJyYXkgfHwgIW4uZGVjaW1hbF9pbmRleCl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0IGFyciA9IFsuLi5uLmFycmF5XTtcbiAgICBhcnIuc3BsaWNlKG4uZGVjaW1hbF9pbmRleCwgMCwgXCIuXCIpO1xuICAgIGxldCBzdHIgPSBhcnIuam9pbihcIlwiKTtcbiAgICBpZihuLm5lZ2F0aXZlKXtcbiAgICAgIHN0ciA9IGAtJHtzdHJ9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBufSk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG59KTtcbiAgICB9XG4gIH1cblxufTtcblxuY29yZS5jb21wYXJlID0gZnVuY3Rpb24oYSwgYik6IENvbXBhcmVPYmplY3QgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBcblxuICAgIGlmKCFhICYmIGEgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHsgbWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSB1bmRlZmluZWQsIG51bGwsIG9yIGVtcHR5LlwiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgIH1lbHNlIGlmKCFiICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHsgbWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSB1bmRlZmluZWQsIG51bGwsIG9yIGVtcHR5LlwiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBvOiBDb21wYXJlT2JqZWN0ID0ge1xuICAgICAgc21hbGw6IG51bGwsXG4gICAgICBsYXJnZTogbnVsbCxcbiAgICAgIGVxdWFsOiBmYWxzZVxuICAgIH07XG4gICAgbGV0IGFfID0gYTtcbiAgICBsZXQgYl8gPSBiO1xuXG4gICAgaWYoIWFfLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGFfKTtcbiAgICAgIGlmKCFhXyl7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighYl8uaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYl8pO1xuICAgICAgaWYoIWJfKXtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnJheTogbnVtYmVyW10gPSBhXy5hcnJheTtcbiAgICBjb25zdCBiX2FycmF5OiBudW1iZXJbXSA9IGJfLmFycmF5O1xuXG4gICAgY29uc3QgYV9sZW46IG51bWJlciA9IGFfYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGJfbGVuOiBudW1iZXIgPSBiX2FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBhX3N0cjogc3RyaW5nID0gYV9hcnJheS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGJfc3RyOiBzdHJpbmcgPSBiX2FycmF5LmpvaW4oXCJcIik7XG5cbiAgICBjb25zdCBhX2ludF9sZW4gPSBhXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGJfaW50X2xlbiA9IGJfLmRlY2ltYWxfaW5kZXg7XG5cbiAgICBjb25zdCBhX2RlY19sZW4gPSBhX2xlbiAtIGFfaW50X2xlbjtcbiAgICBjb25zdCBiX2RlY19sZW4gPSBiX2xlbiAtIGJfaW50X2xlbjtcblxuICAgIGlmKGFfbGVuID09PSAxICYmIGFfc3RyID09PSBcIjBcIiAmJiBiX2xlbiA9PT0gMSAmJiBiX3N0ciA9PT0gXCIwXCIpe1xuICAgICAgby5lcXVhbCA9IHRydWU7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoIWFfLm5lZ2F0aXZlICYmIGJfLm5lZ2F0aXZlKXtcbiAgICAgIG8uc21hbGwgPSBiXztcbiAgICAgIG8ubGFyZ2UgPSBhXztcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICBpZihhXy5uZWdhdGl2ZSAmJiAhYl8ubmVnYXRpdmUpe1xuICAgICAgby5zbWFsbCA9IGFfO1xuICAgICAgby5sYXJnZSA9IGJfO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgY29uc3QgbmVnYXRpdmUgPSBhXy5uZWdhdGl2ZTtcblxuICAgIGNvbnN0IG9fYV9iID0ge1xuICAgICAgbGFyZ2U6IG5lZ2F0aXZlID8gYl8gOiBhXyxcbiAgICAgIHNtYWxsOiBuZWdhdGl2ZSA/IGFfIDogYl8sXG4gICAgICBlcXVhbDogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBvX2JfYSA9IHtcbiAgICAgIGxhcmdlOiBuZWdhdGl2ZSA/IGFfIDogYl8sXG4gICAgICBzbWFsbDogbmVnYXRpdmUgPyBiXyA6IGFfLFxuICAgICAgZXF1YWw6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmKGFfaW50X2xlbiA+IGJfaW50X2xlbil7XG4gICAgICByZXR1cm4gb19hX2I7XG4gICAgfVxuICAgIFxuICAgIGlmKGFfaW50X2xlbiA8IGJfaW50X2xlbil7XG4gICAgICByZXR1cm4gb19iX2E7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFfaW50X2xlbjsgaSsrKXtcbiAgICAgIGlmKGFfYXJyYXlbaV0gPiBiX2FycmF5W2ldKXtcbiAgICAgICAgcmV0dXJuIG9fYV9iO1xuICAgICAgfVxuICAgICAgaWYoYV9hcnJheVtpXSA8IGJfYXJyYXlbaV0pe1xuICAgICAgICByZXR1cm4gb19iX2E7ICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWNfbGVuID0gYV9kZWNfbGVuID4gYl9kZWNfbGVuID8gYV9kZWNfbGVuIDogYl9kZWNfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkZWNfbGVuOyBpKyspe1xuICAgICAgY29uc3QgYWEgPSBhX2FycmF5W2FfaW50X2xlbiArIGldID8gYV9hcnJheVthX2ludF9sZW4gKyBpXSA6IDA7XG4gICAgICBjb25zdCBiYiA9IGJfYXJyYXlbYl9pbnRfbGVuICsgaV0gPyBiX2FycmF5W2JfaW50X2xlbiArIGldIDogMDtcbiAgICAgIGlmKGFhID4gYmIpe1xuICAgICAgICByZXR1cm4gb19hX2I7XG4gICAgICB9XG4gICAgICBpZihhYSA8IGJiKXtcbiAgICAgICAgcmV0dXJuIG9fYl9hO1xuICAgICAgfVxuICAgIH1cblxuICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgIHJldHVybiBvO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuXG5cbn07XG5cbmNvcmUuZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb3JlLmNvbXBhcmUoYSwgYikubGFyZ2U7XG59O1xuXG5jb3JlLmdldFNtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5jb21wYXJlKGEsIGIpLnNtYWxsO1xufTtcblxuY29yZS5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICBjb25zdCByZXMgPSBjb3JlLmNvbXBhcmUoYSwgYik7XG4gIGlmKHJlcy5lcXVhbCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29yZS5pc1NtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5pc0VxdWFsKGNvcmUuZ2V0U21hbGwoYSwgYiksIGEpO1xufTtcblxuY29yZS5pc0xhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5pc0VxdWFsKGNvcmUuZ2V0TGFyZ2UoYSwgYiksIGEpO1xufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKTogYm9vbGVhbiB7XG4gIGlmKCFuKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoIW4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgemVybyA9IGNvcmUuZ2V0WmVybygpO1xuICByZXR1cm4gY29yZS5pc0VxdWFsKHplcm8sIG4pO1xufTtcblxuY29yZS5pc09uZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFuIHtcbiAgaWYoIW4pe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBvbmUgPSBjb3JlLmdldE9uZSgpO1xuICBpZihjb3JlLmlzRXF1YWwob25lLCBuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29yZS5nZXRaZXJvID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyIHtcbiAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMFwiKTtcbn07XG5cbmNvcmUuZ2V0T25lID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyIHtcbiAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMVwiKTtcbn07XG5cbmNvcmUuZml4Q2FycnkgPSBmdW5jdGlvbihhcnI6IG51bWJlcltdLCBtaW51czogYm9vbGVhbik6IHtuZXdfYXJyYXk6IG51bWJlcltdLCBtaW51czogYm9vbGVhbn0ge1xuICB0cnkge1xuICAgIGxldCBtaW51c18gPSBtaW51cztcbiAgICBmb3IobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSl7XG4gICAgICBjb25zdCBlbG0gPSBhcnJbaV07XG4gICAgICBpZihlbG0gPCAwKXtcbiAgICAgICAgbWludXNfID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG0gPT09IDApe1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYobWludXNfKXtcbiAgICAgIGNvbnN0IGNhY2hlOiBudW1iZXJbXSA9IFtdO1xuICAgICAgYXJyLmZvckVhY2goIChlbG06IG51bWJlcikgPT4ge1xuICAgICAgICBjYWNoZS5wdXNoKC1lbG0pO1xuICAgICAgfSk7XG4gICAgICBhcnIgPSBjYWNoZTtcbiAgICB9XG4gICAgY29uc3QgbmV3X2FycjogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgY2FycnkgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IHZhbCA9IE51bWJlcihhcnJbaV0gKyBjYXJyeSk7XG4gICAgICBpZih2YWwgPiA5KXtcbiAgICAgICAgY29uc3QgYXJyMSA9IFN0cmluZyh2YWwpLnNwbGl0KFwiXCIpO1xuICAgICAgICB2YWwgPSBOdW1iZXIoYXJyMVthcnIxLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgY29uc3QgYXJyMiA9IGFycjEuc2xpY2UoMCwgYXJyMS5sZW5ndGggLSAxKTtcbiAgICAgICAgY2FycnkgPSBOdW1iZXIoYXJyMi5qb2luKFwiXCIpKTtcbiAgICAgIH1lbHNlIGlmKCB2YWwgPj0gMCAmJiB2YWwgPD0gOSl7XG4gICAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIH1lbHNle1xuICAgICAgICB2YWwgPSAxMCArIHZhbDtcbiAgICAgICAgY2FycnkgPSAtMTtcblxuICAgICAgfVxuICAgICAgbmV3X2Fyci5wdXNoKHZhbCk7XG4gICAgfVxuICAgIGlmKGNhcnJ5ICE9PSAwKXtcbiAgICAgIG5ld19hcnIucHVzaChjYXJyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld19hcnJheTogbmV3X2FycixcbiAgICAgIG1pbnVzOiBtaW51c19cbiAgICB9O1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthcnIsIG1pbnVzXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnIsIG1pbnVzXX0pO1xuICAgIH1cbiAgfVxuXG5cbn07XG5cbmNvcmUuY2xvbmUgPSBmdW5jdGlvbihuOiBhbnkpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBpZighbil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBufSk7XG4gICAgfVxuICAgIGlmKCFuLmlzX251bV9hcnJheSl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIG5vdCBjb21wYXRpYmxlXCIsIHBhcmFtZXRlcjogbn0pO1xuICAgIH1cbiAgICBjb25zdCBvID0ge1xuICAgICAgLi4ubixcbiAgICAgIGFycmF5OiBbLi4ubi5hcnJheV0sXG4gICAgfTtcbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbbl19KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGFkZF9hbmRfc3VidHJhY3RfanMgPSBmdW5jdGlvbihhLCBiLCBtb2RlKSB7XG5cbiAgaWYoIWEgfHwgIWIpe1xuICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbXVzdCBiZSBhIE51bWJlciBvciBhIFN0cmluZy5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG4gIGxldCBwbHVzO1xuICBpZighbW9kZSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgbW9kZSBpcyByZXF1aXJlZFwiLCBwYXJhbWV0ZXI6IFthLCBiLCBtb2RlXX0pOztcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCIrXCIpe1xuICAgIHBsdXMgPSB0cnVlO1xuICB9ZWxzZSBpZihtb2RlID09PSBcIi1cIil7XG4gICAgcGx1cyA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwibW9kZSBtdXN0IGJlICcrJyBvciAnLScuXCIsIHBhcmFtZXRlcjogbW9kZX0pO1xuICB9XG5cbiAgdHJ5e1xuICAgIGNvbnN0IGFfcyA9IGNvcmUubnVtQXJyYXlUb1N0cmluZyhhKTtcbiAgICBjb25zdCBiX3MgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcoYik7XG4gIFxuICAgIGNvbnN0IGFfbiA9IE51bWJlcihhX3MpO1xuICAgIGNvbnN0IGJfbiA9IE51bWJlcihiX3MpO1xuXG4gICAgaWYocGx1cyl7XG4gICAgICByZXR1cm4gYV9uICsgYl9uO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGFfbiAtIGJfbjtcbiAgICB9ICBcbiAgfWNhdGNoKGVycjogRXJyb3IgfCBhbnkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGIsIG1vZGVdfSk7XG4gIH1cblxufTtcblxuXG5jb3JlLmFkZF9hbmRfc3VidHJhY3QgPSBmdW5jdGlvbihhLCBiLCBtb2RlKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBpZighYSB8fCAhYil7XG4gICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBtdXN0IGJlIGEgTnVtYmVyIG9yIGEgU3RyaW5nLlwiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuICBcbiAgaWYoY29yZS5nZXRDYWxjdWxhdGlvbk1vZGUoKSA9PT0gXCJqc1wiKXtcbiAgICByZXR1cm4gYWRkX2FuZF9zdWJ0cmFjdF9qcyhhLCBiLCBtb2RlKTtcbiAgfVxuXG5cbiAgbGV0IHBsdXM7XG4gIGlmKCFtb2RlKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBtb2RlIGlzIHJlcXVpcmVkXCIsIHBhcmFtZXRlcjogW2EsIGIsIG1vZGVdfSk7O1xuICB9ZWxzZSBpZihtb2RlID09PSBcIitcIil7XG4gICAgcGx1cyA9IHRydWU7XG4gIH1lbHNlIGlmKG1vZGUgPT09IFwiLVwiKXtcbiAgICBwbHVzID0gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJtb2RlIG11c3QgYmUgJysnIG9yICctJy5cIiwgcGFyYW1ldGVyOiBtb2RlfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGxldCBhXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgbGV0IGJfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgfWVsc2V7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gICAgfVxuICAgIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBhX2FyciA9IGFfLmFycmF5O1xuICAgIGNvbnN0IGJfYXJyID0gYl8uYXJyYXk7XG5cblxuICAgIGNvbnN0IGFfaXNfemVybzogYm9vbGVhbiA9IGNvcmUuaXNaZXJvKGFfKTtcbiAgICBjb25zdCBiX2lzX3plcm86IGJvb2xlYW4gPSBjb3JlLmlzWmVybyhiXyk7XG5cbiAgICBpZihhX2lzX3plcm8gJiYgYl9pc196ZXJvKXtcbiAgICAgIHJldHVybiBhXztcbiAgICB9ZWxzZSBpZihhX2lzX3plcm8pe1xuICAgICAgaWYoIXBsdXMpe1xuICAgICAgICBiXy5uZWdhdGl2ZSA9ICFiXy5uZWdhdGl2ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiXztcbiAgICB9ZWxzZSBpZihiX2lzX3plcm8pe1xuICAgICAgcmV0dXJuIGFfO1xuICAgIH1cblxuICAgIGNvbnN0IGFfZGVjX2xlbmd0aDogbnVtYmVyID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2RlY19sZW5ndGg6IG51bWJlciA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG5cbiAgICBjb25zdCBkZWNfZ2FwOiBudW1iZXIgPSBhX2RlY19sZW5ndGggLSBiX2RlY19sZW5ndGg7XG5cbiAgICBpZihkZWNfZ2FwID4gMCl7XG4gICAgICBiX2Fyci5wdXNoKC4uLkFycmF5KGRlY19nYXApLmZpbGwoMCkpO1xuICAgIH1lbHNlIGlmKGRlY19nYXAgPCAwKXtcbiAgICAgIGFfYXJyLnB1c2goLi4uQXJyYXkoTWF0aC5hYnMoZGVjX2dhcCkpLmZpbGwoMCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYiwgcGx1c30pOiB7IG5ld19hcnJheTogbnVtYmVyW10sIG1pbnVzOiBib29sZWFuIH0ge1xuICAgICAgY29uc3QgYXJyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IGxlbiA9IGEuYXJyYXkubGVuZ3RoO1xuICAgICAgaWYoYS5hcnJheS5sZW5ndGggPCBiLmFycmF5Lmxlbmd0aCl7XG4gICAgICAgIGxlbiA9IGIuYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgY29uc3QgYXJyX2E6IG51bWJlcltdID0gYS5hcnJheTtcbiAgICAgIGNvbnN0IGFycl9iOiBudW1iZXJbXSA9IGIuYXJyYXk7XG4gICAgICBjb25zdCBhX29uZTogbnVtYmVyID0gYS5uZWdhdGl2ZSA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGJfb25lOiBudW1iZXIgPSBiLm5lZ2F0aXZlID8gLTEgOiAxO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgYWEgPSBhcnJfYVtpXSA/IGFycl9hW2ldICogYV9vbmUgOiAwO1xuICAgICAgICBjb25zdCBiYiA9IGFycl9iW2ldID8gYXJyX2JbaV0gKiBiX29uZSA6IDA7XG4gICAgICAgIGxldCByZXMgPSBwbHVzID8gYWEgKyBiYiA6IGFhIC0gYmI7XG4gICAgICAgIGFyci5wdXNoKHJlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29yZS5maXhDYXJyeShhcnIpO1xuICAgIH07XG5cbiAgICBjb25zdCB7IG5ld19hcnJheSwgbWludXMgfSA9IGNhbGMoe1xuICAgICAgYToge1xuICAgICAgICBhcnJheTogWy4uLmFfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBhXy5uZWdhdGl2ZSxcbiAgICAgIH0sXG4gICAgICBiOiB7XG4gICAgICAgIGFycmF5OiBbLi4uYl9hcnJdLnJldmVyc2UoKSxcbiAgICAgICAgbmVnYXRpdmU6IGJfLm5lZ2F0aXZlXG4gICAgICB9LFxuICAgICAgcGx1czogcGx1c1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVjX2xlbmd0aCA9IGFfZGVjX2xlbmd0aCA+PSBiX2RlY19sZW5ndGggPyBhX2RlY19sZW5ndGggOiBiX2RlY19sZW5ndGg7XG4gICAgY29uc3QgbmV3X2ludF9sZW5ndGggPSBuZXdfYXJyYXkubGVuZ3RoIC0gZGVjX2xlbmd0aDtcblxuICAgIGNvbnN0IG5ld19kZWNpbWFsX2luZGV4ID0gbmV3X2ludF9sZW5ndGg7XG5cbiAgICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLnJldmVyc2UoKSxcbiAgICAgIG5lZ2F0aXZlOiBtaW51cyA/IHRydWUgOiBmYWxzZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IG5ld19kZWNpbWFsX2luZGV4XG4gICAgfSk7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbn07XG5cbmNvcmUuYWRkID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgcmV0dXJuIGNvcmUuYWRkX2FuZF9zdWJ0cmFjdChhLCBiLCBcIitcIik7XG59O1xuXG5jb3JlLnN1YnRyYWN0ID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgcmV0dXJuIGNvcmUuYWRkX2FuZF9zdWJ0cmFjdChhLCBiLCBcIi1cIik7XG59O1xuXG5cbmNvbnN0IG11bHRpcGxpY2F0aW9uX2pzID0gZnVuY3Rpb24oYSwgYikge1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG11c3QgYmUgYSBOdW1iZXIgb3IgYSBTdHJpbmcuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxuICB0cnl7XG4gICAgY29uc3QgYV9zID0gY29yZS5udW1BcnJheVRvU3RyaW5nKGEpO1xuICAgIGNvbnN0IGJfcyA9IGNvcmUubnVtQXJyYXlUb1N0cmluZyhiKTtcbiAgXG4gICAgY29uc3QgYV9uID0gTnVtYmVyKGFfcyk7XG4gICAgY29uc3QgYl9uID0gTnVtYmVyKGJfcyk7XG4gIFxuICAgIHJldHVybiBhX24gKiBiX247XG4gIH1jYXRjaChlcnI6IEVycm9yIHwgYW55KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICB9XG5cbn07XG5cbmNvcmUubXVsdGlwbGljYXRpb24gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxuICBsZXQgYV86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICBsZXQgYl86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICB9ZWxzZXtcbiAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gIH1cbiAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgfWVsc2V7XG4gICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICB9XG5cbiAgY29uc3QgYV9hcnIgPSBhXy5hcnJheTtcbiAgY29uc3QgYl9hcnIgPSBiXy5hcnJheTtcblxuICBpZihjb3JlLmlzWmVybyhhXykgfHwgY29yZS5pc1plcm8oYl8pKXtcbiAgICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIwXCIpO1xuICB9XG5cbiAgaWYoY29yZS5pc09uZShhXykpe1xuICAgIHJldHVybiBiXztcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUoYl8pKXtcbiAgICByZXR1cm4gYV87XG4gIH1cblxuICB0cnl7XG5cbiAgICBjb25zdCBhX25lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG4gICAgY29uc3QgYl9uZWdhdGl2ZSA9IGJfLm5lZ2F0aXZlO1xuICAgIGxldCBuZWdhdGl2ZTtcbiAgICBpZihhX25lZ2F0aXZlICYmIGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9ZWxzZSBpZihhX25lZ2F0aXZlIHx8IGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBhX2RlY19sZW5ndGggPSBhXy5hcnJheS5sZW5ndGggLSBhXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGJfZGVjX2xlbmd0aCA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgZGVjX2xlbmd0aCA9IGFfZGVjX2xlbmd0aCArIGJfZGVjX2xlbmd0aDtcblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYn0pe1xuICAgICAgY29uc3QgYXJyYXk6IG51bWJlcltdID0gW107XG4gICAgICBjb25zdCBhcnJfYSA9IGEuYXJyYXk7XG4gICAgICBjb25zdCBhcnJfYiA9IGIuYXJyYXk7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgIGFyci5maWxsKDAsIDAsIGkpO1xuXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgY29uc3QgYmIgPSBhcnJfYltqXSA/IGFycl9iW2pdIDogMDtcbiAgICAgICAgICBsZXQgcmVzID0gYWEgKiBiYjtcbiAgICAgICAgICBcbiAgICAgICAgICBhcnIucHVzaChyZXMpO1xuXG4gICAgICAgICAgY29uc3QgdGd0X2luZGV4ID0gaSArIGo7XG4gICAgICAgICAgbGV0IHRndDogbnVtYmVyID0gYXJyYXlbdGd0X2luZGV4XTtcbiAgICAgICAgICBpZighdGd0KXtcbiAgICAgICAgICAgIHRndCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld190Z3QgPSB0Z3QgKyByZXM7XG4gICAgICAgICAgYXJyYXlbdGd0X2luZGV4XSA9IG5ld190Z3Q7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3JlLmZpeENhcnJ5KGFycmF5KTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXkgfSA9IGNhbGMoe1xuICAgICAgYToge1xuICAgICAgICBhcnJheTogWy4uLmFfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBhXy5uZWdhdGl2ZSxcbiAgICAgIH0sXG4gICAgICBiOiB7XG4gICAgICAgIGFycmF5OiBbLi4uYl9hcnJdLnJldmVyc2UoKSxcbiAgICAgICAgbmVnYXRpdmU6IGJfLm5lZ2F0aXZlXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3X2RlY2ltYWxfaW5kZXggPSBuZXdfYXJyYXkubGVuZ3RoIC0gZGVjX2xlbmd0aDtcblxuICAgIHJldHVybiBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLm5ld19hcnJheV0ucmV2ZXJzZSgpLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogbmV3X2RlY2ltYWxfaW5kZXhcbiAgICB9KTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxufTtcblxuY29yZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLm11bHRpcGxpY2F0aW9uKGEsIGIpO1xufTtcblxuY29yZS5nZXREZWNpbWFsID0gZnVuY3Rpb24obik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gICAgbGV0IHN0ciA9IFwiMC5cIjtcbiAgICBjb25zdCBsZW4gPSBuXy5hcnJheS5sZW5ndGg7XG4gICAgaWYobGVuID4gMCl7XG4gICAgICBmb3IobGV0IGkgPSBuXy5kZWNpbWFsX2luZGV4OyBpIDwgbGVuOyBpKyspe1xuICAgICAgICBjb25zdCBzID0gU3RyaW5nKG5fLmFycmF5W2ldKTtcbiAgICAgICAgc3RyID0gc3RyICsgcztcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHN0ciA9IHN0ciArIFwiMFwiO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChzdHIpO1xuICAgIHJldHVybiBudW07XG4gIH1jYXRjaChlcnIpe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbn0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG59KTtcbiAgICB9XG4gIH1cbn07XG5cblxuY29yZS5kaXZpc2lvbiA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB8IHN0cmluZyB7XG5cbiAgdHJ5IHtcbiAgICBpZighYSB8fCAhYil7XG4gICAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbm90IGV4aXN0c1wiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgbGV0IGJfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgfWVsc2V7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gICAgfVxuICAgIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhiXykpe1xuICAgICAgaWYoY29yZS5pc0xhcmdlKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJJbmZpbml0eVwiO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc1NtYWxsKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJOZWdhdGl2ZSBJbmZpbml0eVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiTm90IGEgTnVtYmVyXCI7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYV8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0WmVybygpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKGNvcmUuaXNPbmUoYl8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFfLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldE9uZSgpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFfbmVnYXRpdmUgPSBhXy5uZWdhdGl2ZTtcbiAgICBjb25zdCBiX25lZ2F0aXZlID0gYl8ubmVnYXRpdmU7XG5cbiAgICBpZihhXy5uZWdhdGl2ZSl7XG4gICAgICBhXy5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGJfLm5lZ2F0aXZlKXtcbiAgICAgIGJfLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IG5lZ2F0aXZlO1xuICAgIGlmKGFfbmVnYXRpdmUgJiYgYl9uZWdhdGl2ZSl7XG4gICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1lbHNlIGlmKGFfbmVnYXRpdmUgfHwgYl9uZWdhdGl2ZSl7XG4gICAgICBuZWdhdGl2ZSA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYiwgbWF4fSl7XG4gICAgICBjb25zdCByZXN1bHRfYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IHJlbWFpbiA9IGNvcmUuZ2V0WmVybygpO1xuICAgICAgY29uc3QgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgICAgY29uc3QgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgICAgbGV0IGRlY2ltYWxfaW5kZXggPSBhLmRlY2ltYWxfaW5kZXg7XG4gICAgICBsZXQgZGVjaW1hbF9pbmRleF9yZW1haW4gPSBkZWNpbWFsX2luZGV4O1xuXG4gICAgICBsZXQgYV9pbnQgPSBjb3JlLmNsb25lKGFfKTtcbiAgICAgIGFfaW50LmRlY2ltYWxfaW5kZXggPSBhX2ludC5hcnJheS5sZW5ndGg7XG4gICAgICBsZXQgYV96ZXJvX2xlbmd0aCA9IDA7XG4gICAgICBjb25zdCBhX3plcm9fcmVzID0gYV8uYXJyYXkuam9pbihcIlwiKS5tYXRjaCgvXjArLyk7XG4gICAgICBpZihhX3plcm9fcmVzICYmIGFfemVyb19yZXNbMF0pe1xuICAgICAgICBhX3plcm9fbGVuZ3RoID0gYV96ZXJvX3Jlc1swXS5sZW5ndGg7XG4gICAgICAgIGFfaW50ID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYV9pbnQuYXJyYXkuc2xpY2UoYV96ZXJvX2xlbmd0aCwgYV9pbnQuYXJyYXkubGVuZ3RoKS5qb2luKFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGJfaW50ID0gY29yZS5jbG9uZShiXyk7XG4gICAgICBiX2ludC5kZWNpbWFsX2luZGV4ID0gYl9pbnQuYXJyYXkubGVuZ3RoO1xuICAgICAgbGV0IGJfemVyb19sZW5ndGggPSAwO1xuICAgICAgY29uc3QgYl96ZXJvX3JlcyA9IGJfaW50LmFycmF5LmpvaW4oXCJcIikubWF0Y2goL14wKy8pO1xuICAgICAgaWYoYl96ZXJvX3JlcyAmJiBiX3plcm9fcmVzWzBdKXtcbiAgICAgICAgYl96ZXJvX2xlbmd0aCA9IGJfemVyb19yZXNbMF0ubGVuZ3RoO1xuICAgICAgICBiX2ludCA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGJfaW50LmFycmF5LnNsaWNlKGJfemVyb19sZW5ndGgsIGJfaW50LmFycmF5Lmxlbmd0aCkuam9pbihcIlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHplcm9fZ2FwID0gYV96ZXJvX2xlbmd0aCAtIGJfemVyb19sZW5ndGg7XG4gICAgICBjb25zdCBhX2FycmF5ID0gWy4uLmFfaW50LmFycmF5XTtcbiAgICAgIGNvbnN0IGFfZGVjaW1hbF9sZW5ndGggPSBhXy5hcnJheS5sZW5ndGggLSBhXy5kZWNpbWFsX2luZGV4O1xuICAgICAgY29uc3QgYl9kZWNpbWFsX2xlbmd0aCA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG4gICAgICBjb25zdCBkZWNpbWFsX2dhcCA9IGFfZGVjaW1hbF9sZW5ndGggLSBiX2RlY2ltYWxfbGVuZ3RoO1xuXG4gICAgICBjb25zdCB0aW1lcyA9IE51bWJlcihjb3JlLmFkZChhX2ludC5hcnJheS5sZW5ndGgsIG1heCkuYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgICAgIGNvbnN0IGFfbGVuID0gYV9pbnQuYXJyYXkubGVuZ3RoO1xuICAgICAgbGV0IHJlbWFpbl9pc19kZWNpbWFsID0gZmFsc2U7XG4gICAgICBsZXQgcmVtYWluX2FyciA9IFswXTtcblxuICAgICAgbGV0IGRlY2ltYWxfY291bnQgPSAwO1xuICAgICAgbGV0IHJlbWFpbl9hbmRfYV9sZW5fZ2FwID0gMDtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKXtcbiAgICAgICAgbGV0IGlzX2xlc3MgPSB0cnVlO1xuICAgICAgICBsZXQgY291bnQgPSBjb3JlLmdldFplcm8oKTtcbiAgICAgICAgY29uc3QgcmVtYWluMSA9IGNvcmUubXVsdGlwbGljYXRpb24ocmVtYWluLCBcIjEwXCIpO1xuICAgICAgICBjb25zdCByZW1haW4yID0gU3RyaW5nKGFfYXJyYXkuc2xpY2UoaSwgaSArIDEpLmxlbmd0aCA9PT0gMSA/IGFfYXJyYXkuc2xpY2UoaSwgaSArIDEpWzBdIDogXCIwXCIpO1xuICAgICAgICByZW1haW4gPSBjb3JlLmFkZChyZW1haW4xLCByZW1haW4yKTtcblxuICAgICAgICByZW1haW5fYW5kX2FfbGVuX2dhcCA9IHJlbWFpbi5hcnJheS5sZW5ndGggLSBhX2xlbjtcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBjb3JlLmdldFplcm8oKTtcbiAgICAgICAgaWYoaSA9PT0gYV9sZW4pe1xuICAgICAgICAgIGRlY2ltYWxfaW5kZXggPSBpO1xuICAgICAgICAgIGlmKGNvcmUuaXNaZXJvKHJlbWFpbikpe1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgcmVtYWluX2lzX2RlY2ltYWwgPSB0cnVlO1xuICAgICAgICAgICAgZGVjaW1hbF9jb3VudCA9IGRlY2ltYWxfY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKGkgPiBhX2xlbil7XG4gICAgICAgICAgZGVjaW1hbF9jb3VudCA9IGRlY2ltYWxfY291bnQrKztcbiAgICAgICAgICBpZihjb3JlLmlzWmVybyhyZW1haW4pKXtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1heF9jb3VudCA9IG1heDtcbiAgICAgICAgd2hpbGUoaXNfbGVzcyl7XG4gICAgICAgICAgY291bnQgPSBjb3JlLmFkZChjb3VudCwgXCIxXCIpO1xuICAgICAgICAgIGlmKGNvcmUuaXNMYXJnZShjb3VudCwgbWF4X2NvdW50KSl7XG4gICAgICAgICAgICBpc19sZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJlX3Byb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgIHByb2R1Y3QgPSBjb3JlLm11bHRpcGxpY2F0aW9uKGJfaW50LCBjb3VudCk7XG5cbiAgICAgICAgICBpZihjb3JlLmlzRXF1YWwocmVtYWluLCBwcm9kdWN0KSl7XG4gICAgICAgICAgICBpc19sZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudDtcbiAgICAgICAgICAgIHJlc3VsdF9hcnIucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgcmVtYWluID0gY29yZS5zdWJ0cmFjdChyZW1haW4sIHByb2R1Y3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGNvcmUuaXNMYXJnZShwcm9kdWN0LCByZW1haW4pKXtcbiAgICAgICAgICAgIGlzX2xlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvcmUuc3VidHJhY3QoY291bnQsIFwiMVwiKTtcbiAgICAgICAgICAgIHJlc3VsdF9hcnIucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgcmVtYWluID0gY29yZS5zdWJ0cmFjdChyZW1haW4sIHByZV9wcm9kdWN0KTtcblxuICAgICAgICAgICAgaWYocmVtYWluX2lzX2RlY2ltYWwpe1xuICAgICAgICAgICAgICByZW1haW5fYXJyLnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVtYWluX2Fyci5wdXNoKC4uLnJlbWFpbi5hcnJheSk7XG4gICAgICBjb25zdCBuZXdfYXJyID0gcmVzdWx0X2Fyci5mbGF0TWFwKGUgPT4gZS5hcnJheSk7XG5cbiAgICAgIGlmKHplcm9fZ2FwID4gMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB6ZXJvX2dhcDsgaSsrKXtcbiAgICAgICAgICBuZXdfYXJyLnVuc2hpZnQoMCk7XG4gICAgICAgICAgZGVjaW1hbF9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGRlY2ltYWxfZ2FwIDwgMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBNYXRoLmFicyhkZWNpbWFsX2dhcCk7IGkrKyl7XG4gICAgICAgICAgbmV3X2Fyci5wdXNoKDApO1xuICAgICAgICAgIGRlY2ltYWxfaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYoZGVjaW1hbF9nYXAgPiAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IE1hdGguYWJzKGRlY2ltYWxfZ2FwKTsgaSsrKXtcbiAgICAgICAgICBuZXdfYXJyLnVuc2hpZnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYocmVtYWluX2FuZF9hX2xlbl9nYXAgPiAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlbWFpbl9hbmRfYV9sZW5fZ2FwOyBpKyspe1xuICAgICAgICAgIGNvbnN0IHRndCA9IHJlbWFpbl9hcnJbMF07XG4gICAgICAgICAgaWYodGd0ID09PSAwKXtcbiAgICAgICAgICAgIHJlbWFpbl9hcnIuc2hpZnQoKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRlY2ltYWxfaW5kZXhfcmVtYWluID0gZGVjaW1hbF9pbmRleF9yZW1haW4gLSByZW1haW5fYW5kX2FfbGVuX2dhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVtYWluX2Fyci5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihyZW1haW5fYW5kX2FfbGVuX2dhcCA8IDApe1xuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLmFicyhyZW1haW5fYW5kX2FfbGVuX2dhcCk7XG4gICAgICAgIGNvbnN0IGFyciA9IEFycmF5KGxlbikuZmlsbCgwKTtcbiAgICAgICAgcmVtYWluX2Fyci51bnNoaWZ0KC4uLmFycik7XG4gICAgICB9XG5cbiAgICAgIGlmKHJlbWFpbl9pc19kZWNpbWFsKXtcbiAgICAgICAgcmVtYWluX2FyciA9IFsuLi5yZW1haW5fYXJyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV3X2FycmF5OiBuZXdfYXJyLFxuICAgICAgICBkZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4LFxuICAgICAgICByZW1haW5fYXJyYXk6IHJlbWFpbl9hcnIsXG4gICAgICAgIHJlbWFpbl9kZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4X3JlbWFpbixcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWF4X3RpbWVzX2lmX25vdF9kaXZpc2libGUgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjEwXCIpO1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXksIGRlY2ltYWxfaW5kZXgsIHJlbWFpbl9hcnJheSwgcmVtYWluX2RlY2ltYWxfaW5kZXh9ID0gY2FsYyh7YTogYV8sIGI6IGJfLCBtYXg6IG1heF90aW1lc19pZl9ub3RfZGl2aXNpYmxlfSk7XG5cblxuICAgIGNvbnN0IHJlbWFpbmRlciA9IGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ucmVtYWluX2FycmF5XSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IHJlbWFpbl9kZWNpbWFsX2luZGV4XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IHF1b3RpZW50ID0gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnF1b3RpZW50LFxuICAgICAgcmVtYWluZGVyOnJlbWFpbmRlcixcbiAgICB9XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxufTtcblxuY29yZS5kaXZpZGUgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICByZXR1cm4gY29yZS5kaXZpc2lvbihhLCBiKTtcbn07XG5cbmNvcmUuZmxvb3IgPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBjb25zdCBuID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobnVtKTtcbiAgICBjb25zdCBpc19kZWNpbWFsID0gbi5kZWNpbWFsX2luZGV4IDwgbi5hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgZGVjID0gbi5hcnJheS5zbGljZShuLmRlY2ltYWxfaW5kZXgsIG4uYXJyYXkubGVuZ3RoKTtcbiAgICBjb25zdCBkZWNfbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGRlYy5qb2luKFwiXCIpKTtcbiAgICBpZihjb3JlLmlzWmVybyhkZWNfbikpe1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGxldCBuXyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogbi5hcnJheS5zbGljZSgwLCBuLmRlY2ltYWxfaW5kZXgpXG4gICAgfTtcbiAgICBpZihuLm5lZ2F0aXZlICYmIGlzX2RlY2ltYWwpe1xuICAgICAgbl8gPSBjb3JlLnN1YnRyYWN0KG5fLCBcIjFcIik7XG4gICAgfVxuICAgIHJldHVybiBuXztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBudW19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBudW19KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvcmUuY2VpbCA9IGZ1bmN0aW9uKG51bTogU3V1TnVtYmVyKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICB0cnl7XG4gICAgY29uc3QgbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG51bSk7XG4gICAgY29uc3QgaXNfZGVjaW1hbCA9IG4uZGVjaW1hbF9pbmRleCA8IG4uYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGRlYyA9IG4uYXJyYXkuc2xpY2Uobi5kZWNpbWFsX2luZGV4LCBuLmFycmF5Lmxlbmd0aCk7XG4gICAgY29uc3QgZGVjX24gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChkZWMuam9pbihcIlwiKSk7XG4gICAgaWYoY29yZS5pc1plcm8oZGVjX24pKXtcbiAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBsZXQgbl8gPSB7XG4gICAgICAuLi5uLFxuICAgICAgYXJyYXk6IG4uYXJyYXkuc2xpY2UoMCwgbi5kZWNpbWFsX2luZGV4KVxuICAgIH07XG4gICAgaWYoIW4ubmVnYXRpdmUgJiYgaXNfZGVjaW1hbCl7XG4gICAgICBuXyA9IGNvcmUuYWRkKG5fLCBcIjFcIik7XG4gICAgfVxuICAgIHJldHVybiBuXztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBudW19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBudW19KTtcbiAgICB9XG4gIH1cblxufTtcblxuXG5jb3JlLm1vZHVsbyA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB8IHN0cmluZyB7XG4gIHRyeXtcbiAgICBpZighYSB8fCAhYil7XG4gICAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbm90IGV4aXN0c1wiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhXyA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXyA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgICB9ZWxzZXtcbiAgICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgICB9XG4gICAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgIH1lbHNle1xuICAgICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgICBpZihjb3JlLmlzTGFyZ2UoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIkluZmluaXR5XCI7XG4gICAgICB9ZWxzZSBpZihjb3JlLmlzU21hbGwoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIk5lZ2F0aXZlIEluZmluaXR5XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJOb3QgYSBOdW1iZXJcIjtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhhXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9wb3NpID0gY29yZS5jbG9uZShhXyk7XG4gICAgY29uc3QgYl9wb3NpID0gY29yZS5jbG9uZShiXyk7XG4gICAgYV9wb3NpLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgYl9wb3NpLm5lZ2F0aXZlID0gZmFsc2U7XG5cbiAgICBpZihjb3JlLmlzTGFyZ2UoYl9wb3NpLCBhX3Bvc2kpKXtcbiAgICAgIGNvbnN0IGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSk7XG4gICAgICByZXR1cm4gYV87XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG5lZ2F0aXZlO1xuICAgIGlmKGFfLm5lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKHthLCBifSl7XG4gICAgICBjb25zdCBkaXZpZGVkID0gY29yZS5kaXZpZGUoYSwgYik7XG4gICAgICBjb25zdCBmbG9vcmVkID0gY29yZS5mbG9vcihkaXZpZGVkKTtcbiAgICAgIGNvbnN0IG11bHRpcGxlZCA9IGNvcmUubXVsdGlwbGUoYiwgZmxvb3JlZCk7XG4gICAgICBjb25zdCByZXMgPSBjb3JlLnN1YnRyYWN0KGEsIG11bHRpcGxlZCk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH07XG5cbiAgICBjb25zdCByZXMgPSBjYWxjKHthOiB7Li4uYV8sIG5lZ2F0aXZlOiBmYWxzZX0sIGI6IHsuLi5iXywgbmVnYXRpdmU6IGZhbHNlfSB9KTtcblxuICAgIGNvbnN0IHF1b3RpZW50ID0gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnF1b3RpZW50LFxuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG59O1xuXG5jb3JlLmdldFN1dU51bWJlciA9IChuOiBhbnkpID0+IHtcbiAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IG1hcDogb2JqZWN0ID0ge1xuICBhZGQ6IHtcbiAgICBqYTogXCLliqDnrpdcIlxuICB9LFxuICBzdWJ0cmFjdDoge1xuICAgIGphOiBcIua4m+eul1wiXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiB7XG4gICAgamE6IFwi5LmX566XXCJcbiAgfSxcbiAgbXVsdGlwbGU6IHtcbiAgICBqYTogXCLkuZfnrpdcIlxuICB9LFxuICBkaXZpc2lvbjoge1xuICAgIGphOiBcIumZpOeul1wiXG4gIH0sXG4gIGRpdmlkZToge1xuICAgIGphOiBcIumZpOeul1wiXG4gIH0sXG4gIGZsb29yOiB7XG4gICAgamE6IFwi5YiH44KK5o2o44GmXCJcbiAgfSxcbiAgY2VpbDoge1xuICAgIGphOiBcIuWIh+OCiuS4iuOBklwiXG4gIH0sXG4gIGNsb25lOiB7XG4gICAgamE6IFwi44Kv44Ot44O844OzL+OCs+ODlOODvFwiXG4gIH0sXG4gIGNvcHk6IHtcbiAgICBqYTogXCLjgq/jg63jg7zjg7Mv44Kz44OU44O8XCJcbiAgfSxcbiAgZ2V0TGFyZ2U6IHtcbiAgICBqYTogXCIy44Gk44Gu5byV5pWw44Gu44GG44Gh5aSn44GN44GE5pa544KS5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0U21hbGw6IHtcbiAgICBqYTogXCIy44Gk44Gu5byV5pWw44Gu44GG44Gh5bCP44GV44GE5pa544KS5Y+W5b6XXCJcbiAgfSxcbiAgaXNMYXJnZToge1xuICAgIGphOiBcIuesrOS4gOW8leaVsOOBjOesrOS6jOW8leaVsOOCiOOCiuWkp+OBjeOBhOOBi1wiXG4gIH0sXG4gIGlzU21hbGw6IHtcbiAgICBqYTogXCLnrKzkuIDlvJXmlbDjgYznrKzkuozlvJXmlbDjgojjgorlsI/jgZXjgYTjgYtcIlxuICB9LFxuICBpc0VxdWFsOiB7XG4gICAgamE6IFwi56ys5LiA5byV5pWw44Go56ys5LqM5byV5pWw44GM562J44GX44GE44GLXCJcbiAgfSxcbiAgZ2V0WmVybzoge1xuICAgIGphOiBcIjDjgpLlj5blvpdcIlxuICB9LFxuICBnZXRPbmU6IHtcbiAgICBqYTogXCIx44KS5Y+W5b6XXCJcbiAgfSxcbiAgaXNaZXJvOiB7XG4gICAgamE6IFwiMOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzT25lOiB7XG4gICAgamE6IFwiMeOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIHNxdWFyZToge1xuICAgIGphOiBcIuW5s+aWueaVsFwiXG4gIH0sXG4gIGdldEFic29sdXRlOntcbiAgICBqYTogXCLntbblr77lgKTjga7lj5blvpdcIlxuICB9LFxuICBleHBvbmVudGlhdGU6IHtcbiAgICBqYTogXCLjgbnjgY3kuZdcIixcbiAgfSxcbiAgZ2V0SW50ZWdlcjoge1xuICAgIGphOiBcIuaVtOaVsOmDqOOCkuWPluW+l1wiLFxuICB9LFxuICBnZXREZWNpbWFsOiB7XG4gICAgamE6IFwi5bCP5pWw6YOo44KS5Y+W5b6XXCIsXG4gIH0sXG4gIGlzTmF0dXJhbE51bWJlcjoge1xuICAgIGphOiBcIuiHqueEtuaVsOOBi+OBqeOBhuOBi1wiLFxuICB9LFxuICBpbmNsdWRlRGVjaW1hbDoge1xuICAgIGphOiBcIuWwj+aVsOmDqOOCkuWQq+OCgOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzTmVnYXRpdmU6IHtcbiAgICBqYTogXCLosqDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc1Bvc2l0aXZlOiB7XG4gICAgamE6IFwi5q2j5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgbmVnYXRlOiB7XG4gICAgamE6IFwi5q2j5pWw44Gu5aC05ZCI6LKg5pWw44Gr44GZ44KLXCJcbiAgfSxcbiAgbWFrZVBvc2l0aXZlOiB7XG4gICAgamE6IFwi6LKg5pWw44Gu5aC05ZCI5q2j5pWw44Gr44GZ44KLXCJcbiAgfSxcbiAgZ2V0TmV4dDoge1xuICAgIGphOiBcIuaVtOaVsDHjgpLov73liqDjgZfjgZ/mlbDjgpLlj5blvpdcIlxuICB9LFxuICBnZXRQcmV2OiB7XG4gICAgamE6IFwi5pW05pWwMeOCkuW8leOBhOOBn+aVsOOCkuWPluW+l1wiXG4gIH0sXG4gIGlzSW50ZWdlcjoge1xuICAgIGphOiBcIuaVtOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzRXZlbk51bWJlcjoge1xuICAgIGphOiBcIuWBtuaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzT2RkTnVtYmVyOiB7XG4gICAgamE6IFwi5aWH5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgZ2V0RGl2aXNvcnM6IHtcbiAgICBqYTogXCLntITmlbDjga7lj5blvpdcIlxuICB9LFxuICBjb21tb25EaXZpc29yczoge1xuICAgIGphOiBcIuW8leaVsDHjgajlvJXmlbAy44Gu5YWs57SE5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgZ3JlYXRlc3RDb21tb25EaXZpc29yOiB7XG4gICAgamE6IFwi5byV5pWwMeOBqOW8leaVsDLjga7mnIDlpKflhazntITmlbDjga7lj5blvpdcIlxuICB9LFxuICBjb21tb25NdWx0aXBsZToge1xuICAgamE6IFwi5byV5pWwMeOBqOW8leaVsDLjga7lhazlgI3mlbDjga7lj5blvpdcIlxuICB9LFxuICBsZWFzdENvbW1vbk11bHRpcGxlOiB7XG4gICAgamE6IFwi5byV5pWwMeOBqOW8leaVsDLjga7mnIDlsI/lhazlgI3mlbDjga7lj5blvpdcIlxuICB9LFxuICBtYWtlRmlib25hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5XjgqPjg5zjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlTHVjYVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Oq44Ol44Kr5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZVRyaWJvbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODiOODquODnOODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VUZXRyYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4bjg4jjg6njg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlUGVudGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Oa44Oz44K/44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZUhleGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OY44Kt44K144OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZUhlcHRhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODmOODl+OCv+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VPY3RhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuOCquOCr+OCv+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VOb25hbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODjuODiuODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VEZWNhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODh+OCq+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VVbmRlY2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Km44Oz44OH44Kr44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZURvZGVjYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4njg4fjgqvjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlSWNvc2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Kk44Kz44K144OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgc3VtbWF0aW9uOiB7XG4gICAgamE6IFwi57eP5ZKMXCJcbiAgfSxcbiAgaW5maW5pdGVQcm9kdWN0OiB7XG4gICAgamE6IFwi57eP5LmXL+e3j+epjVwiXG4gIH0sXG4gIGRpZ2l0U3VtOiB7XG4gICAgamE6IFwi5pWw5a2X5ZKML+WQhOahgeOBrue3j+WSjFwiXG4gIH0sXG4gIG1ha2VUcmlhbmdsZU51bWJlcjoge1xuICAgIGphOiBcIuS4ieinkuaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIG1ha2VQcm9uaWNOdW1iZXI6IHtcbiAgICBqYTogXCLnn6nlvaLmlbDjga7nlJ/miJBcIlxuICB9LFxuICBmYWN0b3JpYWw6IHtcbiAgICBqYTogXCLpmo7kuZdcIlxuICB9LFxuICBtb2R1bG86IHtcbiAgICBqYTogXCLlibDkvZnmvJTnrpdcIlxuICB9LFxuICBpc01lcnNlbm5lTnVtYmVyOiB7XG4gICAgamE6IFwi44Oh44Or44K744Oz44OM5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgbWFrZU1lcnNlbm5lTnVtYmVyczoge1xuICAgIGphOiBcIuODoeODq+OCu+ODs+ODjOaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIGlzUHJpbWVOdW1iZXI6IHtcbiAgICBqYTogXCLntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBtYWtlUHJpbWVOdW1iZXJzOiB7XG4gICAgamE6IFwi57Sg5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgaXNNZXJzZW5uZVByaW1lTnVtYmVyOiB7XG4gICAgamE6IFwi44Oh44Or44K744Oz44OM57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNDb21wb3NpdGVOdW1iZXI6IHtcbiAgICBqYTogXCLlkIjmiJDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc0hhcnNoYWROdW1iZXI6IHtcbiAgICBqYTogXCLjg4/jg7zjgrfjg6Pjg4Pjg4nmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc1p1Y2tlcm1hbk51bWJlcjoge1xuICAgIGphOiBcIuOCuuODg+OCq+ODvOODnuODs+aVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzUmVwdW5pdE51bWJlcjoge1xuICAgIGphOiBcIuODrOODlOODpeODi+ODg+ODiOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGdldEludmVyc2lvbk51bWJlcjoge1xuICAgIGphOiBcIui7ouWAkuaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGdldFJlY2lwcm9jYWw6IHtcbiAgICBqYTogXCLpgIbmlbDjga7lj5blvpdcIlxuICB9LFxuICBnZXRSZXZlcnNlOiB7XG4gICAgamE6IFwi5pWw44Gu6YCG6aCG44Gu5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJDb25ncnVlbnRpYWxHZW5lcmF0b3JzOiB7XG4gICAgamE6IFwi57ea5b2i5ZCI5ZCM5rOV44Gn44Gu55aR5Ly85Lmx5pWw5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmFuZG9tTnVtYmVyQnlNaWRkbGVTcXVhcmVNZXRob2Q6IHtcbiAgICBqYTogXCLlubPmlrnmjqHkuK3ms5Xjgafjga7nlpHkvLzkubHmlbDlj5blvpdcIlxuICB9LFxuICBnZXRSYW5kb21OdW1iZXJCeUxpbmVhckZlZWRiYWNrU2hpZnRSZWdpc3Rlcjoge1xuICAgIGphOiBcIue3muW9ouW4sOmChOOCt+ODleODiOODrOOCuOOCueOCv+OBq+OCiOOCi+eWkeS8vOS5seaVsOWPluW+l1wiXG4gIH0sXG4gIGlzU29waGllR2VybWFpblByaW1lOiB7XG4gICAgamE6IFwi44K944OV44Kj44O844K444Kn44Or44Oe44Oz57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNTYWZlUHJpbWU6IHtcbiAgICBqYTogXCLlronlhajntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBnZXRGZXJtYXROdW1iZXI6IHtcbiAgICBqYTogXCLjg5Xjgqfjg6vjg57jg7zmlbDjga7lj5blvpdcIlxuICB9LFxuICBpc0Zlcm1hdE51bWJlcjoge1xuICAgIGphOiBcIuODleOCp+ODq+ODnuODvOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzRmVybWF0UHJpbWU6IHtcbiAgICBqYTogXCLjg5Xjgqfjg6vjg57jg7zntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBnZXRDdWxsZW5OdW1iZXI6IHtcbiAgICBqYTogXCLjgqvjg6zjg7PmlbDjga7lj5blvpdcIlxuICB9LFxuICBpc0N1bGxlbk51bWJlcjoge1xuICAgIGphOiBcIuOCq+ODrOODs+aVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzQ3VsbGVuUHJpbWU6IHtcbiAgICBqYTogXCLjgqvjg6zjg7PntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBnZXRQcm90aE51bWJlcjoge1xuICAgIGphOiBcIuODl+ODreOCueaVsOOBruWPluW+l1wiXG4gIH0sXG4gIG1ha2VQcm90aE51bWJlcnM6IHtcbiAgICBqYTogXCLjg5fjg63jgrnmlbDjga7nlJ/miJBcIlxuICB9LFxuICBpc1Byb3RoTnVtYmVyOiB7XG4gICAgamE6IFwi44OX44Ot44K55pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNQcm90aFByaW1lOiB7XG4gICAgamE6IFwi44OX44Ot44K557Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgbWFrZVBpZXJwb250TnVtYmVyOiB7XG4gICAgamE6IFwi44OU44Ki44Od44Oz44OI5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgbWFrZVBpZXJwb250UHJpbWVzOiB7XG4gICAgamE6IFwi44OU44Ki44Od44Oz44OI57Sg5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgaXNQaWVycG9udFByaW1lOiB7XG4gICAgamE6IFwi44OU44Ki44Od44Oz44OI57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbn07XG5cbmNvbnN0IHdoYXRJcyA9IGZ1bmN0aW9uKHtuYW1lPVwiXCIsIGxhbmc9XCJqYVwifTogeyBuYW1lOiBzdHJpbmcsIGxhbmc6IHN0cmluZ30pOiBzdHJpbmd7XG4gIGlmKCFuYW1lKXtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGxldCB0YXJnZXQgPSB1dGlsc1tuYW1lXTtcbiAgaWYoIXRhcmdldCl7XG4gICAgdGFyZ2V0ID0gY29yZVtuYW1lXTtcbiAgfVxuXG4gIGNvbnN0IGV4aXN0cyA9IHRhcmdldCA/IHRydWUgOiBmYWxzZTtcbiAgaWYoIWV4aXN0cyl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBjb25zdCByZXMgPSBtYXBbbmFtZV07XG4gIGlmKHJlcyAmJiByZXNbbGFuZ10pe1xuICAgIHJldHVybiByZXNbbGFuZ107XG4gIH1cbiAgY29uc3Qgb3RoZXJfbGFuZyA9IE9iamVjdC5rZXlzKHJlcylbMF07XG4gIGlmKG90aGVyX2xhbmcpe1xuICAgIHJldHVybiByZXNbb3RoZXJfbGFuZ107XG4gIH1cblxuICByZXR1cm4gXCJcIjtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aGF0SXM7IiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmltcG9ydCB7IFN1dU51bWJlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IHJhbmRvbTphbnkgPSB7fTtcclxuXHJcbmNvbnN0IHNlZWRzOmFueSA9IHt9O1xyXG5cclxuY29uc3QgZ2V0U2VlZCA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gc2VlZHNbbmFtZV07XHJcbn07XHJcblxyXG5jb25zdCBzZXRTZWVkID0gKHNlZWQ6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgc2VlZHNbbmFtZV0gPSBzZWVkO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0T3JTZXRTZWVkID0gKHNlZWQ6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiBcclxuICBpZihzZWVkKXtcclxuICAgIHNlZWRzW25hbWVdID0gc2VlZDtcclxuICB9ZWxzZXtcclxuICAgIHNlZWQgPSBzZWVkc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWVkO1xyXG59O1xyXG5cclxubGV0IHJlZ2lzdGVyMSA9IDB4MTExMTtcclxubGV0IHJlZ2lzdGVyMiA9IDB4MTExMTtcclxuY29uc3QgbGZzciA9IChzZWVkKSA9PiB7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgcmVnaXN0ZXIxLnRvU3RyaW5nKDIpKVxyXG4gIFxyXG4gIGlmKHNlZWQpe1xyXG4gICAgY29uc29sZS5sb2coXCJzZWVkXCIsIHNlZWQudG9TdHJpbmcoMikpXHJcbiAgICByZWdpc3RlcjEgPSAweGZmZmYgJiBzZWVkO1xyXG4gICAgcmVnaXN0ZXIyID0gMHhmZmZmICYgc2VlZDtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIxXCIsIHJlZ2lzdGVyMS50b1N0cmluZygyKSlcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIyXCIsIHJlZ2lzdGVyMi50b1N0cmluZygyKSlcclxuICB9XHJcbiAgbGV0IGJpdDEgPSBzZWVkICYgMHhmZmZmO1xyXG4gIGxldCBiaXQyID0gc2VlZCAmIDB4ZmZmZjtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQxLnRvU3RyaW5nKDIpKVxyXG4gIGNvbnN0IHJlczEgPSAocmVnaXN0ZXIxICYgMHgwMDAxKTtcclxuICBjb25zb2xlLmxvZyhcInJlczFcIiwgcmVzMS50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMyID0gcmVzMSBeICgocmVnaXN0ZXIxICYgMHgwMDA0KSA+PiAyKTtcclxuICBjb25zb2xlLmxvZyhcInJlczJcIiwgcmVzMi50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMzID0gcmVzMiBeICgocmVnaXN0ZXIxICYgMHgwMDA4KSA+PiAzKTtcclxuICBjb25zb2xlLmxvZyhcInJlczNcIiwgcmVzMy50b1N0cmluZygyKSlcclxuICBiaXQxID0gcmVzMyBeICgocmVnaXN0ZXIxICYgMHgwMDIwKSA+PiA1KTtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQxLnRvU3RyaW5nKDIpKVxyXG4gIGJpdDIgPSAocmVnaXN0ZXIyICYgMHgwMDAxKSBeXHJcbiAgICAoKHJlZ2lzdGVyMiAmIDB4MDAwNCkgPj4gMikgXlxyXG4gICAgKChyZWdpc3RlcjIgJiAweDAwMDgpID4+IDMpIF5cclxuICAgICgocmVnaXN0ZXIyICYgMHgwMDIwKSA+PiA1KTtcclxuICAvLyBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcblxyXG4gIHJlZ2lzdGVyMSA9IChyZWdpc3RlcjEgPj4gMSkgfCAoYml0MSA8PCAxNSk7XHJcbiAgcmVnaXN0ZXIyID0gKHJlZ2lzdGVyMiA+PiAxKSB8IChiaXQyIDw8IDE1KTtcclxuICAvLyBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIsIHNlZWQudG9TdHJpbmcoMikpXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlZ2lzdGVyMTogcmVnaXN0ZXIxLFxyXG4gICAgcmVnaXN0ZXIyOiByZWdpc3RlcjIsXHJcbiAgICBiaXQxOiBiaXQxLFxyXG4gICAgYml0MjogYml0MlxyXG4gIH07XHJcblxyXG59XHJcblxyXG5cclxucmFuZG9tLmdldE5vdFJhbmRvbU51bWJlciA9IChzZWVkOiBhbnkpID0+IHtcclxuICBjb25zdCBteU5hbWUgPSBcImdldE5vdFJhbmRvbU51bWJlclwiO1xyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcbiAgaWYoIXN0b3JlZFNlZWQpe1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZSBzZWVkIHBhcmFtZXRlclwiKTtcclxuICB9XHJcbiAgc2V0U2VlZChzdG9yZWRTZWVkLCBteU5hbWUpO1xyXG4gIHJldHVybiBjb3JlLmdldFN1dU51bWJlcihzdG9yZWRTZWVkKTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXIgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbnVtID0gTWF0aC5yYW5kb20oKTtcclxuICByZXR1cm4gY29yZS5nZXRTdXVOdW1iZXIobnVtKTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXJCeU1pZGRsZVNxdWFyZU1ldGhvZCA9IChzZWVkOiBhbnkpID0+IHtcclxuICBjb25zdCBteU5hbWUgPSBcImdldFJhbmRvbU51bWJlckJ5TWlkZGxlU3F1YXJlTWV0aG9kXCI7XHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuICBjb25zdCBmaXJzdCA9IGNvcmUuZ2V0U3V1TnVtYmVyKHN0b3JlZFNlZWQgPyBzdG9yZWRTZWVkIDogXCIxMjM0XCIpO1xyXG4gIGNvbnN0IHJlcyA9IHV0aWxzLnNxdWFyZShmaXJzdCk7XHJcbiAgbGV0IHNlY29uZCA9IHJlcy5hcnJheS5zbGljZSgyLCA2KS5qb2luKFwiXCIpO1xyXG4gIGlmKHJlcy5hcnJheS5sZW5ndGggPT09IDcpe1xyXG4gICAgc2Vjb25kID0gcmVzLmFycmF5LnNsaWNlKDEsIDUpLmpvaW4oXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IHNlY29uZG51bSA9IGNvcmUuZ2V0U3V1TnVtYmVyKHNlY29uZCk7XHJcbiAgc2V0U2VlZChzZWNvbmQsIG15TmFtZSk7XHJcbiAgcmV0dXJuIHNlY29uZG51bTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXJCeUxpbmVhckNvbmdydWVudGlhbEdlbmVyYXRvcnMgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXRSYW5kb21OdW1iZXJCeUxpbmVhckNvbmdydWVudGlhbEdlbmVyYXRvcnNcIjtcclxuICBjb25zdCBhID0gY29yZS5nZXRTdXVOdW1iZXIoXCIzXCIpO1xyXG4gIGNvbnN0IGIgPSBjb3JlLmdldFN1dU51bWJlcihcIjVcIik7XHJcbiAgY29uc3QgbSA9IGNvcmUuZ2V0U3V1TnVtYmVyKFwiMTNcIik7XHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuICBjb25zdCBuZXdfc2VlZCA9IGNvcmUuZ2V0U3V1TnVtYmVyKHN0b3JlZFNlZWQgPyBzdG9yZWRTZWVkIDogXCI4XCIpO1xyXG4gIHNldFNlZWQobmV3X3NlZWQsIG15TmFtZSk7XHJcbiAgLy8gKGEgeCBzZWVkICsgYikgbW9kIG1cclxuICBjb25zdCByZXMxID0gY29yZS5tdWx0aXBsZShhLCBuZXdfc2VlZCk7XHJcbiAgY29uc3QgcmVzMiA9IGNvcmUuYWRkKHJlczEsIGIpO1xyXG4gIGNvbnN0IHJlczMgPSBjb3JlLm1vZHVsbyhyZXMyLCBtKTtcclxuICByZXR1cm4gcmVzMztcclxufTtcclxuXHJcbmxldCByZWdpc3RlciA9IDB4MTExMTtcclxucmFuZG9tLmdldFJhbmRvbU51bWJlckJ5TGluZWFyRmVlZGJhY2tTaGlmdFJlZ2lzdGVyID0gKHNlZWQpID0+IHtcclxuXHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXRSYW5kb21OdW1iZXJCeUxpbmVhckZlZWRiYWNrU2hpZnRSZWdpc3RlclwiO1xyXG4gIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgcmVnaXN0ZXIudG9TdHJpbmcoMikpXHJcbiAgXHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuXHJcbiAgaWYoIXN0b3JlZFNlZWQgJiYgc2VlZCl7XHJcbiAgICBzZXRTZWVkKHNlZWQsIG15TmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlZWRcIiwgc2VlZC50b1N0cmluZygyKSlcclxuICAgIHJlZ2lzdGVyID0gMHhmZmZmICYgc2VlZDtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIxXCIsIHJlZ2lzdGVyLnRvU3RyaW5nKDIpKVxyXG4gIH1cclxuICBsZXQgYml0ID0gc2VlZCAmIDB4ZmZmZjtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMSA9IChyZWdpc3RlciAmIDB4MDAwMSk7XHJcbiAgY29uc29sZS5sb2coXCJyZXMxXCIsIHJlczEudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMiA9IHJlczEgXiAoKHJlZ2lzdGVyICYgMHgwMDA0KSA+PiAyKTtcclxuICBjb25zb2xlLmxvZyhcInJlczJcIiwgcmVzMi50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMzID0gcmVzMiBeICgocmVnaXN0ZXIgJiAweDAwMDgpID4+IDMpO1xyXG4gIGNvbnNvbGUubG9nKFwicmVzM1wiLCByZXMzLnRvU3RyaW5nKDIpKVxyXG4gIGJpdCA9IHJlczMgXiAoKHJlZ2lzdGVyICYgMHgwMDIwKSA+PiA1KTtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcbiAgcmVnaXN0ZXIgPSAocmVnaXN0ZXIgPj4gMSkgfCAoYml0IDw8IDE1KTtcclxuXHJcbiAgc2V0U2VlZChyZWdpc3RlciwgbXlOYW1lKTtcclxuXHJcbiAgcmV0dXJuIHJlZ2lzdGVyO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tOyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmVcIjtcblxuaW1wb3J0IHsgU3V1TnVtYmVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5jb25zdCB1dGlsczphbnkgPSB7fTtcblxudXRpbHMudHMgPSAoKSA9PiB7cmV0dXJuIFwidHNcIn07XG5cbnV0aWxzLmdldE51bWJlciA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbn07XG5cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBjb25zdCBjID0gY29yZS5jbG9uZShuKTtcbiAgaWYoIWMpe1xuICAgIGNvbnN0IHMgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcobik7XG4gICAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKHMpO1xuICB9XG4gIHJldHVybiBjO1xufTtcblxudXRpbHMuZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXRMYXJnZShhLCBiKTtcbn07XG5cbnV0aWxzLmdldFNtYWxsID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0U21hbGwoYSwgYik7XG59O1xuXG51dGlscy5pc1NtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzU21hbGwoYSwgYik7XG59XG51dGlscy5pc0xhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzTGFyZ2UoYSwgYik7XG59XG5cbnV0aWxzLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbntcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbChhLCBiKTtcbn1cblxudXRpbHMuZ2V0WmVybyA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0WmVybygpO1xufTtcblxudXRpbHMuZ2V0T25lID0gZnVuY3Rpb24oKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbn07XG5cbnV0aWxzLmlzWmVybyA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc1plcm8obik7XG59XG51dGlscy5pc09uZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc09uZShuKTtcbn1cblxudXRpbHMuc3F1YXJlID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUubXVsdGlwbGljYXRpb24obiwgbik7XG59O1xuXG51dGlscy5nZXRBYnNvbHV0ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgY29uc3QgbnVtOiBhbnkgPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKG51bSBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICByZXR1cm4gbnVtO1xuICB9XG4gIGxldCBjbG9uZSA9IGNvcmUuY2xvbmUobnVtKTtcbiAgaWYoY2xvbmUubmVnYXRpdmUpe1xuICAgIGNsb25lID0gdXRpbHMubWFrZVBvc2l0aXZlKGNsb25lKTtcbiAgfVxuICByZXR1cm4gY2xvbmU7XG59O1xuXG51dGlscy5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihiYXNlLCBleHBvbmVudCk6IFN1dU51bWJlcntcbiAgY29uc3QgYiA9IHV0aWxzLmdldE51bWJlcihiYXNlKTtcbiAgY29uc3QgZXhwID0gdXRpbHMuZ2V0TnVtYmVyKGV4cG9uZW50KTtcblxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChleHApKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiTm90IHN1cHBvcnRlZCBpZiBleHBvbmVudCBpcyBkZWNpbWFsXCIsIHBhcmFtZXRlcjogW2V4cG9uZW50XX0pO1xuICB9XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihleHApKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiRXhwb25lbnQgbXVzdCBiZSBpbnRlZ2VyXCIsIHBhcmFtZXRlcjogW2V4cG9uZW50XX0pO1xuICB9XG4gIFxuICBpZih1dGlscy5pc1plcm8oZXhwKSl7XG4gICAgcmV0dXJuIGNvcmUuZ2V0T25lKCk7XG4gIH1cbiAgaWYodXRpbHMuaXNPbmUoZXhwKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBsZXQgbXVsdGkgPSB0cnVlO1xuICBpZihjb3JlLmlzU21hbGwoZXhwLCBjb3JlLmdldFplcm8oKSkpe1xuICAgIG11bHRpID0gZmFsc2U7XG4gIH1cblxuICBsZXQgY291bnQgPSBjb3JlLmdldE9uZSgpO1xuICBjb25zdCBleHBfYWJzID0gdXRpbHMuZ2V0QWJzb2x1dGUoZXhwKTtcbiAgY29uc3QgZ2V0Qm9vbCA9IChjb3VudCkgPT4ge1xuICAgIHJldHVybiBjb3JlLmlzU21hbGwoY291bnQsIGV4cF9hYnMpO1xuICB9XG4gIGxldCByZXMgPSBiO1xuICBsZXQgYm9vbCA9IGdldEJvb2woY291bnQpO1xuICB3aGlsZShib29sKXtcbiAgICBpZihtdWx0aSl7XG4gICAgICByZXMgPSBjb3JlLm11bHRpcGxlKHJlcywgYik7XG4gICAgfWVsc2V7XG4gICAgICByZXMgPSBjb3JlLmRpdmlkZShyZXMsIGIpO1xuICAgIH1cbiAgICBjb3VudCA9IGNvcmUuYWRkKGNvdW50LCBcIjFcIik7XG4gICAgYm9vbCA9IGdldEJvb2woY291bnQpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG51dGlscy5nZXRJbnRlZ2VyID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgbGV0IHN0ciA9IFwiXCI7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBuLmRlY2ltYWxfaW5kZXg7IGkrKyl7XG4gICAgY29uc3QgcyA9IFN0cmluZyhuLmFycmF5W2ldKTtcbiAgICBzdHIgPSBzdHIgKyBzO1xuICB9XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihzdHIpO1xuICByZXR1cm4gbnVtO1xufTtcblxudXRpbHMuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLmdldERlY2ltYWwobik7XG59O1xuXG51dGlscy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwobik7XG4gIGNvbnN0IGlzX3plcm8gPSB1dGlscy5pc1plcm8oZGVjaW1hbCk7XG4gIGlmKGlzX3plcm8gJiYgIW4ubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmluY2x1ZGVEZWNpbWFsID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKGRlY2ltYWwpO1xuICBpZihpc196ZXJvKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG51dGlscy5pc05lZ2F0aXZlID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGlmKHV0aWxzLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIHJldHVybiBuXy5uZWdhdGl2ZTtcbn07XG5cbnV0aWxzLmlzUG9zaXRpdmUgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgbl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgcmV0dXJuICFuXy5uZWdhdGl2ZTtcbn07XG5cbnV0aWxzLm5lZ2F0ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IG51bSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICBpZihudW0pe1xuICAgIG51bS5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn07XG5cbnV0aWxzLm1ha2VQb3NpdGl2ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IG51bSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICBpZihudW0pe1xuICAgIG51bS5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBudW07XG59O1xuXG5cbnV0aWxzLmdldE5leHQgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5hZGQobiwgXCIxXCIpO1xufTtcblxudXRpbHMuZ2V0UHJldiA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLnN1YnRyYWN0KG4sIFwiMVwiKTtcbn07XG5cbnV0aWxzLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwobik7XG4gIGlmKHV0aWxzLmlzRXF1YWwoZGVjaW1hbCwgXCIwXCIpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG5cbn07XG5cblxudXRpbHMuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGlmKHV0aWxzLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhuLCBcIjJcIik7XG5cbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhyZXMpO1xuICBpZihpc196ZXJvKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc09kZE51bWJlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGNvcmUubW9kdWxvKG4sIFwiMlwiKTtcblxuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKHJlcyk7XG4gIGlmKCFpc196ZXJvKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbnV0aWxzLmdldERpdmlzb3JzID0gZnVuY3Rpb24obik6IFN1dU51bWJlcltdIHwgRXJyb3J7XG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBpbnRlZ2VyXCIsIHBhcmFtZXRlcjogW25dfSk7XG4gIH1cbiAgY29uc3QgYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICBjb25zdCBudW06IFN1dU51bWJlciA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZighbnVtKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYodXRpbHMuaXNOYXR1cmFsTnVtYmVyKG51bSkpe1xuICAgIGlmKGNvcmUuaXNPbmUobnVtKSl7XG4gICAgICBhcnIucHVzaChudW0pXG4gICAgfWVsc2V7XG4gICAgICBmb3IobGV0IGkgPSBjb3JlLmdldE9uZSgpOyBjb3JlLmlzRXF1YWwobnVtLCBpKSB8fCBjb3JlLmlzTGFyZ2UobnVtLCBpKTsgaSA9IGNvcmUuYWRkKGksIFwiMVwiKSl7XG4gICAgICAgIGNvbnN0IHJlcz0gY29yZS5kaXZpc2lvbihudW0sIGkpO1xuICAgICAgICBpZighdXRpbHMuaXNOYXR1cmFsTnVtYmVyKHJlcykpe1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IHJlcy5yZW1haW5kZXI7XG4gICAgICAgIGlmKGNvcmUuaXNaZXJvKHJlbWFpbmRlcikpe1xuICAgICAgICAgIGFyci5wdXNoKHV0aWxzLmdldE51bWJlcihpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbnV0aWxzLmNvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlcltdIHwgRXJyb3J7XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgaWYoIWEgJiYgYSAhPT0gMCl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBpZighYiAmJiBiICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgdHJ5e1xuICAgIGNvbnN0IGFfOiBTdXVOdW1iZXIgPSB1dGlscy5nZXROdW1iZXIoYSk7XG4gICAgY29uc3QgYl86IFN1dU51bWJlciA9IHV0aWxzLmdldE51bWJlcihiKTtcbiAgICBcbiAgICBjb25zdCBhX2Rpdmlzb3JzOiBTdXVOdW1iZXJbXSA9IHV0aWxzLmdldERpdmlzb3JzKGFfKTtcbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4gYV9kaXZpc29ycztcbiAgICB9XG4gICAgY29uc3QgYl9kaXZpc29yczogU3V1TnVtYmVyW10gPSB1dGlscy5nZXREaXZpc29ycyhiXyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFfZGl2aXNvcnMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgYV9uOiBTdXVOdW1iZXIgPSBhX2Rpdmlzb3JzW2ldO1xuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGJfZGl2aXNvcnMubGVuZ3RoOyBqKyspe1xuICAgICAgICBjb25zdCBiX246IFN1dU51bWJlciA9IGJfZGl2aXNvcnNbal07XG4gICAgICAgIGlmKGNvcmUuaXNFcXVhbChhX24sIGJfbikpe1xuICAgICAgICAgIGFyci5wdXNoKGFfbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmdyZWF0ZXN0Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgdHJ5e1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLmNvbW1vbkRpdmlzb3JzKGEsIGIpO1xuICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxufTtcblxudXRpbHMuY29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiLCBsaW1pdCk6IFN1dU51bWJlcltdIHwgRXJyb3J7XG5cbiAgY29uc3QgbGltaXRfbGVuZ3RoID0gbGltaXQgPyBsaW1pdCA6IDEwO1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIGlmKCFhICYmIGEgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYoIWIgJiYgYiAhPT0gMCl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhXyA9IHV0aWxzLmdldE51bWJlcihhKTtcbiAgICBjb25zdCBiXyA9IHV0aWxzLmdldE51bWJlcihiKTtcblxuICAgIGlmKGNvcmUuaXNFcXVhbChhXywgYl8pKXtcbiAgICAgIGFyci5wdXNoKGFfKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnI6IFN1dU51bWJlcltdID0gW107XG4gICAgY29uc3QgYl9hcnI6IFN1dU51bWJlcltdID0gW107XG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSBsaW1pdF9sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBhX251bSA9IGNvcmUubXVsdGlwbGUoYV8sIGkpO1xuICAgICAgYV9hcnIucHVzaChhX251bSk7XG4gICAgfVxuICAgIGZvcihsZXQgaiA9IDE7IGogPD0gbGltaXRfbGVuZ3RoOyBqKyspe1xuICAgICAgY29uc3QgYl9udW0gPSBjb3JlLm11bHRpcGxlKGJfLCBqKTtcbiAgICAgIGJfYXJyLnB1c2goYl9udW0pO1xuICAgIH1cblxuICAgIGFfYXJyLmZvckVhY2goYV9uID0+IHtcbiAgICAgIGNvbnN0IHRndCA9IGJfYXJyLmZpbmQoYl9uID0+IGNvcmUuaXNFcXVhbChhX24sIGJfbikpO1xuICAgICAgaWYodGd0KXtcbiAgICAgICAgYXJyLnB1c2godGd0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGIsIGxpbWl0XX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiLCBsaW1pdF19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmxlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiLCBsaW1pdCk6IFN1dU51bWJlciB7XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSB1dGlscy5jb21tb25NdWx0aXBsZShhLCBiLCBsaW1pdCk7XG4gIHJldHVybiBhcnJbMF07XG59O1xuXG5cbmNvbnN0IGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbiA9IGZ1bmN0aW9uKHthcnJheSwgbGltaXR9KTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG5cbiAgY29uc3QgbWF4ID0gbGltaXQgPyBsaW1pdCA6IDEwMDtcblxuICBjb25zdCBpdGVtc19sZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgICBpZihhcnJheS5sZW5ndGggPj0gbWF4KXtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmdldE51bWJlcihcIjBcIik7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaXRlbXNfbGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIChpdGVtc19sZW5ndGggLSBpKTtcbiAgICAgICAgY29uc3QgbnVtID0gYXJyYXlbaW5kZXhdO1xuICAgICAgICByZXMgPSBjb3JlLmFkZChyZXMsIG51bSk7XG4gICAgICB9XG4gICAgICBhcnJheS5wdXNoKHJlcyk7XG4gICAgICByZXR1cm4gZnVuYyhhcnJheSk7XG4gICAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FycmF5LCBsaW1pdF19KVxuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2FycmF5LCBsaW1pdF19KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBmdW5jKGFycmF5KTtcbn07XG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkgPSBmdW5jdGlvbih7IGZpcnN0PVwiMFwiLCBsYXN0PVwiMVwiLCBsZW5ndGg9MiB9KTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgY29uc3QgYSA9IHV0aWxzLmdldE51bWJlcihmaXJzdCk7XG4gIGNvbnN0IGIgPSB1dGlscy5nZXROdW1iZXIobGFzdCk7XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgdHJ5e1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgdGd0ID0gYTtcbiAgICAgIGlmKGkgPT09IChsZW4gLTEpKXtcbiAgICAgICAgdGd0ID0gYjtcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKHRndCk7XG4gICAgfVxuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtmaXJzdCwgbGFzdCwgbGVuZ3RoXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtmaXJzdCwgbGFzdCwgbGVuZ3RoXX0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxudXRpbHMubWFrZUZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oZmlyc3Q9XCIwXCIsIGxhc3Q9XCIxXCIpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3QsIGxhc3QsIGxlbmd0aDogMn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlVHJpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogM30pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlVGV0cmFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogNH0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlUGVudGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogNX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlSGV4YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA2fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VIZXB0YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA3fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VPY3RhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDh9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZU5vbmFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogOX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlRGVjYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAxMH0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlVW5kZWNhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDExfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VEb2RlY2FuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMTJ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUljb3NhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDIwfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VMdWNhU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMlwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAyfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKGFycmF5KTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBpZighYXJyYXkgfHwgIUFycmF5LmlzQXJyYXkoYXJyYXkpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgQXJyYXkuXCIsIHBhcmFtZXRlcjogW2FycmF5XX0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcImFycmF5IGxlbmd0aCBpcyB6ZXJvXCIsIHBhcmFtZXRlcjogW2FycmF5XX0pO1xuICB9XG4gIGxldCBzdW0gPSBjb3JlLmdldFplcm8oKTtcbiAgaWYoQXJyYXkuaXNBcnJheShhcnJheSkpe1xuICAgIHRyeXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHN1bSA9IGNvcmUuYWRkKHN1bSwgYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthcnJheV19KVxuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2FycmF5XX0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxudXRpbHMuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oYXJyYXkpOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgaWYoIWFycmF5IHx8ICFBcnJheS5pc0FycmF5KGFycmF5KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIEFycmF5LlwiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB1dGlscy5nZXROdW1iZXIoYXJyYXlbMF0pO1xuICB9XG4gIGxldCByZXMgPSBhcnJheVswXTtcbiAgdHJ5e1xuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICByZXMgPSBjb3JlLm11bHRpcGxlKHJlcywgYXJyYXlbaV0pO1xuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyYXldfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2FycmF5XX0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxudXRpbHMuZGlnaXRTdW0gPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIGNvbnN0IG4gPSB1dGlscy5nZXROdW1iZXIobnVtKTtcbiAgaWYoIW4gfHwgIUFycmF5LmlzQXJyYXkobi5hcnJheSkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuICBsZXQgcmVzID0gY29yZS5nZXRaZXJvKCk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIHRyeXtcbiAgICByZXMgPSB1dGlscy5zdW1tYXRpb24obi5hcnJheSlcbiAgICByZXR1cm4gcmVzO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtudW1dfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW251bV19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLm1ha2VUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKG51bSk6IFN1dU51bWJlciB8IEVycm9ye1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pIHx8IHV0aWxzLmlzTmVnYXRpdmUobikgfHwgIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIiwgcGFyYW1ldGVyOiBbbnVtXX0pO1xuICB9XG4gIFxuICBjb25zdCByZXMxID0gY29yZS5tdWx0aXBsZShuLCBjb3JlLmFkZChuLCBcIjFcIikpO1xuICBjb25zdCByZXMyID0gY29yZS5kaXZpZGUocmVzMSwgXCIyXCIpO1xuICByZXR1cm4gcmVzMjtcbn07XG5cbnV0aWxzLm1ha2VQcm9uaWNOdW1iZXIgPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIGNvbnN0IG4gPSB1dGlscy5nZXROdW1iZXIobnVtKTtcbiAgaWYoY29yZS5pc1plcm8obikpe1xuICAgIHJldHVybiBjb3JlLmdldFplcm8oKTtcbiAgfVxuICBpZih1dGlscy5pc05lZ2F0aXZlKG4pIHx8ICF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuICB0cnl7XG4gICAgY29uc3QgIHJlcyA9IGNvcmUubXVsdGlwbGUobiwgY29yZS5hZGQobiwgXCIxXCIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtudW1dfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW251bV19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZhY3RvcmlhbCA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IG4gPSB1dGlscy5nZXROdW1iZXIobnVtKTtcbiAgaWYoY29yZS5pc1plcm8obikgfHwgY29yZS5pc09uZShuKSl7XG4gICAgcmV0dXJuIGNvcmUuZ2V0T25lKCk7XG4gIH1cblxuICBpZih1dGlscy5pc05lZ2F0aXZlKG4pIHx8ICF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuXG4gIGxldCBnbyA9IHRydWU7XG4gIGxldCB0ZW1wID0gbjtcbiAgbGV0IGN1cnJlbnQgPSBuO1xuICBjb25zdCBhcnIgPSBbdGVtcF07XG4gIHRyeXtcbiAgICB3aGlsZShnbyl7XG4gICAgICBjb25zdCB0YXJnZXQgPSBjb3JlLnN1YnRyYWN0KGN1cnJlbnQsIFwiMVwiKTtcbiAgICAgIGFyci5wdXNoKHRhcmdldCk7XG4gICAgICBjdXJyZW50ID0gdGFyZ2V0O1xuICAgICAgaWYoY29yZS5pc1NtYWxsKGN1cnJlbnQsIFwiMlwiKSl7XG4gICAgICAgIGdvID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1dGlscy5pbmZpbml0ZVByb2R1Y3QoYXJyKTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG5cbnV0aWxzLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbihudW0pe1xuXG4gIGNvbnN0IG51bTEgPSB1dGlscy5nZXROdW1iZXIobnVtKTtcblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG51bTEpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodXRpbHMuaXNaZXJvKG51bTEpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShudW0xKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzRXZlbk51bWJlcihudW0xKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzRXF1YWwobnVtMSwgXCIxXCIpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IG51bTIgPSBjb3JlLmFkZChudW0xLCBcIjFcIik7XG5cbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICBsZXQgbiA9IG51bTI7XG4gIHdoaWxlKHRydWUpe1xuICAgIG4gPSBjb3JlLmRpdmlzaW9uKG4sIFwiMlwiKTtcbiAgICBpZighdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZih1dGlscy5pc0VxdWFsKG4sIFwiMVwiKSl7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKHV0aWxzLmlzRXF1YWwobiwgXCIyXCIpKXtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYodXRpbHMuaXNPZGROdW1iZXIobikpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcblxufTtcblxudXRpbHMubWFrZU1lcnNlbm5lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG5cbiAgY29uc3QgbWF4XyA9IHV0aWxzLmdldE51bWJlcigyNSk7XG5cbiAgaWYoIW1heCB8fCBjb3JlLmlzTGFyZ2UobWF4LCBtYXhfKSl7XG4gICAgbWF4ID0gbWF4XztcbiAgfVxuXG4gIG1heCA9IGNvcmUuYWRkKG1heCwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gIGNvbnN0IHR3byA9IHV0aWxzLmdldE51bWJlcigyKTtcbiAgY29uc3QgYXJyOlN1dU51bWJlcltdICA9IFtdO1xuICBsZXQgY3VycmVudCA9IHV0aWxzLmdldE51bWJlcigwKTtcbiAgbGV0IGV4ID0gdXRpbHMuZ2V0TnVtYmVyKDEpO1xuICBcbiAgd2hpbGUoY29yZS5pc1NtYWxsKGV4LCBtYXgpKXtcbiAgICBjdXJyZW50ID0gdXRpbHMuZXhwb25lbnRpYXRlKHR3byxleCk7XG4gICAgY3VycmVudCA9IGNvcmUuc3VidHJhY3QoY3VycmVudCwgdXRpbHMuZ2V0TnVtYmVyKDEpKTtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICBleCA9IGNvcmUuYWRkKGV4LCB1dGlscy5nZXROdW1iZXIoMSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyB1dGlscy50cmlhbERpdmlzaW9uID0gZnVuY3Rpb24obil7XG4vLyAgIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbi8vIH07XG5cbnV0aWxzLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzT25lKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzRXF1YWwobnVtLCBcIjJcIikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYodXRpbHMuaXNFdmVuTnVtYmVyKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmluY2x1ZGVEZWNpbWFsKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzU21hbGwobnVtLCB1dGlscy5nZXROdW1iZXIoXCIwXCIpKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJldiA9IGNvcmUuc3VidHJhY3QobnVtLCB1dGlscy5nZXROdW1iZXIoXCIxXCIpKTtcbiAgbGV0IGN1cnJlbnQgPSBjb3JlLmRpdmlzaW9uKHByZXYsIHV0aWxzLmdldE51bWJlcihcIjJcIikpO1xuXG4gIGxldCBpc19wcmltZSA9IHRydWU7XG5cbiAgd2hpbGUoaXNfcHJpbWUgJiYgY29yZS5pc0xhcmdlKGN1cnJlbnQsIHV0aWxzLmdldE51bWJlcihcIjJcIikpKXtcblxuICAgIGNvbnN0IHJlcyA9IGNvcmUubW9kdWxvKG51bSwgY3VycmVudCk7XG4gICAgaWYodXRpbHMuaXNaZXJvKHJlcykpe1xuICAgICAgaXNfcHJpbWUgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjdXJyZW50ID0gY29yZS5zdWJ0cmFjdChjdXJyZW50LCB1dGlscy5nZXROdW1iZXIoXCIxXCIpKTtcbiAgfVxuXG4gIHJldHVybiBpc19wcmltZTtcblxufTtcblxudXRpbHMubWFrZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heGxlbmd0aCl7XG4gIGNvbnN0IG1heF9sZW5ndGggPSB1dGlscy5nZXROdW1iZXIoMjUpO1xuICBpZighbWF4bGVuZ3RoIHx8IGNvcmUuaXNMYXJnZShtYXhsZW5ndGgsIG1heF9sZW5ndGgpKXtcbiAgICBtYXhsZW5ndGggPSBtYXhfbGVuZ3RoO1xuICB9XG4gIGNvbnN0IGFycjpTdXVOdW1iZXJbXSA9IFtdO1xuICBsZXQgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKFwiMFwiKTtcbiAgbGV0IGNvdW50ID0gdXRpbHMuZ2V0WmVybygpO1xuICB3aGlsZShjb3JlLmlzU21hbGwoY291bnQsIG1heGxlbmd0aCkpe1xuICAgIG51bSA9IGNvcmUuYWRkKG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gICAgaWYodXRpbHMuaXNQcmltZU51bWJlcihudW0pKXtcbiAgICAgIGFyci5wdXNoKG51bSk7XG4gICAgICBjb3VudCA9IHV0aWxzLmdldE51bWJlcihhcnIubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbnV0aWxzLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih1dGlscy5pc1ByaW1lTnVtYmVyKG4pICYmIHV0aWxzLmlzTWVyc2VubmVOdW1iZXIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmlzQ29tcG9zaXRlTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKHV0aWxzLmlzWmVybyhudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodXRpbHMuaXNPbmUobnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYodXRpbHMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICBpZih1dGlscy5pc0xhcmdlKG4sIFwiNFwiKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXMgPSB1dGlscy5pc1ByaW1lTnVtYmVyKG51bSk7XG5cbiAgaWYocmVzIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0eXBlb2YgcmVzID09PSBcImJvb2xlYW5cIil7XG4gICAgcmV0dXJuICFyZXM7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaXNIYXJzaGFkTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc0VxdWFsKFwiMFwiKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzU21hbGwobnVtLCBcIjBcIikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkaXZpc29ycyA9IHV0aWxzLmdldERpdmlzb3JzKG4pO1xuXG4gIGNvbnN0IGRzdW0gPSB1dGlscy5kaWdpdFN1bShuKTtcblxuICBsZXQgYm9vbCA9IGZhbHNlO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZGl2aXNvcnMubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGQgPSBkaXZpc29yc1tpXTtcbiAgICBpZih1dGlscy5pc0VxdWFsKGQsIGRzdW0pKXtcbiAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBib29sO1xufTtcblxudXRpbHMuaXNadWNrZXJtYW5OdW1iZXIgPSBmdW5jdGlvbihuKXtcblxuICBsZXQgcmVzID0gZmFsc2U7XG5cbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc0VxdWFsKFwiMFwiKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZih1dGlscy5pc05lZ2F0aXZlKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG5cbiAgY29uc3QgcHJvZHVjdCA9IHV0aWxzLmluZmluaXRlUHJvZHVjdChudW0uYXJyYXkpO1xuICBjb25zdCBkaXZpc29ycyA9IHV0aWxzLmdldERpdmlzb3JzKG4pO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBkaXZpc29ycy5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZCA9IGRpdmlzb3JzW2ldO1xuICAgIGlmKHV0aWxzLmlzRXF1YWwocHJvZHVjdCwgZCkpe1xuICAgICAgcmVzID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxudXRpbHMuaXNSZXB1bml0TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGxldCByZXMgPSBmYWxzZTtcblxuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKHV0aWxzLmlzRXF1YWwoXCIwXCIpKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBcbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29uc3QgYXJyID0gbnVtLmFycmF5O1xuICByZXMgPSB0cnVlO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJbaV07XG4gICAgaWYoZWxtICE9PSAxKXtcbiAgICAgIHJlcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbmNvbnN0IG1ha2VTb3BoaWVHZXJtYW5QcmltZUFuZFNhZmVQcmltZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzYWZlX3ByaW1lX2V4cGVjdGVkID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBjb25zdCBudW0xID0gY29yZS5tdWx0aXBsZShzYWZlX3ByaW1lX2V4cGVjdGVkLCBcIjJcIik7XG4gIGNvbnN0IHNvcGhpZV9nZXJtYW5fZXhwZWN0ZWQgPSBjb3JlLmFkZChudW0xLCBcIjFcIik7XG5cbiAgaWYodXRpbHMuaXNQcmltZU51bWJlcihzYWZlX3ByaW1lX2V4cGVjdGVkKSAmJiB1dGlscy5pc1ByaW1lTnVtYmVyKHNvcGhpZV9nZXJtYW5fZXhwZWN0ZWQpKXtcbiAgICByZXR1cm4ge1xuICAgICAgc29waGllR2VybWFpblByaW1lOiBzYWZlX3ByaW1lX2V4cGVjdGVkLFxuICAgICAgc2FmZVByaW1lOiBzb3BoaWVfZ2VybWFuX2V4cGVjdGVkLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzb3BoaWVHZXJtYWluUHJpbWU6IG51bGwsXG4gICAgc2FmZVByaW1lOiBudWxsLFxuICB9O1xuXG59O1xuXG51dGlscy5pc1NvcGhpZUdlcm1haW5QcmltZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCB7IHNvcGhpZUdlcm1haW5QcmltZSwgc2FmZVByaW1lIH0gPSBtYWtlU29waGllR2VybWFuUHJpbWVBbmRTYWZlUHJpbWUobik7XG4gIGlmKHNvcGhpZUdlcm1haW5QcmltZSAmJiBzYWZlUHJpbWUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmlzU2FmZVByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bTEgPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IG51bTIgPSBjb3JlLnN1YnRyYWN0KG51bTEsIFwiMVwiKTtcbiAgY29uc3QgbnVtMyA9IGNvcmUuZGl2aXNpb24obnVtMiwgXCIyXCIpO1xuICBjb25zdCB7IHNvcGhpZUdlcm1haW5QcmltZSwgc2FmZVByaW1lIH0gPSBtYWtlU29waGllR2VybWFuUHJpbWVBbmRTYWZlUHJpbWUobnVtMyk7XG5cbiAgaWYoc29waGllR2VybWFpblByaW1lICYmIHNhZmVQcmltZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xuXG59O1xuXG5jb25zdCBzb3J0ID0gZnVuY3Rpb24oYXJyYXk6IFtdLCBvcmRlcj86IFwiYXNjXCIgfCBcImRlc2NcIil7XG5cbiAgY29uc3QgbmV3X2FyciA9IFsuLi5hcnJheV07XG5cbiAgY29uc3QgYXNjID0gKGFfbiwgYl9uKSA9PiB7XG4gICAgaWYoYV9uIDwgYl9uKXtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9ZWxzZSBpZihhX24gPiBiX24pe1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IGRlc2MgPSAoYV9uLCBiX24pID0+IHtcbiAgICBpZihhX24gPCBiX24pe1xuICAgICAgcmV0dXJuIDE7XG4gICAgfWVsc2UgaWYoYV9uID4gYl9uKXtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgbmV3X2Fyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYV9uID0gTnVtYmVyKGEpO1xuICAgIGNvbnN0IGJfbiA9IE51bWJlcihiKTtcblxuICAgIGlmKG9yZGVyID09PSBcImFzY1wiKXtcbiAgICAgIHJldHVybiBhc2MoYV9uLCBiX24pO1xuICAgIH1lbHNlIGlmKG9yZGVyID09PSBcImRlc2NcIil7XG4gICAgICByZXR1cm4gZGVzYyhhX24sIGJfbik7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gYXNjKGFfbiwgYl9uKVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdfYXJyO1xuXG59O1xuXG51dGlscy5nZXRJbnZlcnNpb25OdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgbGV0IGNvdW50ID0gdXRpbHMuZ2V0WmVybygpO1xuXG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc0VxdWFsKFwiMFwiKSl7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBpZih1dGlscy5pc05lZ2F0aXZlKG51bSkpe1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGNvbnN0IG9yZGVyZWRBcnJheTogYW55W10gPSBzb3J0KG51bS5hcnJheSwgXCJhc2NcIik7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IG51bS5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3Qgb3JkZXJlZF9lbG0gPSBvcmRlcmVkQXJyYXlbaV07XG4gICAgY29uc3Qgb3JpZ2luYWxfZWxtID0gbnVtLmFycmF5W2ldO1xuICAgIGNvbnN0IGdhcCA9IGNvcmUuc3VidHJhY3Qob3JkZXJlZF9lbG0sIG9yaWdpbmFsX2VsbSk7XG4gICAgaWYodXRpbHMuaXNOZWdhdGl2ZShnYXApKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZih1dGlscy5pc1plcm8oZ2FwKSl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY291bnQgPSBjb3JlLmFkZChjb3VudCwgZ2FwKTtcbiAgfVxuXG4gIHJldHVybiBjb3VudDtcblxufTtcblxuXG51dGlscy5nZXRSZWNpcHJvY2FsID0gZnVuY3Rpb24obil7XG4gIGxldCByZXMgPSBudWxsO1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKHV0aWxzLmlzWmVybyhudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaWYodXRpbHMuaXNPbmUobnVtKSl7XG4gICAgcmV0dXJuIHV0aWxzLmdldE9uZSgpO1xuICB9XG5cbiAgcmVzID0gY29yZS5kaXZpc2lvbih1dGlscy5nZXRPbmUoKSwgbnVtKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG51dGlscy5nZXRSZXZlcnNlID0gZnVuY3Rpb24obil7XG4gIGxldCByZXMgPSBudWxsO1xuXG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYobnVtLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGlmKHV0aWxzLmluY2x1ZGVEZWNpbWFsKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMTBcIikpKXtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY29uc3QgYXJyYXkgPSBbLi4ubnVtLmFycmF5XS5yZXZlcnNlKCk7XG4gIGNvbnN0IHN0ciA9IGFycmF5LmpvaW4oXCJcIik7XG4gIGNvbnN0IG5ld19udW0gPSB1dGlscy5nZXROdW1iZXIoc3RyKTtcblxuICByZXR1cm4gbmV3X251bTtcblxufTtcblxudXRpbHMuZ2V0RmVybWF0TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgYmFzZSA9IHV0aWxzLmdldE51bWJlcihcIjJcIik7XG4gIGNvbnN0IGV4ID0gdXRpbHMuZXhwb25lbnRpYXRlKGJhc2UsIG51bSk7XG4gIGNvbnN0IG9uZSA9IHV0aWxzLmdldE9uZSgpO1xuICBjb25zdCByZXMxID0gdXRpbHMuZXhwb25lbnRpYXRlKGJhc2UsIGV4KTtcbiAgY29uc3QgcmVzMiA9IGNvcmUuYWRkKHJlczEsIG9uZSk7XG4gIHJldHVybiByZXMyO1xufTtcblxudXRpbHMuaXNGZXJtYXROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBjb25zdCBtYXggPSA2O1xuICBsZXQgYm9vbCA9IGZhbHNlO1xuICBmb3IobGV0IGkgPSAwOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBmID0gdXRpbHMuZ2V0RmVybWF0TnVtYmVyKGAke2l9YCk7XG4gICAgaWYodXRpbHMuaXNFcXVhbChmLCBudW0pKXtcbiAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBib29sO1xufTtcblxudXRpbHMuaXNGZXJtYXRQcmltZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKHV0aWxzLmlzRmVybWF0TnVtYmVyKG51bSkgJiYgdXRpbHMuaXNQcmltZU51bWJlcil7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5nZXRDdWxsZW5OdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBjb25zdCBiYXNlID0gdXRpbHMuZ2V0TnVtYmVyKFwiMlwiKTtcbiAgY29uc3QgZXggPSB1dGlscy5leHBvbmVudGlhdGUoYmFzZSwgbnVtKTtcbiAgY29uc3QgcmVzMSA9IGNvcmUubXVsdGlwbGUobnVtLCBleCk7XG4gIGNvbnN0IHJlczIgPSBjb3JlLmFkZChyZXMxLCB1dGlscy5nZXRPbmUoKSk7XG4gIHJldHVybiByZXMyO1xufTtcblxudXRpbHMuaXNDdWxsZW5OdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBjb25zdCBtYXggPSAyMDtcbiAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgZiA9IHV0aWxzLmdldEN1bGxlbk51bWJlcihgJHtpfWApO1xuICAgIGlmKHV0aWxzLmlzRXF1YWwoZiwgbnVtKSl7XG4gICAgICBib29sID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm9vbDtcbn07XG5cbnV0aWxzLmlzQ3VsbGVuUHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBsZXQgYm9vbCA9IGZhbHNlO1xuICBpZih1dGlscy5pc1ByaW1lTnVtYmVyKG51bSkgJiYgdXRpbHMuaXNDdWxsZW5OdW1iZXIobnVtKSl7XG4gICAgYm9vbCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGJvb2w7XG59O1xuXG51dGlscy5nZXRQcm90aE51bWJlciA9IGZ1bmN0aW9uKGssIG4pe1xuICBjb25zdCBrX251bSA9IHV0aWxzLmdldE51bWJlcihrKTtcbiAgY29uc3Qgbl9udW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNaZXJvKGtfbnVtKSB8fCB1dGlscy5pc1plcm8obl9udW0pKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZih1dGlscy5pc1NtYWxsKGtfbnVtLCB1dGlscy5nZXRaZXJvKCkpIHx8IHV0aWxzLmlzU21hbGwobl9udW0sIHV0aWxzLmdldFplcm8oKSkpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYodXRpbHMuaXNJbnRlZ2VyKGtfbnVtKSB8fCB1dGlscy5pc0ludGVnZXIobl9udW0pKXtcbiAgICBpZih1dGlscy5pc09kZE51bWJlcihrX251bSkpe1xuICAgICAgY29uc3QgZXggPSB1dGlscy5leHBvbmVudGlhdGUodXRpbHMuZ2V0TnVtYmVyKFwiMlwiKSwgbl9udW0pO1xuICAgICAgaWYodXRpbHMuaXNMYXJnZShleCwga19udW0pKXtcbiAgICAgICAgY29uc3QgcmVzID0gY29yZS5tdWx0aXBsZShleCwga19udW0pO1xuICAgICAgICBjb25zdCByZXMyID0gY29yZS5hZGQocmVzLCB1dGlscy5nZXRPbmUoKSk7XG4gICAgICAgIHJldHVybiByZXMyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xuXG59O1xuXG51dGlscy5tYWtlUHJvdGhOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgY29uc3QgZGVmYXVsdF9tYXggPSAxMDtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gZGVmYXVsdF9tYXg7XG4gIH1lbHNlIGlmKG1heCA+IGRlZmF1bHRfbWF4KXtcbiAgICBtYXggPSBkZWZhdWx0X21heDtcbiAgfVxuICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspe1xuICAgIGNvbnN0IGsgPSB1dGlscy5nZXROdW1iZXIoU3RyaW5nKGkgKiAyICsgMSkpO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBtYXg7IGorKyl7XG4gICAgICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKFN0cmluZyhqICsgMSkpO1xuICAgICAgY29uc3QgcmVzID0gdXRpbHMuZ2V0UHJvdGhOdW1iZXIoaywgbik7XG4gICAgICBpZihyZXMpe1xuICAgICAgICBsaXN0LnB1c2gocmVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGlzdC5zb3J0KChhOiBTdXVOdW1iZXIsIGI6IFN1dU51bWJlcikgPT4ge1xuICAgIGNvbnN0IGFfaXNfc21hbGwgPSB1dGlscy5pc1NtYWxsKGEsIGIpXG4gICAgaWYoYV9pc19zbWFsbCl7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIDFcbiAgfSlcbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG51dGlscy5pc1Byb3RoTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgbGlzdCA9IHV0aWxzLm1ha2VQcm90aE51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IHAgPSBsaXN0W2ldO1xuICAgIGlmKHV0aWxzLmlzRXF1YWwocCwgbnVtKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaXNQcm90aFByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgaWYodXRpbHMuaXNQcm90aE51bWJlcihudW0pICYmIHV0aWxzLmlzUHJpbWVOdW1iZXIobnVtKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMubWFrZVBpZXJwb250TnVtYmVyID0gZnVuY3Rpb24odSwgdil7XG4gIC8vIDJ1IDN2ICsgMVxuICBjb25zdCB1X24gPSB1dGlscy5nZXROdW1iZXIodSk7XG4gIGNvbnN0IHZfbiA9IHV0aWxzLmdldE51bWJlcih2KTtcbiAgaWYodXRpbHMuaXNOZWdhdGl2ZSh1X24pIHx8IHV0aWxzLmlzTmVnYXRpdmUodl9uKSl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcih1X24pIHx8ICF1dGlscy5pc0ludGVnZXIodl9uKSl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCByZXMxID0gdXRpbHMuZXhwb25lbnRpYXRlKHV0aWxzLmdldE51bWJlcihcIjJcIiksIHVfbik7XG4gIGNvbnN0IHJlczIgPSB1dGlscy5leHBvbmVudGlhdGUodXRpbHMuZ2V0TnVtYmVyKFwiM1wiKSwgdl9uKTtcbiAgY29uc3QgcmVzID0gdXRpbHMuc3VtbWF0aW9uKFtyZXMxLCByZXMyLCB1dGlscy5nZXRPbmUoKV0pO1xuICByZXR1cm4gcmVzO1xufTtcblxudXRpbHMubWFrZVBpZXJwb250TnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIC8vIDJ1IDN2ICsgMVxuICBcbiAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcbiAgY29uc3QgbWF4X2RlZmF1bHQgPSAxMDtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gbWF4X2RlZmF1bHQ7XG4gIH1lbHNlIGlmKG1heCA+IG1heF9kZWZhdWx0KXtcbiAgICBtYXggPSBtYXhfZGVmYXVsdDtcbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspe1xuICAgIGxldCB1ID0gdXRpbHMuZ2V0TnVtYmVyKGkpO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBtYXg7IGorKyl7XG4gICAgICBsZXQgdiA9IHV0aWxzLmdldE51bWJlcihqKTtcbiAgICAgIGNvbnN0IHJlczogYW55ID0gdXRpbHMubWFrZVBpZXJwb250TnVtYmVyKHUsIHYpO1xuICAgICAgaWYocmVzKXtcbiAgICAgICAgaWYobGlzdC5maW5kKChlbG0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY29yZS5pc0VxdWFsKGVsbSwgcmVzKVxuICAgICAgICB9KSl7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wdXNoKHJlcylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9yKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKXtcbiAgICBsZXQgdiA9IHV0aWxzLmdldE51bWJlcihpKTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgbWF4OyBqKyspe1xuICAgICAgbGV0IHUgPSB1dGlscy5nZXROdW1iZXIoaik7XG4gICAgICBjb25zdCByZXM6IGFueSA9IHV0aWxzLm1ha2VQaWVycG9udE51bWJlcih1LCB2KTtcbiAgICAgIGlmKHJlcyl7XG4gICAgICAgIGlmKGxpc3QuZmluZCgoZWxtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvcmUuaXNFcXVhbChlbG0sIHJlcylcbiAgICAgICAgfSkpe1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpc3QucHVzaChyZXMpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxpc3Quc29ydCgoYTogU3V1TnVtYmVyLCBiOiBTdXVOdW1iZXIpID0+IHtcbiAgICBjb25zdCBhX2lzX3NtYWxsID0gdXRpbHMuaXNTbWFsbChhLCBiKVxuICAgIGlmKGFfaXNfc21hbGwpe1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiAxXG4gIH0pXG4gIHJldHVybiBsaXN0O1xufTtcblxudXRpbHMubWFrZVBpZXJwb250UHJpbWVzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyMSA9IHV0aWxzLm1ha2VQaWVycG9udE51bWJlcnMoKTtcbiAgY29uc29sZS5sb2coXCJhXCIsIGFycjEpXG4gIGNvbnN0IGFycjI6IGFueVtdID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zb2xlLmxvZyhpKVxuICAgIGNvbnN0IG51bSA9IGFycjFbaV07XG4gICAgaWYodXRpbHMuaXNQcmltZU51bWJlcihudW0pKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiYlwiKVxuICAgICAgYXJyMi5wdXNoKG51bSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnIyO1xufTtcblxudXRpbHMuaXNQaWVycG9udFByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgaWYodXRpbHMuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhcnIgPSB1dGlscy5tYWtlUGllcnBvbnRQcmltZXMoKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpZih1dGlscy5pc0VxdWFsKG51bSwgYXJyW2ldKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgcmFuZG9tIGZyb20gXCIuL3JhbmRvbVwiO1xuaW1wb3J0IGRvYyBmcm9tIFwiLi9kb2NcIjtcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb3JlOiBjb3JlLFxuICB1dGlsczogdXRpbHMsXG4gIHJhbmRvbTogcmFuZG9tLFxuICBkb2M6IGRvYyxcbiAgY29uc3RhbnRzOiBjb25zdGFudHMsXG4gIHRzOiB0cnVlLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=