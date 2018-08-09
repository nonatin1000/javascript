const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  if (req.url == '/aula24-ajaxa-1-xmlhttprequest.html') {
    res.end('<h1>aula 24</h1>')
  }
  if (req.url == '/aula24-alunos.json') {
    res.end('<h1>JSON</h1>')
  }
  res.end('<h1>URL sem resposta definida!</h1>')
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})