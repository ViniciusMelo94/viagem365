const { Router } = require("express");
const loginRoutes = require("./login.route");
const usuarioRoutes = require("./usuario.route")

const routes = Router()

routes.use('/login', loginRoutes)
routes.use('/usuario', usuarioRoutes)


module.exports = routes