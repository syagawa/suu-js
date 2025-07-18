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
            system: 10,
            getJSNumber: function () {
                return Number(core.numArrayToString(this));
            },
            getString: function () {
                return core.numArrayToString(this);
            },
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
        if (core.getCalculationMode() === "js") {
            var a_num = a.getJSNumber();
            var b_num = b.getJSNumber();
            if (a_num === b_num) {
                o.equal = true;
                return o;
            }
            else if (a_num < b_num) {
                o.small = a;
                o.large = b;
                return o;
            }
            else if (a_num > b_num) {
                o.small = b;
                o.large = a;
                return o;
            }
        }
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
    if (core.getCalculationMode() === "js") {
        if (n.getJSNumber() === 0) {
            return true;
        }
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
    if (core.getCalculationMode() === "js") {
        if (n.getJSNumber() === 1) {
            return true;
        }
        if (n.getJSNumber() === -1) {
            return true;
        }
        return false;
    }
    var one = core.getOne();
    var minus_one = core.getSuuNumber("-1");
    if (core.isEqual(one, n)) {
        return true;
    }
    else if (core.isEqual(minus_one, n)) {
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
        // removed by dead control flow
{}
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
        // removed by dead control flow
{}
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
    if (core.getCalculationMode() === "js") {
        return multiplication_js(a, b);
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
    if (core.isOne(a_) && core.isLarge(a_, "0")) {
        return b_;
    }
    if (core.isOne(b_) && core.isLarge(b_, "0")) {
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
var division_js = function (a, b) {
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
        return a_n / b_n;
    }
    catch (err) {
        return core.makeError({ message: err.message, parameter: [a, b] });
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
        if (core.getCalculationMode() === "js") {
            return division_js(a_, b_);
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
        if (core.isOne(b_) && core.isLarge(b_, "0")) {
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
core.opposite = function (n) {
    var num = core.getSuuNumber(n);
    var op = core.multiple(num, "-1");
    return op;
};
var getHalfWithFloor = function (n) {
    var num = core.getSuuNumber(n);
    var half = core.divide(num, "2");
    var res = core.floor(half);
    return res;
};
core.factorization = function (n, square) {
    var num = core.getSuuNumber(n);
    if (num.name === "Error") {
        return num;
    }
    if (!square) {
        square = false;
    }
    var array = [];
    if (core.isZero(num)) {
        return array;
    }
    if (core.isOne(num)) {
        return array;
    }
    var bool = true;
    var half = getHalfWithFloor(num);
    var one = half;
    var two = half;
    while (bool) {
        var result = core.multiple(one, two);
        if (core.isEqual(result, num)) {
            array.push.apply(array, [one, two]);
            break;
        }
        else {
            if (core.isEqual(two, "1") && core.isEqual(one, "1")) {
                break;
            }
            else if (square) {
                one = core.subtract(one, "1");
                two = one;
            }
            else if (core.isEqual(two, "1")) {
                one = core.subtract(one, "1");
                two = one;
            }
            else if (core.isEqual(one, "1")) {
                break;
            }
            else {
                one = one;
                two = core.subtract(two, "1");
            }
        }
    }
    return array;
};
core.squareRoot = function (n, approximate) {
    var num = core.getSuuNumber(n);
    if (core.isZero(num)) {
        return core.getZero();
    }
    if (core.isOne(num)) {
        return core.getOne();
    }
    var res = core.factorization(num, true);
    console.log("in squareRoot", res);
    if (res.length === 0 && approximate) {
        console.log("in squareRoot0", approximate);
        var num2 = num;
        var res_1 = null;
        while (true) {
            num2 = core.subtract(num2, "1");
            if (core.isZero(num2)) {
                break;
            }
            var res2 = core.factorization(num2, true);
            if (res2) {
                res_1 = res2;
                break;
            }
        }
    }
    return res;
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

/***/ "./measurement.ts":
/*!************************!*\
  !*** ./measurement.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var measurement = function (func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var startTime, res, e_1, endTime, lengthOfTime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    startTime = new Date().getTime();
                    console.log(args);
                    res = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 13, , 14]);
                    if (!Array.isArray(args)) return [3 /*break*/, 5];
                    if (!(func.constructor.name === "AsyncFunction")) return [3 /*break*/, 3];
                    return [4 /*yield*/, func.apply(void 0, args)];
                case 2:
                    res = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    res = func.apply(void 0, args);
                    _a.label = 4;
                case 4: return [3 /*break*/, 12];
                case 5:
                    if (!(args !== null && typeof args === "object")) return [3 /*break*/, 9];
                    if (!(func.constructor.name === "AsyncFunction")) return [3 /*break*/, 7];
                    return [4 /*yield*/, func(args)];
                case 6:
                    res = _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    res = func(args);
                    _a.label = 8;
                case 8: return [3 /*break*/, 12];
                case 9:
                    if (!(func.constructor.name === "AsyncFunction")) return [3 /*break*/, 11];
                    return [4 /*yield*/, func(args)];
                case 10:
                    res = _a.sent();
                    return [3 /*break*/, 12];
                case 11:
                    res = func(args);
                    _a.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 14];
                case 14:
                    endTime = new Date().getTime();
                    lengthOfTime = endTime - startTime;
                    return [2 /*return*/, {
                            result: res,
                            lengthOfTimeMS: lengthOfTime,
                        }];
            }
        });
    });
};
exports["default"] = measurement;


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
    if (core_1.default.isZero(n) || (core_1.default.isOne(n) && core_1.default.isLarge(n, "0"))) {
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
var measurement_1 = __webpack_require__(/*! ./measurement */ "./measurement.ts");
exports["default"] = {
    core: core_1.default,
    utils: utils_1.default,
    random: random_1.default,
    doc: doc_1.default,
    constants: constants_1.default,
    ts: true,
    measurement: measurement_1.default,
};

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDcEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztRQUNsQyxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztZQUN6RCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixxQkFBZSxLQUFLLENBQUM7Ozs7Ozs7VUNqd0NyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsNERBQTBCO0FBQzFCLCtEQUE0QjtBQUM1QixrRUFBOEI7QUFDOUIseURBQXdCO0FBQ3hCLDJFQUFtQztBQUNuQyxpRkFBd0M7QUFFeEMscUJBQWU7SUFDYixJQUFJLEVBQUUsY0FBSTtJQUNWLEtBQUssRUFBRSxlQUFLO0lBQ1osTUFBTSxFQUFFLGdCQUFNO0lBQ2QsR0FBRyxFQUFFLGFBQUc7SUFDUixTQUFTLEVBQUUsbUJBQVM7SUFDcEIsRUFBRSxFQUFFLElBQUk7SUFDUixXQUFXO0NBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUudHMiLCJ3ZWJwYWNrOi8vc3UvLi9kb2MudHMiLCJ3ZWJwYWNrOi8vc3UvLi9tZWFzdXJlbWVudC50cyIsIndlYnBhY2s6Ly9zdS8uL3JhbmRvbS50cyIsIndlYnBhY2s6Ly9zdS8uL3V0aWxzLnRzIiwid2VicGFjazovL3N1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1Ly4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJpbXBvcnQge0NvbXBhcmVPYmplY3QsIFN1dU51bWJlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuY29uc3QgY29yZTphbnkgPSB7fTtcbmNvbnN0IHNldHRpbmdzID0ge1xuICBjYWxjdWxhdGlvbl9tb2RlczogW1wic3V1XCIsIFwianNcIl0sXG4gIGNhbGN1bGF0aW9uX21vZGU6IDAsXG59O1xuXG5cbmNvcmUuY2hhbmdlQ2FsY3VsYXRpb25Nb2RlID0gZnVuY3Rpb24obW9kZTogc3RyaW5nKXtcbiAgaWYoIW1vZGUpe1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpbmRleCA9IHNldHRpbmdzLmNhbGN1bGF0aW9uX21vZGVzLmZpbmRJbmRleChtID0+IG0gPT09IG1vZGUpO1xuICBpZihpbmRleCA+PSAwKXtcbiAgICBzZXR0aW5ncy5jYWxjdWxhdGlvbl9tb2RlID0gaW5kZXg7XG4gIH1cbn07XG5cbmNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbSA9IHNldHRpbmdzLmNhbGN1bGF0aW9uX21vZGVzW3NldHRpbmdzLmNhbGN1bGF0aW9uX21vZGVdO1xuICByZXR1cm4gbTtcbn07XG5cbmNvcmUubWFrZUVycm9yID0gZnVuY3Rpb24obzoge21lc3NhZ2U6IHN0cmluZywgdmFyaWFibGU6IGFueSwgcGFyYW1ldGVyOiBhbnl9KTogRXJyb3J7XG4gIGxldCBlcnJvciA9IG5ldyBFcnJvcigpO1xuICB0cnl7XG4gICAgY29uc3QgdiA9IG8udmFyaWFibGUgPyBvLnZhcmlhYmxlLnRvU3RyaW5nKCkgOiBcIlwiO1xuICAgIGNvbnN0IHAgPSBvLnBhcmFtZXRlciA/IG8ucGFyYW1ldGVyLnRvU3RyaW5nKCkgOiBcIlwiO1xuICAgIGxldCBzdHIgPSBvLm1lc3NhZ2U7XG4gICAgaWYodil7XG4gICAgICBzdHIgPSBgJHtzdHJ9LCAke3YgPyB2IDogXCJcIn1gO1xuICAgIH1cbiAgICBpZihwKXtcbiAgICAgIHN0ciA9IGAke3N0cn0sICR7cCA/IHAgOiBcIlwifWA7XG4gICAgfVxuICAgIGVycm9yID0gbmV3IEVycm9yKHN0cik7XG4gIH1jYXRjaChlOiB1bmtub3duKXtcbiAgICBpZihlIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cbiAgfWZpbmFsbHl7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG5jb25zdCBpc051bWJlciA9IGZ1bmN0aW9uKG4pOiBCb29sZWFue1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLmlzU3V1TnVtYmVyID0gZnVuY3Rpb24obik6IEJvb2xlYW57XG4gIGlmKG4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLm1vbGROdW1BcnJheSA9IGZ1bmN0aW9uKHsgYXJyYXksIG5lZ2F0aXZlLCBkZWNpbWFsX2luZGV4IH0pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIGlmKCFhcnJheSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHsgbWVzc2FnZTogXCJBcnJheSBpcyBub3QgZXhpc3RzXCIsIHBhdGFtZXRlcjogYXJyYXl9KTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBkZWNpbWFsX2luZGV4ICE9PSBcIm51bWJlclwiIHx8IGlzTmFOKGRlY2ltYWxfaW5kZXgpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3IoeyBtZXNzYWdlOiBcImRlY2ltYWxfaW5kZXggaXMgbm90IGEgbnVtYmVyXCIsIHBhdGFtZXRlcjogZGVjaW1hbF9pbmRleH0pO1xuICB9XG4gIHRyeXtcbiAgICB3aGlsZShkZWNpbWFsX2luZGV4IDwgYXJyYXkubGVuZ3RoICYmIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdID09PSAwKXtcbiAgICAgIGFycmF5LnBvcCgpO1xuICAgIH1cbiAgICB3aGlsZShkZWNpbWFsX2luZGV4ID4gMSAmJiBhcnJheVswXSA9PT0gMCl7XG4gICAgICBhcnJheS5zaGlmdCgpO1xuICAgICAgZGVjaW1hbF9pbmRleC0tO1xuICAgIH1cblxuICAgIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgICBhcnJheS5wdXNoKDApO1xuICAgICAgZGVjaW1hbF9pbmRleCA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgbzogU3V1TnVtYmVyID0ge1xuICAgICAgYXJyYXk6IGFycmF5LFxuICAgICAgbmVnYXRpdmU6ICEhbmVnYXRpdmUsXG4gICAgICBpc19udW1fYXJyYXk6IHRydWUsXG4gICAgICBkZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4LFxuICAgICAgc3lzdGVtOiAxMCxcbiAgICAgIGdldEpTTnVtYmVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gTnVtYmVyKGNvcmUubnVtQXJyYXlUb1N0cmluZyh0aGlzKSk7XG4gICAgICB9LFxuICAgICAgZ2V0U3RyaW5nOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gY29yZS5udW1BcnJheVRvU3RyaW5nKHRoaXMpO1xuICAgICAgfSxcbiAgICB9O1xuICAgIGlmKGRlY2ltYWxfaW5kZXggPT09IDAgfHwgZGVjaW1hbF9pbmRleCA+IDApe1xuICAgICAgby5kZWNpbWFsX2luZGV4ID0gZGVjaW1hbF9pbmRleDtcbiAgICB9ZWxzZXtcbiAgICAgIG8uZGVjaW1hbF9pbmRleCA9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGU6IHVua25vd24pe1xuICAgIGlmKGUgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGUubWVzc2FnZSwgcGFyYW1ldGVyOiBhcnJheX0pO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBhcnJheX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5jb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyB1bmRlZmluZWQsIG51bGwsIG9yIGVtcHR5LlwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgfVxuXG4gIGlmKG4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gY29yZS5jbG9uZShuKTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBuID09PSBcIm9iamVjdFwiKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIG9iamVjdC5cIiwgcGFyYW1ldGVyOiBufSk7XG4gIH1cblxuICBsZXQgc3RyOiBzdHJpbmcgPSBTdHJpbmcobik7XG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICB3aGlsZShzdHIgJiYgc3RyWzBdLm1hdGNoKC9eLS8pKXtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXi0vLCBcIlwiKTtcbiAgICBuZWdhdGl2ZSA9ICFuZWdhdGl2ZTtcbiAgfVxuXG4gIGxldCBkZWNfaW5kZXg7XG4gIGxldCByZXMgPSBzdHIubWF0Y2goL1xcLi9nKTtcbiAgaWYocmVzICYmIHJlcy5sZW5ndGggPiAxKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiMiBvciBtb3JlIGRlY2ltYWwgcG9pbnRzXCIsIHBhcmFtZXRlcjogbn0pO1xuICB9XG4gIGlmKHJlcyAmJiByZXMubGVuZ3RoID09PSAxKXtcbiAgICBjb25zdCByZXMxID0gc3RyLm1hdGNoKC9cXC4vKTtcbiAgICBjb25zdCBmaXJzdF9pbmRleCA9IHJlczE/LmluZGV4XG4gICAgZGVjX2luZGV4ID0gZmlyc3RfaW5kZXhcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFwuLywgXCJcIik7XG4gIH1lbHNle1xuICAgIGRlY19pbmRleCA9IHN0ci5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBhcnI6IG51bWJlcltdID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIWlzTnVtYmVyKG51bSkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIsIHBhcmFtZXRlcjogbnVtfSk7XG4gICAgfVxuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoeyBhcnJheTogYXJyLCBuZWdhdGl2ZTogbmVnYXRpdmUsIGRlY2ltYWxfaW5kZXg6IGRlY19pbmRleH0pO1xuXG59O1xuXG5jb3JlLm51bUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbihuKTogc3RyaW5nIHwgRXJyb3Ige1xuICBpZighbi5pc19udW1fYXJyYXkgfHwgIW4uYXJyYXkgfHwgIW4uZGVjaW1hbF9pbmRleCl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0IGFyciA9IFsuLi5uLmFycmF5XTtcbiAgICBhcnIuc3BsaWNlKG4uZGVjaW1hbF9pbmRleCwgMCwgXCIuXCIpO1xuICAgIGxldCBzdHIgPSBhcnIuam9pbihcIlwiKTtcbiAgICBpZihuLm5lZ2F0aXZlKXtcbiAgICAgIHN0ciA9IGAtJHtzdHJ9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBufSk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG59KTtcbiAgICB9XG4gIH1cblxufTtcblxuY29yZS5jb21wYXJlID0gZnVuY3Rpb24oYSwgYik6IENvbXBhcmVPYmplY3QgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBpZighYSAmJiBhICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9ZWxzZSBpZighYiAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IG86IENvbXBhcmVPYmplY3QgPSB7XG4gICAgICBzbWFsbDogbnVsbCxcbiAgICAgIGxhcmdlOiBudWxsLFxuICAgICAgZXF1YWw6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmKGNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlKCkgPT09IFwianNcIikge1xuICAgICAgY29uc3QgYV9udW0gPSBhLmdldEpTTnVtYmVyKCk7XG4gICAgICBjb25zdCBiX251bSA9IGIuZ2V0SlNOdW1iZXIoKTtcbiAgICAgIGlmKGFfbnVtID09PSBiX251bSl7XG4gICAgICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1lbHNlIGlmKGFfbnVtIDwgYl9udW0pe1xuICAgICAgICBvLnNtYWxsID0gYTtcbiAgICAgICAgby5sYXJnZSA9IGI7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfWVsc2UgaWYgKGFfbnVtID4gYl9udW0pe1xuICAgICAgICBvLnNtYWxsID0gYjtcbiAgICAgICAgby5sYXJnZSA9IGE7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgbGV0IGFfID0gYTtcbiAgICBsZXQgYl8gPSBiO1xuXG4gICAgaWYoIWFfLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGFfKTtcbiAgICAgIGlmKCFhXyl7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighYl8uaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYl8pO1xuICAgICAgaWYoIWJfKXtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnJheTogbnVtYmVyW10gPSBhXy5hcnJheTtcbiAgICBjb25zdCBiX2FycmF5OiBudW1iZXJbXSA9IGJfLmFycmF5O1xuXG4gICAgY29uc3QgYV9sZW46IG51bWJlciA9IGFfYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGJfbGVuOiBudW1iZXIgPSBiX2FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBhX3N0cjogc3RyaW5nID0gYV9hcnJheS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGJfc3RyOiBzdHJpbmcgPSBiX2FycmF5LmpvaW4oXCJcIik7XG5cbiAgICBjb25zdCBhX2ludF9sZW4gPSBhXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGJfaW50X2xlbiA9IGJfLmRlY2ltYWxfaW5kZXg7XG5cbiAgICBjb25zdCBhX2RlY19sZW4gPSBhX2xlbiAtIGFfaW50X2xlbjtcbiAgICBjb25zdCBiX2RlY19sZW4gPSBiX2xlbiAtIGJfaW50X2xlbjtcblxuICAgIGlmKGFfbGVuID09PSAxICYmIGFfc3RyID09PSBcIjBcIiAmJiBiX2xlbiA9PT0gMSAmJiBiX3N0ciA9PT0gXCIwXCIpe1xuICAgICAgby5lcXVhbCA9IHRydWU7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoIWFfLm5lZ2F0aXZlICYmIGJfLm5lZ2F0aXZlKXtcbiAgICAgIG8uc21hbGwgPSBiXztcbiAgICAgIG8ubGFyZ2UgPSBhXztcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICBpZihhXy5uZWdhdGl2ZSAmJiAhYl8ubmVnYXRpdmUpe1xuICAgICAgby5zbWFsbCA9IGFfO1xuICAgICAgby5sYXJnZSA9IGJfO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgY29uc3QgbmVnYXRpdmUgPSBhXy5uZWdhdGl2ZTtcblxuICAgIGNvbnN0IG9fYV9iID0ge1xuICAgICAgbGFyZ2U6IG5lZ2F0aXZlID8gYl8gOiBhXyxcbiAgICAgIHNtYWxsOiBuZWdhdGl2ZSA/IGFfIDogYl8sXG4gICAgICBlcXVhbDogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBvX2JfYSA9IHtcbiAgICAgIGxhcmdlOiBuZWdhdGl2ZSA/IGFfIDogYl8sXG4gICAgICBzbWFsbDogbmVnYXRpdmUgPyBiXyA6IGFfLFxuICAgICAgZXF1YWw6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmKGFfaW50X2xlbiA+IGJfaW50X2xlbil7XG4gICAgICByZXR1cm4gb19hX2I7XG4gICAgfVxuICAgIFxuICAgIGlmKGFfaW50X2xlbiA8IGJfaW50X2xlbil7XG4gICAgICByZXR1cm4gb19iX2E7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFfaW50X2xlbjsgaSsrKXtcbiAgICAgIGlmKGFfYXJyYXlbaV0gPiBiX2FycmF5W2ldKXtcbiAgICAgICAgcmV0dXJuIG9fYV9iO1xuICAgICAgfVxuICAgICAgaWYoYV9hcnJheVtpXSA8IGJfYXJyYXlbaV0pe1xuICAgICAgICByZXR1cm4gb19iX2E7ICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWNfbGVuID0gYV9kZWNfbGVuID4gYl9kZWNfbGVuID8gYV9kZWNfbGVuIDogYl9kZWNfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkZWNfbGVuOyBpKyspe1xuICAgICAgY29uc3QgYWEgPSBhX2FycmF5W2FfaW50X2xlbiArIGldID8gYV9hcnJheVthX2ludF9sZW4gKyBpXSA6IDA7XG4gICAgICBjb25zdCBiYiA9IGJfYXJyYXlbYl9pbnRfbGVuICsgaV0gPyBiX2FycmF5W2JfaW50X2xlbiArIGldIDogMDtcbiAgICAgIGlmKGFhID4gYmIpe1xuICAgICAgICByZXR1cm4gb19hX2I7XG4gICAgICB9XG4gICAgICBpZihhYSA8IGJiKXtcbiAgICAgICAgcmV0dXJuIG9fYl9hO1xuICAgICAgfVxuICAgIH1cblxuICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgIHJldHVybiBvO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuXG5cbn07XG5cbmNvcmUuZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb3JlLmNvbXBhcmUoYSwgYikubGFyZ2U7XG59O1xuXG5jb3JlLmdldFNtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5jb21wYXJlKGEsIGIpLnNtYWxsO1xufTtcblxuY29yZS5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICBjb25zdCByZXMgPSBjb3JlLmNvbXBhcmUoYSwgYik7XG4gIGlmKHJlcy5lcXVhbCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29yZS5pc1NtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5pc0VxdWFsKGNvcmUuZ2V0U21hbGwoYSwgYiksIGEpO1xufTtcblxuY29yZS5pc0xhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5pc0VxdWFsKGNvcmUuZ2V0TGFyZ2UoYSwgYiksIGEpO1xufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKTogYm9vbGVhbiB7XG4gIGlmKCFuKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoIW4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZihjb3JlLmdldENhbGN1bGF0aW9uTW9kZSgpID09PSBcImpzXCIpe1xuICAgIGlmKG4uZ2V0SlNOdW1iZXIoKSA9PT0gMCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgemVybyA9IGNvcmUuZ2V0WmVybygpO1xuICByZXR1cm4gY29yZS5pc0VxdWFsKHplcm8sIG4pO1xufTtcblxuY29yZS5pc09uZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFuIHtcbiAgaWYoIW4pe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKGNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlKCkgPT09IFwianNcIil7XG4gICAgaWYobi5nZXRKU051bWJlcigpID09PSAxKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZihuLmdldEpTTnVtYmVyKCkgPT09IC0xKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBvbmUgPSBjb3JlLmdldE9uZSgpO1xuICBjb25zdCBtaW51c19vbmUgPSBjb3JlLmdldFN1dU51bWJlcihcIi0xXCIpXG4gIGlmKGNvcmUuaXNFcXVhbChvbmUsIG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2UgaWYoY29yZS5pc0VxdWFsKG1pbnVzX29uZSwgbikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvcmUuZ2V0WmVybyA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlciB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjBcIik7XG59O1xuXG5jb3JlLmdldE9uZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlciB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjFcIik7XG59O1xuXG5jb3JlLmZpeENhcnJ5ID0gZnVuY3Rpb24oYXJyOiBudW1iZXJbXSwgbWludXM6IGJvb2xlYW4pOiB7bmV3X2FycmF5OiBudW1iZXJbXSwgbWludXM6IGJvb2xlYW59IHtcbiAgdHJ5IHtcbiAgICBsZXQgbWludXNfID0gbWludXM7XG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pe1xuICAgICAgY29uc3QgZWxtID0gYXJyW2ldO1xuICAgICAgaWYoZWxtIDwgMCl7XG4gICAgICAgIG1pbnVzXyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtID09PSAwKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKG1pbnVzXyl7XG4gICAgICBjb25zdCBjYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgICAgIGFyci5mb3JFYWNoKCAoZWxtOiBudW1iZXIpID0+IHtcbiAgICAgICAgY2FjaGUucHVzaCgtZWxtKTtcbiAgICAgIH0pO1xuICAgICAgYXJyID0gY2FjaGU7XG4gICAgfVxuICAgIGNvbnN0IG5ld19hcnI6IG51bWJlcltdID0gW107XG4gICAgbGV0IGNhcnJ5ID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCB2YWwgPSBOdW1iZXIoYXJyW2ldICsgY2FycnkpO1xuICAgICAgaWYodmFsID4gOSl7XG4gICAgICAgIGNvbnN0IGFycjEgPSBTdHJpbmcodmFsKS5zcGxpdChcIlwiKTtcbiAgICAgICAgdmFsID0gTnVtYmVyKGFycjFbYXJyMS5sZW5ndGggLSAxXSk7XG4gICAgICAgIGNvbnN0IGFycjIgPSBhcnIxLnNsaWNlKDAsIGFycjEubGVuZ3RoIC0gMSk7XG4gICAgICAgIGNhcnJ5ID0gTnVtYmVyKGFycjIuam9pbihcIlwiKSk7XG4gICAgICB9ZWxzZSBpZiggdmFsID49IDAgJiYgdmFsIDw9IDkpe1xuICAgICAgICBjYXJyeSA9IDA7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFsID0gMTAgKyB2YWw7XG4gICAgICAgIGNhcnJ5ID0gLTE7XG5cbiAgICAgIH1cbiAgICAgIG5ld19hcnIucHVzaCh2YWwpO1xuICAgIH1cbiAgICBpZihjYXJyeSAhPT0gMCl7XG4gICAgICBuZXdfYXJyLnB1c2goY2FycnkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZXdfYXJyYXk6IG5ld19hcnIsXG4gICAgICBtaW51czogbWludXNfXG4gICAgfTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyLCBtaW51c119KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYXJyLCBtaW51c119KTtcbiAgICB9XG4gIH1cblxuXG59O1xuXG5jb3JlLmNsb25lID0gZnVuY3Rpb24objogYW55KTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICB0cnl7XG4gICAgaWYoIW4pe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogbn0pO1xuICAgIH1cbiAgICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBub3QgY29tcGF0aWJsZVwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgICB9XG4gICAgY29uc3QgbyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogWy4uLm4uYXJyYXldLFxuICAgIH07XG4gICAgcmV0dXJuIG87XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW25dfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW25dfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhZGRfYW5kX3N1YnRyYWN0X2pzID0gZnVuY3Rpb24oYSwgYiwgbW9kZSkge1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG11c3QgYmUgYSBOdW1iZXIgb3IgYSBTdHJpbmcuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxuICBsZXQgcGx1cztcbiAgaWYoIW1vZGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIG1vZGUgaXMgcmVxdWlyZWRcIiwgcGFyYW1ldGVyOiBbYSwgYiwgbW9kZV19KTs7XG4gIH1lbHNlIGlmKG1vZGUgPT09IFwiK1wiKXtcbiAgICBwbHVzID0gdHJ1ZTtcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCItXCIpe1xuICAgIHBsdXMgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIm1vZGUgbXVzdCBiZSAnKycgb3IgJy0nLlwiLCBwYXJhbWV0ZXI6IG1vZGV9KTtcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhX3MgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcoYSk7XG4gICAgY29uc3QgYl9zID0gY29yZS5udW1BcnJheVRvU3RyaW5nKGIpO1xuICBcbiAgICBjb25zdCBhX24gPSBOdW1iZXIoYV9zKTtcbiAgICBjb25zdCBiX24gPSBOdW1iZXIoYl9zKTtcblxuICAgIGlmKHBsdXMpe1xuICAgICAgcmV0dXJuIGFfbiArIGJfbjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBhX24gLSBiX247XG4gICAgfSAgXG4gIH1jYXRjaChlcnI6IEVycm9yIHwgYW55KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiLCBtb2RlXX0pO1xuICB9XG5cbn07XG5cblxuY29yZS5hZGRfYW5kX3N1YnRyYWN0ID0gZnVuY3Rpb24oYSwgYiwgbW9kZSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWEgfHwgIWIpe1xuICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbXVzdCBiZSBhIE51bWJlciBvciBhIFN0cmluZy5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmKGNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlKCkgPT09IFwianNcIil7XG4gICAgcmV0dXJuIGFkZF9hbmRfc3VidHJhY3RfanMoYSwgYiwgbW9kZSk7XG4gIH1cblxuICBsZXQgcGx1cztcbiAgaWYoIW1vZGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIG1vZGUgaXMgcmVxdWlyZWRcIiwgcGFyYW1ldGVyOiBbYSwgYiwgbW9kZV19KTs7XG4gIH1lbHNlIGlmKG1vZGUgPT09IFwiK1wiKXtcbiAgICBwbHVzID0gdHJ1ZTtcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCItXCIpe1xuICAgIHBsdXMgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIm1vZGUgbXVzdCBiZSAnKycgb3IgJy0nLlwiLCBwYXJhbWV0ZXI6IG1vZGV9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbGV0IGFfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgICBsZXQgYl86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgICB9ZWxzZXtcbiAgICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgICB9XG4gICAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgIH1lbHNle1xuICAgICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyID0gYV8uYXJyYXk7XG4gICAgY29uc3QgYl9hcnIgPSBiXy5hcnJheTtcblxuICAgIGNvbnN0IGFfaXNfemVybzogYm9vbGVhbiA9IGNvcmUuaXNaZXJvKGFfKTtcbiAgICBjb25zdCBiX2lzX3plcm86IGJvb2xlYW4gPSBjb3JlLmlzWmVybyhiXyk7XG5cbiAgICBpZihhX2lzX3plcm8gJiYgYl9pc196ZXJvKXtcbiAgICAgIHJldHVybiBhXztcbiAgICB9ZWxzZSBpZihhX2lzX3plcm8pe1xuICAgICAgaWYoIXBsdXMpe1xuICAgICAgICBiXy5uZWdhdGl2ZSA9ICFiXy5uZWdhdGl2ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiXztcbiAgICB9ZWxzZSBpZihiX2lzX3plcm8pe1xuICAgICAgcmV0dXJuIGFfO1xuICAgIH1cblxuICAgIGNvbnN0IGFfZGVjX2xlbmd0aDogbnVtYmVyID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2RlY19sZW5ndGg6IG51bWJlciA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG5cbiAgICBjb25zdCBkZWNfZ2FwOiBudW1iZXIgPSBhX2RlY19sZW5ndGggLSBiX2RlY19sZW5ndGg7XG5cbiAgICBpZihkZWNfZ2FwID4gMCl7XG4gICAgICBiX2Fyci5wdXNoKC4uLkFycmF5KGRlY19nYXApLmZpbGwoMCkpO1xuICAgIH1lbHNlIGlmKGRlY19nYXAgPCAwKXtcbiAgICAgIGFfYXJyLnB1c2goLi4uQXJyYXkoTWF0aC5hYnMoZGVjX2dhcCkpLmZpbGwoMCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYiwgcGx1c30pOiB7IG5ld19hcnJheTogbnVtYmVyW10sIG1pbnVzOiBib29sZWFuIH0ge1xuICAgICAgY29uc3QgYXJyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IGxlbiA9IGEuYXJyYXkubGVuZ3RoO1xuICAgICAgaWYoYS5hcnJheS5sZW5ndGggPCBiLmFycmF5Lmxlbmd0aCl7XG4gICAgICAgIGxlbiA9IGIuYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgY29uc3QgYXJyX2E6IG51bWJlcltdID0gYS5hcnJheTtcbiAgICAgIGNvbnN0IGFycl9iOiBudW1iZXJbXSA9IGIuYXJyYXk7XG4gICAgICBjb25zdCBhX29uZTogbnVtYmVyID0gYS5uZWdhdGl2ZSA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGJfb25lOiBudW1iZXIgPSBiLm5lZ2F0aXZlID8gLTEgOiAxO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgYWEgPSBhcnJfYVtpXSA/IGFycl9hW2ldICogYV9vbmUgOiAwO1xuICAgICAgICBjb25zdCBiYiA9IGFycl9iW2ldID8gYXJyX2JbaV0gKiBiX29uZSA6IDA7XG4gICAgICAgIGxldCByZXMgPSBwbHVzID8gYWEgKyBiYiA6IGFhIC0gYmI7XG4gICAgICAgIGFyci5wdXNoKHJlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29yZS5maXhDYXJyeShhcnIpO1xuICAgIH07XG5cbiAgICBjb25zdCB7IG5ld19hcnJheSwgbWludXMgfSA9IGNhbGMoe1xuICAgICAgYToge1xuICAgICAgICBhcnJheTogWy4uLmFfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBhXy5uZWdhdGl2ZSxcbiAgICAgIH0sXG4gICAgICBiOiB7XG4gICAgICAgIGFycmF5OiBbLi4uYl9hcnJdLnJldmVyc2UoKSxcbiAgICAgICAgbmVnYXRpdmU6IGJfLm5lZ2F0aXZlXG4gICAgICB9LFxuICAgICAgcGx1czogcGx1c1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVjX2xlbmd0aCA9IGFfZGVjX2xlbmd0aCA+PSBiX2RlY19sZW5ndGggPyBhX2RlY19sZW5ndGggOiBiX2RlY19sZW5ndGg7XG4gICAgY29uc3QgbmV3X2ludF9sZW5ndGggPSBuZXdfYXJyYXkubGVuZ3RoIC0gZGVjX2xlbmd0aDtcblxuICAgIGNvbnN0IG5ld19kZWNpbWFsX2luZGV4ID0gbmV3X2ludF9sZW5ndGg7XG5cbiAgICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLnJldmVyc2UoKSxcbiAgICAgIG5lZ2F0aXZlOiBtaW51cyA/IHRydWUgOiBmYWxzZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IG5ld19kZWNpbWFsX2luZGV4XG4gICAgfSk7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbn07XG5cbmNvcmUuYWRkID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgcmV0dXJuIGNvcmUuYWRkX2FuZF9zdWJ0cmFjdChhLCBiLCBcIitcIik7XG59O1xuXG5jb3JlLnN1YnRyYWN0ID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgcmV0dXJuIGNvcmUuYWRkX2FuZF9zdWJ0cmFjdChhLCBiLCBcIi1cIik7XG59O1xuXG5cbmNvbnN0IG11bHRpcGxpY2F0aW9uX2pzID0gZnVuY3Rpb24oYSwgYikge1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG11c3QgYmUgYSBOdW1iZXIgb3IgYSBTdHJpbmcuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxuICB0cnl7XG4gICAgY29uc3QgYV9zID0gY29yZS5udW1BcnJheVRvU3RyaW5nKGEpO1xuICAgIGNvbnN0IGJfcyA9IGNvcmUubnVtQXJyYXlUb1N0cmluZyhiKTtcbiAgXG4gICAgY29uc3QgYV9uID0gTnVtYmVyKGFfcyk7XG4gICAgY29uc3QgYl9uID0gTnVtYmVyKGJfcyk7XG4gIFxuICAgIHJldHVybiBhX24gKiBiX247XG4gIH1jYXRjaChlcnI6IEVycm9yIHwgYW55KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICB9XG5cbn07XG5cbmNvcmUubXVsdGlwbGljYXRpb24gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxuICBpZihjb3JlLmdldENhbGN1bGF0aW9uTW9kZSgpID09PSBcImpzXCIpe1xuICAgIHJldHVybiBtdWx0aXBsaWNhdGlvbl9qcyhhLCBiKTtcbiAgfVxuXG4gIGxldCBhXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gIH1lbHNle1xuICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgfVxuICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICB9ZWxzZXtcbiAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gIH1cblxuICBjb25zdCBhX2FyciA9IGFfLmFycmF5O1xuICBjb25zdCBiX2FyciA9IGJfLmFycmF5O1xuXG4gIGlmKGNvcmUuaXNaZXJvKGFfKSB8fCBjb3JlLmlzWmVybyhiXykpe1xuICAgIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjBcIik7XG4gIH1cblxuICBpZihjb3JlLmlzT25lKGFfKSAmJiBjb3JlLmlzTGFyZ2UoYV8sIFwiMFwiKSl7XG4gICAgcmV0dXJuIGJfO1xuICB9XG5cbiAgaWYoY29yZS5pc09uZShiXykgJiYgY29yZS5pc0xhcmdlKGJfLCBcIjBcIikpe1xuICAgIHJldHVybiBhXztcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhX25lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG4gICAgY29uc3QgYl9uZWdhdGl2ZSA9IGJfLm5lZ2F0aXZlO1xuICAgIGxldCBuZWdhdGl2ZTtcbiAgICBpZihhX25lZ2F0aXZlICYmIGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9ZWxzZSBpZihhX25lZ2F0aXZlIHx8IGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBhX2RlY19sZW5ndGggPSBhXy5hcnJheS5sZW5ndGggLSBhXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGJfZGVjX2xlbmd0aCA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgZGVjX2xlbmd0aCA9IGFfZGVjX2xlbmd0aCArIGJfZGVjX2xlbmd0aDtcblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYn0pe1xuICAgICAgY29uc3QgYXJyYXk6IG51bWJlcltdID0gW107XG4gICAgICBjb25zdCBhcnJfYSA9IGEuYXJyYXk7XG4gICAgICBjb25zdCBhcnJfYiA9IGIuYXJyYXk7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgIGFyci5maWxsKDAsIDAsIGkpO1xuXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgY29uc3QgYmIgPSBhcnJfYltqXSA/IGFycl9iW2pdIDogMDtcbiAgICAgICAgICBsZXQgcmVzID0gYWEgKiBiYjtcbiAgICAgICAgICBcbiAgICAgICAgICBhcnIucHVzaChyZXMpO1xuXG4gICAgICAgICAgY29uc3QgdGd0X2luZGV4ID0gaSArIGo7XG4gICAgICAgICAgbGV0IHRndDogbnVtYmVyID0gYXJyYXlbdGd0X2luZGV4XTtcbiAgICAgICAgICBpZighdGd0KXtcbiAgICAgICAgICAgIHRndCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld190Z3QgPSB0Z3QgKyByZXM7XG4gICAgICAgICAgYXJyYXlbdGd0X2luZGV4XSA9IG5ld190Z3Q7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3JlLmZpeENhcnJ5KGFycmF5KTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXkgfSA9IGNhbGMoe1xuICAgICAgYToge1xuICAgICAgICBhcnJheTogWy4uLmFfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBhXy5uZWdhdGl2ZSxcbiAgICAgIH0sXG4gICAgICBiOiB7XG4gICAgICAgIGFycmF5OiBbLi4uYl9hcnJdLnJldmVyc2UoKSxcbiAgICAgICAgbmVnYXRpdmU6IGJfLm5lZ2F0aXZlXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3X2RlY2ltYWxfaW5kZXggPSBuZXdfYXJyYXkubGVuZ3RoIC0gZGVjX2xlbmd0aDtcblxuICAgIHJldHVybiBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLm5ld19hcnJheV0ucmV2ZXJzZSgpLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogbmV3X2RlY2ltYWxfaW5kZXhcbiAgICB9KTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxufTtcblxuY29yZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLm11bHRpcGxpY2F0aW9uKGEsIGIpO1xufTtcblxuY29yZS5nZXREZWNpbWFsID0gZnVuY3Rpb24obik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gICAgbGV0IHN0ciA9IFwiMC5cIjtcbiAgICBjb25zdCBsZW4gPSBuXy5hcnJheS5sZW5ndGg7XG4gICAgaWYobGVuID4gMCl7XG4gICAgICBmb3IobGV0IGkgPSBuXy5kZWNpbWFsX2luZGV4OyBpIDwgbGVuOyBpKyspe1xuICAgICAgICBjb25zdCBzID0gU3RyaW5nKG5fLmFycmF5W2ldKTtcbiAgICAgICAgc3RyID0gc3RyICsgcztcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHN0ciA9IHN0ciArIFwiMFwiO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChzdHIpO1xuICAgIHJldHVybiBudW07XG4gIH1jYXRjaChlcnIpe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbn0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG59KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRpdmlzaW9uX2pzID0gZnVuY3Rpb24oYSwgYikge1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG11c3QgYmUgYSBOdW1iZXIgb3IgYSBTdHJpbmcuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxuICB0cnl7XG4gICAgY29uc3QgYV9zID0gY29yZS5udW1BcnJheVRvU3RyaW5nKGEpO1xuICAgIGNvbnN0IGJfcyA9IGNvcmUubnVtQXJyYXlUb1N0cmluZyhiKTtcbiAgXG4gICAgY29uc3QgYV9uID0gTnVtYmVyKGFfcyk7XG4gICAgY29uc3QgYl9uID0gTnVtYmVyKGJfcyk7XG4gXG4gICAgcmV0dXJuIGFfbiAvIGJfbjtcbiAgfWNhdGNoKGVycjogRXJyb3IgfCBhbnkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gIH1cblxufTtcblxuXG5cbmNvcmUuZGl2aXNpb24gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3IgfCBzdHJpbmcge1xuXG4gIHRyeSB7XG4gICAgaWYoIWEgfHwgIWIpe1xuICAgICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYV86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgaWYoY29yZS5nZXRDYWxjdWxhdGlvbk1vZGUoKSA9PT0gXCJqc1wiKXtcbiAgICAgIHJldHVybiBkaXZpc2lvbl9qcyhhXywgYl8pO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgICBpZihjb3JlLmlzTGFyZ2UoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIkluZmluaXR5XCI7XG4gICAgICB9ZWxzZSBpZihjb3JlLmlzU21hbGwoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIk5lZ2F0aXZlIEluZmluaXR5XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJOb3QgYSBOdW1iZXJcIjtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhhXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc09uZShiXykgJiYgY29yZS5pc0xhcmdlKGJfLCBcIjBcIikpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYV8sXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNFcXVhbChhXywgYl8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0T25lKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9uZWdhdGl2ZSA9IGFfLm5lZ2F0aXZlO1xuICAgIGNvbnN0IGJfbmVnYXRpdmUgPSBiXy5uZWdhdGl2ZTtcblxuICAgIGlmKGFfLm5lZ2F0aXZlKXtcbiAgICAgIGFfLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoYl8ubmVnYXRpdmUpe1xuICAgICAgYl8ubmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV9uZWdhdGl2ZSAmJiBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfWVsc2UgaWYoYV9uZWdhdGl2ZSB8fCBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKHthLCBiLCBtYXh9KXtcbiAgICAgIGNvbnN0IHJlc3VsdF9hcnI6IFN1dU51bWJlcltdID0gW107XG4gICAgICBsZXQgcmVtYWluID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICBjb25zdCBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgICBjb25zdCBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgICBsZXQgZGVjaW1hbF9pbmRleCA9IGEuZGVjaW1hbF9pbmRleDtcbiAgICAgIGxldCBkZWNpbWFsX2luZGV4X3JlbWFpbiA9IGRlY2ltYWxfaW5kZXg7XG5cbiAgICAgIGxldCBhX2ludCA9IGNvcmUuY2xvbmUoYV8pO1xuICAgICAgYV9pbnQuZGVjaW1hbF9pbmRleCA9IGFfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCBhX3plcm9fbGVuZ3RoID0gMDtcbiAgICAgIGNvbnN0IGFfemVyb19yZXMgPSBhXy5hcnJheS5qb2luKFwiXCIpLm1hdGNoKC9eMCsvKTtcbiAgICAgIGlmKGFfemVyb19yZXMgJiYgYV96ZXJvX3Jlc1swXSl7XG4gICAgICAgIGFfemVyb19sZW5ndGggPSBhX3plcm9fcmVzWzBdLmxlbmd0aDtcbiAgICAgICAgYV9pbnQgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhX2ludC5hcnJheS5zbGljZShhX3plcm9fbGVuZ3RoLCBhX2ludC5hcnJheS5sZW5ndGgpLmpvaW4oXCJcIikpO1xuICAgICAgfVxuXG4gICAgICBsZXQgYl9pbnQgPSBjb3JlLmNsb25lKGJfKTtcbiAgICAgIGJfaW50LmRlY2ltYWxfaW5kZXggPSBiX2ludC5hcnJheS5sZW5ndGg7XG4gICAgICBsZXQgYl96ZXJvX2xlbmd0aCA9IDA7XG4gICAgICBjb25zdCBiX3plcm9fcmVzID0gYl9pbnQuYXJyYXkuam9pbihcIlwiKS5tYXRjaCgvXjArLyk7XG4gICAgICBpZihiX3plcm9fcmVzICYmIGJfemVyb19yZXNbMF0pe1xuICAgICAgICBiX3plcm9fbGVuZ3RoID0gYl96ZXJvX3Jlc1swXS5sZW5ndGg7XG4gICAgICAgIGJfaW50ID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYl9pbnQuYXJyYXkuc2xpY2UoYl96ZXJvX2xlbmd0aCwgYl9pbnQuYXJyYXkubGVuZ3RoKS5qb2luKFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgemVyb19nYXAgPSBhX3plcm9fbGVuZ3RoIC0gYl96ZXJvX2xlbmd0aDtcbiAgICAgIGNvbnN0IGFfYXJyYXkgPSBbLi4uYV9pbnQuYXJyYXldO1xuICAgICAgY29uc3QgYV9kZWNpbWFsX2xlbmd0aCA9IGFfLmFycmF5Lmxlbmd0aCAtIGFfLmRlY2ltYWxfaW5kZXg7XG4gICAgICBjb25zdCBiX2RlY2ltYWxfbGVuZ3RoID0gYl8uYXJyYXkubGVuZ3RoIC0gYl8uZGVjaW1hbF9pbmRleDtcbiAgICAgIGNvbnN0IGRlY2ltYWxfZ2FwID0gYV9kZWNpbWFsX2xlbmd0aCAtIGJfZGVjaW1hbF9sZW5ndGg7XG5cbiAgICAgIGNvbnN0IHRpbWVzID0gTnVtYmVyKGNvcmUuYWRkKGFfaW50LmFycmF5Lmxlbmd0aCwgbWF4KS5hcnJheS5qb2luKFwiXCIpKTtcblxuICAgICAgY29uc3QgYV9sZW4gPSBhX2ludC5hcnJheS5sZW5ndGg7XG4gICAgICBsZXQgcmVtYWluX2lzX2RlY2ltYWwgPSBmYWxzZTtcbiAgICAgIGxldCByZW1haW5fYXJyID0gWzBdO1xuXG4gICAgICBsZXQgZGVjaW1hbF9jb3VudCA9IDA7XG4gICAgICBsZXQgcmVtYWluX2FuZF9hX2xlbl9nYXAgPSAwO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbWVzOyBpKyspe1xuICAgICAgICBsZXQgaXNfbGVzcyA9IHRydWU7XG4gICAgICAgIGxldCBjb3VudCA9IGNvcmUuZ2V0WmVybygpO1xuICAgICAgICBjb25zdCByZW1haW4xID0gY29yZS5tdWx0aXBsaWNhdGlvbihyZW1haW4sIFwiMTBcIik7XG4gICAgICAgIGNvbnN0IHJlbWFpbjIgPSBTdHJpbmcoYV9hcnJheS5zbGljZShpLCBpICsgMSkubGVuZ3RoID09PSAxID8gYV9hcnJheS5zbGljZShpLCBpICsgMSlbMF0gOiBcIjBcIik7XG4gICAgICAgIHJlbWFpbiA9IGNvcmUuYWRkKHJlbWFpbjEsIHJlbWFpbjIpO1xuXG4gICAgICAgIHJlbWFpbl9hbmRfYV9sZW5fZ2FwID0gcmVtYWluLmFycmF5Lmxlbmd0aCAtIGFfbGVuO1xuICAgICAgICBsZXQgcHJvZHVjdCA9IGNvcmUuZ2V0WmVybygpO1xuICAgICAgICBpZihpID09PSBhX2xlbil7XG4gICAgICAgICAgZGVjaW1hbF9pbmRleCA9IGk7XG4gICAgICAgICAgaWYoY29yZS5pc1plcm8ocmVtYWluKSl7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZW1haW5faXNfZGVjaW1hbCA9IHRydWU7XG4gICAgICAgICAgICBkZWNpbWFsX2NvdW50ID0gZGVjaW1hbF9jb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoaSA+IGFfbGVuKXtcbiAgICAgICAgICBkZWNpbWFsX2NvdW50ID0gZGVjaW1hbF9jb3VudCsrO1xuICAgICAgICAgIGlmKGNvcmUuaXNaZXJvKHJlbWFpbikpe1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4X2NvdW50ID0gbWF4O1xuICAgICAgICB3aGlsZShpc19sZXNzKXtcbiAgICAgICAgICBjb3VudCA9IGNvcmUuYWRkKGNvdW50LCBcIjFcIik7XG4gICAgICAgICAgaWYoY29yZS5pc0xhcmdlKGNvdW50LCBtYXhfY291bnQpKXtcbiAgICAgICAgICAgIGlzX2xlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmVfcHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgcHJvZHVjdCA9IGNvcmUubXVsdGlwbGljYXRpb24oYl9pbnQsIGNvdW50KTtcblxuICAgICAgICAgIGlmKGNvcmUuaXNFcXVhbChyZW1haW4sIHByb2R1Y3QpKXtcbiAgICAgICAgICAgIGlzX2xlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50O1xuICAgICAgICAgICAgcmVzdWx0X2Fyci5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW4gPSBjb3JlLnN1YnRyYWN0KHJlbWFpbiwgcHJvZHVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoY29yZS5pc0xhcmdlKHByb2R1Y3QsIHJlbWFpbikpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY29yZS5zdWJ0cmFjdChjb3VudCwgXCIxXCIpO1xuICAgICAgICAgICAgcmVzdWx0X2Fyci5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW4gPSBjb3JlLnN1YnRyYWN0KHJlbWFpbiwgcHJlX3Byb2R1Y3QpO1xuXG4gICAgICAgICAgICBpZihyZW1haW5faXNfZGVjaW1hbCl7XG4gICAgICAgICAgICAgIHJlbWFpbl9hcnIucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW1haW5fYXJyLnB1c2goLi4ucmVtYWluLmFycmF5KTtcbiAgICAgIGNvbnN0IG5ld19hcnIgPSByZXN1bHRfYXJyLmZsYXRNYXAoZSA9PiBlLmFycmF5KTtcblxuICAgICAgaWYoemVyb19nYXAgPiAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHplcm9fZ2FwOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIudW5zaGlmdCgwKTtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoZGVjaW1hbF9nYXAgPCAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IE1hdGguYWJzKGRlY2ltYWxfZ2FwKTsgaSsrKXtcbiAgICAgICAgICBuZXdfYXJyLnB1c2goMCk7XG4gICAgICAgICAgZGVjaW1hbF9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihkZWNpbWFsX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5hYnMoZGVjaW1hbF9nYXApOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihyZW1haW5fYW5kX2FfbGVuX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVtYWluX2FuZF9hX2xlbl9nYXA7IGkrKyl7XG4gICAgICAgICAgY29uc3QgdGd0ID0gcmVtYWluX2FyclswXTtcbiAgICAgICAgICBpZih0Z3QgPT09IDApe1xuICAgICAgICAgICAgcmVtYWluX2Fyci5zaGlmdCgpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGVjaW1hbF9pbmRleF9yZW1haW4gPSBkZWNpbWFsX2luZGV4X3JlbWFpbiAtIHJlbWFpbl9hbmRfYV9sZW5fZ2FwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZW1haW5fYXJyLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHJlbWFpbl9hbmRfYV9sZW5fZ2FwIDwgMCl7XG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguYWJzKHJlbWFpbl9hbmRfYV9sZW5fZ2FwKTtcbiAgICAgICAgY29uc3QgYXJyID0gQXJyYXkobGVuKS5maWxsKDApO1xuICAgICAgICByZW1haW5fYXJyLnVuc2hpZnQoLi4uYXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYocmVtYWluX2lzX2RlY2ltYWwpe1xuICAgICAgICByZW1haW5fYXJyID0gWy4uLnJlbWFpbl9hcnJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXdfYXJyYXk6IG5ld19hcnIsXG4gICAgICAgIGRlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXgsXG4gICAgICAgIHJlbWFpbl9hcnJheTogcmVtYWluX2FycixcbiAgICAgICAgcmVtYWluX2RlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXhfcmVtYWluLFxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBtYXhfdGltZXNfaWZfbm90X2RpdmlzaWJsZSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMTBcIik7XG5cbiAgICBjb25zdCB7IG5ld19hcnJheSwgZGVjaW1hbF9pbmRleCwgcmVtYWluX2FycmF5LCByZW1haW5fZGVjaW1hbF9pbmRleH0gPSBjYWxjKHthOiBhXywgYjogYl8sIG1heDogbWF4X3RpbWVzX2lmX25vdF9kaXZpc2libGV9KTtcblxuXG4gICAgY29uc3QgcmVtYWluZGVyID0gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5yZW1haW5fYXJyYXldLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogcmVtYWluX2RlY2ltYWxfaW5kZXhcbiAgICB9KTtcblxuXG4gICAgY29uc3QgcXVvdGllbnQgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLm5ld19hcnJheV0sXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgICBkZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVvdGllbnQsXG4gICAgICByZW1haW5kZXI6cmVtYWluZGVyLFxuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG59O1xuXG5jb3JlLmRpdmlkZSA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLmRpdmlzaW9uKGEsIGIpO1xufTtcblxuY29yZS5mbG9vciA9IGZ1bmN0aW9uKG51bSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGNvbnN0IG4gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChudW0pO1xuICAgIGNvbnN0IGlzX2RlY2ltYWwgPSBuLmRlY2ltYWxfaW5kZXggPCBuLmFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBkZWMgPSBuLmFycmF5LnNsaWNlKG4uZGVjaW1hbF9pbmRleCwgbi5hcnJheS5sZW5ndGgpO1xuICAgIGNvbnN0IGRlY19uID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoZGVjLmpvaW4oXCJcIikpO1xuICAgIGlmKGNvcmUuaXNaZXJvKGRlY19uKSl7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgbGV0IG5fID0ge1xuICAgICAgLi4ubixcbiAgICAgIGFycmF5OiBuLmFycmF5LnNsaWNlKDAsIG4uZGVjaW1hbF9pbmRleClcbiAgICB9O1xuICAgIGlmKG4ubmVnYXRpdmUgJiYgaXNfZGVjaW1hbCl7XG4gICAgICBuXyA9IGNvcmUuc3VidHJhY3Qobl8sIFwiMVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5fO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG51bX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG51bX0pO1xuICAgIH1cbiAgfVxufTtcblxuY29yZS5jZWlsID0gZnVuY3Rpb24obnVtOiBTdXVOdW1iZXIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBjb25zdCBuID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobnVtKTtcbiAgICBjb25zdCBpc19kZWNpbWFsID0gbi5kZWNpbWFsX2luZGV4IDwgbi5hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgZGVjID0gbi5hcnJheS5zbGljZShuLmRlY2ltYWxfaW5kZXgsIG4uYXJyYXkubGVuZ3RoKTtcbiAgICBjb25zdCBkZWNfbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGRlYy5qb2luKFwiXCIpKTtcbiAgICBpZihjb3JlLmlzWmVybyhkZWNfbikpe1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGxldCBuXyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogbi5hcnJheS5zbGljZSgwLCBuLmRlY2ltYWxfaW5kZXgpXG4gICAgfTtcbiAgICBpZighbi5uZWdhdGl2ZSAmJiBpc19kZWNpbWFsKXtcbiAgICAgIG5fID0gY29yZS5hZGQobl8sIFwiMVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5fO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG51bX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG51bX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbmNvcmUubW9kdWxvID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHwgc3RyaW5nIHtcbiAgdHJ5e1xuICAgIGlmKCFhIHx8ICFiKXtcbiAgICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFfID0gY29yZS5nZXRaZXJvKCk7XG4gICAgbGV0IGJfID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYl8pKXtcbiAgICAgIGlmKGNvcmUuaXNMYXJnZShhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiSW5maW5pdHlcIjtcbiAgICAgIH1lbHNlIGlmKGNvcmUuaXNTbWFsbChhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiTmVnYXRpdmUgSW5maW5pdHlcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIk5vdCBhIE51bWJlclwiO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGFfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldFplcm8oKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhX3Bvc2kgPSBjb3JlLmNsb25lKGFfKTtcbiAgICBjb25zdCBiX3Bvc2kgPSBjb3JlLmNsb25lKGJfKTtcbiAgICBhX3Bvc2kubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBiX3Bvc2kubmVnYXRpdmUgPSBmYWxzZTtcblxuICAgIGlmKGNvcmUuaXNMYXJnZShiX3Bvc2ksIGFfcG9zaSkpe1xuICAgICAgY29uc3QgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhKTtcbiAgICAgIHJldHVybiBhXztcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldFplcm8oKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV8ubmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGJ9KXtcbiAgICAgIGNvbnN0IGRpdmlkZWQgPSBjb3JlLmRpdmlkZShhLCBiKTtcbiAgICAgIGNvbnN0IGZsb29yZWQgPSBjb3JlLmZsb29yKGRpdmlkZWQpO1xuICAgICAgY29uc3QgbXVsdGlwbGVkID0gY29yZS5tdWx0aXBsZShiLCBmbG9vcmVkKTtcbiAgICAgIGNvbnN0IHJlcyA9IGNvcmUuc3VidHJhY3QoYSwgbXVsdGlwbGVkKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlcyA9IGNhbGMoe2E6IHsuLi5hXywgbmVnYXRpdmU6IGZhbHNlfSwgYjogey4uLmJfLCBuZWdhdGl2ZTogZmFsc2V9IH0pO1xuXG4gICAgY29uc3QgcXVvdGllbnQgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVvdGllbnQsXG4gICAgfVxuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuICBcbn07XG5cbmNvcmUub3Bwb3NpdGUgPSAobjogYW55KSA9PiB7XG4gIGNvbnN0IG51bSA9IGNvcmUuZ2V0U3V1TnVtYmVyKG4pO1xuICBjb25zdCBvcCA9IGNvcmUubXVsdGlwbGUobnVtLCBcIi0xXCIpO1xuICByZXR1cm4gb3A7XG59O1xuXG5jb25zdCBnZXRIYWxmV2l0aEZsb29yID0gKG46IGFueSkgPT4ge1xuICBjb25zdCBudW0gPSBjb3JlLmdldFN1dU51bWJlcihuKTtcbiAgY29uc3QgaGFsZiA9IGNvcmUuZGl2aWRlKG51bSwgXCIyXCIpO1xuICBjb25zdCByZXMgPSBjb3JlLmZsb29yKGhhbGYpO1xuICByZXR1cm4gcmVzO1xufTtcblxuY29yZS5mYWN0b3JpemF0aW9uID0gKG46IGFueSwgc3F1YXJlPzogYm9vbGVhbikgPT4ge1xuICBjb25zdCBudW0gPSBjb3JlLmdldFN1dU51bWJlcihuKTtcblxuICBpZihudW0ubmFtZSA9PT0gXCJFcnJvclwiKXtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgaWYoIXNxdWFyZSl7XG4gICAgc3F1YXJlID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCBhcnJheTogU3V1TnVtYmVyW10gPSBbXTtcbiAgIGlmKGNvcmUuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUobnVtKSl7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIGxldCBib29sID0gdHJ1ZTtcbiAgY29uc3QgaGFsZiA9IGdldEhhbGZXaXRoRmxvb3IobnVtKTtcbiAgbGV0IG9uZSA9IGhhbGY7XG4gIGxldCB0d28gPSBoYWxmO1xuXG4gIHdoaWxlKGJvb2wpe1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvcmUubXVsdGlwbGUob25lLCB0d28pO1xuICAgIGlmKGNvcmUuaXNFcXVhbChyZXN1bHQsIG51bSkpe1xuICAgICAgYXJyYXkucHVzaCguLi5bb25lLCB0d29dKTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNle1xuICAgICAgaWYoY29yZS5pc0VxdWFsKHR3bywgXCIxXCIpICYmIGNvcmUuaXNFcXVhbChvbmUsIFwiMVwiKSl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoc3F1YXJlKXtcbiAgICAgICAgb25lID0gY29yZS5zdWJ0cmFjdChvbmUsIFwiMVwiKTtcbiAgICAgICAgdHdvID0gb25lO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc0VxdWFsKHR3bywgXCIxXCIpKXtcbiAgICAgICAgb25lID0gY29yZS5zdWJ0cmFjdChvbmUsIFwiMVwiKTtcbiAgICAgICAgdHdvID0gb25lO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc0VxdWFsKG9uZSwgXCIxXCIpKXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgb25lID0gb25lO1xuICAgICAgICB0d28gPSBjb3JlLnN1YnRyYWN0KHR3bywgXCIxXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5jb3JlLnNxdWFyZVJvb3QgPSAobjogYW55LCBhcHByb3hpbWF0ZTogYm9vbGVhbikgPT4ge1xuICBjb25zdCBudW0gPSBjb3JlLmdldFN1dU51bWJlcihuKTtcbiAgaWYoY29yZS5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIGNvcmUuZ2V0WmVybygpO1xuICB9XG5cbiAgaWYoY29yZS5pc09uZShudW0pKXtcbiAgICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbiAgfVxuICBjb25zdCByZXMgPSBjb3JlLmZhY3Rvcml6YXRpb24obnVtLCB0cnVlKTtcbiAgY29uc29sZS5sb2coXCJpbiBzcXVhcmVSb290XCIsIHJlcyk7XG4gIGlmKHJlcy5sZW5ndGggPT09IDAgJiYgYXBwcm94aW1hdGUpe1xuICAgIGNvbnNvbGUubG9nKFwiaW4gc3F1YXJlUm9vdDBcIiwgYXBwcm94aW1hdGUpO1xuICAgIGxldCBudW0yID0gbnVtO1xuICAgIGxldCByZXMgPSBudWxsO1xuICAgIHdoaWxlKHRydWUpe1xuICAgICAgbnVtMiA9IGNvcmUuc3VidHJhY3QobnVtMiwgXCIxXCIpO1xuICAgICAgaWYoY29yZS5pc1plcm8obnVtMikpe1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlczIgPSBjb3JlLmZhY3Rvcml6YXRpb24obnVtMiwgdHJ1ZSk7XG4gICAgICBpZihyZXMyKXtcbiAgICAgICAgcmVzID0gcmVzMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5cbmNvcmUuZ2V0U3V1TnVtYmVyID0gKG46IGFueSkgPT4ge1xuICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IG1hcDogb2JqZWN0ID0ge1xuICBhZGQ6IHtcbiAgICBqYTogXCLliqDnrpdcIlxuICB9LFxuICBzdWJ0cmFjdDoge1xuICAgIGphOiBcIua4m+eul1wiXG4gIH0sXG4gIG11bHRpcGxpY2F0aW9uOiB7XG4gICAgamE6IFwi5LmX566XXCJcbiAgfSxcbiAgbXVsdGlwbGU6IHtcbiAgICBqYTogXCLkuZfnrpdcIlxuICB9LFxuICBkaXZpc2lvbjoge1xuICAgIGphOiBcIumZpOeul1wiXG4gIH0sXG4gIGRpdmlkZToge1xuICAgIGphOiBcIumZpOeul1wiXG4gIH0sXG4gIGZsb29yOiB7XG4gICAgamE6IFwi5YiH44KK5o2o44GmXCJcbiAgfSxcbiAgY2VpbDoge1xuICAgIGphOiBcIuWIh+OCiuS4iuOBklwiXG4gIH0sXG4gIGNsb25lOiB7XG4gICAgamE6IFwi44Kv44Ot44O844OzL+OCs+ODlOODvFwiXG4gIH0sXG4gIGNvcHk6IHtcbiAgICBqYTogXCLjgq/jg63jg7zjg7Mv44Kz44OU44O8XCJcbiAgfSxcbiAgZ2V0TGFyZ2U6IHtcbiAgICBqYTogXCIy44Gk44Gu5byV5pWw44Gu44GG44Gh5aSn44GN44GE5pa544KS5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0U21hbGw6IHtcbiAgICBqYTogXCIy44Gk44Gu5byV5pWw44Gu44GG44Gh5bCP44GV44GE5pa544KS5Y+W5b6XXCJcbiAgfSxcbiAgaXNMYXJnZToge1xuICAgIGphOiBcIuesrOS4gOW8leaVsOOBjOesrOS6jOW8leaVsOOCiOOCiuWkp+OBjeOBhOOBi1wiXG4gIH0sXG4gIGlzU21hbGw6IHtcbiAgICBqYTogXCLnrKzkuIDlvJXmlbDjgYznrKzkuozlvJXmlbDjgojjgorlsI/jgZXjgYTjgYtcIlxuICB9LFxuICBpc0VxdWFsOiB7XG4gICAgamE6IFwi56ys5LiA5byV5pWw44Go56ys5LqM5byV5pWw44GM562J44GX44GE44GLXCJcbiAgfSxcbiAgZ2V0WmVybzoge1xuICAgIGphOiBcIjDjgpLlj5blvpdcIlxuICB9LFxuICBnZXRPbmU6IHtcbiAgICBqYTogXCIx44KS5Y+W5b6XXCJcbiAgfSxcbiAgaXNaZXJvOiB7XG4gICAgamE6IFwiMOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzT25lOiB7XG4gICAgamE6IFwiMeOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIHNxdWFyZToge1xuICAgIGphOiBcIuW5s+aWueaVsFwiXG4gIH0sXG4gIGdldEFic29sdXRlOntcbiAgICBqYTogXCLntbblr77lgKTjga7lj5blvpdcIlxuICB9LFxuICBleHBvbmVudGlhdGU6IHtcbiAgICBqYTogXCLjgbnjgY3kuZdcIixcbiAgfSxcbiAgZ2V0SW50ZWdlcjoge1xuICAgIGphOiBcIuaVtOaVsOmDqOOCkuWPluW+l1wiLFxuICB9LFxuICBnZXREZWNpbWFsOiB7XG4gICAgamE6IFwi5bCP5pWw6YOo44KS5Y+W5b6XXCIsXG4gIH0sXG4gIGlzTmF0dXJhbE51bWJlcjoge1xuICAgIGphOiBcIuiHqueEtuaVsOOBi+OBqeOBhuOBi1wiLFxuICB9LFxuICBpbmNsdWRlRGVjaW1hbDoge1xuICAgIGphOiBcIuWwj+aVsOmDqOOCkuWQq+OCgOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzTmVnYXRpdmU6IHtcbiAgICBqYTogXCLosqDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc1Bvc2l0aXZlOiB7XG4gICAgamE6IFwi5q2j5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgbmVnYXRlOiB7XG4gICAgamE6IFwi5q2j5pWw44Gu5aC05ZCI6LKg5pWw44Gr44GZ44KLXCJcbiAgfSxcbiAgbWFrZVBvc2l0aXZlOiB7XG4gICAgamE6IFwi6LKg5pWw44Gu5aC05ZCI5q2j5pWw44Gr44GZ44KLXCJcbiAgfSxcbiAgZ2V0TmV4dDoge1xuICAgIGphOiBcIuaVtOaVsDHjgpLov73liqDjgZfjgZ/mlbDjgpLlj5blvpdcIlxuICB9LFxuICBnZXRQcmV2OiB7XG4gICAgamE6IFwi5pW05pWwMeOCkuW8leOBhOOBn+aVsOOCkuWPluW+l1wiXG4gIH0sXG4gIGlzSW50ZWdlcjoge1xuICAgIGphOiBcIuaVtOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzRXZlbk51bWJlcjoge1xuICAgIGphOiBcIuWBtuaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzT2RkTnVtYmVyOiB7XG4gICAgamE6IFwi5aWH5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgZ2V0RGl2aXNvcnM6IHtcbiAgICBqYTogXCLntITmlbDjga7lj5blvpdcIlxuICB9LFxuICBjb21tb25EaXZpc29yczoge1xuICAgIGphOiBcIuW8leaVsDHjgajlvJXmlbAy44Gu5YWs57SE5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgZ3JlYXRlc3RDb21tb25EaXZpc29yOiB7XG4gICAgamE6IFwi5byV5pWwMeOBqOW8leaVsDLjga7mnIDlpKflhazntITmlbDjga7lj5blvpdcIlxuICB9LFxuICBjb21tb25NdWx0aXBsZToge1xuICAgamE6IFwi5byV5pWwMeOBqOW8leaVsDLjga7lhazlgI3mlbDjga7lj5blvpdcIlxuICB9LFxuICBsZWFzdENvbW1vbk11bHRpcGxlOiB7XG4gICAgamE6IFwi5byV5pWwMeOBqOW8leaVsDLjga7mnIDlsI/lhazlgI3mlbDjga7lj5blvpdcIlxuICB9LFxuICBtYWtlRmlib25hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5XjgqPjg5zjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlTHVjYVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Oq44Ol44Kr5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZVRyaWJvbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODiOODquODnOODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VUZXRyYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4bjg4jjg6njg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlUGVudGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Oa44Oz44K/44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZUhleGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OY44Kt44K144OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZUhlcHRhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODmOODl+OCv+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VPY3RhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuOCquOCr+OCv+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VOb25hbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODjuODiuODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VEZWNhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODh+OCq+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VVbmRlY2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Km44Oz44OH44Kr44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZURvZGVjYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4njg4fjgqvjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlSWNvc2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Kk44Kz44K144OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgc3VtbWF0aW9uOiB7XG4gICAgamE6IFwi57eP5ZKMXCJcbiAgfSxcbiAgaW5maW5pdGVQcm9kdWN0OiB7XG4gICAgamE6IFwi57eP5LmXL+e3j+epjVwiXG4gIH0sXG4gIGRpZ2l0U3VtOiB7XG4gICAgamE6IFwi5pWw5a2X5ZKML+WQhOahgeOBrue3j+WSjFwiXG4gIH0sXG4gIG1ha2VUcmlhbmdsZU51bWJlcjoge1xuICAgIGphOiBcIuS4ieinkuaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIG1ha2VQcm9uaWNOdW1iZXI6IHtcbiAgICBqYTogXCLnn6nlvaLmlbDjga7nlJ/miJBcIlxuICB9LFxuICBmYWN0b3JpYWw6IHtcbiAgICBqYTogXCLpmo7kuZdcIlxuICB9LFxuICBtb2R1bG86IHtcbiAgICBqYTogXCLlibDkvZnmvJTnrpdcIlxuICB9LFxuICBpc01lcnNlbm5lTnVtYmVyOiB7XG4gICAgamE6IFwi44Oh44Or44K744Oz44OM5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgbWFrZU1lcnNlbm5lTnVtYmVyczoge1xuICAgIGphOiBcIuODoeODq+OCu+ODs+ODjOaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIGlzUHJpbWVOdW1iZXI6IHtcbiAgICBqYTogXCLntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBtYWtlUHJpbWVOdW1iZXJzOiB7XG4gICAgamE6IFwi57Sg5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgaXNNZXJzZW5uZVByaW1lTnVtYmVyOiB7XG4gICAgamE6IFwi44Oh44Or44K744Oz44OM57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNDb21wb3NpdGVOdW1iZXI6IHtcbiAgICBqYTogXCLlkIjmiJDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc0hhcnNoYWROdW1iZXI6IHtcbiAgICBqYTogXCLjg4/jg7zjgrfjg6Pjg4Pjg4nmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc1p1Y2tlcm1hbk51bWJlcjoge1xuICAgIGphOiBcIuOCuuODg+OCq+ODvOODnuODs+aVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzUmVwdW5pdE51bWJlcjoge1xuICAgIGphOiBcIuODrOODlOODpeODi+ODg+ODiOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGdldEludmVyc2lvbk51bWJlcjoge1xuICAgIGphOiBcIui7ouWAkuaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGdldFJlY2lwcm9jYWw6IHtcbiAgICBqYTogXCLpgIbmlbDjga7lj5blvpdcIlxuICB9LFxuICBnZXRSZXZlcnNlOiB7XG4gICAgamE6IFwi5pWw44Gu6YCG6aCG44Gu5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJDb25ncnVlbnRpYWxHZW5lcmF0b3JzOiB7XG4gICAgamE6IFwi57ea5b2i5ZCI5ZCM5rOV44Gn44Gu55aR5Ly85Lmx5pWw5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmFuZG9tTnVtYmVyQnlNaWRkbGVTcXVhcmVNZXRob2Q6IHtcbiAgICBqYTogXCLlubPmlrnmjqHkuK3ms5Xjgafjga7nlpHkvLzkubHmlbDlj5blvpdcIlxuICB9LFxuICBnZXRSYW5kb21OdW1iZXJCeUxpbmVhckZlZWRiYWNrU2hpZnRSZWdpc3Rlcjoge1xuICAgIGphOiBcIue3muW9ouW4sOmChOOCt+ODleODiOODrOOCuOOCueOCv+OBq+OCiOOCi+eWkeS8vOS5seaVsOWPluW+l1wiXG4gIH0sXG4gIGlzU29waGllR2VybWFpblByaW1lOiB7XG4gICAgamE6IFwi44K944OV44Kj44O844K444Kn44Or44Oe44Oz57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNTYWZlUHJpbWU6IHtcbiAgICBqYTogXCLlronlhajntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBnZXRGZXJtYXROdW1iZXI6IHtcbiAgICBqYTogXCLjg5Xjgqfjg6vjg57jg7zmlbDjga7lj5blvpdcIlxuICB9LFxuICBpc0Zlcm1hdE51bWJlcjoge1xuICAgIGphOiBcIuODleOCp+ODq+ODnuODvOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzRmVybWF0UHJpbWU6IHtcbiAgICBqYTogXCLjg5Xjgqfjg6vjg57jg7zntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBnZXRDdWxsZW5OdW1iZXI6IHtcbiAgICBqYTogXCLjgqvjg6zjg7PmlbDjga7lj5blvpdcIlxuICB9LFxuICBpc0N1bGxlbk51bWJlcjoge1xuICAgIGphOiBcIuOCq+ODrOODs+aVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzQ3VsbGVuUHJpbWU6IHtcbiAgICBqYTogXCLjgqvjg6zjg7PntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBnZXRQcm90aE51bWJlcjoge1xuICAgIGphOiBcIuODl+ODreOCueaVsOOBruWPluW+l1wiXG4gIH0sXG4gIG1ha2VQcm90aE51bWJlcnM6IHtcbiAgICBqYTogXCLjg5fjg63jgrnmlbDjga7nlJ/miJBcIlxuICB9LFxuICBpc1Byb3RoTnVtYmVyOiB7XG4gICAgamE6IFwi44OX44Ot44K55pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNQcm90aFByaW1lOiB7XG4gICAgamE6IFwi44OX44Ot44K557Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgbWFrZVBpZXJwb250TnVtYmVyOiB7XG4gICAgamE6IFwi44OU44Ki44Od44Oz44OI5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgbWFrZVBpZXJwb250UHJpbWVzOiB7XG4gICAgamE6IFwi44OU44Ki44Od44Oz44OI57Sg5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgaXNQaWVycG9udFByaW1lOiB7XG4gICAgamE6IFwi44OU44Ki44Od44Oz44OI57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbn07XG5cbmNvbnN0IHdoYXRJcyA9IGZ1bmN0aW9uKHtuYW1lPVwiXCIsIGxhbmc9XCJqYVwifTogeyBuYW1lOiBzdHJpbmcsIGxhbmc6IHN0cmluZ30pOiBzdHJpbmd7XG4gIGlmKCFuYW1lKXtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGxldCB0YXJnZXQgPSB1dGlsc1tuYW1lXTtcbiAgaWYoIXRhcmdldCl7XG4gICAgdGFyZ2V0ID0gY29yZVtuYW1lXTtcbiAgfVxuXG4gIGNvbnN0IGV4aXN0cyA9IHRhcmdldCA/IHRydWUgOiBmYWxzZTtcbiAgaWYoIWV4aXN0cyl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBjb25zdCByZXMgPSBtYXBbbmFtZV07XG4gIGlmKHJlcyAmJiByZXNbbGFuZ10pe1xuICAgIHJldHVybiByZXNbbGFuZ107XG4gIH1cbiAgY29uc3Qgb3RoZXJfbGFuZyA9IE9iamVjdC5rZXlzKHJlcylbMF07XG4gIGlmKG90aGVyX2xhbmcpe1xuICAgIHJldHVybiByZXNbb3RoZXJfbGFuZ107XG4gIH1cblxuICByZXR1cm4gXCJcIjtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aGF0SXM7IiwiaW1wb3J0IHsgU3V1TnVtYmVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5cbmNvbnN0IG1lYXN1cmVtZW50ID0gYXN5bmMgZnVuY3Rpb24oZnVuYywgLi4uYXJncyl7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIGNvbnNvbGUubG9nKGFyZ3MpO1xuICBsZXQgcmVzID0gbnVsbDtcbiAgdHJ5e1xuICAgIGlmKEFycmF5LmlzQXJyYXkoYXJncykpe1xuICAgICAgaWYoZnVuYy5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFzeW5jRnVuY3Rpb25cIil7XG4gICAgICAgIHJlcyA9IGF3YWl0IGZ1bmMoLi4uYXJncyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzID0gZnVuYyguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9ZWxzZSBpZihhcmdzICE9PSBudWxsICYmIHR5cGVvZiBhcmdzID09PSBcIm9iamVjdFwiKXtcbiAgICAgIGlmKGZ1bmMuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBc3luY0Z1bmN0aW9uXCIpe1xuICAgICAgICByZXMgPSBhd2FpdCBmdW5jKGFyZ3MpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlcyA9IGZ1bmMoYXJncyk7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBpZihmdW5jLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXN5bmNGdW5jdGlvblwiKXtcbiAgICAgICAgcmVzID0gYXdhaXQgZnVuYyhhcmdzKTtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXMgPSBmdW5jKGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfWNhdGNoKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG5cbiAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBjb25zdCBsZW5ndGhPZlRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuXG4gIHJldHVybiB7XG4gICAgcmVzdWx0OiByZXMsXG4gICAgbGVuZ3RoT2ZUaW1lTVM6IGxlbmd0aE9mVGltZSxcbiAgfTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBtZWFzdXJlbWVudDtcbiIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5pbXBvcnQgeyBTdXVOdW1iZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCByYW5kb206YW55ID0ge307XHJcblxyXG5jb25zdCBzZWVkczphbnkgPSB7fTtcclxuXHJcbmNvbnN0IGdldFNlZWQgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHNlZWRzW25hbWVdO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0U2VlZCA9IChzZWVkOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIHNlZWRzW25hbWVdID0gc2VlZDtcclxufTtcclxuXHJcbmNvbnN0IGdldE9yU2V0U2VlZCA9IChzZWVkOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gXHJcbiAgaWYoc2VlZCl7XHJcbiAgICBzZWVkc1tuYW1lXSA9IHNlZWQ7XHJcbiAgfWVsc2V7XHJcbiAgICBzZWVkID0gc2VlZHNbbmFtZV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VlZDtcclxufTtcclxuXHJcbmxldCByZWdpc3RlcjEgPSAweDExMTE7XHJcbmxldCByZWdpc3RlcjIgPSAweDExMTE7XHJcbmNvbnN0IGxmc3IgPSAoc2VlZCkgPT4ge1xyXG5cclxuICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIsIHJlZ2lzdGVyMS50b1N0cmluZygyKSlcclxuICBcclxuICBpZihzZWVkKXtcclxuICAgIGNvbnNvbGUubG9nKFwic2VlZFwiLCBzZWVkLnRvU3RyaW5nKDIpKVxyXG4gICAgcmVnaXN0ZXIxID0gMHhmZmZmICYgc2VlZDtcclxuICAgIHJlZ2lzdGVyMiA9IDB4ZmZmZiAmIHNlZWQ7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyMVwiLCByZWdpc3RlcjEudG9TdHJpbmcoMikpXHJcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyMlwiLCByZWdpc3RlcjIudG9TdHJpbmcoMikpXHJcbiAgfVxyXG4gIGxldCBiaXQxID0gc2VlZCAmIDB4ZmZmZjtcclxuICBsZXQgYml0MiA9IHNlZWQgJiAweGZmZmY7XHJcbiAgY29uc29sZS5sb2coXCJiaXRcIiwgYml0MS50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMxID0gKHJlZ2lzdGVyMSAmIDB4MDAwMSk7XHJcbiAgY29uc29sZS5sb2coXCJyZXMxXCIsIHJlczEudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMiA9IHJlczEgXiAoKHJlZ2lzdGVyMSAmIDB4MDAwNCkgPj4gMik7XHJcbiAgY29uc29sZS5sb2coXCJyZXMyXCIsIHJlczIudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMyA9IHJlczIgXiAoKHJlZ2lzdGVyMSAmIDB4MDAwOCkgPj4gMyk7XHJcbiAgY29uc29sZS5sb2coXCJyZXMzXCIsIHJlczMudG9TdHJpbmcoMikpXHJcbiAgYml0MSA9IHJlczMgXiAoKHJlZ2lzdGVyMSAmIDB4MDAyMCkgPj4gNSk7XHJcbiAgY29uc29sZS5sb2coXCJiaXRcIiwgYml0MS50b1N0cmluZygyKSlcclxuICBiaXQyID0gKHJlZ2lzdGVyMiAmIDB4MDAwMSkgXlxyXG4gICAgKChyZWdpc3RlcjIgJiAweDAwMDQpID4+IDIpIF5cclxuICAgICgocmVnaXN0ZXIyICYgMHgwMDA4KSA+PiAzKSBeXHJcbiAgICAoKHJlZ2lzdGVyMiAmIDB4MDAyMCkgPj4gNSk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJiaXRcIiwgYml0LnRvU3RyaW5nKDIpKVxyXG5cclxuICByZWdpc3RlcjEgPSAocmVnaXN0ZXIxID4+IDEpIHwgKGJpdDEgPDwgMTUpO1xyXG4gIHJlZ2lzdGVyMiA9IChyZWdpc3RlcjIgPj4gMSkgfCAoYml0MiA8PCAxNSk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJyZWdpc3RlclwiLCBzZWVkLnRvU3RyaW5nKDIpKVxyXG4gIHJldHVybiB7XHJcbiAgICByZWdpc3RlcjE6IHJlZ2lzdGVyMSxcclxuICAgIHJlZ2lzdGVyMjogcmVnaXN0ZXIyLFxyXG4gICAgYml0MTogYml0MSxcclxuICAgIGJpdDI6IGJpdDJcclxuICB9O1xyXG5cclxufVxyXG5cclxuXHJcbnJhbmRvbS5nZXROb3RSYW5kb21OdW1iZXIgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXROb3RSYW5kb21OdW1iZXJcIjtcclxuICBjb25zdCBzdG9yZWRTZWVkID0gZ2V0U2VlZChteU5hbWUpO1xyXG4gIGlmKCFzdG9yZWRTZWVkKXtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVpcmUgc2VlZCBwYXJhbWV0ZXJcIik7XHJcbiAgfVxyXG4gIHNldFNlZWQoc3RvcmVkU2VlZCwgbXlOYW1lKTtcclxuICByZXR1cm4gY29yZS5nZXRTdXVOdW1iZXIoc3RvcmVkU2VlZCk7XHJcbn07XHJcblxyXG5yYW5kb20uZ2V0UmFuZG9tTnVtYmVyID0gKHNlZWQ6IGFueSkgPT4ge1xyXG4gIGNvbnN0IG51bSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgcmV0dXJuIGNvcmUuZ2V0U3V1TnVtYmVyKG51bSk7XHJcbn07XHJcblxyXG5yYW5kb20uZ2V0UmFuZG9tTnVtYmVyQnlNaWRkbGVTcXVhcmVNZXRob2QgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXRSYW5kb21OdW1iZXJCeU1pZGRsZVNxdWFyZU1ldGhvZFwiO1xyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcbiAgY29uc3QgZmlyc3QgPSBjb3JlLmdldFN1dU51bWJlcihzdG9yZWRTZWVkID8gc3RvcmVkU2VlZCA6IFwiMTIzNFwiKTtcclxuICBjb25zdCByZXMgPSB1dGlscy5zcXVhcmUoZmlyc3QpO1xyXG4gIGxldCBzZWNvbmQgPSByZXMuYXJyYXkuc2xpY2UoMiwgNikuam9pbihcIlwiKTtcclxuICBpZihyZXMuYXJyYXkubGVuZ3RoID09PSA3KXtcclxuICAgIHNlY29uZCA9IHJlcy5hcnJheS5zbGljZSgxLCA1KS5qb2luKFwiXCIpO1xyXG4gIH1cclxuICBjb25zdCBzZWNvbmRudW0gPSBjb3JlLmdldFN1dU51bWJlcihzZWNvbmQpO1xyXG4gIHNldFNlZWQoc2Vjb25kLCBteU5hbWUpO1xyXG4gIHJldHVybiBzZWNvbmRudW07XHJcbn07XHJcblxyXG5yYW5kb20uZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJDb25ncnVlbnRpYWxHZW5lcmF0b3JzID0gKHNlZWQ6IGFueSkgPT4ge1xyXG4gIGNvbnN0IG15TmFtZSA9IFwiZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJDb25ncnVlbnRpYWxHZW5lcmF0b3JzXCI7XHJcbiAgY29uc3QgYSA9IGNvcmUuZ2V0U3V1TnVtYmVyKFwiM1wiKTtcclxuICBjb25zdCBiID0gY29yZS5nZXRTdXVOdW1iZXIoXCI1XCIpO1xyXG4gIGNvbnN0IG0gPSBjb3JlLmdldFN1dU51bWJlcihcIjEzXCIpO1xyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcbiAgY29uc3QgbmV3X3NlZWQgPSBjb3JlLmdldFN1dU51bWJlcihzdG9yZWRTZWVkID8gc3RvcmVkU2VlZCA6IFwiOFwiKTtcclxuICBzZXRTZWVkKG5ld19zZWVkLCBteU5hbWUpO1xyXG4gIC8vIChhIHggc2VlZCArIGIpIG1vZCBtXHJcbiAgY29uc3QgcmVzMSA9IGNvcmUubXVsdGlwbGUoYSwgbmV3X3NlZWQpO1xyXG4gIGNvbnN0IHJlczIgPSBjb3JlLmFkZChyZXMxLCBiKTtcclxuICBjb25zdCByZXMzID0gY29yZS5tb2R1bG8ocmVzMiwgbSk7XHJcbiAgcmV0dXJuIHJlczM7XHJcbn07XHJcblxyXG5sZXQgcmVnaXN0ZXIgPSAweDExMTE7XHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXJCeUxpbmVhckZlZWRiYWNrU2hpZnRSZWdpc3RlciA9IChzZWVkKSA9PiB7XHJcblxyXG4gIGNvbnN0IG15TmFtZSA9IFwiZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJGZWVkYmFja1NoaWZ0UmVnaXN0ZXJcIjtcclxuICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIsIHJlZ2lzdGVyLnRvU3RyaW5nKDIpKVxyXG4gIFxyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcblxyXG4gIGlmKCFzdG9yZWRTZWVkICYmIHNlZWQpe1xyXG4gICAgc2V0U2VlZChzZWVkLCBteU5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJzZWVkXCIsIHNlZWQudG9TdHJpbmcoMikpXHJcbiAgICByZWdpc3RlciA9IDB4ZmZmZiAmIHNlZWQ7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyMVwiLCByZWdpc3Rlci50b1N0cmluZygyKSlcclxuICB9XHJcbiAgbGV0IGJpdCA9IHNlZWQgJiAweGZmZmY7XHJcbiAgY29uc29sZS5sb2coXCJiaXRcIiwgYml0LnRvU3RyaW5nKDIpKVxyXG4gIGNvbnN0IHJlczEgPSAocmVnaXN0ZXIgJiAweDAwMDEpO1xyXG4gIGNvbnNvbGUubG9nKFwicmVzMVwiLCByZXMxLnRvU3RyaW5nKDIpKVxyXG4gIGNvbnN0IHJlczIgPSByZXMxIF4gKChyZWdpc3RlciAmIDB4MDAwNCkgPj4gMik7XHJcbiAgY29uc29sZS5sb2coXCJyZXMyXCIsIHJlczIudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMyA9IHJlczIgXiAoKHJlZ2lzdGVyICYgMHgwMDA4KSA+PiAzKTtcclxuICBjb25zb2xlLmxvZyhcInJlczNcIiwgcmVzMy50b1N0cmluZygyKSlcclxuICBiaXQgPSByZXMzIF4gKChyZWdpc3RlciAmIDB4MDAyMCkgPj4gNSk7XHJcbiAgY29uc29sZS5sb2coXCJiaXRcIiwgYml0LnRvU3RyaW5nKDIpKVxyXG4gIHJlZ2lzdGVyID0gKHJlZ2lzdGVyID4+IDEpIHwgKGJpdCA8PCAxNSk7XHJcblxyXG4gIHNldFNlZWQocmVnaXN0ZXIsIG15TmFtZSk7XHJcblxyXG4gIHJldHVybiByZWdpc3RlcjtcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTsiLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlXCI7XG5cbmltcG9ydCB7IFN1dU51bWJlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuY29uc3QgdXRpbHM6YW55ID0ge307XG5cbnV0aWxzLnRzID0gKCkgPT4ge3JldHVybiBcInRzXCJ9O1xuXG51dGlscy5nZXROdW1iZXIgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG59O1xuXG51dGlscy5jb3B5ID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgY29uc3QgYyA9IGNvcmUuY2xvbmUobik7XG4gIGlmKCFjKXtcbiAgICBjb25zdCBzID0gY29yZS5udW1BcnJheVRvU3RyaW5nKG4pO1xuICAgIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChzKTtcbiAgfVxuICByZXR1cm4gYztcbn07XG5cbnV0aWxzLmdldExhcmdlID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0TGFyZ2UoYSwgYik7XG59O1xuXG51dGlscy5nZXRTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLmdldFNtYWxsKGEsIGIpO1xufTtcblxudXRpbHMuaXNTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc1NtYWxsKGEsIGIpO1xufVxudXRpbHMuaXNMYXJnZSA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc0xhcmdlKGEsIGIpO1xufVxuXG51dGlscy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoYSwgYik7XG59XG5cbnV0aWxzLmdldFplcm8gPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLmdldFplcm8oKTtcbn07XG5cbnV0aWxzLmdldE9uZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0T25lKCk7XG59O1xuXG51dGlscy5pc1plcm8gPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgcmV0dXJuIGNvcmUuaXNaZXJvKG4pO1xufVxudXRpbHMuaXNPbmUgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgcmV0dXJuIGNvcmUuaXNPbmUobik7XG59XG5cbnV0aWxzLnNxdWFyZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLm11bHRpcGxpY2F0aW9uKG4sIG4pO1xufTtcblxudXRpbHMuZ2V0QWJzb2x1dGUgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIGNvbnN0IG51bTogYW55ID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZihudW0gaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuICBsZXQgY2xvbmUgPSBjb3JlLmNsb25lKG51bSk7XG4gIGlmKGNsb25lLm5lZ2F0aXZlKXtcbiAgICBjbG9uZSA9IHV0aWxzLm1ha2VQb3NpdGl2ZShjbG9uZSk7XG4gIH1cbiAgcmV0dXJuIGNsb25lO1xufTtcblxudXRpbHMuZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oYmFzZSwgZXhwb25lbnQpOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IGIgPSB1dGlscy5nZXROdW1iZXIoYmFzZSk7XG4gIGNvbnN0IGV4cCA9IHV0aWxzLmdldE51bWJlcihleHBvbmVudCk7XG5cbiAgaWYodXRpbHMuaW5jbHVkZURlY2ltYWwoZXhwKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIk5vdCBzdXBwb3J0ZWQgaWYgZXhwb25lbnQgaXMgZGVjaW1hbFwiLCBwYXJhbWV0ZXI6IFtleHBvbmVudF19KTtcbiAgfVxuXG4gIGlmKCF1dGlscy5pc0ludGVnZXIoZXhwKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIkV4cG9uZW50IG11c3QgYmUgaW50ZWdlclwiLCBwYXJhbWV0ZXI6IFtleHBvbmVudF19KTtcbiAgfVxuICBcbiAgaWYodXRpbHMuaXNaZXJvKGV4cCkpe1xuICAgIHJldHVybiBjb3JlLmdldE9uZSgpO1xuICB9XG4gIGlmKHV0aWxzLmlzT25lKGV4cCkpe1xuICAgIHJldHVybiBiO1xuICB9XG5cbiAgbGV0IG11bHRpID0gdHJ1ZTtcbiAgaWYoY29yZS5pc1NtYWxsKGV4cCwgY29yZS5nZXRaZXJvKCkpKXtcbiAgICBtdWx0aSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gY29yZS5nZXRPbmUoKTtcbiAgY29uc3QgZXhwX2FicyA9IHV0aWxzLmdldEFic29sdXRlKGV4cCk7XG4gIGNvbnN0IGdldEJvb2wgPSAoY291bnQpID0+IHtcbiAgICByZXR1cm4gY29yZS5pc1NtYWxsKGNvdW50LCBleHBfYWJzKTtcbiAgfVxuICBsZXQgcmVzID0gYjtcbiAgbGV0IGJvb2wgPSBnZXRCb29sKGNvdW50KTtcbiAgd2hpbGUoYm9vbCl7XG4gICAgaWYobXVsdGkpe1xuICAgICAgcmVzID0gY29yZS5tdWx0aXBsZShyZXMsIGIpO1xuICAgIH1lbHNle1xuICAgICAgcmVzID0gY29yZS5kaXZpZGUocmVzLCBiKTtcbiAgICB9XG4gICAgY291bnQgPSBjb3JlLmFkZChjb3VudCwgXCIxXCIpO1xuICAgIGJvb2wgPSBnZXRCb29sKGNvdW50KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxudXRpbHMuZ2V0SW50ZWdlciA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGxldCBzdHIgPSBcIlwiO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbi5kZWNpbWFsX2luZGV4OyBpKyspe1xuICAgIGNvbnN0IHMgPSBTdHJpbmcobi5hcnJheVtpXSk7XG4gICAgc3RyID0gc3RyICsgcztcbiAgfVxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIoc3RyKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cbnV0aWxzLmdldERlY2ltYWwgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXREZWNpbWFsKG4pO1xufTtcblxudXRpbHMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKGRlY2ltYWwpO1xuICBpZihpc196ZXJvICYmICFuLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pbmNsdWRlRGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBjb25zdCBkZWNpbWFsID0gdXRpbHMuZ2V0RGVjaW1hbChuKTtcbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhkZWNpbWFsKTtcbiAgaWYoaXNfemVybyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxudXRpbHMuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBuXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICByZXR1cm4gbl8ubmVnYXRpdmU7XG59O1xuXG51dGlscy5pc1Bvc2l0aXZlID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGlmKHV0aWxzLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIHJldHVybiAhbl8ubmVnYXRpdmU7XG59O1xuXG51dGlscy5uZWdhdGUgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgaWYobnVtKXtcbiAgICBudW0ubmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBudW07XG59O1xuXG51dGlscy5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgaWYobnVtKXtcbiAgICBudW0ubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gbnVtO1xufTtcblxuXG51dGlscy5nZXROZXh0ID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuYWRkKG4sIFwiMVwiKTtcbn07XG5cbnV0aWxzLmdldFByZXYgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5zdWJ0cmFjdChuLCBcIjFcIik7XG59O1xuXG51dGlscy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBpZih1dGlscy5pc0VxdWFsKGRlY2ltYWwsIFwiMFwiKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xuXG59O1xuXG5cbnV0aWxzLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcmVzID0gY29yZS5tb2R1bG8obiwgXCIyXCIpO1xuXG4gIGNvbnN0IGlzX3plcm8gPSB1dGlscy5pc1plcm8ocmVzKTtcbiAgaWYoaXNfemVybyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaXNPZGROdW1iZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhuLCBcIjJcIik7XG5cbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhyZXMpO1xuICBpZighaXNfemVybyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG51dGlscy5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgaW50ZWdlclwiLCBwYXJhbWV0ZXI6IFtuXX0pO1xuICB9XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgY29uc3QgbnVtOiBTdXVOdW1iZXIgPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYoIW51bSl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBpZihjb3JlLmlzWmVybyhudW0pKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKHV0aWxzLmlzTmF0dXJhbE51bWJlcihudW0pKXtcbiAgICBpZihjb3JlLmlzT25lKG51bSkpe1xuICAgICAgYXJyLnB1c2gobnVtKVxuICAgIH1lbHNle1xuICAgICAgZm9yKGxldCBpID0gY29yZS5nZXRPbmUoKTsgY29yZS5pc0VxdWFsKG51bSwgaSkgfHwgY29yZS5pc0xhcmdlKG51bSwgaSk7IGkgPSBjb3JlLmFkZChpLCBcIjFcIikpe1xuICAgICAgICBjb25zdCByZXM9IGNvcmUuZGl2aXNpb24obnVtLCBpKTtcbiAgICAgICAgaWYoIXV0aWxzLmlzTmF0dXJhbE51bWJlcihyZXMpKXtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1haW5kZXIgPSByZXMucmVtYWluZGVyO1xuICAgICAgICBpZihjb3JlLmlzWmVybyhyZW1haW5kZXIpKXtcbiAgICAgICAgICBhcnIucHVzaCh1dGlscy5nZXROdW1iZXIoaSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5jb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIGlmKCFhICYmIGEgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYoIWIgJiYgYiAhPT0gMCl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhXzogU3V1TnVtYmVyID0gdXRpbHMuZ2V0TnVtYmVyKGEpO1xuICAgIGNvbnN0IGJfOiBTdXVOdW1iZXIgPSB1dGlscy5nZXROdW1iZXIoYik7XG4gICAgXG4gICAgY29uc3QgYV9kaXZpc29yczogU3V1TnVtYmVyW10gPSB1dGlscy5nZXREaXZpc29ycyhhXyk7XG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgcmV0dXJuIGFfZGl2aXNvcnM7XG4gICAgfVxuICAgIGNvbnN0IGJfZGl2aXNvcnM6IFN1dU51bWJlcltdID0gdXRpbHMuZ2V0RGl2aXNvcnMoYl8pO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhX2Rpdmlzb3JzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGFfbjogU3V1TnVtYmVyID0gYV9kaXZpc29yc1tpXTtcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBiX2Rpdmlzb3JzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgY29uc3QgYl9uOiBTdXVOdW1iZXIgPSBiX2Rpdmlzb3JzW2pdO1xuICAgICAgICBpZihjb3JlLmlzRXF1YWwoYV9uLCBiX24pKXtcbiAgICAgICAgICBhcnIucHVzaChhX24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5ncmVhdGVzdENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIHRyeXtcbiAgICBjb25zdCBhcnIgPSB1dGlscy5jb21tb25EaXZpc29ycyhhLCBiKTtcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmNvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYiwgbGltaXQpOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuXG4gIGNvbnN0IGxpbWl0X2xlbmd0aCA9IGxpbWl0ID8gbGltaXQgOiAxMDtcbiAgY29uc3QgYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICBpZighYSAmJiBhICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKCFiICYmIGIgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICB0cnl7XG4gICAgY29uc3QgYV8gPSB1dGlscy5nZXROdW1iZXIoYSk7XG4gICAgY29uc3QgYl8gPSB1dGlscy5nZXROdW1iZXIoYik7XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICBhcnIucHVzaChhXyk7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IGJfYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbGltaXRfbGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgYV9udW0gPSBjb3JlLm11bHRpcGxlKGFfLCBpKTtcbiAgICAgIGFfYXJyLnB1c2goYV9udW0pO1xuICAgIH1cbiAgICBmb3IobGV0IGogPSAxOyBqIDw9IGxpbWl0X2xlbmd0aDsgaisrKXtcbiAgICAgIGNvbnN0IGJfbnVtID0gY29yZS5tdWx0aXBsZShiXywgaik7XG4gICAgICBiX2Fyci5wdXNoKGJfbnVtKTtcbiAgICB9XG5cbiAgICBhX2Fyci5mb3JFYWNoKGFfbiA9PiB7XG4gICAgICBjb25zdCB0Z3QgPSBiX2Fyci5maW5kKGJfbiA9PiBjb3JlLmlzRXF1YWwoYV9uLCBiX24pKTtcbiAgICAgIGlmKHRndCl7XG4gICAgICAgIGFyci5wdXNoKHRndCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiLCBsaW1pdF19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYiwgbGltaXRdfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5sZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYiwgbGltaXQpOiBTdXVOdW1iZXIge1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gdXRpbHMuY29tbW9uTXVsdGlwbGUoYSwgYiwgbGltaXQpO1xuICByZXR1cm4gYXJyWzBdO1xufTtcblxuXG5jb25zdCBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24gPSBmdW5jdGlvbih7YXJyYXksIGxpbWl0fSk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuXG4gIGNvbnN0IG1heCA9IGxpbWl0ID8gbGltaXQgOiAxMDA7XG5cbiAgY29uc3QgaXRlbXNfbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnJheSl7XG4gICAgaWYoYXJyYXkubGVuZ3RoID49IG1heCl7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHRyeXtcbiAgICAgIGxldCByZXMgPSB1dGlscy5nZXROdW1iZXIoXCIwXCIpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGl0ZW1zX2xlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5sZW5ndGggLSAoaXRlbXNfbGVuZ3RoIC0gaSk7XG4gICAgICAgIGNvbnN0IG51bSA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgcmVzID0gY29yZS5hZGQocmVzLCBudW0pO1xuICAgICAgfVxuICAgICAgYXJyYXkucHVzaChyZXMpO1xuICAgICAgcmV0dXJuIGZ1bmMoYXJyYXkpO1xuICAgIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthcnJheSwgbGltaXRdfSlcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheSwgbGltaXRdfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gZnVuYyhhcnJheSk7XG59O1xuXG5jb25zdCBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5ID0gZnVuY3Rpb24oeyBmaXJzdD1cIjBcIiwgbGFzdD1cIjFcIiwgbGVuZ3RoPTIgfSk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBsZW4gPSBsZW5ndGg7XG4gIGNvbnN0IGEgPSB1dGlscy5nZXROdW1iZXIoZmlyc3QpO1xuICBjb25zdCBiID0gdXRpbHMuZ2V0TnVtYmVyKGxhc3QpO1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIHRyeXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IHRndCA9IGE7XG4gICAgICBpZihpID09PSAobGVuIC0xKSl7XG4gICAgICAgIHRndCA9IGI7XG4gICAgICB9XG4gICAgICBhcnIucHVzaCh0Z3QpO1xuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbZmlyc3QsIGxhc3QsIGxlbmd0aF19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbZmlyc3QsIGxhc3QsIGxlbmd0aF19KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbnV0aWxzLm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0PVwiMFwiLCBsYXN0PVwiMVwiKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0LCBsYXN0LCBsZW5ndGg6IDJ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVRyaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDN9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVRldHJhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDR9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVBlbnRhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDV9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUhleGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogNn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlSGVwdGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogN30pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlT2N0YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA4fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VOb25hbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDl9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZURlY2FuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMTB9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVVuZGVjYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAxMX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlRG9kZWNhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDEyfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VJY29zYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAyMH0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlTHVjYVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjJcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5zdW1tYXRpb24gPSBmdW5jdGlvbihhcnJheSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWFycmF5IHx8ICFBcnJheS5pc0FycmF5KGFycmF5KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIEFycmF5LlwiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJhcnJheSBsZW5ndGggaXMgemVyb1wiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBsZXQgc3VtID0gY29yZS5nZXRaZXJvKCk7XG4gIGlmKEFycmF5LmlzQXJyYXkoYXJyYXkpKXtcbiAgICB0cnl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBzdW0gPSBjb3JlLmFkZChzdW0sIGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyYXldfSlcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheV19KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cbnV0aWxzLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKGFycmF5KTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIGlmKCFhcnJheSB8fCAhQXJyYXkuaXNBcnJheShhcnJheSkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBBcnJheS5cIiwgcGFyYW1ldGVyOiBbYXJyYXldfSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdXRpbHMuZ2V0TnVtYmVyKGFycmF5WzBdKTtcbiAgfVxuICBsZXQgcmVzID0gYXJyYXlbMF07XG4gIHRyeXtcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgcmVzID0gY29yZS5tdWx0aXBsZShyZXMsIGFycmF5W2ldKTtcbiAgICB9XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FycmF5XX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheV19KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbnV0aWxzLmRpZ2l0U3VtID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKCFuIHx8ICFBcnJheS5pc0FycmF5KG4uYXJyYXkpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbiAgbGV0IHJlcyA9IGNvcmUuZ2V0WmVybygpO1xuICBpZihjb3JlLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICB0cnl7XG4gICAgcmVzID0gdXRpbHMuc3VtbWF0aW9uKG4uYXJyYXkpXG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5tYWtlVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuICBpZihjb3JlLmlzWmVybyhuKSB8fCB1dGlscy5pc05lZ2F0aXZlKG4pIHx8ICF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuICBcbiAgY29uc3QgcmVzMSA9IGNvcmUubXVsdGlwbGUobiwgY29yZS5hZGQobiwgXCIxXCIpKTtcbiAgY29uc3QgcmVzMiA9IGNvcmUuZGl2aWRlKHJlczEsIFwiMlwiKTtcbiAgcmV0dXJuIHJlczI7XG59O1xuXG51dGlscy5tYWtlUHJvbmljTnVtYmVyID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gY29yZS5nZXRaZXJvKCk7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShuKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0ICByZXMgPSBjb3JlLm11bHRpcGxlKG4sIGNvcmUuYWRkKG4sIFwiMVwiKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mYWN0b3JpYWwgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pIHx8IChjb3JlLmlzT25lKG4pICYmIGNvcmUuaXNMYXJnZShuLCBcIjBcIikpKXtcbiAgICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobikgfHwgIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIiwgcGFyYW1ldGVyOiBbbnVtXX0pO1xuICB9XG5cbiAgbGV0IGdvID0gdHJ1ZTtcbiAgbGV0IHRlbXAgPSBuO1xuICBsZXQgY3VycmVudCA9IG47XG4gIGNvbnN0IGFyciA9IFt0ZW1wXTtcbiAgdHJ5e1xuICAgIHdoaWxlKGdvKXtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGNvcmUuc3VidHJhY3QoY3VycmVudCwgXCIxXCIpO1xuICAgICAgYXJyLnB1c2godGFyZ2V0KTtcbiAgICAgIGN1cnJlbnQgPSB0YXJnZXQ7XG4gICAgICBpZihjb3JlLmlzU21hbGwoY3VycmVudCwgXCIyXCIpKXtcbiAgICAgICAgZ28gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLmluZmluaXRlUHJvZHVjdChhcnIpO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtudW1dfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW251bV19KTtcbiAgICB9XG4gIH1cbn07XG5cblxudXRpbHMuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgbnVtMSA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobnVtMSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc1plcm8obnVtMSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc05lZ2F0aXZlKG51bTEpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodXRpbHMuaXNFdmVuTnVtYmVyKG51bTEpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodXRpbHMuaXNFcXVhbChudW0xLCBcIjFcIikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgbnVtMiA9IGNvcmUuYWRkKG51bTEsIFwiMVwiKTtcblxuICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gIGxldCBuID0gbnVtMjtcbiAgd2hpbGUodHJ1ZSl7XG4gICAgbiA9IGNvcmUuZGl2aXNpb24obiwgXCIyXCIpO1xuICAgIGlmKCF1dGlscy5pc0ludGVnZXIobikpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKHV0aWxzLmlzRXF1YWwobiwgXCIxXCIpKXtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYodXRpbHMuaXNFcXVhbChuLCBcIjJcIikpe1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZih1dGlscy5pc09kZE51bWJlcihuKSl7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xuXG59O1xuXG51dGlscy5tYWtlTWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcblxuICBjb25zdCBtYXhfID0gdXRpbHMuZ2V0TnVtYmVyKDI1KTtcblxuICBpZighbWF4IHx8IGNvcmUuaXNMYXJnZShtYXgsIG1heF8pKXtcbiAgICBtYXggPSBtYXhfO1xuICB9XG5cbiAgbWF4ID0gY29yZS5hZGQobWF4LCB1dGlscy5nZXROdW1iZXIoXCIxXCIpKTtcbiAgY29uc3QgdHdvID0gdXRpbHMuZ2V0TnVtYmVyKDIpO1xuICBjb25zdCBhcnI6U3V1TnVtYmVyW10gID0gW107XG4gIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0TnVtYmVyKDApO1xuICBsZXQgZXggPSB1dGlscy5nZXROdW1iZXIoMSk7XG4gIFxuICB3aGlsZShjb3JlLmlzU21hbGwoZXgsIG1heCkpe1xuICAgIGN1cnJlbnQgPSB1dGlscy5leHBvbmVudGlhdGUodHdvLGV4KTtcbiAgICBjdXJyZW50ID0gY29yZS5zdWJ0cmFjdChjdXJyZW50LCB1dGlscy5nZXROdW1iZXIoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gY29yZS5hZGQoZXgsIHV0aWxzLmdldE51bWJlcigxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIHV0aWxzLnRyaWFsRGl2aXNpb24gPSBmdW5jdGlvbihuKXtcbi8vICAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuLy8gfTtcblxudXRpbHMuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKHV0aWxzLmlzWmVybyhudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodXRpbHMuaXNPbmUobnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYodXRpbHMuaXNFcXVhbChudW0sIFwiMlwiKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZih1dGlscy5pc0V2ZW5OdW1iZXIobnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYodXRpbHMuaW5jbHVkZURlY2ltYWwobnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYodXRpbHMuaXNTbWFsbChudW0sIHV0aWxzLmdldE51bWJlcihcIjBcIikpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBwcmV2ID0gY29yZS5zdWJ0cmFjdChudW0sIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICBsZXQgY3VycmVudCA9IGNvcmUuZGl2aXNpb24ocHJldiwgdXRpbHMuZ2V0TnVtYmVyKFwiMlwiKSk7XG5cbiAgbGV0IGlzX3ByaW1lID0gdHJ1ZTtcblxuICB3aGlsZShpc19wcmltZSAmJiBjb3JlLmlzTGFyZ2UoY3VycmVudCwgdXRpbHMuZ2V0TnVtYmVyKFwiMlwiKSkpe1xuXG4gICAgY29uc3QgcmVzID0gY29yZS5tb2R1bG8obnVtLCBjdXJyZW50KTtcbiAgICBpZih1dGlscy5pc1plcm8ocmVzKSl7XG4gICAgICBpc19wcmltZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGN1cnJlbnQgPSBjb3JlLnN1YnRyYWN0KGN1cnJlbnQsIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICB9XG5cbiAgcmV0dXJuIGlzX3ByaW1lO1xuXG59O1xuXG51dGlscy5tYWtlUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4bGVuZ3RoKXtcbiAgY29uc3QgbWF4X2xlbmd0aCA9IHV0aWxzLmdldE51bWJlcigyNSk7XG4gIGlmKCFtYXhsZW5ndGggfHwgY29yZS5pc0xhcmdlKG1heGxlbmd0aCwgbWF4X2xlbmd0aCkpe1xuICAgIG1heGxlbmd0aCA9IG1heF9sZW5ndGg7XG4gIH1cbiAgY29uc3QgYXJyOlN1dU51bWJlcltdID0gW107XG4gIGxldCBudW0gPSB1dGlscy5nZXROdW1iZXIoXCIwXCIpO1xuICBsZXQgY291bnQgPSB1dGlscy5nZXRaZXJvKCk7XG4gIHdoaWxlKGNvcmUuaXNTbWFsbChjb3VudCwgbWF4bGVuZ3RoKSl7XG4gICAgbnVtID0gY29yZS5hZGQobnVtLCB1dGlscy5nZXROdW1iZXIoXCIxXCIpKTtcbiAgICBpZih1dGlscy5pc1ByaW1lTnVtYmVyKG51bSkpe1xuICAgICAgYXJyLnB1c2gobnVtKTtcbiAgICAgIGNvdW50ID0gdXRpbHMuZ2V0TnVtYmVyKGFyci5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxudXRpbHMuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKHV0aWxzLmlzUHJpbWVOdW1iZXIobikgJiYgdXRpbHMuaXNNZXJzZW5uZU51bWJlcihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaXNDb21wb3NpdGVOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgaWYodXRpbHMuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc09uZShudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pc0V2ZW5OdW1iZXIobikpe1xuICAgIGlmKHV0aWxzLmlzTGFyZ2UobiwgXCI0XCIpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlcyA9IHV0aWxzLmlzUHJpbWVOdW1iZXIobnVtKTtcblxuICBpZihyZXMgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHR5cGVvZiByZXMgPT09IFwiYm9vbGVhblwiKXtcbiAgICByZXR1cm4gIXJlcztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc0hhcnNoYWROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKHV0aWxzLmlzRXF1YWwoXCIwXCIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodXRpbHMuaXNTbWFsbChudW0sIFwiMFwiKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRpdmlzb3JzID0gdXRpbHMuZ2V0RGl2aXNvcnMobik7XG5cbiAgY29uc3QgZHN1bSA9IHV0aWxzLmRpZ2l0U3VtKG4pO1xuXG4gIGxldCBib29sID0gZmFsc2U7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBkaXZpc29ycy5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZCA9IGRpdmlzb3JzW2ldO1xuICAgIGlmKHV0aWxzLmlzRXF1YWwoZCwgZHN1bSkpe1xuICAgICAgYm9vbCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvb2w7XG59O1xuXG51dGlscy5pc1p1Y2tlcm1hbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuXG4gIGxldCByZXMgPSBmYWxzZTtcblxuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKHV0aWxzLmlzRXF1YWwoXCIwXCIpKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBcbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cblxuICBjb25zdCBwcm9kdWN0ID0gdXRpbHMuaW5maW5pdGVQcm9kdWN0KG51bS5hcnJheSk7XG4gIGNvbnN0IGRpdmlzb3JzID0gdXRpbHMuZ2V0RGl2aXNvcnMobik7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGRpdmlzb3JzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBkID0gZGl2aXNvcnNbaV07XG4gICAgaWYodXRpbHMuaXNFcXVhbChwcm9kdWN0LCBkKSl7XG4gICAgICByZXMgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG51dGlscy5pc1JlcHVuaXROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgbGV0IHJlcyA9IGZhbHNlO1xuXG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIFxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBhcnIgPSBudW0uYXJyYXk7XG4gIHJlcyA9IHRydWU7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycltpXTtcbiAgICBpZihlbG0gIT09IDEpe1xuICAgICAgcmVzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuY29uc3QgbWFrZVNvcGhpZUdlcm1hblByaW1lQW5kU2FmZVByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHNhZmVfcHJpbWVfZXhwZWN0ZWQgPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IG51bTEgPSBjb3JlLm11bHRpcGxlKHNhZmVfcHJpbWVfZXhwZWN0ZWQsIFwiMlwiKTtcbiAgY29uc3Qgc29waGllX2dlcm1hbl9leHBlY3RlZCA9IGNvcmUuYWRkKG51bTEsIFwiMVwiKTtcblxuICBpZih1dGlscy5pc1ByaW1lTnVtYmVyKHNhZmVfcHJpbWVfZXhwZWN0ZWQpICYmIHV0aWxzLmlzUHJpbWVOdW1iZXIoc29waGllX2dlcm1hbl9leHBlY3RlZCkpe1xuICAgIHJldHVybiB7XG4gICAgICBzb3BoaWVHZXJtYWluUHJpbWU6IHNhZmVfcHJpbWVfZXhwZWN0ZWQsXG4gICAgICBzYWZlUHJpbWU6IHNvcGhpZV9nZXJtYW5fZXhwZWN0ZWQsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNvcGhpZUdlcm1haW5QcmltZTogbnVsbCxcbiAgICBzYWZlUHJpbWU6IG51bGwsXG4gIH07XG5cbn07XG5cbnV0aWxzLmlzU29waGllR2VybWFpblByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHsgc29waGllR2VybWFpblByaW1lLCBzYWZlUHJpbWUgfSA9IG1ha2VTb3BoaWVHZXJtYW5QcmltZUFuZFNhZmVQcmltZShuKTtcbiAgaWYoc29waGllR2VybWFpblByaW1lICYmIHNhZmVQcmltZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaXNTYWZlUHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtMSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgbnVtMiA9IGNvcmUuc3VidHJhY3QobnVtMSwgXCIxXCIpO1xuICBjb25zdCBudW0zID0gY29yZS5kaXZpc2lvbihudW0yLCBcIjJcIik7XG4gIGNvbnN0IHsgc29waGllR2VybWFpblByaW1lLCBzYWZlUHJpbWUgfSA9IG1ha2VTb3BoaWVHZXJtYW5QcmltZUFuZFNhZmVQcmltZShudW0zKTtcblxuICBpZihzb3BoaWVHZXJtYWluUHJpbWUgJiYgc2FmZVByaW1lKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG5cbn07XG5cbmNvbnN0IHNvcnQgPSBmdW5jdGlvbihhcnJheTogW10sIG9yZGVyPzogXCJhc2NcIiB8IFwiZGVzY1wiKXtcblxuICBjb25zdCBuZXdfYXJyID0gWy4uLmFycmF5XTtcblxuICBjb25zdCBhc2MgPSAoYV9uLCBiX24pID0+IHtcbiAgICBpZihhX24gPCBiX24pe1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1lbHNlIGlmKGFfbiA+IGJfbil7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgY29uc3QgZGVzYyA9IChhX24sIGJfbikgPT4ge1xuICAgIGlmKGFfbiA8IGJfbil7XG4gICAgICByZXR1cm4gMTtcbiAgICB9ZWxzZSBpZihhX24gPiBiX24pe1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBuZXdfYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhX24gPSBOdW1iZXIoYSk7XG4gICAgY29uc3QgYl9uID0gTnVtYmVyKGIpO1xuXG4gICAgaWYob3JkZXIgPT09IFwiYXNjXCIpe1xuICAgICAgcmV0dXJuIGFzYyhhX24sIGJfbik7XG4gICAgfWVsc2UgaWYob3JkZXIgPT09IFwiZGVzY1wiKXtcbiAgICAgIHJldHVybiBkZXNjKGFfbiwgYl9uKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBhc2MoYV9uLCBiX24pXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5ld19hcnI7XG5cbn07XG5cbnV0aWxzLmdldEludmVyc2lvbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgY291bnQgPSB1dGlscy5nZXRaZXJvKCk7XG5cbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKHV0aWxzLmlzRXF1YWwoXCIwXCIpKXtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobnVtKSl7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgY29uc3Qgb3JkZXJlZEFycmF5OiBhbnlbXSA9IHNvcnQobnVtLmFycmF5LCBcImFzY1wiKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBvcmRlcmVkX2VsbSA9IG9yZGVyZWRBcnJheVtpXTtcbiAgICBjb25zdCBvcmlnaW5hbF9lbG0gPSBudW0uYXJyYXlbaV07XG4gICAgY29uc3QgZ2FwID0gY29yZS5zdWJ0cmFjdChvcmRlcmVkX2VsbSwgb3JpZ2luYWxfZWxtKTtcbiAgICBpZih1dGlscy5pc05lZ2F0aXZlKGdhcCkpe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKHV0aWxzLmlzWmVybyhnYXApKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb3VudCA9IGNvcmUuYWRkKGNvdW50LCBnYXApO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50O1xuXG59O1xuXG5cbnV0aWxzLmdldFJlY2lwcm9jYWwgPSBmdW5jdGlvbihuKXtcbiAgbGV0IHJlcyA9IG51bGw7XG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBpZih1dGlscy5pc09uZShudW0pKXtcbiAgICByZXR1cm4gdXRpbHMuZ2V0T25lKCk7XG4gIH1cblxuICByZXMgPSBjb3JlLmRpdmlzaW9uKHV0aWxzLmdldE9uZSgpLCBudW0pO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cbnV0aWxzLmdldFJldmVyc2UgPSBmdW5jdGlvbihuKXtcbiAgbGV0IHJlcyA9IG51bGw7XG5cbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZihudW0ubmVnYXRpdmUpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgaWYodXRpbHMuaW5jbHVkZURlY2ltYWwobnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGlmKHV0aWxzLmlzU21hbGwobnVtLCB1dGlscy5nZXROdW1iZXIoXCIxMFwiKSkpe1xuICAgIHJldHVybiBudW07XG4gIH1cblxuICBjb25zdCBhcnJheSA9IFsuLi5udW0uYXJyYXldLnJldmVyc2UoKTtcbiAgY29uc3Qgc3RyID0gYXJyYXkuam9pbihcIlwiKTtcbiAgY29uc3QgbmV3X251bSA9IHV0aWxzLmdldE51bWJlcihzdHIpO1xuXG4gIHJldHVybiBuZXdfbnVtO1xuXG59O1xuXG51dGlscy5nZXRGZXJtYXROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBjb25zdCBiYXNlID0gdXRpbHMuZ2V0TnVtYmVyKFwiMlwiKTtcbiAgY29uc3QgZXggPSB1dGlscy5leHBvbmVudGlhdGUoYmFzZSwgbnVtKTtcbiAgY29uc3Qgb25lID0gdXRpbHMuZ2V0T25lKCk7XG4gIGNvbnN0IHJlczEgPSB1dGlscy5leHBvbmVudGlhdGUoYmFzZSwgZXgpO1xuICBjb25zdCByZXMyID0gY29yZS5hZGQocmVzMSwgb25lKTtcbiAgcmV0dXJuIHJlczI7XG59O1xuXG51dGlscy5pc0Zlcm1hdE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IG1heCA9IDY7XG4gIGxldCBib29sID0gZmFsc2U7XG4gIGZvcihsZXQgaSA9IDA7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGYgPSB1dGlscy5nZXRGZXJtYXROdW1iZXIoYCR7aX1gKTtcbiAgICBpZih1dGlscy5pc0VxdWFsKGYsIG51bSkpe1xuICAgICAgYm9vbCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvb2w7XG59O1xuXG51dGlscy5pc0Zlcm1hdFByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgaWYodXRpbHMuaXNGZXJtYXROdW1iZXIobnVtKSAmJiB1dGlscy5pc1ByaW1lTnVtYmVyKXtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmdldEN1bGxlbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IGJhc2UgPSB1dGlscy5nZXROdW1iZXIoXCIyXCIpO1xuICBjb25zdCBleCA9IHV0aWxzLmV4cG9uZW50aWF0ZShiYXNlLCBudW0pO1xuICBjb25zdCByZXMxID0gY29yZS5tdWx0aXBsZShudW0sIGV4KTtcbiAgY29uc3QgcmVzMiA9IGNvcmUuYWRkKHJlczEsIHV0aWxzLmdldE9uZSgpKTtcbiAgcmV0dXJuIHJlczI7XG59O1xuXG51dGlscy5pc0N1bGxlbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IG1heCA9IDIwO1xuICBsZXQgYm9vbCA9IGZhbHNlO1xuICBmb3IobGV0IGkgPSAwOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBmID0gdXRpbHMuZ2V0Q3VsbGVuTnVtYmVyKGAke2l9YCk7XG4gICAgaWYodXRpbHMuaXNFcXVhbChmLCBudW0pKXtcbiAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBib29sO1xufTtcblxudXRpbHMuaXNDdWxsZW5QcmltZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGxldCBib29sID0gZmFsc2U7XG4gIGlmKHV0aWxzLmlzUHJpbWVOdW1iZXIobnVtKSAmJiB1dGlscy5pc0N1bGxlbk51bWJlcihudW0pKXtcbiAgICBib29sID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gYm9vbDtcbn07XG5cbnV0aWxzLmdldFByb3RoTnVtYmVyID0gZnVuY3Rpb24oaywgbil7XG4gIGNvbnN0IGtfbnVtID0gdXRpbHMuZ2V0TnVtYmVyKGspO1xuICBjb25zdCBuX251bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc1plcm8oa19udW0pIHx8IHV0aWxzLmlzWmVybyhuX251bSkpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmKHV0aWxzLmlzU21hbGwoa19udW0sIHV0aWxzLmdldFplcm8oKSkgfHwgdXRpbHMuaXNTbWFsbChuX251bSwgdXRpbHMuZ2V0WmVybygpKSl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZih1dGlscy5pc0ludGVnZXIoa19udW0pIHx8IHV0aWxzLmlzSW50ZWdlcihuX251bSkpe1xuICAgIGlmKHV0aWxzLmlzT2RkTnVtYmVyKGtfbnVtKSl7XG4gICAgICBjb25zdCBleCA9IHV0aWxzLmV4cG9uZW50aWF0ZSh1dGlscy5nZXROdW1iZXIoXCIyXCIpLCBuX251bSk7XG4gICAgICBpZih1dGlscy5pc0xhcmdlKGV4LCBrX251bSkpe1xuICAgICAgICBjb25zdCByZXMgPSBjb3JlLm11bHRpcGxlKGV4LCBrX251bSk7XG4gICAgICAgIGNvbnN0IHJlczIgPSBjb3JlLmFkZChyZXMsIHV0aWxzLmdldE9uZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlczI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG5cbn07XG5cbnV0aWxzLm1ha2VQcm90aE51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBjb25zdCBkZWZhdWx0X21heCA9IDEwO1xuICBpZighbWF4KXtcbiAgICBtYXggPSBkZWZhdWx0X21heDtcbiAgfWVsc2UgaWYobWF4ID4gZGVmYXVsdF9tYXgpe1xuICAgIG1heCA9IGRlZmF1bHRfbWF4O1xuICB9XG4gIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKyl7XG4gICAgY29uc3QgayA9IHV0aWxzLmdldE51bWJlcihTdHJpbmcoaSAqIDIgKyAxKSk7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IG1heDsgaisrKXtcbiAgICAgIGNvbnN0IG4gPSB1dGlscy5nZXROdW1iZXIoU3RyaW5nKGogKyAxKSk7XG4gICAgICBjb25zdCByZXMgPSB1dGlscy5nZXRQcm90aE51bWJlcihrLCBuKTtcbiAgICAgIGlmKHJlcyl7XG4gICAgICAgIGxpc3QucHVzaChyZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsaXN0LnNvcnQoKGE6IFN1dU51bWJlciwgYjogU3V1TnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYV9pc19zbWFsbCA9IHV0aWxzLmlzU21hbGwoYSwgYilcbiAgICBpZihhX2lzX3NtYWxsKXtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gMVxuICB9KVxuICByZXR1cm4gbGlzdDtcbn07XG5cbnV0aWxzLmlzUHJvdGhOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBjb25zdCBsaXN0ID0gdXRpbHMubWFrZVByb3RoTnVtYmVycygpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgcCA9IGxpc3RbaV07XG4gICAgaWYodXRpbHMuaXNFcXVhbChwLCBudW0pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc1Byb3RoUHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc1Byb3RoTnVtYmVyKG51bSkgJiYgdXRpbHMuaXNQcmltZU51bWJlcihudW0pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5tYWtlUGllcnBvbnROdW1iZXIgPSBmdW5jdGlvbih1LCB2KXtcbiAgLy8gMnUgM3YgKyAxXG4gIGNvbnN0IHVfbiA9IHV0aWxzLmdldE51bWJlcih1KTtcbiAgY29uc3Qgdl9uID0gdXRpbHMuZ2V0TnVtYmVyKHYpO1xuICBpZih1dGlscy5pc05lZ2F0aXZlKHVfbikgfHwgdXRpbHMuaXNOZWdhdGl2ZSh2X24pKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZighdXRpbHMuaXNJbnRlZ2VyKHVfbikgfHwgIXV0aWxzLmlzSW50ZWdlcih2X24pKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCByZXMxID0gdXRpbHMuZXhwb25lbnRpYXRlKHV0aWxzLmdldE51bWJlcihcIjJcIiksIHVfbik7XG4gIGNvbnN0IHJlczIgPSB1dGlscy5leHBvbmVudGlhdGUodXRpbHMuZ2V0TnVtYmVyKFwiM1wiKSwgdl9uKTtcbiAgY29uc3QgcmVzMyA9IGNvcmUubXVsdGlwbGUocmVzMSwgcmVzMilcbiAgY29uc3QgcmVzID0gY29yZS5hZGQocmVzMywgdXRpbHMuZ2V0T25lKCkpO1xuICByZXR1cm4gcmVzO1xufTtcblxudXRpbHMubWFrZVBpZXJwb250TnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIC8vIDJ1IDN2ICsgMVxuICBcbiAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcbiAgY29uc3QgbWF4X2RlZmF1bHQgPSAxMDtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gbWF4X2RlZmF1bHQ7XG4gIH1lbHNlIGlmKG1heCA+IG1heF9kZWZhdWx0KXtcbiAgICBtYXggPSBtYXhfZGVmYXVsdDtcbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspe1xuICAgIGxldCB1ID0gdXRpbHMuZ2V0TnVtYmVyKGkpO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBtYXg7IGorKyl7XG4gICAgICBsZXQgdiA9IHV0aWxzLmdldE51bWJlcihqKTtcbiAgICAgIGNvbnN0IHJlczogYW55ID0gdXRpbHMubWFrZVBpZXJwb250TnVtYmVyKHUsIHYpO1xuICAgICAgaWYocmVzKXtcbiAgICAgICAgaWYobGlzdC5maW5kKChlbG0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY29yZS5pc0VxdWFsKGVsbSwgcmVzKVxuICAgICAgICB9KSl7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wdXNoKHJlcylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9yKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKXtcbiAgICBsZXQgdiA9IHV0aWxzLmdldE51bWJlcihpKTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgbWF4OyBqKyspe1xuICAgICAgbGV0IHUgPSB1dGlscy5nZXROdW1iZXIoaik7XG4gICAgICBjb25zdCByZXM6IGFueSA9IHV0aWxzLm1ha2VQaWVycG9udE51bWJlcih1LCB2KTtcbiAgICAgIGlmKHJlcyl7XG4gICAgICAgIGlmKGxpc3QuZmluZCgoZWxtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvcmUuaXNFcXVhbChlbG0sIHJlcylcbiAgICAgICAgfSkpe1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpc3QucHVzaChyZXMpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxpc3Quc29ydCgoYTogU3V1TnVtYmVyLCBiOiBTdXVOdW1iZXIpID0+IHtcbiAgICBjb25zdCBhX2lzX3NtYWxsID0gdXRpbHMuaXNTbWFsbChhLCBiKVxuICAgIGlmKGFfaXNfc21hbGwpe1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiAxXG4gIH0pXG4gIHJldHVybiBsaXN0O1xufTtcblxudXRpbHMuaXNQaWVycG9udFByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgaWYodXRpbHMuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhcnIgPSB1dGlscy5tYWtlUGllcnBvbnROdW1iZXJzKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGlmKHV0aWxzLmlzRXF1YWwobnVtLCBhcnJbaV0pICYmIHV0aWxzLmlzUHJpbWVOdW1iZXIobnVtKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgcmFuZG9tIGZyb20gXCIuL3JhbmRvbVwiO1xuaW1wb3J0IGRvYyBmcm9tIFwiLi9kb2NcIjtcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCJcbmltcG9ydCBtZWFzdXJlbWVudCBmcm9tIFwiLi9tZWFzdXJlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvcmU6IGNvcmUsXG4gIHV0aWxzOiB1dGlscyxcbiAgcmFuZG9tOiByYW5kb20sXG4gIGRvYzogZG9jLFxuICBjb25zdGFudHM6IGNvbnN0YW50cyxcbiAgdHM6IHRydWUsXG4gIG1lYXN1cmVtZW50LFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=