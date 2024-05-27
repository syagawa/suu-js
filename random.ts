import core from "./core";

import { SuuNumber } from "./interfaces";

const random:any = {};

random.getNotRandom = (seed: any) => {
  return seed;
};

random.getRandomNumber = (seed: any) => {
  return Math.random();
};


export default random;