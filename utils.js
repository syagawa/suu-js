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

export default utils;