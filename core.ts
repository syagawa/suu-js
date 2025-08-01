import {CompareObject, SuuNumber } from "./interfaces";

const core:any = {};
const settings = {
  calculation_modes: ["suu", "js"],
  calculation_mode: 0,
};


core.changeCalculationMode = function(mode: string){
  if(!mode){
    return;
  }
  const index = settings.calculation_modes.findIndex(m => m === mode);
  if(index >= 0){
    settings.calculation_mode = index;
  }
};

core.getCalculationMode = function(){
  const m = settings.calculation_modes[settings.calculation_mode];
  return m;
};

core.makeError = function(o: {message: string, variable: any, parameter: any}): Error{
  let error = new Error();
  try{
    const v = o.variable ? o.variable.toString() : "";
    const p = o.parameter ? o.parameter.toString() : "";
    let str = o.message;
    if(v){
      str = `${str}, ${v ? v : ""}`;
    }
    if(p){
      str = `${str}, ${p ? p : ""}`;
    }
    error = new Error(str);
  }catch(e: unknown){
    if(e instanceof Error){
      error = e;
    }
  }finally{
    return error;
  }
};

const isNumber = function(n): Boolean{
  if(typeof n === "number"){
    if(Number.isNaN(n)){
      return false;
    }else{
      return true;
    }
  }
  return false;
};

core.isSuuNumber = function(n): Boolean{
  if(n.is_num_array){
    return true;
  }
  return false;
};

core.moldNumArray = function({ array, negative, decimal_index }): SuuNumber | Error {
  if(!array){
    return core.makeError({ message: "Array is not exists", patameter: array});
  }

  if(typeof decimal_index !== "number" || isNaN(decimal_index)){
    return core.makeError({ message: "decimal_index is not a number", patameter: decimal_index});
  }
  try{
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

    const o: SuuNumber = {
      array: array,
      negative: !!negative,
      is_num_array: true,
      decimal_index: decimal_index,
      system: 10,
      getJSNumber: function(){
        return Number(core.numArrayToString(this));
      },
      getString: function(){
        return core.numArrayToString(this);
      },
    };
    if(decimal_index === 0 || decimal_index > 0){
      o.decimal_index = decimal_index;
    }else{
      o.decimal_index = array.length;
    }

    return o;
  }catch(e: unknown){
    if(e instanceof Error){
      return core.makeError({message: e.message, parameter: array});
    }else{
      return core.makeError({message: "unknown error", paramater: array});
    }
  }

};

core.numToArrayWithDecimal = function(n): SuuNumber | Error{
  if(!n && n !== 0){
    return core.makeError({message: "Parameter is undefined, null, or empty.", parameter: n});
  }

  if(n.is_num_array){
    return core.clone(n);
  }

  if(typeof n === "object"){
    return core.makeError({message: "Parameter is object.", parameter: n});
  }

  let str: string = String(n);
  let negative = false;
  while(str && str[0].match(/^-/)){
    str = str.replace(/^-/, "");
    negative = !negative;
  }

  let dec_index;
  let res = str.match(/\./g);
  if(res && res.length > 1){
    return core.makeError({message: "2 or more decimal points", parameter: n});
  }
  if(res && res.length === 1){
    const res1 = str.match(/\./);
    const first_index = res1?.index
    dec_index = first_index
    str = str.replace(/\./, "");
  }else{
    dec_index = str.length;
  }

  const arr: number[] = [];
  for(let i = 0; i < str.length; i++){

    const num = Number(str[i]);
    if(!isNumber(num)){
      return core.makeError({message: "This method has been called with incorrect parameters", parameter: num});
    }
    arr.push(num);
  }

  return core.moldNumArray({ array: arr, negative: negative, decimal_index: dec_index});

};

core.numArrayToString = function(n): string | Error {
  if(!n.is_num_array || !n.array || !n.decimal_index){
    return "";
  }
  try{
    const arr = [...n.array];
    arr.splice(n.decimal_index, 0, ".");
    let str = arr.join("");
    if(n.negative){
      str = `-${str}`;
    }

    return str.replace(/\.$/, "");
  }catch(err: unknown){
    if(err instanceof Error){
      return core.makeError({message: err.message, parameter: n});
    }else{
      return core.makeError({message: "unknown error", paramater: n});
    }
  }

};

