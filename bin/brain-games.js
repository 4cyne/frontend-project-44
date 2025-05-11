#!/usr/bin/env node
import { promptAndInsertName } from '../src/cli.js'

const greeting = 'Welcome to the Brain Games!'
const sayHello = `Hello, ${promptAndInsertName()}!`

export const showGreeting = () => {
  console.log(greeting)
  console.log(sayHello)
}

showGreeting()
