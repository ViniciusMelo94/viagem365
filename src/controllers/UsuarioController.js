const Usuario = require("../models/Usuario")

class UsuarioController {

   async cadastrar(req, res) {
        try {
            const {email, password, nome, data_nascimento, cep, sexo, cpf, rua, bairro, cidade} = req.body
         
            if (!nome) {
                return res.status(400).json({ message: 'O nome é obrigatório' })
            }

            if (!data_nascimento) {
                return res.status(400).json({ message: 'A data de nascimento é obrigatória' })
            }

            if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
                return res.status(400).json({ message: 'A data de nascimento é não está no formato correto' })
            }

            if (!cep){
                return res.status(400).json({message: 'O cep é obrigatório'})
            }

            if (!sexo){
                return res.status(400).json({ message: 'O sexo é obrigatório'})
            }

            if(!cpf) {
                return res.status(400).json({message: 'O cpf é obrigatório'})
            }

            if(!rua) {
                return res.status(400).json({message: 'O cpf é obrigatório'})
            }

            if(!bairro) {
                return res.status(400).json({message: 'O bairro é obrigatório'})
            }

            if(!cidade) {
                return res.status(400).json({message: 'A cidade é obrigatória'})
            }

            const usuarios = await Usuario.create({
                email,
                password,
                nome,
                data_nascimento,
                cep,
                sexo,
                cpf,
                rua,
                bairro,
                cidade
            })

            res.status(201).json(usuarios)

        } catch (error) {
            res.status(500).json({ error: 'Não possível cadastrar o usuário' })
        }
    }

}

module.exports = new UsuarioController()

