const assert = require('assert');
const app = require("../app_new.js");
const core = app.core;
const utils = app.utils;

describe("utils", function(){
  it("getNumber 1", () => {
    const num = utils.getNumber("1");
    assert.equal(num.is_num_array, true);
  });

  it("getNumber 101", () => {
    const num = utils.getNumber("101");
    assert.equal(num.is_num_array, true);
  });
 
  it("getNumber -101.523", () => {
    const num = utils.getNumber("-101.523");
    assert.equal(num.is_num_array, true);
  });

  it("getNumber Error", () => {
    const num = utils.getNumber("");
    assert.equal(true, num instanceof Error);
  });

  it("copy", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.copy(num1);
    const num1_str = core.numArrayToString(num1);
    const num2_str = core.numArrayToString(num2);
    assert.equal(num1_str, num2_str);
  });
  
  it("copy '' is Error", () => {
    const num = utils.copy("");
    assert.equal(true, num instanceof Error);
  });

  it("getLarge 2 > 1 => true", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("2");
    const large = utils.getLarge(num1, num2);
    const res = utils.isEqual(num2, large);
    assert.equal(res, true);
  });
  
  it("getLarge 1 > 2 => false", () => {
    const num1 = utils.getNumber("2");
    const num2 = utils.getNumber("1");
    const large = utils.getLarge(num1, num2);
    const res = utils.isEqual(num2, large);
    assert.equal(res, false);
  });
  
  it("getLarge 1.999 < 2 => true", () => {
    const num1 = utils.getNumber("2");
    const num2 = utils.getNumber("1.999");
    const large = utils.getLarge(num1, num2);
    const res = utils.isEqual(num1, large);
    assert.equal(res, true);
  });
  
  it("getLarge 2.0001 > 2 => true", () => {
    const num1 = utils.getNumber("2.0001");
    const num2 = utils.getNumber("2");
    const large = utils.getLarge(num1, num2);
    const res = utils.isEqual(num1, large);
    assert.equal(res, true);
  });

  it("getLarge 1 > -1 => true", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("-1");
    const large = utils.getLarge(num1, num2);
    const res = utils.isEqual(num1, large);
    assert.equal(res, true);
  });

  it("getLarge 1 > 1 => null", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("1");
    const large = utils.getLarge(num1, num2);
    assert.equal(large, null);
  });

  it("getLarge '' is null", () => {
    const res = utils.getLarge("", "");
    assert.equal(null, res);
  });
  
  it("getSmall 2 > 1 => true", () => {
    const num1 = utils.getNumber("2");
    const num2 = utils.getNumber("1");
    const small = utils.getSmall(num1, num2);
    const res = utils.isEqual(num2, small);
    assert.equal(res, true);
  });
  
  it("getSmall 2 < 1 => false", () => {
    const num1 = utils.getNumber("2");
    const num2 = utils.getNumber("1");
    const small = utils.getSmall(num1, num2);
    const res = utils.isEqual(num1, small);
    assert.equal(res, false);
  });
  
  it("getSmall 1.999 < 2 => true", () => {
    const num1 = utils.getNumber("2");
    const num2 = utils.getNumber("1.999");
    const small = utils.getSmall(num1, num2);
    const res = utils.isEqual(num2, small);
    assert.equal(res, true);
  });
  
  it("getSmall 2.0001 > 2 => true", () => {
    const num1 = utils.getNumber("2.0001");
    const num2 = utils.getNumber("2");
    const small = utils.getSmall(num1, num2);
    const res = utils.isEqual(num2, small);
    assert.equal(res, true);
  });

  it("getSmall 1 > 1 => null", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("1");
    const small = utils.getSmall(num1, num2);
    assert.equal(small, null);
  });
  
  it("getSmall 1 > -1 => true", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("-1");
    const small = utils.getSmall(num1, num2);
    assert.equal(small, num2);
  });

  it("getSmall 1 > -10 => true", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("-10");
    const small = utils.getSmall(num1, num2);
    assert.equal(small, num2);
  });

  it("getSmall '' is null", () => {
    const res = utils.getSmall("", "");
    assert.equal(null, res);
  });

  it("isEqual 1 = 1 => true", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("1");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
  });
  
  it("isEqual 0 = 0 => true", () => {
    const num1 = utils.getNumber("0");
    const num2 = utils.getNumber("0");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
  });

  it("isEqual 1.0 = 1 => true", () => {
    const num1 = utils.getNumber("1.0");
    const num2 = utils.getNumber("1");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
  });

  it("isEqual -1 = -1 => true", () => {
    const num1 = utils.getNumber("-1");
    const num2 = utils.getNumber("-1");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
  });

  it("isEqual 1 = 2 is false", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("2");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, false);
  });

  it("isEqual 10 = 1.0 is false", () => {
    const num1 = utils.getNumber("10");
    const num2 = utils.getNumber("1.0");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, false);
  });

  it("isEqual '' is false", () => {
    const res = utils.isEqual("", "");
    assert.equal(res, false);
  });


  it("getZero", () => {
    const num1 = utils.getZero();
    const num2 = utils.getNumber("0");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
  });
  
  it("getOne", () => {
    const num1 = utils.getOne();
    const num2 = utils.getNumber("1");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
  });

  it("isZero", () => {
    const num1 = utils.getZero();
    const res = utils.isZero(num1);
    assert.equal(res, true);
  });

  it("isOne", () => {
    const num1 = utils.getOne();
    const res = utils.isOne(num1);
    assert.equal(res, true);
  });

  it("square 3 => 9", () => {
    const num = utils.getNumber("3");
    const sq = utils.square(num);
    const res = utils.isEqual(sq, utils.getNumber("9"));
    assert.equal(res, true);
  });
  
  it("square 1.1 => ", () => {
    const num = utils.getNumber("1.1");
    const sq = utils.square(num);
    const res = utils.isEqual(sq, utils.getNumber("1.21"));
    assert.equal(res, true);
  });

  it("square 0 => 0", () => {
    const num = utils.getNumber("0");
    const sq = utils.square(num);
    const res = utils.isEqual(sq, utils.getNumber("0"));
    assert.equal(res, true);
  });

  it("square '' => Error", () => {
    const sq = utils.square("");
    assert.equal(true, sq instanceof Error);
  });
  
  it("getAbsolute 3 => 3", () => {
    const num = utils.getNumber("3");
    const abs = utils.getAbsolute(num);
    const res = utils.isEqual(abs, "3");
    assert.equal(res, true);
  });
  
  it("getAbsolute -3 => 3", () => {
    const num = utils.getNumber("-3");
    const abs = utils.getAbsolute(num);
    const res = utils.isEqual(abs, "3");
    assert.equal(res, true);
  });

  it("getAbsolute 1.5 => 1.5", () => {
    const num = utils.getNumber("1.5");
    const abs = utils.getAbsolute(num);
    const res = utils.isEqual(abs, "1.5");
    assert.equal(res, true);
  });

  it("getAbsolute -1.5 => 1.5", () => {
    const num = utils.getNumber("-1.5");
    const abs = utils.getAbsolute(num);
    const res = utils.isEqual(abs, "1.5");
    assert.equal(res, true);
  });

  it("getAbsolute 0 => 0", () => {
    const num = utils.getNumber("0");
    const abs = utils.getAbsolute(num);
    const res = utils.isEqual(abs, "0");
    assert.equal(res, true);
  });

  it("getAbsolute '' => Error", () => {
    const abs = utils.getAbsolute("");
    const res = abs ? true : false;
    assert.equal(res, true);
  });

  it("getDecimal 1.11", () => {
    const num1 = utils.getNumber("1.11");
    const dec = utils.getDecimal(num1);
    const num2 = utils.getNumber("0.11");
    const res = utils.isEqual(dec, num2);
    assert.equal(res, true);
  });

  it("getDecimal 1", () => {
    const num1 = utils.getNumber("1");
    const dec = utils.getDecimal(num1);
    const num2 = utils.getNumber("0");
    const res = utils.isEqual(dec, num2);
    assert.equal(res, true);
  });

  it("getDecimal 1.0", () => {
    const num1 = utils.getNumber("1.0");
    const dec = utils.getDecimal(num1);
    const num2 = utils.getNumber("0");
    const res = utils.isEqual(dec, num2);
    assert.equal(res, true);
  });

  it("getDecimal 1.05", () => {
    const num1 = utils.getNumber("1.05");
    const dec = utils.getDecimal(num1);
    const num2 = utils.getNumber("0.05");
    const res = utils.isEqual(dec, num2);
    assert.equal(res, true);
  });
  
  it("getDecimal '' => Error", () => {
    const dec = utils.getDecimal("");
    assert.equal(dec instanceof Error, true);
  });

  it("isNaturalNumber 1.0 => true", () => {
    const num = utils.getNumber("1.0");
    const res = utils.isNaturalNumber(num);
    assert.equal(res, true);
  });

  it("isNaturalNumber 0 => true", () => {
    const num = utils.getNumber("0");
    const res = utils.isNaturalNumber(num);
    assert.equal(res, true);
  });

  it("isNaturalNumber 1.11 => false", () => {
    const num1 = utils.getNumber("1.11");
    const res = utils.isNaturalNumber(num1);
    assert.equal(res, false);
  });

  it("includeDecimal 1.11 => true", () => {
    const num = utils.getNumber("1.11");
    const res = utils.includeDecimal(num);
    assert.equal(res, true);
  });
  
  it("includeDecimal 1.0 => false", () => {
    const num = utils.getNumber("1.0");
    const res = utils.includeDecimal(num);
    assert.equal(res, false);
  });
  
  it("includeDecimal 0 => false", () => {
    const num = utils.getNumber("0");
    const res = utils.includeDecimal(num);
    assert.equal(res, false);
  });



  it("isNegative", () => {
    const num1 = utils.getNumber("-1.11");
    const num2 = utils.getNumber("1.0");
    const res1 = utils.isNegative(num1);
    const res2 = utils.isNegative(num2);
    const res = res1 && !res2;
    assert.equal(res, true);
  });

  it("isPositive", () => {
    const num1 = utils.getNumber("1.11");
    const num2 = utils.getNumber("-1.0");
    const res1 = utils.isPositive(num1);
    const res2 = utils.isPositive(num2);
    const res = res1 && !res2;
    assert.equal(res, true);
  });

  it("getNegativeNumber", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNegativeNumber(num1);
    const res = utils.isNegative(num2);
    assert.equal(res, true);
  });

  it("getNext", () => {
    const num1 = utils.getNumber("1");
    const next = utils.getNumber("2");
    const res = utils.getNext(num1);
    assert.equal(core.numArrayToString(res), core.numArrayToString(next));
  });

  it("getPrev", () => {
    const num1 = utils.getNumber("1");
    const prev = utils.getNumber("0");
    const res = utils.getPrev(num1);
    assert.equal(core.numArrayToString(res), core.numArrayToString(prev));
  });

  it("isInteger", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("1.1");
    const num3 = utils.getNumber("-1");
    const num4 = utils.getNumber("10001");
    const res1 = utils.isInteger(num1);
    const res2 = utils.isInteger(num2);
    const res3 = utils.isInteger(num3);
    const res4 = utils.isInteger(num4);
    const res = res1 && !res2 && res3 && res4;
    assert.equal(res, true);
  });

  it("isEvenNumber", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("2");
    const num3 = utils.getNumber("2.2");
    const num4 = utils.getNumber("13");
    const num5 = utils.getNumber("23");
    const res1 = utils.isEvenNumber(num1);
    const res2 = utils.isEvenNumber(num2);
    const res3 = utils.isEvenNumber(num3);
    const res4 = utils.isEvenNumber(num4);
    const res5 = utils.isEvenNumber(num5);
    const res = !res1 && res2 && !res3 && !res4 && !res5;
    assert.equal(res, true);
  });

  it("isOddNumber", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("2");
    const num3 = utils.getNumber("2.2");
    const num4 = utils.getNumber("10");
    const num5 = utils.getNumber("11");
    const num6 = utils.getNumber("13");
    const num7 = utils.getNumber("29");
    const res1 = utils.isOddNumber(num1);
    const res2 = utils.isOddNumber(num2);
    const res3 = utils.isOddNumber(num3);
    const res4 = utils.isOddNumber(num4);
    const res5 = utils.isOddNumber(num5);
    const res6 = utils.isOddNumber(num6);
    const res7 = utils.isOddNumber(num7);
    const res = res1 && !res2 && !res3 && !res4 && res5 && res6 && res7;
    assert.equal(res, true);
  });

  describe("getDivisors", function(){
    it("1", () => {
      const num1 = utils.getNumber("1");
      const res1 = utils.getDivisors(num1);
      const one = res1[0];
      assert.equal(res1.length, 1);
      assert.equal("1", core.numArrayToString(one));
    });

    it("2", () => {
      const num1 = utils.getNumber("2");
      const res1 = utils.getDivisors(num1);
      const one = res1[0];
      const two = res1[1];
      assert.equal(res1.length, 2);
      assert.equal("1", core.numArrayToString(one));
      assert.equal("2", core.numArrayToString(two));
    });
    
    it("10", () => {
      const num = utils.getNumber("10");
      const res = utils.getDivisors(num);
      const one = res[0];
      const two = res[1];
      const five = res[2];
      const ten = res[3];

      assert.equal(res.length, 4);
      assert.equal("1", core.numArrayToString(one));
      assert.equal("2", core.numArrayToString(two));
      assert.equal("5", core.numArrayToString(five));
      assert.equal("10", core.numArrayToString(ten));
    });

    it("0", () => {
      const num = utils.getNumber("0");
      const res = utils.getDivisors(num);
      assert.equal(res.length, 0);
    });

    it("0.5", () => {
      const num = utils.getNumber("0.5");
      const res = utils.getDivisors(num);
      assert.equal(res.length, 0);
    });
  });

  describe("exponentiate", function(){
    it("1^1", () => {
      const base = utils.getNumber("1");
      const ex = utils.getNumber("1");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "1");
      assert.equal(res2, true);
    });
    
    it("2^1", () => {
      const base = utils.getNumber("2");
      const ex = utils.getNumber("1");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "2");
      assert.equal(res2, true);
    });
  
    it("2^2", () => {
      const base = utils.getNumber("2");
      const ex = utils.getNumber("2");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "4");
      assert.equal(res2, true);
    });
  
    it("2^3", () => {
      const base = utils.getNumber("2");
      const ex = utils.getNumber("3");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "8");
      assert.equal(res2, true);
    });
    
    it("1^10", () => {
      const base = utils.getNumber("1");
      const ex = utils.getNumber("10");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "1");
      assert.equal(res2, true);
    });
  
    it("2.5^3", () => {
      const base = utils.getNumber("2.5");
      const ex = utils.getNumber("3");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "15.625");
      assert.equal(res2, true);
    });
  
    it("3^2.5", () => {
      const base = utils.getNumber("3");
      const ex = utils.getNumber("2.5");
      const res = utils.exponentiate(base, ex);
      assert.equal(true, res instanceof Error);
    });
  
    it("2.5^2.5", () => {
      const base = utils.getNumber("2.5");
      const ex = utils.getNumber("2.5");
      const res = utils.exponentiate(base, ex);
      assert.equal(true, res instanceof Error);
    });
    
    it("0.1^2", () => {
      const base = utils.getNumber("0.1");
      const ex = utils.getNumber("2");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "0.01");
      assert.equal(res2, true);
    });

    it("0.5^2", () => {
      const base = utils.getNumber("0.5");
      const ex = utils.getNumber("2");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "0.25");
      assert.equal(res2, true);
    });
  
    it("1^0", () => {
      const base = utils.getNumber("1");
      const ex = utils.getNumber("0");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "1");
      assert.equal(res2, true);
    });
    
    it("0^1", () => {
      const base = utils.getNumber("0");
      const ex = utils.getNumber("1");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "0");
      assert.equal(res2, true);
    });
    
    it("0^0", () => {
      const base = utils.getNumber("0");
      const ex = utils.getNumber("0");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "1");
      assert.equal(res2, true);
    });
  
  
    it("-2^2", () => {
      const base = utils.getNumber("-2");
      const ex = utils.getNumber("2");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "4");
      assert.equal(res2, true);
    });
  
    it("-2^3", () => {
      const base = utils.getNumber("-2");
      const ex = utils.getNumber("3");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "-8");
      assert.equal(res2, true);
    });
  
    it("-2.5^3", () => {
      const base = utils.getNumber("-2.5");
      const ex = utils.getNumber("3");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "-15.625");
      assert.equal(res2, true);
    });
  
    it("2^-2", () => {
      const base = utils.getNumber("2");
      const ex = utils.getNumber("-2");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "1");
      assert.equal(res2, true);
    });

    it("2^-3", () => {
      const base = utils.getNumber("2");
      const ex = utils.getNumber("-3");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "0.5");
      assert.equal(res2, true);
    });


    it("4^-2", () => {
      const base = utils.getNumber("4");
      const ex = utils.getNumber("-2");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "1");
      assert.equal(res2, true);
    });

    it("-2^-2", () => {
      const base = utils.getNumber("-2");
      const ex = utils.getNumber("-2");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "1");
      assert.equal(res2, true);
    });
    
    it("-2^-3", () => {
      const base = utils.getNumber("-2");
      const ex = utils.getNumber("-3");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "-0.5");
      assert.equal(res2, true);
    });
    
    it("-2^-0.5", () => {
      const base = utils.getNumber("-2");
      const ex = utils.getNumber("-0.5");
      const res = utils.exponentiate(base, ex);
      assert.equal(true, res instanceof Error);
    });
   
    it("-2.5^-1", () => {
      const base = utils.getNumber("-2.5");
      const ex = utils.getNumber("-1");
      const res1 = utils.exponentiate(base, ex);
      const res2 = utils.isEqual(res1, "-2.5");
      assert.equal(res2, true);
    });


  });

  describe("commonDivisors", function(){
    it("1, 1", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("1");
      const res1 = utils.commonDivisors(num1, num2);
      assert.equal(res1.length, 1);
      assert.equal("1", core.numArrayToString(res1[0]));
    });

    it("2, 1", () => {
      const num1 = utils.getNumber("2");
      const num2 = utils.getNumber("1");
      const res1 = utils.commonDivisors(num1, num2);
      assert.equal(res1.length, 1);
      assert.equal("1", core.numArrayToString(res1[0]));
    });
    
    it("3, 6", () => {
      const num1 = utils.getNumber("3");
      const num2 = utils.getNumber("6");
      const res1 = utils.commonDivisors(num1, num2);
      assert.equal(res1.length, 2);
      assert.equal("1", core.numArrayToString(res1[0]));
      assert.equal("3", core.numArrayToString(res1[1]));
    });

    it("7, 11", () => {
      const num1 = utils.getNumber("7");
      const num2 = utils.getNumber("11");
      const res1 = utils.commonDivisors(num1, num2);
      assert.equal(res1.length, 1);
      assert.equal("1", core.numArrayToString(res1[0]));
    });
    
    it("0, 1", () => {
      const num1 = utils.getNumber("0");
      const num2 = utils.getNumber("1");
      const res1 = utils.commonDivisors(num1, num2);
      assert.equal(res1.length, 0);
    });
    
    it("0, 0", () => {
      const num1 = utils.getNumber("0");
      const num2 = utils.getNumber("0");
      const res1 = utils.commonDivisors(num1, num2);
      assert.equal(res1.length, 0);
    });

    it("1.5, 3", () => {
      const num1 = utils.getNumber("1.5");
      const num2 = utils.getNumber("3");
      const res1 = utils.commonDivisors(num1, num2);
      assert.equal(res1.length, 0);
    });


  });


  describe("greatestCommonDivisor", function(){
    it("1, 1", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("1");
      const res1 = utils.greatestCommonDivisor(num1, num2);
      assert.equal("1", core.numArrayToString(res1));
    });
    
    it("6, 9", () => {
      const num1 = utils.getNumber("6");
      const num2 = utils.getNumber("9");
      const res1 = utils.greatestCommonDivisor(num1, num2);
      assert.equal("3", core.numArrayToString(res1));
    });

    it("0, 0", () => {
      const num1 = utils.getNumber("0");
      const num2 = utils.getNumber("0");
      const res1 = utils.greatestCommonDivisor(num1, num2);
      assert.equal(true, !res1);
    });

    it("2.5, 10", () => {
      const num1 = utils.getNumber("2.5");
      const num2 = utils.getNumber("10");
      const res1 = utils.greatestCommonDivisor(num1, num2);
      assert.equal(true, !res1);
    });
  });

  describe("commonMultiple", function(){
    it("1, 1", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("1");
      const res1 = utils.commonMultiple(num1, num2);
      assert.equal("1", core.numArrayToString(res1[0]));
    });

    it("6, 9", () => {
      const num1 = utils.getNumber("6");
      const num2 = utils.getNumber("9");
      const res1 = utils.commonMultiple(num1, num2);
      assert.equal("18", core.numArrayToString(res1[0]));
      assert.equal("36", core.numArrayToString(res1[1]));
      assert.equal("54", core.numArrayToString(res1[2]));
    });
    
    it("6.5, 9", () => {
      const num1 = utils.getNumber("6.5");
      const num2 = utils.getNumber("9");
      const res1 = utils.commonMultiple(num1, num2);
      assert.equal(0, res1.length);
    });

  });

  describe("leastCommonMultiple", function(){
    it("1, 1", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("1");
      const res1 = utils.leastCommonMultiple(num1, num2);
      assert.equal("1", core.numArrayToString(res1));
    });
    
    it("6, 9", () => {
      const num1 = utils.getNumber("6");
      const num2 = utils.getNumber("9");
      const res1 = utils.leastCommonMultiple(num1, num2);
      assert.equal("18", core.numArrayToString(res1));
    });
    
    it("6.5, 9", () => {
      const num1 = utils.getNumber("6.5");
      const num2 = utils.getNumber("9");
      const res1 = utils.leastCommonMultiple(num1, num2);
      assert.equal(true, !res1);
    });

  });

  describe("makeFibonacciSequence", function(){
    it("0, 1", () => {
      const num1 = utils.getNumber("0");
      const res1 = utils.makeFibonacciSequence(num1);
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("1", core.numArrayToString(res1[1]));
      assert.equal("1", core.numArrayToString(res1[2]));
      assert.equal("2", core.numArrayToString(res1[3]));
      assert.equal("3", core.numArrayToString(res1[4]));
      assert.equal("5", core.numArrayToString(res1[5]));
      assert.equal("8", core.numArrayToString(res1[6]));
      assert.equal("13", core.numArrayToString(res1[7]));
      assert.equal("21", core.numArrayToString(res1[8]));
      assert.equal("34", core.numArrayToString(res1[9]));
    });
  });

  describe("makeTribonacciSequence", function(){
    it("0, 0, 1", () => {
      const res1 = utils.makeTribonacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("1", core.numArrayToString(res1[2]));
      assert.equal("1", core.numArrayToString(res1[3]));
      assert.equal("2", core.numArrayToString(res1[4]));
      assert.equal("4", core.numArrayToString(res1[5]));
      assert.equal("7", core.numArrayToString(res1[6]));
      assert.equal("13", core.numArrayToString(res1[7]));
      assert.equal("24", core.numArrayToString(res1[8]));
      assert.equal("44", core.numArrayToString(res1[9]));
    });
  });

  describe("makeTetranacciSequence", function(){
    it("0, 0, 0, 1", () => {
      const res1 = utils.makeTetranacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("1", core.numArrayToString(res1[3]));
      assert.equal("1", core.numArrayToString(res1[4]));
      assert.equal("2", core.numArrayToString(res1[5]));
      assert.equal("4", core.numArrayToString(res1[6]));
      assert.equal("8", core.numArrayToString(res1[7]));
      assert.equal("15", core.numArrayToString(res1[8]));
      assert.equal("29", core.numArrayToString(res1[9]));
    });
  });

  describe("makePentanacciSequence", function(){
    it("0, 0, 0, 0, 1", () => {
      const res1 = utils.makePentanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("1", core.numArrayToString(res1[4]));
      assert.equal("1", core.numArrayToString(res1[5]));
      assert.equal("2", core.numArrayToString(res1[6]));
      assert.equal("4", core.numArrayToString(res1[7]));
      assert.equal("8", core.numArrayToString(res1[8]));
      assert.equal("16", core.numArrayToString(res1[9]));
    });
  });

  describe("makeHexanacciSequence", function(){
    it("0, 0, 0, 0, 0, 1", () => {
      const res1 = utils.makeHexanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("0", core.numArrayToString(res1[4]));
      assert.equal("1", core.numArrayToString(res1[5]));
      assert.equal("1", core.numArrayToString(res1[6]));
      assert.equal("2", core.numArrayToString(res1[7]));
      assert.equal("4", core.numArrayToString(res1[8]));
      assert.equal("8", core.numArrayToString(res1[9]));
      assert.equal("16", core.numArrayToString(res1[10]));
      assert.equal("32", core.numArrayToString(res1[11]));
      assert.equal("63", core.numArrayToString(res1[12]));
    });
  });

  describe("makeHeptanacciSequence", function(){
    it("0, 0, 0, 0, 0, 0, 1", () => {
      const res1 = utils.makeHeptanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("0", core.numArrayToString(res1[4]));
      assert.equal("0", core.numArrayToString(res1[5]));
      assert.equal("1", core.numArrayToString(res1[6]));
      assert.equal("1", core.numArrayToString(res1[7]));
      assert.equal("2", core.numArrayToString(res1[8]));
      assert.equal("4", core.numArrayToString(res1[9]));
      assert.equal("8", core.numArrayToString(res1[10]));
      assert.equal("16", core.numArrayToString(res1[11]));
      assert.equal("32", core.numArrayToString(res1[12]));
      assert.equal("64", core.numArrayToString(res1[13]));
      assert.equal("127", core.numArrayToString(res1[14]));
    });
  });

  describe("makeOctanacciSequence", function(){
    it("0, 0, 0, 0, 0, 0, 0, 1", () => {
      const res1 = utils.makeOctanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("0", core.numArrayToString(res1[4]));
      assert.equal("0", core.numArrayToString(res1[5]));
      assert.equal("0", core.numArrayToString(res1[6]));
      assert.equal("1", core.numArrayToString(res1[7]));
      assert.equal("1", core.numArrayToString(res1[8]));
      assert.equal("2", core.numArrayToString(res1[9]));
      assert.equal("4", core.numArrayToString(res1[10]));
      assert.equal("8", core.numArrayToString(res1[11]));
      assert.equal("16", core.numArrayToString(res1[12]));
      assert.equal("32", core.numArrayToString(res1[13]));
      assert.equal("64", core.numArrayToString(res1[14]));
      assert.equal("128", core.numArrayToString(res1[15]));
      assert.equal("255", core.numArrayToString(res1[16]));
    });
  });

  describe("makeNonanacciSequence", function(){
    it("0, 0, 0, 0, 0, 0, 0, 0, 1", () => {
      const res1 = utils.makeNonanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("0", core.numArrayToString(res1[4]));
      assert.equal("0", core.numArrayToString(res1[5]));
      assert.equal("0", core.numArrayToString(res1[6]));
      assert.equal("0", core.numArrayToString(res1[7]));
      assert.equal("1", core.numArrayToString(res1[8]));
      assert.equal("1", core.numArrayToString(res1[9]));
      assert.equal("2", core.numArrayToString(res1[10]));
      assert.equal("4", core.numArrayToString(res1[11]));
      assert.equal("8", core.numArrayToString(res1[12]));
      assert.equal("16", core.numArrayToString(res1[13]));
      assert.equal("32", core.numArrayToString(res1[14]));
      assert.equal("64", core.numArrayToString(res1[15]));
      assert.equal("128", core.numArrayToString(res1[16]));
      assert.equal("256", core.numArrayToString(res1[17]));
      assert.equal("511", core.numArrayToString(res1[18]));
    });
  });

  describe("makeDecanacciSequence", function(){
    it("0, 0, 0, 0, 0, 0, 0, 0, 0, 1", () => {
      const res1 = utils.makeDecanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("0", core.numArrayToString(res1[4]));
      assert.equal("0", core.numArrayToString(res1[5]));
      assert.equal("0", core.numArrayToString(res1[6]));
      assert.equal("0", core.numArrayToString(res1[7]));
      assert.equal("0", core.numArrayToString(res1[8]));
      assert.equal("1", core.numArrayToString(res1[9]));
      assert.equal("1", core.numArrayToString(res1[10]));
      assert.equal("2", core.numArrayToString(res1[11]));
      assert.equal("4", core.numArrayToString(res1[12]));
      assert.equal("8", core.numArrayToString(res1[13]));
      assert.equal("16", core.numArrayToString(res1[14]));
      assert.equal("32", core.numArrayToString(res1[15]));
      assert.equal("64", core.numArrayToString(res1[16]));
      assert.equal("128", core.numArrayToString(res1[17]));
      assert.equal("256", core.numArrayToString(res1[18]));
      assert.equal("512", core.numArrayToString(res1[19]));
      assert.equal("1023", core.numArrayToString(res1[20]));
    });
  });

  describe("makeUndecanacciSequence", function(){
    it("0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1", () => {
      const res1 = utils.makeUndecanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("0", core.numArrayToString(res1[4]));
      assert.equal("0", core.numArrayToString(res1[5]));
      assert.equal("0", core.numArrayToString(res1[6]));
      assert.equal("0", core.numArrayToString(res1[7]));
      assert.equal("0", core.numArrayToString(res1[8]));
      assert.equal("0", core.numArrayToString(res1[9]));
      assert.equal("1", core.numArrayToString(res1[10]));
      assert.equal("1", core.numArrayToString(res1[11]));
      assert.equal("2", core.numArrayToString(res1[12]));
      assert.equal("4", core.numArrayToString(res1[13]));
      assert.equal("8", core.numArrayToString(res1[14]));
      assert.equal("16", core.numArrayToString(res1[15]));
      assert.equal("32", core.numArrayToString(res1[16]));
      assert.equal("64", core.numArrayToString(res1[17]));
      assert.equal("128", core.numArrayToString(res1[18]));
      assert.equal("256", core.numArrayToString(res1[19]));
      assert.equal("512", core.numArrayToString(res1[20]));
      assert.equal("1024", core.numArrayToString(res1[21]));
      assert.equal("2047", core.numArrayToString(res1[22]));
    });
  });

  describe("makeDodecanacciSequence", function(){
    it("0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1", () => {
      const res1 = utils.makeDodecanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("0", core.numArrayToString(res1[4]));
      assert.equal("0", core.numArrayToString(res1[5]));
      assert.equal("0", core.numArrayToString(res1[6]));
      assert.equal("0", core.numArrayToString(res1[7]));
      assert.equal("0", core.numArrayToString(res1[8]));
      assert.equal("0", core.numArrayToString(res1[9]));
      assert.equal("0", core.numArrayToString(res1[10]));
      assert.equal("1", core.numArrayToString(res1[11]));
      assert.equal("1", core.numArrayToString(res1[12]));
      assert.equal("2", core.numArrayToString(res1[13]));
      assert.equal("4", core.numArrayToString(res1[14]));
      assert.equal("8", core.numArrayToString(res1[15]));
      assert.equal("16", core.numArrayToString(res1[16]));
      assert.equal("32", core.numArrayToString(res1[17]));
      assert.equal("64", core.numArrayToString(res1[18]));
      assert.equal("128", core.numArrayToString(res1[19]));
      assert.equal("256", core.numArrayToString(res1[20]));
      assert.equal("512", core.numArrayToString(res1[21]));
      assert.equal("1024", core.numArrayToString(res1[22]));
      assert.equal("2048", core.numArrayToString(res1[23]));
      assert.equal("4095", core.numArrayToString(res1[24]));
    });
  });

  describe("makeIcosanacciSequence", function(){
    it("0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1", () => {
      const res1 = utils.makeIcosanacciSequence();
      assert.equal("0", core.numArrayToString(res1[0]));
      assert.equal("0", core.numArrayToString(res1[1]));
      assert.equal("0", core.numArrayToString(res1[2]));
      assert.equal("0", core.numArrayToString(res1[3]));
      assert.equal("0", core.numArrayToString(res1[4]));
      assert.equal("0", core.numArrayToString(res1[5]));
      assert.equal("0", core.numArrayToString(res1[6]));
      assert.equal("0", core.numArrayToString(res1[7]));
      assert.equal("0", core.numArrayToString(res1[8]));
      assert.equal("0", core.numArrayToString(res1[9]));
      assert.equal("0", core.numArrayToString(res1[10]));
      assert.equal("0", core.numArrayToString(res1[11]));
      assert.equal("0", core.numArrayToString(res1[12]));
      assert.equal("0", core.numArrayToString(res1[13]));
      assert.equal("0", core.numArrayToString(res1[14]));
      assert.equal("0", core.numArrayToString(res1[15]));
      assert.equal("0", core.numArrayToString(res1[16]));
      assert.equal("0", core.numArrayToString(res1[17]));
      assert.equal("0", core.numArrayToString(res1[18]));
      assert.equal("1", core.numArrayToString(res1[19]));
      assert.equal("1", core.numArrayToString(res1[20]));
      assert.equal("2", core.numArrayToString(res1[21]));
      assert.equal("4", core.numArrayToString(res1[22]));
      assert.equal("8", core.numArrayToString(res1[23]));
      assert.equal("16", core.numArrayToString(res1[24]));
      assert.equal("32", core.numArrayToString(res1[25]));
      assert.equal("64", core.numArrayToString(res1[26]));
      assert.equal("128", core.numArrayToString(res1[27]));
      assert.equal("256", core.numArrayToString(res1[28]));
      assert.equal("512", core.numArrayToString(res1[29]));
      assert.equal("1024", core.numArrayToString(res1[30]));
      assert.equal("2048", core.numArrayToString(res1[31]));
      assert.equal("4096", core.numArrayToString(res1[32]));
      assert.equal("8192", core.numArrayToString(res1[33]));
      assert.equal("16384", core.numArrayToString(res1[34]));
      assert.equal("32768", core.numArrayToString(res1[35]));
      assert.equal("65536", core.numArrayToString(res1[36]));
      assert.equal("131072", core.numArrayToString(res1[37]));
      assert.equal("262144", core.numArrayToString(res1[38]));
      assert.equal("524288", core.numArrayToString(res1[39]));
      assert.equal("1048575", core.numArrayToString(res1[40]));
    });
  });


  describe("makeLucaSequence", function(){
    it("0, 1", () => {
      const res = utils.makeLucaSequence();
      assert.equal("2", core.numArrayToString(res[0]));
      assert.equal("1", core.numArrayToString(res[1]));
      assert.equal("3", core.numArrayToString(res[2]));
      assert.equal("4", core.numArrayToString(res[3]));
      assert.equal("7", core.numArrayToString(res[4]));
      assert.equal("11", core.numArrayToString(res[5]));
      assert.equal("18", core.numArrayToString(res[6]));
      assert.equal("29", core.numArrayToString(res[7]));
      assert.equal("47", core.numArrayToString(res[8]));
      assert.equal("76", core.numArrayToString(res[9]));
    });
  });

  describe("summation", function(){
    
    it("0, 0 => 0", () => {
      const res = utils.summation(["0", "0"]);
      assert.equal("0", core.numArrayToString(res));
    });
    
    it("1, 2 => 3", () => {
      const res = utils.summation(["1", "2"]);
      assert.equal("3", core.numArrayToString(res));
    });
    
    it("1, 2, 3, 4, 5 => 15", () => {
      const res = utils.summation(["1", "2", "3", "4", "5"]);
      assert.equal("15", core.numArrayToString(res));
    });

    it("0.1, 0.5, 0.3 => 0.9", () => {
      const res = utils.summation(["0.1", "0.5", "0.3"]);
      assert.equal("0.9", core.numArrayToString(res));
    });

    it("null => Error", () => {
      const res = utils.summation(null);
      assert.equal(true, res instanceof Error);
    });

    it("[''] => Error", () => {
      const res = utils.summation([""]);
      assert.equal(true, res instanceof Error);
    });

  });

  describe("infiniteProduct", function(){
    
    it("0, 0 => 0", () => {
      const res = utils.infiniteProduct(["0", "0"]);
      assert.equal("0", core.numArrayToString(res));
    });
    
    it("1, 2 => 2", () => {
      const res = utils.infiniteProduct(["1", "2"]);
      assert.equal("2", core.numArrayToString(res));
    });

    it("1, 2, 3 => 6", () => {
      const res = utils.infiniteProduct(["1", "2", "3"]);
      assert.equal("6", core.numArrayToString(res));
    });

    it("1, 2, 3, 4 => 24", () => {
      const res = utils.infiniteProduct(["1", "2", "3", "4"]);
      assert.equal("24", core.numArrayToString(res));
    });

    it("1, 2, 3, 4, 5 => 120", () => {
      const res = utils.infiniteProduct(["1", "2", "3", "4", "5"]);
      assert.equal("120", core.numArrayToString(res));
    });
    
    it("'' => Error", () => {
      const res = utils.infiniteProduct([""]);
      assert.equal(true, res instanceof Error);
    });

    it("null => Error", () => {
      const res = utils.infiniteProduct(null);
      assert.equal(true, res instanceof Error);
    });

  });
  
  describe("digitSum", function(){
    
    it("0 => 0", () => {
      const res = utils.digitSum("0");
      assert.equal("0", core.numArrayToString(res));
    });


    it("123 => 6", () => {
      const res = utils.digitSum("123");
      assert.equal("6", core.numArrayToString(res));
    });

    it("123456789 => 45", () => {
      const res = utils.digitSum("123456789");
      assert.equal("45", core.numArrayToString(res));
    });


    it("'' => Error", () => {
      const res = utils.digitSum("");
      assert.equal(true, res instanceof Error);
    });

  });

  describe("makeTriangleNumber", function(){
    
    it("1 => 1", () => {
      const res = utils.makeTriangleNumber("1");
      assert.equal("1", core.numArrayToString(res));
    });
    it("2 => 3", () => {
      const res = utils.makeTriangleNumber("2");
      assert.equal("3", core.numArrayToString(res));
    });
    it("3 => 6", () => {
      const res = utils.makeTriangleNumber("3");
      assert.equal("6", core.numArrayToString(res));
    });
    it("4 => 10", () => {
      const res = utils.makeTriangleNumber("4");
      assert.equal("10", core.numArrayToString(res));
    });

    it("0 => null", () => {
      const res = utils.makeTriangleNumber("0");
      assert.equal(true, res instanceof Error);
    });

    it("-1 => null", () => {
      const res = utils.makeTriangleNumber("-1");
      assert.equal(true, res instanceof Error);
    });

    it("1.1 => null", () => {
      const res = utils.makeTriangleNumber("1.1");
      assert.equal(true, res instanceof Error);
    });


  });
  
  describe("makePronicNumber", function(){
    
    it("1 => 2", () => {
      const res = utils.makePronicNumber("1");
      assert.equal("2", core.numArrayToString(res));
    });
    it("2 => 6", () => {
      const res = utils.makePronicNumber("2");
      assert.equal("6", core.numArrayToString(res));
    });
    it("3 => 12", () => {
      const res = utils.makePronicNumber("3");
      assert.equal("12", core.numArrayToString(res));
    });
    it("4 => 20", () => {
      const res = utils.makePronicNumber("4");
      assert.equal("20", core.numArrayToString(res));
    });
    it("5 => 30", () => {
      const res = utils.makePronicNumber("5");
      assert.equal("30", core.numArrayToString(res));
    });

    it("0 => 0", () => {
      const res = utils.makePronicNumber("0");
      assert.equal("0", core.numArrayToString(res));
    });

    it("1.1 => Error", () => {
      const res = utils.makePronicNumber("1.1");
      assert.equal(true, res instanceof Error);
    });

    it("-1 => Error", () => {
      const res = utils.makePronicNumber("-1");
      assert.equal(true, res instanceof Error);
    });


  });
  describe("factorial", function(){
    
    it("0! => 1", () => {
      const res = utils.factorial("0");
      assert.equal("1", core.numArrayToString(res));
    });

    it("1! => 1", () => {
      const res = utils.factorial("1");
      assert.equal("1", core.numArrayToString(res));
    });
    
    it("2! => 2", () => {
      const res = utils.factorial("2");
      assert.equal("2", core.numArrayToString(res));
    });

    it("3! => 6", () => {
      const res = utils.factorial("3");
      assert.equal("6", core.numArrayToString(res));
    });

    it("4! => 24", () => {
      const res = utils.factorial("4");
      assert.equal("24", core.numArrayToString(res));
    });
    
    it("5! => 120", () => {
      const res = utils.factorial("5");
      assert.equal("120", core.numArrayToString(res));
    });

    it("6! => 720", () => {
      const res = utils.factorial("6");
      assert.equal("720", core.numArrayToString(res));
    });
    
    it("7! => 5040", () => {
      const res = utils.factorial("7");
      assert.equal("5040", core.numArrayToString(res));
    });

    it("1.1! => Error", () => {
      const res = utils.factorial("1.1");
      assert.equal(true, res instanceof Error);

    });

    it("-1! => Error", () => {
      const res = utils.factorial("-1");
      assert.equal(true, res instanceof Error);

    });

    it("null! => Error", () => {
      const res = utils.factorial(null);
      assert.equal(true, res instanceof Error);

    });

  });

  describe("isPrimeNumber", function(){
    it("1=> false", () => {
      const res = utils.isPrimeNumber("1");
      assert.equal(false, res);
    });

    it("2=> true", () => {
      const res = utils.isPrimeNumber("2");
      assert.equal(true, res);
    });

    it("3=> true", () => {
      const res = utils.isPrimeNumber("3");
      assert.equal(true, res);
    });

    it("4=> false", () => {
      const res = utils.isPrimeNumber("4");
      assert.equal(false, res);
    });

    it("5=> true", () => {
      const res = utils.isPrimeNumber("5");
      assert.equal(true, res);
    });

    it("6=> false", () => {
      const res = utils.isPrimeNumber("6");
      assert.equal(false, res);
    });


    it("0=> false", () => {
      const res = utils.isPrimeNumber("0");
      assert.equal(false, res);
    });

    it("-1=> false", () => {
      const res = utils.isPrimeNumber("-1");
      assert.equal(false, res);
    });

    it("-2=> false", () => {
      const res = utils.isPrimeNumber("-2");
      assert.equal(false, res);
    });


    it("0.5=> false", () => {
      const res = utils.isPrimeNumber("0.5");
      assert.equal(false, res);
    });
    
    it("-0.5=> false", () => {
      const res = utils.isPrimeNumber("-0.5");
      assert.equal(false, res);
    });

  });


  describe("makeMersenneNumbers", function(){
    it("restult is array", () => {
      const res = utils.makeMersenneNumbers(25);
      assert.equal(true, res instanceof Array);
    });

    it("first is 1", () => {
      const res = utils.makeMersenneNumbers(1);
      assert.equal("1", core.numArrayToString(res[0]));
    });

    it("second is 3", () => {
      const res = utils.makeMersenneNumbers(2);
      assert.equal("3", core.numArrayToString(res[1]));
    });

    it("third is 7", () => {
      const res = utils.makeMersenneNumbers(3);
      assert.equal("7", core.numArrayToString(res[2]));
    });

    it("result length is 10", () => {
      const res = utils.makeMersenneNumbers(10);
      assert.equal(10, res.length);
    });


  });

});









