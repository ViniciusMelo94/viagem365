const { Router } = require("express")
const loginRoutes = require("./login.route")
const usuarioRoutes = require("./usuario.route")
const destinoRoutes = require("./destino.route")

const routes = Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')

routes.use('/login', loginRoutes)
routes.use('/usuario', usuarioRoutes)
routes.use('/local', destinoRoutes)

routes.use('/docs', swaggerUi.serve)
routes.get('/docs', swaggerUi.setup(swaggerDocument))

module.exports = routes