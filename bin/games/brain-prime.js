import { runGame } from '../../src/index.js'
import { getRandomNumber } from '../utils/get-random-number.js'

const gameRules =
  'Answer "yes" if given number is prime. Otherwise answer "no".'

const game = () => {
  const num = getRandomNumber(1, 10)
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false
    return num > 1
  }
  return {
    question: `${num}`,
    correctAnswer: isPrime(num) ? 'yes' : 'no',
  }
}

runGame(gameRules, game)
