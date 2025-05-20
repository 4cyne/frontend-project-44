import { runGame } from "../../../src/index.js";
import { NOD } from "./calcGCD.js";
import { getRandomNumber } from "../../utils/get-random-number.js";

const gameRules = "Find the greatest common divisor of given numbers.";

const game = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  return {
    question: `${num1} ${num2}`,
    correctAnswer: NOD(num1, num2),
  };
};

runGame(gameRules, game);
