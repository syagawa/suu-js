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
      throw new Error("This function has been called with incorrect parameters");
    }
    arr.push(elm);
  }
  return arr;
};

core.numToArrayWithDecimal = function(n){
  const arr1 = [];
  const arr2 = [];
  const str = String(n);
  const len = str.length;
  let tgt = arr1;
  for(let i = 0; i < len; i++){
    const elm = Number(str[i]);
    if(!this.isNumber(elm)){
      if(elm === "." && tgt === arr1){
        tgt = arr2;
      }else{
        throw new Error("This function has been called with incorrect parameters");
      }
    }
    tgt.push(elm);
  }
  return [...arr1, ".", arr2];
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

core.add = function(a, b){
  if(!a && !b){
    return;
  }

  const a_ = this.numToArray(a).reverse();
  const b_ = this.numToArray(b).reverse();

  const arr = [];

  let arr_a = a_;
  let arr_b = b_;
  if(a_.length < b_.length){
    arr_a = b_;
    arr_b = a_;
  }
  
  
  let carry = 0;
  for(let i = 0; i < arr_a.length; i++){
    const aa = arr_a[i] ? arr_a[i] : 0;
    const bb = arr_b[i] ? arr_b[i] : 0;
    let res = aa + bb + carry;
    if(res > 9){
      res = res -10;
      carry = 1;
    }else{
      carry = 0;
    }
    arr.push(res);
  }

  if(carry > 0){
    arr.push(carry);
  }

  return arr.reverse();

};


export default core;
