const {console} = require('console')
const http = require('http')

const PORT = 1000

const server = http.createServer((req,res)=>{
  res .writeHead('Olá, mundo!');
  res.end()
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})