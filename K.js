import { MAX, MIN } from "./constants.js";
import { core } from "./core.js";
import { makeSu } from "./index.js";

// todo 0start
const arraySummation = function(a, b){
  if( !(a instanceof Array) ){
    a = core.numToArray(a);
  }
  if( !(b instanceof Array) ){
    b = core.numToArray(b);
  }

  if(!core.isNumArray(a) || !core.isNumArray(b)){
    return;
  }
  if(core.isZero(a[0]) && core.isZero(b[0])){
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

const getLarger = function(a, b){
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

const isLarge = function(a, b){
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

const isEqual = function(a, b){
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
