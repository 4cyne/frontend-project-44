import { runGame } from '../../src/index.js'

const isEven = (number) => number % 2 === 0

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

const game = () => {
  const number = Math.floor(Math.random() * 100) + 1

  return {
    question: number,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  }
}

runGame(gameRules, game)
