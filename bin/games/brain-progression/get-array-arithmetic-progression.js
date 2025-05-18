export const arithmeticProgression = (step, length) => {
  // получаем массив прогрессии
  const arrProgression = Array.from({ length }, (_, i) => (i + 1) * step)

  // рандомно выбираем число, которое хотим скрыть
  const randomIndex = Math.floor(Math.random() * arrProgression.length)
  // сохраняем число
  const hiddenNumber = arrProgression[randomIndex]

  arrProgression[randomIndex] = '..'

  return {
    progression: arrProgression,
    hiddenNumber,
  }
}
