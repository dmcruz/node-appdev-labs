class OddError extends Error {
  constructor(varname = '') {
    super(varname + ' must be even')
    this.code = 'ERR_MUST_BE_EVEN'
  }

  get name() {
    return 'OddError [' + this.code + ']'
  }
}

const doTask = (amount) => {
  if (typeof amount !== 'number') throw new TypeError('amount must be number')
  if (amount <= 0) throw new RangeError('amount must be greater than zero')
  if (amount % 2)  throw new OddError('amount')

  return amount / 2
}

doTask(3)