core.compare = function(a, b): CompareObject | Error {
  try{
    if(!a && a !== 0){
      return core.makeError({ message: "Parameters are undefined, null, or empty.", parameter: [a, b]});
    }else if(!b && b !== 0){
      return core.makeError({ message: "Parameters are undefined, null, or empty.", parameter: [a, b]});
    }
  
    const o: CompareObject = {
      small: null,
      large: null,
      equal: false
    };

    if(core.getCalculationMode() === "js") {
      const a_num = a.getJSNumber();
      const b_num = b.getJSNumber();
      if(a_num === b_num){
        o.equal = true;
        return o;
      }else if(a_num < b_num){
        o.small = a;
        o.large = b;
        return o;
      }else if (a_num > b_num){
        o.small = b;
        o.large = a;
        return o;
      }
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

    const a_array: number[] = a_.array;
    const b_array: number[] = b_.array;

    const a_len: number = a_array.length;
    const b_len: number = b_array.length;
    const a_str: string = a_array.join("");
    const b_str: string = b_array.join("");

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
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: [a, b]})
    }else{
      return core.makeError({message: "unknown error", paramater: [a, b]});
    }
  }


};

core.getLarge = function(a, b): boolean {
  return core.compare(a, b).large;
};

core.getSmall = function(a, b): boolean {
  return core.compare(a, b).small;
};

core.isEqual = function(a, b): boolean {
  const res = core.compare(a, b);
  if(res.equal){
    return true;
  }
  return false;
};

core.isSmall = function(a, b): boolean {
  return core.isEqual(core.getSmall(a, b), a);
};

core.isLarge = function(a, b): boolean {
  return core.isEqual(core.getLarge(a, b), a);
};

core.isZero = function(n): boolean {
  if(!n){
    return false;
  }
  if(!n.is_num_array){
    return false;
  }

  if(core.getCalculationMode() === "js"){
    if(n.getJSNumber() === 0){
      return true;
    }
    return false;
  }

  const zero = core.getZero();
  return core.isEqual(zero, n);
};

core.isOne = function(n): boolean {
  if(!n){
    return false;
  }
  if(!n.is_num_array){
    return false;
  }

  if(core.getCalculationMode() === "js"){
    if(n.getJSNumber() === 1){
      return true;
    }
    if(n.getJSNumber() === -1){
      return true;
    }
    return false;
  }

  const one = core.getOne();
  const minus_one = core.getSuuNumber("-1")
  if(core.isEqual(one, n)){
    return true;
  }else if(core.isEqual(minus_one, n)){
    return true;
  }else{
    return false;
  }
};

core.getZero = function(): SuuNumber {
  return core.numToArrayWithDecimal("0");
};

core.getOne = function(): SuuNumber {
  return core.numToArrayWithDecimal("1");
};

core.fixCarry = function(arr: number[], minus: boolean): {new_array: number[], minus: boolean} {
  try {
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
      const cache: number[] = [];
      arr.forEach( (elm: number) => {
        cache.push(-elm);
      });
      arr = cache;
    }
    const new_arr: number[] = [];
    let carry = 0;
    for(let i = 0; i < arr.length; i++){
      let val = Number(arr[i] + carry);
      if(val > 9){
        const arr1 = String(val).split("");
        val = Number(arr1[arr1.length - 1]);
        const arr2 = arr1.slice(0, arr1.length - 1);
        carry = Number(arr2.join(""));
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

    return {
      new_array: new_arr,
      minus: minus_
    };
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: [arr, minus]})
    }else{
      return core.makeError({message: "unknown error", paramater: [arr, minus]});
    }
  }


};

