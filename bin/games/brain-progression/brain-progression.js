import { runGame } from "../../../src/index.js";
import { arithmeticProgression } from "./get-array-arithmetic-progression.js";
import { getRandomNumber } from "../../utils/get-random-number.js";

const gameRules = "What is the result of the expression?";

const game = () => {
  const length = getRandomNumber(5, 10);
  const lim = getRandomNumber(5, 100);
  const step = Math.floor(lim / length + 2);

  const { hiddenNumber, progression } = arithmeticProgression(step, lim);

  return {
    number: `${progression}`,
    correctAnswer: `${hiddenNumber}`,
  };
};

runGame(gameRules, game);
