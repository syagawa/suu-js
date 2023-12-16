import core from "./corets";
import utils from "./utilsts";

const map: object = {
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
  makeTribonacciSequence: {
    ja: "トリボナッチ数列"
  },
  makeTetranacciSequence: {
    ja: "テトラナッチ数列"
  },
  makePentanacciSequence: {
    ja: "ペンタナッチ数列"
  },
  makeHexanacciSequence: {
    ja: "ヘキサナッチ数列"
  },
  makeHeptanacciSequence: {
    ja: "ヘプタナッチ数列"
  },
  makeOctanacciSequence: {
    ja: "オクタナッチ数列"
  },
  makeNonanacciSequence: {
    ja: "ノナナッチ数列"
  },
  makeDecanacciSequence: {
    ja: "デカナッチ数列"
  },
  makeUndecanacciSequence: {
    ja: "ウンデカナッチ数列"
  },
  makeDodecanacciSequence: {
    ja: "ドデカナッチ数列"
  },
  makeIcosanacciSequence: {
    ja: "イコサナッチ数列"
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
  modulo: {
    ja: "剰余演算"
  },
  exponentiate: {
    ja: "冪（べき）乗"
  },
  isMersenneNumber: {
    ja: "メルセンヌ数"
  },
  isCompositeNumber: {
    ja: "合成数"
  }
};

const whatIs = function({name="", lang="ja"}: { name: string, lang: string}): string{
  if(!name){
    return "";
  }

  let target = utils[name];
  if(!target){
    target = core[name];
  }

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