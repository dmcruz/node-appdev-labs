// node_modules/.bin/tap ./add.test.js

const { test } = require('tap')
const add = require('./add')

test('throw when invalid input', async({throws}) => {
  throws(() => add('5', '3'), Error('inputs must be numbers'))
  throws(() => add(5, '3'), Error('inputs must be numbers'))
  throws(() => add('5', 3), Error('inputs must be numbers'))
  throws(() => add(null, {}), Error('inputs must be numbers'))
})
test('adds', async({equal}) => {
  equal(add(5, 5), 10)
  equal(add(9, 2), 11)
})