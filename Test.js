let http = require('http')

let serveur = http.createServer()

serveur.on('request', (request, reponse) => {

    reponse.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    
    reponse.end('salut ça va ?') 

})

serveur.listen(8080)