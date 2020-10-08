const assert = require('assert');
const app = require("../app.js");
const s = app.s;
const K = app.K;
const core = app.core2;

describe("core", function(){
  describe("isNumber", function(){
    it("0", () => {
      const zero = 0;
      const res = core.isNumber(zero);
      assert.equal(res, true);
    });
    it("-100.5786", () => {
      const n = -100.5786;
      const res = core.isNumber(n);
      assert.equal(res, true);
    });
    it("NaN", () => {
      const n = NaN;
      const res = core.isNumber(n);
      assert.equal(res, false);
    });
    it("String", () => {
      const n = "9";
      const res = core.isNumber(n);
      assert.equal(res, false);
    });
  });
  describe("numToArrayWithDecimal", function(){
    it("0", () => {
      const zero = 0;
      const res = core.numToArrayWithDecimal(zero);
      assert.equal(res.array.length, 1);
      assert.equal(res.array[0], 0);
      assert.equal(res.decimal_index, 1);
      assert.equal(res.negative, false);
    });
    it("0.000000000000000000001", () => {
      const str = "0.000000000000000000001";
      const res = core.numToArrayWithDecimal(str);
      assert.equal(res.array.length, 22);
      assert.equal(res.array[0], 0);
      assert.equal(res.decimal_index, 1);
      assert.equal(res.negative, false);
    });
    it("1234567890.00000000000000000000", () => {
      const str = "1234567890.00000000000000000000";
      const res = core.numToArrayWithDecimal(str);
      assert.equal(res.array.length, 10);
      assert.equal(res.array[0], 1);
      assert.equal(res.decimal_index, 10);
      assert.equal(res.negative, false);
    });
    it("-1234567890.00000000000000000001", () => {
      const str = "-1234567890.00000000000000000001";
      const res = core.numToArrayWithDecimal(str);
      assert.equal(res.array.length, 30);
      assert.equal(res.array[0], 1);
      assert.equal(res.decimal_index, 10);
      assert.equal(res.negative, true);
    });
  });
  describe("compare", function(){
    it("1, 2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num2);
      assert.equal(res.small, num1);
      assert.equal(res.equal, false);
    });
    it("2, 1", () => {
      const num1 = core.numToArrayWithDecimal("2");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });
    it("1, 1", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, null);
      assert.equal(res.small, null);
      assert.equal(res.equal, true);
    });
    it("0, 0", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.compare(num1, num2);
      assert.equal(res.large, null);
      assert.equal(res.small, null);
      assert.equal(res.equal, true);
    });
    it("-1, -1", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("-1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, null);
      assert.equal(res.small, null);
      assert.equal(res.equal, true);
    });

    it("-1, -2", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });
    it("1, -2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });

    it("1, 0.1", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });

    it("0, 0.1", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num2);
      assert.equal(res.small, num1);
      assert.equal(res.equal, false);
    });
    it("0, -0.1", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("-0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });
    it("-0.1, -0.1", () => {
      const num1 = core.numToArrayWithDecimal("-0.1");
      const num2 = core.numToArrayWithDecimal("-0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, null);
      assert.equal(res.small, null);
      assert.equal(res.equal, true);
    });
    it("0.1, -0.1", () => {
      const num1 = core.numToArrayWithDecimal("0.1");
      const num2 = core.numToArrayWithDecimal("-0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });

    it("0.000001, 0.1", () => {
      const num1 = core.numToArrayWithDecimal("0.000001");
      const num2 = core.numToArrayWithDecimal("0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num2);
      assert.equal(res.small, num1);
      assert.equal(res.equal, false);
    });
    it("0.000001, -0.1", () => {
      const num1 = core.numToArrayWithDecimal("0.000001");
      const num2 = core.numToArrayWithDecimal("-0.1");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num1);
      assert.equal(res.small, num2);
      assert.equal(res.equal, false);
    });
    it("1000, 1001", () => {
      const num1 = core.numToArrayWithDecimal("1000");
      const num2 = core.numToArrayWithDecimal("1001");
      const res = core.compare(num1, num2);
      assert.equal(res.large, num2);
      assert.equal(res.small, num1);
      assert.equal(res.equal, false);
    });
  });

  describe("getLarge", function(){
    it("1, 2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.getLarge(num1, num2);
      assert.equal(res, num2);
    });
  });

  describe("getLarge", function(){
    it("1, -2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.getLarge(num1, num2);
      assert.equal(res, num1);
    });
  });

  describe("getLarge", function(){
    it("-1, -2", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.getLarge(num1, num2);
      assert.equal(res, num1);
    });
  });
  describe("getSmall", function(){
    it("1, 2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.getSmall(num1, num2);
      assert.equal(res, num1);
    });
  });

  describe("getSmall", function(){
    it("1, -2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.getSmall(num1, num2);
      assert.equal(res, num2);
    });
  });

  describe("getSmall", function(){
    it("-1, -2", () => {
      const num1 = core.numToArrayWithDecimal("-1");
      const num2 = core.numToArrayWithDecimal("-2");
      const res = core.getSmall(num1, num2);
      assert.equal(res, num2);
    });
  });

  describe("isEqual", function(){
    it("1, 2", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("2");
      const res = core.isEqual(num1, num2);
      assert.equal(res, false);
    });
  });
  describe("isEqual", function(){
    it("1, 1", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("1");
      const res = core.isEqual(num1, num2);
      assert.equal(res, true);
    });
  });
  describe("isEqual", function(){
    it("1, 1.00000000", () => {
      const num1 = core.numToArrayWithDecimal("1");
      const num2 = core.numToArrayWithDecimal("1.00000000");
      const res = core.isEqual(num1, num2);
      assert.equal(res, true);
    });
  });
  describe("isEqual", function(){
    it("0, 0", () => {
      const num1 = core.numToArrayWithDecimal("0");
      const num2 = core.numToArrayWithDecimal("0");
      const res = core.isEqual(num1, num2);
      assert.equal(res, true);
    });
  });

  describe("add", function(){
    it("0 + 0 = 0", () => {
      const res = core.add("0", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });

    it("1 + 0 = 1", () => {
      const res = core.add("1", "0");
      const str = core.numArrayToString(res);
      assert.equal(str, "1");
    });
    
    it("1 + 1 = 2", () => {
      const res = core.add("1", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "2");
    });
    it("1 + 9 = 10", () => {
      const res = core.add("1", "9");
      const str = core.numArrayToString(res);
      assert.equal(str, "10");
    });
    it("1 + 100 = 101", () => {
      const res = core.add("1", "100");
      const str = core.numArrayToString(res);
      assert.equal(str, "101");
    });
    it("99.55 + 0.45 = 101", () => {
      const res = core.add("99.55", "0.45");
      const str = core.numArrayToString(res);
      assert.equal(str, "100");
    });

    it("1 + 0.45 = 1.45", () => {
      const res = core.add("1", "0.45");
      const str = core.numArrayToString(res);
      assert.equal(str, "1.45");
    });
    
    it("1 + -1 = 0", () => {
      const res = core.add("1", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });
    
    it("-1 + -1 = 0", () => {
      const res = core.add("-1", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-2");
    });
    
    it("0 + -1 = -1", () => {
      const res = core.add("0", "-1");
      const str = core.numArrayToString(res);
      assert.equal(str, "-1");
    });
    
    it("1 + -2 = -1", () => {
      const res = core.add("1", "-2");
      const str = core.numArrayToString(res);
      assert.equal(str, "-1");
    });

    it("-1 + -2 = -3", () => {
      const res = core.add("-1", "-2");
      const str = core.numArrayToString(res);
      assert.equal(str, "-3");
    });
    
    it("-1 + 2 = 1", () => {
      const res = core.add("-1", "2");
      const str = core.numArrayToString(res);
      assert.equal(str, "1");
    });
    
    it("-1.45 + 2 = 0.55", () => {
      const res = core.add("-1.45", "2");
      const str = core.numArrayToString(res);
      assert.equal(str, "0.55");
    });
    
    it("-1.45 + -2 = 3.45", () => {
      const res = core.add("-1.45", "-2");
      const str = core.numArrayToString(res);
      assert.equal(str, "-3.45");
    });

    it("2 - 1 = 1", () => {
      const res = core.subtract("2", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "1");
    });
    
    it("1 - 1 = 0", () => {
      const res = core.subtract("1", "1");
      const str = core.numArrayToString(res);
      assert.equal(str, "0");
    });

  });

});




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

    it("1000000000000000000000 by string", () =>{
      const res = s.makeSu(1000000000000000000000);
      assert.equal(res, "Not a number");
    });

    it("1000000000000000000000 by string", () =>{
      const res = s.makeSu("1000000000000000000000");
      assert.equal(res.getString(), "1000000000000000000000");
    });

    it("-100.55533 by string", () =>{
      const one = s.makeSu("-100.55533");
      assert.equal(one.getString(), "-100.55533");
    });
    it("-100.55533 by number", () =>{
      const one = s.makeSu(-100.55533);
      assert.equal(one.getString(), "-100.55533");
    });
    it("empty => 0", () =>{
      const res = s.makeSu("");
      assert.equal(res.isZero(), true);
    });

    it("NaN => 0", () =>{
      const res = s.makeSu(NaN);
      assert.equal(res, "Not a number");
    });

    it("string => 0", () =>{
      const res = s.makeSu("aaaaaaaaaaaaaaa");
      assert.equal(res, "Not a number");
    });
  });

  describe('Su methods', function() {
    it("isSu", () =>{
      const su = s.makeSu("1");
      const res = s.isSu(su);
      assert.equal(res, true);
    });

    it("copySu", () =>{
      const a = s.makeSu("1");
      const b = s.copySu(a);
      assert.equal(b.getString(), a.getString());
    });

    it("Su.getString", function(){
      const str = "1";
      const su = s.makeSu(str);
      const res = su.getString();
      assert.equal(res, str);
    });

    it("Su.getNumber", function(){
      const num = 1;
      const su = s.makeSu(num);
      const res = su.getNumber();
      assert.equal(res, 1);
    });

    it("Su.getInteger", function(){
      const num = 1;
      const su = s.makeSu(num);
      const res = su.getInteger();
      assert.equal(res, [1]);
    });

    it("Su.getDecimal", function(){
      const num = 1;
      const su = s.makeSu(num);
      const res = su.getDecimal();
      assert.equal(res, [0]);
    });

    it("Su.clone & Su.isEqual", function(){
      const num = 1;
      const su = s.makeSu(num);
      const res = su.clone();
      assert.equal(res.isEqual(su), true);
    });

    it("Su.isZero", function(){
      const num = 0;
      const su = s.makeSu(num);
      assert.equal(su.isZero(), true);
    });

    it("Su.isOne", function(){
      const num = 1;
      const su = s.makeSu(num);
      assert.equal(su.isOne(), true);
    });
    
    it("Su.isLarge", function(){
      const a = s.makeSu(1);
      const b = s.makeSu(2);
      assert.equal(b.isLarge(a), true);
    });

    it("Su.isSmall", function(){
      const a = s.makeSu(2);
      const b = s.makeSu(1);
      assert.equal(b.isSmall(a), true);
    });

    it("Su.isNaturalNumber", function(){
      const su = s.makeSu(1);
      assert.equal(su.isNaturalNumber(), true);
    });

    it("Su.isNegative", function(){
      const su = s.makeSu("-1");
      assert.equal(su.isNegative(), true);
    });
    
    it("Su.isPositive", function(){
      const su = s.makeSu("1");
      assert.equal(su.isPositive(), true);
    });

    it("Su.containDecimal", function(){
      const su = s.makeSu("1.1");
      assert.equal(su.containDecimal(), true);
    });
    
    it("Su.prev", function(){
      const a = s.makeSu("1");
      const b = a.prev();
      assert.equal(b.getString(), "0");
    });
    
    it("Su.next", function(){
      const a = s.makeSu("1");
      const b = a.next();
      assert.equal(b.getString(), "2");
    });

    it("Su.isEvenNumber", function(){
      const one = s.makeSu("1");
      const two = s.makeSu("2");
      assert.equal(one.isEvenNumber(), false);
      assert.equal(two.isEvenNumber(), true);
    });

    it("Su.isOddNumber", function(){
      const one = s.makeSu("1");
      const two = s.makeSu("2");
      assert.equal(one.isOddNumber(), true);
      assert.equal(two.isOddNumber(), false);
    });

    it("Su.getDivisors", function(){
      const ten = s.makeSu("10");
      const res = ten.getDivisors();
      assert.equal(res[0].getString(), "1");
      assert.equal(res[1].getString(), "2");
      assert.equal(res[2].getString(), "5");
      assert.equal(res[3].getString(), "10");
    });
    
    it("Su.getCommonDivisors", function(){
      const a = s.makeSu("12");
      const b = s.makeSu("6");
      const res = a.getCommonDivisors(b);
      assert.equal(res[0].getString(), "1");
      assert.equal(res[1].getString(), "2");
      assert.equal(res[2].getString(), "3");
      assert.equal(res[3].getString(), "6");
    });
    
    it("Su.getMaxCommonDivisor", function(){
      const a = s.makeSu("9");
      const b = s.makeSu("6");
      const res = a.getMaxCommonDivisor(b);
      assert.equal(res.getString(), "3");
    });

    it("Su.multiple", function(){
      const su = s.makeSu("1");
      const res = su.multiple();
      assert.equal(res.length, 10000);
    });

   it("Su.getLeastCommonMultiple", function(){
      const a = s.makeSu("2");
      const b = s.makeSu("3");
      const res = a.getLeastCommonMultiple(b);
      assert.equal(res.getString(), "6");
    });

    it("Su.isFibonacciNumber", function(){
       const su = s.makeSu("2");
       const res = su.isFibonacciNumber();
       assert.equal(res, true);
    });

    it("Su.isLucasNumber", function(){
      const su = s.makeSu("2");
      const res = su.isLucasNumber();
      assert.equal(res, true);
    });
    
    it("Su.summation", function(){
      const one = s.makeSu("1");
      const two = s.makeSu("2");
      const three = s.makeSu("3");
      const res = one.summation(two, three);
      assert.equal(res.getString(), "6");
    });

    it("Su.infiniteProduct", function(){
      const one = s.makeSu("1");
      const two = s.makeSu("2");
      const three = s.makeSu("3");
      const four = s.makeSu("4");
      const res = one.infiniteProduct(two, three, four);
      assert.equal(res.getString(), "24");
    });

    it("Su.digitsum", function(){
      const su = s.makeSu("123");
      const res = su.digitsum();
      assert.equal(res.getString(), "6");
    });


    it("Su.square", function(){
      const su = s.makeSu("5");
      const res = su.square();
      assert.equal(res.getString(), "25");
    });

    it("Su.cube", function(){
      const su = s.makeSu("5");
      const res = su.cube();
      assert.equal(res.getString(), "125");
    });

    it("Su.exponentiate", function(){
      const su = s.makeSu("5");
      const res = su.exponentiate(su);
      assert.equal(res.getString(), "3125");
    });

    it("Su.isPrimeNumber", function(){
      const su = s.makeSu("23");
      const res = su.isPrimeNumber();
      assert.equal(res, true);
    });
    
    it("Su.divisorsSummation", function(){
      const su = s.makeSu("12");
      const res = su.divisorsSummation();
      assert.equal(res.getString(), "28");
    });

    it("Su.isAbundantNumber", function(){
      const su = s.makeSu("20");
      const res = su.isAbundantNumber();
      assert.equal(res, true);
    });
    
    it("Su.isDeficientNumber", function(){
      const su = s.makeSu("10");
      const res = su.isDeficientNumber();
      assert.equal(res, true);
    });
    
    it("Su.isPerfectNumber", function(){
      const su = s.makeSu("496");
      const res = su.isPerfectNumber();
      assert.equal(res, true);
    });

    it("Su.factorial", function(){
      const su = s.makeSu("6");
      const res = su.factorial();
      assert.equal(res.getString(), "720");
    });

    it("Su.isTriangleNumber", function(){
      const su = s.makeSu("6");
      const res = su.isTriangleNumber();
      assert.equal(res, true);
    });

    it("Su.isSquareNumber", function(){
      const su = s.makeSu("16");
      const res = su.isSquareNumber();
      assert.equal(res, true);
    });

    it("Su.isMersenneNumber", function(){
      const su = s.makeSu("15");
      const res = su.isMersenneNumber();
      assert.equal(res, true);
    });
    
    it("Su.isMersennePrimeNumber", function(){
      const su = s.makeSu("7");
      const res = su.isMersennePrimeNumber();
      assert.equal(res, true);
    });

  });


  describe("add", function() {
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

  describe('K methods', function() {
    it("K.random", () => {
      const ran = K.random();
      const one = s.makeSu(1);
      assert.equal(ran.isSmall(one), true);
    });

    it("K.randomElement", () => {
      const elm = K.randomElement([1,2,3]);
      const res = elm === 1 || elm === 2 || elm === 3 ? true : false;
      assert.equal(res, true);
    });

    it("K.randomInt", () => {
      const min = s.makeSu(1);
      const max = s.makeSu(2);
      const ran = K.randomInt(min, max);
      const res = ran.getString() === "1" || ran.getString() === "2" ? true : false;
      assert.equal(res, true);
    });
    
    it("K.makePrimeNumbers", () => {
      const res = K.makePrimeNumbers(10);
      const two = res[0];
      assert.equal(two.getString(), "2");
    });


  });

  describe("core", function(){
    // it("core.add", () => {
    //   const a = 505;
    //   const b = 47864;
    //   const res = core.add(a, b).int.join("");
    //   assert.equal(res, "48369");
    // });
  });



});
