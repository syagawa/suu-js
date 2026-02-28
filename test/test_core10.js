const assert = require('assert');
const core = require("../core10.ts");
const calc = core.default.calc;

console.log(calc);

describe("calc", function(){

  describe("+", function(){
    it("1 + 1 = 2", () => {
      const res = calc("1", "+", "1");
      assert.equal(res, "2");
    });
    it("10 + 1 = 11", () => {
      const res = calc("10", "+", "1");
      assert.equal(res, "11");
    });
    it("1 + 10 = 11", () => {
      const res = calc("1", "+", "10");
      assert.equal(res, "11");
    });
    it("1.00 + 1 = 2", () => {
      const res = calc("1.00", "+", "1");
      assert.equal(res, "2");
    });
    it("1.00 + 1.00000000 = 2", () => {
      const res = calc("1.00", "+", "1.00000000");
      assert.equal(res, "2");
    });
  });
  describe("-", function(){
    it("1 - 1 = 0", () => {
      const res = calc("1", "0", "1");
      assert.equal(res, "0");
    });
    it("10 - 1 = 9", () => {
      const res = calc("10", "-", "1");
      assert.equal(res, "9");
    });
  });
});