core.clone = function(n: any): SuuNumber | Error {
  try{
    if(!n){
      return core.makeError({message: "Parameter is not exists", parameter: n});
    }
    if(!n.is_num_array){
      return core.makeError({message: "Parameter is not compatible", parameter: n});
    }
    const o = {
      ...n,
      array: [...n.array],
    };
    return o;
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: [n]})
    }else{
      return core.makeError({message: "unknown error", paramater: [n]});
    }
  }
};

const add_and_subtract_js = function(a, b, mode) {

  if(!a || !b){
    if(a !== 0 && b !== 0){
      return core.makeError({message: "Parameters are must be a Number or a String.", parameter: [a, b]});
    }
  }
  
  let plus;
  if(!mode){
    return core.makeError({message: "Parameters mode is required", parameter: [a, b, mode]});;
  }else if(mode === "+"){
    plus = true;
  }else if(mode === "-"){
    plus = false;
  }else{
    return core.makeError({message: "mode must be '+' or '-'.", parameter: mode});
  }

  try{
    const a_s = core.numArrayToString(a);
    const b_s = core.numArrayToString(b);
  
    const a_n = Number(a_s);
    const b_n = Number(b_s);

    if(plus){
      return a_n + b_n;
    }else{
      return a_n - b_n;
    }  
  }catch(err: Error | any){
    return core.makeError({message: err.message, parameter: [a, b, mode]});
  }

};


core.add_and_subtract = function(a, b, mode): SuuNumber | Error {
  if(!a || !b){
    if(a !== 0 && b !== 0){
      return core.makeError({message: "Parameters are must be a Number or a String.", parameter: [a, b]});
    }
  }
  
  if(core.getCalculationMode() === "js"){
    return add_and_subtract_js(a, b, mode);
  }

  let plus;
  if(!mode){
    return core.makeError({message: "Parameters mode is required", parameter: [a, b, mode]});;
  }else if(mode === "+"){
    plus = true;
  }else if(mode === "-"){
    plus = false;
  }else{
    return core.makeError({message: "mode must be '+' or '-'.", parameter: mode});
  }

  try {
    let a_: SuuNumber = core.getZero();
    let b_: SuuNumber = core.getZero();
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

    const a_is_zero: boolean = core.isZero(a_);
    const b_is_zero: boolean = core.isZero(b_);

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

    const a_dec_length: number = a_.array.length - a_.decimal_index;
    const b_dec_length: number = b_.array.length - b_.decimal_index;

    const dec_gap: number = a_dec_length - b_dec_length;

    if(dec_gap > 0){
      b_arr.push(...Array(dec_gap).fill(0));
    }else if(dec_gap < 0){
      a_arr.push(...Array(Math.abs(dec_gap)).fill(0));
    }

    const calc = function({a, b, plus}): { new_array: number[], minus: boolean } {
      const arr: number[] = [];
      let len = a.array.length;
      if(a.array.length < b.array.length){
        len = b.array.length;
      }
      const arr_a: number[] = a.array;
      const arr_b: number[] = b.array;
      const a_one: number = a.negative ? -1 : 1;
      const b_one: number = b.negative ? -1 : 1;
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
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: [a, b]})
    }else{
      return core.makeError({message: "unknown error", paramater: [a, b]});
    }
  }

};

core.add = function(a, b): SuuNumber | Error {
  return core.add_and_subtract(a, b, "+");
};

core.subtract = function(a, b): SuuNumber | Error {
  return core.add_and_subtract(a, b, "-");
};


const multiplication_js = function(a, b) {

  if(!a || !b){
    if(a !== 0 && b !== 0){
      return core.makeError({message: "Parameters are must be a Number or a String.", parameter: [a, b]});
    }
  }
  
  try{
    const a_s = core.numArrayToString(a);
    const b_s = core.numArrayToString(b);
  
    const a_n = Number(a_s);
    const b_n = Number(b_s);
  
    return a_n * b_n;
  }catch(err: Error | any){
    return core.makeError({message: err.message, parameter: [a, b]});
  }

};

