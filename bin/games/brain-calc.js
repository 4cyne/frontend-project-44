import { getRandomItem } from '../utils/get-random-item.js'
import { calculateAnswer } from '../utils/calculate-answer.js'
import { runGame } from '../../src/index.js'

export const gameRules = 'What is the result of the expression?'

export const game = () => {
  const operator = getRandomItem()
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: calculateAnswer(num1, num2, operator),
  }
}

runGame(gameRules, game)
