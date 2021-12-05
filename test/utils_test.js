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
  it("copy", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.copy(num1);
    const num1_str = core.numArrayToString(num1);
    const num2_str = core.numArrayToString(num2);
    assert.equal(num1_str, num2_str);
  });

});







