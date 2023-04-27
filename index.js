const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET'){
        res.writeHead(200, {"Content-Type": "text/html"})

        res.end(`
            <h1>Send email</h1>
            <form method="POST" action="/">
                <input type="email" name="email" placeholder="Enter your email address..."/>
                <button type="submit">Send email</button>
            </form>
        `)
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