import core from "./core";
import utils from "./utils";

import { SuuNumber } from "./interfaces";

const random:any = {};

const seeds:any = {};

random.getNotRandomNumber = (seed: any) => {
  const mayName = "getNotRandomNumber";
  let storedSeed = seeds[mayName];
  if(!storedSeed && !seed){
    seed = "1";
  }
  seeds[mayName] = seed;
  return core.getSuuNumber(seed);
};

random.getRandomNumber = (seed: any) => {
  const num = Math.random();
  return core.getSuuNumber(num);
};

random.getRandomNumberByMiddleSquareMethod = (seed: any) => {
  let first = null;
  if(seed){
    first = core.getSuuNumber(seed);
  }else{
    seed = "1234";
    first = core.getSuuNumber(seed);
  }
  const res = utils.square(first);
  let second = res.array.slice(2, 6).join("");
  if(res.array.length === 7){
    second = res.array.slice(1, 5).join("");
  }
  const secondnum = core.getSuuNumber(second);
  return secondnum;
};

random.getRandomNumberByLinearCongruentialGenerators = () => {
  const a = core.getSuuNumber("3");
  const b = core.getSuuNumber("5");
  const m = core.getSuuNumber("13");
  const seed = core.getSuuNumber("8");
  // (a x seed + b) mod m
  const res1 = core.multiple(a, seed);
  const res2 = core.add(res1, b);
  const res3 = core.modulo(res2, m);
  return res3;
};

export default random;