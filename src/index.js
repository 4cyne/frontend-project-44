import readlineSync from "readline-sync";

import { promptAndInsertName } from "./cli.js";

export const runGame = (gameRules, game) => {
  console.log("Welcome to the Brain Games!");

  const userName = promptAndInsertName();

  let correctAnswersUser = 0;
  const maxAnswers = 3;

  console.log(gameRules);

  while (correctAnswersUser < maxAnswers) {
    const { number, correctAnswer } = game();
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync
      .question("Your answer:")
      .toLowerCase()
      .trim();

    if (userAnswer === correctAnswer.toString()) {
      correctAnswersUser++;
      console.log("Correct!");
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was: "${correctAnswer}".`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (correctAnswersUser === 3) console.log(`Congratulations, ${userName}`);
  }
};
