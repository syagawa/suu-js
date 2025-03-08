import core from "./core";

import { SuuNumber } from "./interfaces";

const utils:any = {};

utils.ts = () => {return "ts"};

utils.getNumber = function(n): SuuNumber{
  return core.numToArrayWithDecimal(n);
};

utils.copy = function(n): SuuNumber{
  const c = core.clone(n);
  if(!c){
    const s = core.numArrayToString(n);
    return core.numToArrayWithDecimal(s);
  }
  return c;
};

utils.getLarge = function(a, b): SuuNumber{
  return core.getLarge(a, b);
};

utils.getSmall = function(a, b): SuuNumber{
  return core.getSmall(a, b);
};

utils.isSmall = function(a, b): boolean{
  return core.isSmall(a, b);
}
utils.isLarge = function(a, b): boolean{
  return core.isLarge(a, b);
}

utils.isEqual = function(a, b): boolean{
  return core.isEqual(a, b);
}

utils.getZero = function(): SuuNumber{
  return core.getZero();
};

utils.getOne = function(): SuuNumber{
  return core.getOne();
};

utils.isZero = function(n): boolean{
  return core.isZero(n);
}
utils.isOne = function(n): boolean{
  return core.isOne(n);
}

utils.square = function(n): SuuNumber{
  return core.multiplication(n, n);
};

utils.getAbsolute = function(n): SuuNumber | Error{
  const num: any = utils.getNumber(n);
  if(num instanceof Error){
    return num;
  }
  let clone = core.clone(num);
  if(clone.negative){
    clone = utils.makePositive(clone);
  }
  return clone;
};

utils.exponentiate = function(base, exponent): SuuNumber{
  const b = utils.getNumber(base);
  const exp = utils.getNumber(exponent);

  if(utils.includeDecimal(exp)){
    return core.makeError({message: "Not supported if exponent is decimal", parameter: [exponent]});
  }

  if(!utils.isInteger(exp)){
    return core.makeError({message: "Exponent must be integer", parameter: [exponent]});
  }
  
  if(utils.isZero(exp)){
    return core.getOne();
  }
  if(utils.isOne(exp)){
    return b;
  }

  let multi = true;
  if(core.isSmall(exp, core.getZero())){
    multi = false;
  }

  let count = core.getOne();
  const exp_abs = utils.getAbsolute(exp);
  const getBool = (count) => {
    return core.isSmall(count, exp_abs);
  }
  let res = b;
  let bool = getBool(count);
  while(bool){
    if(multi){
      res = core.multiple(res, b);
    }else{
      res = core.divide(res, b);
    }
    count = core.add(count, "1");
    bool = getBool(count);
  }
  return res;
};

utils.getInteger = function(n): SuuNumber{
  let str = "";
  for(let i = 0; i < n.decimal_index; i++){
    const s = String(n.array[i]);
    str = str + s;
  }
  const num = utils.getNumber(str);
  return num;
};

utils.getDecimal = function(n): SuuNumber{
  return core.getDecimal(n);
};

utils.isNaturalNumber = function(n): boolean{
  const decimal = utils.getDecimal(n);
  const is_zero = utils.isZero(decimal);
  if(is_zero && !n.negative){
    return true;
  }
  return false;
};

utils.includeDecimal = function(n): boolean{
  const decimal = utils.getDecimal(n);
  const is_zero = utils.isZero(decimal);
  if(is_zero){
    return false;
  }
  return true;
};

utils.isNegative = function(n): boolean{
  if(utils.isZero(n)){
    return false;
  }
  const n_ = core.numToArrayWithDecimal(n);
  return n_.negative;
};

utils.isPositive = function(n): boolean{
  if(utils.isZero(n)){
    return false;
  }
  const n_ = core.numToArrayWithDecimal(n);
  return !n_.negative;
};

utils.negate = function(n): SuuNumber{
  const num = core.numToArrayWithDecimal(n);
  if(num){
    num.negative = true;
  }
  return num;
};

utils.makePositive = function(n): SuuNumber{
  const num = core.numToArrayWithDecimal(n);
  if(num){
    num.negative = false;
  }
  return num;
};


