const app = require("./app.js");

let counter = 0;

const addSuu = function(){

  for(let i = 0; i < 100; i++){
    app.core.add("1", "1");
  }

};

const addNative = function(){

  for(let i = 0; i < 100; i++){
    1 + 1;
  }

};

const execute = function(func, name){
  counter++;
  const id = `${name}-${String(counter)}`;
  performance.mark("testStart");
  func();
  performance.mark("testEnd");

  performance.measure(
    id,
    "testStart",
    "testEnd",
  );

  const results = performance.getEntriesByName(id);

  console.log(results[0]);
};

const main = function(){

  execute(addSuu, "addSuu");
  execute(addNative, "addNative");





};


main();