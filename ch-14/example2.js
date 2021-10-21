'use strict'
setInterval(() => {
  console.log('this interval is keeping the process open')
}, 500)

setTimeout(() => {
  console.log('exit after this')
  process.exit(200)
}, 1750)

process.on('exit', (code) => {
  console.log('exiting with code', code)
  setTimeout(()=> {
    console.log('this will never happen')
  }, 1)
})