utils.getNext = function(n): SuuNumber{
  return core.add(n, "1");
};

utils.getPrev = function(n): SuuNumber{
  return core.subtract(n, "1");
};

utils.isInteger = function(n): boolean{
  if(utils.isZero(n)){
    return true;
  }

  const decimal = utils.getDecimal(n);
  if(utils.isEqual(decimal, "0")){
    return true;
  }
  return false;

};


utils.isEvenNumber = function(n): boolean{
  if(utils.isZero(n)){
    return true;
  }

  if(!utils.isInteger(n)){
    return false;
  }

  const res = core.modulo(n, "2");

  const is_zero = utils.isZero(res);
  if(is_zero){
    return true;
  }
  return false;
};

utils.isOddNumber = function(n): boolean{
  if(utils.isZero(n)){
    return false;
  }

  if(!utils.isInteger(n)){
    return false;
  }

  const res = core.modulo(n, "2");

  const is_zero = utils.isZero(res);
  if(!is_zero){
    return true;
  }
  return false;
};


utils.getDivisors = function(n): SuuNumber[] | Error{
  if(!n && n !== 0){
    return core.makeError({message: "Parameter must be integer", parameter: [n]});
  }
  const arr: SuuNumber[] = [];
  const num: SuuNumber = utils.getNumber(n);

  if(!num){
    return arr;
  }
  if(core.isZero(num)){
    return arr;
  }
  if(utils.isNaturalNumber(num)){
    if(core.isOne(num)){
      arr.push(num)
    }else{
      for(let i = core.getOne(); core.isEqual(num, i) || core.isLarge(num, i); i = core.add(i, "1")){
        const res= core.division(num, i);
        if(!utils.isNaturalNumber(res)){
          continue;
        }
        const remainder = res.remainder;
        if(core.isZero(remainder)){
          arr.push(utils.getNumber(i));
        }
      }
    }
  }
  return arr;
};

utils.commonDivisors = function(a, b): SuuNumber[] | Error{
  const arr: SuuNumber[] = [];
  if(!a && a !== 0){
    return arr;
  }
  if(!b && b !== 0){
    return arr;
  }

  try{
    const a_: SuuNumber = utils.getNumber(a);
    const b_: SuuNumber = utils.getNumber(b);
    
    const a_divisors: SuuNumber[] = utils.getDivisors(a_);
    if(core.isEqual(a_, b_)){
      return a_divisors;
    }
    const b_divisors: SuuNumber[] = utils.getDivisors(b_);
    for(let i = 0; i < a_divisors.length; i++){
      const a_n: SuuNumber = a_divisors[i];
      for(let j = 0; j < b_divisors.length; j++){
        const b_n: SuuNumber = b_divisors[j];
        if(core.isEqual(a_n, b_n)){
          arr.push(a_n);
        }
      }
    }
    return arr;
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: [a, b]})
    }else{
      return core.makeError({message: "unknown error", paramater: [a, b]});
    }
  }
};

utils.greatestCommonDivisor = function(a, b): SuuNumber | Error{
  try{
    const arr = utils.commonDivisors(a, b);
    return arr[arr.length - 1];
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: [a, b]})
    }else{
      return core.makeError({message: "unknown error", paramater: [a, b]});
    }
  }
};

utils.commonMultiple = function(a, b, limit): SuuNumber[] | Error{

  const limit_length = limit ? limit : 10;
  const arr: SuuNumber[] = [];
  if(!a && a !== 0){
    return arr;
  }
  if(!b && b !== 0){
    return arr;
  }

  try{
    const a_ = utils.getNumber(a);
    const b_ = utils.getNumber(b);

    if(core.isEqual(a_, b_)){
      arr.push(a_);
      return arr;
    }

    const a_arr: SuuNumber[] = [];
    const b_arr: SuuNumber[] = [];
    for(let i = 1; i <= limit_length; i++){
      const a_num = core.multiple(a_, i);
      a_arr.push(a_num);
    }
    for(let j = 1; j <= limit_length; j++){
      const b_num = core.multiple(b_, j);
      b_arr.push(b_num);
    }

    a_arr.forEach(a_n => {
      const tgt = b_arr.find(b_n => core.isEqual(a_n, b_n));
      if(tgt){
        arr.push(tgt);
      }
    });

    return arr;
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: [a, b, limit]})
    }else{
      return core.makeError({message: "unknown error", paramater: [a, b, limit]});
    }
  }
};

