// const matrix01 = [
//   ["0","0","0"],["0","1","1"],["1","0","1"],["1","1","10"],
// ];

const matrix10_add_subtract = [
["0","0","0"],["0","1","1"],["0","2","2"],["0","3","3"],["0","4","4"],["0","5", "5"],["0","6", "6"],["0","7", "7"],["0","8", "8"],["0","9", "9"],
              ["1","1","2"],["1","2","3"],["1","3","4"],["1","4","5"],["1","5", "6"],["1","6", "7"],["1","7", "8"],["1","8", "9"],["1","9","10"],
                            ["2","2","4"],["2","3","5"],["2","4","6"],["2","5", "7"],["2","6", "8"],["2","7", "9"],["2","8","10"],["2","9","11"],
                                          ["3","3","6"],["3","4","7"],["3","5", "8"],["3","6", "9"],["3","7","10"],["3","8","11"],["3","9","12"],
                                                        ["4","4","8"],["4","5", "9"],["4","6","10"],["4","7","11"],["4","8","12"],["4","9","13"],
                                                                      ["5","5","10"],["5","6","11"],["5","7","12"],["5","8","13"],["5","9","14"],
                                                                                     ["6","6","12"],["6","7","13"],["6","8","14"],["6","9","15"],
                                                                                                    ["7","7","14"],["7","8","15"],["7","9","16"],
                                                                                                                   ["8","8","16"],["8","9","17"],
                                                                                                                                  ["9","9","18"],
];

const addAndSubtract = (a, operator, b) => {
  //  a,   b,   c > 1,   2,   3
  // a +  b =  c > 1 +  2 =  3 ABC
  // b +  a =  c > 2 +  1 =  3 BAC
  // c + -a =  b > 3 + -2 =  1 CAB
  // c + -b =  a > 3 + -1 =  2 CBA
  // a + -c = -b > 1 + -3 = -2 ACB
  // b + -c = -a > 2 + -3 = -1 BCA

  let matrix = matrix10_add_subtract;
  let result = "";
  if(!a || !operator || !b){
    return result;
  }

  for(let i = 0; i < matrix.length; i++){
    const [A, B, C] = matrix[i];
    // a +  b =  c > 1 +  2 =  3 ABC
    if(operator === "+"){
      // c + -a =  b > 3 + -2 =  1 CAB
      if(a === A && b === B){
        console.log("ABC", matrix[i]);
        result = C;
        break;
      }
      // b +  a =  c > 2 +  1 =  3 BAC
      if(a === B && b === A){
        console.log("BAC", matrix[i]);
        result = C;
        break;
      }
    }else if(operator === "-"){
      // c + -a =  b > 3 + -2 =  1 CAB
      if(a === C && b === A){
        console.log("CAB", matrix[i]);
        result = B;
        break;
      }
      // c + -b =  a > 3 + -1 =  2 CBA
      if(a === C && b === B){
        console.log("CBA", matrix[i]);
        result = A;
        break;
      }
      // a + -c = -b > 1 + -3 = -2 ACB
      if(a === A && b === C){
        console.log("ACB", matrix[i]);
        result = `-${B}`;
        break;
      }
    
      // b + -c = -a > 2 + -3 = -1 BCA
      if(a === B && b === C){
        console.log("BCA", matrix[i]);
        result = `-${A}`;
        break;
      }
    }
  }
  return result;

};


const numbersReg = /^[0-9]+$/;
const operatorsReg = /^[+-]+$/;

const arrangeDigit = (a, b) => {
  let [ a_left, a_right="" ] = a.split(".");
  let [ b_left, b_right="" ] = b.split(".");

  if(a_left.length > b_left.length){
    b_left = b_left.padStart(a_left.length, "0");
  }else if(a_left.length < b_left.length){
    a_left = a_left.padStart(b_left.length, "0");
  }

  if(a_right.length > b_right.length){
    b_right = b_right.padEnd(a_right.length, "0");
  }else if(a_right.length < b_right.length){
    a_right = a_right.padEnd(b_right.length, "0");
  }
  return {
    a_left,
    a_right,
    b_left,
    b_right,
    a: `${a_left}.${a_right}`,
    b: `${b_left}.${b_right}`,
  };
};

