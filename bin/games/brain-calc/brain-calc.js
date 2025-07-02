#!/usr/bin/env node
import { getRandomItem } from './get-random-item.js'
import { calculateAnswer } from './calculate-answer.js'
import { runGame } from '../../../src/index.js'
import { getRandomNumber } from '../../utils/get-random-number.js'

const gameRules = 'What is the result of the expression?'

const game = () => {
  const operator = getRandomItem()
  const num1 = getRandomNumber(0, 100)
  const num2 = getRandomNumber(0, 100)

  return {
    number: `${num1} ${operator} ${num2}`,
    correctAnswer: calculateAnswer(num1, num2, operator),
  }
}

runGame(gameRules, game)
