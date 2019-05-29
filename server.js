const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5000;
const server = express()

server.use('/static', path.join(__dirname, 'static'))

server.listen(PORT, ()=>{

})