import core from "./core_new.js";
import utils from "./utils.js";

const map = {
  commonMultiple: {
    ja: "公倍数"
  },
  greatestCommonDivisor: {
    ja: "最大公約数"
  },
  commonDivisors: {
    ja: "公約数"
  },
  makeFibonacciSequence: {
    ja: "フィボナッチ数列"
  },
  makeLucaSequence: {
    ja: "リュカ数列"
  },
  summation: {
    ja: "総和"
  },
  infiniteProduct: {
    ja: "総乗/総積"
  },
  digitSum: {
    ja: "数字和/各桁の総和"
  },
  makeTriangleNumber: {
    ja: "三角数"
  },
  makePronicNumber: {
    ja: "矩形数"
  },
  factorial: {
    ja: "階乗"
  },

};

const whatIs = function({name="", lang="ja"}){
  if(!name){
    return "";
  }

  const target = utils[name]

  const exists = target ? true : false;
  if(!exists){
    return "";
  }

  const res = map[name];
  if(res && res[lang]){
    return res[lang];
  }
  const other_lang = Object.keys(res)[0];
  if(other_lang){
    return res[other_lang];
  }

  return "";

};


export default whatIs;