utils.leastCommonMultiple = function(a, b, limit): SuuNumber {
  const arr: SuuNumber[] = utils.commonMultiple(a, b, limit);
  return arr[0];
};


const fibonacciReccurenceRelation = function({array, limit}): SuuNumber[] | Error {

  const max = limit ? limit : 100;

  const items_length = array.length;

  const func = function(array){
    if(array.length >= max){
      return array;
    }
    try{
      let res = utils.getNumber("0");
      for(let i = 0; i < items_length; i++){
        const index = array.length - (items_length - i);
        const num = array[index];
        res = core.add(res, num);
      }
      array.push(res);
      return func(array);
    }catch(err: unknown){
      if(err instanceof Error){
        return core.makeError({message: err.message, parameter: [array, limit]})
      }else{
        return core.makeError({message: "unknown error", paramater: [array, limit]});
      }
    }
  };
  return func(array);
};

const makeFibonacciInitialArray = function({ first="0", last="1", length=2 }): SuuNumber[] | Error {
  const len = length;
  const a = utils.getNumber(first);
  const b = utils.getNumber(last);
  const arr: SuuNumber[] = [];
  try{
    for(let i = 0; i < len; i++){
      let tgt = a;
      if(i === (len -1)){
        tgt = b;
      }
      arr.push(tgt);
    }
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: [first, last, length]})
    }else{
      return core.makeError({message: "unknown error", paramater: [first, last, length]});
    }
  }
  return arr;
};

utils.makeFibonacciSequence = function(first="0", last="1"): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first, last, length: 2});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeTribonacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 3});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeTetranacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 4});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makePentanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 5});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeHexanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 6});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeHeptanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 7});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeOctanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 8});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeNonanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 9});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeDecanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 10});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeUndecanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 11});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeDodecanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 12});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeIcosanacciSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 20});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeLucaSequence = function(): SuuNumber[] | Error {
  const arr = makeFibonacciInitialArray({first: "2", last: "1", length: 2});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.summation = function(array): SuuNumber | Error {
  if(!array || !Array.isArray(array)){
    return core.makeError({message: "Parameter must be Array.", parameter: [array]});
  }
  if(array.length === 0){
    return core.makeError({message: "array length is zero", parameter: [array]});
  }
  let sum = core.getZero();
  if(Array.isArray(array)){
    try{
      for(let i = 0; i < array.length; i++){
        sum = core.add(sum, array[i]);
      }
    }catch(err: unknown){
      if(err instanceof Error){
        return core.makeError({message: err.message, parameter: [array]})
      }else{
        return core.makeError({message: "unknown error", paramater: [array]});
      }
    }
  }
  return sum;
};

utils.infiniteProduct = function(array): SuuNumber | Error{
  if(!array || !Array.isArray(array)){
    return core.makeError({message: "Parameter must be Array.", parameter: [array]});
  }
  if(array.length === 1){
    return utils.getNumber(array[0]);
  }
  let res = array[0];
  try{
    for(let i = 1; i < array.length; i++){
      res = core.multiple(res, array[i]);
    }
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: [array]})
    }else{
      return core.makeError({message: "unknown error", paramater: [array]});
    }
  }
  return res;
};

utils.digitSum = function(num): SuuNumber | Error {
  const n = utils.getNumber(num);
  if(!n || !Array.isArray(n.array)){
    return core.makeError({message: "Parameter must be a positive integer.", parameter: [num]});
  }
  let res = core.getZero();
  if(core.isZero(n)){
    return res;
  }
  try{
    res = utils.summation(n.array)
    return res;
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: [num]})
    }else{
      return core.makeError({message: "unknown error", paramater: [num]});
    }
  }
};