core.multiplication = function(a, b): SuuNumber | Error {

  if(!a || !b){
    if(a !== 0 && b !== 0){
      return core.makeError({message: "Parameters are not exists", parameter: [a, b]});
    }
  }

  if(core.getCalculationMode() === "js"){
    return multiplication_js(a, b);
  }

  let a_: SuuNumber = core.getZero();
  let b_: SuuNumber = core.getZero();
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

  if(core.isOne(a_) && core.isLarge(a_, "0")){
    return b_;
  }

  if(core.isOne(b_) && core.isLarge(b_, "0")){
    return a_;
  }

  try{
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
      const array: number[] = [];
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
          let tgt: number = array[tgt_index];
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
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: [a, b]})
    }else{
      return core.makeError({message: "unknown error", paramater: [a, b]});
    }
  }

};

core.multiple = function(a, b): SuuNumber | Error {
  return core.multiplication(a, b);
};

core.getDecimal = function(n): SuuNumber | Error {
  try{
    const n_ = core.numToArrayWithDecimal(n);
    let str = "0.";
    const len = n_.array.length;
    if(len > 0){
      for(let i = n_.decimal_index; i < len; i++){
        const s = String(n_.array[i]);
        str = str + s;
      }
    }else{
      str = str + "0";
    }
    const num = core.numToArrayWithDecimal(str);
    return num;
  }catch(err){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: n})
    }else{
      return core.makeError({message: "unknown error", paramater: n});
    }
  }
};

const division_js = function(a, b) {

  if(!a || !b){
    if(a !== 0 && b !== 0){
      return core.makeError({message: "Parameters are must be a Number or a String.", parameter: [a, b]});
    }
  }
  
  try{
    const a_s = core.numArrayToString(a);
    const b_s = core.numArrayToString(b);
  
    const a_n = Number(a_s);
    const b_n = Number(b_s);
 
    return a_n / b_n;
  }catch(err: Error | any){
    return core.makeError({message: err.message, parameter: [a, b]});
  }

};



