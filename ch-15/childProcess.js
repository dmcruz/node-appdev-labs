const { execFile } = require('child_process')
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if(error) throw error;
  console.log(stdout);
})

const { execSync } = require('child_process')
const output = execSync(`node -e "console.log('subprocess stdio output')"`)
console.log(output.toString())

const cmd = process.platform === 'win32' ? 'dir' : 'ls'
const output2 = execSync(cmd);
console.log(output2.toString())

const output3 = execSync('node -p process.execPath')
console.log(output3.toString())

const output4 = execSync(`"${process.execPath}" -e "console.error('subprocess stdio stderr')"`)
console.log(output4.toString())


try { 
  execSync(`"${process.execPath}" -e "process.exit(1)"`)
} catch(err) {
  console.error('Exception', err)
}

try { 
  execSync(`"${process.execPath}" -e "throw Error('boom')"`)
} catch(err) {
  console.error('Exception', err)
}