import core from "./core.js";

const Su = function(n, option){
  if(!n){
    n = 0;
  }
  if(!option){
    option = {};
  }

  let str = String(n);

  let negative = false;
  if(str[0] === "-"){
    str = str.slice(1, str.length);
    negative = true;
  }
  if(!negative && option && option.negative){
    negative = true;
  }

  if(isNaN(Number(str))){
    str = "0";
  }
  if(str === "0"){
    negative = false;
  }

  let parts = str.split(".");
  let int_str = parts[0];
  let decimal_str = parts[1];
  if(int_str){
    const int0 = int_str.match(/0/g);
    if(int0 && int0.length === int_str.length){
      int_str = "0";
    }
    let new_int_str = "";
    let start_zero = true;
    for(let i = 0; i <int_str.length; i++){
      if(int_str[i] !== "0" || !start_zero){
        start_zero = false;
        new_int_str += int_str[i];
      }
    }
    if(!new_int_str){
      int_str = "0";
    }else{
      int_str = new_int_str;
    }
  }

  if(decimal_str){
    const dec0 = decimal_str.match(/0/g);
    if(dec0 && dec0.length === decimal_str.length){
      decimal_str = "0";
    }
    let end_zero = true;
    let new_decimal_str = "";
    for(let i = decimal_str.length - 1; i >= 0; i--){
      if(decimal_str[i] !== "0" || !end_zero){
        end_zero = false;
        new_decimal_str = decimal_str[i] + new_decimal_str;
      }
    }
    if(!new_decimal_str){
      decimal_str = "0";
    }else{
      decimal_str = new_decimal_str;
    }

  }

  let int_arr = core.numToArray(int_str);
  let decimal_arr = decimal_str ? core.numToArray(decimal_str) : [0];

  this.integer = int_arr;
  this.decimal = decimal_arr;
  this.negative = negative ? true : false;
  
  let denominator = [1];

  for(let i = 0; i < this.decimal.length; i++){
    denominator.push(0);
  }

  this.fraction = {
    numerator: this.integer.concat(this.decimal),
    denominator: denominator
  };

};


export default Su;