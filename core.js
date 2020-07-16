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
    if(!core.isNumber(elm)){
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
    if(!core.isNumber(elm)){
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

  let head_zero = true;
  let is_decimal = false;
  for(let i = 0; i < arr.length; i++){

    const num = Number(arr[i]);
    const isNumber = core.isNumber(num);
    if(!isNumber && arr[i] === "."){
      is_decimal = true;
      continue;
    }else if(!isNumber){
      throw new Error("This function has been called with incorrect parameters");
    }else if(head_zero && num === 0 && !is_decimal){
      continue;
    }
    head_zero = false;

    if(is_decimal){
      decimal.push(num);
    }else{
      int.push(num);
    }
  }

  for(let i = decimal.length - 1; i >= 0; i--){
    const d = decimal[i];
    if(d === 0){
      decimal.pop();
    }else{
      break;
    }
  }

  return {
    int: int,
    decimal: decimal
  };
};

core.compare = function(a, b){
  if(!a || !b){
    return;
  }

  let a_arr, b_arr;
  if(a instanceof Array){
    a_arr = a;
  }else{
    a_arr = core.numToArrayWithDecimal2(a);
  }
  if(b instanceof Array){
    b_arr = b;
  }else{
    b_arr = core.numToArrayWithDecimal2(b);
  }

  if(a_arr[0] === 0){
    const new_a = [];
    let zero = true;
    for(let i = 0; i < a_arr.length; i++){
      const elm = a_arr[i];
      if(elm === 0 && zero){
        continue;
      }
      new_a.push(elm);
      zero = false;
    }
    a_arr = new_a;
  }

  if(b_arr[0] === 0){
    const new_b = [];
    let zero = true;
    for(let i = 0; i < b_arr.length; i++){
      const elm = b_arr[i];
      if(elm === 0 && zero){
        continue;
      }
      new_b.push(elm);
      zero = false;
    }
    b_arr = new_b;
  }

  const o = {
    equal: false,
    large: null,
    small: null
  };

  if(a_arr.length > a_arr.length){
    o.large = a;
    o.small = b;
    return o;
  }
  if(a_arr.length < a_arr.length){
    o.large = b;
    o.small = a;
    return o;
  }

  for(let i = 0; i < a_arr.length; i++){
    const aa = a_arr[i];
    const bb = b_arr[i];
    if(aa > bb){
      o.large = a;
      o.small = b;
      return o;
    }
    if(aa < bb){
      o.large = b;
      o.small = a;
      return o;
    }
  }

  o.equal = true;
  return o;

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

  const a_ = core.numToArrayWithDecimal2(a);
  const b_ = core.numToArrayWithDecimal2(b);
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
    for(let i = 0; i < arr_a.length; i++){
      const aa = arr_a[i] ? arr_a[i] : 0;
      const bb = arr_b[i] ? arr_b[i] : 0;
      let res = aa + bb;
      arr.push(res);
    }
    return core.fixCarry(arr);
  };

  const { dec_arr, dec_carry } = (function(){
    const length = a_dec.length < b_dec.length ? b_dec.legth : a_dec.length;
    const res = calc(a_dec.reverse(), b_dec.reverse());

    let carry = 0;
    if(res.length > length){
      carry = res.pop();
    }
    return {
      dec_arr: res,
      dec_carry: carry
    };
  })();

  let int_arr = (function(dec_carry){
    let res = calc(a_int.reverse(), b_int.reverse());

    if(dec_carry > 0){
      console.info(res);
      res = calc(res, [dec_carry]);
    }
    return res;
  })(dec_carry);

  return {
    int: int_arr.reverse(),
    decimal: dec_arr.reverse()
  };
};


export default core;