utils.makeTriangleNumber = function(num): SuuNumber | Error{
  const n = utils.getNumber(num);
  if(core.isZero(n) || utils.isNegative(n) || !utils.isInteger(n)){
    return core.makeError({message: "Parameter must be a positive integer.", parameter: [num]});
  }
  
  const res1 = core.multiple(n, core.add(n, "1"));
  const res2 = core.divide(res1, "2");
  return res2;
};

utils.makePronicNumber = function(num): SuuNumber | Error {
  const n = utils.getNumber(num);
  if(core.isZero(n)){
    return core.getZero();
  }
  if(utils.isNegative(n) || !utils.isInteger(n)){
    return core.makeError({message: "Parameter must be a positive integer.", parameter: [num]});
  }
  try{
    const  res = core.multiple(n, core.add(n, "1"));
    return res;
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: [num]})
    }else{
      return core.makeError({message: "unknown error", paramater: [num]});
    }
  }
};

utils.factorial = function(num){
  const n = utils.getNumber(num);
  if(core.isZero(n) || core.isOne(n)){
    return core.getOne();
  }

  if(utils.isNegative(n) || !utils.isInteger(n)){
    return core.makeError({message: "Parameter must be a positive integer.", parameter: [num]});
  }

  let go = true;
  let temp = n;
  let current = n;
  const arr = [temp];
  try{
    while(go){
      const target = core.subtract(current, "1");
      arr.push(target);
      current = target;
      if(core.isSmall(current, "2")){
        go = false;
        break;
      }
    }

    return utils.infiniteProduct(arr);
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: [num]})
    }else{
      return core.makeError({message: "unknown error", paramater: [num]});
    }
  }
};


utils.isMersenneNumber = function(num){

  const num1 = utils.getNumber(num);

  if(!utils.isInteger(num1)){
    return false;
  }
  if(utils.isZero(num1)){
    return false;
  }
  if(utils.isNegative(num1)){
    return false;
  }
  if(utils.isEvenNumber(num1)){
    return false;
  }
  if(utils.isEqual(num1, "1")){
    return true;
  }

  const num2 = core.add(num1, "1");

  let result = false;
  let n = num2;
  while(true){
    n = core.division(n, "2");
    if(!utils.isInteger(n)){
      break;
    }
    if(utils.isEqual(n, "1")){
      result = true;
      break;
    }
    if(utils.isEqual(n, "2")){
      result = true;
      break;
    }
    if(utils.isOddNumber(n)){
      break;
    }
  }

  return result;

};

utils.makeMersenneNumbers = function(max){

  const max_ = utils.getNumber(25);

  if(!max || core.isLarge(max, max_)){
    max = max_;
  }

  max = core.add(max, utils.getNumber("1"));
  const two = utils.getNumber(2);
  const arr:SuuNumber[]  = [];
  let current = utils.getNumber(0);
  let ex = utils.getNumber(1);
  
  while(core.isSmall(ex, max)){
    current = utils.exponentiate(two,ex);
    current = core.subtract(current, utils.getNumber(1));
    arr.push(current);
    ex = core.add(ex, utils.getNumber(1));
  }
  return arr;
};

// utils.trialDivision = function(n){
//   const num = utils.getNumber(n);
// };

utils.isPrimeNumber = function(n){
  const num = utils.getNumber(n);
  if(utils.isZero(num)){
    return false;
  }
  if(utils.isOne(num)){
    return false;
  }

  if(utils.isEqual(num, "2")){
    return true;
  }

  if(utils.isEvenNumber(num)){
    return false;
  }

  if(utils.includeDecimal(num)){
    return false;
  }

  if(utils.isSmall(num, utils.getNumber("0"))){
    return false;
  }

  const prev = core.subtract(num, utils.getNumber("1"));
  let current = core.division(prev, utils.getNumber("2"));

  let is_prime = true;

  while(is_prime && core.isLarge(current, utils.getNumber("2"))){

    const res = core.modulo(num, current);
    if(utils.isZero(res)){
      is_prime = false;
      break;
    }
    current = core.subtract(current, utils.getNumber("1"));
  }

  return is_prime;

};

