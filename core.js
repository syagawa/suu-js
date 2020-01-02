
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

  var arr = [];
  var str = String(n);
  var len = str.length;
  for(var i = 0; i < len; i++){
    var elm = Number(str.slice(i, i + 1));
    if(!this.isNumber(elm)){
      return "This function has been called with incorrect parameters";
    }
    arr.push(elm);
  }

  return arr;

};

core.isNumArray = function(arr){
  if( arr instanceof Array ){
    for(var i = 0; i < arr.length; i++){
      if( !this.isNumber(arr[i]) ){
        return false;
      }
    }
    return true;
  }
};

// todo 0start
core.arraySummation = function(a, b){
  if( !(a instanceof Array) ){
    a = core.numToArray(a);
  }
  if( !(b instanceof Array) ){
    b = core.numToArray(b);
  }

  if(!core.isNumArray(a) || !core.isNumArray(b)){
    return;
  }
  if(S.isZero(a[0]) && S.isZero(b[0])){
    return {
      array: [0],
      string: "0",
      number: 0,
      length: 1
    };
  }

  const A = makeSu(a);
  const B = makeSu(b);

  console.log(A,B);

  var res = core.getLarger(a, b);
  var arr_a = res[0];
  var arr_b = res[1];
  var len = arr_a.length;

  var gap = len - arr_b.length;

  var over = 0, arr_c = [];
  for(var i = len - 1; i >= 0; i--){
    var _res;
    var elm_a = arr_a[i];
    var elm_b = arr_b[i - gap] || 0;
    _res = elm_a + elm_b + over;
    if(_res >= 10){
      over = 1;
      _res = _res - 10;
    }else{
      over = 0;
    }
    arr_c.unshift(_res);
  }
  if(over > 0){
    arr_c.unshift(over);
  }

  const result = makeSu(arr_c);

  return result;
};

core.getLarger = function(a, b){
  var arr_a = [], arr_b = [];
  for(var i = 0; i < a.length; i++){
    var elm_a = a[i];
    if(elm_a === 0 && arr_a.length === 0){
      continue;
    }
    if(elm_a >=  0 && elm_a < 10){
      arr_a.push(elm_a);
    }
  }

  for(var j = 0; j < b.length; j++){
    var elm_b = b[j];
    if(elm_b === 0 && arr_b.length === 0){
      continue;
    }
    if(elm_b >=  0 && elm_b < 10){
      arr_b.push(elm_b);
    }
  }

  var res;
  if(arr_a.length > arr_b.length){
    res = [a, b];
  }else if(arr_a.length < arr_b.length){
    res = [b, a];
  }else{
    for(var k = 0; k < arr_a.length; k++){
      var elm_aa = arr_a[k];
      var elm_bb = arr_b[k];
      if(elm_aa > elm_bb){
        res = [a, b];
        break;
      }else if(elm_aa < elm_bb){
        res = [b, a];
        break;
      }else{
        res = [a, b];
      }
    }
  }
  return res;
};

core.isLarge = function(a, b){
  if(core.isEqual(a, b)){
    return false;
  }
  var res = core.getLarger(a, b);
  if(res[0] === a){
    return true;
  }else{
    return false;
  }
};

core.isEqual = function(a, b){
  if(!core.isNumArray(a) || !core.isNumArray(b)){
    return;
  }
  if(a.length === b.length){
    for(var i = 0; i < a.length; i++){
      if(a[i] !== b[i]){
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
  if(S.isZero(a[0]) || S.isZero(b[0])){
    return;
  }

  var negative = false;
  var res = core.getLarger(a, b);
  if(res[0] === b){
    negative = true;
  }

  var arr_a = res[0];
  var arr_b = res[1];
  var len = arr_b.length;

  var gap = arr_a.length - len;

  var arr_c = [];

  for(var i = 0; i < gap; i++){
    arr_c.push(arr_a[i]);
  }

  for(var j = 0; j < len; j++){
    var elm_b = arr_b[j];
    var elm_a = arr_a[j + gap];
    var higher_digit = arr_c[arr_c.length - 1];
    if(elm_b <= elm_a){
      arr_c.push( elm_a - elm_b );
    }else{
      arr_c[arr_c.length - 1] = higher_digit - 1;
      arr_c.push( 10 + elm_a - elm_b);
    }
  }

  var str = arr_c.join("");
  var m = str.match(/[^0+?]/);
  if(m){
    str = str.slice(m.index);
    arr_c = arr_c.slice(m.index);
  }else{
    str = "0";
  }
  var num = Number(str);
  var leng = arr_c.length;

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
  if(S.isZero(a[0]) || S.isZero(b[0])){
    return;
  }

  var res_arrs = [],
      len_a = a.length,
      len_b = b.length;

  for(var i = len_a - 1; i >= 0; i--){
    var elm_a = a[i];
    var over = 0;
    var res_arr = [];
    for(var j = len_b - 1; j >= 0; j--){
      var elm_b = b[j];
      var res = (elm_a * elm_b) + over;
      over = 0;
      var arr = String(res).split("");
      if(arr.length === 2){
        res = Number(arr[1]);
        over = Number(arr[0]);
      }
      res_arr.unshift(res);
    }
    if(over > 0){
      res_arr.unshift(over);
    }
    var pad = len_a -i - 1;
    for(var k = 0; k < pad; k++){
      res_arr.push(0);
    }
    // console.log(res_arr);
    res_arrs.push(res_arr);
  }

  var before = [0];
  var r = "";
  for(var l = 0; l < res_arrs.length; l++){
     r = core.arraySummation(res_arrs[l], before).array;
    before = r;
  }

  var str = r.join("");
  var num = Number(str);
  var leng = r.length;

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
  if(S.isZero(a[0]) || S.isZero(b[0])){
    return;
  }

  let temp = [0];
  let sum = [0];
  while(core.isLarge(a, sum) || core.isEqual(a, sum)){
    // core.getLarger(sum, a);
    temp = core.arraySummation(temp, [1]).array;
    // console.log(temp);
    sum = core.arrayMultiplication(b,temp).array;
    // console.log(a, sum, core.isLarge(a, sum));

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
