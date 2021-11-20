import core from "./core_new.js";

const utils = {};

utils.copy = function(n){
  const s = core.numArrayToString(n);
  return core.numToArrayWithDecimal(s);
};

export default utils;