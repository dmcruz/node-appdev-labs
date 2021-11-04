'use strict'
const store = require('./store')

test('must be buffer', (done) => {
  store('test', (err) => {
    expect(err).toStrictEqual(Error('input must be a buffer'))
    done()
  })
})

test('is buffer', (done) => {
  store(Buffer.from('foo'), (err, data) => {
    console.log(data)
    expect(err == null).toBe(true)
    expect(data.id.length === 4).toBe(true)
    done()
  })
})