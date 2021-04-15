const { readFile } = require('fs').promises
const print = contents => console.log(contents.toString())

const [big, med, small] = Array.from(Array(3)).fill(__filename)

async function run() {
  const data = [ 
    await readFile(big),
    await readFile(med),
    await readFile(small) 
  ]

  print (Buffer.concat(data))
}

async function run2() {
  const data = []
  const files = [big, med, small]
  for(const file in files) {
    data.push(await readFile(file))
  }

  print(Buffer.concat(data))
}

run().catch(console.error)
run2().catch(console.error)