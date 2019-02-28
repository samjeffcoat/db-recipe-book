const express = require('express')

const server= express()
server.use(express.json())

server.use('/', router)


const port = 4400;
server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
})