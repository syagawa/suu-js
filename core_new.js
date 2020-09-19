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

core.moldNumArray = function({ array, negative, decimal_index }){
  while(decimal_index < array.length && array[array.length - 1] === 0){
    array.pop();
  }
  while(decimal_index > 1 && array[0] === 0){
    array.shift();
    decimal_index--;
  }

  if(array.length === 0){
    array.push(0);
    decimal_index = 1;
  }

  const o = {
    array: array,
    negative: negative,
  };
  if(decimal_index === 0 || decimal_index > 0){
     o.decimal_index = decimal_index;
  }else{
    o.decimal_index = array.length;
  }

  return o;

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

  const arr = [];
  for(let i = 0; i < str.length; i++){

    const num = Number(str[i]);
    const isNumber = core.isNumber(num);
    if(!isNumber){
      throw new Error("This function has been called with incorrect parameters");
    }
    arr.push(num);
  }

  return core.moldNumArray({ array: arr, negative: negative, decimal_index: dec_index});

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

  const a_array = a.array;
  const b_array = b.array;

  const a_len = a_array.length;
  const b_len = b_array.length;
  const a_str = a_array.join("");
  const b_str = b_array.join("");

  const a_int_len = a.decimal_index;
  const b_int_len = b.decimal_index;

  const a_dec_len = a_len - a_int_len;
  const b_dec_len = b_len - b_int_len;

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

  const negative = a.negative;

  const o_a_b = {
    large: negative ? b : a,
    small: negative ? a : b,
    equal: false,
  };
  const o_b_a = {
    large: negative ? a : b,
    small: negative ? b : a,
    equal: false
  };

  if(a_int_len > b_int_len){
    return o_a_b;
  }
  
  if(a_int_len < b_int_len){
    return o_b_a;
  }

  for(let i = 0; i < a_int_len; i++){
    if(a_array[i] > b_array[i]){
      return o_a_b;
    }
    if(a_array[i] < b_array[i]){
      return o_b_a;  
    }
  }

  const dec_len = a_dec_len > b_dec_len ? a_dec_len : b_dec_len;
  for(let i = 0; i < dec_len; i++){
    const aa = a_array[a_int_len + i] ? a_array[a_int_len + i] : 0;
    const bb = b_array[b_int_len + i] ? b_array[b_int_len + i] : 0;
    if(aa > bb){
      return o_a_b;
    }
    if(aa < bb){
      return o_b_a;
    }
  }

  o.equal = true;
  return o;

};

core.getLarge = function(a, b){
  return core.compare(a, b).large;
};

core.getSmall = function(a, b){
  return core.compare(a, b).small;
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

  console.log("1", arr);
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

  console.log("2", new_arr);
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

  const a_ = core.numToArrayWithDecimal(a ? a : 0);
  const b_ = core.numToArrayWithDecimal(b ? b : 0);
  const a_arr = a_.array;
  const b_arr = b_.array;

  const a_dec_length = a_.array.length - a_.decimal_index;
  const b_dec_length = b_.array.length - b_.decimal_index;

  const dec_gap = a_dec_length - b_dec_length;

  const decimal_index = a_.decimal_index >= b_.decimal_index ? a_.decimal_index : b_.decimal_index;

  if(dec_gap > 0){
    b_arr.push(...Array(dec_gap).fill(0));
  }else if(dec_gap < 0){
    a_arr.push(...Array(Math.abs(dec_gap)).fill(0));
  }

  const calc = function({a, b, plus}){
    const arr = [];
    let arr_a = a.array;
    let arr_b = b.array;
    if(arr_a.length < arr_b.length){
      arr_a = b;
      arr_b = a;
    }
    const a_one = a.negative ? -1 : 1;
    const b_one = b.negative ? -1 : 1;
    for(let i = 0; i < arr_a.length; i++){
      const aa = arr_a[i] ? arr_a[i] * a_one : 0;
      const bb = arr_b[i] ? arr_b[i] * b_one : 0;
      let res = plus ? aa + bb : aa - bb;
      arr.push(res);
    }
    return core.fixCarry(arr);
  };


  const { new_array, minus } = calc({
    a: {
      array: a_arr.reverse(),
      negative: a_.negative,
    },
    b: {
      array: b_arr.reverse(),
      negative: b_.negative
    },
    plus: plus
  });

  return core.moldNumArray({
    array: new_array.reverse(),
    negative: minus ? true : false,
    decimal_index: decimal_index
  });

};

core.add = function(a, b){
  const a_ = core.numToArrayWithDecimal(a);
  const b_ = core.numToArrayWithDecimal(b);
  return core.add_and_subtract(a_, b_, "+");
};

core.subtract = function(a, b){
  const a_ = core.numToArrayWithDecimal(a);
  const b_ = core.numToArrayWithDecimal(b);
  return core.add_and_subtract(a_, b_, "-");
};

export default core;