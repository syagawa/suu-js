// (function(global){

  const MAX = 10000;

  const S = {};
  const K = {};

  S.isNumber = function(n){
    if(typeof n === "number"){
      if(Number.isNaN(n)){
        return NaN;
      }else{
        return true;
      }
    }
  };

  S.isPrimeNumber = function(n){
    if(!S.isNumber(n)){
      return false;
    }
    if(n === 0 || n === 1){
      return false;
    }
    if(n === 2){
      return true;
    }

    if(n >= MAX){
      return `Argument exceeds maximum value(${MAX})`;
    }

    var max = n;
    for( var i = max -1; i > 1; i--){
      if( (max % i) === 0 ){
        return false;
      }
    }
    return true;
  };

  S.nextNumber = function(n){
    if(!S.isNumber(n)){
      return false;
    }
    return ++n;
  };

  S.prevNumber = function(n){
    if(!S.isNumber(n)){
      return false;
    }
    return --n;
  };

  K.random = function(min, max){

    if(min instanceof Array && min.length > 0){
      return K.randomElement(min);
    }

    if(min === undefined){
      min = 0;
    }
    if(max === undefined){
      max = 1;
    }

    var len = max - min;
    var rand = Math.random();
    var res = ( rand * len ) + min;

    return res;
  };

  K.randomElement = function(array){
    var len = array.length;
    var rand = Math.random();

    var i = Math.floor(rand * len);

    return array[i];

  };

// })(window);