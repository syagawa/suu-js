const core = {};

core.isNumber = function(n){
  if(typeof n === "number"){
    if(Number.isNaN(n)){
      return false;
    }else{
      return true;
    }
  }
  return false;
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

core.numToArrayWithDecimal2 = function(n){
  const str = String(n);
  const arr = str.split("");

  const int = [];
  const decimal = [];

  let is_decimal = false;
  for(let i = 0; i < arr.length; i++){

    const num = Number(arr[i]);
    const isNumber = this.isNumber(num);
    if(!isNumber && arr[i] === "."){
      is_decimal = true;
      continue;
    }else if(!isNumber){
      throw new Error("This function has been called with incorrect parameters");
    }

    if(is_decimal){
      decimal.push(num);
    }else{
      int.push(num);
    }
  }

  return {
    int: int,
    decimal: decimal
  };
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

  const a_ = this.numToArrayWithDecimal2(a);
  const b_ = this.numToArrayWithDecimal2(b);

  const a_int = a_.int.reverse();
  const b_int = b_.int.reverse();

  const a_dec = a_.decimal;
  const b_dec = b_.decimal;

  const calc = function(a, b){
    const arr = [];
    let arr_a = a;
    let arr_b = b;
    if(a.length < b.length){
      arr_a = b;
      arr_b = a;
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
    return arr;
  }

  const int_arr = calc(a_int, b_int).reverse();

  return int_arr;

};


export default core;
