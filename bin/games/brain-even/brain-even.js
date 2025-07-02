#!/usr/bin/env node
import { runGame } from "../../../src/index.js";
import { getRandomNumber } from "../../utils/get-random-number.js";

const isEven = (number) => number % 2 === 0;

const gameRules = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const game = () => {
  const number = getRandomNumber(1, 100);

  return {
    number,
    correctAnswer: isEven(number) ? "yes" : "no",
  };
};

runGame(gameRules, game);
