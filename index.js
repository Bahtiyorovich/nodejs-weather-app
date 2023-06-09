const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => {
    if (req.method === 'GET'){
        res.writeHead(200, {"Content-Type": "text/html"})

        if(req.url === '/'){
            fs.readFile(path.join(__dirname, 'templates', 'index.html'), 'utf-8', (err, content) => {
                if(err) throw err
                res.end(content)
            })
        }

    } else if (req.method === 'POST'){

        const body = []

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`Name successfuly added: ${message}`)
        })

    }
    
    
    // //request - serverga so'rov yuborish
    // // response - serverning javobi
})

server.listen(3000, () => {
    console.log('Server has been started on port: 3000')
})