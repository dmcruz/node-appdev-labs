const { readFile } = require('fs').promises
const print = (content) => console.log(content.toString())
const files = [__filename, 'not existing', __filename]

async function run() {
  const readers = files.map(file => readFile(file))

  const results = await Promise.allSettled(readers)

  results.filter(({status}) => status==='rejected')
    .forEach(({reason}) => {
      console.log('------------------')
      console.error(reason)
      console.log('------------------')
    })

  const data = results.filter(({status}) => status === 'fulfilled')
    .map(({value})=> value)

    print(Buffer.concat(data))
}

run().catch(console.error)