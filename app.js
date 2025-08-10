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
    var res = {
        approximate: approximate ? true : false,
        results: []
    };
    var res1 = core.factorization(num, true);
    if (res1.length === 0 && approximate) {
        var num2 = num;
        var res2 = null;
        while (true) {
            num2 = core.subtract(num2, "1");
            if (core.isZero(num2)) {
                break;
            }
            res2 = core.factorization(num2, true);
            if (res2 && res2.length === 2) {
                res1 = res2;
                break;
            }
        }
    }
    // res.results = [res1[0], res1[1]];
    return res;
};
core.squareRootWithDecimal = function (n) {
    var num = core.getSuuNumber(n);
    var res1 = core.squareRoot(num, true);
    var res2 = null;
    if (res1.results.length === 2) {
        res2 = core.multiple(res1.results[0], res1.results[1]);
        if (core.isEqual(res2, num)) {
            return res1;
        }
        var remain = core.subtract(num, res2);
        console.log("remain", remain);
    }
    else {
        return res1;
    }
    //return res;
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
utils.makeTriangleNumber = function (nth) {
    var n = utils.getNumber(nth);
    if (core_1.default.isZero(n) || utils.isNegative(n) || !utils.isInteger(n)) {
        return core_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [nth] });
    }
    var res1 = core_1.default.multiple(n, core_1.default.add(n, "1"));
    var res2 = core_1.default.divide(res1, "2");
    return res2;
};
utils.makePronicNumber = function (nth) {
    var n = utils.getNumber(nth);
    if (core_1.default.isZero(n)) {
        return core_1.default.getZero();
    }
    if (utils.isNegative(n) || !utils.isInteger(n)) {
        return core_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [nth] });
    }
    try {
        var res = core_1.default.multiple(n, core_1.default.add(n, "1"));
        return res;
    }
    catch (err) {
        if (err instanceof Error) {
            return core_1.default.makeError({ message: err.message, parameter: [nth] });
        }
        else {
            return core_1.default.makeError({ message: "unknown error", paramater: [nth] });
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
utils.makeArithmeticSequence = function (first, end, diff) {
    var f = core_1.default.getSuuNumber(first);
    var e = core_1.default.getSuuNumber(end);
    var d = diff ? core_1.default.getSuuNumber(diff) : core_1.default.getOne();
    if (utils.isEqual(f, e) || utils.isLarge(f, e)) {
        return "aa";
    }
    var arr = [];
    var bool = true;
    var num = f;
    while (bool) {
        if (utils.isLarge(num, e)) {
            bool = false;
            break;
        }
        arr.push(num);
        num = core_1.default.add(num, d);
    }
    return arr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztZQUN6RCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixxQkFBZSxLQUFLLENBQUM7Ozs7Ozs7VUN2eENyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsNERBQTBCO0FBQzFCLCtEQUE0QjtBQUM1QixrRUFBOEI7QUFDOUIseURBQXdCO0FBQ3hCLDJFQUFtQztBQUNuQyxpRkFBd0M7QUFFeEMscUJBQWU7SUFDYixJQUFJLEVBQUUsY0FBSTtJQUNWLEtBQUssRUFBRSxlQUFLO0lBQ1osTUFBTSxFQUFFLGdCQUFNO0lBQ2QsR0FBRyxFQUFFLGFBQUc7SUFDUixTQUFTLEVBQUUsbUJBQVM7SUFDcEIsRUFBRSxFQUFFLElBQUk7SUFDUixXQUFXO0NBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUudHMiLCJ3ZWJwYWNrOi8vc3UvLi9kb2MudHMiLCJ3ZWJwYWNrOi8vc3UvLi9tZWFzdXJlbWVudC50cyIsIndlYnBhY2s6Ly9zdS8uL3JhbmRvbS50cyIsIndlYnBhY2s6Ly9zdS8uL3V0aWxzLnRzIiwid2VicGFjazovL3N1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1Ly4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJpbXBvcnQge0NvbXBhcmVPYmplY3QsIFN1dU51bWJlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuY29uc3QgY29yZTphbnkgPSB7fTtcbmNvbnN0IHNldHRpbmdzID0ge1xuICBjYWxjdWxhdGlvbl9tb2RlczogW1wic3V1XCIsIFwianNcIl0sXG4gIGNhbGN1bGF0aW9uX21vZGU6IDAsXG59O1xuXG5cbmNvcmUuY2hhbmdlQ2FsY3VsYXRpb25Nb2RlID0gZnVuY3Rpb24obW9kZTogc3RyaW5nKXtcbiAgaWYoIW1vZGUpe1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpbmRleCA9IHNldHRpbmdzLmNhbGN1bGF0aW9uX21vZGVzLmZpbmRJbmRleChtID0+IG0gPT09IG1vZGUpO1xuICBpZihpbmRleCA+PSAwKXtcbiAgICBzZXR0aW5ncy5jYWxjdWxhdGlvbl9tb2RlID0gaW5kZXg7XG4gIH1cbn07XG5cbmNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbSA9IHNldHRpbmdzLmNhbGN1bGF0aW9uX21vZGVzW3NldHRpbmdzLmNhbGN1bGF0aW9uX21vZGVdO1xuICByZXR1cm4gbTtcbn07XG5cbmNvcmUubWFrZUVycm9yID0gZnVuY3Rpb24obzoge21lc3NhZ2U6IHN0cmluZywgdmFyaWFibGU6IGFueSwgcGFyYW1ldGVyOiBhbnl9KTogRXJyb3J7XG4gIGxldCBlcnJvciA9IG5ldyBFcnJvcigpO1xuICB0cnl7XG4gICAgY29uc3QgdiA9IG8udmFyaWFibGUgPyBvLnZhcmlhYmxlLnRvU3RyaW5nKCkgOiBcIlwiO1xuICAgIGNvbnN0IHAgPSBvLnBhcmFtZXRlciA/IG8ucGFyYW1ldGVyLnRvU3RyaW5nKCkgOiBcIlwiO1xuICAgIGxldCBzdHIgPSBvLm1lc3NhZ2U7XG4gICAgaWYodil7XG4gICAgICBzdHIgPSBgJHtzdHJ9LCAke3YgPyB2IDogXCJcIn1gO1xuICAgIH1cbiAgICBpZihwKXtcbiAgICAgIHN0ciA9IGAke3N0cn0sICR7cCA/IHAgOiBcIlwifWA7XG4gICAgfVxuICAgIGVycm9yID0gbmV3IEVycm9yKHN0cik7XG4gIH1jYXRjaChlOiB1bmtub3duKXtcbiAgICBpZihlIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cbiAgfWZpbmFsbHl7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG5jb25zdCBpc051bWJlciA9IGZ1bmN0aW9uKG4pOiBCb29sZWFue1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLmlzU3V1TnVtYmVyID0gZnVuY3Rpb24obik6IEJvb2xlYW57XG4gIGlmKG4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLm1vbGROdW1BcnJheSA9IGZ1bmN0aW9uKHsgYXJyYXksIG5lZ2F0aXZlLCBkZWNpbWFsX2luZGV4IH0pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIGlmKCFhcnJheSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHsgbWVzc2FnZTogXCJBcnJheSBpcyBub3QgZXhpc3RzXCIsIHBhdGFtZXRlcjogYXJyYXl9KTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBkZWNpbWFsX2luZGV4ICE9PSBcIm51bWJlclwiIHx8IGlzTmFOKGRlY2ltYWxfaW5kZXgpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3IoeyBtZXNzYWdlOiBcImRlY2ltYWxfaW5kZXggaXMgbm90IGEgbnVtYmVyXCIsIHBhdGFtZXRlcjogZGVjaW1hbF9pbmRleH0pO1xuICB9XG4gIHRyeXtcbiAgICB3aGlsZShkZWNpbWFsX2luZGV4IDwgYXJyYXkubGVuZ3RoICYmIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdID09PSAwKXtcbiAgICAgIGFycmF5LnBvcCgpO1xuICAgIH1cbiAgICB3aGlsZShkZWNpbWFsX2luZGV4ID4gMSAmJiBhcnJheVswXSA9PT0gMCl7XG4gICAgICBhcnJheS5zaGlmdCgpO1xuICAgICAgZGVjaW1hbF9pbmRleC0tO1xuICAgIH1cblxuICAgIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgICBhcnJheS5wdXNoKDApO1xuICAgICAgZGVjaW1hbF9pbmRleCA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgbzogU3V1TnVtYmVyID0ge1xuICAgICAgYXJyYXk6IGFycmF5LFxuICAgICAgbmVnYXRpdmU6ICEhbmVnYXRpdmUsXG4gICAgICBpc19udW1fYXJyYXk6IHRydWUsXG4gICAgICBkZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4LFxuICAgICAgc3lzdGVtOiAxMCxcbiAgICAgIGdldEpTTnVtYmVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gTnVtYmVyKGNvcmUubnVtQXJyYXlUb1N0cmluZyh0aGlzKSk7XG4gICAgICB9LFxuICAgICAgZ2V0U3RyaW5nOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gY29yZS5udW1BcnJheVRvU3RyaW5nKHRoaXMpO1xuICAgICAgfSxcbiAgICB9O1xuICAgIGlmKGRlY2ltYWxfaW5kZXggPT09IDAgfHwgZGVjaW1hbF9pbmRleCA+IDApe1xuICAgICAgby5kZWNpbWFsX2luZGV4ID0gZGVjaW1hbF9pbmRleDtcbiAgICB9ZWxzZXtcbiAgICAgIG8uZGVjaW1hbF9pbmRleCA9IGFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGU6IHVua25vd24pe1xuICAgIGlmKGUgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGUubWVzc2FnZSwgcGFyYW1ldGVyOiBhcnJheX0pO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBhcnJheX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5jb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyB1bmRlZmluZWQsIG51bGwsIG9yIGVtcHR5LlwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgfVxuXG4gIGlmKG4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gY29yZS5jbG9uZShuKTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBuID09PSBcIm9iamVjdFwiKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIG9iamVjdC5cIiwgcGFyYW1ldGVyOiBufSk7XG4gIH1cblxuICBsZXQgc3RyOiBzdHJpbmcgPSBTdHJpbmcobik7XG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICB3aGlsZShzdHIgJiYgc3RyWzBdLm1hdGNoKC9eLS8pKXtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXi0vLCBcIlwiKTtcbiAgICBuZWdhdGl2ZSA9ICFuZWdhdGl2ZTtcbiAgfVxuXG4gIGxldCBkZWNfaW5kZXg7XG4gIGxldCByZXMgPSBzdHIubWF0Y2goL1xcLi9nKTtcbiAgaWYocmVzICYmIHJlcy5sZW5ndGggPiAxKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiMiBvciBtb3JlIGRlY2ltYWwgcG9pbnRzXCIsIHBhcmFtZXRlcjogbn0pO1xuICB9XG4gIGlmKHJlcyAmJiByZXMubGVuZ3RoID09PSAxKXtcbiAgICBjb25zdCByZXMxID0gc3RyLm1hdGNoKC9cXC4vKTtcbiAgICBjb25zdCBmaXJzdF9pbmRleCA9IHJlczE/LmluZGV4XG4gICAgZGVjX2luZGV4ID0gZmlyc3RfaW5kZXhcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFwuLywgXCJcIik7XG4gIH1lbHNle1xuICAgIGRlY19pbmRleCA9IHN0ci5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBhcnI6IG51bWJlcltdID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIWlzTnVtYmVyKG51bSkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIsIHBhcmFtZXRlcjogbnVtfSk7XG4gICAgfVxuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoeyBhcnJheTogYXJyLCBuZWdhdGl2ZTogbmVnYXRpdmUsIGRlY2ltYWxfaW5kZXg6IGRlY19pbmRleH0pO1xuXG59O1xuXG5jb3JlLm51bUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbihuKTogc3RyaW5nIHwgRXJyb3Ige1xuICBpZighbi5pc19udW1fYXJyYXkgfHwgIW4uYXJyYXkgfHwgIW4uZGVjaW1hbF9pbmRleCl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0IGFyciA9IFsuLi5uLmFycmF5XTtcbiAgICBhcnIuc3BsaWNlKG4uZGVjaW1hbF9pbmRleCwgMCwgXCIuXCIpO1xuICAgIGxldCBzdHIgPSBhcnIuam9pbihcIlwiKTtcbiAgICBpZihuLm5lZ2F0aXZlKXtcbiAgICAgIHN0ciA9IGAtJHtzdHJ9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBufSk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG59KTtcbiAgICB9XG4gIH1cblxufTtcblxuY29yZS5jb21wYXJlID0gZnVuY3Rpb24oYSwgYik6IENvbXBhcmVPYmplY3QgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBpZighYSAmJiBhICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9ZWxzZSBpZighYiAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IG86IENvbXBhcmVPYmplY3QgPSB7XG4gICAgICBzbWFsbDogbnVsbCxcbiAgICAgIGxhcmdlOiBudWxsLFxuICAgICAgZXF1YWw6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmKGNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlKCkgPT09IFwianNcIikge1xuICAgICAgY29uc3QgYV9udW0gPSBhLmdldEpTTnVtYmVyKCk7XG4gICAgICBjb25zdCBiX251bSA9IGIuZ2V0SlNOdW1iZXIoKTtcbiAgICAgIGlmKGFfbnVtID09PSBiX251bSl7XG4gICAgICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1lbHNlIGlmKGFfbnVtIDwgYl9udW0pe1xuICAgICAgICBvLnNtYWxsID0gYTtcbiAgICAgICAgby5sYXJnZSA9IGI7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfWVsc2UgaWYgKGFfbnVtID4gYl9udW0pe1xuICAgICAgICBvLnNtYWxsID0gYjtcbiAgICAgICAgby5sYXJnZSA9IGE7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgbGV0IGFfID0gYTtcbiAgICBsZXQgYl8gPSBiO1xuXG4gICAgaWYoIWFfLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGFfKTtcbiAgICAgIGlmKCFhXyl7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighYl8uaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYl8pO1xuICAgICAgaWYoIWJfKXtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnJheTogbnVtYmVyW10gPSBhXy5hcnJheTtcbiAgICBjb25zdCBiX2FycmF5OiBudW1iZXJbXSA9IGJfLmFycmF5O1xuXG4gICAgY29uc3QgYV9sZW46IG51bWJlciA9IGFfYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGJfbGVuOiBudW1iZXIgPSBiX2FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBhX3N0cjogc3RyaW5nID0gYV9hcnJheS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGJfc3RyOiBzdHJpbmcgPSBiX2FycmF5LmpvaW4oXCJcIik7XG5cbiAgICBjb25zdCBhX2ludF9sZW4gPSBhXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGJfaW50X2xlbiA9IGJfLmRlY2ltYWxfaW5kZXg7XG5cbiAgICBjb25zdCBhX2RlY19sZW4gPSBhX2xlbiAtIGFfaW50X2xlbjtcbiAgICBjb25zdCBiX2RlY19sZW4gPSBiX2xlbiAtIGJfaW50X2xlbjtcblxuICAgIGlmKGFfbGVuID09PSAxICYmIGFfc3RyID09PSBcIjBcIiAmJiBiX2xlbiA9PT0gMSAmJiBiX3N0ciA9PT0gXCIwXCIpe1xuICAgICAgby5lcXVhbCA9IHRydWU7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoIWFfLm5lZ2F0aXZlICYmIGJfLm5lZ2F0aXZlKXtcbiAgICAgIG8uc21hbGwgPSBiXztcbiAgICAgIG8ubGFyZ2UgPSBhXztcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICBpZihhXy5uZWdhdGl2ZSAmJiAhYl8ubmVnYXRpdmUpe1xuICAgICAgby5zbWFsbCA9IGFfO1xuICAgICAgby5sYXJnZSA9IGJfO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgY29uc3QgbmVnYXRpdmUgPSBhXy5uZWdhdGl2ZTtcblxuICAgIGNvbnN0IG9fYV9iID0ge1xuICAgICAgbGFyZ2U6IG5lZ2F0aXZlID8gYl8gOiBhXyxcbiAgICAgIHNtYWxsOiBuZWdhdGl2ZSA/IGFfIDogYl8sXG4gICAgICBlcXVhbDogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBvX2JfYSA9IHtcbiAgICAgIGxhcmdlOiBuZWdhdGl2ZSA/IGFfIDogYl8sXG4gICAgICBzbWFsbDogbmVnYXRpdmUgPyBiXyA6IGFfLFxuICAgICAgZXF1YWw6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmKGFfaW50X2xlbiA+IGJfaW50X2xlbil7XG4gICAgICByZXR1cm4gb19hX2I7XG4gICAgfVxuICAgIFxuICAgIGlmKGFfaW50X2xlbiA8IGJfaW50X2xlbil7XG4gICAgICByZXR1cm4gb19iX2E7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFfaW50X2xlbjsgaSsrKXtcbiAgICAgIGlmKGFfYXJyYXlbaV0gPiBiX2FycmF5W2ldKXtcbiAgICAgICAgcmV0dXJuIG9fYV9iO1xuICAgICAgfVxuICAgICAgaWYoYV9hcnJheVtpXSA8IGJfYXJyYXlbaV0pe1xuICAgICAgICByZXR1cm4gb19iX2E7ICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWNfbGVuID0gYV9kZWNfbGVuID4gYl9kZWNfbGVuID8gYV9kZWNfbGVuIDogYl9kZWNfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkZWNfbGVuOyBpKyspe1xuICAgICAgY29uc3QgYWEgPSBhX2FycmF5W2FfaW50X2xlbiArIGldID8gYV9hcnJheVthX2ludF9sZW4gKyBpXSA6IDA7XG4gICAgICBjb25zdCBiYiA9IGJfYXJyYXlbYl9pbnRfbGVuICsgaV0gPyBiX2FycmF5W2JfaW50X2xlbiArIGldIDogMDtcbiAgICAgIGlmKGFhID4gYmIpe1xuICAgICAgICByZXR1cm4gb19hX2I7XG4gICAgICB9XG4gICAgICBpZihhYSA8IGJiKXtcbiAgICAgICAgcmV0dXJuIG9fYl9hO1xuICAgICAgfVxuICAgIH1cblxuICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgIHJldHVybiBvO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuXG5cbn07XG5cbmNvcmUuZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb3JlLmNvbXBhcmUoYSwgYikubGFyZ2U7XG59O1xuXG5jb3JlLmdldFNtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5jb21wYXJlKGEsIGIpLnNtYWxsO1xufTtcblxuY29yZS5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICBjb25zdCByZXMgPSBjb3JlLmNvbXBhcmUoYSwgYik7XG4gIGlmKHJlcy5lcXVhbCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29yZS5pc1NtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5pc0VxdWFsKGNvcmUuZ2V0U21hbGwoYSwgYiksIGEpO1xufTtcblxuY29yZS5pc0xhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5pc0VxdWFsKGNvcmUuZ2V0TGFyZ2UoYSwgYiksIGEpO1xufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKTogYm9vbGVhbiB7XG4gIGlmKCFuKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoIW4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZihjb3JlLmdldENhbGN1bGF0aW9uTW9kZSgpID09PSBcImpzXCIpe1xuICAgIGlmKG4uZ2V0SlNOdW1iZXIoKSA9PT0gMCl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgemVybyA9IGNvcmUuZ2V0WmVybygpO1xuICByZXR1cm4gY29yZS5pc0VxdWFsKHplcm8sIG4pO1xufTtcblxuY29yZS5pc09uZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFuIHtcbiAgaWYoIW4pe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKGNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlKCkgPT09IFwianNcIil7XG4gICAgaWYobi5nZXRKU051bWJlcigpID09PSAxKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZihuLmdldEpTTnVtYmVyKCkgPT09IC0xKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBvbmUgPSBjb3JlLmdldE9uZSgpO1xuICBjb25zdCBtaW51c19vbmUgPSBjb3JlLmdldFN1dU51bWJlcihcIi0xXCIpXG4gIGlmKGNvcmUuaXNFcXVhbChvbmUsIG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2UgaWYoY29yZS5pc0VxdWFsKG1pbnVzX29uZSwgbikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvcmUuZ2V0WmVybyA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlciB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjBcIik7XG59O1xuXG5jb3JlLmdldE9uZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlciB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjFcIik7XG59O1xuXG5jb3JlLmZpeENhcnJ5ID0gZnVuY3Rpb24oYXJyOiBudW1iZXJbXSwgbWludXM6IGJvb2xlYW4pOiB7bmV3X2FycmF5OiBudW1iZXJbXSwgbWludXM6IGJvb2xlYW59IHtcbiAgdHJ5IHtcbiAgICBsZXQgbWludXNfID0gbWludXM7XG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pe1xuICAgICAgY29uc3QgZWxtID0gYXJyW2ldO1xuICAgICAgaWYoZWxtIDwgMCl7XG4gICAgICAgIG1pbnVzXyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtID09PSAwKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKG1pbnVzXyl7XG4gICAgICBjb25zdCBjYWNoZTogbnVtYmVyW10gPSBbXTtcbiAgICAgIGFyci5mb3JFYWNoKCAoZWxtOiBudW1iZXIpID0+IHtcbiAgICAgICAgY2FjaGUucHVzaCgtZWxtKTtcbiAgICAgIH0pO1xuICAgICAgYXJyID0gY2FjaGU7XG4gICAgfVxuICAgIGNvbnN0IG5ld19hcnI6IG51bWJlcltdID0gW107XG4gICAgbGV0IGNhcnJ5ID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCB2YWwgPSBOdW1iZXIoYXJyW2ldICsgY2FycnkpO1xuICAgICAgaWYodmFsID4gOSl7XG4gICAgICAgIGNvbnN0IGFycjEgPSBTdHJpbmcodmFsKS5zcGxpdChcIlwiKTtcbiAgICAgICAgdmFsID0gTnVtYmVyKGFycjFbYXJyMS5sZW5ndGggLSAxXSk7XG4gICAgICAgIGNvbnN0IGFycjIgPSBhcnIxLnNsaWNlKDAsIGFycjEubGVuZ3RoIC0gMSk7XG4gICAgICAgIGNhcnJ5ID0gTnVtYmVyKGFycjIuam9pbihcIlwiKSk7XG4gICAgICB9ZWxzZSBpZiggdmFsID49IDAgJiYgdmFsIDw9IDkpe1xuICAgICAgICBjYXJyeSA9IDA7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFsID0gMTAgKyB2YWw7XG4gICAgICAgIGNhcnJ5ID0gLTE7XG5cbiAgICAgIH1cbiAgICAgIG5ld19hcnIucHVzaCh2YWwpO1xuICAgIH1cbiAgICBpZihjYXJyeSAhPT0gMCl7XG4gICAgICBuZXdfYXJyLnB1c2goY2FycnkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZXdfYXJyYXk6IG5ld19hcnIsXG4gICAgICBtaW51czogbWludXNfXG4gICAgfTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyLCBtaW51c119KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYXJyLCBtaW51c119KTtcbiAgICB9XG4gIH1cblxuXG59O1xuXG5jb3JlLmNsb25lID0gZnVuY3Rpb24objogYW55KTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICB0cnl7XG4gICAgaWYoIW4pe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogbn0pO1xuICAgIH1cbiAgICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBub3QgY29tcGF0aWJsZVwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgICB9XG4gICAgY29uc3QgbyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogWy4uLm4uYXJyYXldLFxuICAgIH07XG4gICAgcmV0dXJuIG87XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW25dfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW25dfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhZGRfYW5kX3N1YnRyYWN0X2pzID0gZnVuY3Rpb24oYSwgYiwgbW9kZSkge1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG11c3QgYmUgYSBOdW1iZXIgb3IgYSBTdHJpbmcuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxuICBsZXQgcGx1cztcbiAgaWYoIW1vZGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIG1vZGUgaXMgcmVxdWlyZWRcIiwgcGFyYW1ldGVyOiBbYSwgYiwgbW9kZV19KTs7XG4gIH1lbHNlIGlmKG1vZGUgPT09IFwiK1wiKXtcbiAgICBwbHVzID0gdHJ1ZTtcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCItXCIpe1xuICAgIHBsdXMgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIm1vZGUgbXVzdCBiZSAnKycgb3IgJy0nLlwiLCBwYXJhbWV0ZXI6IG1vZGV9KTtcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhX3MgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcoYSk7XG4gICAgY29uc3QgYl9zID0gY29yZS5udW1BcnJheVRvU3RyaW5nKGIpO1xuICBcbiAgICBjb25zdCBhX24gPSBOdW1iZXIoYV9zKTtcbiAgICBjb25zdCBiX24gPSBOdW1iZXIoYl9zKTtcblxuICAgIGlmKHBsdXMpe1xuICAgICAgcmV0dXJuIGFfbiArIGJfbjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBhX24gLSBiX247XG4gICAgfSAgXG4gIH1jYXRjaChlcnI6IEVycm9yIHwgYW55KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiLCBtb2RlXX0pO1xuICB9XG5cbn07XG5cblxuY29yZS5hZGRfYW5kX3N1YnRyYWN0ID0gZnVuY3Rpb24oYSwgYiwgbW9kZSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWEgfHwgIWIpe1xuICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbXVzdCBiZSBhIE51bWJlciBvciBhIFN0cmluZy5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmKGNvcmUuZ2V0Q2FsY3VsYXRpb25Nb2RlKCkgPT09IFwianNcIil7XG4gICAgcmV0dXJuIGFkZF9hbmRfc3VidHJhY3RfanMoYSwgYiwgbW9kZSk7XG4gIH1cblxuICBsZXQgcGx1cztcbiAgaWYoIW1vZGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIG1vZGUgaXMgcmVxdWlyZWRcIiwgcGFyYW1ldGVyOiBbYSwgYiwgbW9kZV19KTs7XG4gIH1lbHNlIGlmKG1vZGUgPT09IFwiK1wiKXtcbiAgICBwbHVzID0gdHJ1ZTtcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCItXCIpe1xuICAgIHBsdXMgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIm1vZGUgbXVzdCBiZSAnKycgb3IgJy0nLlwiLCBwYXJhbWV0ZXI6IG1vZGV9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbGV0IGFfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgICBsZXQgYl86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgICB9ZWxzZXtcbiAgICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgICB9XG4gICAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgIH1lbHNle1xuICAgICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyID0gYV8uYXJyYXk7XG4gICAgY29uc3QgYl9hcnIgPSBiXy5hcnJheTtcblxuICAgIGNvbnN0IGFfaXNfemVybzogYm9vbGVhbiA9IGNvcmUuaXNaZXJvKGFfKTtcbiAgICBjb25zdCBiX2lzX3plcm86IGJvb2xlYW4gPSBjb3JlLmlzWmVybyhiXyk7XG5cbiAgICBpZihhX2lzX3plcm8gJiYgYl9pc196ZXJvKXtcbiAgICAgIHJldHVybiBhXztcbiAgICB9ZWxzZSBpZihhX2lzX3plcm8pe1xuICAgICAgaWYoIXBsdXMpe1xuICAgICAgICBiXy5uZWdhdGl2ZSA9ICFiXy5uZWdhdGl2ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiXztcbiAgICB9ZWxzZSBpZihiX2lzX3plcm8pe1xuICAgICAgcmV0dXJuIGFfO1xuICAgIH1cblxuICAgIGNvbnN0IGFfZGVjX2xlbmd0aDogbnVtYmVyID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2RlY19sZW5ndGg6IG51bWJlciA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG5cbiAgICBjb25zdCBkZWNfZ2FwOiBudW1iZXIgPSBhX2RlY19sZW5ndGggLSBiX2RlY19sZW5ndGg7XG5cbiAgICBpZihkZWNfZ2FwID4gMCl7XG4gICAgICBiX2Fyci5wdXNoKC4uLkFycmF5KGRlY19nYXApLmZpbGwoMCkpO1xuICAgIH1lbHNlIGlmKGRlY19nYXAgPCAwKXtcbiAgICAgIGFfYXJyLnB1c2goLi4uQXJyYXkoTWF0aC5hYnMoZGVjX2dhcCkpLmZpbGwoMCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYiwgcGx1c30pOiB7IG5ld19hcnJheTogbnVtYmVyW10sIG1pbnVzOiBib29sZWFuIH0ge1xuICAgICAgY29uc3QgYXJyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IGxlbiA9IGEuYXJyYXkubGVuZ3RoO1xuICAgICAgaWYoYS5hcnJheS5sZW5ndGggPCBiLmFycmF5Lmxlbmd0aCl7XG4gICAgICAgIGxlbiA9IGIuYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgY29uc3QgYXJyX2E6IG51bWJlcltdID0gYS5hcnJheTtcbiAgICAgIGNvbnN0IGFycl9iOiBudW1iZXJbXSA9IGIuYXJyYXk7XG4gICAgICBjb25zdCBhX29uZTogbnVtYmVyID0gYS5uZWdhdGl2ZSA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGJfb25lOiBudW1iZXIgPSBiLm5lZ2F0aXZlID8gLTEgOiAxO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgYWEgPSBhcnJfYVtpXSA/IGFycl9hW2ldICogYV9vbmUgOiAwO1xuICAgICAgICBjb25zdCBiYiA9IGFycl9iW2ldID8gYXJyX2JbaV0gKiBiX29uZSA6IDA7XG4gICAgICAgIGxldCByZXMgPSBwbHVzID8gYWEgKyBiYiA6IGFhIC0gYmI7XG4gICAgICAgIGFyci5wdXNoKHJlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29yZS5maXhDYXJyeShhcnIpO1xuICAgIH07XG5cbiAgICBjb25zdCB7IG5ld19hcnJheSwgbWludXMgfSA9IGNhbGMoe1xuICAgICAgYToge1xuICAgICAgICBhcnJheTogWy4uLmFfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBhXy5uZWdhdGl2ZSxcbiAgICAgIH0sXG4gICAgICBiOiB7XG4gICAgICAgIGFycmF5OiBbLi4uYl9hcnJdLnJldmVyc2UoKSxcbiAgICAgICAgbmVnYXRpdmU6IGJfLm5lZ2F0aXZlXG4gICAgICB9LFxuICAgICAgcGx1czogcGx1c1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVjX2xlbmd0aCA9IGFfZGVjX2xlbmd0aCA+PSBiX2RlY19sZW5ndGggPyBhX2RlY19sZW5ndGggOiBiX2RlY19sZW5ndGg7XG4gICAgY29uc3QgbmV3X2ludF9sZW5ndGggPSBuZXdfYXJyYXkubGVuZ3RoIC0gZGVjX2xlbmd0aDtcblxuICAgIGNvbnN0IG5ld19kZWNpbWFsX2luZGV4ID0gbmV3X2ludF9sZW5ndGg7XG5cbiAgICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLnJldmVyc2UoKSxcbiAgICAgIG5lZ2F0aXZlOiBtaW51cyA/IHRydWUgOiBmYWxzZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IG5ld19kZWNpbWFsX2luZGV4XG4gICAgfSk7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbn07XG5cbmNvcmUuYWRkID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgcmV0dXJuIGNvcmUuYWRkX2FuZF9zdWJ0cmFjdChhLCBiLCBcIitcIik7XG59O1xuXG5jb3JlLnN1YnRyYWN0ID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgcmV0dXJuIGNvcmUuYWRkX2FuZF9zdWJ0cmFjdChhLCBiLCBcIi1cIik7XG59O1xuXG5cbmNvbnN0IG11bHRpcGxpY2F0aW9uX2pzID0gZnVuY3Rpb24oYSwgYikge1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG11c3QgYmUgYSBOdW1iZXIgb3IgYSBTdHJpbmcuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxuICB0cnl7XG4gICAgY29uc3QgYV9zID0gY29yZS5udW1BcnJheVRvU3RyaW5nKGEpO1xuICAgIGNvbnN0IGJfcyA9IGNvcmUubnVtQXJyYXlUb1N0cmluZyhiKTtcbiAgXG4gICAgY29uc3QgYV9uID0gTnVtYmVyKGFfcyk7XG4gICAgY29uc3QgYl9uID0gTnVtYmVyKGJfcyk7XG4gIFxuICAgIHJldHVybiBhX24gKiBiX247XG4gIH1jYXRjaChlcnI6IEVycm9yIHwgYW55KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICB9XG5cbn07XG5cbmNvcmUubXVsdGlwbGljYXRpb24gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxuICBpZihjb3JlLmdldENhbGN1bGF0aW9uTW9kZSgpID09PSBcImpzXCIpe1xuICAgIHJldHVybiBtdWx0aXBsaWNhdGlvbl9qcyhhLCBiKTtcbiAgfVxuXG4gIGxldCBhXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gIH1lbHNle1xuICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgfVxuICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICB9ZWxzZXtcbiAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gIH1cblxuICBjb25zdCBhX2FyciA9IGFfLmFycmF5O1xuICBjb25zdCBiX2FyciA9IGJfLmFycmF5O1xuXG4gIGlmKGNvcmUuaXNaZXJvKGFfKSB8fCBjb3JlLmlzWmVybyhiXykpe1xuICAgIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjBcIik7XG4gIH1cblxuICBpZihjb3JlLmlzT25lKGFfKSAmJiBjb3JlLmlzTGFyZ2UoYV8sIFwiMFwiKSl7XG4gICAgcmV0dXJuIGJfO1xuICB9XG5cbiAgaWYoY29yZS5pc09uZShiXykgJiYgY29yZS5pc0xhcmdlKGJfLCBcIjBcIikpe1xuICAgIHJldHVybiBhXztcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhX25lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG4gICAgY29uc3QgYl9uZWdhdGl2ZSA9IGJfLm5lZ2F0aXZlO1xuICAgIGxldCBuZWdhdGl2ZTtcbiAgICBpZihhX25lZ2F0aXZlICYmIGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9ZWxzZSBpZihhX25lZ2F0aXZlIHx8IGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBhX2RlY19sZW5ndGggPSBhXy5hcnJheS5sZW5ndGggLSBhXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGJfZGVjX2xlbmd0aCA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgZGVjX2xlbmd0aCA9IGFfZGVjX2xlbmd0aCArIGJfZGVjX2xlbmd0aDtcblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYn0pe1xuICAgICAgY29uc3QgYXJyYXk6IG51bWJlcltdID0gW107XG4gICAgICBjb25zdCBhcnJfYSA9IGEuYXJyYXk7XG4gICAgICBjb25zdCBhcnJfYiA9IGIuYXJyYXk7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgIGFyci5maWxsKDAsIDAsIGkpO1xuXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgY29uc3QgYmIgPSBhcnJfYltqXSA/IGFycl9iW2pdIDogMDtcbiAgICAgICAgICBsZXQgcmVzID0gYWEgKiBiYjtcbiAgICAgICAgICBcbiAgICAgICAgICBhcnIucHVzaChyZXMpO1xuXG4gICAgICAgICAgY29uc3QgdGd0X2luZGV4ID0gaSArIGo7XG4gICAgICAgICAgbGV0IHRndDogbnVtYmVyID0gYXJyYXlbdGd0X2luZGV4XTtcbiAgICAgICAgICBpZighdGd0KXtcbiAgICAgICAgICAgIHRndCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld190Z3QgPSB0Z3QgKyByZXM7XG4gICAgICAgICAgYXJyYXlbdGd0X2luZGV4XSA9IG5ld190Z3Q7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3JlLmZpeENhcnJ5KGFycmF5KTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXkgfSA9IGNhbGMoe1xuICAgICAgYToge1xuICAgICAgICBhcnJheTogWy4uLmFfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBhXy5uZWdhdGl2ZSxcbiAgICAgIH0sXG4gICAgICBiOiB7XG4gICAgICAgIGFycmF5OiBbLi4uYl9hcnJdLnJldmVyc2UoKSxcbiAgICAgICAgbmVnYXRpdmU6IGJfLm5lZ2F0aXZlXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3X2RlY2ltYWxfaW5kZXggPSBuZXdfYXJyYXkubGVuZ3RoIC0gZGVjX2xlbmd0aDtcblxuICAgIHJldHVybiBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLm5ld19hcnJheV0ucmV2ZXJzZSgpLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogbmV3X2RlY2ltYWxfaW5kZXhcbiAgICB9KTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxufTtcblxuY29yZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLm11bHRpcGxpY2F0aW9uKGEsIGIpO1xufTtcblxuY29yZS5nZXREZWNpbWFsID0gZnVuY3Rpb24obik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gICAgbGV0IHN0ciA9IFwiMC5cIjtcbiAgICBjb25zdCBsZW4gPSBuXy5hcnJheS5sZW5ndGg7XG4gICAgaWYobGVuID4gMCl7XG4gICAgICBmb3IobGV0IGkgPSBuXy5kZWNpbWFsX2luZGV4OyBpIDwgbGVuOyBpKyspe1xuICAgICAgICBjb25zdCBzID0gU3RyaW5nKG5fLmFycmF5W2ldKTtcbiAgICAgICAgc3RyID0gc3RyICsgcztcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHN0ciA9IHN0ciArIFwiMFwiO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChzdHIpO1xuICAgIHJldHVybiBudW07XG4gIH1jYXRjaChlcnIpe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbn0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG59KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRpdmlzaW9uX2pzID0gZnVuY3Rpb24oYSwgYikge1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG11c3QgYmUgYSBOdW1iZXIgb3IgYSBTdHJpbmcuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxuICB0cnl7XG4gICAgY29uc3QgYV9zID0gY29yZS5udW1BcnJheVRvU3RyaW5nKGEpO1xuICAgIGNvbnN0IGJfcyA9IGNvcmUubnVtQXJyYXlUb1N0cmluZyhiKTtcbiAgXG4gICAgY29uc3QgYV9uID0gTnVtYmVyKGFfcyk7XG4gICAgY29uc3QgYl9uID0gTnVtYmVyKGJfcyk7XG4gXG4gICAgcmV0dXJuIGFfbiAvIGJfbjtcbiAgfWNhdGNoKGVycjogRXJyb3IgfCBhbnkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gIH1cblxufTtcblxuXG5cbmNvcmUuZGl2aXNpb24gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3IgfCBzdHJpbmcge1xuXG4gIHRyeSB7XG4gICAgaWYoIWEgfHwgIWIpe1xuICAgICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYV86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgaWYoY29yZS5nZXRDYWxjdWxhdGlvbk1vZGUoKSA9PT0gXCJqc1wiKXtcbiAgICAgIHJldHVybiBkaXZpc2lvbl9qcyhhXywgYl8pO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgICBpZihjb3JlLmlzTGFyZ2UoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIkluZmluaXR5XCI7XG4gICAgICB9ZWxzZSBpZihjb3JlLmlzU21hbGwoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIk5lZ2F0aXZlIEluZmluaXR5XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJOb3QgYSBOdW1iZXJcIjtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhhXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc09uZShiXykgJiYgY29yZS5pc0xhcmdlKGJfLCBcIjBcIikpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYV8sXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNFcXVhbChhXywgYl8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0T25lKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9uZWdhdGl2ZSA9IGFfLm5lZ2F0aXZlO1xuICAgIGNvbnN0IGJfbmVnYXRpdmUgPSBiXy5uZWdhdGl2ZTtcblxuICAgIGlmKGFfLm5lZ2F0aXZlKXtcbiAgICAgIGFfLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoYl8ubmVnYXRpdmUpe1xuICAgICAgYl8ubmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV9uZWdhdGl2ZSAmJiBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfWVsc2UgaWYoYV9uZWdhdGl2ZSB8fCBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKHthLCBiLCBtYXh9KXtcbiAgICAgIGNvbnN0IHJlc3VsdF9hcnI6IFN1dU51bWJlcltdID0gW107XG4gICAgICBsZXQgcmVtYWluID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICBjb25zdCBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgICBjb25zdCBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgICBsZXQgZGVjaW1hbF9pbmRleCA9IGEuZGVjaW1hbF9pbmRleDtcbiAgICAgIGxldCBkZWNpbWFsX2luZGV4X3JlbWFpbiA9IGRlY2ltYWxfaW5kZXg7XG5cbiAgICAgIGxldCBhX2ludCA9IGNvcmUuY2xvbmUoYV8pO1xuICAgICAgYV9pbnQuZGVjaW1hbF9pbmRleCA9IGFfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCBhX3plcm9fbGVuZ3RoID0gMDtcbiAgICAgIGNvbnN0IGFfemVyb19yZXMgPSBhXy5hcnJheS5qb2luKFwiXCIpLm1hdGNoKC9eMCsvKTtcbiAgICAgIGlmKGFfemVyb19yZXMgJiYgYV96ZXJvX3Jlc1swXSl7XG4gICAgICAgIGFfemVyb19sZW5ndGggPSBhX3plcm9fcmVzWzBdLmxlbmd0aDtcbiAgICAgICAgYV9pbnQgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhX2ludC5hcnJheS5zbGljZShhX3plcm9fbGVuZ3RoLCBhX2ludC5hcnJheS5sZW5ndGgpLmpvaW4oXCJcIikpO1xuICAgICAgfVxuXG4gICAgICBsZXQgYl9pbnQgPSBjb3JlLmNsb25lKGJfKTtcbiAgICAgIGJfaW50LmRlY2ltYWxfaW5kZXggPSBiX2ludC5hcnJheS5sZW5ndGg7XG4gICAgICBsZXQgYl96ZXJvX2xlbmd0aCA9IDA7XG4gICAgICBjb25zdCBiX3plcm9fcmVzID0gYl9pbnQuYXJyYXkuam9pbihcIlwiKS5tYXRjaCgvXjArLyk7XG4gICAgICBpZihiX3plcm9fcmVzICYmIGJfemVyb19yZXNbMF0pe1xuICAgICAgICBiX3plcm9fbGVuZ3RoID0gYl96ZXJvX3Jlc1swXS5sZW5ndGg7XG4gICAgICAgIGJfaW50ID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYl9pbnQuYXJyYXkuc2xpY2UoYl96ZXJvX2xlbmd0aCwgYl9pbnQuYXJyYXkubGVuZ3RoKS5qb2luKFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgemVyb19nYXAgPSBhX3plcm9fbGVuZ3RoIC0gYl96ZXJvX2xlbmd0aDtcbiAgICAgIGNvbnN0IGFfYXJyYXkgPSBbLi4uYV9pbnQuYXJyYXldO1xuICAgICAgY29uc3QgYV9kZWNpbWFsX2xlbmd0aCA9IGFfLmFycmF5Lmxlbmd0aCAtIGFfLmRlY2ltYWxfaW5kZXg7XG4gICAgICBjb25zdCBiX2RlY2ltYWxfbGVuZ3RoID0gYl8uYXJyYXkubGVuZ3RoIC0gYl8uZGVjaW1hbF9pbmRleDtcbiAgICAgIGNvbnN0IGRlY2ltYWxfZ2FwID0gYV9kZWNpbWFsX2xlbmd0aCAtIGJfZGVjaW1hbF9sZW5ndGg7XG5cbiAgICAgIGNvbnN0IHRpbWVzID0gTnVtYmVyKGNvcmUuYWRkKGFfaW50LmFycmF5Lmxlbmd0aCwgbWF4KS5hcnJheS5qb2luKFwiXCIpKTtcblxuICAgICAgY29uc3QgYV9sZW4gPSBhX2ludC5hcnJheS5sZW5ndGg7XG4gICAgICBsZXQgcmVtYWluX2lzX2RlY2ltYWwgPSBmYWxzZTtcbiAgICAgIGxldCByZW1haW5fYXJyID0gWzBdO1xuXG4gICAgICBsZXQgZGVjaW1hbF9jb3VudCA9IDA7XG4gICAgICBsZXQgcmVtYWluX2FuZF9hX2xlbl9nYXAgPSAwO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbWVzOyBpKyspe1xuICAgICAgICBsZXQgaXNfbGVzcyA9IHRydWU7XG4gICAgICAgIGxldCBjb3VudCA9IGNvcmUuZ2V0WmVybygpO1xuICAgICAgICBjb25zdCByZW1haW4xID0gY29yZS5tdWx0aXBsaWNhdGlvbihyZW1haW4sIFwiMTBcIik7XG4gICAgICAgIGNvbnN0IHJlbWFpbjIgPSBTdHJpbmcoYV9hcnJheS5zbGljZShpLCBpICsgMSkubGVuZ3RoID09PSAxID8gYV9hcnJheS5zbGljZShpLCBpICsgMSlbMF0gOiBcIjBcIik7XG4gICAgICAgIHJlbWFpbiA9IGNvcmUuYWRkKHJlbWFpbjEsIHJlbWFpbjIpO1xuXG4gICAgICAgIHJlbWFpbl9hbmRfYV9sZW5fZ2FwID0gcmVtYWluLmFycmF5Lmxlbmd0aCAtIGFfbGVuO1xuICAgICAgICBsZXQgcHJvZHVjdCA9IGNvcmUuZ2V0WmVybygpO1xuICAgICAgICBpZihpID09PSBhX2xlbil7XG4gICAgICAgICAgZGVjaW1hbF9pbmRleCA9IGk7XG4gICAgICAgICAgaWYoY29yZS5pc1plcm8ocmVtYWluKSl7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZW1haW5faXNfZGVjaW1hbCA9IHRydWU7XG4gICAgICAgICAgICBkZWNpbWFsX2NvdW50ID0gZGVjaW1hbF9jb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoaSA+IGFfbGVuKXtcbiAgICAgICAgICBkZWNpbWFsX2NvdW50ID0gZGVjaW1hbF9jb3VudCsrO1xuICAgICAgICAgIGlmKGNvcmUuaXNaZXJvKHJlbWFpbikpe1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4X2NvdW50ID0gbWF4O1xuICAgICAgICB3aGlsZShpc19sZXNzKXtcbiAgICAgICAgICBjb3VudCA9IGNvcmUuYWRkKGNvdW50LCBcIjFcIik7XG4gICAgICAgICAgaWYoY29yZS5pc0xhcmdlKGNvdW50LCBtYXhfY291bnQpKXtcbiAgICAgICAgICAgIGlzX2xlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmVfcHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgcHJvZHVjdCA9IGNvcmUubXVsdGlwbGljYXRpb24oYl9pbnQsIGNvdW50KTtcblxuICAgICAgICAgIGlmKGNvcmUuaXNFcXVhbChyZW1haW4sIHByb2R1Y3QpKXtcbiAgICAgICAgICAgIGlzX2xlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50O1xuICAgICAgICAgICAgcmVzdWx0X2Fyci5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW4gPSBjb3JlLnN1YnRyYWN0KHJlbWFpbiwgcHJvZHVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoY29yZS5pc0xhcmdlKHByb2R1Y3QsIHJlbWFpbikpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY29yZS5zdWJ0cmFjdChjb3VudCwgXCIxXCIpO1xuICAgICAgICAgICAgcmVzdWx0X2Fyci5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW4gPSBjb3JlLnN1YnRyYWN0KHJlbWFpbiwgcHJlX3Byb2R1Y3QpO1xuXG4gICAgICAgICAgICBpZihyZW1haW5faXNfZGVjaW1hbCl7XG4gICAgICAgICAgICAgIHJlbWFpbl9hcnIucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW1haW5fYXJyLnB1c2goLi4ucmVtYWluLmFycmF5KTtcbiAgICAgIGNvbnN0IG5ld19hcnIgPSByZXN1bHRfYXJyLmZsYXRNYXAoZSA9PiBlLmFycmF5KTtcblxuICAgICAgaWYoemVyb19nYXAgPiAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHplcm9fZ2FwOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIudW5zaGlmdCgwKTtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoZGVjaW1hbF9nYXAgPCAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IE1hdGguYWJzKGRlY2ltYWxfZ2FwKTsgaSsrKXtcbiAgICAgICAgICBuZXdfYXJyLnB1c2goMCk7XG4gICAgICAgICAgZGVjaW1hbF9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihkZWNpbWFsX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5hYnMoZGVjaW1hbF9nYXApOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihyZW1haW5fYW5kX2FfbGVuX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVtYWluX2FuZF9hX2xlbl9nYXA7IGkrKyl7XG4gICAgICAgICAgY29uc3QgdGd0ID0gcmVtYWluX2FyclswXTtcbiAgICAgICAgICBpZih0Z3QgPT09IDApe1xuICAgICAgICAgICAgcmVtYWluX2Fyci5zaGlmdCgpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGVjaW1hbF9pbmRleF9yZW1haW4gPSBkZWNpbWFsX2luZGV4X3JlbWFpbiAtIHJlbWFpbl9hbmRfYV9sZW5fZ2FwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZW1haW5fYXJyLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHJlbWFpbl9hbmRfYV9sZW5fZ2FwIDwgMCl7XG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguYWJzKHJlbWFpbl9hbmRfYV9sZW5fZ2FwKTtcbiAgICAgICAgY29uc3QgYXJyID0gQXJyYXkobGVuKS5maWxsKDApO1xuICAgICAgICByZW1haW5fYXJyLnVuc2hpZnQoLi4uYXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYocmVtYWluX2lzX2RlY2ltYWwpe1xuICAgICAgICByZW1haW5fYXJyID0gWy4uLnJlbWFpbl9hcnJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXdfYXJyYXk6IG5ld19hcnIsXG4gICAgICAgIGRlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXgsXG4gICAgICAgIHJlbWFpbl9hcnJheTogcmVtYWluX2FycixcbiAgICAgICAgcmVtYWluX2RlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXhfcmVtYWluLFxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBtYXhfdGltZXNfaWZfbm90X2RpdmlzaWJsZSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMTBcIik7XG5cbiAgICBjb25zdCB7IG5ld19hcnJheSwgZGVjaW1hbF9pbmRleCwgcmVtYWluX2FycmF5LCByZW1haW5fZGVjaW1hbF9pbmRleH0gPSBjYWxjKHthOiBhXywgYjogYl8sIG1heDogbWF4X3RpbWVzX2lmX25vdF9kaXZpc2libGV9KTtcblxuXG4gICAgY29uc3QgcmVtYWluZGVyID0gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5yZW1haW5fYXJyYXldLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogcmVtYWluX2RlY2ltYWxfaW5kZXhcbiAgICB9KTtcblxuXG4gICAgY29uc3QgcXVvdGllbnQgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLm5ld19hcnJheV0sXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgICBkZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVvdGllbnQsXG4gICAgICByZW1haW5kZXI6cmVtYWluZGVyLFxuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG59O1xuXG5jb3JlLmRpdmlkZSA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLmRpdmlzaW9uKGEsIGIpO1xufTtcblxuY29yZS5mbG9vciA9IGZ1bmN0aW9uKG51bSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGNvbnN0IG4gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChudW0pO1xuICAgIGNvbnN0IGlzX2RlY2ltYWwgPSBuLmRlY2ltYWxfaW5kZXggPCBuLmFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBkZWMgPSBuLmFycmF5LnNsaWNlKG4uZGVjaW1hbF9pbmRleCwgbi5hcnJheS5sZW5ndGgpO1xuICAgIGNvbnN0IGRlY19uID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoZGVjLmpvaW4oXCJcIikpO1xuICAgIGlmKGNvcmUuaXNaZXJvKGRlY19uKSl7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgbGV0IG5fID0ge1xuICAgICAgLi4ubixcbiAgICAgIGFycmF5OiBuLmFycmF5LnNsaWNlKDAsIG4uZGVjaW1hbF9pbmRleClcbiAgICB9O1xuICAgIGlmKG4ubmVnYXRpdmUgJiYgaXNfZGVjaW1hbCl7XG4gICAgICBuXyA9IGNvcmUuc3VidHJhY3Qobl8sIFwiMVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5fO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG51bX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG51bX0pO1xuICAgIH1cbiAgfVxufTtcblxuY29yZS5jZWlsID0gZnVuY3Rpb24obnVtOiBTdXVOdW1iZXIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBjb25zdCBuID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobnVtKTtcbiAgICBjb25zdCBpc19kZWNpbWFsID0gbi5kZWNpbWFsX2luZGV4IDwgbi5hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgZGVjID0gbi5hcnJheS5zbGljZShuLmRlY2ltYWxfaW5kZXgsIG4uYXJyYXkubGVuZ3RoKTtcbiAgICBjb25zdCBkZWNfbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGRlYy5qb2luKFwiXCIpKTtcbiAgICBpZihjb3JlLmlzWmVybyhkZWNfbikpe1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGxldCBuXyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogbi5hcnJheS5zbGljZSgwLCBuLmRlY2ltYWxfaW5kZXgpXG4gICAgfTtcbiAgICBpZighbi5uZWdhdGl2ZSAmJiBpc19kZWNpbWFsKXtcbiAgICAgIG5fID0gY29yZS5hZGQobl8sIFwiMVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5fO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG51bX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG51bX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbmNvcmUubW9kdWxvID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHwgc3RyaW5nIHtcbiAgdHJ5e1xuICAgIGlmKCFhIHx8ICFiKXtcbiAgICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFfID0gY29yZS5nZXRaZXJvKCk7XG4gICAgbGV0IGJfID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYl8pKXtcbiAgICAgIGlmKGNvcmUuaXNMYXJnZShhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiSW5maW5pdHlcIjtcbiAgICAgIH1lbHNlIGlmKGNvcmUuaXNTbWFsbChhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiTmVnYXRpdmUgSW5maW5pdHlcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIk5vdCBhIE51bWJlclwiO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGFfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldFplcm8oKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhX3Bvc2kgPSBjb3JlLmNsb25lKGFfKTtcbiAgICBjb25zdCBiX3Bvc2kgPSBjb3JlLmNsb25lKGJfKTtcbiAgICBhX3Bvc2kubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBiX3Bvc2kubmVnYXRpdmUgPSBmYWxzZTtcblxuICAgIGlmKGNvcmUuaXNMYXJnZShiX3Bvc2ksIGFfcG9zaSkpe1xuICAgICAgY29uc3QgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhKTtcbiAgICAgIHJldHVybiBhXztcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldFplcm8oKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV8ubmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGJ9KXtcbiAgICAgIGNvbnN0IGRpdmlkZWQgPSBjb3JlLmRpdmlkZShhLCBiKTtcbiAgICAgIGNvbnN0IGZsb29yZWQgPSBjb3JlLmZsb29yKGRpdmlkZWQpO1xuICAgICAgY29uc3QgbXVsdGlwbGVkID0gY29yZS5tdWx0aXBsZShiLCBmbG9vcmVkKTtcbiAgICAgIGNvbnN0IHJlcyA9IGNvcmUuc3VidHJhY3QoYSwgbXVsdGlwbGVkKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlcyA9IGNhbGMoe2E6IHsuLi5hXywgbmVnYXRpdmU6IGZhbHNlfSwgYjogey4uLmJfLCBuZWdhdGl2ZTogZmFsc2V9IH0pO1xuXG4gICAgY29uc3QgcXVvdGllbnQgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVvdGllbnQsXG4gICAgfVxuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuICBcbn07XG5cbmNvcmUub3Bwb3NpdGUgPSAobjogYW55KSA9PiB7XG4gIGNvbnN0IG51bSA9IGNvcmUuZ2V0U3V1TnVtYmVyKG4pO1xuICBjb25zdCBvcCA9IGNvcmUubXVsdGlwbGUobnVtLCBcIi0xXCIpO1xuICByZXR1cm4gb3A7XG59O1xuXG5jb25zdCBnZXRIYWxmV2l0aEZsb29yID0gKG46IGFueSkgPT4ge1xuICBjb25zdCBudW0gPSBjb3JlLmdldFN1dU51bWJlcihuKTtcbiAgY29uc3QgaGFsZiA9IGNvcmUuZGl2aWRlKG51bSwgXCIyXCIpO1xuICBjb25zdCByZXMgPSBjb3JlLmZsb29yKGhhbGYpO1xuICByZXR1cm4gcmVzO1xufTtcblxuY29yZS5mYWN0b3JpemF0aW9uID0gKG46IGFueSwgc3F1YXJlPzogYm9vbGVhbikgPT4ge1xuICBjb25zdCBudW0gPSBjb3JlLmdldFN1dU51bWJlcihuKTtcblxuICBpZihudW0ubmFtZSA9PT0gXCJFcnJvclwiKXtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgaWYoIXNxdWFyZSl7XG4gICAgc3F1YXJlID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCBhcnJheTogU3V1TnVtYmVyW10gPSBbXTtcbiAgIGlmKGNvcmUuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUobnVtKSl7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIGxldCBib29sID0gdHJ1ZTtcbiAgY29uc3QgaGFsZiA9IGdldEhhbGZXaXRoRmxvb3IobnVtKTtcbiAgbGV0IG9uZSA9IGhhbGY7XG4gIGxldCB0d28gPSBoYWxmO1xuXG4gIHdoaWxlKGJvb2wpe1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvcmUubXVsdGlwbGUob25lLCB0d28pO1xuICAgIGlmKGNvcmUuaXNFcXVhbChyZXN1bHQsIG51bSkpe1xuICAgICAgYXJyYXkucHVzaCguLi5bb25lLCB0d29dKTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNle1xuICAgICAgaWYoY29yZS5pc0VxdWFsKHR3bywgXCIxXCIpICYmIGNvcmUuaXNFcXVhbChvbmUsIFwiMVwiKSl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoc3F1YXJlKXtcbiAgICAgICAgb25lID0gY29yZS5zdWJ0cmFjdChvbmUsIFwiMVwiKTtcbiAgICAgICAgdHdvID0gb25lO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc0VxdWFsKHR3bywgXCIxXCIpKXtcbiAgICAgICAgb25lID0gY29yZS5zdWJ0cmFjdChvbmUsIFwiMVwiKTtcbiAgICAgICAgdHdvID0gb25lO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc0VxdWFsKG9uZSwgXCIxXCIpKXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgb25lID0gb25lO1xuICAgICAgICB0d28gPSBjb3JlLnN1YnRyYWN0KHR3bywgXCIxXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5cblxuY29yZS5zcXVhcmVSb290ID0gKG46IGFueSwgYXBwcm94aW1hdGU6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgbnVtID0gY29yZS5nZXRTdXVOdW1iZXIobik7XG4gIGlmKGNvcmUuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBjb3JlLmdldFplcm8oKTtcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUobnVtKSl7XG4gICAgcmV0dXJuIGNvcmUuZ2V0T25lKCk7XG4gIH1cbiAgY29uc3QgcmVzID0ge1xuICAgIGFwcHJveGltYXRlOiBhcHByb3hpbWF0ZSA/IHRydWUgOiBmYWxzZSxcbiAgICByZXN1bHRzOiBbXVxuICB9O1xuICBsZXQgcmVzMSA9IGNvcmUuZmFjdG9yaXphdGlvbihudW0sIHRydWUpO1xuICBpZihyZXMxLmxlbmd0aCA9PT0gMCAmJiBhcHByb3hpbWF0ZSl7XG4gICAgbGV0IG51bTIgPSBudW07XG4gICAgbGV0IHJlczI6IFN1dU51bWJlcltdIHwgbnVsbCA9IG51bGw7XG4gICAgd2hpbGUodHJ1ZSl7XG4gICAgICBudW0yID0gY29yZS5zdWJ0cmFjdChudW0yLCBcIjFcIik7XG4gICAgICBpZihjb3JlLmlzWmVybyhudW0yKSl7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVzMiA9IGNvcmUuZmFjdG9yaXphdGlvbihudW0yLCB0cnVlKTtcbiAgICAgIGlmKHJlczIgJiYgcmVzMi5sZW5ndGggPT09IDIpe1xuICAgICAgICByZXMxID0gcmVzMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzLnJlc3VsdHMgPSBbcmVzMVswXSwgcmVzMVsxXV07XG4gIFxuICByZXR1cm4gcmVzO1xufTtcblxuY29yZS5zcXVhcmVSb290V2l0aERlY2ltYWwgPSAobjogU3V1TnVtYmVyKSA9PiB7XG4gIGNvbnN0IG51bSA9IGNvcmUuZ2V0U3V1TnVtYmVyKG4pO1xuICBjb25zdCByZXMxID0gY29yZS5zcXVhcmVSb290KG51bSwgdHJ1ZSk7XG4gIGxldCByZXMyID0gbnVsbDtcblxuICBpZihyZXMxLnJlc3VsdHMubGVuZ3RoID09PSAyKXtcbiAgICByZXMyID0gY29yZS5tdWx0aXBsZShyZXMxLnJlc3VsdHNbMF0sIHJlczEucmVzdWx0c1sxXSk7XG4gICAgaWYoY29yZS5pc0VxdWFsKHJlczIsIG51bSkpe1xuICAgICAgcmV0dXJuIHJlczE7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtYWluID0gY29yZS5zdWJ0cmFjdChudW0sIHJlczIpO1xuICAgIGNvbnNvbGUubG9nKFwicmVtYWluXCIsIHJlbWFpbik7XG5cbiAgfWVsc2V7XG4gICAgcmV0dXJuIHJlczE7XG4gIH1cblxuXG4gIC8vcmV0dXJuIHJlcztcbn07XG5cblxuY29yZS5nZXRTdXVOdW1iZXIgPSAobjogYW55KSA9PiB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgbWFwOiBvYmplY3QgPSB7XG4gIGFkZDoge1xuICAgIGphOiBcIuWKoOeul1wiXG4gIH0sXG4gIHN1YnRyYWN0OiB7XG4gICAgamE6IFwi5rib566XXCJcbiAgfSxcbiAgbXVsdGlwbGljYXRpb246IHtcbiAgICBqYTogXCLkuZfnrpdcIlxuICB9LFxuICBtdWx0aXBsZToge1xuICAgIGphOiBcIuS5l+eul1wiXG4gIH0sXG4gIGRpdmlzaW9uOiB7XG4gICAgamE6IFwi6Zmk566XXCJcbiAgfSxcbiAgZGl2aWRlOiB7XG4gICAgamE6IFwi6Zmk566XXCJcbiAgfSxcbiAgZmxvb3I6IHtcbiAgICBqYTogXCLliIfjgormjajjgaZcIlxuICB9LFxuICBjZWlsOiB7XG4gICAgamE6IFwi5YiH44KK5LiK44GSXCJcbiAgfSxcbiAgY2xvbmU6IHtcbiAgICBqYTogXCLjgq/jg63jg7zjg7Mv44Kz44OU44O8XCJcbiAgfSxcbiAgY29weToge1xuICAgIGphOiBcIuOCr+ODreODvOODsy/jgrPjg5Tjg7xcIlxuICB9LFxuICBnZXRMYXJnZToge1xuICAgIGphOiBcIjLjgaTjga7lvJXmlbDjga7jgYbjgaHlpKfjgY3jgYTmlrnjgpLlj5blvpdcIlxuICB9LFxuICBnZXRTbWFsbDoge1xuICAgIGphOiBcIjLjgaTjga7lvJXmlbDjga7jgYbjgaHlsI/jgZXjgYTmlrnjgpLlj5blvpdcIlxuICB9LFxuICBpc0xhcmdlOiB7XG4gICAgamE6IFwi56ys5LiA5byV5pWw44GM56ys5LqM5byV5pWw44KI44KK5aSn44GN44GE44GLXCJcbiAgfSxcbiAgaXNTbWFsbDoge1xuICAgIGphOiBcIuesrOS4gOW8leaVsOOBjOesrOS6jOW8leaVsOOCiOOCiuWwj+OBleOBhOOBi1wiXG4gIH0sXG4gIGlzRXF1YWw6IHtcbiAgICBqYTogXCLnrKzkuIDlvJXmlbDjgajnrKzkuozlvJXmlbDjgYznrYnjgZfjgYTjgYtcIlxuICB9LFxuICBnZXRaZXJvOiB7XG4gICAgamE6IFwiMOOCkuWPluW+l1wiXG4gIH0sXG4gIGdldE9uZToge1xuICAgIGphOiBcIjHjgpLlj5blvpdcIlxuICB9LFxuICBpc1plcm86IHtcbiAgICBqYTogXCIw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNPbmU6IHtcbiAgICBqYTogXCIx44GL44Gp44GG44GLXCJcbiAgfSxcbiAgc3F1YXJlOiB7XG4gICAgamE6IFwi5bmz5pa55pWwXCJcbiAgfSxcbiAgZ2V0QWJzb2x1dGU6e1xuICAgIGphOiBcIue1tuWvvuWApOOBruWPluW+l1wiXG4gIH0sXG4gIGV4cG9uZW50aWF0ZToge1xuICAgIGphOiBcIuOBueOBjeS5l1wiLFxuICB9LFxuICBnZXRJbnRlZ2VyOiB7XG4gICAgamE6IFwi5pW05pWw6YOo44KS5Y+W5b6XXCIsXG4gIH0sXG4gIGdldERlY2ltYWw6IHtcbiAgICBqYTogXCLlsI/mlbDpg6jjgpLlj5blvpdcIixcbiAgfSxcbiAgaXNOYXR1cmFsTnVtYmVyOiB7XG4gICAgamE6IFwi6Ieq54S25pWw44GL44Gp44GG44GLXCIsXG4gIH0sXG4gIGluY2x1ZGVEZWNpbWFsOiB7XG4gICAgamE6IFwi5bCP5pWw6YOo44KS5ZCr44KA44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNOZWdhdGl2ZToge1xuICAgIGphOiBcIuiyoOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzUG9zaXRpdmU6IHtcbiAgICBqYTogXCLmraPmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBuZWdhdGU6IHtcbiAgICBqYTogXCLmraPmlbDjga7loLTlkIjosqDmlbDjgavjgZnjgotcIlxuICB9LFxuICBtYWtlUG9zaXRpdmU6IHtcbiAgICBqYTogXCLosqDmlbDjga7loLTlkIjmraPmlbDjgavjgZnjgotcIlxuICB9LFxuICBnZXROZXh0OiB7XG4gICAgamE6IFwi5pW05pWwMeOCkui/veWKoOOBl+OBn+aVsOOCkuWPluW+l1wiXG4gIH0sXG4gIGdldFByZXY6IHtcbiAgICBqYTogXCLmlbTmlbAx44KS5byV44GE44Gf5pWw44KS5Y+W5b6XXCJcbiAgfSxcbiAgaXNJbnRlZ2VyOiB7XG4gICAgamE6IFwi5pW05pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNFdmVuTnVtYmVyOiB7XG4gICAgamE6IFwi5YG25pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNPZGROdW1iZXI6IHtcbiAgICBqYTogXCLlpYfmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBnZXREaXZpc29yczoge1xuICAgIGphOiBcIue0hOaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGNvbW1vbkRpdmlzb3JzOiB7XG4gICAgamE6IFwi5byV5pWwMeOBqOW8leaVsDLjga7lhazntITmlbDjga7lj5blvpdcIlxuICB9LFxuICBncmVhdGVzdENvbW1vbkRpdmlzb3I6IHtcbiAgICBqYTogXCLlvJXmlbAx44Go5byV5pWwMuOBruacgOWkp+WFrOe0hOaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGNvbW1vbk11bHRpcGxlOiB7XG4gICBqYTogXCLlvJXmlbAx44Go5byV5pWwMuOBruWFrOWAjeaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGxlYXN0Q29tbW9uTXVsdGlwbGU6IHtcbiAgICBqYTogXCLlvJXmlbAx44Go5byV5pWwMuOBruacgOWwj+WFrOWAjeaVsOOBruWPluW+l1wiXG4gIH0sXG4gIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODleOCo+ODnOODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VMdWNhU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg6rjg6XjgqvmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlVHJpYm9uYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OI44Oq44Oc44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZVRldHJhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODhuODiOODqeODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VQZW50YW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5rjg7Pjgr/jg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlSGV4YW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5jjgq3jgrXjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlSGVwdGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OY44OX44K/44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZU9jdGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Kq44Kv44K/44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZU5vbmFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OO44OK44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZURlY2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OH44Kr44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZVVuZGVjYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjgqbjg7Pjg4fjgqvjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlRG9kZWNhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODieODh+OCq+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VJY29zYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjgqTjgrPjgrXjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBzdW1tYXRpb246IHtcbiAgICBqYTogXCLnt4/lkoxcIlxuICB9LFxuICBpbmZpbml0ZVByb2R1Y3Q6IHtcbiAgICBqYTogXCLnt4/kuZcv57eP56mNXCJcbiAgfSxcbiAgZGlnaXRTdW06IHtcbiAgICBqYTogXCLmlbDlrZflkowv5ZCE5qGB44Gu57eP5ZKMXCJcbiAgfSxcbiAgbWFrZVRyaWFuZ2xlTnVtYmVyOiB7XG4gICAgamE6IFwi5LiJ6KeS5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgbWFrZVByb25pY051bWJlcjoge1xuICAgIGphOiBcIuefqeW9ouaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIGZhY3RvcmlhbDoge1xuICAgIGphOiBcIumajuS5l1wiXG4gIH0sXG4gIG1vZHVsbzoge1xuICAgIGphOiBcIuWJsOS9mea8lOeul1wiXG4gIH0sXG4gIGlzTWVyc2VubmVOdW1iZXI6IHtcbiAgICBqYTogXCLjg6Hjg6vjgrvjg7Pjg4zmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBtYWtlTWVyc2VubmVOdW1iZXJzOiB7XG4gICAgamE6IFwi44Oh44Or44K744Oz44OM5pWw44Gu55Sf5oiQXCJcbiAgfSxcbiAgaXNQcmltZU51bWJlcjoge1xuICAgIGphOiBcIue0oOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIG1ha2VQcmltZU51bWJlcnM6IHtcbiAgICBqYTogXCLntKDmlbDjga7nlJ/miJBcIlxuICB9LFxuICBpc01lcnNlbm5lUHJpbWVOdW1iZXI6IHtcbiAgICBqYTogXCLjg6Hjg6vjgrvjg7Pjg4zntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc0NvbXBvc2l0ZU51bWJlcjoge1xuICAgIGphOiBcIuWQiOaIkOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzSGFyc2hhZE51bWJlcjoge1xuICAgIGphOiBcIuODj+ODvOOCt+ODo+ODg+ODieaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzWnVja2VybWFuTnVtYmVyOiB7XG4gICAgamE6IFwi44K644OD44Kr44O844Oe44Oz5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNSZXB1bml0TnVtYmVyOiB7XG4gICAgamE6IFwi44Os44OU44Ol44OL44OD44OI5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgZ2V0SW52ZXJzaW9uTnVtYmVyOiB7XG4gICAgamE6IFwi6Lui5YCS5pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmVjaXByb2NhbDoge1xuICAgIGphOiBcIumAhuaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGdldFJldmVyc2U6IHtcbiAgICBqYTogXCLmlbDjga7pgIbpoIbjga7lj5blvpdcIlxuICB9LFxuICBnZXRSYW5kb21OdW1iZXJCeUxpbmVhckNvbmdydWVudGlhbEdlbmVyYXRvcnM6IHtcbiAgICBqYTogXCLnt5rlvaLlkIjlkIzms5Xjgafjga7nlpHkvLzkubHmlbDlj5blvpdcIlxuICB9LFxuICBnZXRSYW5kb21OdW1iZXJCeU1pZGRsZVNxdWFyZU1ldGhvZDoge1xuICAgIGphOiBcIuW5s+aWueaOoeS4reazleOBp+OBrueWkeS8vOS5seaVsOWPluW+l1wiXG4gIH0sXG4gIGdldFJhbmRvbU51bWJlckJ5TGluZWFyRmVlZGJhY2tTaGlmdFJlZ2lzdGVyOiB7XG4gICAgamE6IFwi57ea5b2i5biw6YKE44K344OV44OI44Os44K444K544K/44Gr44KI44KL55aR5Ly85Lmx5pWw5Y+W5b6XXCJcbiAgfSxcbiAgaXNTb3BoaWVHZXJtYWluUHJpbWU6IHtcbiAgICBqYTogXCLjgr3jg5XjgqPjg7zjgrjjgqfjg6vjg57jg7PntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc1NhZmVQcmltZToge1xuICAgIGphOiBcIuWuieWFqOe0oOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGdldEZlcm1hdE51bWJlcjoge1xuICAgIGphOiBcIuODleOCp+ODq+ODnuODvOaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGlzRmVybWF0TnVtYmVyOiB7XG4gICAgamE6IFwi44OV44Kn44Or44Oe44O85pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNGZXJtYXRQcmltZToge1xuICAgIGphOiBcIuODleOCp+ODq+ODnuODvOe0oOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGdldEN1bGxlbk51bWJlcjoge1xuICAgIGphOiBcIuOCq+ODrOODs+aVsOOBruWPluW+l1wiXG4gIH0sXG4gIGlzQ3VsbGVuTnVtYmVyOiB7XG4gICAgamE6IFwi44Kr44Os44Oz5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNDdWxsZW5QcmltZToge1xuICAgIGphOiBcIuOCq+ODrOODs+e0oOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGdldFByb3RoTnVtYmVyOiB7XG4gICAgamE6IFwi44OX44Ot44K55pWw44Gu5Y+W5b6XXCJcbiAgfSxcbiAgbWFrZVByb3RoTnVtYmVyczoge1xuICAgIGphOiBcIuODl+ODreOCueaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIGlzUHJvdGhOdW1iZXI6IHtcbiAgICBqYTogXCLjg5fjg63jgrnmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc1Byb3RoUHJpbWU6IHtcbiAgICBqYTogXCLjg5fjg63jgrnntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBtYWtlUGllcnBvbnROdW1iZXI6IHtcbiAgICBqYTogXCLjg5TjgqLjg53jg7Pjg4jmlbDjga7nlJ/miJBcIlxuICB9LFxuICBtYWtlUGllcnBvbnRQcmltZXM6IHtcbiAgICBqYTogXCLjg5TjgqLjg53jg7Pjg4jntKDmlbDjga7nlJ/miJBcIlxuICB9LFxuICBpc1BpZXJwb250UHJpbWU6IHtcbiAgICBqYTogXCLjg5TjgqLjg53jg7Pjg4jntKDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxufTtcblxuY29uc3Qgd2hhdElzID0gZnVuY3Rpb24oe25hbWU9XCJcIiwgbGFuZz1cImphXCJ9OiB7IG5hbWU6IHN0cmluZywgbGFuZzogc3RyaW5nfSk6IHN0cmluZ3tcbiAgaWYoIW5hbWUpe1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgbGV0IHRhcmdldCA9IHV0aWxzW25hbWVdO1xuICBpZighdGFyZ2V0KXtcbiAgICB0YXJnZXQgPSBjb3JlW25hbWVdO1xuICB9XG5cbiAgY29uc3QgZXhpc3RzID0gdGFyZ2V0ID8gdHJ1ZSA6IGZhbHNlO1xuICBpZighZXhpc3RzKXtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IG1hcFtuYW1lXTtcbiAgaWYocmVzICYmIHJlc1tsYW5nXSl7XG4gICAgcmV0dXJuIHJlc1tsYW5nXTtcbiAgfVxuICBjb25zdCBvdGhlcl9sYW5nID0gT2JqZWN0LmtleXMocmVzKVswXTtcbiAgaWYob3RoZXJfbGFuZyl7XG4gICAgcmV0dXJuIHJlc1tvdGhlcl9sYW5nXTtcbiAgfVxuXG4gIHJldHVybiBcIlwiO1xuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdoYXRJczsiLCJpbXBvcnQgeyBTdXVOdW1iZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5cblxuY29uc3QgbWVhc3VyZW1lbnQgPSBhc3luYyBmdW5jdGlvbihmdW5jLCAuLi5hcmdzKXtcbiAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgY29uc29sZS5sb2coYXJncyk7XG4gIGxldCByZXMgPSBudWxsO1xuICB0cnl7XG4gICAgaWYoQXJyYXkuaXNBcnJheShhcmdzKSl7XG4gICAgICBpZihmdW5jLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXN5bmNGdW5jdGlvblwiKXtcbiAgICAgICAgcmVzID0gYXdhaXQgZnVuYyguLi5hcmdzKTtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXMgPSBmdW5jKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1lbHNlIGlmKGFyZ3MgIT09IG51bGwgJiYgdHlwZW9mIGFyZ3MgPT09IFwib2JqZWN0XCIpe1xuICAgICAgaWYoZnVuYy5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFzeW5jRnVuY3Rpb25cIil7XG4gICAgICAgIHJlcyA9IGF3YWl0IGZ1bmMoYXJncyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzID0gZnVuYyhhcmdzKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGlmKGZ1bmMuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBc3luY0Z1bmN0aW9uXCIpe1xuICAgICAgICByZXMgPSBhd2FpdCBmdW5jKGFyZ3MpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlcyA9IGZ1bmMoYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9Y2F0Y2goZSl7XG4gICAgY29uc29sZS5sb2coZSk7XG4gIH1cblxuICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGNvbnN0IGxlbmd0aE9mVGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQ6IHJlcyxcbiAgICBsZW5ndGhPZlRpbWVNUzogbGVuZ3RoT2ZUaW1lLFxuICB9O1xuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IG1lYXN1cmVtZW50O1xuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmltcG9ydCB7IFN1dU51bWJlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IHJhbmRvbTphbnkgPSB7fTtcclxuXHJcbmNvbnN0IHNlZWRzOmFueSA9IHt9O1xyXG5cclxuY29uc3QgZ2V0U2VlZCA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gc2VlZHNbbmFtZV07XHJcbn07XHJcblxyXG5jb25zdCBzZXRTZWVkID0gKHNlZWQ6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgc2VlZHNbbmFtZV0gPSBzZWVkO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0T3JTZXRTZWVkID0gKHNlZWQ6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiBcclxuICBpZihzZWVkKXtcclxuICAgIHNlZWRzW25hbWVdID0gc2VlZDtcclxuICB9ZWxzZXtcclxuICAgIHNlZWQgPSBzZWVkc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWVkO1xyXG59O1xyXG5cclxubGV0IHJlZ2lzdGVyMSA9IDB4MTExMTtcclxubGV0IHJlZ2lzdGVyMiA9IDB4MTExMTtcclxuY29uc3QgbGZzciA9IChzZWVkKSA9PiB7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgcmVnaXN0ZXIxLnRvU3RyaW5nKDIpKVxyXG4gIFxyXG4gIGlmKHNlZWQpe1xyXG4gICAgY29uc29sZS5sb2coXCJzZWVkXCIsIHNlZWQudG9TdHJpbmcoMikpXHJcbiAgICByZWdpc3RlcjEgPSAweGZmZmYgJiBzZWVkO1xyXG4gICAgcmVnaXN0ZXIyID0gMHhmZmZmICYgc2VlZDtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIxXCIsIHJlZ2lzdGVyMS50b1N0cmluZygyKSlcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIyXCIsIHJlZ2lzdGVyMi50b1N0cmluZygyKSlcclxuICB9XHJcbiAgbGV0IGJpdDEgPSBzZWVkICYgMHhmZmZmO1xyXG4gIGxldCBiaXQyID0gc2VlZCAmIDB4ZmZmZjtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQxLnRvU3RyaW5nKDIpKVxyXG4gIGNvbnN0IHJlczEgPSAocmVnaXN0ZXIxICYgMHgwMDAxKTtcclxuICBjb25zb2xlLmxvZyhcInJlczFcIiwgcmVzMS50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMyID0gcmVzMSBeICgocmVnaXN0ZXIxICYgMHgwMDA0KSA+PiAyKTtcclxuICBjb25zb2xlLmxvZyhcInJlczJcIiwgcmVzMi50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMzID0gcmVzMiBeICgocmVnaXN0ZXIxICYgMHgwMDA4KSA+PiAzKTtcclxuICBjb25zb2xlLmxvZyhcInJlczNcIiwgcmVzMy50b1N0cmluZygyKSlcclxuICBiaXQxID0gcmVzMyBeICgocmVnaXN0ZXIxICYgMHgwMDIwKSA+PiA1KTtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQxLnRvU3RyaW5nKDIpKVxyXG4gIGJpdDIgPSAocmVnaXN0ZXIyICYgMHgwMDAxKSBeXHJcbiAgICAoKHJlZ2lzdGVyMiAmIDB4MDAwNCkgPj4gMikgXlxyXG4gICAgKChyZWdpc3RlcjIgJiAweDAwMDgpID4+IDMpIF5cclxuICAgICgocmVnaXN0ZXIyICYgMHgwMDIwKSA+PiA1KTtcclxuICAvLyBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcblxyXG4gIHJlZ2lzdGVyMSA9IChyZWdpc3RlcjEgPj4gMSkgfCAoYml0MSA8PCAxNSk7XHJcbiAgcmVnaXN0ZXIyID0gKHJlZ2lzdGVyMiA+PiAxKSB8IChiaXQyIDw8IDE1KTtcclxuICAvLyBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIsIHNlZWQudG9TdHJpbmcoMikpXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlZ2lzdGVyMTogcmVnaXN0ZXIxLFxyXG4gICAgcmVnaXN0ZXIyOiByZWdpc3RlcjIsXHJcbiAgICBiaXQxOiBiaXQxLFxyXG4gICAgYml0MjogYml0MlxyXG4gIH07XHJcblxyXG59XHJcblxyXG5cclxucmFuZG9tLmdldE5vdFJhbmRvbU51bWJlciA9IChzZWVkOiBhbnkpID0+IHtcclxuICBjb25zdCBteU5hbWUgPSBcImdldE5vdFJhbmRvbU51bWJlclwiO1xyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcbiAgaWYoIXN0b3JlZFNlZWQpe1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZSBzZWVkIHBhcmFtZXRlclwiKTtcclxuICB9XHJcbiAgc2V0U2VlZChzdG9yZWRTZWVkLCBteU5hbWUpO1xyXG4gIHJldHVybiBjb3JlLmdldFN1dU51bWJlcihzdG9yZWRTZWVkKTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXIgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbnVtID0gTWF0aC5yYW5kb20oKTtcclxuICByZXR1cm4gY29yZS5nZXRTdXVOdW1iZXIobnVtKTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXJCeU1pZGRsZVNxdWFyZU1ldGhvZCA9IChzZWVkOiBhbnkpID0+IHtcclxuICBjb25zdCBteU5hbWUgPSBcImdldFJhbmRvbU51bWJlckJ5TWlkZGxlU3F1YXJlTWV0aG9kXCI7XHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuICBjb25zdCBmaXJzdCA9IGNvcmUuZ2V0U3V1TnVtYmVyKHN0b3JlZFNlZWQgPyBzdG9yZWRTZWVkIDogXCIxMjM0XCIpO1xyXG4gIGNvbnN0IHJlcyA9IHV0aWxzLnNxdWFyZShmaXJzdCk7XHJcbiAgbGV0IHNlY29uZCA9IHJlcy5hcnJheS5zbGljZSgyLCA2KS5qb2luKFwiXCIpO1xyXG4gIGlmKHJlcy5hcnJheS5sZW5ndGggPT09IDcpe1xyXG4gICAgc2Vjb25kID0gcmVzLmFycmF5LnNsaWNlKDEsIDUpLmpvaW4oXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IHNlY29uZG51bSA9IGNvcmUuZ2V0U3V1TnVtYmVyKHNlY29uZCk7XHJcbiAgc2V0U2VlZChzZWNvbmQsIG15TmFtZSk7XHJcbiAgcmV0dXJuIHNlY29uZG51bTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXJCeUxpbmVhckNvbmdydWVudGlhbEdlbmVyYXRvcnMgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXRSYW5kb21OdW1iZXJCeUxpbmVhckNvbmdydWVudGlhbEdlbmVyYXRvcnNcIjtcclxuICBjb25zdCBhID0gY29yZS5nZXRTdXVOdW1iZXIoXCIzXCIpO1xyXG4gIGNvbnN0IGIgPSBjb3JlLmdldFN1dU51bWJlcihcIjVcIik7XHJcbiAgY29uc3QgbSA9IGNvcmUuZ2V0U3V1TnVtYmVyKFwiMTNcIik7XHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuICBjb25zdCBuZXdfc2VlZCA9IGNvcmUuZ2V0U3V1TnVtYmVyKHN0b3JlZFNlZWQgPyBzdG9yZWRTZWVkIDogXCI4XCIpO1xyXG4gIHNldFNlZWQobmV3X3NlZWQsIG15TmFtZSk7XHJcbiAgLy8gKGEgeCBzZWVkICsgYikgbW9kIG1cclxuICBjb25zdCByZXMxID0gY29yZS5tdWx0aXBsZShhLCBuZXdfc2VlZCk7XHJcbiAgY29uc3QgcmVzMiA9IGNvcmUuYWRkKHJlczEsIGIpO1xyXG4gIGNvbnN0IHJlczMgPSBjb3JlLm1vZHVsbyhyZXMyLCBtKTtcclxuICByZXR1cm4gcmVzMztcclxufTtcclxuXHJcbmxldCByZWdpc3RlciA9IDB4MTExMTtcclxucmFuZG9tLmdldFJhbmRvbU51bWJlckJ5TGluZWFyRmVlZGJhY2tTaGlmdFJlZ2lzdGVyID0gKHNlZWQpID0+IHtcclxuXHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXRSYW5kb21OdW1iZXJCeUxpbmVhckZlZWRiYWNrU2hpZnRSZWdpc3RlclwiO1xyXG4gIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgcmVnaXN0ZXIudG9TdHJpbmcoMikpXHJcbiAgXHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuXHJcbiAgaWYoIXN0b3JlZFNlZWQgJiYgc2VlZCl7XHJcbiAgICBzZXRTZWVkKHNlZWQsIG15TmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlZWRcIiwgc2VlZC50b1N0cmluZygyKSlcclxuICAgIHJlZ2lzdGVyID0gMHhmZmZmICYgc2VlZDtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIxXCIsIHJlZ2lzdGVyLnRvU3RyaW5nKDIpKVxyXG4gIH1cclxuICBsZXQgYml0ID0gc2VlZCAmIDB4ZmZmZjtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMSA9IChyZWdpc3RlciAmIDB4MDAwMSk7XHJcbiAgY29uc29sZS5sb2coXCJyZXMxXCIsIHJlczEudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMiA9IHJlczEgXiAoKHJlZ2lzdGVyICYgMHgwMDA0KSA+PiAyKTtcclxuICBjb25zb2xlLmxvZyhcInJlczJcIiwgcmVzMi50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMzID0gcmVzMiBeICgocmVnaXN0ZXIgJiAweDAwMDgpID4+IDMpO1xyXG4gIGNvbnNvbGUubG9nKFwicmVzM1wiLCByZXMzLnRvU3RyaW5nKDIpKVxyXG4gIGJpdCA9IHJlczMgXiAoKHJlZ2lzdGVyICYgMHgwMDIwKSA+PiA1KTtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcbiAgcmVnaXN0ZXIgPSAocmVnaXN0ZXIgPj4gMSkgfCAoYml0IDw8IDE1KTtcclxuXHJcbiAgc2V0U2VlZChyZWdpc3RlciwgbXlOYW1lKTtcclxuXHJcbiAgcmV0dXJuIHJlZ2lzdGVyO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tOyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmVcIjtcblxuaW1wb3J0IHsgU3V1TnVtYmVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5jb25zdCB1dGlsczphbnkgPSB7fTtcblxudXRpbHMudHMgPSAoKSA9PiB7cmV0dXJuIFwidHNcIn07XG5cbnV0aWxzLmdldE51bWJlciA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbn07XG5cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBjb25zdCBjID0gY29yZS5jbG9uZShuKTtcbiAgaWYoIWMpe1xuICAgIGNvbnN0IHMgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcobik7XG4gICAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKHMpO1xuICB9XG4gIHJldHVybiBjO1xufTtcblxudXRpbHMuZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXRMYXJnZShhLCBiKTtcbn07XG5cbnV0aWxzLmdldFNtYWxsID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0U21hbGwoYSwgYik7XG59O1xuXG51dGlscy5pc1NtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzU21hbGwoYSwgYik7XG59XG51dGlscy5pc0xhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzTGFyZ2UoYSwgYik7XG59XG5cbnV0aWxzLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbntcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbChhLCBiKTtcbn1cblxudXRpbHMuZ2V0WmVybyA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0WmVybygpO1xufTtcblxudXRpbHMuZ2V0T25lID0gZnVuY3Rpb24oKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbn07XG5cbnV0aWxzLmlzWmVybyA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc1plcm8obik7XG59XG51dGlscy5pc09uZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc09uZShuKTtcbn1cblxudXRpbHMuc3F1YXJlID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUubXVsdGlwbGljYXRpb24obiwgbik7XG59O1xuXG51dGlscy5nZXRBYnNvbHV0ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgY29uc3QgbnVtOiBhbnkgPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKG51bSBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICByZXR1cm4gbnVtO1xuICB9XG4gIGxldCBjbG9uZSA9IGNvcmUuY2xvbmUobnVtKTtcbiAgaWYoY2xvbmUubmVnYXRpdmUpe1xuICAgIGNsb25lID0gdXRpbHMubWFrZVBvc2l0aXZlKGNsb25lKTtcbiAgfVxuICByZXR1cm4gY2xvbmU7XG59O1xuXG51dGlscy5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihiYXNlLCBleHBvbmVudCk6IFN1dU51bWJlcntcbiAgY29uc3QgYiA9IHV0aWxzLmdldE51bWJlcihiYXNlKTtcbiAgY29uc3QgZXhwID0gdXRpbHMuZ2V0TnVtYmVyKGV4cG9uZW50KTtcblxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChleHApKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiTm90IHN1cHBvcnRlZCBpZiBleHBvbmVudCBpcyBkZWNpbWFsXCIsIHBhcmFtZXRlcjogW2V4cG9uZW50XX0pO1xuICB9XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihleHApKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiRXhwb25lbnQgbXVzdCBiZSBpbnRlZ2VyXCIsIHBhcmFtZXRlcjogW2V4cG9uZW50XX0pO1xuICB9XG4gIFxuICBpZih1dGlscy5pc1plcm8oZXhwKSl7XG4gICAgcmV0dXJuIGNvcmUuZ2V0T25lKCk7XG4gIH1cbiAgaWYodXRpbHMuaXNPbmUoZXhwKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBsZXQgbXVsdGkgPSB0cnVlO1xuICBpZihjb3JlLmlzU21hbGwoZXhwLCBjb3JlLmdldFplcm8oKSkpe1xuICAgIG11bHRpID0gZmFsc2U7XG4gIH1cblxuICBsZXQgY291bnQgPSBjb3JlLmdldE9uZSgpO1xuICBjb25zdCBleHBfYWJzID0gdXRpbHMuZ2V0QWJzb2x1dGUoZXhwKTtcbiAgY29uc3QgZ2V0Qm9vbCA9IChjb3VudCkgPT4ge1xuICAgIHJldHVybiBjb3JlLmlzU21hbGwoY291bnQsIGV4cF9hYnMpO1xuICB9XG4gIGxldCByZXMgPSBiO1xuICBsZXQgYm9vbCA9IGdldEJvb2woY291bnQpO1xuICB3aGlsZShib29sKXtcbiAgICBpZihtdWx0aSl7XG4gICAgICByZXMgPSBjb3JlLm11bHRpcGxlKHJlcywgYik7XG4gICAgfWVsc2V7XG4gICAgICByZXMgPSBjb3JlLmRpdmlkZShyZXMsIGIpO1xuICAgIH1cbiAgICBjb3VudCA9IGNvcmUuYWRkKGNvdW50LCBcIjFcIik7XG4gICAgYm9vbCA9IGdldEJvb2woY291bnQpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG51dGlscy5nZXRJbnRlZ2VyID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgbGV0IHN0ciA9IFwiXCI7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBuLmRlY2ltYWxfaW5kZXg7IGkrKyl7XG4gICAgY29uc3QgcyA9IFN0cmluZyhuLmFycmF5W2ldKTtcbiAgICBzdHIgPSBzdHIgKyBzO1xuICB9XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihzdHIpO1xuICByZXR1cm4gbnVtO1xufTtcblxudXRpbHMuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLmdldERlY2ltYWwobik7XG59O1xuXG51dGlscy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwobik7XG4gIGNvbnN0IGlzX3plcm8gPSB1dGlscy5pc1plcm8oZGVjaW1hbCk7XG4gIGlmKGlzX3plcm8gJiYgIW4ubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmluY2x1ZGVEZWNpbWFsID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKGRlY2ltYWwpO1xuICBpZihpc196ZXJvKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG51dGlscy5pc05lZ2F0aXZlID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGlmKHV0aWxzLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIHJldHVybiBuXy5uZWdhdGl2ZTtcbn07XG5cbnV0aWxzLmlzUG9zaXRpdmUgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgbl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgcmV0dXJuICFuXy5uZWdhdGl2ZTtcbn07XG5cbnV0aWxzLm5lZ2F0ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IG51bSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICBpZihudW0pe1xuICAgIG51bS5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn07XG5cbnV0aWxzLm1ha2VQb3NpdGl2ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IG51bSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICBpZihudW0pe1xuICAgIG51bS5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBudW07XG59O1xuXG5cbnV0aWxzLmdldE5leHQgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5hZGQobiwgXCIxXCIpO1xufTtcblxudXRpbHMuZ2V0UHJldiA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLnN1YnRyYWN0KG4sIFwiMVwiKTtcbn07XG5cbnV0aWxzLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwobik7XG4gIGlmKHV0aWxzLmlzRXF1YWwoZGVjaW1hbCwgXCIwXCIpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG5cbn07XG5cblxudXRpbHMuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGlmKHV0aWxzLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhuLCBcIjJcIik7XG5cbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhyZXMpO1xuICBpZihpc196ZXJvKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc09kZE51bWJlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGNvcmUubW9kdWxvKG4sIFwiMlwiKTtcblxuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKHJlcyk7XG4gIGlmKCFpc196ZXJvKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbnV0aWxzLmdldERpdmlzb3JzID0gZnVuY3Rpb24obik6IFN1dU51bWJlcltdIHwgRXJyb3J7XG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBpbnRlZ2VyXCIsIHBhcmFtZXRlcjogW25dfSk7XG4gIH1cbiAgY29uc3QgYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICBjb25zdCBudW06IFN1dU51bWJlciA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZighbnVtKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYodXRpbHMuaXNOYXR1cmFsTnVtYmVyKG51bSkpe1xuICAgIGlmKGNvcmUuaXNPbmUobnVtKSl7XG4gICAgICBhcnIucHVzaChudW0pXG4gICAgfWVsc2V7XG4gICAgICBmb3IobGV0IGkgPSBjb3JlLmdldE9uZSgpOyBjb3JlLmlzRXF1YWwobnVtLCBpKSB8fCBjb3JlLmlzTGFyZ2UobnVtLCBpKTsgaSA9IGNvcmUuYWRkKGksIFwiMVwiKSl7XG4gICAgICAgIGNvbnN0IHJlcz0gY29yZS5kaXZpc2lvbihudW0sIGkpO1xuICAgICAgICBpZighdXRpbHMuaXNOYXR1cmFsTnVtYmVyKHJlcykpe1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IHJlcy5yZW1haW5kZXI7XG4gICAgICAgIGlmKGNvcmUuaXNaZXJvKHJlbWFpbmRlcikpe1xuICAgICAgICAgIGFyci5wdXNoKHV0aWxzLmdldE51bWJlcihpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbnV0aWxzLmNvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlcltdIHwgRXJyb3J7XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgaWYoIWEgJiYgYSAhPT0gMCl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBpZighYiAmJiBiICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgdHJ5e1xuICAgIGNvbnN0IGFfOiBTdXVOdW1iZXIgPSB1dGlscy5nZXROdW1iZXIoYSk7XG4gICAgY29uc3QgYl86IFN1dU51bWJlciA9IHV0aWxzLmdldE51bWJlcihiKTtcbiAgICBcbiAgICBjb25zdCBhX2Rpdmlzb3JzOiBTdXVOdW1iZXJbXSA9IHV0aWxzLmdldERpdmlzb3JzKGFfKTtcbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4gYV9kaXZpc29ycztcbiAgICB9XG4gICAgY29uc3QgYl9kaXZpc29yczogU3V1TnVtYmVyW10gPSB1dGlscy5nZXREaXZpc29ycyhiXyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFfZGl2aXNvcnMubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgYV9uOiBTdXVOdW1iZXIgPSBhX2Rpdmlzb3JzW2ldO1xuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGJfZGl2aXNvcnMubGVuZ3RoOyBqKyspe1xuICAgICAgICBjb25zdCBiX246IFN1dU51bWJlciA9IGJfZGl2aXNvcnNbal07XG4gICAgICAgIGlmKGNvcmUuaXNFcXVhbChhX24sIGJfbikpe1xuICAgICAgICAgIGFyci5wdXNoKGFfbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmdyZWF0ZXN0Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgdHJ5e1xuICAgIGNvbnN0IGFyciA9IHV0aWxzLmNvbW1vbkRpdmlzb3JzKGEsIGIpO1xuICAgIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxufTtcblxudXRpbHMuY29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiLCBsaW1pdCk6IFN1dU51bWJlcltdIHwgRXJyb3J7XG5cbiAgY29uc3QgbGltaXRfbGVuZ3RoID0gbGltaXQgPyBsaW1pdCA6IDEwO1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIGlmKCFhICYmIGEgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYoIWIgJiYgYiAhPT0gMCl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhXyA9IHV0aWxzLmdldE51bWJlcihhKTtcbiAgICBjb25zdCBiXyA9IHV0aWxzLmdldE51bWJlcihiKTtcblxuICAgIGlmKGNvcmUuaXNFcXVhbChhXywgYl8pKXtcbiAgICAgIGFyci5wdXNoKGFfKTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnI6IFN1dU51bWJlcltdID0gW107XG4gICAgY29uc3QgYl9hcnI6IFN1dU51bWJlcltdID0gW107XG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSBsaW1pdF9sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBhX251bSA9IGNvcmUubXVsdGlwbGUoYV8sIGkpO1xuICAgICAgYV9hcnIucHVzaChhX251bSk7XG4gICAgfVxuICAgIGZvcihsZXQgaiA9IDE7IGogPD0gbGltaXRfbGVuZ3RoOyBqKyspe1xuICAgICAgY29uc3QgYl9udW0gPSBjb3JlLm11bHRpcGxlKGJfLCBqKTtcbiAgICAgIGJfYXJyLnB1c2goYl9udW0pO1xuICAgIH1cblxuICAgIGFfYXJyLmZvckVhY2goYV9uID0+IHtcbiAgICAgIGNvbnN0IHRndCA9IGJfYXJyLmZpbmQoYl9uID0+IGNvcmUuaXNFcXVhbChhX24sIGJfbikpO1xuICAgICAgaWYodGd0KXtcbiAgICAgICAgYXJyLnB1c2godGd0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGIsIGxpbWl0XX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiLCBsaW1pdF19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmxlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiLCBsaW1pdCk6IFN1dU51bWJlciB7XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSB1dGlscy5jb21tb25NdWx0aXBsZShhLCBiLCBsaW1pdCk7XG4gIHJldHVybiBhcnJbMF07XG59O1xuXG5cbmNvbnN0IGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbiA9IGZ1bmN0aW9uKHthcnJheSwgbGltaXR9KTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG5cbiAgY29uc3QgbWF4ID0gbGltaXQgPyBsaW1pdCA6IDEwMDtcblxuICBjb25zdCBpdGVtc19sZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgICBpZihhcnJheS5sZW5ndGggPj0gbWF4KXtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmdldE51bWJlcihcIjBcIik7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaXRlbXNfbGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIChpdGVtc19sZW5ndGggLSBpKTtcbiAgICAgICAgY29uc3QgbnVtID0gYXJyYXlbaW5kZXhdO1xuICAgICAgICByZXMgPSBjb3JlLmFkZChyZXMsIG51bSk7XG4gICAgICB9XG4gICAgICBhcnJheS5wdXNoKHJlcyk7XG4gICAgICByZXR1cm4gZnVuYyhhcnJheSk7XG4gICAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FycmF5LCBsaW1pdF19KVxuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2FycmF5LCBsaW1pdF19KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBmdW5jKGFycmF5KTtcbn07XG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkgPSBmdW5jdGlvbih7IGZpcnN0PVwiMFwiLCBsYXN0PVwiMVwiLCBsZW5ndGg9MiB9KTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgY29uc3QgYSA9IHV0aWxzLmdldE51bWJlcihmaXJzdCk7XG4gIGNvbnN0IGIgPSB1dGlscy5nZXROdW1iZXIobGFzdCk7XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgdHJ5e1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgdGd0ID0gYTtcbiAgICAgIGlmKGkgPT09IChsZW4gLTEpKXtcbiAgICAgICAgdGd0ID0gYjtcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKHRndCk7XG4gICAgfVxuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtmaXJzdCwgbGFzdCwgbGVuZ3RoXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtmaXJzdCwgbGFzdCwgbGVuZ3RoXX0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxudXRpbHMubWFrZUZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oZmlyc3Q9XCIwXCIsIGxhc3Q9XCIxXCIpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3QsIGxhc3QsIGxlbmd0aDogMn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlVHJpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogM30pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlVGV0cmFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogNH0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlUGVudGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogNX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlSGV4YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA2fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VIZXB0YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA3fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VPY3RhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDh9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZU5vbmFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogOX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlRGVjYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAxMH0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlVW5kZWNhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDExfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VEb2RlY2FuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMTJ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUljb3NhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDIwfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VMdWNhU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMlwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAyfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKGFycmF5KTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBpZighYXJyYXkgfHwgIUFycmF5LmlzQXJyYXkoYXJyYXkpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgQXJyYXkuXCIsIHBhcmFtZXRlcjogW2FycmF5XX0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcImFycmF5IGxlbmd0aCBpcyB6ZXJvXCIsIHBhcmFtZXRlcjogW2FycmF5XX0pO1xuICB9XG4gIGxldCBzdW0gPSBjb3JlLmdldFplcm8oKTtcbiAgaWYoQXJyYXkuaXNBcnJheShhcnJheSkpe1xuICAgIHRyeXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHN1bSA9IGNvcmUuYWRkKHN1bSwgYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthcnJheV19KVxuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2FycmF5XX0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxudXRpbHMuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oYXJyYXkpOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgaWYoIWFycmF5IHx8ICFBcnJheS5pc0FycmF5KGFycmF5KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIEFycmF5LlwiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB1dGlscy5nZXROdW1iZXIoYXJyYXlbMF0pO1xuICB9XG4gIGxldCByZXMgPSBhcnJheVswXTtcbiAgdHJ5e1xuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICByZXMgPSBjb3JlLm11bHRpcGxlKHJlcywgYXJyYXlbaV0pO1xuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyYXldfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2FycmF5XX0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxudXRpbHMuZGlnaXRTdW0gPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIGNvbnN0IG4gPSB1dGlscy5nZXROdW1iZXIobnVtKTtcbiAgaWYoIW4gfHwgIUFycmF5LmlzQXJyYXkobi5hcnJheSkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuICBsZXQgcmVzID0gY29yZS5nZXRaZXJvKCk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIHRyeXtcbiAgICByZXMgPSB1dGlscy5zdW1tYXRpb24obi5hcnJheSlcbiAgICByZXR1cm4gcmVzO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtudW1dfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW251bV19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLm1ha2VUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKG50aCk6IFN1dU51bWJlciB8IEVycm9ye1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG50aCk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pIHx8IHV0aWxzLmlzTmVnYXRpdmUobikgfHwgIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIiwgcGFyYW1ldGVyOiBbbnRoXX0pO1xuICB9XG4gIGNvbnN0IHJlczEgPSBjb3JlLm11bHRpcGxlKG4sIGNvcmUuYWRkKG4sIFwiMVwiKSk7XG4gIGNvbnN0IHJlczIgPSBjb3JlLmRpdmlkZShyZXMxLCBcIjJcIik7XG4gIHJldHVybiByZXMyO1xufTtcblxudXRpbHMubWFrZVByb25pY051bWJlciA9IGZ1bmN0aW9uKG50aCk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudGgpO1xuICBpZihjb3JlLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIGNvcmUuZ2V0WmVybygpO1xuICB9XG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobikgfHwgIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIiwgcGFyYW1ldGVyOiBbbnRoXX0pO1xuICB9XG4gIHRyeXtcbiAgICBjb25zdCAgcmVzID0gY29yZS5tdWx0aXBsZShuLCBjb3JlLmFkZChuLCBcIjFcIikpO1xuICAgIHJldHVybiByZXM7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW250aF19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbbnRoXX0pO1xuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZmFjdG9yaWFsID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuICBpZihjb3JlLmlzWmVybyhuKSB8fCAoY29yZS5pc09uZShuKSAmJiBjb3JlLmlzTGFyZ2UobiwgXCIwXCIpKSl7XG4gICAgcmV0dXJuIGNvcmUuZ2V0T25lKCk7XG4gIH1cblxuICBpZih1dGlscy5pc05lZ2F0aXZlKG4pIHx8ICF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuXG4gIGxldCBnbyA9IHRydWU7XG4gIGxldCB0ZW1wID0gbjtcbiAgbGV0IGN1cnJlbnQgPSBuO1xuICBjb25zdCBhcnIgPSBbdGVtcF07XG4gIHRyeXtcbiAgICB3aGlsZShnbyl7XG4gICAgICBjb25zdCB0YXJnZXQgPSBjb3JlLnN1YnRyYWN0KGN1cnJlbnQsIFwiMVwiKTtcbiAgICAgIGFyci5wdXNoKHRhcmdldCk7XG4gICAgICBjdXJyZW50ID0gdGFyZ2V0O1xuICAgICAgaWYoY29yZS5pc1NtYWxsKGN1cnJlbnQsIFwiMlwiKSl7XG4gICAgICAgIGdvID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1dGlscy5pbmZpbml0ZVByb2R1Y3QoYXJyKTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5tYWtlQXJpdGhtZXRpY1NlcXVlbmNlID0gZnVuY3Rpb24oZmlyc3QsIGVuZCwgZGlmZil7XG4gIGNvbnN0IGYgPSBjb3JlLmdldFN1dU51bWJlcihmaXJzdCk7XG4gIGNvbnN0IGUgPSBjb3JlLmdldFN1dU51bWJlcihlbmQpO1xuICBjb25zdCBkID0gZGlmZiA/IGNvcmUuZ2V0U3V1TnVtYmVyKGRpZmYpIDogY29yZS5nZXRPbmUoKTtcblxuICBpZih1dGlscy5pc0VxdWFsKGYsZSkgfHwgdXRpbHMuaXNMYXJnZShmLCBlKSl7XG4gICAgcmV0dXJuIFwiYWFcIjtcbiAgfVxuXG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcblxuICBsZXQgYm9vbCA9IHRydWU7XG4gIGxldCBudW0gPSBmO1xuICB3aGlsZShib29sKXtcbiAgICBpZih1dGlscy5pc0xhcmdlKG51bSxlKSl7XG4gICAgICBib29sID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgICBudW0gPSBjb3JlLmFkZChudW0sIGQpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBudW0xID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihudW0xKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzWmVybyhudW0xKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobnVtMSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc0V2ZW5OdW1iZXIobnVtMSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc0VxdWFsKG51bTEsIFwiMVwiKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBudW0yID0gY29yZS5hZGQobnVtMSwgXCIxXCIpO1xuXG4gIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgbGV0IG4gPSBudW0yO1xuICB3aGlsZSh0cnVlKXtcbiAgICBuID0gY29yZS5kaXZpc2lvbihuLCBcIjJcIik7XG4gICAgaWYoIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYodXRpbHMuaXNFcXVhbChuLCBcIjFcIikpe1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZih1dGlscy5pc0VxdWFsKG4sIFwiMlwiKSl7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKHV0aWxzLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG5cbn07XG5cbnV0aWxzLm1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuXG4gIGNvbnN0IG1heF8gPSB1dGlscy5nZXROdW1iZXIoMjUpO1xuXG4gIGlmKCFtYXggfHwgY29yZS5pc0xhcmdlKG1heCwgbWF4Xykpe1xuICAgIG1heCA9IG1heF87XG4gIH1cblxuICBtYXggPSBjb3JlLmFkZChtYXgsIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICBjb25zdCB0d28gPSB1dGlscy5nZXROdW1iZXIoMik7XG4gIGNvbnN0IGFycjpTdXVOdW1iZXJbXSAgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXROdW1iZXIoMCk7XG4gIGxldCBleCA9IHV0aWxzLmdldE51bWJlcigxKTtcbiAgXG4gIHdoaWxlKGNvcmUuaXNTbWFsbChleCwgbWF4KSl7XG4gICAgY3VycmVudCA9IHV0aWxzLmV4cG9uZW50aWF0ZSh0d28sZXgpO1xuICAgIGN1cnJlbnQgPSBjb3JlLnN1YnRyYWN0KGN1cnJlbnQsIHV0aWxzLmdldE51bWJlcigxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBjb3JlLmFkZChleCwgdXRpbHMuZ2V0TnVtYmVyKDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gdXRpbHMudHJpYWxEaXZpc2lvbiA9IGZ1bmN0aW9uKG4pe1xuLy8gICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4vLyB9O1xuXG51dGlscy5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgaWYodXRpbHMuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc09uZShudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pc0VxdWFsKG51bSwgXCIyXCIpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzRXZlbk51bWJlcihudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMFwiKSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByZXYgPSBjb3JlLnN1YnRyYWN0KG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gIGxldCBjdXJyZW50ID0gY29yZS5kaXZpc2lvbihwcmV2LCB1dGlscy5nZXROdW1iZXIoXCIyXCIpKTtcblxuICBsZXQgaXNfcHJpbWUgPSB0cnVlO1xuXG4gIHdoaWxlKGlzX3ByaW1lICYmIGNvcmUuaXNMYXJnZShjdXJyZW50LCB1dGlscy5nZXROdW1iZXIoXCIyXCIpKSl7XG5cbiAgICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhudW0sIGN1cnJlbnQpO1xuICAgIGlmKHV0aWxzLmlzWmVybyhyZXMpKXtcbiAgICAgIGlzX3ByaW1lID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY3VycmVudCA9IGNvcmUuc3VidHJhY3QoY3VycmVudCwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gIH1cblxuICByZXR1cm4gaXNfcHJpbWU7XG5cbn07XG5cbnV0aWxzLm1ha2VQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXhsZW5ndGgpe1xuICBjb25zdCBtYXhfbGVuZ3RoID0gdXRpbHMuZ2V0TnVtYmVyKDI1KTtcbiAgaWYoIW1heGxlbmd0aCB8fCBjb3JlLmlzTGFyZ2UobWF4bGVuZ3RoLCBtYXhfbGVuZ3RoKSl7XG4gICAgbWF4bGVuZ3RoID0gbWF4X2xlbmd0aDtcbiAgfVxuICBjb25zdCBhcnI6U3V1TnVtYmVyW10gPSBbXTtcbiAgbGV0IG51bSA9IHV0aWxzLmdldE51bWJlcihcIjBcIik7XG4gIGxldCBjb3VudCA9IHV0aWxzLmdldFplcm8oKTtcbiAgd2hpbGUoY29yZS5pc1NtYWxsKGNvdW50LCBtYXhsZW5ndGgpKXtcbiAgICBudW0gPSBjb3JlLmFkZChudW0sIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICAgIGlmKHV0aWxzLmlzUHJpbWVOdW1iZXIobnVtKSl7XG4gICAgICBhcnIucHVzaChudW0pO1xuICAgICAgY291bnQgPSB1dGlscy5nZXROdW1iZXIoYXJyLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodXRpbHMuaXNQcmltZU51bWJlcihuKSAmJiB1dGlscy5pc01lcnNlbm5lTnVtYmVyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc0NvbXBvc2l0ZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzT25lKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzRXZlbk51bWJlcihuKSl7XG4gICAgaWYodXRpbHMuaXNMYXJnZShuLCBcIjRcIikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzID0gdXRpbHMuaXNQcmltZU51bWJlcihudW0pO1xuXG4gIGlmKHJlcyBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodHlwZW9mIHJlcyA9PT0gXCJib29sZWFuXCIpe1xuICAgIHJldHVybiAhcmVzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmlzSGFyc2hhZE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgXCIwXCIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZGl2aXNvcnMgPSB1dGlscy5nZXREaXZpc29ycyhuKTtcblxuICBjb25zdCBkc3VtID0gdXRpbHMuZGlnaXRTdW0obik7XG5cbiAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGRpdmlzb3JzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBkID0gZGl2aXNvcnNbaV07XG4gICAgaWYodXRpbHMuaXNFcXVhbChkLCBkc3VtKSl7XG4gICAgICBib29sID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm9vbDtcbn07XG5cbnV0aWxzLmlzWnVja2VybWFuTnVtYmVyID0gZnVuY3Rpb24obil7XG5cbiAgbGV0IHJlcyA9IGZhbHNlO1xuXG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIFxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuXG4gIGNvbnN0IHByb2R1Y3QgPSB1dGlscy5pbmZpbml0ZVByb2R1Y3QobnVtLmFycmF5KTtcbiAgY29uc3QgZGl2aXNvcnMgPSB1dGlscy5nZXREaXZpc29ycyhuKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgZGl2aXNvcnMubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGQgPSBkaXZpc29yc1tpXTtcbiAgICBpZih1dGlscy5pc0VxdWFsKHByb2R1Y3QsIGQpKXtcbiAgICAgIHJlcyA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbnV0aWxzLmlzUmVwdW5pdE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgcmVzID0gZmFsc2U7XG5cbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc0VxdWFsKFwiMFwiKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZih1dGlscy5pc05lZ2F0aXZlKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IGFyciA9IG51bS5hcnJheTtcbiAgcmVzID0gdHJ1ZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyW2ldO1xuICAgIGlmKGVsbSAhPT0gMSl7XG4gICAgICByZXMgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBtYWtlU29waGllR2VybWFuUHJpbWVBbmRTYWZlUHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc2FmZV9wcmltZV9leHBlY3RlZCA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgbnVtMSA9IGNvcmUubXVsdGlwbGUoc2FmZV9wcmltZV9leHBlY3RlZCwgXCIyXCIpO1xuICBjb25zdCBzb3BoaWVfZ2VybWFuX2V4cGVjdGVkID0gY29yZS5hZGQobnVtMSwgXCIxXCIpO1xuXG4gIGlmKHV0aWxzLmlzUHJpbWVOdW1iZXIoc2FmZV9wcmltZV9leHBlY3RlZCkgJiYgdXRpbHMuaXNQcmltZU51bWJlcihzb3BoaWVfZ2VybWFuX2V4cGVjdGVkKSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNvcGhpZUdlcm1haW5QcmltZTogc2FmZV9wcmltZV9leHBlY3RlZCxcbiAgICAgIHNhZmVQcmltZTogc29waGllX2dlcm1hbl9leHBlY3RlZCxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc29waGllR2VybWFpblByaW1lOiBudWxsLFxuICAgIHNhZmVQcmltZTogbnVsbCxcbiAgfTtcblxufTtcblxudXRpbHMuaXNTb3BoaWVHZXJtYWluUHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgeyBzb3BoaWVHZXJtYWluUHJpbWUsIHNhZmVQcmltZSB9ID0gbWFrZVNvcGhpZUdlcm1hblByaW1lQW5kU2FmZVByaW1lKG4pO1xuICBpZihzb3BoaWVHZXJtYWluUHJpbWUgJiYgc2FmZVByaW1lKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc1NhZmVQcmltZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0xID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBjb25zdCBudW0yID0gY29yZS5zdWJ0cmFjdChudW0xLCBcIjFcIik7XG4gIGNvbnN0IG51bTMgPSBjb3JlLmRpdmlzaW9uKG51bTIsIFwiMlwiKTtcbiAgY29uc3QgeyBzb3BoaWVHZXJtYWluUHJpbWUsIHNhZmVQcmltZSB9ID0gbWFrZVNvcGhpZUdlcm1hblByaW1lQW5kU2FmZVByaW1lKG51bTMpO1xuXG4gIGlmKHNvcGhpZUdlcm1haW5QcmltZSAmJiBzYWZlUHJpbWUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcblxufTtcblxuY29uc3Qgc29ydCA9IGZ1bmN0aW9uKGFycmF5OiBbXSwgb3JkZXI/OiBcImFzY1wiIHwgXCJkZXNjXCIpe1xuXG4gIGNvbnN0IG5ld19hcnIgPSBbLi4uYXJyYXldO1xuXG4gIGNvbnN0IGFzYyA9IChhX24sIGJfbikgPT4ge1xuICAgIGlmKGFfbiA8IGJfbil7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfWVsc2UgaWYoYV9uID4gYl9uKXtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBkZXNjID0gKGFfbiwgYl9uKSA9PiB7XG4gICAgaWYoYV9uIDwgYl9uKXtcbiAgICAgIHJldHVybiAxO1xuICAgIH1lbHNlIGlmKGFfbiA+IGJfbil7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIG5ld19hcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFfbiA9IE51bWJlcihhKTtcbiAgICBjb25zdCBiX24gPSBOdW1iZXIoYik7XG5cbiAgICBpZihvcmRlciA9PT0gXCJhc2NcIil7XG4gICAgICByZXR1cm4gYXNjKGFfbiwgYl9uKTtcbiAgICB9ZWxzZSBpZihvcmRlciA9PT0gXCJkZXNjXCIpe1xuICAgICAgcmV0dXJuIGRlc2MoYV9uLCBiX24pO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGFzYyhhX24sIGJfbilcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3X2FycjtcblxufTtcblxudXRpbHMuZ2V0SW52ZXJzaW9uTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGxldCBjb3VudCA9IHV0aWxzLmdldFplcm8oKTtcblxuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBcbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShudW0pKXtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBjb25zdCBvcmRlcmVkQXJyYXk6IGFueVtdID0gc29ydChudW0uYXJyYXksIFwiYXNjXCIpO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBudW0uYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG9yZGVyZWRfZWxtID0gb3JkZXJlZEFycmF5W2ldO1xuICAgIGNvbnN0IG9yaWdpbmFsX2VsbSA9IG51bS5hcnJheVtpXTtcbiAgICBjb25zdCBnYXAgPSBjb3JlLnN1YnRyYWN0KG9yZGVyZWRfZWxtLCBvcmlnaW5hbF9lbG0pO1xuICAgIGlmKHV0aWxzLmlzTmVnYXRpdmUoZ2FwKSl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYodXRpbHMuaXNaZXJvKGdhcCkpe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvdW50ID0gY29yZS5hZGQoY291bnQsIGdhcCk7XG4gIH1cblxuICByZXR1cm4gY291bnQ7XG5cbn07XG5cblxudXRpbHMuZ2V0UmVjaXByb2NhbCA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgcmVzID0gbnVsbDtcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGlmKHV0aWxzLmlzT25lKG51bSkpe1xuICAgIHJldHVybiB1dGlscy5nZXRPbmUoKTtcbiAgfVxuXG4gIHJlcyA9IGNvcmUuZGl2aXNpb24odXRpbHMuZ2V0T25lKCksIG51bSk7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxudXRpbHMuZ2V0UmV2ZXJzZSA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgcmVzID0gbnVsbDtcblxuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKG51bS5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaWYodXRpbHMuaXNTbWFsbChudW0sIHV0aWxzLmdldE51bWJlcihcIjEwXCIpKSl7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5ID0gWy4uLm51bS5hcnJheV0ucmV2ZXJzZSgpO1xuICBjb25zdCBzdHIgPSBhcnJheS5qb2luKFwiXCIpO1xuICBjb25zdCBuZXdfbnVtID0gdXRpbHMuZ2V0TnVtYmVyKHN0cik7XG5cbiAgcmV0dXJuIG5ld19udW07XG5cbn07XG5cbnV0aWxzLmdldEZlcm1hdE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IGJhc2UgPSB1dGlscy5nZXROdW1iZXIoXCIyXCIpO1xuICBjb25zdCBleCA9IHV0aWxzLmV4cG9uZW50aWF0ZShiYXNlLCBudW0pO1xuICBjb25zdCBvbmUgPSB1dGlscy5nZXRPbmUoKTtcbiAgY29uc3QgcmVzMSA9IHV0aWxzLmV4cG9uZW50aWF0ZShiYXNlLCBleCk7XG4gIGNvbnN0IHJlczIgPSBjb3JlLmFkZChyZXMxLCBvbmUpO1xuICByZXR1cm4gcmVzMjtcbn07XG5cbnV0aWxzLmlzRmVybWF0TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgbWF4ID0gNjtcbiAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgZiA9IHV0aWxzLmdldEZlcm1hdE51bWJlcihgJHtpfWApO1xuICAgIGlmKHV0aWxzLmlzRXF1YWwoZiwgbnVtKSl7XG4gICAgICBib29sID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm9vbDtcbn07XG5cbnV0aWxzLmlzRmVybWF0UHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc0Zlcm1hdE51bWJlcihudW0pICYmIHV0aWxzLmlzUHJpbWVOdW1iZXIpe1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuZ2V0Q3VsbGVuTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgYmFzZSA9IHV0aWxzLmdldE51bWJlcihcIjJcIik7XG4gIGNvbnN0IGV4ID0gdXRpbHMuZXhwb25lbnRpYXRlKGJhc2UsIG51bSk7XG4gIGNvbnN0IHJlczEgPSBjb3JlLm11bHRpcGxlKG51bSwgZXgpO1xuICBjb25zdCByZXMyID0gY29yZS5hZGQocmVzMSwgdXRpbHMuZ2V0T25lKCkpO1xuICByZXR1cm4gcmVzMjtcbn07XG5cbnV0aWxzLmlzQ3VsbGVuTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgY29uc3QgbWF4ID0gMjA7XG4gIGxldCBib29sID0gZmFsc2U7XG4gIGZvcihsZXQgaSA9IDA7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGYgPSB1dGlscy5nZXRDdWxsZW5OdW1iZXIoYCR7aX1gKTtcbiAgICBpZih1dGlscy5pc0VxdWFsKGYsIG51bSkpe1xuICAgICAgYm9vbCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvb2w7XG59O1xuXG51dGlscy5pc0N1bGxlblByaW1lID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgaWYodXRpbHMuaXNQcmltZU51bWJlcihudW0pICYmIHV0aWxzLmlzQ3VsbGVuTnVtYmVyKG51bSkpe1xuICAgIGJvb2wgPSB0cnVlO1xuICB9XG4gIHJldHVybiBib29sO1xufTtcblxudXRpbHMuZ2V0UHJvdGhOdW1iZXIgPSBmdW5jdGlvbihrLCBuKXtcbiAgY29uc3Qga19udW0gPSB1dGlscy5nZXROdW1iZXIoayk7XG4gIGNvbnN0IG5fbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKHV0aWxzLmlzWmVybyhrX251bSkgfHwgdXRpbHMuaXNaZXJvKG5fbnVtKSl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYodXRpbHMuaXNTbWFsbChrX251bSwgdXRpbHMuZ2V0WmVybygpKSB8fCB1dGlscy5pc1NtYWxsKG5fbnVtLCB1dGlscy5nZXRaZXJvKCkpKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzSW50ZWdlcihrX251bSkgfHwgdXRpbHMuaXNJbnRlZ2VyKG5fbnVtKSl7XG4gICAgaWYodXRpbHMuaXNPZGROdW1iZXIoa19udW0pKXtcbiAgICAgIGNvbnN0IGV4ID0gdXRpbHMuZXhwb25lbnRpYXRlKHV0aWxzLmdldE51bWJlcihcIjJcIiksIG5fbnVtKTtcbiAgICAgIGlmKHV0aWxzLmlzTGFyZ2UoZXgsIGtfbnVtKSl7XG4gICAgICAgIGNvbnN0IHJlcyA9IGNvcmUubXVsdGlwbGUoZXgsIGtfbnVtKTtcbiAgICAgICAgY29uc3QgcmVzMiA9IGNvcmUuYWRkKHJlcywgdXRpbHMuZ2V0T25lKCkpO1xuICAgICAgICByZXR1cm4gcmVzMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcblxufTtcblxudXRpbHMubWFrZVByb3RoTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGNvbnN0IGRlZmF1bHRfbWF4ID0gMTA7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IGRlZmF1bHRfbWF4O1xuICB9ZWxzZSBpZihtYXggPiBkZWZhdWx0X21heCl7XG4gICAgbWF4ID0gZGVmYXVsdF9tYXg7XG4gIH1cbiAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKXtcbiAgICBjb25zdCBrID0gdXRpbHMuZ2V0TnVtYmVyKFN0cmluZyhpICogMiArIDEpKTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgbWF4OyBqKyspe1xuICAgICAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihTdHJpbmcoaiArIDEpKTtcbiAgICAgIGNvbnN0IHJlcyA9IHV0aWxzLmdldFByb3RoTnVtYmVyKGssIG4pO1xuICAgICAgaWYocmVzKXtcbiAgICAgICAgbGlzdC5wdXNoKHJlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxpc3Quc29ydCgoYTogU3V1TnVtYmVyLCBiOiBTdXVOdW1iZXIpID0+IHtcbiAgICBjb25zdCBhX2lzX3NtYWxsID0gdXRpbHMuaXNTbWFsbChhLCBiKVxuICAgIGlmKGFfaXNfc21hbGwpe1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiAxXG4gIH0pXG4gIHJldHVybiBsaXN0O1xufTtcblxudXRpbHMuaXNQcm90aE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGNvbnN0IGxpc3QgPSB1dGlscy5tYWtlUHJvdGhOdW1iZXJzKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBwID0gbGlzdFtpXTtcbiAgICBpZih1dGlscy5pc0VxdWFsKHAsIG51bSkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmlzUHJvdGhQcmltZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKHV0aWxzLmlzUHJvdGhOdW1iZXIobnVtKSAmJiB1dGlscy5pc1ByaW1lTnVtYmVyKG51bSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLm1ha2VQaWVycG9udE51bWJlciA9IGZ1bmN0aW9uKHUsIHYpe1xuICAvLyAydSAzdiArIDFcbiAgY29uc3QgdV9uID0gdXRpbHMuZ2V0TnVtYmVyKHUpO1xuICBjb25zdCB2X24gPSB1dGlscy5nZXROdW1iZXIodik7XG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUodV9uKSB8fCB1dGlscy5pc05lZ2F0aXZlKHZfbikpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmKCF1dGlscy5pc0ludGVnZXIodV9uKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKHZfbikpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlczEgPSB1dGlscy5leHBvbmVudGlhdGUodXRpbHMuZ2V0TnVtYmVyKFwiMlwiKSwgdV9uKTtcbiAgY29uc3QgcmVzMiA9IHV0aWxzLmV4cG9uZW50aWF0ZSh1dGlscy5nZXROdW1iZXIoXCIzXCIpLCB2X24pO1xuICBjb25zdCByZXMzID0gY29yZS5tdWx0aXBsZShyZXMxLCByZXMyKVxuICBjb25zdCByZXMgPSBjb3JlLmFkZChyZXMzLCB1dGlscy5nZXRPbmUoKSk7XG4gIHJldHVybiByZXM7XG59O1xuXG51dGlscy5tYWtlUGllcnBvbnROdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgLy8gMnUgM3YgKyAxXG4gIFxuICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuICBjb25zdCBtYXhfZGVmYXVsdCA9IDEwO1xuICBpZighbWF4KXtcbiAgICBtYXggPSBtYXhfZGVmYXVsdDtcbiAgfWVsc2UgaWYobWF4ID4gbWF4X2RlZmF1bHQpe1xuICAgIG1heCA9IG1heF9kZWZhdWx0O1xuICB9XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKyl7XG4gICAgbGV0IHUgPSB1dGlscy5nZXROdW1iZXIoaSk7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IG1heDsgaisrKXtcbiAgICAgIGxldCB2ID0gdXRpbHMuZ2V0TnVtYmVyKGopO1xuICAgICAgY29uc3QgcmVzOiBhbnkgPSB1dGlscy5tYWtlUGllcnBvbnROdW1iZXIodSwgdik7XG4gICAgICBpZihyZXMpe1xuICAgICAgICBpZihsaXN0LmZpbmQoKGVsbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb3JlLmlzRXF1YWwoZWxtLCByZXMpXG4gICAgICAgIH0pKXtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnB1c2gocmVzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspe1xuICAgIGxldCB2ID0gdXRpbHMuZ2V0TnVtYmVyKGkpO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBtYXg7IGorKyl7XG4gICAgICBsZXQgdSA9IHV0aWxzLmdldE51bWJlcihqKTtcbiAgICAgIGNvbnN0IHJlczogYW55ID0gdXRpbHMubWFrZVBpZXJwb250TnVtYmVyKHUsIHYpO1xuICAgICAgaWYocmVzKXtcbiAgICAgICAgaWYobGlzdC5maW5kKChlbG0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY29yZS5pc0VxdWFsKGVsbSwgcmVzKVxuICAgICAgICB9KSl7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdC5wdXNoKHJlcylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGlzdC5zb3J0KChhOiBTdXVOdW1iZXIsIGI6IFN1dU51bWJlcikgPT4ge1xuICAgIGNvbnN0IGFfaXNfc21hbGwgPSB1dGlscy5pc1NtYWxsKGEsIGIpXG4gICAgaWYoYV9pc19zbWFsbCl7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIDFcbiAgfSlcbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG51dGlscy5pc1BpZXJwb250UHJpbWUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGFyciA9IHV0aWxzLm1ha2VQaWVycG9udE51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaWYodXRpbHMuaXNFcXVhbChudW0sIGFycltpXSkgJiYgdXRpbHMuaXNQcmltZU51bWJlcihudW0pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCByYW5kb20gZnJvbSBcIi4vcmFuZG9tXCI7XG5pbXBvcnQgZG9jIGZyb20gXCIuL2RvY1wiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIlxuaW1wb3J0IG1lYXN1cmVtZW50IGZyb20gXCIuL21lYXN1cmVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29yZTogY29yZSxcbiAgdXRpbHM6IHV0aWxzLFxuICByYW5kb206IHJhbmRvbSxcbiAgZG9jOiBkb2MsXG4gIGNvbnN0YW50czogY29uc3RhbnRzLFxuICB0czogdHJ1ZSxcbiAgbWVhc3VyZW1lbnQsXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==