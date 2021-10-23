'use strict'
const os = require('os')
setTimeout(() => {
  console.log(process.uptime()) // total uptime of process
  console.log(os.uptime()) // total uptime of os
  console.log(os.totalmem()) // total system memory
  console.log(process.memoryUsage().heapTotal) // total heap memory
}, 1000)