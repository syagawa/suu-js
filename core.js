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


core.arraySubtraction = function(a, b){
  if( !(a instanceof Array) ){
    a = core.numToArray(a);
  }
  if( !(b instanceof Array) ){
    b = core.numToArray(b);
  }

  if(!core.isNumArray(a) || !core.isNumArray(b)){
    return;
  }
  if(core.isZero(a[0]) || core.isZero(b[0])){
    return;
  }

  let negative = false;
  const res = core.getLarger(a, b);
  if(res[0] === b){
    negative = true;
  }

  const arr_a = res[0];
  const arr_b = res[1];
  const len = arr_b.length;

  const gap = arr_a.length - len;

  let arr_c = [];

  for(let i = 0; i < gap; i++){
    arr_c.push(arr_a[i]);
  }

  for(let i = 0; i < len; i++){
    const elm_b = arr_b[i];
    const elm_a = arr_a[i + gap];
    const higher_digit = arr_c[arr_c.length - 1];
    if(elm_b <= elm_a){
      arr_c.push( elm_a - elm_b );
    }else{
      arr_c[arr_c.length - 1] = higher_digit - 1;
      arr_c.push( 10 + elm_a - elm_b);
    }
  }

  let str = arr_c.join("");
  const m = str.match(/[^0+?]/);
  if(m){
    str = str.slice(m.index);
    arr_c = arr_c.slice(m.index);
  }else{
    str = "0";
  }
  const num = Number(str);
  const leng = arr_c.length;

  return {
    array: arr_c,
    string: negative ? "-" + str : str,
    number: negative ? -num : num,
    length: leng,
    negative: negative
  };

};

core.arrayMultiplication = function(a, b){
  if( !(a instanceof Array) ){
    a = core.numToArray(a);
  }
  if( !(b instanceof Array) ){
    b = core.numToArray(b);
  }

  if(!core.isNumArray(a) || !core.isNumArray(b)){
    return;
  }
  if(core.isZero(a[0]) || core.isZero(b[0])){
    return;
  }

  const res_arrs = [],
      len_a = a.length,
      len_b = b.length;

  for(let i = len_a - 1; i >= 0; i--){
    const elm_a = a[i];
    let over = 0;
    const res_arr = [];
    for(let j = len_b - 1; j >= 0; j--){
      const elm_b = b[j];
      let res = (elm_a * elm_b) + over;
      over = 0;
      const arr = String(res).split("");
      if(arr.length === 2){
        res = Number(arr[1]);
        over = Number(arr[0]);
      }
      res_arr.unshift(res);
    }
    if(over > 0){
      res_arr.unshift(over);
    }
    const pad = len_a -i - 1;
    for(let i = 0; i < pad; i++){
      res_arr.push(0);
    }
    res_arrs.push(res_arr);
  }

  let before = [0];
  let r = "";
  for(let i = 0; i < res_arrs.length; i++){
    r = core.arraySummation(res_arrs[i], before).array;
    before = r;
  }

  const str = r.join("");
  const num = Number(str);
  const leng = r.length;

  return {
    array: r,
    string: str,
    number: num,
    length: leng
  };
};

core.arrayDivision = function(a, b){
  if( !(a instanceof Array) ){
    a = core.numToArray(a);
  }
  if( !(b instanceof Array) ){
    b = core.numToArray(b);
  }
  if(!core.isNumArray(a) || !core.isNumArray(b)){
    return;
  }
  if(core.isZero(a[0]) || core.isZero(b[0])){
    return;
  }

  let temp = [0];
  let sum = [0];
  while(core.isLarge(a, sum) || core.isEqual(a, sum)){
    temp = core.arraySummation(temp, [1]).array;
    sum = core.arrayMultiplication(b,temp).array;
  }

  let res;
  let remainder = 0;
  if(core.isEqual(a, sum)){
    res = temp;
  }else{
    res = core.arraySubtraction(temp, [1]);
    sum = core.arraySubtraction(sum, b).array;
    remainder = core.arraySubtraction(a, sum).array;
  }

  res.remainder = remainder;

  return res;

};

export default core;
