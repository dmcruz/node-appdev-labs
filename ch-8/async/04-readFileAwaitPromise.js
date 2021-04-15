const { readFile } = require('fs').promises
const files = [ __filename, 'not existing', __filename]

const print = contents => console.log(contents.toString())

async function run() {
  const readers = files.map(file => readFile(file))
  const data = await Promise.all(readers)
  print(Buffer.concat(data)) 
}

run().catch(console.error)