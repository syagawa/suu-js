import core from "./core";
import utils from "./utils";

import { SuuNumber } from "./interfaces";

const random:any = {};

const seeds:any = {};

const getSeed = (name: string) => {
  return seeds[name];
};

const getOrSetSeed = (seed: any, name: string) => {
 
  if(seed){
    seeds[name] = seed;
  }else{
    seed = seeds[name];
  }

  return seed;
};

let register1 = 0x1111;
let register2 = 0x1111;
const lfsr = (seed) => {

  console.log("register", register1.toString(2))
  
  if(seed){
    console.log("seed", seed.toString(2))
    register1 = 0xffff & seed;
    register2 = 0xffff & seed;
    console.log("register1", register1.toString(2))
    console.log("register2", register2.toString(2))
  }
  let bit1 = seed & 0xffff;
  let bit2 = seed & 0xffff;
  console.log("bit", bit1.toString(2))
  const res1 = (register1 & 0x0001);
  console.log("res1", res1.toString(2))
  const res2 = res1 ^ ((register1 & 0x0004) >> 2);
  console.log("res2", res2.toString(2))
  const res3 = res2 ^ ((register1 & 0x0008) >> 3);
  console.log("res3", res3.toString(2))
  bit1 = res3 ^ ((register1 & 0x0020) >> 5);
  console.log("bit", bit1.toString(2))
  bit2 = (register2 & 0x0001) ^
    ((register2 & 0x0004) >> 2) ^
    ((register2 & 0x0008) >> 3) ^
    ((register2 & 0x0020) >> 5);
  // console.log("bit", bit.toString(2))

  register1 = (register1 >> 1) | (bit1 << 15);
  register2 = (register2 >> 1) | (bit2 << 15);
  // console.log("register", seed.toString(2))
  return {
    register1: register1,
    register2: register2,
    bit1: bit1,
    bit2: bit2
  };

}


random.getNotRandomNumber = (seed: any) => {
  const myName = "getNotRandomNumber";
  const storedSeed = getOrSetSeed(seed, myName);
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
  const storedSeed = getOrSetSeed(null, myName);
  const first = core.getSuuNumber(storedSeed ? storedSeed : "1234");
  const res = utils.square(first);
  let second = res.array.slice(2, 6).join("");
  if(res.array.length === 7){
    second = res.array.slice(1, 5).join("");
  }
  const secondnum = core.getSuuNumber(second);
  getOrSetSeed(second, myName);
  return secondnum;
};

random.getRandomNumberByLinearCongruentialGenerators = (seed: any) => {
  const myName = "getRandomNumberByLinearCongruentialGenerators";
  const a = core.getSuuNumber("3");
  const b = core.getSuuNumber("5");
  const m = core.getSuuNumber("13");
  const storedSeed = getOrSetSeed(seed, myName);
  const new_seed = core.getSuuNumber(storedSeed ? storedSeed : "8");
  // (a x seed + b) mod m
  const res1 = core.multiple(a, new_seed);
  const res2 = core.add(res1, b);
  const res3 = core.modulo(res2, m);
  return res3;
};

let register = 0x1111;
random.getRandomNumberByLinearFeedbackShiftRegister = (seed) => {

  const myName = "getRandomNumberByLinearFeedbackShiftRegister";
  console.log("register", register.toString(2))
  
  const storedSeed = getOrSetSeed(null, myName);

  if(!storedSeed && seed){
    seed = getOrSetSeed(seed, myName);
    console.log("seed", seed.toString(2))
    register = 0xffff & seed;
    console.log("register1", register.toString(2))
  }
  let bit = seed & 0xffff;
  console.log("bit", bit.toString(2))
  const res1 = (register & 0x0001);
  console.log("res1", res1.toString(2))
  const res2 = res1 ^ ((register & 0x0004) >> 2);
  console.log("res2", res2.toString(2))
  const res3 = res2 ^ ((register & 0x0008) >> 3);
  console.log("res3", res3.toString(2))
  bit = res3 ^ ((register & 0x0020) >> 5);
  console.log("bit", bit.toString(2))
  register = (register >> 1) | (bit << 15);

  getOrSetSeed(register, myName);

  return register;
  
};

export default random;