const { EventEmitter } = require('events')
const ee = new EventEmitter()

ee.once('my-event', () => console.log('called once'))
ee.emit('my-event')
// will not emit:
ee.emit('my-event')
ee.emit('my-event')