utils.makePrimeNumbers = function(maxlength){
  const max_length = utils.getNumber(25);
  if(!maxlength || core.isLarge(maxlength, max_length)){
    maxlength = max_length;
  }
  const arr:SuuNumber[] = [];
  let num = utils.getNumber("0");
  let count = utils.getZero();
  while(core.isSmall(count, maxlength)){
    num = core.add(num, utils.getNumber("1"));
    if(utils.isPrimeNumber(num)){
      arr.push(num);
      count = utils.getNumber(arr.length);
    }
  }
  return arr;
};

utils.isMersennePrimeNumber = function(n){
  if(utils.isPrimeNumber(n) && utils.isMersenneNumber(n)){
    return true;
  }
  return false;
};

utils.isCompositeNumber = function(n){
  if(!n && n !== 0){
    return false;
  }
  const num = utils.getNumber(n);
  if(utils.isZero(num)){
    return false;
  }
  if(utils.isOne(num)){
    return false;
  }

  if(utils.isEvenNumber(n)){
    if(utils.isLarge(n, "4")){
      return true;
    }
  }

  const res = utils.isPrimeNumber(num);

  if(res instanceof Error){
    return false;
  }
  if(typeof res === "boolean"){
    return !res;
  }
  return false;
};

utils.isHarshadNumber = function(n){
  if(!n && n !== 0){
    return false;
  }

  const num = utils.getNumber(n);

  if(utils.isEqual("0")){
    return false;
  }
  if(utils.isSmall(num, "0")){
    return false;
  }
  
  if(!utils.isInteger(num)){
    return false;
  }

  const divisors = utils.getDivisors(n);

  const dsum = utils.digitSum(n);

  let bool = false;
  for(let i = 0; i < divisors.length; i++){
    const d = divisors[i];
    if(utils.isEqual(d, dsum)){
      bool = true;
      break;
    }
  }
  return bool;
};

utils.isZuckermanNumber = function(n){

  let res = false;

  if(!n && n !== 0){
    return res;
  }

  const num = utils.getNumber(n);

  if(utils.isEqual("0")){
    return res;
  }
  if(utils.isNegative(num)){
    return res;
  }
  
  if(!utils.isInteger(num)){
    return res;
  }


  const product = utils.infiniteProduct(num.array);
  const divisors = utils.getDivisors(n);

  for(let i = 0; i < divisors.length; i++){
    const d = divisors[i];
    if(utils.isEqual(product, d)){
      res = true;
      break;
    }
  }
  return res;
};

utils.isRepunitNumber = function(n){
  let res = false;

  if(!n && n !== 0){
    return res;
  }

  const num = utils.getNumber(n);

  if(utils.isEqual("0")){
    return res;
  }
  if(utils.isNegative(num)){
    return res;
  }
  
  if(!utils.isInteger(num)){
    return res;
  }

  const arr = num.array;
  res = true;
  for(let i = 0; i < arr.length; i++){
    const elm = arr[i];
    if(elm !== 1){
      res = false;
      break;
    }
  }

  return res;
};

const makeSophieGermanPrimeAndSafePrime = function(n){
  const safe_prime_expected = utils.getNumber(n);
  const num1 = core.multiple(safe_prime_expected, "2");
  const sophie_german_expected = core.add(num1, "1");

  if(utils.isPrimeNumber(safe_prime_expected) && utils.isPrimeNumber(sophie_german_expected)){
    return {
      sophieGermainPrime: safe_prime_expected,
      safePrime: sophie_german_expected,
    };
  }
  return {
    sophieGermainPrime: null,
    safePrime: null,
  };

};

utils.isSophieGermainPrime = function(n){
  const { sophieGermainPrime, safePrime } = makeSophieGermanPrimeAndSafePrime(n);
  if(sophieGermainPrime && safePrime){
    return true;
  }
  return false;
};

utils.isSafePrime = function(n){
  const num1 = utils.getNumber(n);
  const num2 = core.subtract(num1, "1");
  const num3 = core.division(num2, "2");
  const { sophieGermainPrime, safePrime } = makeSophieGermanPrimeAndSafePrime(num3);

  if(sophieGermainPrime && safePrime){
    return true;
  }
  return false;

};

