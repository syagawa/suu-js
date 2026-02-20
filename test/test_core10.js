const assert = require('assert');
const core = require("../core10.ts");
const calc = core.default.calc;

console.log(calc);

describe("calc", function(){

  describe("numToArrayWithDecimal", function(){
    it("0", () => {
      const res = calc("1", "+", "1");
      assert.equal(res, "2");
    });
  });
});
