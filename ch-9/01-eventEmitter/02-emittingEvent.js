const { EventEmitter } = require('events')

// method 1
const myEmitter = new EventEmitter()
myEmitter.emit('an-event', arg1, arg2)

// method 2
class MyEmitter extends EventEmitter {
  constructor(opts= {}) {
    this.name = opts.name
  },
  destroy(err) {
    if(err) { this.emit('error', err) }
    this.emit('close')
  }
}