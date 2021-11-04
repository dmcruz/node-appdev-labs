const { test } = require('tap')
const uppercase = require('./uppercase')
test('uppercase', async({ equal }) => {
  equal(uppercase('hello'), 'HELLO')
  equal(uppercase('Foo'), 'FOO')
})

test('throw exception', async({ throws }) => {
  throws(()=>uppercase(12333), Error('input must be a string'))
})