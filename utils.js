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
  const n_ = utils.getNumber(n);
  let str = "0.";
  const len = n_.array.length - n_.decimal_index;
  if(len > 0){
    for(let i = n_.decimal_index; i <= len; i++){
      const s = String(n_.array[i]);
      str = str + s;
    }
  }else{
    str = str + "0";
  }
  const num = utils.getNumber(str);
  return num;
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



export default utils;