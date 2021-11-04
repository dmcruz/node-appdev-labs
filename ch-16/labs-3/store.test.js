'use strict'
const store = require('./store')

test('must be buffer', async() => {
  await expect(store(1))
  .rejects
  .toStrictEqual(Error('input must be a buffer'))
})

test('is buffer', async() => {
  const data = await store(Buffer.from('foo'))
    expect(data.id.length === 4).toBe(true)
})