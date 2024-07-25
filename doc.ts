import core from "./core";
import utils from "./utils";

const map: object = {
  commonMultiple: {
    ja: "公倍数"
  },
  leastCommonMultiple: {
    ja: "最小公倍数"
  },
  greatestCommonDivisor: {
    ja: "最大公約数"
  },
  commonDivisors: {
    ja: "公約数"
  },
  makeFibonacciSequence: {
    ja: "フィボナッチ数列を作成"
  },
  makeLucaSequence: {
    ja: "リュカ数列を作成"
  },
  makeTribonacciSequence: {
    ja: "トリボナッチ数列を作成"
  },
  makeTetranacciSequence: {
    ja: "テトラナッチ数列を作成"
  },
  makePentanacciSequence: {
    ja: "ペンタナッチ数列を作成"
  },
  makeHexanacciSequence: {
    ja: "ヘキサナッチ数列を作成"
  },
  makeHeptanacciSequence: {
    ja: "ヘプタナッチ数列を作成"
  },
  makeOctanacciSequence: {
    ja: "オクタナッチ数列を作成"
  },
  makeNonanacciSequence: {
    ja: "ノナナッチ数列を作成"
  },
  makeDecanacciSequence: {
    ja: "デカナッチ数列を作成"
  },
  makeUndecanacciSequence: {
    ja: "ウンデカナッチ数列を作成"
  },
  makeDodecanacciSequence: {
    ja: "ドデカナッチ数列を作成"
  },
  makeIcosanacciSequence: {
    ja: "イコサナッチ数列を作成"
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
    ja: "三角数の生成"
  },
  makePronicNumber: {
    ja: "矩形数の生成"
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
    ja: "メルセンヌ数かどうか"
  },
  isMersennePrimeNumber: {
    ja: "メルセンヌ素数かどうか"
  },
  isCompositeNumber: {
    ja: "合成数かどうか"
  },
  isHarshadNumber: {
    ja: "ハーシャッド数かどうか"
  },
  isZuckermanNumber: {
    ja: "ズッカーマン数かどうか"
  },
  isRepunitNumber: {
    ja: "レピュニット数かどうか"
  },
  getInversionNumber: {
    ja: "転倒数の取得"
  },
  getReciprocal: {
    ja: "逆数の取得"
  },
  getReverse: {
    ja: "数の逆順の取得"
  },
  getRandomNumberByLinearCongruentialGenerators: {
    ja: "線形合同法での疑似乱数取得"
  },
  getRandomNumberByMiddleSquareMethod: {
    ja: "平方採中法での疑似乱数取得"
  },
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