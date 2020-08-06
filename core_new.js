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

core.numToArrayWithDecimal = function(n){
  let str = String(n);
  let negative = false;
  while(str[0].match(/^-/)){
    str = str.replace(/^-/, "");
    negative = !negative;
  }

  let dec_index;
  let res = str.match(/\./g);
  if(res && res.length > 1){
    return;
  }
  if(res && res.length === 1){
    dec_index = str.match(/\./).index;
    str = str.replace(/\./, "");
  }else{
    dec_index = str.length;
  }

  console.info(str, dec_index);
  const arr = [];
  let zero_count = 0;
  for(let i = 0; i < str.length; i++){

    const num = Number(str[i]);
    const isNumber = core.isNumber(num);
    if(!isNumber){
      throw new Error("This function has been called with incorrect parameters");
    }
    arr.push(num);
  }
  // dec_index = dec_index - zero_count;

  while(arr[arr.length - 1] === 0){
    arr.pop();
  }
  while(arr[0] === 0){
    arr.shift();
    dec_index--;
  }

  if(arr.length === 0){
    arr.push(0);
    dec_index = 1;
  }

  const o = {
    array: arr,
    negative: negative,
  };
  if(dec_index === 0 || dec_index > 0){
     o.decimal_index = dec_index;
  }else{
    o.decimal_index = arr.length;
  }

  return o;

};

core.compare = function(a, b){
  if(!a || !b){
    return;
  }
  const o = {
    small: null,
    large: null,
    equal: false
  };

  const a_len = a.array.length;
  const b_len = b.array.length;
  const a_str = a.array.join("");
  const b_str = b.array.join("");

  if(a_len === 1 && a_str === "0" && b_len === 1 && b_str === "0"){
    o.equal = true;
    return o;
  }
  if(!a.negative && b.negative){
    o.small = b;
    o.large = a;
    return o;
  }
  if(a.negative && !b.negative){
    o.small = a;
    o.large = b;
    return o;
  }








};

core.getLarge = function(a, b){

  const a_ = core.numToArrayWithDecimal2(a);
  const b_ = core.numToArrayWithDecimal2(b);

  let negative = false;

  let result;

  if(a_.negative && !b_.negative){
    return b;
  }

  if(!a_.negative && b_.negative){
    return a;
  }

  if(a_.negative && b_.negative){
    negative = true;
  }

  const int_res = core.compare(a_.int, b_.int);

  if(int_res.large === a_.int){
    return negative ? b : a;
  }
  if(int_res.large === b_.int){
    return negative ? a : b;
  }

  if(a_.decimal.length < b_.decimal.length){
    const len = b_.decimal.length - a_.decimal.length;
    for(let i = 0; i < len; i++){
      a_.decimal.push(0);
    }
  }else if(a_.decimal.length > b_.decimal.length){
    const len = a_.decimal.length - b_.decimal.length;
    for(let i = 0; i < len; i++){
      b_.decimal.push(0);
    }
  }
  
  const dec_res = core.compare(a_.decimal, b_.decimal);
  if(dec_res.large === a_.decimal){
    return negative ? b : a;
  }
  if(dec_res.large === b_.decimal){
    return negative ? a : b;
  }
};

core.getSmall = function(a, b){
  const res = core.getLarge(a, b);
  if(res === a){
    return b;
  }
  if(res === b){
    return a;
  }
};

core.isEqual = function(a, b){
  const res = core.compare(a, b);
  if(res.equal){
    return true;
  }
  return false;
}

core.isNumArray = function(arr){
  if( arr instanceof Array ){
    for(let i = 0; i < arr.length; i++){
      if( !core.isNumber(arr[i]) ){
        return false;
      }
    }
    return true;
  }
};

core.fixCarry = function(arr, minus){

  console.log(arr);
  let minus_ = minus;
  for(let i = arr.length - 1; i >=0; i--){
    const elm = arr[i];
    if(elm < 0){
      minus_ = true;
      break;
    }else if(elm === 0){
      continue;
    }else{
      break;
    }
  }
  if(minus_){
    const cache = [];
    arr.forEach( elm => {
      cache.push(-elm);
    });
    arr = cache;
  }
  const new_arr = [];
  let carry = 0;
  for(let i = 0; i < arr.length; i++){
    let val = arr[i] + carry;
    if(val > 9){
      val = val - 10;
      carry = 1;
    }else if( val >= 0 && val <= 9){
      carry = 0;
    }else{
      val = 10 + val;
      carry = -1;
    }
    new_arr.push(val);
  }
  if(carry !== 0){
    new_arr.push(carry);
  }

  console.log(new_arr);
  console.log("minus", minus_);
  return {
    new_array: new_arr,
    minus: minus_
  };

};

core.add_and_subtract = function(a, b, mode){
  if(!a && !b){
    return;
  }
  if(!mode){
    return;
  }

  let plus;
  if(mode === "+"){
    plus = true;
  }else if(mode === "-"){
    plus = false;
  }else{
    return;
  }

  const a_ = core.numToArrayWithDecimal2(a);
  const b_ = core.numToArrayWithDecimal2(b);
  const a_int = a_.int;
  const b_int = b_.int;
  const a_dec = a_.decimal;
  const b_dec = b_.decimal;
  const a_negative = a_.negative;
  const b_negative = b_.negative;

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

  const calc = function(a, b, plus){
    const arr = [];
    let arr_a = a;
    let arr_b = b;
    if(a.length < b.length){
      arr_a = b;
      arr_b = a;
    }
    for(let i = 0; i < arr_a.length; i++){
      const aa = arr_a[i] ? arr_a[i] : 0;
      const bb = arr_b[i] ? arr_b[i] : 0;
      let res = plus ? aa + bb : aa - bb;
      arr.push(res);
    }
    return core.fixCarry(arr);
  };

  const { dec_arr, dec_carry, dec_minus } = (function(){
    const length = a_dec.length < b_dec.length ? b_dec.legth : a_dec.length;
    const res = calc(a_dec.reverse(), b_dec.reverse(), plus);

    let carry = 0;
    if(res.new_array.length > length){
      carry = res.new_array.pop();
    }
    return {
      dec_arr: res.new_array,
      dec_carry: carry,
      dec_minus: res.minus
    };
  })();

  let { int_arr } = (function(dec_carry){
    let res = calc(a_int.reverse(), b_int.reverse(), plus);

    if(dec_carry !== 0){
      res = calc(res.new_array, [dec_carry], true);
    }
    // return res;
    return {
      int_arr: res.new_array
    };
  })(dec_carry);
  console.log(int_arr);
  console.log(dec_arr, dec_carry, dec_minus);

  return {
    int: int_arr.reverse(),
    decimal: dec_arr.reverse()
  };
};

core.add = function(a, b){
  const a_ = core.numToArrayWithDecimal2(a);
  const b_ = core.numToArrayWithDecimal2(b);

  let large = core.getLarge(a, b);


}


export default core;
