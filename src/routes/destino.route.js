const { Router } = require('express') 
const DestinoController = require('../controllers/DestinoController')
const {auth} = require('../middleware/auth')
const destinoRoutes = new Router()

destinoRoutes.post('/', auth, DestinoController.cadastrar)

module.exports = destinoRoutes