core.division = function(a, b): SuuNumber | Error | string {

  try {
    if(!a || !b){
      if(a !== 0 && b !== 0){
        return core.makeError({message: "Parameters are not exists", parameter: [a, b]});
      }
    }

    let a_: SuuNumber = core.getZero();
    let b_: SuuNumber = core.getZero();
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

    if(core.getCalculationMode() === "js"){
      return division_js(a_, b_);
    }

    if(core.isZero(b_)){
      if(core.isLarge(a_, "0")){
        return "Infinity";
      }else if(core.isSmall(a_, "0")){
        return "Negative Infinity";
      }
      return "Not a Number";
    }

    if(core.isZero(a_)){
      return {
        ...core.getZero(),
        remainder: core.getZero(),
      }
    }

    if(core.isOne(b_) && core.isLarge(b_, "0")){
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

    const calc = function({a, b, max}){
      const result_arr: SuuNumber[] = [];
      let remain = core.getZero();
      const a_ = core.clone(a);
      const b_ = core.clone(b);
      let decimal_index = a.decimal_index;
      let decimal_index_remain = decimal_index;

      let a_int = core.clone(a_);
      a_int.decimal_index = a_int.array.length;
      let a_zero_length = 0;
      const a_zero_res = a_.array.join("").match(/^0+/);
      if(a_zero_res && a_zero_res[0]){
        a_zero_length = a_zero_res[0].length;
        a_int = core.numToArrayWithDecimal(a_int.array.slice(a_zero_length, a_int.array.length).join(""));
      }

      let b_int = core.clone(b_);
      b_int.decimal_index = b_int.array.length;
      let b_zero_length = 0;
      const b_zero_res = b_int.array.join("").match(/^0+/);
      if(b_zero_res && b_zero_res[0]){
        b_zero_length = b_zero_res[0].length;
        b_int = core.numToArrayWithDecimal(b_int.array.slice(b_zero_length, b_int.array.length).join(""));
      }

      const zero_gap = a_zero_length - b_zero_length;
      const a_array = [...a_int.array];
      const a_decimal_length = a_.array.length - a_.decimal_index;
      const b_decimal_length = b_.array.length - b_.decimal_index;
      const decimal_gap = a_decimal_length - b_decimal_length;

      const times = Number(core.add(a_int.array.length, max).array.join(""));

      const a_len = a_int.array.length;
      let remain_is_decimal = false;
      let remain_arr = [0];

      let decimal_count = 0;
      let remain_and_a_len_gap = 0;
      for(let i = 0; i < times; i++){
        let is_less = true;
        let count = core.getZero();
        const remain1 = core.multiplication(remain, "10");
        const remain2 = String(a_array.slice(i, i + 1).length === 1 ? a_array.slice(i, i + 1)[0] : "0");
        remain = core.add(remain1, remain2);

        remain_and_a_len_gap = remain.array.length - a_len;
        let product = core.getZero();
        if(i === a_len){
          decimal_index = i;
          if(core.isZero(remain)){
            break;
          }else {
            remain_is_decimal = true;
            decimal_count = decimal_count++;
          }
        }else if(i > a_len){
          decimal_count = decimal_count++;
          if(core.isZero(remain)){
            break;
          }
        }

        const max_count = max;
        while(is_less){
          count = core.add(count, "1");
          if(core.isLarge(count, max_count)){
            is_less = false;
            break;
          }
          const pre_product = product;
          product = core.multiplication(b_int, count);

          if(core.isEqual(remain, product)){
            is_less = false;
            const result = count;
            result_arr.push(result);
            remain = core.subtract(remain, product);
            break;
          }
          if(core.isLarge(product, remain)){
            is_less = false;
            const result = core.subtract(count, "1");
            result_arr.push(result);
            remain = core.subtract(remain, pre_product);

            if(remain_is_decimal){
              remain_arr.push(0);
            }
            break;
          }
        }
      }

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

      return {
        new_array: new_arr,
        decimal_index: decimal_index,
        remain_array: remain_arr,
        remain_decimal_index: decimal_index_remain,
      }
    };

    const max_times_if_not_divisible = core.numToArrayWithDecimal("10");

    const { new_array, decimal_index, remain_array, remain_decimal_index} = calc({a: a_, b: b_, max: max_times_if_not_divisible});


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
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: [a, b]})
    }else{
      return core.makeError({message: "unknown error", paramater: [a, b]});
    }
  }
  
};

core.divide = function(a, b): SuuNumber | Error {
  return core.division(a, b);
};

core.floor = function(num): SuuNumber | Error {
  try{
    const n = core.numToArrayWithDecimal(num);
    const is_decimal = n.decimal_index < n.array.length;
    const dec = n.array.slice(n.decimal_index, n.array.length);
    const dec_n = core.numToArrayWithDecimal(dec.join(""));
    if(core.isZero(dec_n)){
      return n;
    }
    let n_ = {
      ...n,
      array: n.array.slice(0, n.decimal_index)
    };
    if(n.negative && is_decimal){
      n_ = core.subtract(n_, "1");
    }
    return n_;
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: num})
    }else{
      return core.makeError({message: "unknown error", paramater: num});
    }
  }
};

core.ceil = function(num: SuuNumber): SuuNumber | Error {
  try{
    const n = core.numToArrayWithDecimal(num);
    const is_decimal = n.decimal_index < n.array.length;
    const dec = n.array.slice(n.decimal_index, n.array.length);
    const dec_n = core.numToArrayWithDecimal(dec.join(""));
    if(core.isZero(dec_n)){
      return n;
    }
    let n_ = {
      ...n,
      array: n.array.slice(0, n.decimal_index)
    };
    if(!n.negative && is_decimal){
      n_ = core.add(n_, "1");
    }
    return n_;
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: num})
    }else{
      return core.makeError({message: "unknown error", paramater: num});
    }
  }

};


