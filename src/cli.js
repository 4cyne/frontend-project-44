import readlineSync from 'readline-sync'

export const promptAndInsertName = () => {
  const name = readlineSync.question('May I have your name? ')
  return name
}
