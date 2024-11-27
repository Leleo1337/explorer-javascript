//importa o Router do Express
const { Router } = require("express")

//importa o usersController.js
const UserController = require("../controllers/usersController")

// Cria uma instância do Router
const userRoutes = Router()

function myMiddleware(request,response,next){
    console.log('você passou no middleware')

    if(!request.body.isAdmin){
        return response.send('usuario não autorizado')
    }
    next()
}



// Cria uma instância do UserController para acessar os métodos / funções
const usersController = new UserController()

// Rota POST para criar um novo usuário
userRoutes.post("/", myMiddleware ,usersController.create)

//exporta o userRoutes
module.exports = userRoutes