// Inlcuindo a biblioteca
const http = require('http');
const url = require('url'); // Lógica para incluir a URL através do site npmjs.com
const queryString = require('query-string'); // Incluindp NPM de Query string "informação no link do navegador"



// Definição de endereço / URL  
const hostname = '127.0.0.1';
const port = 3000;

// Implementação da regra de negócio (Lógica de programação)
const server = http.createServer((req, res) => {

  // Pegar a pergunta na URL
  const params = queryString.parse(url.parse(req.url, true).search);
  console.log(params);

  let resposta; 
  // Verificar a pergunta e escolher a resposta
  if (params.pergunta == 'melhor-filme') {
    console.log('Star Wars') //debug
    resposta = 'Star Wars'
  }
  else if (params.pergunta == 'melhor-tecnlogia-backend') {
    console.log('node.js')
    resposta = 'node.js'

  }
  else {
    console.log('nao sei, desculpa =(')
    resposta = 'nao sei, desculpa =('
  }

  // Retornar a resposta escolhida 


  res.statusCode = 200; // Código para "tudo certo" oposição a 404
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});


// É a execução do servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});