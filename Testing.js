var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'});
  res.end('Hello World Commet ça va ?\n'); 
})

.listen(3000);

console.log('Server running on port 3000');