import { getRandomNumber } from '../../utils/get-random-number.js'

export const arithmeticProgression = (step, lim) => {
  let arr

  do {
    arr = Array.from(
      { length: Math.ceil(lim / step) },
      (_, i) => (i + 1) * step,
    )
    if (arr.length < 5 || arr.length > 10) {
      step = getRandomNumber(1, 10)
      lim = getRandomNumber(20, 200)
    }
  } while (arr.length < 5 || arr.length > 10)
  const randomIndex = Math.floor(getRandomNumber(1, arr.length - 1))
  const hiddenNumber = arr[randomIndex]
  arr[randomIndex] = '..'
  return {
    progression: arr.join(' '),
    hiddenNumber,
  }
}