const getMaxMinPair = (a, b) => {
  
  const regexMinus = /^-/;
  const res = {
    min: "",
    max: "",
    same: false,
  };
  let a_abs = a;
  let b_abs = b;
  let a_is_minus = false;
  let b_is_minus = false;
  if(a.match(regexMinus)){
    a_abs = a.replace(regexMinus, "");
    a_is_minus = true;
  }
  if(b.math(regexMinus)){
    b_abs = b.replace(regexMinus, "");
    b_is_minus = true;
  }

  let { a_left, a_right, b_left, b_right } = arrangeDigit(a_abs, b_abs);

  const arr = matrix10_add_subtract;
  const len_left = a_left.length;

  for(let i = 0; i < len_left; i++){
    const a_l = a_left[i];
    const b_l = b_left[i];
    if(a_l === b_l){
      continue;
    }
    for(let j = 0; j < arr.length; j++){
      const [A, B, C] = arr[j];
      if((A === a_l || B === a_l) && C === b_l){
        return {
          ...res,
          min: a,
          max: b,
        }
      }
      if((A === b_l || B === b_l) && C === a_l){
        return {
          ...res,
          min: b,
          max: a,
        }
      }
    }
  }

  const len_right = a_right.length;
  for(let i = 0; i < len_right; i++){
    const a_r = a_right[i];
    const b_r = b_right[i];
    if(a_r === b_r){
      continue;
    }
    for(let j = 0; j < arr.length; j++){
      const [A, B, C] = arr[j];
      if((A === a_r || B === a_r) && C === b_r){
        return {
          ...res,
          min: a,
          max: b,
        }
      }
      if((A === b_r || B === b_r) && C === a_r){
        return {
          ...res,
          min: b,
          max: a,
        }
      }
    }
  }
  return {
    ...res,
    same: true
  };
  

  

};

const calc = (...args) => {
  console.log("args", args)
  let list = [...args];
  let i = 0;
  let bool = true;
  let res;
  const fixCarry = function(res){
    let r = res;
    let c = "0";
    if(res.startsWith("-")){
      r = addAndSubtract("10", "-", res.replace(/^-/, ""));
      c = "-1";
    }else if(res.length === 2){
      c = res.slice(0, 1);
      r = res[1];
    }
    return { res: r, carry: c };
  };
  while(true){
    const a_origin = list[0];
    const operator = list[1];
    const b_origin = list[2];
    const {min, max, same} = getMaxMinPair(a_origin, b_origin);
    console.log(min, max, same);
    const a = max;
    const b = min;
    const a_len = a.length;
    const b_len = b.length;
    const length1 = a_len > b_len ? a_len +1 : b_len + 1;
    const arr = [];
    let carry = "0";
    console.log("a:", a, "operator:", operator, "b:", b, "length:", length1);
    if(operator === "+"){

    }else if(operator === "-"){

    }else{
      return;
    }
    for(let i = 0; i < length1; i++){
      const current_a_len = a_len - i;
      const current_b_len = b_len - i;
      let current_a = a[current_a_len - 1] ? a[current_a_len - 1] : "0";
      const current_b = b[current_b_len - 1] ? b[current_b_len - 1] : "0";
      console.log("for-i1", i, "carry:", carry, "a", current_a, "b", current_b,)

      let res1;
      if(carry !== "0"){//carry === "-1"
        if(carry.startsWith("-")){
          console.log("borrowww!!", carry);
          current_a = addAndSubtract(current_a, "-", carry.replace(/^-/, "") );
          const obj = fixCarry(current_a);
          res1 = obj.res;
          carry = obj.carry;
        }else{//carry === "1"
          res1 = addAndSubtract(carry, operator, current_a);
          // console.log("forfor011", carry, res1)
          const obj = fixCarry(res1);
          res1 = obj.res;
          carry = obj.carry;
          // console.log("forfor012", carry, res1)
          // console.log("cccc", carry, res1)
          res1 = addAndSubtract(res1, operator, current_b);
          // console.log("forfor013", carry, res1)
        }
      }else{
        // console.log("forfor021", carry, res1)
        res1 = addAndSubtract(current_a, operator, current_b);
      }

      const obj = fixCarry(res1);
      res1 = obj.res;

      if(carry === "0"){
        carry = obj.carry;
      }

      // res1 = addAndSubtract(carry, operator, res1);
      console.log("for-i2", i, "carry:", carry, res1,)


      
      arr.unshift(res1);
    }
    // console.log("1", arr)
    const new_arr = ["0", ...arr];
    const new_arr2 = new_arr.filter(elm => elm)

    res = new_arr2.join("");
    if(res){
      // acum = res;
      if(list[i + 3] && list[i + 4]){
        list = [res, ...list.slice(3)];
      }else{
        break;
      }
    }else{
      bool = false;
      break;
    }
    // break;
  }

  let zeroLength = 0;
  for(let i = 0; i < res.length; i++){
    const s = res[i];
    if(s === "0"){
      zeroLength++;
    }else{
      break;
    }
  }
  if(res.length === zeroLength){
    return "0";
  }

  return res.slice(zeroLength, res.length);
};

// console.log(addAndSubtract("10", "-", "9"));
// console.log(addAndSubtract("9", "+", "3"));
// console.log(calc("11", "+", "11", "+", "5"));
//console.log(calc("9999", "+", "99"));
console.log(calc("50190", "-", "900"));
console.log(getMaxMinPair("-101", "100.0"))
