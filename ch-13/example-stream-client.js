const http = require('http')

http.get('http://localhost:3000', (res) => res.pipe(process.stdout))