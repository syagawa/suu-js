// const matrix01 = [
//   ["0","0","0"],["0","1","1"],["1","0","1"],["1","1","10"],
// ];

const matrix10 = [
  ["0","0","0"],["0","1","1"],["0","2","2"],["0","3","3"],["0","4","4"],["0","5","5"],["0","6","6"],["0","7","7"],["0","8","8"],["0","9", "9"],
                ["1","1","2"],["1","2","3"],["1","3","4"],["1","4","5"],["1","5","6"],["1","6","7"],["1","7","8"],["1","8","9"],["1","9","10"],
];

const addAndSubtract = (a, b, operator) => {
  //  a,   b,   c > 1,   2,   3
  // a +  b =  c > 1 +  2 =  3 ABC
  // b +  a =  c > 2 +  1 =  3 BAC
  // c + -a =  b > 3 + -2 =  1 CAB
  // c + -b =  a > 3 + -1 =  2 CBA
  // a + -c = -b > 1 + -3 = -2 ACB
  // b + -c = -a > 2 + -3 = -1 BCA

  let matrix = matrix10;
  
  let result = "";

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

  return {result};

};

console.log(addAndSubtract("1", "2", "+"));
console.log(addAndSubtract("2", "1", "+"));
console.log(addAndSubtract("3", "1", "-"));
console.log(addAndSubtract("3", "2", "-"));
console.log(addAndSubtract("1", "3", "-"));
console.log(addAndSubtract("2", "3", "-"));
