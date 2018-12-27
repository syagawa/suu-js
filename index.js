// (function(global){

  var MAX = 10000;

  var S = {};
  var K = {};

  K.isPrimeNumber = function(n){
    if(n === undefined || n === 0 || n === 1){
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




// })(window);