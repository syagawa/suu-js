const assert = require('assert');
const app = require("../app.js");
const core = app.core;
const utils = app.utils;

describe("utils", function(){
  describe("getNumber", function(){
    it("1", () => {
      const num = utils.getNumber("1");
      assert.equal(num.is_num_array, true);
    });

    it("101", () => {
      const num = utils.getNumber("101");
      assert.equal(num.is_num_array, true);
    });
  
    it("-101.523", () => {
      const num = utils.getNumber("-101.523");
      assert.equal(num.is_num_array, true);
    });

    it("Error", () => {
      const num = utils.getNumber("");
      assert.equal(true, num instanceof Error);
    });
  });


  describe("copy", function(){
    it("1 => 1", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.copy(num1);
      const str1 = core.numArrayToString(num1);
      const str2 = core.numArrayToString(num2);
      assert.equal(str1, str2);
    });
    
    it("'' is Error", () => {
      const num = utils.copy("");
      assert.equal(true, num instanceof Error);
    });
  });

  describe("getLarge", function(){
    it("2 > 1 => true", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("2");
      const large = utils.getLarge(num1, num2);
      const res = utils.isEqual(num2, large);
      assert.equal(res, true);
    });
    
    it("1 > 2 => false", () => {
      const num1 = utils.getNumber("2");
      const num2 = utils.getNumber("1");
      const large = utils.getLarge(num1, num2);
      const res = utils.isEqual(num2, large);
      assert.equal(res, false);
    });
    
    it("1.999 < 2 => true", () => {
      const num1 = utils.getNumber("2");
      const num2 = utils.getNumber("1.999");
      const large = utils.getLarge(num1, num2);
      const res = utils.isEqual(num1, large);
      assert.equal(res, true);
    });
    
    it("2.0001 > 2 => true", () => {
      const num1 = utils.getNumber("2.0001");
      const num2 = utils.getNumber("2");
      const large = utils.getLarge(num1, num2);
      const res = utils.isEqual(num1, large);
      assert.equal(res, true);
    });

    it("1 > -1 => true", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("-1");
      const large = utils.getLarge(num1, num2);
      const res = utils.isEqual(num1, large);
      assert.equal(res, true);
    });

    it("1 > 1 => null", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("1");
      const large = utils.getLarge(num1, num2);
      assert.equal(large, null);
    });

    it("'' is null", () => {
      const res = utils.getLarge("", "");
      assert.equal(null, res);
    });
  });

  
  describe("getSmall", function(){

    it("2 > 1 => true", () => {
      const num1 = utils.getNumber("2");
      const num2 = utils.getNumber("1");
      const small = utils.getSmall(num1, num2);
      const res = utils.isEqual(num2, small);
      assert.equal(res, true);
    });
    
    it("2 < 1 => false", () => {
      const num1 = utils.getNumber("2");
      const num2 = utils.getNumber("1");
      const small = utils.getSmall(num1, num2);
      const res = utils.isEqual(num1, small);
      assert.equal(res, false);
    });
    
    it("1.999 < 2 => true", () => {
      const num1 = utils.getNumber("2");
      const num2 = utils.getNumber("1.999");
      const small = utils.getSmall(num1, num2);
      const res = utils.isEqual(num2, small);
      assert.equal(res, true);
    });
    
    it("2.0001 > 2 => true", () => {
      const num1 = utils.getNumber("2.0001");
      const num2 = utils.getNumber("2");
      const small = utils.getSmall(num1, num2);
      const res = utils.isEqual(num2, small);
      assert.equal(res, true);
    });

    it("1 > 1 => null", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("1");
      const small = utils.getSmall(num1, num2);
      assert.equal(small, null);
    });
    
    it("1 > -1 => true", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("-1");
      const small = utils.getSmall(num1, num2);
      assert.equal(small, num2);
    });

    it("1 > -10 => true", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("-10");
      const small = utils.getSmall(num1, num2);
      assert.equal(small, num2);
    });

    it("'' is null", () => {
      const res = utils.getSmall("", "");
      assert.equal(null, res);
    });
  });

  describe("isEqual", function(){
    it("1 = 1 => true", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("1");
      const res = utils.isEqual(num1, num2);
      assert.equal(res, true);
    });
    
    it("0 = 0 => true", () => {
      const num1 = utils.getNumber("0");
      const num2 = utils.getNumber("0");
      const res = utils.isEqual(num1, num2);
      assert.equal(res, true);
    });

    it("1.0 = 1 => true", () => {
      const num1 = utils.getNumber("1.0");
      const num2 = utils.getNumber("1");
      const res = utils.isEqual(num1, num2);
      assert.equal(res, true);
    });

    it("-1 = -1 => true", () => {
      const num1 = utils.getNumber("-1");
      const num2 = utils.getNumber("-1");
      const res = utils.isEqual(num1, num2);
      assert.equal(res, true);
    });

    it("1 = 2 is false", () => {
      const num1 = utils.getNumber("1");
      const num2 = utils.getNumber("2");
      const res = utils.isEqual(num1, num2);
      assert.equal(res, false);
    });

    it("10 = 1.0 is false", () => {
      const num1 = utils.getNumber("10");
      const num2 = utils.getNumber("1.0");
      const res = utils.isEqual(num1, num2);
      assert.equal(res, false);
    });

    it("'' is false", () => {
      const res = utils.isEqual("", "");
      assert.equal(res, false);
    });
  });


  it("getZero", () => {
    const num1 = utils.getZero();
    const num2 = utils.getNumber("0");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
  });
  
  
  describe("isZero", function(){
    it("getZero => true", () => {
      const num1 = utils.getZero();
      const res = utils.isZero(num1);
      assert.equal(res, true);
    });
    it("0 => true", () => {
      const num1 = utils.getNumber("0");
      const res = utils.isZero(num1);
      assert.equal(res, true);
    });
    it("0.0 => true", () => {
      const num1 = utils.getNumber("0.0");
      const res = utils.isZero(num1);
      assert.equal(res, true);
    });
    it("-1 => false", () => {
      const num1 = utils.getNumber("-1");
      const res = utils.isZero(num1);
      assert.equal(res, false);
    });
    it("1 => false", () => {
      const num1 = utils.getNumber("1");
      const res = utils.isZero(num1);
      assert.equal(res, false);
    });
    it("0.1 => false", () => {
      const num1 = utils.getNumber("0.1");
      const res = utils.isZero(num1);
      assert.equal(res, false);
    });
  });
  
  it("getOne", () => {
    const num1 = utils.getOne();
    const num2 = utils.getNumber("1");
    const res = utils.isEqual(num1, num2);
    assert.equal(res, true);
  });
  
  describe("isOne", function(){
    it("1 => true", () => {
      const num1 = utils.getNumber("1");
      const res = utils.isOne(num1);
      assert.equal(res, true);
    });
    it("1.0 => true", () => {
      const num1 = utils.getNumber("1.0");
      const res = utils.isOne(num1);
      assert.equal(res, true);
    });
    it("-1 => false", () => {
      const num1 = utils.getNumber("-1");
      const res = utils.isOne(num1);
      assert.equal(res, false);
    });
    it("1.1 => false", () => {
      const num1 = utils.getNumber("1.1");
      const res = utils.isOne(num1);
      assert.equal(res, false);
    });
  });

  it("getOne => true", () => {
    const num1 = utils.getOne();
    const res = utils.isOne(num1);
    assert.equal(res, true);
  });

  describe("square", function(){
    it("3 => 9", () => {
      const num = utils.getNumber("3");
      const sq = utils.square(num);
      const res = utils.isEqual(sq, utils.getNumber("9"));
      assert.equal(res, true);
    });
    
    it("1.1 => 1.21", () => {
      const num = utils.getNumber("1.1");
      const sq = utils.square(num);
      const res = utils.isEqual(sq, utils.getNumber("1.21"));
      assert.equal(res, true);
    });

    it("0 => 0", () => {
      const num = utils.getNumber("0");
      const sq = utils.square(num);
      const res = utils.isEqual(sq, utils.getNumber("0"));
      assert.equal(res, true);
    });

    it("'' => Error", () => {
      const sq = utils.square("");
      assert.equal(true, sq instanceof Error);
    });
  });
  
  describe("getAbsolute", function(){
    it("3 => 3", () => {
      const num = utils.getNumber("3");
      const abs = utils.getAbsolute(num);
      const res = utils.isEqual(abs, "3");
      assert.equal(res, true);
    });
    
    it("-3 => 3", () => {
      const num = utils.getNumber("-3");
      const abs = utils.getAbsolute(num);
      const res = utils.isEqual(abs, "3");
      assert.equal(res, true);
    });

    it("1.5 => 1.5", () => {
      const num = utils.getNumber("1.5");
      const abs = utils.getAbsolute(num);
      const res = utils.isEqual(abs, "1.5");
      assert.equal(res, true);
    });

    it("-1.5 => 1.5", () => {
      const num = utils.getNumber("-1.5");
      const abs = utils.getAbsolute(num);
      const res = utils.isEqual(abs, "1.5");
      assert.equal(res, true);
    });

    it("0 => 0", () => {
      const num = utils.getNumber("0");
      const abs = utils.getAbsolute(num);
      const res = utils.isEqual(abs, "0");
      assert.equal(res, true);
    });

    it("'' => Error", () => {
      const abs = utils.getAbsolute("");
      const res = abs ? true : false;
      assert.equal(res, true);
    });
  });

  describe("getDecimal", function(){
    it("1.11", () => {
      const num1 = utils.getNumber("1.11");
      const dec = utils.getDecimal(num1);
      const num2 = utils.getNumber("0.11");
      const res = utils.isEqual(dec, num2);
      assert.equal(res, true);
    });

    it("1", () => {
      const num1 = utils.getNumber("1");
      const dec = utils.getDecimal(num1);
      const num2 = utils.getNumber("0");
      const res = utils.isEqual(dec, num2);
      assert.equal(res, true);
    });

    it("1.0", () => {
      const num1 = utils.getNumber("1.0");
      const dec = utils.getDecimal(num1);
      const num2 = utils.getNumber("0");
      const res = utils.isEqual(dec, num2);
      assert.equal(res, true);
    });

    it("1.05", () => {
      const num1 = utils.getNumber("1.05");
      const dec = utils.getDecimal(num1);
      const num2 = utils.getNumber("0.05");
      const res = utils.isEqual(dec, num2);
      assert.equal(res, true);
    });
    
    it("'' => Error", () => {
      const dec = utils.getDecimal("");
      assert.equal(dec instanceof Error, true);
    });
  });

  describe("isNaturalNumber", function(){
    it("1 => true", () => {
      const num = utils.getNumber("1");
      const res = utils.isNaturalNumber(num);
      assert.equal(res, true);
    });

    it("1.0 => true", () => {
      const num = utils.getNumber("1.0");
      const res = utils.isNaturalNumber(num);
      assert.equal(res, true);
    });

    it("0 => true", () => {
      const num = utils.getNumber("0");
      const res = utils.isNaturalNumber(num);
      assert.equal(res, true);
    });

    it("1.11 => false", () => {
      const num1 = utils.getNumber("1.11");
      const res = utils.isNaturalNumber(num1);
      assert.equal(res, false);
    });

    it("-1 => false", () => {
      const num1 = utils.getNumber("-1");
      const res = utils.isNaturalNumber(num1);
      assert.equal(res, false);
    });
  });

  describe("includeDecimal", function(){
    it("1.11 => true", () => {
      const num = utils.getNumber("1.11");
      const res = utils.includeDecimal(num);
      assert.equal(res, true);
    });
    
    it("1.0 => false", () => {
      const num = utils.getNumber("1.0");
      const res = utils.includeDecimal(num);
      assert.equal(res, false);
    });
    
    it("10.1 => true", () => {
      const num = utils.getNumber("10.1");
      const res = utils.includeDecimal(num);
      assert.equal(res, true);
    });

    it("10.01 => true", () => {
      const num = utils.getNumber("10.01");
      const res = utils.includeDecimal(num);
      assert.equal(res, true);
    });


    it("0 => false", () => {
      const num = utils.getNumber("0");
      const res = utils.includeDecimal(num);
      assert.equal(res, false);
    });
  });

  describe("isNegative", function(){
    it("-1.11 => true", () => {
      const num = utils.getNumber("-1.11");
      const res = utils.isNegative(num);
      assert.equal(res, true);
    });

    it("1.0 => false", () => {
      const num = utils.getNumber("1.0");
      const res = utils.isNegative(num);
      assert.equal(res, false);
    });

    it("0 => false", () => {
      const num = utils.getNumber("0");
      const res = utils.isNegative(num);
      assert.equal(res, false);
    });
  });

  describe("isPositive", function(){
    it("1.11 => true", () => {
      const num = utils.getNumber("1.11");
      const res = utils.isPositive(num);
      assert.equal(res, true);
    });

    it("-1.0 => false", () => {
      const num = utils.getNumber("-1.0");
      const res = utils.isPositive(num);
      assert.equal(res, false);
    });
    
    it("1 => true", () => {
      const num = utils.getNumber("1");
      const res = utils.isPositive(num);
      assert.equal(res, true);
    });

    it("0 => false", () => {
      const num = utils.getNumber("0");
      const res = utils.isPositive(num);
      assert.equal(res, false);
    });
  });


  describe("getNext", function(){
    it("getNext 1 => 2", () => {
      const num1 = utils.getNumber("1");
      const next = utils.getNumber("2");
      const res = utils.getNext(num1);
      assert.equal(core.numArrayToString(res), core.numArrayToString(next));
    });

    it("getNext 0 => 1", () => {
      const num1 = utils.getNumber("0");
      const next = utils.getNumber("1");
      const res = utils.getNext(num1);
      assert.equal(core.numArrayToString(res), core.numArrayToString(next));
    });

    it("getNext -1 => 0", () => {
      const num1 = utils.getNumber("-1");
      const next = utils.getNumber("0");
      const res = utils.getNext(num1);
      assert.equal(core.numArrayToString(res), core.numArrayToString(next));
    });

    it("getNext 1.1 => 2.1", () => {
      const num1 = utils.getNumber("1.1");
      const next = utils.getNumber("2.1");
      const res = utils.getNext(num1);
      assert.equal(core.numArrayToString(res), core.numArrayToString(next));
    });
  });

  describe("getPrev", function(){
    it("1 => 0", () => {
      const num1 = utils.getNumber("1");
      const prev = utils.getNumber("0");
      const res = utils.getPrev(num1);
      assert.equal(core.numArrayToString(res), core.numArrayToString(prev));
    });

    it("0 => -1", () => {
      const num1 = utils.getNumber("0");
      const prev = utils.getNumber("-1");
      const res = utils.getPrev(num1);
      assert.equal(core.numArrayToString(res), core.numArrayToString(prev));
    });
    
    it("1.1 => 0.1", () => {
      const num1 = utils.getNumber("1.1");
      const prev = utils.getNumber("0.1");
      const res = utils.getPrev(num1);
      assert.equal(core.numArrayToString(res), core.numArrayToString(prev));
    });
  });


  describe("isInteger", function(){
    it("1 => true", () => {
      const num = utils.getNumber("1");
      const res = utils.isInteger(num);
      assert.equal(res, true);
    });

    it("1.1 => false", () => {
      const num = utils.getNumber("1.1");
      const res = utils.isInteger(num);
      assert.equal(res, false);
    });

    it("-1 => true", () => {
      const num = utils.getNumber("-1");
      const res = utils.isInteger(num);
      assert.equal(res, true);
    });

    it("10001.0 => true", () => {
      const num = utils.getNumber("10001.0");
      const res = utils.isInteger(num);
      assert.equal(res, true);
    });
  });


  describe("isEvenNumber", function(){
    it("1 => false", () => {
      const num = utils.getNumber("1");
      const res = utils.isEvenNumber(num);
      assert.equal(res, false);
    });

    it("2 => true", () => {
      const num = utils.getNumber("2");
      const res = utils.isEvenNumber(num);
      assert.equal(res, true);
    });

    it("2.2 => false", () => {
      const num = utils.getNumber("2.2");
      const res = utils.isEvenNumber(num);
      assert.equal(res, false);
    });

    it("13 => false", () => {
      const num = utils.getNumber("13");
      const res = utils.isEvenNumber(num);
      assert.equal(res, false);
    });

    it("23 => false", () => {
      const num = utils.getNumber("23");
      const res = utils.isEvenNumber(num);
      assert.equal(res, false);
    });

    it("1112.0 => true", () => {
      const num = utils.getNumber("1112.0");
      const res = utils.isEvenNumber(num);
      assert.equal(res, true);
    });
  });

  describe("isOddNumber", function(){
    it("1 => true", () => {
      const num = utils.getNumber("1");
      const res = utils.isOddNumber(num);
      assert.equal(res, true);
    });

    it("2 => false", () => {
      const num = utils.getNumber("2");
      const res = utils.isOddNumber(num);
      assert.equal(res, false);
    });

    it("2.2 => false", () => {
      const num = utils.getNumber("2.2");
      const res = utils.isOddNumber(num);
      assert.equal(res, false);
    });

    it("3.3 => false", () => {
      const num = utils.getNumber("3.3");
      const res = utils.isOddNumber(num);
      assert.equal(res, false);
    });

    it("10 => false", () => {
      const num = utils.getNumber("10");
      const res = utils.isOddNumber(num);
      assert.equal(res, false);
    });

    it("11 => true", () => {
      const num = utils.getNumber("11");
      const res = utils.isOddNumber(num);
      assert.equal(res, true);
    });

    it("13 => true", () => {
      const num = utils.getNumber("13");
      const res = utils.isOddNumber(num);
      assert.equal(res, true);
    });

    it("29 => true", () => {
      const num = utils.getNumber("29");
      const res = utils.isOddNumber(num);
      assert.equal(res, true);
    });
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
    it("0= > false", () => {
      const res = utils.isPrimeNumber("0");
      assert.equal(false, res);
    });

    it("1= > false", () => {
      const res = utils.isPrimeNumber("1");
      assert.equal(false, res);
    });

    it("2= > true", () => {
      const res = utils.isPrimeNumber("2");
      assert.equal(true, res);
    });

    it("3= > true", () => {
      const res = utils.isPrimeNumber("3");
      assert.equal(true, res);
    });

    it("4= > false", () => {
      const res = utils.isPrimeNumber("4");
      assert.equal(false, res);
    });

    it("5= > true", () => {
      const res = utils.isPrimeNumber("5");
      assert.equal(true, res);
    });

    it("6= > false", () => {
      const res = utils.isPrimeNumber("6");
      assert.equal(false, res);
    });

    it("7= > true", () => {
      const res = utils.isPrimeNumber("7");
      assert.equal(true, res);
    });

    it("8= > false", () => {
      const res = utils.isPrimeNumber("8");
      assert.equal(false, res);
    });
    it("9= > false", () => {
      const res = utils.isPrimeNumber("9");
      assert.equal(false, res);
    });
    it("10 => false", () => {
      const res = utils.isPrimeNumber("10");
      assert.equal(false, res);
    });
    it("11 => true", () => {
      const res = utils.isPrimeNumber("11");
      assert.equal(true, res);
    });

    it("12 => false", () => {
      const res = utils.isPrimeNumber("12");
      assert.equal(false, res);
    });

    it("13 => true", () => {
      const res = utils.isPrimeNumber("13");
      assert.equal(true, res);
    });

    it("14 => false", () => {
      const res = utils.isPrimeNumber("14");
      assert.equal(false, res);
    });

    it("15 => false", () => {
      const res = utils.isPrimeNumber("15");
      assert.equal(false, res);
    });
    it("16 => false", () => {
      const res = utils.isPrimeNumber("16");
      assert.equal(false, res);
    });
    it("17 => true", () => {
      const res = utils.isPrimeNumber("17");
      assert.equal(true, res);
    });
    it("18 => false", () => {
      const res = utils.isPrimeNumber("18");
      assert.equal(false, res);
    });
    it("19 => true", () => {
      const res = utils.isPrimeNumber("19");
      assert.equal(true, res);
    });
    it("20 => false", () => {
      const res = utils.isPrimeNumber("20");
      assert.equal(false, res);
    });
    
    it("21 => false", () => {
      const res = utils.isPrimeNumber("21");
      assert.equal(false, res);
    });

    it("22 => false", () => {
      const res = utils.isPrimeNumber("22");
      assert.equal(false, res);
    });

    it("23 => true", () => {
      const res = utils.isPrimeNumber("23");
      assert.equal(true, res);
    });

    it("24 => false", () => {
      const res = utils.isPrimeNumber("24");
      assert.equal(false, res);
    });

    it("25 => false", () => {
      const res = utils.isPrimeNumber("25");
      assert.equal(false, res);
    });

    it("26 => false", () => {
      const res = utils.isPrimeNumber("26");
      assert.equal(false, res);
    });

    it("27 => false", () => {
      const res = utils.isPrimeNumber("27");
      assert.equal(false, res);
    });

    it("28 => false", () => {
      const res = utils.isPrimeNumber("28");
      assert.equal(false, res);
    });

    it("29 => true", () => {
      const res = utils.isPrimeNumber("29");
      assert.equal(true, res);
    });

    it("30 => false", () => {
      const res = utils.isPrimeNumber("30");
      assert.equal(false, res);
    });

    it("31 => true", () => {
      const res = utils.isPrimeNumber("31");
      assert.equal(true, res);
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


  describe("isMersenneNumber", function(){
    it("1 => true", () => {
      const res = utils.isMersenneNumber("1");
      assert.equal(true, res);
    });
    
    it("2 => false", () => {
      const res = utils.isMersenneNumber("2");
      assert.equal(false, res);
    });

    it("3 => true", () => {
      const res = utils.isMersenneNumber("3");
      assert.equal(true, res);
    });

    it("4 => false", () => {
      const res = utils.isMersenneNumber("4");
      assert.equal(false, res);
    });

    it("5 => false", () => {
      const res = utils.isMersenneNumber("5");
      assert.equal(false, res);
    });

    it("6 => false", () => {
      const res = utils.isMersenneNumber("6");
      assert.equal(false, res);
    });

    it("7 => true", () => {
      const res = utils.isMersenneNumber("7");
      assert.equal(true, res);
    });

    it("8 => false", () => {
      const res = utils.isMersenneNumber("8");
      assert.equal(false, res);
    });

    it("9 => false", () => {
      const res = utils.isMersenneNumber("9");
      assert.equal(false, res);
    });

    it("10 => false", () => {
      const res = utils.isMersenneNumber("10");
      assert.equal(false, res);
    });

    it("11 => false", () => {
      const res = utils.isMersenneNumber("11");
      assert.equal(false, res);
    });

    it("12 => false", () => {
      const res = utils.isMersenneNumber("12");
      assert.equal(false, res);
    });

    it("13 => false", () => {
      const res = utils.isMersenneNumber("13");
      assert.equal(false, res);
    });

    it("14 => false", () => {
      const res = utils.isMersenneNumber("14");
      assert.equal(false, res);
    });

    it("15 => true", () => {
      const res = utils.isMersenneNumber("15");
      assert.equal(true, res);
    });

    it("16 => false", () => {
      const res = utils.isMersenneNumber("16");
      assert.equal(false, res);
    });

    it("17 => false", () => {
      const res = utils.isMersenneNumber("17");
      assert.equal(false, res);
    });

    it("18 => false", () => {
      const res = utils.isMersenneNumber("18");
      assert.equal(false, res);
    });

    it("19 => false", () => {
      const res = utils.isMersenneNumber("19");
      assert.equal(false, res);
    });

    it("20 => false", () => {
      const res = utils.isMersenneNumber("20");
      assert.equal(false, res);
    });
    
    it("30 => false", () => {
      const res = utils.isMersenneNumber("30");
      assert.equal(false, res);
    });

    it("31 => true", () => {
      const res = utils.isMersenneNumber("31");
      assert.equal(true, res);
    });
    
    it("32 => false", () => {
      const res = utils.isMersenneNumber("32");
      assert.equal(false, res);
    });

    it("62 => false", () => {
      const res = utils.isMersenneNumber("62");
      assert.equal(false, res);
    });

    it("63 => true", () => {
      const res = utils.isMersenneNumber("63");
      assert.equal(true, res);
    });
    
    it("64 => false", () => {
      const res = utils.isMersenneNumber("64");
      assert.equal(false, res);
    });

    it("126 => false", () => {
      const res = utils.isMersenneNumber("126");
      assert.equal(false, res);
    });

    it("127 => true", () => {
      const res = utils.isMersenneNumber("127");
      assert.equal(true, res);
    });
    
    it("128 => false", () => {
      const res = utils.isMersenneNumber("128");
      assert.equal(false, res);
    });

  });

  describe("makeMersenneNumbers", function(){
    it("restult is Array", () => {
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
    
    it("fourth is 15", () => {
      const res = utils.makeMersenneNumbers(4);
      assert.equal("15", core.numArrayToString(res[3]));
    });
    
    it("fifth is 31", () => {
      const res = utils.makeMersenneNumbers(5);
      assert.equal("31", core.numArrayToString(res[4]));
    });
    
    it("sixth is 63", () => {
      const res = utils.makeMersenneNumbers(6);
      assert.equal("63", core.numArrayToString(res[5]));
    });

    it("result length is 10", () => {
      const res = utils.makeMersenneNumbers(10);
      assert.equal(10, res.length);
    });

  });
  describe("makePrimeNumbers", function(){
    it("restult is Array", () => {
      const res = utils.makePrimeNumbers(25);
      assert.equal(true, res instanceof Array);
    });

    it("first is 2", () => {
      const res = utils.makePrimeNumbers(1);
      assert.equal("2", core.numArrayToString(res[0]));
    });

    it("second is 3", () => {
      const res = utils.makePrimeNumbers(2);
      assert.equal("3", core.numArrayToString(res[1]));
    });

    it("third is 5", () => {
      const res = utils.makePrimeNumbers(3);
      assert.equal("5", core.numArrayToString(res[2]));
    });
    
    it("fourth is 7", () => {
      const res = utils.makePrimeNumbers(4);
      assert.equal("7", core.numArrayToString(res[3]));
    });
    
    it("fifth is 11", () => {
      const res = utils.makePrimeNumbers(5);
      assert.equal("11", core.numArrayToString(res[4]));
    });
    
    it("sixth is 13", () => {
      const res = utils.makePrimeNumbers(6);
      assert.equal("13", core.numArrayToString(res[5]));
    });
    
    it("seventh is 17", () => {
      const res = utils.makePrimeNumbers(7);
      assert.equal("17", core.numArrayToString(res[6]));
    });
    
    it("eighth is 19", () => {
      const res = utils.makePrimeNumbers(8);
      assert.equal("19", core.numArrayToString(res[7]));
    });

    it("result length is 1", () => {
      const res = utils.makePrimeNumbers(1);
      assert.equal(1, res.length);
    });
    
    it("result length is 10", () => {
      const res = utils.makePrimeNumbers(10);
      assert.equal(10, res.length);
    });

  });

  describe("isMersennePrimeNumber", () => {
    it("0 => false", () =>{
      const res = utils.isMersennePrimeNumber("0");
      assert.equal(false, res);
    });
    it("1 => false", () =>{
      const res = utils.isMersennePrimeNumber("1");
      assert.equal(false, res);
    });
    it("2 => false", () =>{
      const res = utils.isMersennePrimeNumber("2");
      assert.equal(false, res);
    });
    it("3 => true", () =>{
      const res = utils.isMersennePrimeNumber("3");
      assert.equal(true, res);
    });
    it("4 => false", () =>{
      const res = utils.isMersennePrimeNumber("4");
      assert.equal(false, res);
    });
    it("5 => false", () =>{
      const res = utils.isMersennePrimeNumber("5");
      assert.equal(false, res);
    });
    it("6 => false", () =>{
      const res = utils.isMersennePrimeNumber("6");
      assert.equal(false, res);
    });
    it("7 => true", () =>{
      const res = utils.isMersennePrimeNumber("7");
      assert.equal(true, res);
    });
    it("8 => false", () =>{
      const res = utils.isMersennePrimeNumber("8");
      assert.equal(false, res);
    });
    it("9 => false", () =>{
      const res = utils.isMersennePrimeNumber("9");
      assert.equal(false, res);
    });
    it("10 => false", () =>{
      const res = utils.isMersennePrimeNumber("10");
      assert.equal(false, res);
    });
    it("11 => false", () =>{
      const res = utils.isMersennePrimeNumber("11");
      assert.equal(false, res);
    });
  });
  
  describe("isHarshadNumber", () => {
    it("0 => false", () =>{
      const res = utils.isHarshadNumber("0");
      assert.equal(false, res);
    });
    it("1 => true", () =>{
      const res = utils.isHarshadNumber("1");
      assert.equal(true, res);
    });
    it("2 => true", () =>{
      const res = utils.isHarshadNumber("2");
      assert.equal(true, res);
    });
    it("3 => true", () =>{
      const res = utils.isHarshadNumber("3");
      assert.equal(true, res);
    });
    it("4 => true", () =>{
      const res = utils.isHarshadNumber("4");
      assert.equal(true, res);
    });
    it("5 => true", () =>{
      const res = utils.isHarshadNumber("5");
      assert.equal(true, res);
    });
    it("6 => true", () =>{
      const res = utils.isHarshadNumber("6");
      assert.equal(true, res);
    });
    it("7 => true", () =>{
      const res = utils.isHarshadNumber("7");
      assert.equal(true, res);
    });
    it("8 => true", () =>{
      const res = utils.isHarshadNumber("8");
      assert.equal(true, res);
    });
    it("9 => true", () =>{
      const res = utils.isHarshadNumber("9");
      assert.equal(true, res);
    });
    it("10 => true", () =>{
      const res = utils.isHarshadNumber("10");
      assert.equal(true, res);
    });

    it("11 => false", () =>{
      const res = utils.isHarshadNumber("11");
      assert.equal(false, res);
    });

    it("12 => true", () =>{
      const res = utils.isHarshadNumber("12");
      assert.equal(true, res);
    });

    it("13 => false", () =>{
      const res = utils.isHarshadNumber("13");
      assert.equal(false, res);
    });

    it("14 => false", () =>{
      const res = utils.isHarshadNumber("14");
      assert.equal(false, res);
    });

    it("15 => false", () =>{
      const res = utils.isHarshadNumber("15");
      assert.equal(false, res);
    });
    
    it("16 => false", () =>{
      const res = utils.isHarshadNumber("16");
      assert.equal(false, res);
    });

  });

  describe("isZuckermanNumber", () => {
    it("0 => false", () =>{
      const res = utils.isZuckermanNumber("0");
      assert.equal(false, res);
    });

    it("1 => true", () =>{
      const res = utils.isZuckermanNumber("1");
      assert.equal(true, res);
    });

    it("2 => true", () =>{
      const res = utils.isZuckermanNumber("2");
      assert.equal(true, res);
    });
    it("3 => true", () =>{
      const res = utils.isZuckermanNumber("3");
      assert.equal(true, res);
    });
    it("4 => true", () =>{
      const res = utils.isZuckermanNumber("4");
      assert.equal(true, res);
    });
    it("5 => true", () =>{
      const res = utils.isZuckermanNumber("5");
      assert.equal(true, res);
    });

    it("6 => true", () =>{
      const res = utils.isZuckermanNumber("6");
      assert.equal(true, res);
    });

    it("7 => true", () =>{
      const res = utils.isZuckermanNumber("7");
      assert.equal(true, res);
    });
    it("8 => true", () =>{
      const res = utils.isZuckermanNumber("8");
      assert.equal(true, res);
    });
    it("9 => true", () =>{
      const res = utils.isZuckermanNumber("9");
      assert.equal(true, res);
    });

    it("10 => false", () =>{
      const res = utils.isZuckermanNumber("10");
      assert.equal(false, res);
    });

    it("11 => true", () =>{
      const res = utils.isZuckermanNumber("11");
      assert.equal(true, res);
    });

  });

  describe("isRepunitNumber", () => {
    it("0 => false", () =>{
      const res = utils.isRepunitNumber("0");
      assert.equal(false, res);
    });
    
    it("1 => true", () =>{
      const res = utils.isRepunitNumber("1");
      assert.equal(true, res);
    });
    
    it("2 => false", () =>{
      const res = utils.isRepunitNumber("2");
      assert.equal(false, res);
    });

    it("10 => false", () =>{
      const res = utils.isRepunitNumber("10");
      assert.equal(false, res);
    });

    it("11 => true", () =>{
      const res = utils.isRepunitNumber("11");
      assert.equal(true, res);
    });

    it("12 => false", () =>{
      const res = utils.isRepunitNumber("12");
      assert.equal(false, res);
    });

    it("110 => false", () =>{
      const res = utils.isRepunitNumber("110");
      assert.equal(false, res);
    });

    it("111 => true", () =>{
      const res = utils.isRepunitNumber("111");
      assert.equal(true, res);
    });

    it("112 => false", () =>{
      const res = utils.isRepunitNumber("112");
      assert.equal(false, res);
    });

    it("1110 => false", () =>{
      const res = utils.isRepunitNumber("1110");
      assert.equal(false, res);
    });

    it("1111 => true", () =>{
      const res = utils.isRepunitNumber("1111");
      assert.equal(true, res);
    });

    it("1112 => false", () =>{
      const res = utils.isRepunitNumber("1112");
      assert.equal(false, res);
    });

  });

  describe("inversionNumber", () => {
    it("0 => 0", () =>{
      const res = utils.getInversionNumber("0");
      assert.equal("0", core.numArrayToString(res));
    });

    it("1 => 0", () =>{
      const res = utils.getInversionNumber("1");
      assert.equal("0", core.numArrayToString(res));
    });

    it("11 => 0", () =>{
      const res = utils.getInversionNumber("11");
      assert.equal("0", core.numArrayToString(res));
    });

    it("21 => 1", () =>{
      const res = utils.getInversionNumber("21");
      assert.equal("1", core.numArrayToString(res));
    });

    it("54321 => 6", () =>{
      const res = utils.getInversionNumber("54321");
      assert.equal("6", core.numArrayToString(res));
    });
  });

  describe("getReciprocal", () => {
    it("0 => null", () =>{
      const res = utils.getReciprocal("0");
      assert.equal(null, res);
    });

    it("1 => 1", () =>{
      const res = utils.getReciprocal("1");
      assert.equal("1", core.numArrayToString(res));
    });

    it("2 => 0.5", () =>{
      const res = utils.getReciprocal("2");
      assert.equal("0.5", core.numArrayToString(res));
    });

    it("4 => 0.25", () =>{
      const res = utils.getReciprocal("4");
      assert.equal("0.25", core.numArrayToString(res));
    });

    it("5 => 0.2", () =>{
      const res = utils.getReciprocal("5");
      assert.equal("0.2", core.numArrayToString(res));
    });
    
    it("10 => 0.1", () =>{
      const res = utils.getReciprocal("10");
      assert.equal("0.1", core.numArrayToString(res));
    });
  });
  
  describe("getReverse", () => {
    it("0 => 0", () =>{
      const res = utils.getReverse("0");
      assert.equal("0", core.numArrayToString(res));
    });

    it("11 => 11", () =>{
      const res = utils.getReverse("11");
      assert.equal("11", core.numArrayToString(res));
    });
    
    it("12 => 21", () =>{
      const res = utils.getReverse("12");
      assert.equal("21", core.numArrayToString(res));
    });

    it("123 => 321", () =>{
      const res = utils.getReverse("123");
      assert.equal("321", core.numArrayToString(res));
    });

    it("100 => 1", () =>{
      const res = utils.getReverse("100");
      assert.equal("1", core.numArrayToString(res));
    });

    it("101 => 101", () =>{
      const res = utils.getReverse("101");
      assert.equal("101", core.numArrayToString(res));
    });

    it("1234 => 4321", () =>{
      const res = utils.getReverse("1234");
      assert.equal("4321", core.numArrayToString(res));
    });

    it("1.1 => null", () =>{
      const res = utils.getReverse("1.1");
      assert.equal(null, res);
    });

    it("-1 => null", () =>{
      const res = utils.getReverse("-1");
      assert.equal(null, res);
    });

  });

  describe("isFermatNumber", () => {
    it("0 => false", () =>{
      const res = utils.isFermatNumber("0");
      assert.equal(res, false);
    });

    it("1 => false", () =>{
      const res = utils.isFermatNumber("1");
      assert.equal(res, false);
    });

    it("2 => false", () =>{
      const res = utils.isFermatNumber("2");
      assert.equal(res, false);
    });

    it("3 => true", () =>{
      const res = utils.isFermatNumber("3");
      assert.equal(res, true);
    });

    it("4 => false", () =>{
      const res = utils.isFermatNumber("4");
      assert.equal(res, false);
    });

    it("5 => true", () =>{
      const res = utils.isFermatNumber("5");
      assert.equal(res, true);
    });

    it("6 => false", () =>{
      const res = utils.isFermatNumber("6");
      assert.equal(res, false);
    });
  });
  
  describe("isCullenNumber", () => {
    it("0 => false", () =>{
      const res = utils.isCullenNumber("0");
      assert.equal(res, false);
    });

    it("1 => true", () =>{
      const res = utils.isCullenNumber("1");
      assert.equal(res, true);
    });
    it("2 => false", () =>{
      const res = utils.isCullenNumber("2");
      assert.equal(res, false);
    });

    it("3 => true", () =>{
      const res = utils.isCullenNumber("3");
      assert.equal(res, true);
    });

    it("4 => false", () =>{
      const res = utils.isCullenNumber("4");
      assert.equal(res, false);
    });

    it("5 => false", () =>{
      const res = utils.isCullenNumber("5");
      assert.equal(res, false);
    });

    it("6 => false", () =>{
      const res = utils.isCullenNumber("6");
      assert.equal(res, false);
    });

    it("7 => false", () =>{
      const res = utils.isCullenNumber("7");
      assert.equal(res, false);
    });

    it("8 => false", () =>{
      const res = utils.isCullenNumber("8");
      assert.equal(res, false);
    });

    it("9 => true", () =>{
      const res = utils.isCullenNumber("9");
      assert.equal(res, true);
    });
  
    it("10 => false", () =>{
      const res = utils.isCullenNumber("10");
      assert.equal(res, false);
    });

    it("25 => true", () =>{
      const res = utils.isCullenNumber("25");
      assert.equal(res, true);
    });

  });

  describe("isCullenPrime", () => {
    it("0 => false", () =>{
      const res = utils.isCullenPrime("0");
      assert.equal(res, false);
    });

    it("1 => false", () =>{
      const res = utils.isCullenPrime("1");
      assert.equal(res, false);
    });

    it("2 => false", () =>{
      const res = utils.isCullenPrime("2");
      assert.equal(res, false);
    });

    it("3 => true", () =>{
      const res = utils.isCullenPrime("3");
      assert.equal(res, true);
    });

    it("4 => false", () =>{
      const res = utils.isCullenPrime("4");
      assert.equal(res, false);
    });
    
    it("5 => false", () =>{
      const res = utils.isCullenPrime("5");
      assert.equal(res, false);
    });

    it("6 => false", () =>{
      const res = utils.isCullenPrime("6");
      assert.equal(res, false);
    });

  });

  describe("isProthNumber", () => {
    it("0 => false", () => {
      const res = utils.isProthNumber("0");
      assert.equal(res, false);
    });

    it("1 => false", () => {
      const res = utils.isProthNumber("1");
      assert.equal(res, false);
    });

    it("2 => false", () => {
      const res = utils.isProthNumber("2");
      assert.equal(res, false);
    });

    it("3 => true", () => {
      const res = utils.isProthNumber("3");
      assert.equal(res, true);
    });

    it("4 => false", () => {
      const res = utils.isProthNumber("4");
      assert.equal(res, false);
    });

    it("5 => true", () => {
      const res = utils.isProthNumber("5");
      assert.equal(res, true);
    });
    
    it("6 => false", () => {
      const res = utils.isProthNumber("6");
      assert.equal(res, false);
    });

    it("7 => false", () => {
      const res = utils.isProthNumber("7");
      assert.equal(res, false);
    });

    it("8 => false", () => {
      const res = utils.isProthNumber("8");
      assert.equal(res, false);
    });

    it("9 => true", () => {
      const res = utils.isProthNumber("9");
      assert.equal(res, true);
    });

    it("10 => false", () => {
      const res = utils.isProthNumber("10");
      assert.equal(res, false);
    });
    
    it("11 => false", () => {
      const res = utils.isProthNumber("11");
      assert.equal(res, false);
    });

    it("12 => false", () => {
      const res = utils.isProthNumber("12");
      assert.equal(res, false);
    });

    it("13 => true", () => {
      const res = utils.isProthNumber("13");
      assert.equal(res, true);
    });

    it("14 => false", () => {
      const res = utils.isProthNumber("14");
      assert.equal(res, false);
    });

    it("17 => true", () => {
      const res = utils.isProthNumber("17");
      assert.equal(res, true);
    });

    it("25 => true", () => {
      const res = utils.isProthNumber("25");
      assert.equal(res, true);
    });

    it("97 => true", () => {
      const res = utils.isProthNumber("97");
      assert.equal(res, true);
    });

    it("112 => false", () => {
      const res = utils.isProthNumber("112");
      assert.equal(res, false);
    });

    it("113 => true", () => {
      const res = utils.isProthNumber("113");
      assert.equal(res, true);
    });

    it("209 => true", () => {
      const res = utils.isProthNumber("209");
      assert.equal(res, true);
    });

    it("210 => false", () => {
      const res = utils.isProthNumber("210");
      assert.equal(res, false);
    });

    it("211 => false", () => {
      const res = utils.isProthNumber("211");
      assert.equal(res, false);
    });

  });



});


describe("isProthPrime", () => {
  it("0 => false", () => {
    const res = utils.isProthPrime("0");
    assert.equal(res, false);
  });

  it("0.1 => false", () => {
    const res = utils.isProthPrime("0.1");
    assert.equal(res, false);
  });

  it("1 => false", () => {
    const res = utils.isProthPrime("1");
    assert.equal(res, false);
  });

  it("2 => false", () => {
    const res = utils.isProthPrime("2");
    assert.equal(res, false);
  });

  it("3 => true", () => {
    const res = utils.isProthPrime("3");
    assert.equal(res, true);
  });
  
  it("4 => false", () => {
    const res = utils.isProthPrime("4");
    assert.equal(res, false);
  });
  
  it("5 => true", () => {
    const res = utils.isProthPrime("5");
    assert.equal(res, true);
  });
  
  it("6 => false", () => {
    const res = utils.isProthPrime("6");
    assert.equal(res, false);
  });

  it("7 => false", () => {
    const res = utils.isProthPrime("7");
    assert.equal(res, false);
  });

  it("8 => false", () => {
    const res = utils.isProthPrime("8");
    assert.equal(res, false);
  });

  it("9 => false", () => {
    const res = utils.isProthPrime("9");
    assert.equal(res, false);
  });

  it("10 => false", () => {
    const res = utils.isProthPrime("10");
    assert.equal(res, false);
  });

  it("13 => true", () => {
    const res = utils.isProthPrime("13");
    assert.equal(res, true);
  });

  it("97 => true", () => {
    const res = utils.isProthPrime("97");
    assert.equal(res, true);
  });

  it("112 => false", () => {
    const res = utils.isProthPrime("112");
    assert.equal(res, false);
  });

  it("113 => true", () => {
    const res = utils.isProthPrime("113");
    assert.equal(res, true);
  });



});

describe("isPierpontPrime", () => {
  it("0 => false", () => {
    const res = utils.isPierpontPrime("0");
    assert.equal(res, false);
  });

  it("1 => false", () => {
    const res = utils.isPierpontPrime("1");
    assert.equal(res, false);
  });

  it("2 => true", () => {
    const res = utils.isPierpontPrime("2");
    assert.equal(res, true);
  });

  it("3 => true", () => {
    const res = utils.isPierpontPrime("3");
    assert.equal(res, true);
  });

  it("4 => false", () => {
    const res = utils.isPierpontPrime("4");
    assert.equal(res, false);
  });

  it("5 => true", () => {
    const res = utils.isPierpontPrime("5");
    assert.equal(res, true);
  });

  it("6 => false", () => {
    const res = utils.isPierpontPrime("6");
    assert.equal(res, false);
  });

  it("7 => true", () => {
    const res = utils.isPierpontPrime("7");
    assert.equal(res, true);
  });

  it("8 => false", () => {
    const res = utils.isPierpontPrime("8");
    assert.equal(res, false);
  });

  it("9 => false", () => {
    const res = utils.isPierpontPrime("9");
    assert.equal(res, false);
  });

  it("10 => false", () => {
    const res = utils.isPierpontPrime("10");
    assert.equal(res, false);
  });

  it("11 => false", () => {
    const res = utils.isPierpontPrime("11");
    assert.equal(res, false);
  });
  
  it("12 => false", () => {
    const res = utils.isPierpontPrime("12");
    assert.equal(res, false);
  });

  it("13 => true", () => {
    const res = utils.isPierpontPrime("13");
    assert.equal(res, true);
  });

  it("14 => false", () => {
    const res = utils.isPierpontPrime("14");
    assert.equal(res, false);
  });

  it("15 => false", () => {
    const res = utils.isPierpontPrime("15");
    assert.equal(res, false);
  });

  it("16 => false", () => {
    const res = utils.isPierpontPrime("16");
    assert.equal(res, false);
  });

  it("17 => true", () => {
    const res = utils.isPierpontPrime("17");
    assert.equal(res, true);
  });
  
  it("18 => false", () => {
    const res = utils.isPierpontPrime("18");
    assert.equal(res, false);
  });

  it("19 => true", () => {
    const res = utils.isPierpontPrime("19");
    assert.equal(res, true);
  });

  it("20 => false", () => {
    const res = utils.isPierpontPrime("20");
    assert.equal(res, false);
  });

  it("21 => false", () => {
    const res = utils.isPierpontPrime("21");
    assert.equal(res, false);
  });

  it("22 => false", () => {
    const res = utils.isPierpontPrime("22");
    assert.equal(res, false);
  });
  
  it("23 => false", () => {
    const res = utils.isPierpontPrime("23");
    assert.equal(res, false);
  });

  
});






