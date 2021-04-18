'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

const promA = promisify(opA)
const promB = promisify(opB)
const promC = promisify(opC)

promA().then((err, contents) => {
  print(err, contents)
  promB().then((err, contents) => {
    print(err, contents)
    promC().then((err,contents) => {
      print(err, contents)
    })
  })
})