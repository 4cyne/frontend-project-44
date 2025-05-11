import { promptAndInsertName } from '../src/cli.js'

import readlineSync from 'readline-sync'

const timeOut = (time) => new Promise((resolve) => setTimeout(resolve, time))
const isEven = (number) => number % 2 === 0

console.log('Welcome to the Brain Games!')

const userName = promptAndInsertName()

const checkingForParity = async () => {
  let correctAnswersUser = 0
  const maxAnswers = 3

  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  await timeOut(1000)

  while (correctAnswersUser < maxAnswers) {
    const generateNumber = Math.floor(Math.random() * 100) + 1
    await timeOut(500)

    console.log(`Is this number even? - ${generateNumber}`)
    await timeOut(500)

    const userAnswer = readlineSync
      .question(`Your answer:`)
      .toLowerCase()
      .trim()

    const correctAnswer = isEven(generateNumber) ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      correctAnswersUser++
      console.log('Correct!')
      await timeOut(500)
    } else {
      console.log(
        `"${userAnswer}",  is wrong answer ;(. Correct answer was: "${correctAnswer}".`
      )

      await timeOut(500)

      console.log(`Let's try again, ${userName}!`)

      await timeOut(500)

      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

checkingForParity()
