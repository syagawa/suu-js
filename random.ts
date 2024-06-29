import core from "./core";
import utils from "./utils";

import { SuuNumber } from "./interfaces";

const random:any = {};

const seeds:any = {};

const getAndSetSeed = (seed: any, name: string) => {
 
  if(seed){
    seeds[name] = seed;
  }else{
    seed = seeds[name];
  }

  return seed;
};

let register = 0x1111;
const lfsr = (seed: number) => {
  if(seed){
    register = 0xffff & seed;
  }
  let bit = seed & 0xffff;

}


random.getNotRandomNumber = (seed: any) => {
  const myName = "getNotRandomNumber";
  const storedSeed = getAndSetSeed(seed, myName);
  if(!storedSeed){
    throw new Error("Require seed parameter");
  }
  return core.getSuuNumber(storedSeed);
};

random.getRandomNumber = (seed: any) => {
  const num = Math.random();
  return core.getSuuNumber(num);
};

random.getRandomNumberByMiddleSquareMethod = (seed: any) => {
  const myName = "getRandomNumberByMiddleSquareMethod";
  const storedSeed = getAndSetSeed(null, myName);
  const first = core.getSuuNumber(storedSeed ? storedSeed : "1234");
  const res = utils.square(first);
  let second = res.array.slice(2, 6).join("");
  if(res.array.length === 7){
    second = res.array.slice(1, 5).join("");
  }
  const secondnum = core.getSuuNumber(second);
  getAndSetSeed(second, myName);
  return secondnum;
};

random.getRandomNumberByLinearCongruentialGenerators = (seed: any) => {
  const myName = "getRandomNumberByLinearCongruentialGenerators";
  const a = core.getSuuNumber("3");
  const b = core.getSuuNumber("5");
  const m = core.getSuuNumber("13");
  const storedSeed = getAndSetSeed(seed, myName);
  const new_seed = core.getSuuNumber(storedSeed ? storedSeed : "8");
  // (a x seed + b) mod m
  const res1 = core.multiple(a, new_seed);
  const res2 = core.add(res1, b);
  const res3 = core.modulo(res2, m);
  return res3;
};

random.getRandomNumberByLinearFeedbackShiftRegister = () => {

};

export default random;