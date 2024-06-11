import core from "./core";
import utils from "./utils";

import { SuuNumber } from "./interfaces";

const random:any = {};

const seeds:any = {};

random.getNotRandomNumber = (seed: any) => {
  const mayName = "getNotRandomNumber";
  if(seed){
    seeds[mayName] = seed;
  }else{
    seed = seeds[mayName];
    if(!seed){
      throw new Error("Require seed parameter");
    }
  }
  const storedSeed = seeds[mayName];
  return core.getSuuNumber(storedSeed);
};

random.getRandomNumber = (seed: any) => {
  const num = Math.random();
  return core.getSuuNumber(num);
};

random.getRandomNumberByMiddleSquareMethod = (seed: any) => {
  const myName = "getRandomNumberByMiddleSquareMethod";
  let first = null;
  if(seed){
    seeds[mayName] = seed;
  }else{
    seed = seeds[mayName];
    if(!seed){
      throw new Error("Require seed parameter");
    }
  }
  let storedSeed = seeds[mayName];
  if(!storedSeed){
    seeds[mayName] = "1234";
    storedSeed = seeds[myName];

  }
  first = core.getSuuNumber(storedSeed);
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