const sort = function(array: [], order?: "asc" | "desc"){

  const new_arr = [...array];

  const asc = (a_n, b_n) => {
    if(a_n < b_n){
      return -1;
    }else if(a_n > b_n){
      return 1;
    }
    return 0;
  };

  const desc = (a_n, b_n) => {
    if(a_n < b_n){
      return 1;
    }else if(a_n > b_n){
      return -1;
    }
    return 0;
  };

  new_arr.sort((a, b) => {
    const a_n = Number(a);
    const b_n = Number(b);

    if(order === "asc"){
      return asc(a_n, b_n);
    }else if(order === "desc"){
      return desc(a_n, b_n);
    }else{
      return asc(a_n, b_n)
    }
  });
  return new_arr;

};

utils.getInversionNumber = function(n){
  let count = utils.getZero();

  if(!n && n !== 0){
    return count;
  }

  const num = utils.getNumber(n);

  if(utils.isEqual("0")){
    return count;
  }
  
  if(utils.isNegative(num)){
    return count;
  }

  const orderedArray: any[] = sort(num.array, "asc");

  for(let i = 0; i < num.array.length; i++){
    const ordered_elm = orderedArray[i];
    const original_elm = num.array[i];
    const gap = core.subtract(ordered_elm, original_elm);
    if(utils.isNegative(gap)){
      continue;
    }
    if(utils.isZero(gap)){
      continue;
    }
    count = core.add(count, gap);
  }

  return count;

};


utils.getReciprocal = function(n){
  let res = null;
  if(!n && n !== 0){
    return res;
  }

  const num = utils.getNumber(n);

  if(utils.isZero(num)){
    return res;
  }

  if(utils.isOne(num)){
    return utils.getOne();
  }

  res = core.division(utils.getOne(), num);

  return res;

};

utils.getReverse = function(n){
  let res = null;

  if(!n && n !== 0){
    return res;
  }

  const num = utils.getNumber(n);

  if(num.negative){
    return res;
  }
  if(utils.includeDecimal(num)){
    return res;
  }

  if(utils.isSmall(num, utils.getNumber("10"))){
    return num;
  }

  const array = [...num.array].reverse();
  const str = array.join("");
  const new_num = utils.getNumber(str);

  return new_num;

};

utils.getFermatNumber = function(n){
  const num = utils.getNumber(n);
  const base = utils.getNumber("2");
  const ex = utils.exponentiate(base, num);
  const one = utils.getOne();
  const res1 = utils.exponentiate(base, ex);
  const res2 = core.add(res1, one);
  return res2;
};

utils.isFermatNumber = function(n){
  const num = utils.getNumber(n);
  const max = 6;
  let bool = false;
  for(let i = 0; i <= max; i++){
    const f = utils.getFermatNumber(`${i}`);
    if(utils.isEqual(f, num)){
      bool = true;
      break;
    }
  }
  return bool;
};

utils.isFermatPrime = function(n){
  const num = utils.getNumber(n);
  if(utils.isFermatNumber(num) && utils.isPrimeNumber){
    return true
  }
  return false;
};

utils.getCullenNumber = function(n){
  const num = utils.getNumber(n);
  const base = utils.getNumber("2");
  const ex = utils.exponentiate(base, num);
  const res1 = core.multiple(num, ex);
  const res2 = core.add(res1, utils.getOne());
  return res2;
};

utils.isCullenNumber = function(n){
  const num = utils.getNumber(n);
  const max = 20;
  let bool = false;
  for(let i = 0; i <= max; i++){
    const f = utils.getCullenNumber(`${i}`);
    if(utils.isEqual(f, num)){
      bool = true;
      break;
    }
  }
  return bool;
};

utils.isCullenPrime = function(n){
  const num = utils.getNumber(n);
  let bool = false;
  if(utils.isPrimeNumber(num) && utils.isCullenNumber(num)){
    bool = true;
  }
  return bool;
};

