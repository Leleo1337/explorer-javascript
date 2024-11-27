
//importando o express
const express = require('express')

const routes = require('./routes')

//iniciando o express
const app = express()

//tipo do dado da requisição para JSON
app.use(express.json())

app.use(routes)

const PORT = 3333;
// iniciando o servidor com a porta "PORT" e mostra uma mensagem no console
app.listen(PORT, () => console.log(`server rodando na porta ${PORT}`))