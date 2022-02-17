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
    is_num_array: true,
  };
  if(decimal_index === 0 || decimal_index > 0){
     o.decimal_index = decimal_index;
  }else{
    o.decimal_index = array.length;
  }

  return o;

};

core.numToArrayWithDecimal = function(n){
  if(n.is_num_array){
    return core.clone(n);
  }
  if(typeof n === "object"){
    return console.log("Paremeter is object.", n);
  }
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
  if(!n.is_num_array || !n.array || !n.decimal_index){
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
  const o = {
    small: null,
    large: null,
    equal: false
  };

  if(!a || !b){
    return o;
  }

  let a_ = a;
  let b_ = b;

  if(!a_.is_num_array){
    a_ = core.numToArrayWithDecimal(a_);
    if(!a_){
      return o;
    }
  }
  if(!b_.is_num_array){
    b_ = core.numToArrayWithDecimal(b_);
    if(!b_){
      return o;
    }
  }

  const a_array = a_.array;
  const b_array = b_.array;

  const a_len = a_array.length;
  const b_len = b_array.length;
  const a_str = a_array.join("");
  const b_str = b_array.join("");

  const a_int_len = a_.decimal_index;
  const b_int_len = b_.decimal_index;

  const a_dec_len = a_len - a_int_len;
  const b_dec_len = b_len - b_int_len;

  if(a_len === 1 && a_str === "0" && b_len === 1 && b_str === "0"){
    o.equal = true;
    return o;
  }
  if(!a_.negative && b_.negative){
    o.small = b_;
    o.large = a_;
    return o;
  }
  if(a_.negative && !b_.negative){
    o.small = a_;
    o.large = b_;
    return o;
  }

  const negative = a_.negative;

  const o_a_b = {
    large: negative ? b_ : a_,
    small: negative ? a_ : b_,
    equal: false,
  };
  const o_b_a = {
    large: negative ? a_ : b_,
    small: negative ? b_ : a_,
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

core.isSmall = function(a, b){
  return core.isEqual(core.getSmall(a, b), a);
};
core.isLarge = function(a, b){
  return core.isEqual(core.getLarge(a, b), a);
};

core.isZero = function(n){
  if(!n){
    return false;
  }
  if(!n.is_num_array){
    return false;
  }
  const zero = core.getZero();
  return core.isEqual(zero, n);
};

core.isOne = function(n){
  if(!n){
    return false;
  }
  if(!n.is_num_array){
    return false;
  }
  const one = core.numToArrayWithDecimal("1");
  return core.isEqual(one, n);
};

core.getZero = function(){
  return core.numToArrayWithDecimal("0");
};

core.getOne = function(){
  return core.numToArrayWithDecimal("1");
};


core.isNumArray = function(arr){
  if( arr instanceof Array ){
    for(let i = 0; i < arr.length; i++){
      if(!core.isNumber(arr[i]) ){
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

core.clone = function(n){
  if(!n.is_num_array){
    return null;
  }
  const o = {
    ...n,
    array: [...n.array],
  };
  return o;
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

  let a_ = null;
  let b_ = null;
  if(a.is_num_array){
    a_ = core.clone(a);
  }else{
    a_ = core.numToArrayWithDecimal(a ? a : 0);
  }
  if(b.is_num_array){
    b_ = core.clone(b);
  }else{
    b_ = core.numToArrayWithDecimal(b ? b : 0);
  }

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

  let a_ = null;
  let b_ = null;
  if(a.is_num_array){
    a_ = core.clone(a);
  }else{
    a_ = core.numToArrayWithDecimal(a ? a : 0);
  }
  if(b.is_num_array){
    b_ = core.clone(b);
  }else{
    b_ = core.numToArrayWithDecimal(b ? b : 0);
  }

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

core.getDecimal = function(n){
  const n_ = core.numToArrayWithDecimal(n);
  let str = "0.";
  const len = n_.array.length - n_.decimal_index;
  if(len > 0){
    for(let i = n_.decimal_index; i <= len; i++){
      const s = String(n_.array[i]);
      str = str + s;
    }
  }else{
    str = str + "0";
  }
  const num = core.numToArrayWithDecimal(str);
  return num;
};


core.division = function(a, b, need_remain){

  if(!a || !b){
    if(a !== 0 && b !== 0){
      return undefined;
    }
  }

  let a_ = null;
  let b_ = null;
  if(a.is_num_array){
    a_ = core.clone(a);
  }else{
    a_ = core.numToArrayWithDecimal(a ? a : 0);
  }
  if(b.is_num_array){
    b_ = core.clone(b);
  }else{
    b_ = core.numToArrayWithDecimal(b ? b : 0);
  }

  if(core.isZero(b_)){
    return undefined;
  }

  if(core.isZero(a_)){
    return {
      ...core.getZero(),
      remainder: core.getZero(),
    }
  }

  if(core.isOne(b_)){
    return {
      ...a_,
      remainder: core.getZero(),
    };
  }

  if(core.isEqual(a_, b_)){
    return {
      ...core.getOne(),
      remainder: core.getZero(),
    }
  }

  const a_negative = a_.negative;
  const b_negative = b_.negative;

  if(a_.negative){
    a_.negative = false;
  }

  if(b_.negative){
    b_.negative = false;
  }

  let negative;
  if(a_negative && b_negative){
    negative = false;
  }else if(a_negative || b_negative){
    negative = true;
  }else{
    negative = false;
  }

  const calc = function({a, b, max, need_remain}){
    const result_arr = [];
    let remain = core.getZero();
    const a_ = core.clone(a);
    const b_ = core.clone(b);
    let decimal_index = a.decimal_index;
    let decimal_index_remain = decimal_index;

    console.log("first calc", "remain: ", remain, "decimal_index: ", decimal_index, "decimal_index_remain: ", decimal_index_remain);

    let a_int = core.clone(a_);
    a_int.decimal_index = a_int.array.length;
    let a_zero_length = 0;
    const a_zero_res = a_.array.join("").match(/^0+/);
    if(a_zero_res && a_zero_res[0]){
      console.info("if(a_zero_res && a_zero_res[0])");
      a_zero_length = a_zero_res[0].length;
      a_int = core.numToArrayWithDecimal(a_int.array.slice(a_zero_length, a_int.array.length).join(""));
    }

    let b_int = core.clone(b_);
    b_int.decimal_index = b_int.array.length;
    let b_zero_length = 0;
    const b_zero_res = b_int.array.join("").match(/^0+/);
    if(b_zero_res && b_zero_res[0]){
      console.info("if(b_zero_res && b_zero_res[0])");
      b_zero_length = b_zero_res[0].length;
      b_int = core.numToArrayWithDecimal(b_int.array.slice(b_zero_length, b_int.array.length).join(""));
    }

    
    const zero_gap = a_zero_length - b_zero_length;
    const a_array = [...a_int.array];
    
    const a_decimal_length = a_.array.length - a_.decimal_index;
    const b_decimal_length = b_.array.length - b_.decimal_index;
    const decimal_gap = a_decimal_length - b_decimal_length;
    
    console.log("a_int: ", a_int);
    console.log("b_int: ", b_int);
    console.log("decimal_gap: ", decimal_gap);

    const times = Number(core.add(a_int.array.length, max).array.join(""));

    const a_len = a_int.array.length;
    let remain_is_decimal = false;
    let remain_arr = [0];
    let remain_for_modulo = [...a_.array];
    let remain_for_modulo2 = core.clone(a_);

    let decimal_count = 0;
    let remain_and_a_len_gap = 0;
    let c = 0;
    for(let i = 0; i < times; i++){
      c++;
      let is_less = true;
      let count = core.getZero();
      const remain1 = core.multiplication(remain, "10");
      const remain2 = String(a_array.slice(i, i + 1).length === 1 ? a_array.slice(i, i + 1)[0] : "0");
      remain = core.add(remain1, remain2);
      console.info("-- a in for", core.numArrayToString(a));
      console.info("-- b in for", core.numArrayToString(b));
      console.info("-- remain in for", core.numArrayToString(remain));
      console.info("-- c in for", c);

      console.info("-- a_ - remain", core.numArrayToString(core.subtract(a_, remain)));
      console.info("-- a_ - remain_for_modulo", remain_for_modulo);

      remain_and_a_len_gap = remain.array.length - a_len;
      let product = core.getZero();
      let product_for_modulo = core.getZero();
      if(i === a_len){
        console.info("-- if(i === a_len)");
        decimal_index = i;
        if(core.isZero(remain)){
          break;
        }else {
          remain_is_decimal = true;
          decimal_count = decimal_count++;
        }
      }else if(i > a_len){
        console.info("-- }else if(i > a_len){");
        decimal_count = decimal_count++;
        if(core.isZero(remain)){
          break;
        }
      }
      // else if(need_remain && core.isLarge(b, ))

      const max_count = max;
      while(is_less){
        count = core.add(count, "1");
        if(core.isLarge(count, max_count) && !need_remain){
          console.info("---- if(core.isLarge(count, max_count) && !need_remain){");
          is_less = false;
          break;
        }
        const pre_product = product;
        const pre_product_for_modulo = product_for_modulo;
        product = core.multiplication(b_int, count);
        product_for_modulo = core.multiplication(b_, count);
        console.info("product_for_modulo", core.numArrayToString(product_for_modulo));
        console.info("pre_product_for_modulo", core.numArrayToString(pre_product_for_modulo));

        if(core.isEqual(remain, product)){
          console.info("---- if(core.isEqual(remain, product)){");
          is_less = false;
          const result = count;
          result_arr.push(result);
          if(need_remain){
            console.info("---- in need_remain equal", "remain", core.numArrayToString(remain), "product", core.numArrayToString(product), "c", c);
            remain = core.getZero();
            const product_length = product.array.length;
            const pos = c - product_length;
            console.info("---- in need_remain equal", "pos", pos);
            
            for(let i = 0; i < product_length; i++){
              remain_for_modulo[i + pos] = remain_for_modulo[i + pos] - product.array[i];
            }
            console.info("---- in need_remain equal after", "remain_for_modulo", remain_for_modulo);

            remain_for_modulo2 = core.subtract(remain_for_modulo2, product_for_modulo);
            console.info("---- in need_remain equal after", "remain_for_modulo2", core.numArrayToString(remain_for_modulo2));

            
          }else{
            remain = core.subtract(remain, product);
          }
          break;
        }
        if(core.isLarge(product, remain)){
          console.info("---- if(core.isLarge(product, remain))0");
          is_less = false;
          if(need_remain){
            console.info("---- if(need_remain){ large", "product", core.numArrayToString(product), "pre_product", core.numArrayToString(pre_product), "remain", core.numArrayToString(remain), "c", c);

            const pre_product_length = pre_product.array.length;
            const start = c - pre_product_length;
            for(let i = start; i < pre_product_length; i++){
              remain_for_modulo[i] = remain_for_modulo[i] - pre_product.array[i];
            }
            console.info("---- if(need_remain){ large after", "remain_for_modulo", remain_for_modulo);

            remain_for_modulo2 = core.subtract(remain_for_modulo2, pre_product_for_modulo);
            console.info("---- if(need_remain){ large after", "remain_for_modulo2", core.numArrayToString(remain_for_modulo2));


          }
          // if(core.isLarge(pre_product, a) && need_remain){
          //   console.info("---- if(core.isLarge(pre_product, a) && need_remain){ koko1", "pre_product", core.numArrayToString(pre_product), "a", core.numArrayToString(a), "remain", core.numArrayToString(remain));
          //   break;
          // }
          const result = core.subtract(count, "1");
          result_arr.push(result);
          remain = core.subtract(remain, pre_product);

          console.info("---- if(core.isLarge(product, remain))1 pre_product", core.numArrayToString(pre_product));
          console.info("---- if(core.isLarge(product, remain))1 result_arr", result_arr.map(e => e.array[0]));
          console.info("---- if(core.isLarge(product, remain))1 remain", core.numArrayToString(remain));
          console.info("---- if(core.isLarge(product, remain))1 product", core.numArrayToString(product));
          // if(need_remain){
          //   remain_for_modulo.push(remain);
          // }
          if(remain_is_decimal){
            console.info("---- if(remain_is_decimal){");
            remain_arr.push(0);
          }
          break;
        }
      }
    }
    console.info("cccc c", c);
    console.info("cccc remain", remain);

    remain_arr.push(...remain.array);
    const new_arr = result_arr.flatMap(e => e.array);

    if(zero_gap > 0){
      for(let i = 0; i < zero_gap; i++){
        new_arr.unshift(0);
        decimal_index++;
      }
    }

    if(decimal_gap < 0){
      for(let i = 0; i < Math.abs(decimal_gap); i++){
        new_arr.push(0);
        decimal_index++;
      }
    }else if(decimal_gap > 0){
      for(let i = 0; i < Math.abs(decimal_gap); i++){
        new_arr.unshift(0);
      }
    }

    if(remain_and_a_len_gap > 0){
      for(let i = 0; i < remain_and_a_len_gap; i++){
        const tgt = remain_arr[0];
        if(tgt === 0){
          remain_arr.shift();
        }else{
          decimal_index_remain = decimal_index_remain - remain_and_a_len_gap;
        }
        remain_arr.push(0);
      }
    }else if(remain_and_a_len_gap < 0){
      const len = Math.abs(remain_and_a_len_gap);
      const arr = Array(len).fill(0);
      remain_arr.unshift(...arr);
    }

    if(remain_is_decimal){
      remain_arr = [...remain_arr];
    }

    if(need_remain){
      decimal_index_remain++;
      console.info("a_", a_);
      // remain_arr = remain_for_modulo;
      // decimal_index_remain = a_.decimal_index;
    }
    return {
      new_array: new_arr,
      decimal_index: decimal_index,
      remain_array: remain_arr,
      remain_decimal_index: decimal_index_remain,
      remain_for_modulo: remain_for_modulo,
      remain_for_modulo_decimal_index: a_.decimal_index,
    }
  };

  const max_times_if_not_divisible = need_remain ? core.getZero() : core.numToArrayWithDecimal("10");

  const { new_array, decimal_index, remain_array, remain_decimal_index, remain_for_modulo, remain_for_modulo_decimal_index } = calc({a: a_, b: b_, max: max_times_if_not_divisible, need_remain: need_remain});

  console.info("remain_for_modulo!!", remain_for_modulo, remain_for_modulo_decimal_index);

  const remainder = core.moldNumArray({
    array: [...remain_array],
    negative: negative,
    decimal_index: remain_decimal_index
  });

  const quotient = core.moldNumArray({
    array: [...new_array],
    negative: negative,
    decimal_index: decimal_index
  });

  return {
    ...quotient,
    remainder:remainder,
  }
  
};

core.divide = function(a, b, need_remain){
  return core.division(a, b, need_remain);
};

core.modulo = function(a, b){
  if(core.isLarge(b, a)){
    const a_ = core.numToArrayWithDecimal(a);
    return a_;
  }
  const { remainder } = core.division(a, b, true);
  return remainder;
};


export default core;
