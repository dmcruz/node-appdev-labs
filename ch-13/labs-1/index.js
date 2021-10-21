'use strict'
const assert = require('assert')
const { join } = require('path')
const fs = require('fs')
const project = join(__dirname, 'project')
try {
  fs.rmdirSync(project, { recursive: true }) 
} catch(err) {
}
const files = Array.from(Array(5), () => join(project, Math.random().toString(36).slice(2)));

fs.mkdirSync(project)

for(const f of files) {
  fs.closeSync(fs.openSync(f, 'w'))
}
const out = join(__dirname, 'out.txt')

function exercise() {
  // todo read the files in the project folder
  // and write them to the out.txt file

  const files = fs.readdirSync(project, { recursive: true })
  fs.writeFileSync(out, files.join(','))
  console.log(files)
}

exercise()
assert(fs.readFileSync(out).toString(), files.toString())
console.log('passed!')

