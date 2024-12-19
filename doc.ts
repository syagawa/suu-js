import core from "./core";
import utils from "./utils";

const map: object = {
  add: {
    ja: "加算"
  },
  subtract: {
    ja: "減算"
  },
  multiplication: {
    ja: "乗算"
  },
  multiple: {
    ja: "乗算"
  },
  division: {
    ja: "除算"
  },
  divide: {
    ja: "除算"
  },
  floor: {
    ja: "切り捨て"
  },
  ceil: {
    ja: "切り上げ"
  },
  clone: {
    ja: "クローン/コピー"
  },
  copy: {
    ja: "クローン/コピー"
  },
  getLarge: {
    ja: "2つの引数のうち大きい方を取得"
  },
  getSmall: {
    ja: "2つの引数のうち小さい方を取得"
  },
  isLarge: {
    ja: "第一引数が第二引数より大きいか"
  },
  isSmall: {
    ja: "第一引数が第二引数より小さいか"
  },
  isEqual: {
    ja: "第一引数と第二引数が等しいか"
  },
  getZero: {
    ja: "0を取得"
  },
  getOne: {
    ja: "1を取得"
  },
  isZero: {
    ja: "0かどうか"
  },
  isOne: {
    ja: "1かどうか"
  },
  square: {
    ja: "平方数"
  },
  getAbsolute:{
    ja: "絶対値の取得"
  },
  exponentiate: {
    ja: "べき乗",
  },
  getInteger: {
    ja: "整数部を取得",
  },
  getDecimal: {
    ja: "小数部を取得",
  },
  isNaturalNumber: {
    ja: "自然数かどうか",
  },
  includeDecimal: {
    ja: "小数部を含むかどうか"
  },
  isNegative: {
    ja: "負数かどうか"
  },
  isPositive: {
    ja: "正数かどうか"
  },
  negate: {
    ja: "正数の場合負数にする"
  },
  makePositive: {
    ja: "負数の場合正数にする"
  },
  getNext: {
    ja: "整数1を追加した数を取得"
  },
  getPrev: {
    ja: "整数1を引いた数を取得"
  },
  isInteger: {
    ja: "整数かどうか"
  },
  isEvenNumber: {
    ja: "偶数かどうか"
  },
  isOddNumber: {
    ja: "奇数かどうか"
  },
  getDivisors: {
    ja: "約数の取得"
  },
  commonDivisors: {
    ja: "引数1と引数2の公約数の取得"
  },
  greatestCommonDivisor: {
    ja: "引数1と引数2の最大公約数の取得"
  },
  commonMultiple: {
   ja: "引数1と引数2の公倍数の取得"
  },
  leastCommonMultiple: {
    ja: "引数1と引数2の最小公倍数の取得"
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
  isMersenneNumber: {
    ja: "メルセンヌ数かどうか"
  },
  makeMersenneNumbers: {
    ja: "メルセンヌ数の生成"
  },
  isPrimeNumber: {
    ja: "素数かどうか"
  },
  makePrimeNumbers: {
    ja: "素数の生成"
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
  getRandomNumberByLinearFeedbackShiftRegister: {
    ja: "線形帰還シフトレジスタによる疑似乱数取得"
  },
  isSophieGermainPrime: {
    ja: "ソフィージェルマン素数かどうか"
  },
  isSafePrime: {
    ja: "安全素数かどうか"
  },
  getFermatNumber: {
    ja: "フェルマー数の取得"
  },
  isFermatNumber: {
    ja: "フェルマー数かどうか"
  },
  isFermatPrime: {
    ja: "フェルマー素数かどうか"
  },
  getCullenNumber: {
    ja: "カレン数の取得"
  },
  isCullenNumber: {
    ja: "カレン数かどうか"
  },
  isCullenPrime: {
    ja: "カレン素数かどうか"
  },
  getProthNumber: {
    ja: "プロス数の取得"
  },
  isProthNumber: {
    ja: "プロス数かどうか"
  },
  isProthPrime: {
    ja: "プロス素数かどうか"
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