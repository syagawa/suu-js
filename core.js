const core = {};

core.isNumber = function(n){
  if(typeof n === "number"){
    if(Number.isNaN(n)){
      return NaN;
    }else{
      return true;
    }
  }
};

core.isZero = function(n){
  if( n === 0){
    return true;
  }
};

// 配列での計算
core.numToArray = function(n){
  const arr = [];
  const str = String(n);
  const len = str.length;
  for(let i = 0; i < len; i++){
    const elm = Number(str.slice(i, i + 1));
    if(!this.isNumber(elm)){
      return "This function has been called with incorrect parameters";
    }
    arr.push(elm);
  }
  return arr;
};

core.isNumArray = function(arr){
  if( arr instanceof Array ){
    for(let i = 0; i < arr.length; i++){
      if( !this.isNumber(arr[i]) ){
        return false;
      }
    }
    return true;
  }
};

export default core;
