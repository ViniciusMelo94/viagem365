const { Router } = require('express') 
const DestinoController = require('../controllers/DestinoController')
const {auth} = require('../middleware/auth')
const destinoRoutes = new Router()

destinoRoutes.post('/', auth, DestinoController.cadastrar)
destinoRoutes.get('/', auth, DestinoController.listar)
destinoRoutes.get('/:id', auth, DestinoController.listarUmDesino)
destinoRoutes.delete('/:id', auth, DestinoController.deletar)
destinoRoutes.put('/:id', auth, DestinoController.alterarDestino)


module.exports = destinoRoutes