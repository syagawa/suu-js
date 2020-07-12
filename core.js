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

core.fixCarry = function(arr){

  const new_arr = [];
  let carry = 0;
  for(let i = 0; i < arr.length; i++){
    let val = arr[i] + carry;
    if(val > 9){
      val = val - 10;
      carry = 1;
    }else if( val >= 0 && val <= 9){
      carry = 0;
    }

    new_arr.push(val);
  }
  if(carry > 0){
    new_arr.push(carry);
  }

  return new_arr;

};

core.add = function(a, b){
  if(!a && !b){
    return;
  }

  const a_ = this.numToArrayWithDecimal2(a);
  const b_ = this.numToArrayWithDecimal2(b);

  const a_int = a_.int;
  const b_int = b_.int;

  const a_dec = a_.decimal;
  const b_dec = b_.decimal;

  let dec_len = a_dec.length;
  if(dec_len < b_dec.length){
    dec_len = b_dec.length;
  }

  for(let i = 0; i < dec_len; i++){
    const a_d = a_dec[i];
    const b_d = b_dec[i];
    if(!core.isNumber(a_d)){
      a_dec.push(0);
    }
    if(!core.isNumber(b_d)){
      b_dec.push(0);
    }
  }

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

    return {
      array: arr,
      carry: carry
    };
  };

  
  const { dec_arr, dec_carry } = (function(){
    const res = calc(a_dec.reverse(), b_dec.reverse());
    return {
      dec_arr: res.array.reverse(),
      dec_carry: res.carry
    };
  })();

  let int_arr = (function(dec_carry){
    let res = calc(a_int.reverse(), b_int.reverse());
    if(res.carry > 0){
      res.array.push(res.carry);
    }

    if(dec_carry > 0){
      res = calc(res.array, [dec_carry]);
    }
    return res.array.reverse();
  })(dec_carry);


  return {
    int: int_arr,
    decimal: dec_arr
  };

};


export default core;
