#!/usr/bin/env node
import crypto from 'crypto'

export const getRandomNumber = (min, max) => {
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)
  return crypto.randomInt(min, max)
}
