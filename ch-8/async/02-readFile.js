const { readFile } = require('fs').promises
const print = (contents) => console.log(contents.toString())

const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

async function run() {
  print('big file')
  print(await readFile(bigFile))
  
  print ('medium file')
  print(await readFile(mediumFile))
  
  print('small file')
  print(await readFile(smallFile))
}

run().catch(console.error)