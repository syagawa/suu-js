// const matrix01 = [
//   ["0","0","0"],["0","1","1"],["1","0","1"],["1","1","10"],
// ];

const matrix10 = [
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

  let matrix = matrix10;
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

const calc = (...args) => {
  console.log("args", args)
  let list = [...args];
  let i = 0;
  let bool = true;
  let res;
  while(true){
    const a = list[0];
    const operator = list[1];
    const b = list[2];
    const a_len = a.length;
    const b_len = b.length;

    const length = a_len > b_len ? a_len : b_len;
    const arr = [];
    for(let i = 0; i < length; i++){
      const current_a = a[i] ? a[i] : "0";
      const current_b = b[i] ? b[i] : "0";
      const res1 = addAndSubtract(current_a, operator, current_b);
      arr.push(res1);
    }
    console.log("1", arr)
    let carry = "";
    const new_arr = [];
    for(let j = 0; j < length; j++){
      let s = arr[length - j - 1];
      if(carry){
        s = addAndSubtract(s, operator, carry);
      }
      
      if(s.length === 2){
        carry = s[0];
        s = s[1];
      }else{
        carry = "";
      }
      new_arr.unshift(s);
      if(j === (length - 1)){
        new_arr.unshift(carry);
      }
    }

    console.log(2, new_arr);

    const new_arr2 = new_arr.filter(elm => elm)
    // return new_arr;
    console.log(new_arr2);
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
  return res;

};

// console.log(addAndSubtract("2", "-", "3"));
// console.log(addAndSubtract("9", "+", "3"));
console.log(calc("11", "+", "11", "+", "5"));
