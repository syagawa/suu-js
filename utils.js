import core from "./core_new.js";

const utils = {};

utils.copy = function(n){
  const s = core.numArrayToString(n);
  return core.numToArrayWithDecimal(s);
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

utils.isZero = function(n){
  return core.isZero(n);
}
utils.isOne = function(n){
  return core.isOne(n);
}

utils.getNumber = function(n){
  return core.numToArrayWithDecimal(n);
};

utils.getOne = function(){
  return core.getOne();
};

utils.getZero = function(n){
  return core.getZero();
};

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




export default utils;