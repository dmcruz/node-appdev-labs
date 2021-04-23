'use strict'
const { Writable } = require('stream')
const createWriteStream = (data) => {
  return new Writable({
    objectMode: true,
    write(chunk, enc, next) {
      data.push(chunk)
      next()
    }
  })
}

const data= []
const writable = createWriteStream(data)
writable.on('finish', ()=>console.log('finished writing', data))
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.write(3)
writable.end('nothing more to write')