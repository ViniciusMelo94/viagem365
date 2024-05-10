const { Router } = require("express");
const loginRoutes = require("./login.route");
const usuarioRoutes = require("./usuario.route")
const destinoRoutes = require("./destino.route")

const routes = Router()

routes.use('/login', loginRoutes)
routes.use('/usuario', usuarioRoutes)
routes.use('/local', destinoRoutes)


module.exports = routes