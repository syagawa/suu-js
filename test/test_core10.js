const assert = require('assert');
const core = require("../core10.ts");
const calc = core.default.calc;

console.log(calc);

describe("calc", function(){

  describe("+", function(){

    it("0 + 0 = 0", () => {
      const res = calc("0", "+", "0");
      assert.equal(res, "0");
    });

    it("0.0 + 0.0 = 0", () => {
      const res = calc("0.0", "+", "0.0");
      assert.equal(res, "0");
    });


    it("0.0 + 0 = 0", () => {
      const res = calc("0.0", "+", "0");
      assert.equal(res, "0");
    });

    it("0 + 0.0 = 0", () => {
      const res = calc("0", "+", "0.0");
      assert.equal(res, "0");
    });

    it("0 - 0 = 0", () => {
      const res = calc("0", "-", "0");
      assert.equal(res, "0");
    });

    it("0.0 - 0.0 = 0", () => {
      const res = calc("0.0", "-", "0.0");
      assert.equal(res, "0");
    });


    it("0.0 - 0 = 0", () => {
      const res = calc("0.0", "-", "0");
      assert.equal(res, "0");
    });

    it("0 - 0.0 = 0", () => {
      const res = calc("0", "-", "0.0");
      assert.equal(res, "0");
    });


    it("0 + 1 = 1", () => {
      const res = calc("0", "+", "1");
      assert.equal(res, "1");
    });

    it("1 + 0 = 1", () => {
      const res = calc("1", "+", "0");
      assert.equal(res, "1");
    });

    it("1.0 + 0 = 1", () => {
      const res = calc("1.0", "+", "0");
      assert.equal(res, "1");
    });

    it("0 + 1.0 = 1", () => {
      const res = calc("0", "+", "1.0");
      assert.equal(res, "1");
    });

    it("1.0 + 0.0 = 1", () => {
      const res = calc("1.0", "+", "0.0");
      assert.equal(res, "1");
    });

    it("0.0 + 1.0 = 1", () => {
      const res = calc("0.0", "+", "1.0");
      assert.equal(res, "1");
    });

    it("0 - 1 = -1", () => {
      const res = calc("0", "-", "1");
      assert.equal(res, "-1");
    });

    it("1 - 0 = 1", () => {
      const res = calc("1", "-", "0");
      assert.equal(res, "1");
    });

    it("1.0 - 0 = 1", () => {
      const res = calc("1.0", "-", "0");
      assert.equal(res, "1");
    });

    it("0 - 1.0 = -1", () => {
      const res = calc("0", "-", "1.0");
      assert.equal(res, "-1");
    });

    it("1.0 - 0.0 = 1", () => {
      const res = calc("1.0", "-", "0.0");
      assert.equal(res, "1");
    });

    it("0.0 - 1.0 = -1", () => {
      const res = calc("0.0", "-", "1.0");
      assert.equal(res, "-1");
    });


    it("1 + 1 = 2", () => {
      const res = calc("1", "+", "1");
      assert.equal(res, "2");
    });

    it("1.0 + 1.0 = 2", () => {
      const res = calc("1.0", "+", "1.0");
      assert.equal(res, "2");
    });

    it("1.0 + 1 = 2", () => {
      const res = calc("1.0", "+", "1");
      assert.equal(res, "2");
    });


    it("1 + 1.0 = 2", () => {
      const res = calc("1", "+", "1.0");
      assert.equal(res, "2");
    });

    it("1 - 1 = 0", () => {
      const res = calc("1", "-", "1");
      assert.equal(res, "0");
    });

    it("1.0 - 1.0 = 0", () => {
      const res = calc("1.0", "-", "1.0");
      assert.equal(res, "0");
    });

    it("1.0 - 1 = 0", () => {
      const res = calc("1.0", "-", "1");
      assert.equal(res, "0");
    });

    it("1 - 1.0 = 0", () => {
      const res = calc("1", "-", "1.0");
      assert.equal(res, "0");
    });


    it("2 + 1 = 3", () => {
      const res = calc("2", "+", "1");
      assert.equal(res, "3");
    });
    it("2.0 + 1 = 3", () => {
      const res = calc("2.0", "+", "1");
      assert.equal(res, "3");
    });
    it("2 + 1.0 = 3", () => {
      const res = calc("2", "+", "1.0");
      assert.equal(res, "3");
    });
    it("2.0 + 1.0 = 3", () => {
      const res = calc("2.0", "+", "1.0");
      assert.equal(res, "3");
    });

    it("2 - 1 = 1", () => {
      const res = calc("2", "-", "1");
      assert.equal(res, "1");
    });
    it("2.0 - 1 = 1", () => {
      const res = calc("2.0", "-", "1");
      assert.equal(res, "1");
    });
    it("2 - 1.0 = 1", () => {
      const res = calc("2", "-", "1.0");
      assert.equal(res, "1");
    });
    it("2.0 - 1.0 = 1", () => {
      const res = calc("2.0", "-", "1.0");
      assert.equal(res, "1");
    });


    it("1 + 2 = 3", () => {
      const res = calc("1", "+", "2");
      assert.equal(res, "3");
    });
    it("1.0 + 2 = 3", () => {
      const res = calc("1.0", "+", "2");
      assert.equal(res, "3");
    });
    it("1 + 2.0 = 3", () => {
      const res = calc("1", "+", "2.0");
      assert.equal(res, "3");
    });
    it("1.0 + 2.0 = 3", () => {
      const res = calc("1.0", "+", "2.0");
      assert.equal(res, "3");
    });

    it("1 - 2 = -1", () => {
      const res = calc("1", "-", "2");
      assert.equal(res, "-1");
    });
    it("1.0 - 2 = -1", () => {
      const res = calc("1.0", "-", "2");
      assert.equal(res, "-1");
    });
    it("1 - 2.0 = -1", () => {
      const res = calc("1", "-", "2.0");
      assert.equal(res, "-1");
    });
    it("1.0 - 2.0 = -1", () => {
      const res = calc("1.0", "-", "2.0");
      assert.equal(res, "-1");
    });




    it("10 + 1 = 11", () => {
      const res = calc("10", "+", "1");
      assert.equal(res, "11");
    });
    it("10.0 + 1 = 11", () => {
      const res = calc("10.0", "+", "1");
      assert.equal(res, "11");
    });
    it("10 + 1.0 = 11", () => {
      const res = calc("10", "+", "1.0");
      assert.equal(res, "11");
    });
    it("10.0 + 1.0 = 11", () => {
      const res = calc("10.0", "+", "1.0");
      assert.equal(res, "11");
    });

    it("10 - 1 = 9", () => {
      const res = calc("10", "-", "1");
      assert.equal(res, "9");
    });
    it("10.0 - 1 = 9", () => {
      const res = calc("10.0", "-", "1");
      assert.equal(res, "9");
    });
    it("10 - 1.0 = 9", () => {
      const res = calc("10", "-", "1.0");
      assert.equal(res, "9");
    });
    it("10.0 - 1.0 = 9", () => {
      const res = calc("10.0", "-", "1.0");
      assert.equal(res, "9");
    });



    it("1 + 10 = 11", () => {
      const res = calc("1", "+", "10");
      assert.equal(res, "11");
    });
    it("1.0 + 10 = 11", () => {
      const res = calc("1.0", "+", "10");
      assert.equal(res, "11");
    });
    it("1 + 10.0 = 11", () => {
      const res = calc("1", "+", "10.0");
      assert.equal(res, "11");
    });
    it("1.0 + 10.0 = 11", () => {
      const res = calc("1.0", "+", "10.0");
      assert.equal(res, "11");
    });
    it("1 - 10 = -9", () => {
      const res = calc("1", "-", "10");
      assert.equal(res, "-9");
    });
    it("1.0 - 10 = -9", () => {
      const res = calc("1.0", "-", "10");
      assert.equal(res, "-9");
    });
    it("1 - 10.0 = -9", () => {
      const res = calc("1", "-", "10.0");
      assert.equal(res, "-9");
    });
    it("1.0 - 10.0 = -9", () => {
      const res = calc("1.0", "-", "10.0");
      assert.equal(res, "-9");
    });

    it("1 + 9 = 10", () => {
      const res = calc("1", "+", "9");
      assert.equal(res, "10");
    });
    it("1.0 + 9 = 10", () => {
      const res = calc("1.0", "+", "9");
      assert.equal(res, "10");
    });
    it("1 + 9.0 = 10", () => {
      const res = calc("1", "+", "9.0");
      assert.equal(res, "10");
    });
    it("1.0 + 9.0 = 10", () => {
      const res = calc("1.0", "+", "9.0");
      assert.equal(res, "10");
    });

    it("1 - 9 = -8", () => {
      const res = calc("1", "-", "9");
      assert.equal(res, "-8");
    });
    it("1.0 - 9 = -8", () => {
      const res = calc("1.0", "-", "9");
      assert.equal(res, "-8");
    });
    it("1 - 9.0 = -8", () => {
      const res = calc("1", "-", "9.0");
      assert.equal(res, "-8");
    });
    it("1.0 - 9.0 = -8", () => {
      const res = calc("1.0", "-", "9.0");
      assert.equal(res, "-8");
    });

    it("1 + 100 = 101", () => {
      const res = calc("1", "+", "100");
      assert.equal(res, "101");
    });
    it("1.0 + 100 = 101", () => {
      const res = calc("1.0", "+", "100");
      assert.equal(res, "101");
    });
    it("1 + 100.0 = 101", () => {
      const res = calc("1", "+", "100.0");
      assert.equal(res, "101");
    });
    it("1.0 + 100.0 = 101", () => {
      const res = calc("1.0", "+", "100.0");
      assert.equal(res, "101");
    });


    it("0.1 + 0 = 0.1", () => {
      const res = calc("0.1", "+", "0");
      assert.equal(res, "0.1");
    });

    it("0.1 + 0.0 = 0.1", () => {
      const res = calc("0.1", "+", "0.0");
      assert.equal(res, "0.1");
    });


  });
  
});
