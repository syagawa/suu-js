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
var isSuuNumber = function (n) {
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
core.add_and_subtract = function (a, b, mode) {
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
    commonMultiple: {
        ja: "公倍数"
    },
    leastCommonMultiple: {
        ja: "最小公倍数"
    },
    greatestCommonDivisor: {
        ja: "最大公約数"
    },
    commonDivisors: {
        ja: "公約数"
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
    exponentiate: {
        ja: "冪（べき）乗"
    },
    isMersenneNumber: {
        ja: "メルセンヌ数かどうか"
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
    }
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
utils.getNegativeNumber = function (n) {
    return utils.negate(n);
};
utils.getPositiveNumber = function (n) {
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
        return true;
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
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3N1Ly4vY29uc3RhbnRzLnRzIiwid2VicGFjazovL3N1Ly4vY29yZS50cyIsIndlYnBhY2s6Ly9zdS8uL2RvYy50cyIsIndlYnBhY2s6Ly9zdS8uL3JhbmRvbS50cyIsIndlYnBhY2s6Ly9zdS8uL3V0aWxzLnRzIiwid2VicGFjazovL3N1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1Ly4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJpbXBvcnQge0NvbXBhcmVPYmplY3QsIFN1dU51bWJlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuY29uc3QgY29yZTphbnkgPSB7fTtcblxuY29yZS5tYWtlRXJyb3IgPSBmdW5jdGlvbihvOiB7bWVzc2FnZTogc3RyaW5nLCB2YXJpYWJsZTogYW55LCBwYXJhbWV0ZXI6IGFueX0pOiBFcnJvcntcbiAgbGV0IGVycm9yID0gbmV3IEVycm9yKCk7XG4gIHRyeXtcbiAgICBjb25zdCB2ID0gby52YXJpYWJsZSA/IG8udmFyaWFibGUudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgY29uc3QgcCA9IG8ucGFyYW1ldGVyID8gby5wYXJhbWV0ZXIudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgbGV0IHN0ciA9IG8ubWVzc2FnZTtcbiAgICBpZih2KXtcbiAgICAgIHN0ciA9IGAke3N0cn0sICR7diA/IHYgOiBcIlwifWA7XG4gICAgfVxuICAgIGlmKHApe1xuICAgICAgc3RyID0gYCR7c3RyfSwgJHtwID8gcCA6IFwiXCJ9YDtcbiAgICB9XG4gICAgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgfWNhdGNoKGU6IHVua25vd24pe1xuICAgIGlmKGUgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuICB9ZmluYWxseXtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmNvbnN0IGlzTnVtYmVyID0gZnVuY3Rpb24obik6IEJvb2xlYW57XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzU3V1TnVtYmVyID0gZnVuY3Rpb24obik6IEJvb2xlYW57XG4gIGlmKG4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLm1vbGROdW1BcnJheSA9IGZ1bmN0aW9uKHsgYXJyYXksIG5lZ2F0aXZlLCBkZWNpbWFsX2luZGV4IH0pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIGlmKCFhcnJheSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHsgbWVzc2FnZTogXCJBcnJheSBpcyBub3QgZXhpc3RzXCIsIHBhdGFtZXRlcjogYXJyYXl9KTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBkZWNpbWFsX2luZGV4ICE9PSBcIm51bWJlclwiIHx8IGlzTmFOKGRlY2ltYWxfaW5kZXgpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3IoeyBtZXNzYWdlOiBcImRlY2ltYWxfaW5kZXggaXMgbm90IGEgbnVtYmVyXCIsIHBhdGFtZXRlcjogZGVjaW1hbF9pbmRleH0pO1xuICB9XG4gIHRyeXtcbiAgICB3aGlsZShkZWNpbWFsX2luZGV4IDwgYXJyYXkubGVuZ3RoICYmIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdID09PSAwKXtcbiAgICAgIGFycmF5LnBvcCgpO1xuICAgIH1cbiAgICB3aGlsZShkZWNpbWFsX2luZGV4ID4gMSAmJiBhcnJheVswXSA9PT0gMCl7XG4gICAgICBhcnJheS5zaGlmdCgpO1xuICAgICAgZGVjaW1hbF9pbmRleC0tO1xuICAgIH1cblxuICAgIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgICBhcnJheS5wdXNoKDApO1xuICAgICAgZGVjaW1hbF9pbmRleCA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgbzogU3V1TnVtYmVyID0ge1xuICAgICAgYXJyYXk6IGFycmF5LFxuICAgICAgbmVnYXRpdmU6ICEhbmVnYXRpdmUsXG4gICAgICBpc19udW1fYXJyYXk6IHRydWUsXG4gICAgICBkZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4XG4gICAgfTtcbiAgICBpZihkZWNpbWFsX2luZGV4ID09PSAwIHx8IGRlY2ltYWxfaW5kZXggPiAwKXtcbiAgICAgIG8uZGVjaW1hbF9pbmRleCA9IGRlY2ltYWxfaW5kZXg7XG4gICAgfWVsc2V7XG4gICAgICBvLmRlY2ltYWxfaW5kZXggPSBhcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG87XG4gIH1jYXRjaChlOiB1bmtub3duKXtcbiAgICBpZihlIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlLm1lc3NhZ2UsIHBhcmFtZXRlcjogYXJyYXl9KTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogYXJyYXl9KTtcbiAgICB9XG4gIH1cblxufTtcblxuY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBufSk7XG4gIH1cblxuICBpZihuLmlzX251bV9hcnJheSl7XG4gICAgcmV0dXJuIGNvcmUuY2xvbmUobik7XG4gIH1cblxuICBpZih0eXBlb2YgbiA9PT0gXCJvYmplY3RcIil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBvYmplY3QuXCIsIHBhcmFtZXRlcjogbn0pO1xuICB9XG5cbiAgbGV0IHN0cjogc3RyaW5nID0gU3RyaW5nKG4pO1xuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgd2hpbGUoc3RyICYmIHN0clswXS5tYXRjaCgvXi0vKSl7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL14tLywgXCJcIik7XG4gICAgbmVnYXRpdmUgPSAhbmVnYXRpdmU7XG4gIH1cblxuICBsZXQgZGVjX2luZGV4O1xuICBsZXQgcmVzID0gc3RyLm1hdGNoKC9cXC4vZyk7XG4gIGlmKHJlcyAmJiByZXMubGVuZ3RoID4gMSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIjIgb3IgbW9yZSBkZWNpbWFsIHBvaW50c1wiLCBwYXJhbWV0ZXI6IG59KTtcbiAgfVxuICBpZihyZXMgJiYgcmVzLmxlbmd0aCA9PT0gMSl7XG4gICAgY29uc3QgcmVzMSA9IHN0ci5tYXRjaCgvXFwuLyk7XG4gICAgY29uc3QgZmlyc3RfaW5kZXggPSByZXMxPy5pbmRleFxuICAgIGRlY19pbmRleCA9IGZpcnN0X2luZGV4XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcLi8sIFwiXCIpO1xuICB9ZWxzZXtcbiAgICBkZWNfaW5kZXggPSBzdHIubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgYXJyOiBudW1iZXJbXSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKXtcblxuICAgIGNvbnN0IG51bSA9IE51bWJlcihzdHJbaV0pO1xuICAgIGlmKCFpc051bWJlcihudW0pKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiLCBwYXJhbWV0ZXI6IG51bX0pO1xuICAgIH1cbiAgICBhcnIucHVzaChudW0pO1xuICB9XG5cbiAgcmV0dXJuIGNvcmUubW9sZE51bUFycmF5KHsgYXJyYXk6IGFyciwgbmVnYXRpdmU6IG5lZ2F0aXZlLCBkZWNpbWFsX2luZGV4OiBkZWNfaW5kZXh9KTtcblxufTtcblxuY29yZS5udW1BcnJheVRvU3RyaW5nID0gZnVuY3Rpb24obik6IHN0cmluZyB8IEVycm9yIHtcbiAgaWYoIW4uaXNfbnVtX2FycmF5IHx8ICFuLmFycmF5IHx8ICFuLmRlY2ltYWxfaW5kZXgpe1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHRyeXtcbiAgICBjb25zdCBhcnIgPSBbLi4ubi5hcnJheV07XG4gICAgYXJyLnNwbGljZShuLmRlY2ltYWxfaW5kZXgsIDAsIFwiLlwiKTtcbiAgICBsZXQgc3RyID0gYXJyLmpvaW4oXCJcIik7XG4gICAgaWYobi5uZWdhdGl2ZSl7XG4gICAgICBzdHIgPSBgLSR7c3RyfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbn0pO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBufSk7XG4gICAgfVxuICB9XG5cbn07XG5cbmNvcmUuY29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpOiBDb21wYXJlT2JqZWN0IHwgRXJyb3Ige1xuICB0cnl7XG4gICAgXG5cbiAgICBpZighYSAmJiBhICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9ZWxzZSBpZighYiAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbzogQ29tcGFyZU9iamVjdCA9IHtcbiAgICAgIHNtYWxsOiBudWxsLFxuICAgICAgbGFyZ2U6IG51bGwsXG4gICAgICBlcXVhbDogZmFsc2VcbiAgICB9O1xuICAgIGxldCBhXyA9IGE7XG4gICAgbGV0IGJfID0gYjtcblxuICAgIGlmKCFhXy5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhXyk7XG4gICAgICBpZighYV8pe1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIWJfLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGJfKTtcbiAgICAgIGlmKCFiXyl7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyYXk6IG51bWJlcltdID0gYV8uYXJyYXk7XG4gICAgY29uc3QgYl9hcnJheTogbnVtYmVyW10gPSBiXy5hcnJheTtcblxuICAgIGNvbnN0IGFfbGVuOiBudW1iZXIgPSBhX2FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBiX2xlbjogbnVtYmVyID0gYl9hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgYV9zdHI6IHN0cmluZyA9IGFfYXJyYXkuam9pbihcIlwiKTtcbiAgICBjb25zdCBiX3N0cjogc3RyaW5nID0gYl9hcnJheS5qb2luKFwiXCIpO1xuXG4gICAgY29uc3QgYV9pbnRfbGVuID0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2ludF9sZW4gPSBiXy5kZWNpbWFsX2luZGV4O1xuXG4gICAgY29uc3QgYV9kZWNfbGVuID0gYV9sZW4gLSBhX2ludF9sZW47XG4gICAgY29uc3QgYl9kZWNfbGVuID0gYl9sZW4gLSBiX2ludF9sZW47XG5cbiAgICBpZihhX2xlbiA9PT0gMSAmJiBhX3N0ciA9PT0gXCIwXCIgJiYgYl9sZW4gPT09IDEgJiYgYl9zdHIgPT09IFwiMFwiKXtcbiAgICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAgIGlmKCFhXy5uZWdhdGl2ZSAmJiBiXy5uZWdhdGl2ZSl7XG4gICAgICBvLnNtYWxsID0gYl87XG4gICAgICBvLmxhcmdlID0gYV87XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoYV8ubmVnYXRpdmUgJiYgIWJfLm5lZ2F0aXZlKXtcbiAgICAgIG8uc21hbGwgPSBhXztcbiAgICAgIG8ubGFyZ2UgPSBiXztcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGNvbnN0IG5lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG5cbiAgICBjb25zdCBvX2FfYiA9IHtcbiAgICAgIGxhcmdlOiBuZWdhdGl2ZSA/IGJfIDogYV8sXG4gICAgICBzbWFsbDogbmVnYXRpdmUgPyBhXyA6IGJfLFxuICAgICAgZXF1YWw6IGZhbHNlLFxuICAgIH07XG4gICAgY29uc3Qgb19iX2EgPSB7XG4gICAgICBsYXJnZTogbmVnYXRpdmUgPyBhXyA6IGJfLFxuICAgICAgc21hbGw6IG5lZ2F0aXZlID8gYl8gOiBhXyxcbiAgICAgIGVxdWFsOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZihhX2ludF9sZW4gPiBiX2ludF9sZW4pe1xuICAgICAgcmV0dXJuIG9fYV9iO1xuICAgIH1cbiAgICBcbiAgICBpZihhX2ludF9sZW4gPCBiX2ludF9sZW4pe1xuICAgICAgcmV0dXJuIG9fYl9hO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhX2ludF9sZW47IGkrKyl7XG4gICAgICBpZihhX2FycmF5W2ldID4gYl9hcnJheVtpXSl7XG4gICAgICAgIHJldHVybiBvX2FfYjtcbiAgICAgIH1cbiAgICAgIGlmKGFfYXJyYXlbaV0gPCBiX2FycmF5W2ldKXtcbiAgICAgICAgcmV0dXJuIG9fYl9hOyAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVjX2xlbiA9IGFfZGVjX2xlbiA+IGJfZGVjX2xlbiA/IGFfZGVjX2xlbiA6IGJfZGVjX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGVjX2xlbjsgaSsrKXtcbiAgICAgIGNvbnN0IGFhID0gYV9hcnJheVthX2ludF9sZW4gKyBpXSA/IGFfYXJyYXlbYV9pbnRfbGVuICsgaV0gOiAwO1xuICAgICAgY29uc3QgYmIgPSBiX2FycmF5W2JfaW50X2xlbiArIGldID8gYl9hcnJheVtiX2ludF9sZW4gKyBpXSA6IDA7XG4gICAgICBpZihhYSA+IGJiKXtcbiAgICAgICAgcmV0dXJuIG9fYV9iO1xuICAgICAgfVxuICAgICAgaWYoYWEgPCBiYil7XG4gICAgICAgIHJldHVybiBvX2JfYTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvLmVxdWFsID0gdHJ1ZTtcbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxuXG59O1xuXG5jb3JlLmdldExhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5jb21wYXJlKGEsIGIpLmxhcmdlO1xufTtcblxuY29yZS5nZXRTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvcmUuY29tcGFyZShhLCBiKS5zbWFsbDtcbn07XG5cbmNvcmUuaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgY29uc3QgcmVzID0gY29yZS5jb21wYXJlKGEsIGIpO1xuICBpZihyZXMuZXF1YWwpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUuaXNTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbChjb3JlLmdldFNtYWxsKGEsIGIpLCBhKTtcbn07XG5jb3JlLmlzTGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoY29yZS5nZXRMYXJnZShhLCBiKSwgYSk7XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pOiBib29sZWFuIHtcbiAgaWYoIW4pe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB6ZXJvID0gY29yZS5nZXRaZXJvKCk7XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoemVybywgbik7XG59O1xuXG5jb3JlLmlzT25lID0gZnVuY3Rpb24obik6IGJvb2xlYW4ge1xuICBpZighbil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKCFuLmlzX251bV9hcnJheSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG9uZSA9IGNvcmUuZ2V0T25lKCk7XG4gIGlmKGNvcmUuaXNFcXVhbChvbmUsIG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb3JlLmdldFplcm8gPSBmdW5jdGlvbigpOiBTdXVOdW1iZXIge1xuICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIwXCIpO1xufTtcblxuY29yZS5nZXRPbmUgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXIge1xuICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIxXCIpO1xufTtcblxuY29yZS5maXhDYXJyeSA9IGZ1bmN0aW9uKGFycjogbnVtYmVyW10sIG1pbnVzOiBib29sZWFuKToge25ld19hcnJheTogbnVtYmVyW10sIG1pbnVzOiBib29sZWFufSB7XG4gIHRyeSB7XG4gICAgbGV0IG1pbnVzXyA9IG1pbnVzO1xuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49MDsgaS0tKXtcbiAgICAgIGNvbnN0IGVsbSA9IGFycltpXTtcbiAgICAgIGlmKGVsbSA8IDApe1xuICAgICAgICBtaW51c18gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbSA9PT0gMCl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihtaW51c18pe1xuICAgICAgY29uc3QgY2FjaGU6IG51bWJlcltdID0gW107XG4gICAgICBhcnIuZm9yRWFjaCggKGVsbTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNhY2hlLnB1c2goLWVsbSk7XG4gICAgICB9KTtcbiAgICAgIGFyciA9IGNhY2hlO1xuICAgIH1cbiAgICBjb25zdCBuZXdfYXJyOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCBjYXJyeSA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgdmFsID0gTnVtYmVyKGFycltpXSArIGNhcnJ5KTtcbiAgICAgIGlmKHZhbCA+IDkpe1xuICAgICAgICBjb25zdCBhcnIxID0gU3RyaW5nKHZhbCkuc3BsaXQoXCJcIik7XG4gICAgICAgIHZhbCA9IE51bWJlcihhcnIxW2FycjEubGVuZ3RoIC0gMV0pO1xuICAgICAgICBjb25zdCBhcnIyID0gYXJyMS5zbGljZSgwLCBhcnIxLmxlbmd0aCAtIDEpO1xuICAgICAgICBjYXJyeSA9IE51bWJlcihhcnIyLmpvaW4oXCJcIikpO1xuICAgICAgfWVsc2UgaWYoIHZhbCA+PSAwICYmIHZhbCA8PSA5KXtcbiAgICAgICAgY2FycnkgPSAwO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhbCA9IDEwICsgdmFsO1xuICAgICAgICBjYXJyeSA9IC0xO1xuXG4gICAgICB9XG4gICAgICBuZXdfYXJyLnB1c2godmFsKTtcbiAgICB9XG4gICAgaWYoY2FycnkgIT09IDApe1xuICAgICAgbmV3X2Fyci5wdXNoKGNhcnJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmV3X2FycmF5OiBuZXdfYXJyLFxuICAgICAgbWludXM6IG1pbnVzX1xuICAgIH07XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FyciwgbWludXNdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2FyciwgbWludXNdfSk7XG4gICAgfVxuICB9XG5cblxufTtcblxuY29yZS5jbG9uZSA9IGZ1bmN0aW9uKG46IGFueSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGlmKCFuKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgaXMgbm90IGV4aXN0c1wiLCBwYXJhbWV0ZXI6IG59KTtcbiAgICB9XG4gICAgaWYoIW4uaXNfbnVtX2FycmF5KXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgaXMgbm90IGNvbXBhdGlibGVcIiwgcGFyYW1ldGVyOiBufSk7XG4gICAgfVxuICAgIGNvbnN0IG8gPSB7XG4gICAgICAuLi5uLFxuICAgICAgYXJyYXk6IFsuLi5uLmFycmF5XSxcbiAgICB9O1xuICAgIHJldHVybiBvO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtuXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtuXX0pO1xuICAgIH1cbiAgfVxufTtcblxuY29yZS5hZGRfYW5kX3N1YnRyYWN0ID0gZnVuY3Rpb24oYSwgYiwgbW9kZSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWEgfHwgIWIpe1xuICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbXVzdCBiZSBhIE51bWJlciBvciBhIFN0cmluZy5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG4gIGxldCBwbHVzO1xuICBpZighbW9kZSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgbW9kZSBpcyByZXF1aXJlZFwiLCBwYXJhbWV0ZXI6IFthLCBiLCBtb2RlXX0pOztcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCIrXCIpe1xuICAgIHBsdXMgPSB0cnVlO1xuICB9ZWxzZSBpZihtb2RlID09PSBcIi1cIil7XG4gICAgcGx1cyA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwibW9kZSBtdXN0IGJlICcrJyBvciAnLScuXCIsIHBhcmFtZXRlcjogbW9kZX0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsZXQgYV86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnIgPSBhXy5hcnJheTtcbiAgICBjb25zdCBiX2FyciA9IGJfLmFycmF5O1xuXG5cbiAgICBjb25zdCBhX2lzX3plcm86IGJvb2xlYW4gPSBjb3JlLmlzWmVybyhhXyk7XG4gICAgY29uc3QgYl9pc196ZXJvOiBib29sZWFuID0gY29yZS5pc1plcm8oYl8pO1xuXG4gICAgaWYoYV9pc196ZXJvICYmIGJfaXNfemVybyl7XG4gICAgICByZXR1cm4gYV87XG4gICAgfWVsc2UgaWYoYV9pc196ZXJvKXtcbiAgICAgIGlmKCFwbHVzKXtcbiAgICAgICAgYl8ubmVnYXRpdmUgPSAhYl8ubmVnYXRpdmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYl87XG4gICAgfWVsc2UgaWYoYl9pc196ZXJvKXtcbiAgICAgIHJldHVybiBhXztcbiAgICB9XG5cbiAgICBjb25zdCBhX2RlY19sZW5ndGg6IG51bWJlciA9IGFfLmFycmF5Lmxlbmd0aCAtIGFfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgYl9kZWNfbGVuZ3RoOiBudW1iZXIgPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuXG4gICAgY29uc3QgZGVjX2dhcDogbnVtYmVyID0gYV9kZWNfbGVuZ3RoIC0gYl9kZWNfbGVuZ3RoO1xuXG4gICAgaWYoZGVjX2dhcCA+IDApe1xuICAgICAgYl9hcnIucHVzaCguLi5BcnJheShkZWNfZ2FwKS5maWxsKDApKTtcbiAgICB9ZWxzZSBpZihkZWNfZ2FwIDwgMCl7XG4gICAgICBhX2Fyci5wdXNoKC4uLkFycmF5KE1hdGguYWJzKGRlY19nYXApKS5maWxsKDApKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGIsIHBsdXN9KTogeyBuZXdfYXJyYXk6IG51bWJlcltdLCBtaW51czogYm9vbGVhbiB9IHtcbiAgICAgIGNvbnN0IGFycjogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCBsZW4gPSBhLmFycmF5Lmxlbmd0aDtcbiAgICAgIGlmKGEuYXJyYXkubGVuZ3RoIDwgYi5hcnJheS5sZW5ndGgpe1xuICAgICAgICBsZW4gPSBiLmFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFycl9hOiBudW1iZXJbXSA9IGEuYXJyYXk7XG4gICAgICBjb25zdCBhcnJfYjogbnVtYmVyW10gPSBiLmFycmF5O1xuICAgICAgY29uc3QgYV9vbmU6IG51bWJlciA9IGEubmVnYXRpdmUgPyAtMSA6IDE7XG4gICAgICBjb25zdCBiX29uZTogbnVtYmVyID0gYi5uZWdhdGl2ZSA/IC0xIDogMTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgIGNvbnN0IGFhID0gYXJyX2FbaV0gPyBhcnJfYVtpXSAqIGFfb25lIDogMDtcbiAgICAgICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldICogYl9vbmUgOiAwO1xuICAgICAgICBsZXQgcmVzID0gcGx1cyA/IGFhICsgYmIgOiBhYSAtIGJiO1xuICAgICAgICBhcnIucHVzaChyZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcmUuZml4Q2FycnkoYXJyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXksIG1pbnVzIH0gPSBjYWxjKHtcbiAgICAgIGE6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5hX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYV8ubmVnYXRpdmUsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBhcnJheTogWy4uLmJfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBiXy5uZWdhdGl2ZVxuICAgICAgfSxcbiAgICAgIHBsdXM6IHBsdXNcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlY19sZW5ndGggPSBhX2RlY19sZW5ndGggPj0gYl9kZWNfbGVuZ3RoID8gYV9kZWNfbGVuZ3RoIDogYl9kZWNfbGVuZ3RoO1xuICAgIGNvbnN0IG5ld19pbnRfbGVuZ3RoID0gbmV3X2FycmF5Lmxlbmd0aCAtIGRlY19sZW5ndGg7XG5cbiAgICBjb25zdCBuZXdfZGVjaW1hbF9pbmRleCA9IG5ld19pbnRfbGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ubmV3X2FycmF5XS5yZXZlcnNlKCksXG4gICAgICBuZWdhdGl2ZTogbWludXMgPyB0cnVlIDogZmFsc2UsXG4gICAgICBkZWNpbWFsX2luZGV4OiBuZXdfZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5jb3JlLmFkZCA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLmFkZF9hbmRfc3VidHJhY3QoYSwgYiwgXCIrXCIpO1xufTtcblxuY29yZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLmFkZF9hbmRfc3VidHJhY3QoYSwgYiwgXCItXCIpO1xufTtcblxuXG5jb3JlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcblxuICBpZighYSB8fCAhYil7XG4gICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGFfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgbGV0IGJfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgfWVsc2V7XG4gICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICB9XG4gIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gIH1lbHNle1xuICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgfVxuXG4gIGNvbnN0IGFfYXJyID0gYV8uYXJyYXk7XG4gIGNvbnN0IGJfYXJyID0gYl8uYXJyYXk7XG5cbiAgaWYoY29yZS5pc1plcm8oYV8pIHx8IGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMFwiKTtcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUoYV8pKXtcbiAgICByZXR1cm4gYl87XG4gIH1cblxuICBpZihjb3JlLmlzT25lKGJfKSl7XG4gICAgcmV0dXJuIGFfO1xuICB9XG5cbiAgdHJ5e1xuXG4gICAgY29uc3QgYV9uZWdhdGl2ZSA9IGFfLm5lZ2F0aXZlO1xuICAgIGNvbnN0IGJfbmVnYXRpdmUgPSBiXy5uZWdhdGl2ZTtcbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV9uZWdhdGl2ZSAmJiBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfWVsc2UgaWYoYV9uZWdhdGl2ZSB8fCBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYV9kZWNfbGVuZ3RoID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2RlY19sZW5ndGggPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGRlY19sZW5ndGggPSBhX2RlY19sZW5ndGggKyBiX2RlY19sZW5ndGg7XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGJ9KXtcbiAgICAgIGNvbnN0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xuICAgICAgY29uc3QgYXJyX2EgPSBhLmFycmF5O1xuICAgICAgY29uc3QgYXJyX2IgPSBiLmFycmF5O1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgYWEgPSBhcnJfYVtpXSA/IGFycl9hW2ldIDogMDtcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICAgICAgICBhcnIuZmlsbCgwLCAwLCBpKTtcblxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIGNvbnN0IGJiID0gYXJyX2Jbal0gPyBhcnJfYltqXSA6IDA7XG4gICAgICAgICAgbGV0IHJlcyA9IGFhICogYmI7XG4gICAgICAgICAgXG4gICAgICAgICAgYXJyLnB1c2gocmVzKTtcblxuICAgICAgICAgIGNvbnN0IHRndF9pbmRleCA9IGkgKyBqO1xuICAgICAgICAgIGxldCB0Z3Q6IG51bWJlciA9IGFycmF5W3RndF9pbmRleF07XG4gICAgICAgICAgaWYoIXRndCl7XG4gICAgICAgICAgICB0Z3QgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdfdGd0ID0gdGd0ICsgcmVzO1xuICAgICAgICAgIGFycmF5W3RndF9pbmRleF0gPSBuZXdfdGd0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29yZS5maXhDYXJyeShhcnJheSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgbmV3X2FycmF5IH0gPSBjYWxjKHtcbiAgICAgIGE6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5hX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYV8ubmVnYXRpdmUsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBhcnJheTogWy4uLmJfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBiXy5uZWdhdGl2ZVxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld19kZWNpbWFsX2luZGV4ID0gbmV3X2FycmF5Lmxlbmd0aCAtIGRlY19sZW5ndGg7XG5cbiAgICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLnJldmVyc2UoKSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IG5ld19kZWNpbWFsX2luZGV4XG4gICAgfSk7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbn07XG5cbmNvcmUubXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICByZXR1cm4gY29yZS5tdWx0aXBsaWNhdGlvbihhLCBiKTtcbn07XG5cbmNvcmUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBjb25zdCBuXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICAgIGxldCBzdHIgPSBcIjAuXCI7XG4gICAgY29uc3QgbGVuID0gbl8uYXJyYXkubGVuZ3RoO1xuICAgIGlmKGxlbiA+IDApe1xuICAgICAgZm9yKGxldCBpID0gbl8uZGVjaW1hbF9pbmRleDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgcyA9IFN0cmluZyhuXy5hcnJheVtpXSk7XG4gICAgICAgIHN0ciA9IHN0ciArIHM7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBzdHIgPSBzdHIgKyBcIjBcIjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoc3RyKTtcbiAgICByZXR1cm4gbnVtO1xuICB9Y2F0Y2goZXJyKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG59KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBufSk7XG4gICAgfVxuICB9XG59O1xuXG5cbmNvcmUuZGl2aXNpb24gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3IgfCBzdHJpbmcge1xuXG4gIHRyeSB7XG4gICAgaWYoIWEgfHwgIWIpe1xuICAgICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYV86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYl8pKXtcbiAgICAgIGlmKGNvcmUuaXNMYXJnZShhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiSW5maW5pdHlcIjtcbiAgICAgIH1lbHNlIGlmKGNvcmUuaXNTbWFsbChhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiTmVnYXRpdmUgSW5maW5pdHlcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIk5vdCBhIE51bWJlclwiO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGFfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldFplcm8oKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihjb3JlLmlzT25lKGJfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hXyxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRPbmUoKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhX25lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG4gICAgY29uc3QgYl9uZWdhdGl2ZSA9IGJfLm5lZ2F0aXZlO1xuXG4gICAgaWYoYV8ubmVnYXRpdmUpe1xuICAgICAgYV8ubmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihiXy5uZWdhdGl2ZSl7XG4gICAgICBiXy5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBuZWdhdGl2ZTtcbiAgICBpZihhX25lZ2F0aXZlICYmIGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9ZWxzZSBpZihhX25lZ2F0aXZlIHx8IGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGIsIG1heH0pe1xuICAgICAgY29uc3QgcmVzdWx0X2FycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCByZW1haW4gPSBjb3JlLmdldFplcm8oKTtcbiAgICAgIGNvbnN0IGFfID0gY29yZS5jbG9uZShhKTtcbiAgICAgIGNvbnN0IGJfID0gY29yZS5jbG9uZShiKTtcbiAgICAgIGxldCBkZWNpbWFsX2luZGV4ID0gYS5kZWNpbWFsX2luZGV4O1xuICAgICAgbGV0IGRlY2ltYWxfaW5kZXhfcmVtYWluID0gZGVjaW1hbF9pbmRleDtcblxuICAgICAgbGV0IGFfaW50ID0gY29yZS5jbG9uZShhXyk7XG4gICAgICBhX2ludC5kZWNpbWFsX2luZGV4ID0gYV9pbnQuYXJyYXkubGVuZ3RoO1xuICAgICAgbGV0IGFfemVyb19sZW5ndGggPSAwO1xuICAgICAgY29uc3QgYV96ZXJvX3JlcyA9IGFfLmFycmF5LmpvaW4oXCJcIikubWF0Y2goL14wKy8pO1xuICAgICAgaWYoYV96ZXJvX3JlcyAmJiBhX3plcm9fcmVzWzBdKXtcbiAgICAgICAgYV96ZXJvX2xlbmd0aCA9IGFfemVyb19yZXNbMF0ubGVuZ3RoO1xuICAgICAgICBhX2ludCA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGFfaW50LmFycmF5LnNsaWNlKGFfemVyb19sZW5ndGgsIGFfaW50LmFycmF5Lmxlbmd0aCkuam9pbihcIlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBiX2ludCA9IGNvcmUuY2xvbmUoYl8pO1xuICAgICAgYl9pbnQuZGVjaW1hbF9pbmRleCA9IGJfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCBiX3plcm9fbGVuZ3RoID0gMDtcbiAgICAgIGNvbnN0IGJfemVyb19yZXMgPSBiX2ludC5hcnJheS5qb2luKFwiXCIpLm1hdGNoKC9eMCsvKTtcbiAgICAgIGlmKGJfemVyb19yZXMgJiYgYl96ZXJvX3Jlc1swXSl7XG4gICAgICAgIGJfemVyb19sZW5ndGggPSBiX3plcm9fcmVzWzBdLmxlbmd0aDtcbiAgICAgICAgYl9pbnQgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiX2ludC5hcnJheS5zbGljZShiX3plcm9fbGVuZ3RoLCBiX2ludC5hcnJheS5sZW5ndGgpLmpvaW4oXCJcIikpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB6ZXJvX2dhcCA9IGFfemVyb19sZW5ndGggLSBiX3plcm9fbGVuZ3RoO1xuICAgICAgY29uc3QgYV9hcnJheSA9IFsuLi5hX2ludC5hcnJheV07XG4gICAgICBjb25zdCBhX2RlY2ltYWxfbGVuZ3RoID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICAgIGNvbnN0IGJfZGVjaW1hbF9sZW5ndGggPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuICAgICAgY29uc3QgZGVjaW1hbF9nYXAgPSBhX2RlY2ltYWxfbGVuZ3RoIC0gYl9kZWNpbWFsX2xlbmd0aDtcblxuICAgICAgY29uc3QgdGltZXMgPSBOdW1iZXIoY29yZS5hZGQoYV9pbnQuYXJyYXkubGVuZ3RoLCBtYXgpLmFycmF5LmpvaW4oXCJcIikpO1xuXG4gICAgICBjb25zdCBhX2xlbiA9IGFfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCByZW1haW5faXNfZGVjaW1hbCA9IGZhbHNlO1xuICAgICAgbGV0IHJlbWFpbl9hcnIgPSBbMF07XG5cbiAgICAgIGxldCBkZWNpbWFsX2NvdW50ID0gMDtcbiAgICAgIGxldCByZW1haW5fYW5kX2FfbGVuX2dhcCA9IDA7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGltZXM7IGkrKyl7XG4gICAgICAgIGxldCBpc19sZXNzID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNvdW50ID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbjEgPSBjb3JlLm11bHRpcGxpY2F0aW9uKHJlbWFpbiwgXCIxMFwiKTtcbiAgICAgICAgY29uc3QgcmVtYWluMiA9IFN0cmluZyhhX2FycmF5LnNsaWNlKGksIGkgKyAxKS5sZW5ndGggPT09IDEgPyBhX2FycmF5LnNsaWNlKGksIGkgKyAxKVswXSA6IFwiMFwiKTtcbiAgICAgICAgcmVtYWluID0gY29yZS5hZGQocmVtYWluMSwgcmVtYWluMik7XG5cbiAgICAgICAgcmVtYWluX2FuZF9hX2xlbl9nYXAgPSByZW1haW4uYXJyYXkubGVuZ3RoIC0gYV9sZW47XG4gICAgICAgIGxldCBwcm9kdWN0ID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICAgIGlmKGkgPT09IGFfbGVuKXtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4ID0gaTtcbiAgICAgICAgICBpZihjb3JlLmlzWmVybyhyZW1haW4pKXtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbl9pc19kZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlY2ltYWxfY291bnQgPSBkZWNpbWFsX2NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZihpID4gYV9sZW4pe1xuICAgICAgICAgIGRlY2ltYWxfY291bnQgPSBkZWNpbWFsX2NvdW50Kys7XG4gICAgICAgICAgaWYoY29yZS5pc1plcm8ocmVtYWluKSl7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXhfY291bnQgPSBtYXg7XG4gICAgICAgIHdoaWxlKGlzX2xlc3Mpe1xuICAgICAgICAgIGNvdW50ID0gY29yZS5hZGQoY291bnQsIFwiMVwiKTtcbiAgICAgICAgICBpZihjb3JlLmlzTGFyZ2UoY291bnQsIG1heF9jb3VudCkpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHByZV9wcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICBwcm9kdWN0ID0gY29yZS5tdWx0aXBsaWNhdGlvbihiX2ludCwgY291bnQpO1xuXG4gICAgICAgICAgaWYoY29yZS5pc0VxdWFsKHJlbWFpbiwgcHJvZHVjdCkpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnQ7XG4gICAgICAgICAgICByZXN1bHRfYXJyLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbiA9IGNvcmUuc3VidHJhY3QocmVtYWluLCBwcm9kdWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjb3JlLmlzTGFyZ2UocHJvZHVjdCwgcmVtYWluKSl7XG4gICAgICAgICAgICBpc19sZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3JlLnN1YnRyYWN0KGNvdW50LCBcIjFcIik7XG4gICAgICAgICAgICByZXN1bHRfYXJyLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbiA9IGNvcmUuc3VidHJhY3QocmVtYWluLCBwcmVfcHJvZHVjdCk7XG5cbiAgICAgICAgICAgIGlmKHJlbWFpbl9pc19kZWNpbWFsKXtcbiAgICAgICAgICAgICAgcmVtYWluX2Fyci5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlbWFpbl9hcnIucHVzaCguLi5yZW1haW4uYXJyYXkpO1xuICAgICAgY29uc3QgbmV3X2FyciA9IHJlc3VsdF9hcnIuZmxhdE1hcChlID0+IGUuYXJyYXkpO1xuXG4gICAgICBpZih6ZXJvX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgemVyb19nYXA7IGkrKyl7XG4gICAgICAgICAgbmV3X2Fyci51bnNoaWZ0KDApO1xuICAgICAgICAgIGRlY2ltYWxfaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihkZWNpbWFsX2dhcCA8IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5hYnMoZGVjaW1hbF9nYXApOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIucHVzaCgwKTtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKGRlY2ltYWxfZ2FwID4gMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBNYXRoLmFicyhkZWNpbWFsX2dhcCk7IGkrKyl7XG4gICAgICAgICAgbmV3X2Fyci51bnNoaWZ0KDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHJlbWFpbl9hbmRfYV9sZW5fZ2FwID4gMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZW1haW5fYW5kX2FfbGVuX2dhcDsgaSsrKXtcbiAgICAgICAgICBjb25zdCB0Z3QgPSByZW1haW5fYXJyWzBdO1xuICAgICAgICAgIGlmKHRndCA9PT0gMCl7XG4gICAgICAgICAgICByZW1haW5fYXJyLnNoaWZ0KCk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkZWNpbWFsX2luZGV4X3JlbWFpbiA9IGRlY2ltYWxfaW5kZXhfcmVtYWluIC0gcmVtYWluX2FuZF9hX2xlbl9nYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbWFpbl9hcnIucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYocmVtYWluX2FuZF9hX2xlbl9nYXAgPCAwKXtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5hYnMocmVtYWluX2FuZF9hX2xlbl9nYXApO1xuICAgICAgICBjb25zdCBhcnIgPSBBcnJheShsZW4pLmZpbGwoMCk7XG4gICAgICAgIHJlbWFpbl9hcnIudW5zaGlmdCguLi5hcnIpO1xuICAgICAgfVxuXG4gICAgICBpZihyZW1haW5faXNfZGVjaW1hbCl7XG4gICAgICAgIHJlbWFpbl9hcnIgPSBbLi4ucmVtYWluX2Fycl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5ld19hcnJheTogbmV3X2FycixcbiAgICAgICAgZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleCxcbiAgICAgICAgcmVtYWluX2FycmF5OiByZW1haW5fYXJyLFxuICAgICAgICByZW1haW5fZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleF9yZW1haW4sXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1heF90aW1lc19pZl9ub3RfZGl2aXNpYmxlID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIxMFwiKTtcblxuICAgIGNvbnN0IHsgbmV3X2FycmF5LCBkZWNpbWFsX2luZGV4LCByZW1haW5fYXJyYXksIHJlbWFpbl9kZWNpbWFsX2luZGV4fSA9IGNhbGMoe2E6IGFfLCBiOiBiXywgbWF4OiBtYXhfdGltZXNfaWZfbm90X2RpdmlzaWJsZX0pO1xuXG5cbiAgICBjb25zdCByZW1haW5kZXIgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLnJlbWFpbl9hcnJheV0sXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgICBkZWNpbWFsX2luZGV4OiByZW1haW5fZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBxdW90aWVudCA9IGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ubmV3X2FycmF5XSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXhcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5xdW90aWVudCxcbiAgICAgIHJlbWFpbmRlcjpyZW1haW5kZXIsXG4gICAgfVxuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuICBcbn07XG5cbmNvcmUuZGl2aWRlID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgcmV0dXJuIGNvcmUuZGl2aXNpb24oYSwgYik7XG59O1xuXG5jb3JlLmZsb29yID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICB0cnl7XG4gICAgY29uc3QgbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG51bSk7XG4gICAgY29uc3QgaXNfZGVjaW1hbCA9IG4uZGVjaW1hbF9pbmRleCA8IG4uYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGRlYyA9IG4uYXJyYXkuc2xpY2Uobi5kZWNpbWFsX2luZGV4LCBuLmFycmF5Lmxlbmd0aCk7XG4gICAgY29uc3QgZGVjX24gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChkZWMuam9pbihcIlwiKSk7XG4gICAgaWYoY29yZS5pc1plcm8oZGVjX24pKXtcbiAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBsZXQgbl8gPSB7XG4gICAgICAuLi5uLFxuICAgICAgYXJyYXk6IG4uYXJyYXkuc2xpY2UoMCwgbi5kZWNpbWFsX2luZGV4KVxuICAgIH07XG4gICAgaWYobi5uZWdhdGl2ZSAmJiBpc19kZWNpbWFsKXtcbiAgICAgIG5fID0gY29yZS5zdWJ0cmFjdChuXywgXCIxXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbl87XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbnVtfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogbnVtfSk7XG4gICAgfVxuICB9XG59O1xuXG5jb3JlLmNlaWwgPSBmdW5jdGlvbihudW06IFN1dU51bWJlcik6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGNvbnN0IG4gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChudW0pO1xuICAgIGNvbnN0IGlzX2RlY2ltYWwgPSBuLmRlY2ltYWxfaW5kZXggPCBuLmFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBkZWMgPSBuLmFycmF5LnNsaWNlKG4uZGVjaW1hbF9pbmRleCwgbi5hcnJheS5sZW5ndGgpO1xuICAgIGNvbnN0IGRlY19uID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoZGVjLmpvaW4oXCJcIikpO1xuICAgIGlmKGNvcmUuaXNaZXJvKGRlY19uKSl7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgbGV0IG5fID0ge1xuICAgICAgLi4ubixcbiAgICAgIGFycmF5OiBuLmFycmF5LnNsaWNlKDAsIG4uZGVjaW1hbF9pbmRleClcbiAgICB9O1xuICAgIGlmKCFuLm5lZ2F0aXZlICYmIGlzX2RlY2ltYWwpe1xuICAgICAgbl8gPSBjb3JlLmFkZChuXywgXCIxXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbl87XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbnVtfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogbnVtfSk7XG4gICAgfVxuICB9XG5cbn07XG5cblxuY29yZS5tb2R1bG8gPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3IgfCBzdHJpbmcge1xuICB0cnl7XG4gICAgaWYoIWEgfHwgIWIpe1xuICAgICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYV8gPSBjb3JlLmdldFplcm8oKTtcbiAgICBsZXQgYl8gPSBjb3JlLmdldFplcm8oKTtcbiAgICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgfWVsc2V7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gICAgfVxuICAgIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhiXykpe1xuICAgICAgaWYoY29yZS5pc0xhcmdlKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJJbmZpbml0eVwiO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc1NtYWxsKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJOZWdhdGl2ZSBJbmZpbml0eVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiTm90IGEgTnVtYmVyXCI7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYV8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0WmVybygpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFfcG9zaSA9IGNvcmUuY2xvbmUoYV8pO1xuICAgIGNvbnN0IGJfcG9zaSA9IGNvcmUuY2xvbmUoYl8pO1xuICAgIGFfcG9zaS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIGJfcG9zaS5uZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYoY29yZS5pc0xhcmdlKGJfcG9zaSwgYV9wb3NpKSl7XG4gICAgICBjb25zdCBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEpO1xuICAgICAgcmV0dXJuIGFfO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNFcXVhbChhXywgYl8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0WmVybygpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBuZWdhdGl2ZTtcbiAgICBpZihhXy5uZWdhdGl2ZSl7XG4gICAgICBuZWdhdGl2ZSA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYn0pe1xuICAgICAgY29uc3QgZGl2aWRlZCA9IGNvcmUuZGl2aWRlKGEsIGIpO1xuICAgICAgY29uc3QgZmxvb3JlZCA9IGNvcmUuZmxvb3IoZGl2aWRlZCk7XG4gICAgICBjb25zdCBtdWx0aXBsZWQgPSBjb3JlLm11bHRpcGxlKGIsIGZsb29yZWQpO1xuICAgICAgY29uc3QgcmVzID0gY29yZS5zdWJ0cmFjdChhLCBtdWx0aXBsZWQpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzID0gY2FsYyh7YTogey4uLmFfLCBuZWdhdGl2ZTogZmFsc2V9LCBiOiB7Li4uYl8sIG5lZ2F0aXZlOiBmYWxzZX0gfSk7XG5cbiAgICBjb25zdCBxdW90aWVudCA9IGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIC4uLnJlcyxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5xdW90aWVudCxcbiAgICB9XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxufTtcblxuY29yZS5nZXRTdXVOdW1iZXIgPSAobjogYW55KSA9PiB7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBtYXA6IG9iamVjdCA9IHtcbiAgY29tbW9uTXVsdGlwbGU6IHtcbiAgICBqYTogXCLlhazlgI3mlbBcIlxuICB9LFxuICBsZWFzdENvbW1vbk11bHRpcGxlOiB7XG4gICAgamE6IFwi5pyA5bCP5YWs5YCN5pWwXCJcbiAgfSxcbiAgZ3JlYXRlc3RDb21tb25EaXZpc29yOiB7XG4gICAgamE6IFwi5pyA5aSn5YWs57SE5pWwXCJcbiAgfSxcbiAgY29tbW9uRGl2aXNvcnM6IHtcbiAgICBqYTogXCLlhazntITmlbBcIlxuICB9LFxuICBtYWtlRmlib25hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5XjgqPjg5zjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlTHVjYVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Oq44Ol44Kr5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZVRyaWJvbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODiOODquODnOODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VUZXRyYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4bjg4jjg6njg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlUGVudGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Oa44Oz44K/44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZUhleGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OY44Kt44K144OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZUhlcHRhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODmOODl+OCv+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VPY3RhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuOCquOCr+OCv+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VOb25hbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODjuODiuODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VEZWNhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODh+OCq+ODiuODg+ODgeaVsOWIl+OCkuS9nOaIkFwiXG4gIH0sXG4gIG1ha2VVbmRlY2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Km44Oz44OH44Kr44OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgbWFrZURvZGVjYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4njg4fjgqvjg4rjg4Pjg4HmlbDliJfjgpLkvZzmiJBcIlxuICB9LFxuICBtYWtlSWNvc2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Kk44Kz44K144OK44OD44OB5pWw5YiX44KS5L2c5oiQXCJcbiAgfSxcbiAgc3VtbWF0aW9uOiB7XG4gICAgamE6IFwi57eP5ZKMXCJcbiAgfSxcbiAgaW5maW5pdGVQcm9kdWN0OiB7XG4gICAgamE6IFwi57eP5LmXL+e3j+epjVwiXG4gIH0sXG4gIGRpZ2l0U3VtOiB7XG4gICAgamE6IFwi5pWw5a2X5ZKML+WQhOahgeOBrue3j+WSjFwiXG4gIH0sXG4gIG1ha2VUcmlhbmdsZU51bWJlcjoge1xuICAgIGphOiBcIuS4ieinkuaVsOOBrueUn+aIkFwiXG4gIH0sXG4gIG1ha2VQcm9uaWNOdW1iZXI6IHtcbiAgICBqYTogXCLnn6nlvaLmlbDjga7nlJ/miJBcIlxuICB9LFxuICBmYWN0b3JpYWw6IHtcbiAgICBqYTogXCLpmo7kuZdcIlxuICB9LFxuICBtb2R1bG86IHtcbiAgICBqYTogXCLlibDkvZnmvJTnrpdcIlxuICB9LFxuICBleHBvbmVudGlhdGU6IHtcbiAgICBqYTogXCLlhqrvvIjjgbnjgY3vvInkuZdcIlxuICB9LFxuICBpc01lcnNlbm5lTnVtYmVyOiB7XG4gICAgamE6IFwi44Oh44Or44K744Oz44OM5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNNZXJzZW5uZVByaW1lTnVtYmVyOiB7XG4gICAgamE6IFwi44Oh44Or44K744Oz44OM57Sg5pWw44GL44Gp44GG44GLXCJcbiAgfSxcbiAgaXNDb21wb3NpdGVOdW1iZXI6IHtcbiAgICBqYTogXCLlkIjmiJDmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc0hhcnNoYWROdW1iZXI6IHtcbiAgICBqYTogXCLjg4/jg7zjgrfjg6Pjg4Pjg4nmlbDjgYvjganjgYbjgYtcIlxuICB9LFxuICBpc1p1Y2tlcm1hbk51bWJlcjoge1xuICAgIGphOiBcIuOCuuODg+OCq+ODvOODnuODs+aVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGlzUmVwdW5pdE51bWJlcjoge1xuICAgIGphOiBcIuODrOODlOODpeODi+ODg+ODiOaVsOOBi+OBqeOBhuOBi1wiXG4gIH0sXG4gIGdldEludmVyc2lvbk51bWJlcjoge1xuICAgIGphOiBcIui7ouWAkuaVsOOBruWPluW+l1wiXG4gIH0sXG4gIGdldFJlY2lwcm9jYWw6IHtcbiAgICBqYTogXCLpgIbmlbDjga7lj5blvpdcIlxuICB9LFxuICBnZXRSZXZlcnNlOiB7XG4gICAgamE6IFwi5pWw44Gu6YCG6aCG44Gu5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmFuZG9tTnVtYmVyQnlMaW5lYXJDb25ncnVlbnRpYWxHZW5lcmF0b3JzOiB7XG4gICAgamE6IFwi57ea5b2i5ZCI5ZCM5rOV44Gn44Gu55aR5Ly85Lmx5pWw5Y+W5b6XXCJcbiAgfSxcbiAgZ2V0UmFuZG9tTnVtYmVyQnlNaWRkbGVTcXVhcmVNZXRob2Q6IHtcbiAgICBqYTogXCLlubPmlrnmjqHkuK3ms5Xjgafjga7nlpHkvLzkubHmlbDlj5blvpdcIlxuICB9LFxuICBnZXRSYW5kb21OdW1iZXJCeUxpbmVhckZlZWRiYWNrU2hpZnRSZWdpc3Rlcjoge1xuICAgIGphOiBcIue3muW9ouW4sOmChOOCt+ODleODiOODrOOCuOOCueOCv+OBq+OCiOOCi+eWkeS8vOS5seaVsOWPluW+l1wiXG4gIH1cbn07XG5cbmNvbnN0IHdoYXRJcyA9IGZ1bmN0aW9uKHtuYW1lPVwiXCIsIGxhbmc9XCJqYVwifTogeyBuYW1lOiBzdHJpbmcsIGxhbmc6IHN0cmluZ30pOiBzdHJpbmd7XG4gIGlmKCFuYW1lKXtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGxldCB0YXJnZXQgPSB1dGlsc1tuYW1lXTtcbiAgaWYoIXRhcmdldCl7XG4gICAgdGFyZ2V0ID0gY29yZVtuYW1lXTtcbiAgfVxuXG4gIGNvbnN0IGV4aXN0cyA9IHRhcmdldCA/IHRydWUgOiBmYWxzZTtcbiAgaWYoIWV4aXN0cyl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBjb25zdCByZXMgPSBtYXBbbmFtZV07XG4gIGlmKHJlcyAmJiByZXNbbGFuZ10pe1xuICAgIHJldHVybiByZXNbbGFuZ107XG4gIH1cbiAgY29uc3Qgb3RoZXJfbGFuZyA9IE9iamVjdC5rZXlzKHJlcylbMF07XG4gIGlmKG90aGVyX2xhbmcpe1xuICAgIHJldHVybiByZXNbb3RoZXJfbGFuZ107XG4gIH1cblxuICByZXR1cm4gXCJcIjtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aGF0SXM7IiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmltcG9ydCB7IFN1dU51bWJlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IHJhbmRvbTphbnkgPSB7fTtcclxuXHJcbmNvbnN0IHNlZWRzOmFueSA9IHt9O1xyXG5cclxuY29uc3QgZ2V0U2VlZCA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gc2VlZHNbbmFtZV07XHJcbn07XHJcblxyXG5jb25zdCBzZXRTZWVkID0gKHNlZWQ6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgc2VlZHNbbmFtZV0gPSBzZWVkO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0T3JTZXRTZWVkID0gKHNlZWQ6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiBcclxuICBpZihzZWVkKXtcclxuICAgIHNlZWRzW25hbWVdID0gc2VlZDtcclxuICB9ZWxzZXtcclxuICAgIHNlZWQgPSBzZWVkc1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWVkO1xyXG59O1xyXG5cclxubGV0IHJlZ2lzdGVyMSA9IDB4MTExMTtcclxubGV0IHJlZ2lzdGVyMiA9IDB4MTExMTtcclxuY29uc3QgbGZzciA9IChzZWVkKSA9PiB7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgcmVnaXN0ZXIxLnRvU3RyaW5nKDIpKVxyXG4gIFxyXG4gIGlmKHNlZWQpe1xyXG4gICAgY29uc29sZS5sb2coXCJzZWVkXCIsIHNlZWQudG9TdHJpbmcoMikpXHJcbiAgICByZWdpc3RlcjEgPSAweGZmZmYgJiBzZWVkO1xyXG4gICAgcmVnaXN0ZXIyID0gMHhmZmZmICYgc2VlZDtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIxXCIsIHJlZ2lzdGVyMS50b1N0cmluZygyKSlcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIyXCIsIHJlZ2lzdGVyMi50b1N0cmluZygyKSlcclxuICB9XHJcbiAgbGV0IGJpdDEgPSBzZWVkICYgMHhmZmZmO1xyXG4gIGxldCBiaXQyID0gc2VlZCAmIDB4ZmZmZjtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQxLnRvU3RyaW5nKDIpKVxyXG4gIGNvbnN0IHJlczEgPSAocmVnaXN0ZXIxICYgMHgwMDAxKTtcclxuICBjb25zb2xlLmxvZyhcInJlczFcIiwgcmVzMS50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMyID0gcmVzMSBeICgocmVnaXN0ZXIxICYgMHgwMDA0KSA+PiAyKTtcclxuICBjb25zb2xlLmxvZyhcInJlczJcIiwgcmVzMi50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMzID0gcmVzMiBeICgocmVnaXN0ZXIxICYgMHgwMDA4KSA+PiAzKTtcclxuICBjb25zb2xlLmxvZyhcInJlczNcIiwgcmVzMy50b1N0cmluZygyKSlcclxuICBiaXQxID0gcmVzMyBeICgocmVnaXN0ZXIxICYgMHgwMDIwKSA+PiA1KTtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQxLnRvU3RyaW5nKDIpKVxyXG4gIGJpdDIgPSAocmVnaXN0ZXIyICYgMHgwMDAxKSBeXHJcbiAgICAoKHJlZ2lzdGVyMiAmIDB4MDAwNCkgPj4gMikgXlxyXG4gICAgKChyZWdpc3RlcjIgJiAweDAwMDgpID4+IDMpIF5cclxuICAgICgocmVnaXN0ZXIyICYgMHgwMDIwKSA+PiA1KTtcclxuICAvLyBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcblxyXG4gIHJlZ2lzdGVyMSA9IChyZWdpc3RlcjEgPj4gMSkgfCAoYml0MSA8PCAxNSk7XHJcbiAgcmVnaXN0ZXIyID0gKHJlZ2lzdGVyMiA+PiAxKSB8IChiaXQyIDw8IDE1KTtcclxuICAvLyBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIsIHNlZWQudG9TdHJpbmcoMikpXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlZ2lzdGVyMTogcmVnaXN0ZXIxLFxyXG4gICAgcmVnaXN0ZXIyOiByZWdpc3RlcjIsXHJcbiAgICBiaXQxOiBiaXQxLFxyXG4gICAgYml0MjogYml0MlxyXG4gIH07XHJcblxyXG59XHJcblxyXG5cclxucmFuZG9tLmdldE5vdFJhbmRvbU51bWJlciA9IChzZWVkOiBhbnkpID0+IHtcclxuICBjb25zdCBteU5hbWUgPSBcImdldE5vdFJhbmRvbU51bWJlclwiO1xyXG4gIGNvbnN0IHN0b3JlZFNlZWQgPSBnZXRTZWVkKG15TmFtZSk7XHJcbiAgaWYoIXN0b3JlZFNlZWQpe1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZSBzZWVkIHBhcmFtZXRlclwiKTtcclxuICB9XHJcbiAgc2V0U2VlZChzdG9yZWRTZWVkLCBteU5hbWUpO1xyXG4gIHJldHVybiBjb3JlLmdldFN1dU51bWJlcihzdG9yZWRTZWVkKTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXIgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbnVtID0gTWF0aC5yYW5kb20oKTtcclxuICByZXR1cm4gY29yZS5nZXRTdXVOdW1iZXIobnVtKTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXJCeU1pZGRsZVNxdWFyZU1ldGhvZCA9IChzZWVkOiBhbnkpID0+IHtcclxuICBjb25zdCBteU5hbWUgPSBcImdldFJhbmRvbU51bWJlckJ5TWlkZGxlU3F1YXJlTWV0aG9kXCI7XHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuICBjb25zdCBmaXJzdCA9IGNvcmUuZ2V0U3V1TnVtYmVyKHN0b3JlZFNlZWQgPyBzdG9yZWRTZWVkIDogXCIxMjM0XCIpO1xyXG4gIGNvbnN0IHJlcyA9IHV0aWxzLnNxdWFyZShmaXJzdCk7XHJcbiAgbGV0IHNlY29uZCA9IHJlcy5hcnJheS5zbGljZSgyLCA2KS5qb2luKFwiXCIpO1xyXG4gIGlmKHJlcy5hcnJheS5sZW5ndGggPT09IDcpe1xyXG4gICAgc2Vjb25kID0gcmVzLmFycmF5LnNsaWNlKDEsIDUpLmpvaW4oXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IHNlY29uZG51bSA9IGNvcmUuZ2V0U3V1TnVtYmVyKHNlY29uZCk7XHJcbiAgc2V0U2VlZChzZWNvbmQsIG15TmFtZSk7XHJcbiAgcmV0dXJuIHNlY29uZG51bTtcclxufTtcclxuXHJcbnJhbmRvbS5nZXRSYW5kb21OdW1iZXJCeUxpbmVhckNvbmdydWVudGlhbEdlbmVyYXRvcnMgPSAoc2VlZDogYW55KSA9PiB7XHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXRSYW5kb21OdW1iZXJCeUxpbmVhckNvbmdydWVudGlhbEdlbmVyYXRvcnNcIjtcclxuICBjb25zdCBhID0gY29yZS5nZXRTdXVOdW1iZXIoXCIzXCIpO1xyXG4gIGNvbnN0IGIgPSBjb3JlLmdldFN1dU51bWJlcihcIjVcIik7XHJcbiAgY29uc3QgbSA9IGNvcmUuZ2V0U3V1TnVtYmVyKFwiMTNcIik7XHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuICBjb25zdCBuZXdfc2VlZCA9IGNvcmUuZ2V0U3V1TnVtYmVyKHN0b3JlZFNlZWQgPyBzdG9yZWRTZWVkIDogXCI4XCIpO1xyXG4gIHNldFNlZWQobmV3X3NlZWQsIG15TmFtZSk7XHJcbiAgLy8gKGEgeCBzZWVkICsgYikgbW9kIG1cclxuICBjb25zdCByZXMxID0gY29yZS5tdWx0aXBsZShhLCBuZXdfc2VlZCk7XHJcbiAgY29uc3QgcmVzMiA9IGNvcmUuYWRkKHJlczEsIGIpO1xyXG4gIGNvbnN0IHJlczMgPSBjb3JlLm1vZHVsbyhyZXMyLCBtKTtcclxuICByZXR1cm4gcmVzMztcclxufTtcclxuXHJcbmxldCByZWdpc3RlciA9IDB4MTExMTtcclxucmFuZG9tLmdldFJhbmRvbU51bWJlckJ5TGluZWFyRmVlZGJhY2tTaGlmdFJlZ2lzdGVyID0gKHNlZWQpID0+IHtcclxuXHJcbiAgY29uc3QgbXlOYW1lID0gXCJnZXRSYW5kb21OdW1iZXJCeUxpbmVhckZlZWRiYWNrU2hpZnRSZWdpc3RlclwiO1xyXG4gIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgcmVnaXN0ZXIudG9TdHJpbmcoMikpXHJcbiAgXHJcbiAgY29uc3Qgc3RvcmVkU2VlZCA9IGdldFNlZWQobXlOYW1lKTtcclxuXHJcbiAgaWYoIXN0b3JlZFNlZWQgJiYgc2VlZCl7XHJcbiAgICBzZXRTZWVkKHNlZWQsIG15TmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlZWRcIiwgc2VlZC50b1N0cmluZygyKSlcclxuICAgIHJlZ2lzdGVyID0gMHhmZmZmICYgc2VlZDtcclxuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIxXCIsIHJlZ2lzdGVyLnRvU3RyaW5nKDIpKVxyXG4gIH1cclxuICBsZXQgYml0ID0gc2VlZCAmIDB4ZmZmZjtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMSA9IChyZWdpc3RlciAmIDB4MDAwMSk7XHJcbiAgY29uc29sZS5sb2coXCJyZXMxXCIsIHJlczEudG9TdHJpbmcoMikpXHJcbiAgY29uc3QgcmVzMiA9IHJlczEgXiAoKHJlZ2lzdGVyICYgMHgwMDA0KSA+PiAyKTtcclxuICBjb25zb2xlLmxvZyhcInJlczJcIiwgcmVzMi50b1N0cmluZygyKSlcclxuICBjb25zdCByZXMzID0gcmVzMiBeICgocmVnaXN0ZXIgJiAweDAwMDgpID4+IDMpO1xyXG4gIGNvbnNvbGUubG9nKFwicmVzM1wiLCByZXMzLnRvU3RyaW5nKDIpKVxyXG4gIGJpdCA9IHJlczMgXiAoKHJlZ2lzdGVyICYgMHgwMDIwKSA+PiA1KTtcclxuICBjb25zb2xlLmxvZyhcImJpdFwiLCBiaXQudG9TdHJpbmcoMikpXHJcbiAgcmVnaXN0ZXIgPSAocmVnaXN0ZXIgPj4gMSkgfCAoYml0IDw8IDE1KTtcclxuXHJcbiAgc2V0U2VlZChyZWdpc3RlciwgbXlOYW1lKTtcclxuXHJcbiAgcmV0dXJuIHJlZ2lzdGVyO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tOyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmVcIjtcblxuaW1wb3J0IHsgU3V1TnVtYmVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5jb25zdCB1dGlsczphbnkgPSB7fTtcblxudXRpbHMudHMgPSAoKSA9PiB7cmV0dXJuIFwidHNcIn07XG5cbnV0aWxzLmdldE51bWJlciA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbn07XG5cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBjb25zdCBjID0gY29yZS5jbG9uZShuKTtcbiAgaWYoIWMpe1xuICAgIGNvbnN0IHMgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcobik7XG4gICAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKHMpO1xuICB9XG4gIHJldHVybiBjO1xufTtcblxudXRpbHMuZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXRMYXJnZShhLCBiKTtcbn07XG5cbnV0aWxzLmdldFNtYWxsID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0U21hbGwoYSwgYik7XG59O1xuXG51dGlscy5pc1NtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzU21hbGwoYSwgYik7XG59XG51dGlscy5pc0xhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzTGFyZ2UoYSwgYik7XG59XG5cbnV0aWxzLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbntcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbChhLCBiKTtcbn1cblxudXRpbHMuZ2V0WmVybyA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0WmVybygpO1xufTtcblxudXRpbHMuZ2V0T25lID0gZnVuY3Rpb24oKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbn07XG5cbnV0aWxzLmlzWmVybyA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc1plcm8obik7XG59XG51dGlscy5pc09uZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc09uZShuKTtcbn1cblxudXRpbHMuc3F1YXJlID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUubXVsdGlwbGljYXRpb24obiwgbik7XG59O1xuXG51dGlscy5nZXRBYnNvbHV0ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgY29uc3QgbnVtOiBhbnkgPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKG51bSBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICByZXR1cm4gbnVtO1xuICB9XG4gIGxldCBjbG9uZSA9IGNvcmUuY2xvbmUobnVtKTtcbiAgaWYoY2xvbmUubmVnYXRpdmUpe1xuICAgIGNsb25lID0gdXRpbHMubWFrZVBvc2l0aXZlKGNsb25lKTtcbiAgfVxuICByZXR1cm4gY2xvbmU7XG59O1xuXG51dGlscy5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihiYXNlLCBleHBvbmVudCk6IFN1dU51bWJlcntcbiAgY29uc3QgYiA9IHV0aWxzLmdldE51bWJlcihiYXNlKTtcbiAgY29uc3QgZXhwID0gdXRpbHMuZ2V0TnVtYmVyKGV4cG9uZW50KTtcblxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChleHApKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiTm90IHN1cHBvcnRlZCBpZiBleHBvbmVudCBpcyBkZWNpbWFsXCIsIHBhcmFtZXRlcjogW2V4cG9uZW50XX0pO1xuICB9XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihleHApKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiRXhwb25lbnQgbXVzdCBiZSBpbnRlZ2VyXCIsIHBhcmFtZXRlcjogW2V4cG9uZW50XX0pO1xuICB9XG4gIFxuICBpZih1dGlscy5pc1plcm8oZXhwKSl7XG4gICAgcmV0dXJuIGNvcmUuZ2V0T25lKCk7XG4gIH1cbiAgaWYodXRpbHMuaXNPbmUoZXhwKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBsZXQgbXVsdGkgPSB0cnVlO1xuICBpZihjb3JlLmlzU21hbGwoZXhwLCBjb3JlLmdldFplcm8oKSkpe1xuICAgIG11bHRpID0gZmFsc2U7XG4gIH1cblxuICBsZXQgY291bnQgPSBjb3JlLmdldE9uZSgpO1xuICBjb25zdCBleHBfYWJzID0gdXRpbHMuZ2V0QWJzb2x1dGUoZXhwKTtcbiAgY29uc3QgZ2V0Qm9vbCA9IChjb3VudCkgPT4ge1xuICAgIHJldHVybiBjb3JlLmlzU21hbGwoY291bnQsIGV4cF9hYnMpO1xuICB9XG4gIGxldCByZXMgPSBiO1xuICBsZXQgYm9vbCA9IGdldEJvb2woY291bnQpO1xuICB3aGlsZShib29sKXtcbiAgICBpZihtdWx0aSl7XG4gICAgICByZXMgPSBjb3JlLm11bHRpcGxlKHJlcywgYik7XG4gICAgfWVsc2V7XG4gICAgICByZXMgPSBjb3JlLmRpdmlkZShyZXMsIGIpO1xuICAgIH1cbiAgICBjb3VudCA9IGNvcmUuYWRkKGNvdW50LCBcIjFcIik7XG4gICAgYm9vbCA9IGdldEJvb2woY291bnQpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG51dGlscy5nZXRJbnRlZ2VyID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgbGV0IHN0ciA9IFwiXCI7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBuLmRlY2ltYWxfaW5kZXg7IGkrKyl7XG4gICAgY29uc3QgcyA9IFN0cmluZyhuLmFycmF5W2ldKTtcbiAgICBzdHIgPSBzdHIgKyBzO1xuICB9XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihzdHIpO1xuICByZXR1cm4gbnVtO1xufTtcblxudXRpbHMuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLmdldERlY2ltYWwobik7XG59O1xuXG51dGlscy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwobik7XG4gIGNvbnN0IGlzX3plcm8gPSB1dGlscy5pc1plcm8oZGVjaW1hbCk7XG4gIGlmKGlzX3plcm8gJiYgIW4ubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmluY2x1ZGVEZWNpbWFsID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKGRlY2ltYWwpO1xuICBpZihpc196ZXJvKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG51dGlscy5pc05lZ2F0aXZlID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGlmKHV0aWxzLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIHJldHVybiBuXy5uZWdhdGl2ZTtcbn07XG5cbnV0aWxzLmlzUG9zaXRpdmUgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgbl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgcmV0dXJuICFuXy5uZWdhdGl2ZTtcbn07XG5cbnV0aWxzLm5lZ2F0ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IG51bSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICBpZihudW0pe1xuICAgIG51bS5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn07XG5cbnV0aWxzLm1ha2VQb3NpdGl2ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IG51bSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICBpZihudW0pe1xuICAgIG51bS5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBudW07XG59O1xuXG51dGlscy5nZXROZWdhdGl2ZU51bWJlciA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiB1dGlscy5uZWdhdGUobik7XG59O1xuXG51dGlscy5nZXRQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IG51bSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICBpZihudW0pe1xuICAgIG51bS5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBudW07XG59O1xuXG51dGlscy5nZXROZXh0ID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuYWRkKG4sIFwiMVwiKTtcbn07XG5cbnV0aWxzLmdldFByZXYgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5zdWJ0cmFjdChuLCBcIjFcIik7XG59O1xuXG51dGlscy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBpZih1dGlscy5pc0VxdWFsKGRlY2ltYWwsIFwiMFwiKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xuXG59O1xuXG5cbnV0aWxzLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcmVzID0gY29yZS5tb2R1bG8obiwgXCIyXCIpO1xuXG4gIGNvbnN0IGlzX3plcm8gPSB1dGlscy5pc1plcm8ocmVzKTtcbiAgaWYoaXNfemVybyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaXNPZGROdW1iZXIgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhuLCBcIjJcIik7XG5cbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhyZXMpO1xuICBpZighaXNfemVybyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG51dGlscy5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgaW50ZWdlclwiLCBwYXJhbWV0ZXI6IFtuXX0pO1xuICB9XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgY29uc3QgbnVtOiBTdXVOdW1iZXIgPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYoIW51bSl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBpZihjb3JlLmlzWmVybyhudW0pKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKHV0aWxzLmlzTmF0dXJhbE51bWJlcihudW0pKXtcbiAgICBpZihjb3JlLmlzT25lKG51bSkpe1xuICAgICAgYXJyLnB1c2gobnVtKVxuICAgIH1lbHNle1xuICAgICAgZm9yKGxldCBpID0gY29yZS5nZXRPbmUoKTsgY29yZS5pc0VxdWFsKG51bSwgaSkgfHwgY29yZS5pc0xhcmdlKG51bSwgaSk7IGkgPSBjb3JlLmFkZChpLCBcIjFcIikpe1xuICAgICAgICBjb25zdCByZXM9IGNvcmUuZGl2aXNpb24obnVtLCBpKTtcbiAgICAgICAgaWYoIXV0aWxzLmlzTmF0dXJhbE51bWJlcihyZXMpKXtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1haW5kZXIgPSByZXMucmVtYWluZGVyO1xuICAgICAgICBpZihjb3JlLmlzWmVybyhyZW1haW5kZXIpKXtcbiAgICAgICAgICBhcnIucHVzaCh1dGlscy5nZXROdW1iZXIoaSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5jb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIGlmKCFhICYmIGEgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYoIWIgJiYgYiAhPT0gMCl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHRyeXtcbiAgICBjb25zdCBhXzogU3V1TnVtYmVyID0gdXRpbHMuZ2V0TnVtYmVyKGEpO1xuICAgIGNvbnN0IGJfOiBTdXVOdW1iZXIgPSB1dGlscy5nZXROdW1iZXIoYik7XG4gICAgXG4gICAgY29uc3QgYV9kaXZpc29yczogU3V1TnVtYmVyW10gPSB1dGlscy5nZXREaXZpc29ycyhhXyk7XG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgcmV0dXJuIGFfZGl2aXNvcnM7XG4gICAgfVxuICAgIGNvbnN0IGJfZGl2aXNvcnM6IFN1dU51bWJlcltdID0gdXRpbHMuZ2V0RGl2aXNvcnMoYl8pO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhX2Rpdmlzb3JzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGFfbjogU3V1TnVtYmVyID0gYV9kaXZpc29yc1tpXTtcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBiX2Rpdmlzb3JzLmxlbmd0aDsgaisrKXtcbiAgICAgICAgY29uc3QgYl9uOiBTdXVOdW1iZXIgPSBiX2Rpdmlzb3JzW2pdO1xuICAgICAgICBpZihjb3JlLmlzRXF1YWwoYV9uLCBiX24pKXtcbiAgICAgICAgICBhcnIucHVzaChhX24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5ncmVhdGVzdENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIHRyeXtcbiAgICBjb25zdCBhcnIgPSB1dGlscy5jb21tb25EaXZpc29ycyhhLCBiKTtcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmNvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYiwgbGltaXQpOiBTdXVOdW1iZXJbXSB8IEVycm9ye1xuXG4gIGNvbnN0IGxpbWl0X2xlbmd0aCA9IGxpbWl0ID8gbGltaXQgOiAxMDtcbiAgY29uc3QgYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICBpZighYSAmJiBhICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKCFiICYmIGIgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICB0cnl7XG4gICAgY29uc3QgYV8gPSB1dGlscy5nZXROdW1iZXIoYSk7XG4gICAgY29uc3QgYl8gPSB1dGlscy5nZXROdW1iZXIoYik7XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICBhcnIucHVzaChhXyk7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IGJfYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbGltaXRfbGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgYV9udW0gPSBjb3JlLm11bHRpcGxlKGFfLCBpKTtcbiAgICAgIGFfYXJyLnB1c2goYV9udW0pO1xuICAgIH1cbiAgICBmb3IobGV0IGogPSAxOyBqIDw9IGxpbWl0X2xlbmd0aDsgaisrKXtcbiAgICAgIGNvbnN0IGJfbnVtID0gY29yZS5tdWx0aXBsZShiXywgaik7XG4gICAgICBiX2Fyci5wdXNoKGJfbnVtKTtcbiAgICB9XG5cbiAgICBhX2Fyci5mb3JFYWNoKGFfbiA9PiB7XG4gICAgICBjb25zdCB0Z3QgPSBiX2Fyci5maW5kKGJfbiA9PiBjb3JlLmlzRXF1YWwoYV9uLCBiX24pKTtcbiAgICAgIGlmKHRndCl7XG4gICAgICAgIGFyci5wdXNoKHRndCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiLCBsaW1pdF19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYiwgbGltaXRdfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5sZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYiwgbGltaXQpOiBTdXVOdW1iZXIge1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gdXRpbHMuY29tbW9uTXVsdGlwbGUoYSwgYiwgbGltaXQpO1xuICByZXR1cm4gYXJyWzBdO1xufTtcblxuXG5jb25zdCBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24gPSBmdW5jdGlvbih7YXJyYXksIGxpbWl0fSk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuXG4gIGNvbnN0IG1heCA9IGxpbWl0ID8gbGltaXQgOiAxMDA7XG5cbiAgY29uc3QgaXRlbXNfbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnJheSl7XG4gICAgaWYoYXJyYXkubGVuZ3RoID49IG1heCl7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHRyeXtcbiAgICAgIGxldCByZXMgPSB1dGlscy5nZXROdW1iZXIoXCIwXCIpO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGl0ZW1zX2xlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5sZW5ndGggLSAoaXRlbXNfbGVuZ3RoIC0gaSk7XG4gICAgICAgIGNvbnN0IG51bSA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgcmVzID0gY29yZS5hZGQocmVzLCBudW0pO1xuICAgICAgfVxuICAgICAgYXJyYXkucHVzaChyZXMpO1xuICAgICAgcmV0dXJuIGZ1bmMoYXJyYXkpO1xuICAgIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthcnJheSwgbGltaXRdfSlcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheSwgbGltaXRdfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gZnVuYyhhcnJheSk7XG59O1xuXG5jb25zdCBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5ID0gZnVuY3Rpb24oeyBmaXJzdD1cIjBcIiwgbGFzdD1cIjFcIiwgbGVuZ3RoPTIgfSk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBsZW4gPSBsZW5ndGg7XG4gIGNvbnN0IGEgPSB1dGlscy5nZXROdW1iZXIoZmlyc3QpO1xuICBjb25zdCBiID0gdXRpbHMuZ2V0TnVtYmVyKGxhc3QpO1xuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIHRyeXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IHRndCA9IGE7XG4gICAgICBpZihpID09PSAobGVuIC0xKSl7XG4gICAgICAgIHRndCA9IGI7XG4gICAgICB9XG4gICAgICBhcnIucHVzaCh0Z3QpO1xuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbZmlyc3QsIGxhc3QsIGxlbmd0aF19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbZmlyc3QsIGxhc3QsIGxlbmd0aF19KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbnV0aWxzLm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0PVwiMFwiLCBsYXN0PVwiMVwiKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0LCBsYXN0LCBsZW5ndGg6IDJ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVRyaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDN9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVRldHJhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDR9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVBlbnRhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDV9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUhleGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogNn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlSGVwdGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogN30pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlT2N0YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA4fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VOb25hbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDl9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZURlY2FuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMTB9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVVuZGVjYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAxMX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlRG9kZWNhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDEyfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VJY29zYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAyMH0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlTHVjYVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjJcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5zdW1tYXRpb24gPSBmdW5jdGlvbihhcnJheSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWFycmF5IHx8ICFBcnJheS5pc0FycmF5KGFycmF5KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIEFycmF5LlwiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJhcnJheSBsZW5ndGggaXMgemVyb1wiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBsZXQgc3VtID0gY29yZS5nZXRaZXJvKCk7XG4gIGlmKEFycmF5LmlzQXJyYXkoYXJyYXkpKXtcbiAgICB0cnl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBzdW0gPSBjb3JlLmFkZChzdW0sIGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyYXldfSlcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheV19KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cbnV0aWxzLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKGFycmF5KTogU3V1TnVtYmVyIHwgRXJyb3J7XG4gIGlmKCFhcnJheSB8fCAhQXJyYXkuaXNBcnJheShhcnJheSkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBBcnJheS5cIiwgcGFyYW1ldGVyOiBbYXJyYXldfSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdXRpbHMuZ2V0TnVtYmVyKGFycmF5WzBdKTtcbiAgfVxuICBsZXQgcmVzID0gYXJyYXlbMF07XG4gIHRyeXtcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgcmVzID0gY29yZS5tdWx0aXBsZShyZXMsIGFycmF5W2ldKTtcbiAgICB9XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FycmF5XX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthcnJheV19KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbnV0aWxzLmRpZ2l0U3VtID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKCFuIHx8ICFBcnJheS5pc0FycmF5KG4uYXJyYXkpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbiAgbGV0IHJlcyA9IGNvcmUuZ2V0WmVybygpO1xuICBpZihjb3JlLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICB0cnl7XG4gICAgcmVzID0gdXRpbHMuc3VtbWF0aW9uKG4uYXJyYXkpXG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5tYWtlVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuICBpZihjb3JlLmlzWmVybyhuKSB8fCB1dGlscy5pc05lZ2F0aXZlKG4pIHx8ICF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuICBcbiAgY29uc3QgcmVzMSA9IGNvcmUubXVsdGlwbGUobiwgY29yZS5hZGQobiwgXCIxXCIpKTtcbiAgY29uc3QgcmVzMiA9IGNvcmUuZGl2aWRlKHJlczEsIFwiMlwiKTtcbiAgcmV0dXJuIHJlczI7XG59O1xuXG51dGlscy5tYWtlUHJvbmljTnVtYmVyID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gY29yZS5nZXRaZXJvKCk7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShuKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0ICByZXMgPSBjb3JlLm11bHRpcGxlKG4sIGNvcmUuYWRkKG4sIFwiMVwiKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mYWN0b3JpYWwgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pIHx8IGNvcmUuaXNPbmUobikpe1xuICAgIHJldHVybiBjb3JlLmdldE9uZSgpO1xuICB9XG5cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShuKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cblxuICBsZXQgZ28gPSB0cnVlO1xuICBsZXQgdGVtcCA9IG47XG4gIGxldCBjdXJyZW50ID0gbjtcbiAgY29uc3QgYXJyID0gW3RlbXBdO1xuICB0cnl7XG4gICAgd2hpbGUoZ28pe1xuICAgICAgY29uc3QgdGFyZ2V0ID0gY29yZS5zdWJ0cmFjdChjdXJyZW50LCBcIjFcIik7XG4gICAgICBhcnIucHVzaCh0YXJnZXQpO1xuICAgICAgY3VycmVudCA9IHRhcmdldDtcbiAgICAgIGlmKGNvcmUuaXNTbWFsbChjdXJyZW50LCBcIjJcIikpe1xuICAgICAgICBnbyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMuaW5maW5pdGVQcm9kdWN0KGFycik7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW251bV19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbbnVtXX0pO1xuICAgIH1cbiAgfVxufTtcblxuXG51dGlscy5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBudW0xID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihudW0xKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzWmVybyhudW0xKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobnVtMSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc0V2ZW5OdW1iZXIobnVtMSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc0VxdWFsKG51bTEsIFwiMVwiKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBudW0yID0gY29yZS5hZGQobnVtMSwgXCIxXCIpO1xuXG4gIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgbGV0IG4gPSBudW0yO1xuICB3aGlsZSh0cnVlKXtcbiAgICBuID0gY29yZS5kaXZpc2lvbihuLCBcIjJcIik7XG4gICAgaWYoIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYodXRpbHMuaXNFcXVhbChuLCBcIjFcIikpe1xuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZih1dGlscy5pc0VxdWFsKG4sIFwiMlwiKSl7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKHV0aWxzLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG5cbn07XG5cbnV0aWxzLm1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuXG4gIGNvbnN0IG1heF8gPSB1dGlscy5nZXROdW1iZXIoMjUpO1xuXG4gIGlmKCFtYXggfHwgY29yZS5pc0xhcmdlKG1heCwgbWF4Xykpe1xuICAgIG1heCA9IG1heF87XG4gIH1cblxuICBtYXggPSBjb3JlLmFkZChtYXgsIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICBjb25zdCB0d28gPSB1dGlscy5nZXROdW1iZXIoMik7XG4gIGNvbnN0IGFycjpTdXVOdW1iZXJbXSAgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXROdW1iZXIoMCk7XG4gIGxldCBleCA9IHV0aWxzLmdldE51bWJlcigxKTtcbiAgXG4gIHdoaWxlKGNvcmUuaXNTbWFsbChleCwgbWF4KSl7XG4gICAgY3VycmVudCA9IHV0aWxzLmV4cG9uZW50aWF0ZSh0d28sZXgpO1xuICAgIGN1cnJlbnQgPSBjb3JlLnN1YnRyYWN0KGN1cnJlbnQsIHV0aWxzLmdldE51bWJlcigxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBjb3JlLmFkZChleCwgdXRpbHMuZ2V0TnVtYmVyKDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gdXRpbHMudHJpYWxEaXZpc2lvbiA9IGZ1bmN0aW9uKG4pe1xuLy8gICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4vLyB9O1xuXG51dGlscy5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgaWYodXRpbHMuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc09uZShudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pc0VxdWFsKG51bSwgXCIyXCIpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzRXZlbk51bWJlcihudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChudW0pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMFwiKSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByZXYgPSBjb3JlLnN1YnRyYWN0KG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gIGxldCBjdXJyZW50ID0gY29yZS5kaXZpc2lvbihwcmV2LCB1dGlscy5nZXROdW1iZXIoXCIyXCIpKTtcblxuICBsZXQgaXNfcHJpbWUgPSB0cnVlO1xuXG4gIHdoaWxlKGlzX3ByaW1lICYmIGNvcmUuaXNMYXJnZShjdXJyZW50LCB1dGlscy5nZXROdW1iZXIoXCIyXCIpKSl7XG5cbiAgICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhudW0sIGN1cnJlbnQpO1xuICAgIGlmKHV0aWxzLmlzWmVybyhyZXMpKXtcbiAgICAgIGlzX3ByaW1lID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY3VycmVudCA9IGNvcmUuc3VidHJhY3QoY3VycmVudCwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gIH1cblxuICByZXR1cm4gaXNfcHJpbWU7XG5cbn07XG5cbnV0aWxzLm1ha2VQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXhsZW5ndGgpe1xuICBjb25zdCBtYXhfbGVuZ3RoID0gdXRpbHMuZ2V0TnVtYmVyKDI1KTtcbiAgaWYoIW1heGxlbmd0aCB8fCBjb3JlLmlzTGFyZ2UobWF4bGVuZ3RoLCBtYXhfbGVuZ3RoKSl7XG4gICAgbWF4bGVuZ3RoID0gbWF4X2xlbmd0aDtcbiAgfVxuICBjb25zdCBhcnI6U3V1TnVtYmVyW10gPSBbXTtcbiAgbGV0IG51bSA9IHV0aWxzLmdldE51bWJlcihcIjBcIik7XG4gIGxldCBjb3VudCA9IHV0aWxzLmdldFplcm8oKTtcbiAgd2hpbGUoY29yZS5pc1NtYWxsKGNvdW50LCBtYXhsZW5ndGgpKXtcbiAgICBudW0gPSBjb3JlLmFkZChudW0sIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICAgIGlmKHV0aWxzLmlzUHJpbWVOdW1iZXIobnVtKSl7XG4gICAgICBhcnIucHVzaChudW0pO1xuICAgICAgY291bnQgPSB1dGlscy5nZXROdW1iZXIoYXJyLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodXRpbHMuaXNQcmltZU51bWJlcihuKSAmJiB1dGlscy5pc01lcnNlbm5lTnVtYmVyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc0NvbXBvc2l0ZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuICBpZih1dGlscy5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHV0aWxzLmlzT25lKG51bSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgcmVzID0gdXRpbHMuaXNQcmltZU51bWJlcihudW0pO1xuXG4gIGlmKHJlcyBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodHlwZW9mIHJlcyA9PT0gXCJib29sZWFuXCIpe1xuICAgIHJldHVybiAhcmVzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmlzSGFyc2hhZE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgXCIwXCIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobnVtKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZGl2aXNvcnMgPSB1dGlscy5nZXREaXZpc29ycyhuKTtcblxuICBjb25zdCBkc3VtID0gdXRpbHMuZGlnaXRTdW0obik7XG5cbiAgbGV0IGJvb2wgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGRpdmlzb3JzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBkID0gZGl2aXNvcnNbaV07XG4gICAgaWYodXRpbHMuaXNFcXVhbChkLCBkc3VtKSl7XG4gICAgICBib29sID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm9vbDtcbn07XG5cbnV0aWxzLmlzWnVja2VybWFuTnVtYmVyID0gZnVuY3Rpb24obil7XG5cbiAgbGV0IHJlcyA9IGZhbHNlO1xuXG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYodXRpbHMuaXNFcXVhbChcIjBcIikpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIFxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuXG4gIGNvbnN0IHByb2R1Y3QgPSB1dGlscy5pbmZpbml0ZVByb2R1Y3QobnVtLmFycmF5KTtcbiAgY29uc3QgZGl2aXNvcnMgPSB1dGlscy5nZXREaXZpc29ycyhuKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgZGl2aXNvcnMubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGQgPSBkaXZpc29yc1tpXTtcbiAgICBpZih1dGlscy5pc0VxdWFsKHByb2R1Y3QsIGQpKXtcbiAgICAgIHJlcyA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbnV0aWxzLmlzUmVwdW5pdE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgcmVzID0gZmFsc2U7XG5cbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc0VxdWFsKFwiMFwiKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBpZih1dGlscy5pc05lZ2F0aXZlKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobnVtKSl7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGNvbnN0IGFyciA9IG51bS5hcnJheTtcbiAgcmVzID0gdHJ1ZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyW2ldO1xuICAgIGlmKGVsbSAhPT0gMSl7XG4gICAgICByZXMgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBzb3J0ID0gZnVuY3Rpb24oYXJyYXk6IFtdLCBvcmRlcj86IFwiYXNjXCIgfCBcImRlc2NcIil7XG5cbiAgY29uc3QgbmV3X2FyciA9IFsuLi5hcnJheV07XG5cbiAgY29uc3QgYXNjID0gKGFfbiwgYl9uKSA9PiB7XG4gICAgaWYoYV9uIDwgYl9uKXtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9ZWxzZSBpZihhX24gPiBiX24pe1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IGRlc2MgPSAoYV9uLCBiX24pID0+IHtcbiAgICBpZihhX24gPCBiX24pe1xuICAgICAgcmV0dXJuIDE7XG4gICAgfWVsc2UgaWYoYV9uID4gYl9uKXtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgbmV3X2Fyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYV9uID0gTnVtYmVyKGEpO1xuICAgIGNvbnN0IGJfbiA9IE51bWJlcihiKTtcblxuICAgIGlmKG9yZGVyID09PSBcImFzY1wiKXtcbiAgICAgIHJldHVybiBhc2MoYV9uLCBiX24pO1xuICAgIH1lbHNlIGlmKG9yZGVyID09PSBcImRlc2NcIil7XG4gICAgICByZXR1cm4gZGVzYyhhX24sIGJfbik7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gYXNjKGFfbiwgYl9uKVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdfYXJyO1xuXG59O1xuXG51dGlscy5nZXRJbnZlcnNpb25OdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgbGV0IGNvdW50ID0gdXRpbHMuZ2V0WmVybygpO1xuXG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZih1dGlscy5pc0VxdWFsKFwiMFwiKSl7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBpZih1dGlscy5pc05lZ2F0aXZlKG51bSkpe1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGNvbnN0IG9yZGVyZWRBcnJheTogYW55W10gPSBzb3J0KG51bS5hcnJheSwgXCJhc2NcIik7XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IG51bS5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3Qgb3JkZXJlZF9lbG0gPSBvcmRlcmVkQXJyYXlbaV07XG4gICAgY29uc3Qgb3JpZ2luYWxfZWxtID0gbnVtLmFycmF5W2ldO1xuICAgIGNvbnN0IGdhcCA9IGNvcmUuc3VidHJhY3Qob3JkZXJlZF9lbG0sIG9yaWdpbmFsX2VsbSk7XG4gICAgaWYodXRpbHMuaXNOZWdhdGl2ZShnYXApKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZih1dGlscy5pc1plcm8oZ2FwKSl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY291bnQgPSBjb3JlLmFkZChjb3VudCwgZ2FwKTtcbiAgfVxuXG4gIHJldHVybiBjb3VudDtcblxufTtcblxuXG51dGlscy5nZXRSZWNpcHJvY2FsID0gZnVuY3Rpb24obil7XG4gIGxldCByZXMgPSBudWxsO1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKHV0aWxzLmlzWmVybyhudW0pKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaWYodXRpbHMuaXNPbmUobnVtKSl7XG4gICAgcmV0dXJuIHV0aWxzLmdldE9uZSgpO1xuICB9XG5cbiAgcmVzID0gY29yZS5kaXZpc2lvbih1dGlscy5nZXRPbmUoKSwgbnVtKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG51dGlscy5nZXRSZXZlcnNlID0gZnVuY3Rpb24obil7XG4gIGxldCByZXMgPSBudWxsO1xuXG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG5cbiAgaWYobnVtLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGlmKHV0aWxzLmluY2x1ZGVEZWNpbWFsKG51bSkpe1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMTBcIikpKXtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY29uc3QgYXJyYXkgPSBbLi4ubnVtLmFycmF5XS5yZXZlcnNlKCk7XG4gIGNvbnN0IHN0ciA9IGFycmF5LmpvaW4oXCJcIik7XG4gIGNvbnN0IG5ld19udW0gPSB1dGlscy5nZXROdW1iZXIoc3RyKTtcblxuICByZXR1cm4gbmV3X251bTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgcmFuZG9tIGZyb20gXCIuL3JhbmRvbVwiO1xuaW1wb3J0IGRvYyBmcm9tIFwiLi9kb2NcIjtcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb3JlOiBjb3JlLFxuICB1dGlsczogdXRpbHMsXG4gIHJhbmRvbTogcmFuZG9tLFxuICBkb2M6IGRvYyxcbiAgY29uc3RhbnRzOiBjb25zdGFudHMsXG4gIHRzOiB0cnVlLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=