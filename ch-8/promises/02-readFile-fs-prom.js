const { readFile } = require('fs').promises

readFile(__filename)
  .then((contents)=> console.log(contents.toString()))
  .catch(console.error)


readFile(__filename)
  .then((contents) => contents.toString())
  .then((stringifiedContents) => console.log(stringifiedContents))
  .catch(console.error)