const { EventEmitter } = require('events')

const ee = new EventEmitter()

// method 1
ee.on('close', () => { console.log('close event fired') })
ee.emit('close')

// method 2
ee.addListener('close', () => { console.log('close event fired') })

console.log('------------------')

// passing args
ee.on('add', (a, b) => { console.log(a+b) })
ee.emit('add', 7, 6)


console.log('------------------')

// listenders are called in the order that they are registered
ee.on('my-event', () => console.log('1st'))
ee.on('my-event', () => console.log('2nd'))
ee.emit('my-event')

console.log('------------------')

// use prependListender to inject listeners on top
ee.prependListener('my-event', () => console.log('zero'))
ee.emit('my-event')