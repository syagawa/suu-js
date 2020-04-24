const assert = require('assert');
const app = require("../app.js");
const s = global.s;

describe('Su', function() {
  describe('makeSu', function() {
    it("zero by string", () =>{
      const zero = s.makeSu("0");
      assert.equal(zero.getString(), "0");
      assert.equal(zero.integer.length, 1);
      assert.equal(zero.integer[0], 0);
      assert.equal(zero.fraction.numerator[0], 0);
      assert.equal(zero.fraction.numerator[1], 0);
      assert.equal(zero.fraction.denominator[0], 1);
      assert.equal(zero.fraction.denominator[1], 0);
    });
    it("zero by number", () =>{
      const zero = s.makeSu(0);
      assert.equal(zero.getString(), "0");
      assert.equal(zero.integer.length, 1);
      assert.equal(zero.integer[0], 0);
    });
    it("one by string", () =>{
      const one = s.makeSu("1");
      assert.equal(one.getString(), "1");
      assert.equal(one.integer.length, 1);
      assert.equal(one.integer[0], 1);
      assert.equal(one.fraction.numerator[0], 1);
      assert.equal(one.fraction.numerator[1], 0);
      assert.equal(one.fraction.denominator[0], 1);
      assert.equal(one.fraction.denominator[1], 0);
    });
    it("one by number", () =>{
      const one = s.makeSu(1);
      assert.equal(one.getString(), "1");
      assert.equal(one.integer.length, 1);
      assert.equal(one.integer[0], 1);
    });

    it("100.55533 by string", () =>{
      const one = s.makeSu("100.55533");
      assert.equal(one.getString(), "100.55533");
    });
    it("100.55533 by number", () =>{
      const one = s.makeSu(100.55533);
      assert.equal(one.getString(), "100.55533");
    });

    it("-1 by string", () =>{
      const one = s.makeSu("-1");
      assert.equal(one.getString(), "-1");
      assert.equal(one.integer.length, 1);
      assert.equal(one.integer[0], 1);
      assert.equal(one.negative, true);
    });
    it("-1 by number", () =>{
      const one = s.makeSu(-1);
      assert.equal(one.getString(), "-1");
      assert.equal(one.integer.length, 1);
      assert.equal(one.integer[0], 1);
      assert.equal(one.negative, true);

    });
    it("-100.55533 by string", () =>{
      const one = s.makeSu("-100.55533");
      assert.equal(one.getString(), "-100.55533");
    });
    it("-100.55533 by number", () =>{
      const one = s.makeSu(-100.55533);
      assert.equal(one.getString(), "-100.55533");
    });
  });
  describe('add', function() {
    it("1 + 1 = 2", () =>{
      const a = s.makeSu(1);
      const b = s.makeSu(1);
      const res = a.add(b);
      assert.equal(res.getString(), "2");
      assert.equal(res.integer[0], 2);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 2);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });
    it("1.5 + 1.5 = 3", () =>{
      const a = s.makeSu("1.5");
      const b = s.makeSu("1.5");
      const res = a.add(b);
      assert.equal(res.getString(), "3");
      assert.equal(res.integer[0], 3);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 3);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });
    it("-1 + 1", () =>{
      const a = s.makeSu("-1");
      const b = s.makeSu("1");
      const res = a.add(b);
      assert.equal(res.getString(), "0");
      assert.equal(res.integer[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 0);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });
    it("1 + -1", () =>{
      const a = s.makeSu("1");
      const b = s.makeSu("-1");
      const res = a.add(b);
      assert.equal(res.getString(), "0");
      assert.equal(res.integer[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 0);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });
    it("-1 + -1", () =>{
      const a = s.makeSu("-1");
      const b = s.makeSu("-1");
      const res = a.add(b);
      assert.equal(res.getString(), "-2");
      assert.equal(res.integer[0], 2);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0],2);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });
    it("1 + -2", () =>{
      const a = s.makeSu("1");
      const b = s.makeSu("-2");
      const res = a.add(b);
      assert.equal(res.getString(), "-1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });
  });
  describe('subtract', function() {
    it("1 - 1 = 0", () =>{
      const a = s.makeSu(1);
      const b = s.makeSu(1);
      const res = a.subtract(b);
      assert.equal(res.getString(), "0");
      assert.equal(res.integer[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 0);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });
    it("2 - 1 = 1", () =>{
      const a = s.makeSu("2");
      const b = s.makeSu("1");
      const res = a.subtract(b);
      assert.equal(res.getString(), "1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });
    it("2 - 3 = -1", () =>{
      const a = s.makeSu("2");
      const b = s.makeSu("3");
      const res = a.subtract(b);
      assert.equal(res.getString(), "-1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });

    it("2 - -3 = 5", () =>{
      const a = s.makeSu("2");
      const b = s.makeSu("-3");
      const res = a.subtract(b);
      assert.equal(res.getString(), "5");
      assert.equal(res.integer[0], 5);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 5);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });

    it("-2 - -3 = 1", () =>{
      const a = s.makeSu("-2");
      const b = s.makeSu("-3");
      const res = a.subtract(b);
      assert.equal(res.getString(), "1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });

    it("-3 - -2 = -1", () =>{
      const a = s.makeSu("-3");
      const b = s.makeSu("-2");
      const res = a.subtract(b);
      assert.equal(res.getString(), "-1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });

    it("-3 - -2 = -1", () =>{
      const a = s.makeSu("-3");
      const b = s.makeSu("-2");
      const res = a.subtract(b);
      assert.equal(res.getString(), "-1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.decimal[0], 0);
    });

    it("3 - 1.5 = 1.5", () =>{
      const a = s.makeSu("3");
      const b = s.makeSu("1.5");
      const res = a.subtract(b);
      assert.equal(res.getString(), "1.5");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 5);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 5);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });
    it("3 - -1.5 = 4.5", () =>{
      const a = s.makeSu("3");
      const b = s.makeSu("-1.5");
      const res = a.subtract(b);
      assert.equal(res.getString(), "4.5");
      assert.equal(res.integer[0], 4);
      assert.equal(res.decimal[0], 5);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 4);
      assert.equal(res.fraction.numerator[1], 5);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    
    it("-3 - -1.5 = -1.5", () =>{
      const a = s.makeSu("-3");
      const b = s.makeSu("-1.5");
      const res = a.subtract(b);
      assert.equal(res.getString(), "-1.5");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 5);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 5);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    it("3.3 - 1.5 = 1.8", () =>{
      const a = s.makeSu("3.3");
      const b = s.makeSu("1.5");
      const res = a.subtract(b);
      assert.equal(res.getString(), "1.8");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 8);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 8);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });


    it("0 - 5 = -5", () =>{
      const a = s.makeSu("0");
      const b = s.makeSu("5");
      const res = a.subtract(b);
      assert.equal(res.getString(), "-5");
      assert.equal(res.integer[0], 5);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0], 5);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });


  });

  describe("multiplication", function() {
    
    it("1 * 1 = 1", () =>{
      const a = s.makeSu("1");
      const b = s.makeSu("1");
      const res = a.multiplication(b);
      assert.equal(res.getString(), "1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    it("1 * 2 = 2", () =>{
      const a = s.makeSu("1");
      const b = s.makeSu("2");
      const res = a.multiplication(b);
      assert.equal(res.getString(), "2");
      assert.equal(res.integer[0], 2);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 2);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });
    
    it("1 * -1 = -1", () =>{
      const a = s.makeSu("1");
      const b = s.makeSu("-1");
      const res = a.multiplication(b);
      assert.equal(res.getString(), "-1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });
    
    it("-1 * -1 = 1", () =>{
      const a = s.makeSu("-1");
      const b = s.makeSu("-1");
      const res = a.multiplication(b);
      assert.equal(res.getString(), "1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    it("10 * 20 = 200", () =>{
      const a = s.makeSu("10");
      const b = s.makeSu("20");
      const res = a.multiplication(b);
      assert.equal(res.getString(), "200");
      assert.equal(res.integer[0], 2);
      assert.equal(res.integer[1], 0);
      assert.equal(res.integer[2], 0);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 2);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.numerator[2], 0);
      assert.equal(res.fraction.numerator[3], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    it("1.5 * 1.5 = 2.25", () =>{
      const a = s.makeSu("1.5");
      const b = s.makeSu("1.5");
      const res = a.multiplication(b);
      assert.equal(res.getString(), "2.25");
      assert.equal(res.integer[0], 2);
      assert.equal(res.decimal[0], 2);
      assert.equal(res.decimal[1], 5);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 2);
      assert.equal(res.fraction.numerator[1], 2);
      assert.equal(res.fraction.numerator[2], 5);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.fraction.denominator[2], 0);
    });

    it("1.5 * -0.5 = -0.75", () =>{
      const a = s.makeSu("1.5");
      const b = s.makeSu("-0.5");
      const res = a.multiplication(b);
      assert.equal(res.getString(), "-0.75");
      assert.equal(res.integer[0], 0);
      assert.equal(res.decimal[0], 7);
      assert.equal(res.decimal[1], 5);
      assert.equal(res.negative, true);
      assert.equal(res.fraction.numerator[0], 0);
      assert.equal(res.fraction.numerator[1], 7);
      assert.equal(res.fraction.numerator[2], 5);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
      assert.equal(res.fraction.denominator[2], 0);
    });

  });

  describe("division", function() {
    
    it("1 / 1 = 1", () =>{
      const a = s.makeSu("1");
      const b = s.makeSu("1");
      const res = a.division(b);
      assert.equal(res.getString(), "1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    it("2 / 1 = 2", () =>{
      const a = s.makeSu("2");
      const b = s.makeSu("1");
      const res = a.division(b);
      assert.equal(res.getString(), "2");
      assert.equal(res.integer[0], 2);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 2);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });


    it("1.5 / 1.5 = ", () =>{
      const a = s.makeSu("1.5");
      const b = s.makeSu("1.5");
      const res = a.division(b);
      assert.equal(res.getString(), "1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });


    it("30 / 10 = ", () =>{
      const a = s.makeSu("30");
      const b = s.makeSu("10");
      const res = a.division(b);
      assert.equal(res.getString(), "3");
      assert.equal(res.integer[0], 3);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 3);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    it("3 / 2 = ", () =>{
      const a = s.makeSu("3");
      const b = s.makeSu("2");
      const res = a.division(b);
      assert.equal(res.getString(), "1");
      assert.equal(res.integer[0], 1);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 1);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    it("0 / 1 = ", () =>{
      const a = s.makeSu("0");
      const b = s.makeSu("1");
      const res = a.division(b);
      assert.equal(res.getString(), "0");
      assert.equal(res.integer[0], 0);
      assert.equal(res.decimal[0], 0);
      assert.equal(res.negative, false);
      assert.equal(res.fraction.numerator[0], 0);
      assert.equal(res.fraction.numerator[1], 0);
      assert.equal(res.fraction.denominator[0], 1);
      assert.equal(res.fraction.denominator[1], 0);
    });

    it("1 / 0 = ", () =>{
      const a = s.makeSu("1");
      const b = s.makeSu("0");
      const res = a.division(b);
      assert.equal(res, "Division by Zero");
    });


    it("0 / 0 = ", () =>{
      const a = s.makeSu("0");
      const b = s.makeSu("0");
      const res = a.division(b);
      assert.equal(res, "Not a number");
    });


  });

});
