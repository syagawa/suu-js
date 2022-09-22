const assert = require('assert');
const app = require("../app.js");
const core = app.core2;

const checkRmainderAndQuotient = function({ dividend, divisor, quotient, remainder}){
  const temp = core.multiple(divisor, quotient);
  const result = core.add(temp, remainder);
  return {
    dividend_parameter: dividend,
    dividend_result: result,
    equal: core.isEqual(result, dividend) ? true : false,
  }
};


describe("core", function(){

  describe("numToArrayWithDecimal", function(){
    it("0", () => {
      const zero = 0;
      const res = core.numToArrayWithDecimal(zero);
      assert.equal(res.array.length, 1);
      assert.equal(res.array[0], 0);
      assert.equal(res.decimal_index, 1);
      assert.equal(res.negative, false);
    });
    it("0.000000000000000000001", () => {
      const str = "0.000000000000000000001";
      const res = core.numToArrayWithDecimal(str);
      assert.equal(res.array.length, 22);
      assert.equal(res.array[0], 0);
      assert.equal(res.decimal_index, 1);
      assert.equal(res.negative, false);
    });
    it("1234567890.00000000000000000000", () => {
      const str = "1234567890.00000000000000000000";
      const res = core.numToArrayWithDecimal(str);
      assert.equal(res.array.length, 10);
      assert.equal(res.array[0], 1);
      assert.equal(res.decimal_index, 10);
      assert.equal(res.negative, false);
    });
    it("-1234567890.00000000000000000001", () => {
      const str = "-1234567890.00000000000000000001";
      const res = core.numToArrayWithDecimal(str);
      assert.equal(res.array.length, 30);
      assert.equal(res.array[0], 1);
      assert.equal(res.decimal_index, 10);
      assert.equal(res.negative, true);
    });

    it("'' => 0", () => {
      const str = "";
      const res = core.numToArrayWithDecimal(str);
      assert.equal(res.array.length, 1);
      assert.equal(res.array[0], 0);
      assert.equal(res.decimal_index, 1);
      assert.equal(res.negative, false);
    });

    it("null => Error", () => {
      const par = null;
      let error = null;
      try{
        core.numToArrayWithDecimal(par);
      }catch(err){
        error = err;
      }
      const res = error.name.match(/error/i) ? true : false;
      assert.equal(res, true);
    });

    it("undefined => Error", () => {
      const par = undefined;
      let error = null;
      try{
        core.numToArrayWithDecimal(par);
      }catch(err){
        error = err;
      }
      const res = error.name.match(/error/i) ? true : false;
      assert.equal(res, true);
    });

  });
  describe("isZero", function(){
    it("0 is true", () => {
      const zero = core.numToArrayWithDecimal("0");
      const res = core.isZero(zero);
      assert.equal(res, true);
    });
    it("1 is false", () => {
      const one = core.numToArrayWithDecimal("1");
      const res = core.isZero(one);
      assert.equal(res, false);
    });
    it("0.0 is true", () => {
      const zero = core.numToArrayWithDecimal("0.0");
      const res = core.isZero(zero);
      assert.equal(res, true);
    });
  });
  describe("isOne", function(){
    it("1 is true", () => {
      const one = core.numToArrayWithDecimal("1");
      const res = core.isOne(one);
      assert.equal(res, true);
    });
    it("1.0 is true", () => {
      const one = core.numToArrayWithDecimal("1.0");
      const res = core.isOne(one);
      assert.equal(res, true);
    });
    it("0 is false", () => {
      const zero = core.numToArrayWithDecimal("0");
      const res = core.isOne(zero);
      assert.equal(res, false);
    });
  });
  describe("compare", function(){
    it("1, 2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num2);
      assert.equal(res.small, num1);
      assert.equal(res.equal, false);
    });
    it("2, 1", () => {
      const num1 = core.numToArrayWithDecimal("2");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });
    it("1, 1", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, null);
      assert.equal(res.small, null);
      assert.equal(res.equal, true);
    });
    it("0, 0", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.compare(num1, num2);
      assert.equal(res.large, null);
      assert.equal(res.small, null);
      assert.equal(res.equal, true);
    });
    it("-1, -1", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("-1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, null);
      assert.equal(res.small, null);
      assert.equal(res.equal, true);
    });

    it("-1, -2", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });
    it("1, -2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });

    it("1, 0.1", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });

    it("0, 0.1", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num2);
      assert.equal(res.small, num1);
      assert.equal(res.equal, false);
    });
    it("0, -0.1", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("-0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });
    it("-0.1, -0.1", () => {
      const num1 = core.numToArrayWithDecimal("-0.1");
      const num2 = core.numToArrayWithDecimal("-0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, null);
      assert.equal(res.small, null);
      assert.equal(res.equal, true);
    });
    it("0.1, -0.1", () => {
      const num1 = core.numToArrayWithDecimal("0.1");
      const num2 = core.numToArrayWithDecimal("-0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });

    it("0.000001, 0.1", () => {
      const num1 = core.numToArrayWithDecimal("0.000001");
      const num2 = core.numToArrayWithDecimal("0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num2);
      assert.equal(res.small, num1);
      assert.equal(res.equal, false);
    });
    it("0.000001, -0.1", () => {
      const num1 = core.numToArrayWithDecimal("0.000001");
      const num2 = core.numToArrayWithDecimal("-0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });
    it("1000, 1001", () => {
      const num1 = core.numToArrayWithDecimal("1000");
      const num2 = core.numToArrayWithDecimal("1001");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num2);
      assert.equal(res.small, num1);
      assert.equal(res.equal, false);
    });
  });

  describe("getLarge", function(){
    it("1, 2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.getLarge(num1, num2);
      assert.equal(res, num2);
    });

    it("1, -2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.getLarge(num1, num2);
      assert.equal(res, num1);
    });

    it("-1, -2", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.getLarge(num1, num2);
      assert.equal(res, num1);
    });

    it("1, 2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.getSmall(num1, num2);
      assert.equal(res, num1);
    });
  });

  describe("getSmall", function(){
    it("1, -2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.getSmall(num1, num2);
      assert.equal(res, num2);
    });

    it("-1, -2", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.getSmall(num1, num2);
      assert.equal(res, num2);
    });
  });

  describe("isEqual", function(){
    it("1, 2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.isEqual(num1, num2);
      assert.equal(res, false);
    });

    it("1, 1", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.isEqual(num1, num2);
      assert.equal(res, true);
    });

    it("1, 1.00000000", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("1.00000000");
      const res = core.isEqual(num1, num2);
      assert.equal(res, true);
    });

    it("0, 0", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.isEqual(num1, num2);
      assert.equal(res, true);
    });

    it("1, -1", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("-1");
      const res = core.isEqual(num1, num2);
      assert.equal(res, false);
    });
  });

  describe("isSmall", function(){
    it("1 < 2 => true", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.isSmall(num1, num2);
      assert.equal(res, true);
    });

    it("2 < 1 => false", () => {
      const num1 = core.numToArrayWithDecimal("2");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.isSmall(num1, num2);
      assert.equal(res, false);
    });

    it("1 < 1 => false", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.isSmall(num1, num2);
      assert.equal(res, false);
    });

    it("1.0 < 1.1 => true", () => {
      const num1 = core.numToArrayWithDecimal("1.0");
      const num2 = core.numToArrayWithDecimal("1.1");
      const res = core.isSmall(num1, num2);
      assert.equal(res, true);
    });

    it("1.1 < 1.0 => false", () => {
      const num1 = core.numToArrayWithDecimal("1.1");
      const num2 = core.numToArrayWithDecimal("1.0");
      const res = core.isSmall(num1, num2);
      assert.equal(res, false);
    });

    it("1.1 < 1.1 => false", () => {
      const num1 = core.numToArrayWithDecimal("1.1");
      const num2 = core.numToArrayWithDecimal("1.1");
      const res = core.isSmall(num1, num2);
      assert.equal(res, false);
    });

    it("0 < 1 => true", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.isSmall(num1, num2);
      assert.equal(res, true);
    });

    it("1 < 0 => false", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.isSmall(num1, num2);
      assert.equal(res, false);
    });

    it("-1 < 0 => true", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.isSmall(num1, num2);
      assert.equal(res, true);
    });

    it("0 < -1 => false", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("-1");
      const res = core.isSmall(num1, num2);
      assert.equal(res, false);
    });

    it("0 < 0 => false", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.isSmall(num1, num2);
      assert.equal(res, false);
    });

    it("1.1 < -1.1 => false", () => {
      const num1 = core.numToArrayWithDecimal("1.1");
      const num2 = core.numToArrayWithDecimal("-1.1");
      const res = core.isSmall(num1, num2);
      assert.equal(res, false);
    });

    it("-1.1 < 1.1 => true", () => {
      const num1 = core.numToArrayWithDecimal("-1.1");
      const num2 = core.numToArrayWithDecimal("1.1");
      const res = core.isSmall(num1, num2);
      assert.equal(res, true);
    });

  });

  describe("isLarge", function(){
    it("1 > 2 => false", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.isLarge(num1, num2);
      assert.equal(res, false);
    });

    it("2 > 1 => true", () => {
      const num1 = core.numToArrayWithDecimal("2");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.isLarge(num1, num2);
      assert.equal(res, true);
    });

    it("1 > 1 => false", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.isLarge(num1, num2);
      assert.equal(res, false);
    });

    it("1.0 > 1.1 => false", () => {
      const num1 = core.numToArrayWithDecimal("1.0");
      const num2 = core.numToArrayWithDecimal("1.1");
      const res = core.isLarge(num1, num2);
      assert.equal(res, false);
    });

    it("1.1 > 1.0 => true", () => {
      const num1 = core.numToArrayWithDecimal("1.1");
      const num2 = core.numToArrayWithDecimal("1.0");
      const res = core.isLarge(num1, num2);
      assert.equal(res, true);
    });

    it("1.1 > 1.1 => false", () => {
      const num1 = core.numToArrayWithDecimal("1.1");
      const num2 = core.numToArrayWithDecimal("1.1");
      const res = core.isLarge(num1, num2);
      assert.equal(res, false);
    });

    it("0 > 1 => false", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.isLarge(num1, num2);
      assert.equal(res, false);
    });

    it("1 > 0 => true", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.isLarge(num1, num2);
      assert.equal(res, true);
    });

    it("-1 > 0 => false", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.isLarge(num1, num2);
      assert.equal(res, false);
    });

    it("0 > -1 => true", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("-1");
      const res = core.isLarge(num1, num2);
      assert.equal(res, true);
    });

    it("0 > 0 => false", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.isLarge(num1, num2);
      assert.equal(res, false);
    });

    it("1.1 > -1.1 => true", () => {
      const num1 = core.numToArrayWithDecimal("1.1");
      const num2 = core.numToArrayWithDecimal("-1.1");
      const res = core.isLarge(num1, num2);
      assert.equal(res, true);
    });

    it("-1.1 > 1.1 => false", () => {
      const num1 = core.numToArrayWithDecimal("-1.1");
      const num2 = core.numToArrayWithDecimal("1.1");
      const res = core.isLarge(num1, num2);
      assert.equal(res, false);
    });

  });

  describe("add", function(){
    it("0 + 0 = 0", () => {
      const res = core.add("0", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });
    it("1 + 0 = 1", () => {
      const res = core.add("1", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "1");
    });

    it("0 + 1 = 1", () => {
      const res = core.add("0", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "1");
    });

    it("1 + -1 = 0", () => {
      const res = core.add("1", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });

    it("1 + 1 = 2", () => {
      const res = core.add("1", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "2");
    });

    it("10 + 1 = 11", () => {
      const res = core.add("10", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "11");
    });
    it("1 + 10 = 11", () => {
      const res = core.add("1", "10");
      const str = core.numArrayToString(res);
      assert.equal(str, "11");
    });
    it("10 + -1 = 9", () => {
      const res = core.add("10", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "9");
    });

    it("1 + -0.1 = 0.9", () => {
      const res = core.add("1", "-0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0.9");
    });

    it("0 + -0.1 = -0.1", () => {
      const res = core.add("0", "-0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-0.1");
    });


    it("10 + -0.1 = 9.9", () => {
      const res = core.add("10", "-0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "9.9");
    });

    it("0.1 + -10 = -9.9", () => {
      const res = core.add("0.1", "-10");
      const str = core.numArrayToString(res);
      assert.equal(str, "-9.9");
    });

    it("10 + 0.1 = 10.1", () => {
      const res = core.add("10", "0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "10.1");
    });

    it("10 + 0.10 = 10.1", () => {
      const res = core.add("10", "0.10");
      const str = core.numArrayToString(res);
      assert.equal(str, "10.1");
    });

    it("1 + 0.0001 = 1.0001", () => {
      const res = core.add("1", "0.0001");
      const str = core.numArrayToString(res);
      assert.equal(str, "1.0001");
    });

    it("0.0001 + 0.1 = 0.1001", () => {
      const res = core.add("0.0001", "0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0.1001");
    });

    it("0.0001 + -0.1 = -0.0999", () => {
      const res = core.add("0.0001", "-0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-0.0999");
    });

    it("-0.0999 + 0.1 = 0.0001", () => {
      const res = core.add("-0.0999", "0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0.0001");
    });

    it("0.01 + 100.1 = 100.11", () => {
      const res = core.add("0.01", "100.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "100.11");
    });

    it("0.01 + -100.1 = -100.09", () => {
      const res = core.add("0.01", "-100.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-100.09");
    });

    it("10000000000000000 + 0 = 10000000000000000", () => {
      const res = core.add("10000000000000000", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "10000000000000000");
    });

    it("10000000000000001 + 0 = 10000000000000001", () => {
      const res = core.add("10000000000000001", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "10000000000000001");
    });

    it("5000000000000000 + 5000000000000001 = 10000000000000001", () => {
      const res = core.add("5000000000000000", "5000000000000001");
      const str = core.numArrayToString(res);
      assert.equal(str, "10000000000000001");
    });

    it("10000000000000000 + 10000000000000000 = 10000000000000000", () => {
      const res = core.add("10000000000000000", "10000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "20000000000000000");
    });

    it("1000000000000000000000 + 0 = 1000000000000000000000", () => {
      const res = core.add("1000000000000000000000", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "1000000000000000000000");
    });

    it("0 + -1000000000000000000000 = -1000000000000000000000", () => {
      const res = core.add("0", "-1000000000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "-1000000000000000000000");
    });

    it("1000000000000000000000 + -1000000000000000000000 = 0", () => {
      const res = core.add("1000000000000000000000", "-1000000000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });

    it("1000000000000000000000 + 1000000000000000000000 = 0", () => {
      const res = core.add("1000000000000000000000", "1000000000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "2000000000000000000000");
    });

    it("1000000000000000000000.1 + 1000000000000000000000 = 0", () => {
      const res = core.add("1000000000000000000000.1", "1000000000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "2000000000000000000000.1");
    });

    it("1000000000000000000000.1 + 1000000000000000000000.9 = 0", () => {
      const res = core.add("1000000000000000000000.1", "1000000000000000000000.9");
      const str = core.numArrayToString(res);
      assert.equal(str, "2000000000000000000001");
    });

    it("1000000000000000000000.1 + -1000000000000000000000.9 = 0", () => {
      const res = core.add("1000000000000000000000.1", "-1000000000000000000000.9");
      const str = core.numArrayToString(res);
      assert.equal(str, "-0.8");
    });

    it("1000000000000000000000.0001 + -1000000000000000000000.9 = 0", () => {
      const res = core.add("1000000000000000000000.0001", "-1000000000000000000000.9");
      const str = core.numArrayToString(res);
      assert.equal(str, "-0.8999");
    });

    it("-1 + -1 = -2", () => {
      const res = core.add("-1", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-2");
    });


    it("-1 + -10 = -11", () => {
      const res = core.add("-1", "-10");
      const str = core.numArrayToString(res);
      assert.equal(str, "-11");
    });

    it("-1.5 + -10.5 = -12", () => {
      const res = core.add("-1.5", "-10.5");
      const str = core.numArrayToString(res);
      assert.equal(str, "-12");
    });

    it("1.5 + 0.015 = 1.515", () => {
      const res = core.add("1.5", "0.015");
      const str = core.numArrayToString(res);
      assert.equal(str, "1.515");
    });

    it("1500 + 0.0015 = 1500.0015", () => {
      const res = core.add("1500", "0.0015");
      const str = core.numArrayToString(res);
      assert.equal(str, "1500.0015");
    });


  });

  describe("subtract", function(){

    it("0 - 0 = 0", () => {
      const res = core.subtract("0", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });

    it("1 - 0 = 0", () => {
      const res = core.subtract("1", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "1");
    });

    it("0 - -1 = 1", () => {
      const res = core.subtract("0", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "1");
    });

    it("1 - 1 = 0", () => {
      const res = core.subtract("1", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });

    it("1 - -1 = 2", () => {
      const res = core.subtract("1", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "2");
    });

    it("10 - -1 = 11", () => {
      const res = core.subtract("10", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "11");
    });

    it("1 - -10 = 11", () => {
      const res = core.subtract("1", "-10");
      const str = core.numArrayToString(res);
      assert.equal(str, "11");
    });

    it("10 - 1 = 9", () => {
      const res = core.subtract("10", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "9");
    });

    it("1 - 0.1 = 0.9", () => {
      const res = core.subtract("1", "0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0.9");
    });

    it("0 - 0.1 = -0.1", () => {
      const res = core.subtract("0", "0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-0.1");
    });

    it("10 - 0.1 = 9.9", () => {
      const res = core.subtract("10", "0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "9.9");
    });

    it("0.1 - 10 = -9.9", () => {
      const res = core.subtract("0.1", "10");
      const str = core.numArrayToString(res);
      assert.equal(str, "-9.9");
    });

    it("10 - -0.10 = 10.1", () => {
      const res = core.subtract("10", "-0.10");
      const str = core.numArrayToString(res);
      assert.equal(str, "10.1");
    });
    it("1 - -0.0001 = 1.0001", () => {
      const res = core.subtract("1", "-0.0001");
      const str = core.numArrayToString(res);
      assert.equal(str, "1.0001");
    });

    it("0.0001 - -0.1 = 0.1001", () => {
      const res = core.subtract("0.0001", "-0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0.1001");
    });

    it("0.0001 - 0.1 = -0.0999", () => {
      const res = core.subtract("0.0001", "0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-0.0999");
    });

    it("-0.0999 - -0.1 = 0.0001", () => {
      const res = core.subtract("-0.0999", "-0.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0.0001");
    });

    it("100 - -0.005 = 100.005", () => {
      const res = core.subtract("100", "-0.005");
      const str = core.numArrayToString(res);
      assert.equal(str, "100.005");
    });


    it("0.01 - -100.1 = 100.11", () => {
      const res = core.subtract("0.01", "-100.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "100.11");
    });

    it("0.01 - 100.1 = -100.09", () => {
      const res = core.subtract("0.01", "100.1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-100.09");
    });


    it("10000000000000000 - 0 = 10000000000000000", () => {
      const res = core.subtract("10000000000000000", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "10000000000000000");
    });

    it("10000000000000001 - 0 = 10000000000000001", () => {
      const res = core.subtract("10000000000000001", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "10000000000000001");
    });

    it("5000000000000000 - -5000000000000001 = 10000000000000001", () => {
      const res = core.subtract("5000000000000000", "-5000000000000001");
      const str = core.numArrayToString(res);
      assert.equal(str, "10000000000000001");
    });

    it("10000000000000000 - -10000000000000000 = 10000000000000000", () => {
      const res = core.subtract("10000000000000000", "-10000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "20000000000000000");
    });


    it("1000000000000000000000 - 0 = 1000000000000000000000", () => {
      const res = core.subtract("1000000000000000000000", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "1000000000000000000000");
    });

    it("0 - 1000000000000000000000 = -1000000000000000000000", () => {
      const res = core.subtract("0", "1000000000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "-1000000000000000000000");
    });

    it("1000000000000000000000 - 1000000000000000000000 = 0", () => {
      const res = core.subtract("1000000000000000000000", "1000000000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });

    it("1000000000000000000000 - -1000000000000000000000 = 0", () => {
      const res = core.subtract("1000000000000000000000", "-1000000000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "2000000000000000000000");
    });

    it("1000000000000000000000.1 - -1000000000000000000000 = 0", () => {
      const res = core.subtract("1000000000000000000000.1", "-1000000000000000000000");
      const str = core.numArrayToString(res);
      assert.equal(str, "2000000000000000000000.1");
    });

    it("1000000000000000000000.1 - -1000000000000000000000.9 = 0", () => {
      const res = core.subtract("1000000000000000000000.1", "-1000000000000000000000.9");
      const str = core.numArrayToString(res);
      assert.equal(str, "2000000000000000000001");
    });

    it("1000000000000000000000.1 - 1000000000000000000000.9 = 0", () => {
      const res = core.subtract("1000000000000000000000.1", "1000000000000000000000.9");
      const str = core.numArrayToString(res);
      assert.equal(str, "-0.8");
    });

    it("1000000000000000000000.0001 - 1000000000000000000000.9 = 0", () => {
      const res = core.subtract("1000000000000000000000.0001", "1000000000000000000000.9");
      const str = core.numArrayToString(res);
      assert.equal(str, "-0.8999");
    });

    it("-1 - 1 = -2", () => {
      const res = core.subtract("-1", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-2");
    });

    it("-1 - 10 = -11", () => {
      const res = core.subtract("-1", "10");
      const str = core.numArrayToString(res);
      assert.equal(str, "-11");
    });

    it("-1.5 - 10.5 = -12", () => {
      const res = core.subtract("-1.5", "10.5");
      const str = core.numArrayToString(res);
      assert.equal(str, "-12");
    });

    it("1.5 - -0.015 = 1.515", () => {
      const res = core.subtract("1.5", "-0.015");
      const str = core.numArrayToString(res);
      assert.equal(str, "1.515");
    });


    it("1500 - -0.0015 = 1500.0015", () => {
      const res = core.subtract("1500", "-0.0015");
      const str = core.numArrayToString(res);
      assert.equal(str, "1500.0015");
    });

  });

});


describe("multiplication", function(){
  it("0 x 0 = 0", () => {
    const res = core.multiplication("0", "0");
    const str = core.numArrayToString(res);
    assert.equal(str, "0");
  });

  it("1 x 0 = 0", () => {
    const res = core.multiplication("1", "0");
    const str = core.numArrayToString(res);
    assert.equal(str, "0");
  });

  it("0 x 1 = 0", () => {
    const res = core.multiplication("0", "1");
    const str = core.numArrayToString(res);
    assert.equal(str, "0");
  });

  it("1 x 1 = 1", () => {
    const res = core.multiplication("1", "1");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });

  it("1 x -1 = -1", () => {
    const res = core.multiplication("1", "-1");
    const str = core.numArrayToString(res);
    assert.equal(str, "-1");
  });

  it("-1 x -1 = 1", () => {
    const res = core.multiplication("-1", "-1");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });

  it("2 x 1 = 2", () => {
    const res = core.multiplication("2", "1");
    const str = core.numArrayToString(res);
    assert.equal(str, "2");
  });

  it("1 x 10 = 10", () => {
    const res = core.multiplication("1", "10");
    const str = core.numArrayToString(res);
    assert.equal(str, "10");
  });

  it("10 x 10 = 100", () => {
    const res = core.multiplication("10", "10");
    const str = core.numArrayToString(res);
    assert.equal(str, "100");
  });

  it("2 x 2 = 4", () => {
    const res = core.multiplication("2", "2");
    const str = core.numArrayToString(res);
    assert.equal(str, "4");
  });

  it("20 x 20 = 40", () => {
    const res = core.multiplication("20", "20");
    const str = core.numArrayToString(res);
    assert.equal(str, "400");
  });


  it("1.0 x 1 = 1", () => {
    const res = core.multiplication("1.0", "1");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });

  it("2.0 x 0.5 = 1", () => {
    const res = core.multiplication("2.0", "0.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });

  it("2.1 x 2.5 = 5.25", () => {
    const res = core.multiplication("2.1", "2.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "5.25");
  });

  it("1.01 x 1 = 1", () => {
    const res = core.multiplication("1.01", "1");
    const str = core.numArrayToString(res);
    assert.equal(str, "1.01");
  });

  it("5.005005 x 2.2 = 5.25", () => {
    const res = core.multiplication("5.005005", "2.2");
    const str = core.numArrayToString(res);
    assert.equal(str, "11.011011");
  });

  it("2000 x 0.005 = 10", () => {
    const res = core.multiplication("2000", "0.005");
    const str = core.numArrayToString(res);
    assert.equal(str, "10");
  });

  it("2000 x -0.005 = -10", () => {
    const res = core.multiplication("2000", "-0.005");
    const str = core.numArrayToString(res);
    assert.equal(str, "-10");
  });


  it("10000000000000000 x 0 = 0", () => {
    const res = core.multiplication("10000000000000000", "0");
    const str = core.numArrayToString(res);
    assert.equal(str, "0");
  });


});

describe("division", function(){
  it("1 / 1 = 1", () => {
    const res = core.division("1", "1");
    const str = core.numArrayToString(res);
    console.log(res);
    const remainder = core.numArrayToString(res.remainder);
    assert.equal(str, "1");
    assert.equal(remainder, "0");
  });

  it("0 / 0 = undefined", () => {
    const res = core.division("0", "0");
    assert.equal(res, undefined);
  });

  it("1 / 0 = undefined", () => {
    const res = core.division("1", "0");
    assert.equal(res, undefined);
  });

  it("0 / 1 = 0", () => {
    const res = core.division("0", "1");
    const str = core.numArrayToString(res);
    const remainder = core.numArrayToString(res.remainder);
    assert.equal(str, "0");
    assert.equal(remainder, "0");
  });

  it("1 / 10 = 0.1", () => {
    const res = core.division("1", "10");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "10", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.1");
    assert.equal(check_result.equal, true);
  });

  it("1 / 100 = 0.01", () => {
    const res = core.division("1", "100");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "100", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.01");
    assert.equal(check_result.equal, true);
  });

  it("1 / 1000 = 0.001", () => {
    const res = core.division("1", "1000");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "1000", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.001");
    assert.equal(check_result.equal, true);
  });

  it("1 / 0.1 = 10", () => {
    const res = core.division("1", "0.1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "0.1", remainder: res.remainder, quotient: res});
    assert.equal(str, "10");
    assert.equal(check_result.equal, true);
  });

  it("1 / 0.01 = 100", () => {
    const res = core.division("1", "0.01");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "0.01", remainder: res.remainder, quotient: res});
    assert.equal(str, "100");
    assert.equal(check_result.equal, true);
  });

  it("1 / 0.001 = 1000", () => {
    const res = core.division("1", "0.001");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "0.001", remainder: res.remainder, quotient: res});
    assert.equal(str, "1000");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 1 = 0.1", () => {
    const res = core.division("0.1", "1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "1", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.1");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 10 = 0.01", () => {
    const res = core.division("0.1", "10");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "10", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.01");
    assert.equal(check_result.equal, true);
  });
  it("0.1 / 100 = 0.001", () => {
    const res = core.division("0.1", "100");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "100", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.001");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 0.1 = 1", () => {
    const res = core.division("0.1", "0.1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "0.1", remainder: res.remainder, quotient: res});
    assert.equal(str, "1");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 0.01 = 10", () => {
    const res = core.division("0.1", "0.01");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "0.01", remainder: res.remainder, quotient: res});
    assert.equal(str, "10");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 0.001 = 100", () => {
    const res = core.division("0.1", "0.001");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "0.001", remainder: res.remainder, quotient: res});
    assert.equal(str, "100");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 1 = 0.01", () => {
    const res = core.division("0.01", "1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "1", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.01");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 10 = 0.001", () => {
    const res = core.division("0.01", "10");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "10", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.001");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 100 = 0.0001", () => {
    const res = core.division("0.01", "100");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "100", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0001");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.1 = 0.1", () => {
    const res = core.division("0.01", "0.1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.1", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.1");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.01 = 1", () => {
    const res = core.division("0.01", "0.01");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.01", remainder: res.remainder, quotient: res});
    assert.equal(str, "1");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.001 = 10", () => {
    const res = core.division("0.01", "0.001");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.001", remainder: res.remainder, quotient: res});
    assert.equal(str, "10");
    assert.equal(check_result.equal, true);
  });


  it("4 / 2 = 2", () => {
    const res = core.division("4", "2");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "4", divisor: "2", remainder: res.remainder, quotient: res});
    assert.equal(str, "2");
    assert.equal(check_result.equal, true);
  });

  it("4 / -2 = -2", () => {
    const res = core.division("4", "-2");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "4", divisor: "-2", remainder: res.remainder, quotient: res});
    assert.equal(str, "-2");
    assert.equal(check_result.equal, true);
  });

  it("-4 / 2 = -2", () => {
    const res = core.division("-4", "2");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "-4", divisor: "2", remainder: res.remainder, quotient: res});
    assert.equal(str, "-2");
    assert.equal(check_result.equal, true);
  });

  it("-4 / -2 = 2", () => {
    const res = core.division("-4", "-2");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "-4", divisor: "-2", remainder: res.remainder, quotient: res});
    assert.equal(str, "2");
    assert.equal(check_result.equal, true);
  });

  it("-4 / -0.2 = 20", () => {
    const res = core.division("-4", "-0.2");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "-4", divisor: "-0.2", remainder: res.remainder, quotient: res});
    assert.equal(str, "20");
    assert.equal(check_result.equal, true);
  });

  it("4 / -0.2 = -20", () => {
    const res = core.division("4", "-0.2");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "4", divisor: "-0.2", remainder: res.remainder, quotient: res});
    assert.equal(str, "-20");
    assert.equal(check_result.equal, true);
  });

  it("-4 / 0.2 = -20", () => {
    const res = core.division("-4", "0.2");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "-4", divisor: "0.2", remainder: res.remainder, quotient: res});
    assert.equal(str, "-20");
    assert.equal(check_result.equal, true);
  });

  it("3000 / 25 = 120", () => {
    const res = core.division("3000", "25");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "3000", divisor: "25", remainder: res.remainder, quotient: res});
    assert.equal(str, "120");
    assert.equal(check_result.equal, true);
  });

  it("100 / 8 = 12.5", () => {
    const res = core.division("100", "8");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "100", divisor: "8", remainder: res.remainder, quotient: res});
    assert.equal(str, "12.5");
    assert.equal(check_result.equal, true);
  });

  it("1 / 25 = 0.04", () => {
    const res = core.division("1", "25");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "25", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.04");
    assert.equal(check_result.equal, true);
  });

  it("1 / 3 = 0.33333333333", () => {
    const res = core.division("1", "3");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "3", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.3333333333");
    assert.equal(check_result.equal, true);
  });

  it("1 / 30 = 0.03333333333", () => {
    const res = core.division("1", "30");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "30", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0333333333");
    assert.equal(check_result.equal, true);
  });

  it("1 / 300 = 0.00333333333", () => {
    const res = core.division("1", "300");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "300", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0033333333");
    assert.equal(check_result.equal, true);
  });

  it("10 / 3 = 3.3333333333", () => {
    const res = core.division("10", "3");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "10", divisor: "3", remainder: res.remainder, quotient: res});
    assert.equal(str, "3.3333333333");
    assert.equal(check_result.equal, true);
  });

  it("10 / 30 = 0.3333333333", () => {
    const res = core.division("10", "30");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "10", divisor: "30", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.3333333333");
    assert.equal(check_result.equal, true);
  });

  it("10 / 300 = 0.0333333333", () => {
    const res = core.division("10", "300");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "10", divisor: "300", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0333333333");
    assert.equal(check_result.equal, true);
  });


  it("10 / 0.3 = 33.3333333333", () => {
    const res = core.division("10", "0.3");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "10", divisor: "0.3", remainder: res.remainder, quotient: res});
    assert.equal(str, "33.333333333");
    assert.equal(check_result.equal, true);
  });

  it("10 / 0.03 = 333.333333333", () => {
    const res = core.division("10", "0.03");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "10", divisor: "0.03", remainder: res.remainder, quotient: res});
    assert.equal(str, "333.33333333");
    assert.equal(check_result.equal, true);
  });


  it("1 / 7 = 0.1428571428", () => {
    const res = core.division("1", "7");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "7", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.1428571428");
    assert.equal(check_result.equal, true);
  });

  it("1 / 70 = 0.0142857142", () => {
    const res = core.division("1", "70");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "70", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0142857142");
    assert.equal(check_result.equal, true);
  });

  it("1 / 700 = 0.0014285714", () => {
    const res = core.division("1", "700");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "700", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0014285714");
    assert.equal(check_result.equal, true);
  });

  it("1 / 0.7 = 1.428571428", () => {
    const res = core.division("1", "0.7");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "0.7", remainder: res.remainder, quotient: res});
    assert.equal(str, "1.428571428");
    assert.equal(check_result.equal, true);
  });

  it("1 / 0.07 = 14.28571428", () => {
    const res = core.division("1", "0.07");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "0.07", remainder: res.remainder, quotient: res});
    assert.equal(str, "14.28571428");
    assert.equal(check_result.equal, true);
  });

  it("1 / 5 = 0.2", () => {
    const res = core.division("1", "5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "5", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.2");
    assert.equal(check_result.equal, true);
  });

  it("1 / 0.5 = 2", () => {
    const res = core.division("1", "0.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "0.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "2");
    assert.equal(check_result.equal, true);
  });

  it("1 / 0.05 = 20", () => {
    const res = core.division("1", "0.05");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "0.05", remainder: res.remainder, quotient: res});
    assert.equal(str, "20");
    assert.equal(check_result.equal, true);
  });

  it("1 / 0.005 = 200", () => {
    const res = core.division("1", "0.005");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "0.005", remainder: res.remainder, quotient: res});
    assert.equal(str, "200");
    assert.equal(check_result.equal, true);
  });


  it("0.1 / 5 = 0.02", () => {
    const res = core.division("0.1", "5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "5", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.02");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 5 = 0.002", () => {
    const res = core.division("0.01", "5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "5", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.002");
    assert.equal(check_result.equal, true);
  });

  it("0.001 / 5 = 0.0002", () => {
    const res = core.division("0.001", "5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.001", divisor: "5", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0002");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 0.5 = 0.2", () => {
    const res = core.division("0.1", "0.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "0.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.2");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.05 = 0.2", () => {
    const res = core.division("0.01", "0.05");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.05", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.2");
    assert.equal(check_result.equal, true);
  });

  it("0.001 / 0.005 = 0.2", () => {
    const res = core.division("0.001", "0.005");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.001", divisor: "0.005", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.2");
    assert.equal(check_result.equal, true);
  });

  it("10 / 0.5 = 20", () => {
    const res = core.division("10", "0.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "10", divisor: "0.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "20");
    assert.equal(check_result.equal, true);
  });

  it("100 / 0.5 = 200", () => {
    const res = core.division("100", "0.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "100", divisor: "0.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "200");
    assert.equal(check_result.equal, true);
  });
  it("1000 / 0.5 = 2000", () => {
    const res = core.division("1000", "0.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1000", divisor: "0.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "2000");
    assert.equal(check_result.equal, true);
  });

  it("1 / 2.5 = 0.4", () => {
    const res = core.division("1", "2.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "2.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.4");
    assert.equal(check_result.equal, true);
  });

  it("10 / 2.5 = 4", () => {
    const res = core.division("10", "2.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "10", divisor: "2.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "4");
    assert.equal(check_result.equal, true);
  });

  it("100 / 2.5 = 40", () => {
    const res = core.division("100", "2.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "100", divisor: "2.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "40");
    assert.equal(check_result.equal, true);
  });

  it("1000 / 2.5 = 400", () => {
    const res = core.division("1000", "2.5");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1000", divisor: "2.5", remainder: res.remainder, quotient: res});
    assert.equal(str, "400");
    assert.equal(check_result.equal, true);
  });

  it("1000 / 0.25 = 4000", () => {
    const res = core.division("1000", "0.25");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1000", divisor: "0.25", remainder: res.remainder, quotient: res});
    assert.equal(str, "4000");
    assert.equal(check_result.equal, true);
  });

  it("1000 / 0.025 = 40000", () => {
    const res = core.division("1000", "0.025");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1000", divisor: "0.025", remainder: res.remainder, quotient: res});
    assert.equal(str, "40000");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 0.25 = 0.4", () => {
    const res = core.division("0.1", "0.25");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "0.25", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.4");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 0.025 = 4", () => {
    const res = core.division("0.1", "0.025");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "0.025", remainder: res.remainder, quotient: res});
    assert.equal(str, "4");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 0.0025 = 40", () => {
    const res = core.division("0.1", "0.0025");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "0.0025", remainder: res.remainder, quotient: res});
    assert.equal(str, "40");
    assert.equal(check_result.equal, true);
  });

  it("0.1 / 0.00025 = 400", () => {
    const res = core.division("0.1", "0.00025");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.1", divisor: "0.00025", remainder: res.remainder, quotient: res});
    assert.equal(str, "400");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.25 = 0.04", () => {
    const res = core.division("0.01", "0.25");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.25", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.04");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.025 = 0.4", () => {
    const res = core.division("0.01", "0.025");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.025", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.4");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.0025 = 4", () => {
    const res = core.division("0.01", "0.0025");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.0025", remainder: res.remainder, quotient: res});
    assert.equal(str, "4");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.00025 = 40", () => {
    const res = core.division("0.01", "0.00025");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.00025", remainder: res.remainder, quotient: res});
    assert.equal(str, "40");
    assert.equal(check_result.equal, true);
  });

  it("0.01 / 0.000025 = 400", () => {
    const res = core.division("0.01", "0.000025");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.01", divisor: "0.000025", remainder: res.remainder, quotient: res});
    assert.equal(str, "400");
    assert.equal(check_result.equal, true);
  });

  it("101 / 10.1 = 10", () => {
    const res = core.division("101", "10.1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "101", divisor: "10.1", remainder: res.remainder, quotient: res});
    assert.equal(str, "10");
    assert.equal(check_result.equal, true);
  });

  it("101 / 1.01 = 100", () => {
    const res = core.division("101", "1.01");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "101", divisor: "1.01", remainder: res.remainder, quotient: res});
    assert.equal(str, "100");
    assert.equal(check_result.equal, true);
  });

  it("101 / 0.101 = 1000", () => {
    const res = core.division("101", "0.101");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "101", divisor: "0.101", remainder: res.remainder, quotient: res});
    assert.equal(str, "1000");
    assert.equal(check_result.equal, true);
  });

  it("101 / 0.0101 = 10000", () => {
    const res = core.division("101", "0.0101");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "101", divisor: "0.0101", remainder: res.remainder, quotient: res});
    assert.equal(str, "10000");
    assert.equal(check_result.equal, true);
  });

  it("10.1 / 101 = 0.1", () => {
    const res = core.division("10.1", "101");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "10.1", divisor: "101", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.1");
    assert.equal(check_result.equal, true);
  });

  it("1.01 / 101 = 0.01", () => {
    const res = core.division("1.01", "101");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1.01", divisor: "101", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.01");
    assert.equal(check_result.equal, true);
  });

  it("0.101 / 101 = 0.001", () => {
    const res = core.division("0.101", "101");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.101", divisor: "101", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.001");
    assert.equal(check_result.equal, true);
  });

  it("0.0101 / 101 = 0.0001", () => {
    const res = core.division("0.0101", "101");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.0101", divisor: "101", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0001");
    assert.equal(check_result.equal, true);
  });

  it("0.0101 / 10.1 = 0.001", () => {
    const res = core.division("0.0101", "10.1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.0101", divisor: "10.1", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.001");
    assert.equal(check_result.equal, true);
  });

  it("0.0101 / 1.01 = 0.01", () => {
    const res = core.division("0.0101", "1.01");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.0101", divisor: "1.01", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.01");
    assert.equal(check_result.equal, true);
  });

  it("0.0101 / 0.101 = 0.1", () => {
    const res = core.division("0.0101", "0.101");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "0.0101", divisor: "0.101", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.1");
    assert.equal(check_result.equal, true);
  });
  
  it("-1 / 1 = -1", () => {
    const res = core.division("-1", "1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "-1", divisor: "1", remainder: res.remainder, quotient: res});
    assert.equal(str, "-1");
    assert.equal(check_result.equal, true);
  });
  
  it("-1 / -1 = 1", () => {
    const res = core.division("-1", "-1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "-1", divisor: "-1", remainder: res.remainder, quotient: res});
    assert.equal(str, "1");
    assert.equal(check_result.equal, true);
  });

  it("1 / -1 = -1", () => {
    const res = core.division("1", "-1");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "-1", remainder: res.remainder, quotient: res});
    assert.equal(str, "-1");
    assert.equal(check_result.equal, true);
  });
  
  it("1 / 3 = 0.3333333333", () => {
    const res = core.division("1", "3");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "3", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.3333333333");
    assert.equal(check_result.equal, true);
  });
  
  it("1 / 3 = 0.3333333333", () => {
    const res = core.division("1", "3");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "3", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.3333333333");
    assert.equal(check_result.equal, true);
  });

  it("1 / 30 = 0.0333333333", () => {
    const res = core.division("1", "30");
    const str = core.numArrayToString(res);
    const check_result = checkRmainderAndQuotient({ dividend: "1", divisor: "30", remainder: res.remainder, quotient: res});
    assert.equal(str, "0.0333333333");
    assert.equal(check_result.equal, true);
  });

});

