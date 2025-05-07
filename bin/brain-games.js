#!/usr/bin/env node

import { promptAndInsertName } from '../src/cli.js'

console.log('Welcome to the Brain Games!')
console.log(`Hello, ${promptAndInsertName()}!`)
