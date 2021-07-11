'use strict'
console.log('current directory', __dirname)
console.log('current path', __filename)


const { join } = require('path')

console.log('out path:', join(__dirname, 'out.txt'))

const { readFileSync } = require('fs')
const contents = readFileSync(__filename, { encoding: 'utf-8'})
console.log(contents)


const { writeFileSync } = require('fs')

writeFileSync(join(__dirname, 'out'), contents.toUpperCase(),
  {
    flag: 'a' // append
  }
)