describe("floor", function(){
  it("1 => 1", () => {
    const res = core.floor("1");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });
  it("1.5 => 1", () => {
    const res = core.floor("1.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });
  it("1.00000000001 => 1", () => {
    const res = core.floor("1.00000000001");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });
  it("101.00000000001 => 101", () => {
    const res = core.floor("101.00000000001");
    const str = core.numArrayToString(res);
    assert.equal(str, "101");
  });

  it("0 => 0", () => {
    const res = core.floor("0");
    assert.equal(core.isZero(res), true);
  });

  it("0.5 => 0", () => {
    const res = core.floor("0.5");
    assert.equal(core.isZero(res), true);
  });

  it("-1 => -1", () => {
    const res = core.floor("-1");
    const str = core.numArrayToString(res);
    assert.equal(str, "-1");
  });

  it("-0.5 => -1", () => {
    const res = core.floor("-0.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "-1");
  });
  it("-1.5 => -2", () => {
    const res = core.floor("-1.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "-2");
  });

  it("-100.5 => -101", () => {
    const res = core.floor("-100.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "-101");
  });

});

describe("ceil", function(){
  it("1 => 1", () => {
    const res = core.ceil("1");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });
  it("1.5 => 2", () => {
    const res = core.ceil("1.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "2");
  });
  it("1.00000000001 => 2", () => {
    const res = core.ceil("1.00000000001");
    const str = core.numArrayToString(res);
    assert.equal(str, "2");
  });
  it("101.00000000001 => 102", () => {
    const res = core.ceil("101.00000000001");
    const str = core.numArrayToString(res);
    assert.equal(str, "102");
  });

  it("0 => 0", () => {
    const res = core.ceil("0");
    const str = core.numArrayToString(res);
    assert.equal(str, "0");
  });

  it("0.5 => 0", () => {
    const res = core.ceil("0.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });

  it("-1 => -1", () => {
    const res = core.ceil("-1");
    const str = core.numArrayToString(res);
    assert.equal(str, "-1");
  });

  it("-0.5 => 0", () => {
    const res = core.ceil("-0.5");
    const is_zero = core.isZero(res)
    assert.equal(is_zero, true);
  });

  it("-1.5 => -1", () => {
    const res = core.ceil("-1.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "-1");
  });

  it("-100.5 => -100", () => {
    const res = core.ceil("-100.5");
    const str = core.numArrayToString(res);
    assert.equal(str, "-100");
  });

});


describe("modulo", function(){
  it("1 % 1 => 0", () => {
    const res = core.modulo("1", "1");
    const str = core.numArrayToString(res);
    assert.equal(str, "0");
  });

  it("1 % 2 => 1", () => {
    const res = core.modulo("1", "2");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });

  it("2 % 1 => 0", () => {
    const res = core.modulo("2", "1");
    const is_zero = core.isZero(res)
    assert.equal(is_zero, true);
  });

  it("3 % 2 => 1", () => {
    const res = core.modulo("3", "2");
    const str = core.numArrayToString(res);
    assert.equal(str, "1");
  });

  it("90 % 7 => 6", () => {
    const res = core.modulo("90", "7");
    const str = core.numArrayToString(res);
    assert.equal(str, "6");
  });

  it("7 % 90 => 7", () => {
    const res = core.modulo("7", "90");
    const str = core.numArrayToString(res);
    assert.equal(str, "7");
  });

  it("7.9 % 90 => 7.9", () => {
    const res = core.modulo("7.9", "90");
    const str = core.numArrayToString(res);
    assert.equal(str, "7.9");
  });

  it("7.9 % 7 => 0.9", () => {
    const res = core.modulo("7.9", "7");
    const str = core.numArrayToString(res);
    assert.equal(str, "0.9");
  });

  it("7.9 % 7.8 => 0.1", () => {
    const res = core.modulo("7.9", "7.8");
    const str = core.numArrayToString(res);
    assert.equal(str, "0.1");
  });

  it("7.9 % 7.8 => 0.1", () => {
    const res = core.modulo("7.9", "7.8");
    const str = core.numArrayToString(res);
    assert.equal(str, "0.1");
  });

  it("-1 % 1 => 0", () => {
    const res = core.modulo("-1", "1");
    assert.equal(core.isZero(res), true);
  });

  it("1 % -1 => 0", () => {
    const res = core.modulo("1", "-1");
    assert.equal(core.isZero(res), true);
  });

  it("-1 % -1 => 0", () => {
    const res = core.modulo("-1", "-1");
    assert.equal(core.isZero(res), true);
  });

  it("-1 % -10 => -1", () => {
    const res = core.modulo("-1", "-10");
    const str = core.numArrayToString(res);
    assert.equal(str, "-1");
  });

  it("-10 % -1 => 0", () => {
    const res = core.modulo("-1", "-1");
    assert.equal(core.isZero(res), true);
  });

  it("-10 % -4 => -2", () => {
    const res = core.modulo("-10", "-4");
    const str = core.numArrayToString(res);
    assert.equal(str, "-2");
  });

  it("-10.5 % -4 => -2.5", () => {
    const res = core.modulo("-10.5", "-4");
    const str = core.numArrayToString(res);
    assert.equal(str, "-2.5");
  });

  it("-10.5 % -4.25 => -2", () => {
    const res = core.modulo("-10.5", "-4.25");
    const str = core.numArrayToString(res);
    assert.equal(str, "-2");
  });

  it("-10.5 % -4.24 => -2.02", () => {
    const res = core.modulo("-10.5", "-4.24");
    const str = core.numArrayToString(res);
    assert.equal(str, "-2.02");
  });

  it("-10.5 % -1.2422 => -0.5624", () => {
    const res = core.modulo("-10.5", "-1.2422");
    const str = core.numArrayToString(res);
    assert.equal(str, "-0.5624");
  });

  it("0.5 % 0.5 => 0", () => {
    const res = core.modulo("0.5", "0.5");
    assert.equal(core.isZero(res), true);
  });

  it("0.5 % 0.6 => 0.5", () => {
    const res = core.modulo("0.5", "0.6");
    const str = core.numArrayToString(res);
    assert.equal(str, "0.5");
  });

  it("0.5 % 0.4 => 0.1", () => {
    const res = core.modulo("0.5", "0.4");
    const str = core.numArrayToString(res);
    assert.equal(str, "0.1");
  });

  it("0.5 % 0.1 => 0", () => {
    const res = core.modulo("0.5", "0.1");
    assert.equal(core.isZero(res), true);
  });

  it("0.5 % 0.25 => 0", () => {
    const res = core.modulo("0.5", "0.25");
    assert.equal(core.isZero(res), true);
  });

  it("0.5 % 0.251 => 0.249", () => {
    const res = core.modulo("0.5", "0.251");
    const str = core.numArrayToString(res);
    assert.equal(str, "0.249");
  });


});







