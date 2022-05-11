const assert = require('assert');
const app = require("../app.js");
const core = app.core2;
const utils = app.utils;

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

  it("isEqual", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("1");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
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

  it("square", () => {
    const num = utils.getNumber("3");
    const sq = utils.square(num);
    const res = utils.isEqual(sq, utils.getNumber("9"));
    assert.equal(res, true);
  });

  it("getDecimal", () => {
    const num1 = utils.getNumber("1.11");
    const dec = utils.getDecimal(num1);
    const num2 = utils.getNumber("0.11");
    const res = utils.isEqual(dec, num2);
    assert.equal(res, true);
  });

  it("isNaturalNumber", () => {
    const num1 = utils.getNumber("1.0");
    const num2 = utils.getNumber("1.11");
    const res1 = utils.isNaturalNumber(num1);
    const res2 = utils.isNaturalNumber(num2);
    const res = res1 && !res2;
    assert.equal(res, true);
  });

  it("includeDecimal", () => {
    const num1 = utils.getNumber("1.11");
    const num2 = utils.getNumber("1.0");
    const res1 = utils.includeDecimal(num1);
    const res2 = utils.includeDecimal(num2);
    const res = res1 && !res2;
    assert.equal(res, true);
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
    const res1 = utils.isInteger(num1);
    const res2 = utils.isInteger(num2);
    const res3 = utils.isInteger(num3);
    const res = res1 && !res2 && res3;
    assert.equal(res, true);
  });

  it("isEvenNumber", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("2");
    const num3 = utils.getNumber("2.2");
    const res1 = utils.isEvenNumber(num1);
    const res2 = utils.isEvenNumber(num2);
    const res3 = utils.isEvenNumber(num3);
    const res = !res1 && res2 && !res3;
    assert.equal(res, true);
  });

  it("isOddNumber", () => {
    const num1 = utils.getNumber("1");
    const num2 = utils.getNumber("2");
    const num3 = utils.getNumber("2.2");
    const res1 = utils.isOddNumber(num1);
    const res2 = utils.isOddNumber(num2);
    const res3 = utils.isOddNumber(num3);
    const res = res1 && !res2 && !res3;
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


});









