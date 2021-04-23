'use strict'
const { Readable } = require('stream')

const createReadStream = () => {
  const data = ['quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']
  
  return new Readable({
    // stream -> buffer -> string (utf-8)
    encoding: 'utf-8',
    read() {
      if (data.length === 0) this.push(null)
      else this.push(data.shift())
    }
  })
}

const readable = createReadStream()
readable.on('data', (data)=> console.log('data: ', data))
readable.on('end', () => console.log('finished reading'))