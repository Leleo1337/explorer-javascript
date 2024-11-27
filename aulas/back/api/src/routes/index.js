const { Router } = require('express')

const usersRouter = require('./user.routes')

const routes = Router()


// Define a rota "/users" que irá usar as rotas do arquivo "user.routes"
routes.use('/users', usersRouter)

module.exports = routes