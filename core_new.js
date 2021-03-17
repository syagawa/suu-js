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

core.numArrayToString = function(n){
  if(!n.array || !n.decimal_index){
    return "";
  }

  const arr = [...n.array];
  arr.splice(n.decimal_index, 0, ".");
  let str = arr.join("");
  if(n.negative){
    str = `-${str}`;
  }

  return str.replace(/\.$/, "");

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
};

core.isZero = function(n){
  if(!n){
    return false;
  }
  const zero = core.numToArrayWithDecimal("0");
  return core.isEqual(zero, n);
};

core.isOne = function(n){
  if(!n){
    return false;
  }
  const one = core.numToArrayWithDecimal("1");
  return core.isEqual(one, n);
};

core.getZero = function(){
  const zero = core.numToArrayWithDecimal("0");
  return zero;
};

core.getOne = function(){
  const one = core.numToArrayWithDecimal("1");
  return one;
};


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
      const arr1 = String(val).split("");
      val = Number(arr1[arr1.length - 1]);
      const arr2 = arr1.slice(0, arr1.length - 1);
      carry = Number(arr2.join(""));
      // val = val - 10;
      // carry = 1;
    }else if( val >= 0 && val <= 9){
      carry = 0;
    }else{
      // const arr1 = String(val * -1).split("");
      // const val_ = Number(arr1[arr1.length - 1]) * -1 ;
      // val = 10 + val_;
      // const arr2 = arr1.slice(0, arr1.length - 1);
      // const carry_ = (Number(arr2.join("")));
      // carry = carry_ === 0 ? 0 : carry_ * -1;

      val = 10 + val;
      carry = -1;

    }
    new_arr.push(val);
  }
  if(carry !== 0){
    new_arr.push(carry);
  }

  return {
    new_array: new_arr,
    minus: minus_
  };

};

