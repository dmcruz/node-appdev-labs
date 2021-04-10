'use strict'
const format = require('./format')
// const pino = require('pino')
// const logger = pino()
// logger.info(format.upper('my-package started'))
// process.stdin.resume()

if (require.main === module) {
  const pino = require('pino')
  const logger = pino()
  logger.info(format.upper('hello world'))
  process.stdin.resume()
} else {
  const reverseAndUpper = (str) => format.upper(str).split('').reverse().join('')
  module.exports = reverseAndUpper
}