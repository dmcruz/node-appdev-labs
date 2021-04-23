'use strict'
const { Readable } = require('stream')
// Readable.from defaults to objectMode = true
const readable = Readable.from(['quick', 'brown', 'fox'])
readable.on('data', (data)=> console.log('data: ', data))
readable.on('end', ()=> console.log('finished'))