utils.getProthNumber = function(k, n){
  const k_num = utils.getNumber(k);
  const n_num = utils.getNumber(n);

  if(utils.isZero(k_num) || utils.isZero(n_num)){
    return null;
  }
  if(utils.isSmall(k_num, utils.getZero()) || utils.isSmall(n_num, utils.getZero())){
    return null;
  }

  if(utils.isInteger(k_num) || utils.isInteger(n_num)){
    if(utils.isOddNumber(k_num)){
      const ex = utils.exponentiate(utils.getNumber("2"), n_num);
      if(utils.isLarge(ex, k_num)){
        const res = core.multiple(ex, k_num);
        const res2 = core.add(res, utils.getOne());
        return res2;
      }
    }
  }

  return null;

};

utils.makeProthNumbers = function(max){
  const default_max = 10;
  if(!max){
    max = default_max;
  }else if(max > default_max){
    max = default_max;
  }
  const list: any[] = [];
  for(let i = 0; i < max; i++){
    const k = utils.getNumber(String(i * 2 + 1));
    for(let j = 0; j < max; j++){
      const n = utils.getNumber(String(j + 1));
      const res = utils.getProthNumber(k, n);
      if(res){
        list.push(res);
      }
    }
  }
  list.sort((a: SuuNumber, b: SuuNumber) => {
    const a_is_small = utils.isSmall(a, b)
    if(a_is_small){
      return -1
    }
    return 1
  })
  return list;
};

utils.isProthNumber = function(n){
  const num = utils.getNumber(n);
  const list = utils.makeProthNumbers();
  for(let i = 0; i < list.length; i++){
    const p = list[i];
    if(utils.isEqual(p, num)){
      return true;
    }
  }
  return false;
};

utils.isProthPrime = function(n){
  const num = utils.getNumber(n);
  if(utils.isProthNumber(num) && utils.isPrimeNumber(num)){
    return true;
  }
  return false;
};

utils.makePierpontNumber = function(u, v){
  // 2u 3v + 1
  const u_n = utils.getNumber(u);
  const v_n = utils.getNumber(v);
  if(utils.isNegative(u_n) || utils.isNegative(v_n)){
    return null;
  }
  if(!utils.isInteger(u_n) || !utils.isInteger(v_n)){
    return null;
  }

  const res1 = utils.exponentiate(utils.getNumber("2"), u_n);
  const res2 = utils.exponentiate(utils.getNumber("3"), v_n);
  const res = utils.summation([res1, res2, utils.getOne()]);
  return res;
};

utils.makePierpontNumbers = function(max){
  // 2u 3v + 1
  
  const list: any[] = [];
  const max_default = 10;
  if(!max){
    max = max_default;
  }else if(max > max_default){
    max = max_default;
  }
  for(let i = 0; i < max; i++){
    let u = utils.getNumber(i);
    for(let j = 0; j < max; j++){
      let v = utils.getNumber(j);
      const res: any = utils.makePierpontNumber(u, v);
      if(res){
        list.push(res)
      }
    }
  }
  for(let i = 0; i < max; i++){
    let v = utils.getNumber(i);
    for(let j = 0; j < max; j++){
      let u = utils.getNumber(j);
      const res: any = utils.makePierpontNumber(u, v);
      if(res){
        list.push(res)
      }
    }
  }
  list.sort((a: SuuNumber, b: SuuNumber) => {
    const a_is_small = utils.isSmall(a, b)
    if(a_is_small){
      return -1
    }
    return 1
  })
  return list;
};

utils.makePierpontPrimes = function(){
  const arr1 = utils.makePierpontNumbers();
  console.log("a", arr1)
  const arr2: any[] = [];
  for(let i = 0; i < arr1.length; i++){
    console.log(i)
    const num = arr1[i];
    if(utils.isPrimeNumber(num)){
      console.log("b")
      arr2.push(num);
    }
  }
  return arr2;
};

utils.isPierpontPrime = function(n){
  const num = utils.getNumber(n);
  if(utils.isZero(num)){
    return false;
  }
  const arr = utils.makePierpontPrimes();

  for(let i = 0; i < arr.length; i++){
    if(utils.isEqual(num, arr[i])){
      return true;
    }
  }
  return false;
};

export default utils;
