var http = require('http')

let fs = require('fs')

http.createServer(function (req, res) {
    
    fs.readFile('index.html', 'utf-8', (err, data) => {
        
        if (err) throw err
            else {
                res.writeHead(200, {
                    'Content-Type': 'text/html; charset=utf-8'})
            }
        
       

    })


  res.end(data)
})

.listen(2000);

console.log('Server running on port 2000');