const assert = require('assert');
const app = require("../app.js");
const core = app.core2;
const utils = app.utils;

const checkRmainderAndQuotient = function({ dividend, divisor, quotient, remainder}){
  const temp = core.multiple(divisor, quotient);
  const result = core.add(temp, remainder);
  return {
    dividend_parameter: dividend,
    dividend_result: result,
    equal: core.isEqual(result, dividend) ? true : false,
  }
};


describe("utils", function(){
  it("getNumber", () => {
    const num = utils.getNumber("1");
    assert.equal(num.is_num_array, true);
  });

  it("copy", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.copy(num1);
    const num1_str = core.numArrayToString(num1);
    const num2_str = core.numArrayToString(num2);
    assert.equal(num1_str, num2_str);
  });

  it("getLarge", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("2");
    const large = utils.getLarge(num1, num2);
    const res = utils.isEqual(num2, large);
    assert.equal(res, true);
  });

  it("getSmall", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("2");
    const small = utils.getSmall(num1, num2);
    const res = utils.isEqual(num1, small);
    assert.equal(res, true);
  });

});









