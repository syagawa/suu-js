import core from "./core_new.js";

const utils = {};


utils.getNumber = function(n){
  return core.numToArrayWithDecimal(n);
};

utils.copy = function(n){
  const c = core.clone(n);
  if(!c){
    const s = core.numArrayToString(n);
    return core.numToArrayWithDecimal(s);
  }
  return c;
};

utils.getLarge = function(a, b){
  return core.getLarge(a, b);
};

utils.getSmall = function(a, b){
  return core.getSmall(a, b);
};

utils.isEqual = function(a, b){
  return core.isEqual(a, b);
}

utils.getZero = function(){
  return core.getZero();
};

utils.getOne = function(){
  return core.getOne();
};

utils.isZero = function(n){
  return core.isZero(n);
}
utils.isOne = function(n){
  return core.isOne(n);
}

utils.square = function(n){
  return core.multiplication(n, n);
};

utils.getInteger = function(n){
  let str = "";
  for(let i = 0; i < n.decimal_index; i++){
    const s = String(n.array[i]);
    str = str + s;
  }
  const num = utils.getNumber(str);
  return num;
};

utils.getDecimal = function(n){
  return core.getDecimal(n);
};

utils.isNaturalNumber = function(n){
  const decimal = utils.getDecimal(n);
  const is_zero = utils.isZero(decimal);
  if(is_zero && !n.negative){
    return true;
  }
  return false;
};

utils.includeDecimal = function(n){
  const decimal = utils.getDecimal(n);
  const is_zero = utils.isZero(decimal);
  if(is_zero){
    return false;
  }
  return true;
};

utils.isNegative = function(n){
  const n_ = core.numToArrayWithDecimal(n);
  return n_.negative;
};

utils.isPositive = function(n){
  const n_ = core.numToArrayWithDecimal(n);
  return !n_.negative;
};

utils.negate = function(n){
  const num = core.numToArrayWithDecimal(n);
  if(num){
    num.negative = true;
  }
  return num;
};

utils.makePositive = function(n){
  const num = core.numToArrayWithDecimal(n);
  if(num){
    num.negative = false;
  }
  return num;
};

utils.getNegativeNumber = function(n){
  return utils.negate(n);
};

utils.getPositiveNumber = function(n){
  const num = core.numToArrayWithDecimal(n);
  if(num){
    num.negative = false;
  }
  return num;
};

utils.getNext = function(n){
  return core.add(n, "1");
};

utils.getPrev = function(n){
  return core.subtract(n, "1");
};

utils.isInteger = function(n){
  if(utils.isZero(n)){
    return true;
  }

  const decimal = utils.getDecimal(n);
  if(utils.isEqual(decimal, "0")){
    return true;
  }
  return false;

};


utils.isEvenNumber = function(n){
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

utils.isOddNumber = function(n){
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


utils.getDivisors = function(n){
  const arr = [];
  if(!n && n !== 0){
    return arr;
  }
  const num = utils.getNumber(n);

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

utils.commonDivisors = function(a, b){
  const arr = [];
  if(!a && a !== 0){
    return arr;
  }
  if(!b && b !== 0){
    return arr;
  }

  const a_ = utils.getNumber(a);
  const b_ = utils.getNumber(b);

  const a_divisors = utils.getDivisors(a_);
  if(core.isEqual(a_, b_)){
    return a_divisors;
  }
  const b_divisors = utils.getDivisors(b_);
  for(let i = 0; i < a_divisors.length; i++){
    const a_n = a_divisors[i];
    for(let j = 0; j < b_divisors.length; j++){
      const b_n = b_divisors[j];
      if(core.isEqual(a_n, b_n)){
        arr.push(a_n);
      }
    }
  }
  return arr;
};

utils.greatestCommonDivisor = function(a, b){
  const arr = utils.commonDivisors(a, b);
  if(!arr.length){
    return null;
  }
  return arr[arr.length - 1];
};

utils.commonMultiple = function(a, b, limit){
  const limit_length = limit ? limit : 10;
  const arr = [];
  if(!a && a !== 0){
    return arr;
  }
  if(!b && b !== 0){
    return arr;
  }

  const a_ = utils.getNumber(a);
  const b_ = utils.getNumber(b);

  if(core.isEqual(a_, b_)){
    arr.push(a_);
    return arr;
  }

  const a_arr = [];
  const b_arr = [];
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
};

utils.leastCommonMultiple = function(a, b, limit){
  const arr = utils.commonMultiple(a, b, limit);
  return arr[0];
};

export default utils;