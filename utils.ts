import core from "./core";

import { SuuNumber } from "./interfaces";

const utils:any = {};

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

utils.exponentiate = function(base, exponent): SuuNumber{
  if(utils.isZero(exponent)){
    return core.getOne();
  }
  if(utils.isOne(exponent)){
    return base;
  }

  let count = core.getOne();
  const getBool = (count, exponent) => {
    return utils.isSmall(count, exponent);
  }  
  let res = base;
  let bool = getBool(count, exponent);
  while(bool){
    res = core.multiple(res, base);
    count = core.add(count, "1");
    bool = getBool(count, exponent);
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
  const n_ = core.numToArrayWithDecimal(n);
  return n_.negative;
};

utils.isPositive = function(n): boolean{
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

utils.getNegativeNumber = function(n): SuuNumber{
  return utils.negate(n);
};

utils.getPositiveNumber = function(n): SuuNumber{
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

  const res = core.division(n, "2");

  const decimal = utils.getDecimal(res);
  const is_zero = utils.isZero(decimal);
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

  const res = core.division(n, "2");

  const decimal = utils.getDecimal(res);
  const bool = core.isEqual("0.5", decimal);
  if(bool){
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
    n.array.forEach(item => {
      res = core.add(res, item);
    });
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



export default utils;