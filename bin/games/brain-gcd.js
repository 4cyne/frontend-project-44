import { runGame } from '../../src/index.js'
import { NOD } from '../utils/calcGCD.js'

export const gameRules = 'Find the greatest common divisor of given numbers.'

const game = () => {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1

  return {
    question: `${num1} ${num2}`,
    correctAnswer: NOD(num1, num2),
  }
}

runGame(gameRules, game)
