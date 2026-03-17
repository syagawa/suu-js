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
    it("10.00 + 1.00000000 = 11", () => {
      const res = calc("10.00", "+", "1.00000000");
      assert.equal(res, "11");
    });
    it("1 + 9 = 10", () => {
      const res = calc("1", "+", "9");
      assert.equal(res, "10");
    });

    it("1.0 + 9 = 10", () => {
      const res = calc("1.0", "+", "9");
      assert.equal(res, "10");
    });

    it("1.0 + 9.0000 = 10", () => {
      const res = calc("1.0", "+", "9.0000");
      assert.equal(res, "10");
    });

    it("1 + 99 = 100", () => {
      const res = calc("1", "+", "99");
      assert.equal(res, "100");
    });


    it("1.000 + 99.000 = 100", () => {
      const res = calc("1.000", "+", "99.000");
      assert.equal(res, "100");
    });

    it("1 + 1.5 = 2.5", () => {
      const res = calc("1", "+", "1.5");
      assert.equal(res, "2.5");
    });

    it("9.5 + 0.5 = 10", () => {
      const res = calc("9.5", "+", "0.5");
      assert.equal(res, "10");
    });

    it("9.5 + 0.51 = 10.01", () => {
      const res = calc("9.5", "+", "0.51");
      assert.equal(res, "10.01");
    });

    it("9.5 + 0.5100 = 10.01", () => {
      const res = calc("9.5", "+", "0.5100");
      assert.equal(res, "10.01");
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
