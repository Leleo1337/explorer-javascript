            CODIGOS APAGADOS

//criando rota que aceita dois parametros: ID E USER
//route params é obrigatorio
app.get('/message/:id/:user', (request,response) =>{
    const { id, user } = request.params

    // Enviando uma resposta com os valores capturados
    response.send(`
        id da mensagem: ${id}
        para o usuario ${user}
        `)
})


//query params é opcional
app.get('/users', (request,response) =>{
    const { page, limit } = request.query

    response.send(`
        pagina: ${page}
        limite da pagina ${limit}

        `)
})