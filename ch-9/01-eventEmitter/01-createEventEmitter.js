const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts)
    this.name = opts.name
  }
}
