const app = require("./app.js");

const func = function(){

  for(let i = 0; i < 100; i++){
    app.core.add("1", "1");
  }

};

const main = function(){
  const id = "test1"
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

main();