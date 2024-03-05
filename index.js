// require your server and launch it here
const express = require('express');

const server = express();

server.use('/', (req, res) => {
    res.status(200).send('Hello from express')
})

server.listen(9000, () => {
    console.log('Magic happening on port 9000')
})