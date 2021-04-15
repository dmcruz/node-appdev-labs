 const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents )
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

//Promise.all([ opA(print), opB(print), opC(print)]).catch(console.error)
opA(print)
opB(print)
opC(print)