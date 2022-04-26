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
      for(let i = core.add("1", "1"); core.isLarge(num, i); i = core.add(i, "1")){
        const res= core.division(num, i);
        if(!utils.isNaturalNumber(res)){
          continue;
        }
        const remainder = res.remainder;
        if(core.isZero(remainder)){
          arr.push(utils.getNumber(i));
        }
      }
      arr.push(num);
    }
  }
  return arr;
};

export default utils;