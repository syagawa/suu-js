const matrix01 = [
  ["0","0","0"],["0","1","1"],["1","0","1"],["1","1","10"],
];

const matrix10 = [
  ["0","0","0"],["0","1","1"],["0","2","2"],["0","3","3"],["0","4","4"],["0","5","5"],["0","6","6"],["0","7","7"],["0","8","8"],["0","9", "9"],
                ["1","1","2"],["1","2","3"],["1","3","4"],["1","4","5"],["1","5","6"],["1","6","7"],["1","7","8"],["1","8","9"],["1","9","10"],
];

const addAndSubtract = (a, b, operator) => {
  // a,   b,   c > 1,   2,   3
  // a +  b =  c > 1 +  2 =  3
  // b +  a =  c > 2 +  1 =  3
  // c + -a =  b > 3 + -2 =  1
  // c + -b =  a > 3 + -1 =  2
  // a + -c = -b > 1 + -3 = -2
  // b + -c = -a > 2 + -3 = -1

};


const seek = (a, b, c, matrix) => {
  let filtered = [];
  const result = {
    a,
    b,
    c
  };
  if(a){
    filtered = matrix.filter(array => {
      return array[0] === a ? true : false;
    });
    if(filtered.length > 0){
      if(b){
        filtered = filtered.filter(array => {
          return array[1] === b ? true : false;
        });
      }else if(c){
        filtered = filtered.filter(array => {
          return array[2] === c ? true : false;
        });
      }
    }
  }
  if(b){
    filtered = matrix.filter(array => {
      return array[1] === b ? true : false;
    });
    if(filtered.length > 0){
      if(a){
        filtered = filtered.filter(array => {
          return array[0] === a ? true : false;
        });
      }else if(c){
        filtered = filtered.filter(array => {
          return array[2] === c ? true : false;
        });
      }
    }
  }
  if(c){
    filtered = matrix.filter(array => {
      return array[2] === c ? true : false;
    });
    if(filtered.length > 0){
      if(a){
        filtered = filtered.filter(array => {
          return array[0] === a ? true : false;
        });
      }else if(b){
        filtered = filtered.filter(array => {
          return array[1] === b ? true : false;
        });
      }
    }
  }

  if(result.a && result.b){
    result.c = filtered[0][2];
  }else if(result.a && result.c){
    result.b = filtered[0][1];
  }else if(result.b && result.c){
    result.a = filtered[0][0];
  }

  return result;

};

const addAndSubtract01 = (a, b, add) => {
  if(add){
    // +
    const result = seek(a, b, null, matrix01);
    return result.c;
  }else{
    // -

  }


};


console.log(addAndSubtract01("0", "0", true));
console.log(addAndSubtract01("1", "0", true));
console.log(addAndSubtract01("0", "1", true));
console.log(addAndSubtract01("1", "1", true));