core.add_and_subtract = function(a, b, mode){
  if(!a || !b){
    if(a !== 0 && b !== 0){
      return;
    }
  }
  
  let plus;
  if(!mode){
    return;
  }else if(mode === "+"){
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


  const a_is_zero = core.isZero(a_);
  const b_is_zero = core.isZero(b_);

  if(a_is_zero && b_is_zero){
    return a_;
  }else if(a_is_zero){
    if(!plus){
      b_.negative = !b_.negative;
    }
    return b_;
  }else if(b_is_zero){
    return a_;
  }

  const a_dec_length = a_.array.length - a_.decimal_index;
  const b_dec_length = b_.array.length - b_.decimal_index;

  const dec_gap = a_dec_length - b_dec_length;

  const decimal_index = a_.decimal_index >= b_.decimal_index ? a_.decimal_index : b_.decimal_index;

  const length = a_.array.length > b_.array.length ? a_.array.length : b_.array.length;

  if(dec_gap > 0){
    b_arr.push(...Array(dec_gap).fill(0));
  }else if(dec_gap < 0){
    a_arr.push(...Array(Math.abs(dec_gap)).fill(0));
  }

  const calc = function({a, b, plus}){
    const arr = [];
    let len = a.array.length;
    if(a.array.length < b.array.length){
      len = b.array.length;
    }
    const arr_a = a.array;
    const arr_b = b.array;
    const a_one = a.negative ? -1 : 1;
    const b_one = b.negative ? -1 : 1;
    for(let i = 0; i < len; i++){
      const aa = arr_a[i] ? arr_a[i] * a_one : 0;
      const bb = arr_b[i] ? arr_b[i] * b_one : 0;
      let res = plus ? aa + bb : aa - bb;
      arr.push(res);
    }
    return core.fixCarry(arr);
  };

  const { new_array, minus } = calc({
    a: {
      array: [...a_arr].reverse(),
      negative: a_.negative,
    },
    b: {
      array: [...b_arr].reverse(),
      negative: b_.negative
    },
    plus: plus
  });

  const dec_length = a_dec_length >= b_dec_length ? a_dec_length : b_dec_length;
  const new_int_length = new_array.length - dec_length;

  const new_decimal_index = new_int_length;

  return core.moldNumArray({
    array: [...new_array].reverse(),
    negative: minus ? true : false,
    decimal_index: new_decimal_index
  });

};

core.add = function(a, b){
  return core.add_and_subtract(a, b, "+");
};

core.subtract = function(a, b){
  return core.add_and_subtract(a, b, "-");
};


core.multiplication = function(a, b){

  if(!a || !b){
    if(a !== 0 && b !== 0){
      return;
    }
  }

  const a_ = core.numToArrayWithDecimal(a ? a : 0);
  const b_ = core.numToArrayWithDecimal(b ? b : 0);
  const a_arr = a_.array;
  const b_arr = b_.array;

  if(core.isZero(a_) || core.isZero(b_)){
    return core.numToArrayWithDecimal("0");
  }

  if(core.isOne(a_)){
    return b_;
  }

  if(core.isOne(b_)){
    return a_;
  }


  const a_negative = a_.negative;
  const b_negative = b_.negative;
  let negative;
  if(a_negative && b_negative){
    negative = false;
  }else if(a_negative || b_negative){
    negative = true;
  }else{
    negative = false;
  }

  const a_dec_length = a_.array.length - a_.decimal_index;
  const b_dec_length = b_.array.length - b_.decimal_index;
  const dec_length = a_dec_length + b_dec_length;

  const calc = function({a, b}){
    const array = [];
    const arr_a = a.array;
    const arr_b = b.array;
    for(let i = 0; i < arr_a.length; i++){
      const aa = arr_a[i] ? arr_a[i] : 0;
      const arr = new Array(i);
      arr.fill(0, 0, i);

      for(let j = 0; j < arr_b.length; j++){
        const bb = arr_b[j] ? arr_b[j] : 0;
        let res = aa * bb;
        
        arr.push(res);

        const tgt_index = i + j;
        let tgt = array[tgt_index];
        if(!tgt){
          tgt = 0;
        }
        const new_tgt = tgt + res;
        array[tgt_index] = new_tgt;
      }
    }
    return core.fixCarry(array);
  };

  const { new_array } = calc({
    a: {
      array: [...a_arr].reverse(),
      negative: a_.negative,
    },
    b: {
      array: [...b_arr].reverse(),
      negative: b_.negative
    },
  });

  const new_decimal_index = new_array.length - dec_length;

  return core.moldNumArray({
    array: [...new_array].reverse(),
    negative: negative,
    decimal_index: new_decimal_index
  });

};

core.multiple = function(a, b){
  return core.multiplication(a, b);
};


core.division = function(a, b){

  if(!a || !b){
    if(a !== 0 && b !== 0){
      return;
    }
  }

  const a_ = core.numToArrayWithDecimal(a ? a : 0);
  const b_ = core.numToArrayWithDecimal(b ? b : 0);

  if(core.isZero(b_)){
    return;
  }

  if(core.isZero(a_)){
    return core.numToArrayWithDecimal("0");
  }

  if(core.isOne(b_)){
    return a_;
  }

  if(core.isEqual(a_, b_)){
    return core.numToArrayWithDecimal("1");
  }

  const a_arr = a_.array;
  const b_arr = b_.array;
  const a_negative = a_.negative;
  const b_negative = b_.negative;

  const a_digit = a_arr.length;
  const b_digit = b_arr.length;

  console.info(a_digit, b_digit);

  // 10 / 2 
  // 2 10 20 => 1

  // 100 / 20
  // 20 100 200 => 1

  // 100 / 2
  // 2 100 200 =? 2

  let digit = 0;
  let res = b_arr.join("");
  let count = 0;
  for(let i = 0; i < a_digit + 1; i++){
    const n = core.numToArrayWithDecimal(res);
    const large = core.getLarge(n, a_);
    console.info(large);
    if(large && core.isEqual(large, n)){
      digit = count;
      break;
    }else{
      res = `${res}0`;
      count++;
    }
  }
  console.info("digit", digit);


  let negative;
  if(a_negative && b_negative){
    negative = false;
  }else if(a_negative || b_negative){
    negative = true;
  }else{
    negative = false;
  }

  const a_dec_length = a_.array.length - a_.decimal_index;
  const b_dec_length = b_.array.length - b_.decimal_index;
  const dec_length = a_dec_length + b_dec_length;


  const calc = function({a, b, digit}){
    const arr = [];
    let remain = "0";
    let n = "0";
    for(let i = 0; i < digit; i++){

      let less = true;
      let count = 0;
      let res = null;
      const a_len = a.array.length;
      const start = a_len - digit + i;
      const a_ = core.add(a.array.slice(0,start).join(""), remain);
      const b_str = b.array.join("");

      while(less){
        count++;
        const pre_n = n;
        n = core.multiplication(b_str, String(count));
        console.info("count", count, start, a_, b_str);
        if(core.isEqual(a_, n)){
          less = false;
          res = count;
          arr.push(res);
          remain = core.subtract(a_, pre_n);
          console.info("remain", remain);
          n = core.subtract(a_.array.joins(""), pre_n.array.join(""));
          break;
        }
        const large = core.getLarge(a_, n);
        if(core.isEqual(n, large)){
          less = false;
          res = count - 1;
          arr.push(res);
          n = core.getZero().array.join("");
          break;
        }
      }
    }
    console.info(arr);
  };

  calc({a: a_, b: b_, digit: digit});
  // const calc = function({a, b}){
  //   const array = [];
  //   const arr_a = a.array;
  //   const arr_b = b.array;
  //   for(let i = 0; i < arr_a.length; i++){
  //     const aa = arr_a[i] ? arr_a[i] : 0;
  //     const arr = new Array(i);
  //     arr.fill(0, 0, i);

  //     for(let j = 0; j < arr_b.length; j++){
  //       const bb = arr_b[j] ? arr_b[j] : 0;
  //       const remain = aa % bb;
  //       let res;
  //       if(remain > 0){
  //         res = 0;
  //       }else{
  //         res = aa / bb;
  //       }
        
  //       arr.push(res);

  //       const tgt_index = i + j;
  //       let tgt = array[tgt_index];
  //       if(!tgt){
  //         tgt = 0;
  //       }
  //       const new_tgt = tgt + res;
  //       array[tgt_index] = new_tgt;
  //     }
  //   }
  //   return core.fixCarry(array);
  // };

  const { new_array } = calc({
    a: {
      array: [...a_arr].reverse(),
      negative: a_.negative,
    },
    b: {
      array: [...b_arr].reverse(),
      negative: b_.negative
    },
  });

  const new_decimal_index = new_array.length - dec_length;

  return core.moldNumArray({
    array: [...new_array].reverse(),
    negative: negative,
    decimal_index: new_decimal_index
  });

};

core.divide = function(a, b){
  return core.division(a, b);
};

export default core;
