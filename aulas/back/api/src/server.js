
//importando o express
const express = require('express')


//iniciando o app
const app = express()

//porta
const PORT = 3333;

app.get('/message/:id/:user', (request,response) =>{
    const { id, user } = request.params
    response.send(`
        id da mensagem: ${id}
        para o usuario ${user}
        `)
})



app.listen(PORT, () => console.log(`server rodando na porta ${PORT}`))