const Destino = require('../models/Destino')
const Usuario = require('../models/Usuario')
const axios = require('axios')
const {verify} = require('jsonwebtoken')

class DestinoController {

    async cadastrar(req, res) {
        try {
            
            const { usuario_id, nome, cep, rua, cidade, descricao } = req.body
            
            if (!nome) {
                return res.status(400).json({ message: 'O nome é obrigatório' })
            }

            if (!cep) {
                return res.status(400).json({ message: 'O cep é obrigatório' })
            }

            if (!rua) {
                return res.status(400).json({ message: 'A rua é obrigatória' })
            }

            if (!cidade) {
                return res.status(400).json({ message: 'A cidade é obrigatória' })
            }

            if (!descricao) {
                return res.status(400).json({ message: 'A descrição é obrigatória' })
            }

            const validarUsuario = await Usuario.findByPk(req.usuario_id)
            if(!validarUsuario){
                return res.status(400).json({ message: 'Usuário não existe' })
            }
            const ceps = req.body.cep
            const consultarCordenadas = await axios.get(`https://nominatim.openstreetmap.org/search?postalcode=${ceps}&format=json&addressdetails=1&limit=1`)

            let latitude = null
            let longitude = null
            if(consultarCordenadas.data && consultarCordenadas.data.length > 0){
                 latitude = consultarCordenadas.data[0].lat
                 longitude = consultarCordenadas.data[0].lon

            }

            const novoDestino = await Destino.create({
                usuario_id: req.usuario_id,
                nome,
                cep,
                rua,
                cidade,
                lat: latitude, 
                long: longitude,
                descricao
            })

            return res.status(201).json(novoDestino)

        } catch (error) {
            return res.status(500).json({ message: 'Não foi possível cadastrar novo destino' })
        }
    }

}


module.exports = new DestinoController();