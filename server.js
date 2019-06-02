const express = require('express')
const path = require('path')

const PORT = require('./config.json').PORT || 5000;
const server = express()

server.use('/static', path.join(__dirname, 'static'))

server.listen(PORT, ()=> console.log('Aazadi :: Started ::', 'PORT', config.PORT))

server.get('*', (req,res)=>{
  res.sendFile( path.resolve(__dirname, 'docs', 'index.html') )
})