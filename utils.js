import core from "./core_new.js";

const utils = {};

utils.getString = function(n){
  return core.numArrayToString(n);
};

export default utils;