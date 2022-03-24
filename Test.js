let http = require('http')

let fs = require('fs')

let serveur = http.createServer()

serveur.on('request', (request, reponse) => {

    fs.readFile('index.html', 'utf-8', (err, data) => {

        if (err) {

            Response.writeHead(404)

            Response.end('existe pas')

        } else

        reponse.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'

    })


    })
    
    reponse.end(data) 

})

serveur.listen(8080)