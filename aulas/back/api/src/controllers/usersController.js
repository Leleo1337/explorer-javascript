class UserController {
    /**
     * index - GET para listar varios registros
     * show - GET para exibir um registro especifico
     * create - POST para criar um registro
     * update - PUT para atualizar um registro
     * delete -  DELETE para remover um registro 
     */

    create(request,response){
         //pega os dados do body
        const { name, email, password } = request.body

        //enviando resposta
        response.send(`
            usuario: ${name}
            email: ${email}
            senha: ${password}.`)
    }
}


module.exports = UserController