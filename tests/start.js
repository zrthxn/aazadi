const express = require('express')
const path = require('path')

const server = express()
server.listen(3000, ()=> console.log('TEST :: Started', 'PORT', 3000))
server.get('*', (req,res)=>{
    console.log('Startup test \x1b[32msuccessful\x1b[0m')
    res.sendFile( path.resolve('docs', 'index.html') )
})