core.modulo = function(a, b): SuuNumber | Error | string {
  try{
    if(!a || !b){
      if(a !== 0 && b !== 0){
        return core.makeError({message: "Parameters are not exists", parameter: [a, b]});
      }
    }

    let a_ = core.getZero();
    let b_ = core.getZero();
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
      if(core.isLarge(a_, "0")){
        return "Infinity";
      }else if(core.isSmall(a_, "0")){
        return "Negative Infinity";
      }
      return "Not a Number";
    }

    if(core.isZero(a_)){
      return {
        ...core.getZero(),
        remainder: core.getZero(),
      }
    }

    const a_posi = core.clone(a_);
    const b_posi = core.clone(b_);
    a_posi.negative = false;
    b_posi.negative = false;

    if(core.isLarge(b_posi, a_posi)){
      const a_ = core.numToArrayWithDecimal(a);
      return a_;
    }

    if(core.isEqual(a_, b_)){
      return {
        ...core.getZero(),
        remainder: core.getZero(),
      }
    }

    let negative;
    if(a_.negative){
      negative = true;
    }else{
      negative = false;
    }

    const calc = function({a, b}){
      const divided = core.divide(a, b);
      const floored = core.floor(divided);
      const multipled = core.multiple(b, floored);
      const res = core.subtract(a, multipled);
      return res;
    };

    const res = calc({a: {...a_, negative: false}, b: {...b_, negative: false} });

    const quotient = core.moldNumArray({
      ...res,
      negative: negative,
    });

    return {
      ...quotient,
    }
  }catch(err: unknown){
    if(err instanceof Error){
      return this.makeError({message: err.message, parameter: [a, b]})
    }else{
      return core.makeError({message: "unknown error", paramater: [a, b]});
    }
  }
  
};

core.opposite = (n: any) => {
  const num = core.getSuuNumber(n);
  const op = core.multiple(num, "-1");
  return op;
};

const getHalfWithFloor = (n: any) => {
  const num = core.getSuuNumber(n);
  const half = core.divide(num, "2");
  const res = core.floor(half);
  return res;
};

core.factorization = (n: any, square?: boolean) => {
  const num = core.getSuuNumber(n);

  if(num.name === "Error"){
    return num;
  }

  if(!square){
    square = false;
  }

  const array: SuuNumber[] = [];
   if(core.isZero(num)){
    return array;
  }

  if(core.isOne(num)){
    return array;
  }
  let bool = true;
  const half = getHalfWithFloor(num);
  let one = half;
  let two = half;

  while(bool){
    const result = core.multiple(one, two);
    if(core.isEqual(result, num)){
      array.push(...[one, two]);
      break;
    }else{
      if(core.isEqual(two, "1") && core.isEqual(one, "1")){
        break;
      }else if(square){
        one = core.subtract(one, "1");
        two = one;
      }else if(core.isEqual(two, "1")){
        one = core.subtract(one, "1");
        two = one;
      }else if(core.isEqual(one, "1")){
        break;
      }else{
        one = one;
        two = core.subtract(two, "1");
      }
    }
  }
  return array;
};



core.squareRoot = (n: any, approximate: boolean) => {
  const num = core.getSuuNumber(n);
  if(core.isZero(num)){
    return core.getZero();
  }

  if(core.isOne(num)){
    return core.getOne();
  }
  let res = {
    approximate: approximate ? true : false,
    result: null
  };
  let res1 = core.factorization(num, true);
  if(res1.length === 0 && approximate){
    let num2 = num;
    let res2: SuuNumber[] | null = null;
    while(true){
      num2 = core.subtract(num2, "1");
      if(core.isZero(num2)){
        break;
      }
      res2 = core.factorization(num2, true);
      if(res2 && res2.length === 2){
        res1 = res2;
        break;
      }
    }
  }

  res.result = res1[0];
  
  return res;
};

core.squareRootWithDecimal = (n: SuuNumber) => {
  const num = core.getSuuNumber(n);
  const res1 = core.squareRoot(num, true);
  let res2 = null;

  if(res1.result){
    res2 = core.multiple(res1.result, res1.result);
    if(core.isEqual(res2, num)){
      return res1;
    }

    const remain = core.subtract(num, res2);
    console.log(remain);
  }else{
    return res1;
  }


  //return res;
};


core.getSuuNumber = (n: any) => {
  return core.numToArrayWithDecimal(n);
};

export default core;
