import { getRandomNumber } from '../../utils/get-random-number.js'

export const getRandomItem = () => {
  const operators = ['*', '-', '+']
  const randomIndex = getRandomNumber(0, operators.length)
  return operators[randomIndex]
}
