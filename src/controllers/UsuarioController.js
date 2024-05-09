const Usuario = require("../models/Usuario")

class UsuarioController {

  async listar(req,res){
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
  }

   async cadastrar(req, res) {
        try {
            const email = req.body.email
            const password = req.body.password
            const nome = req.body.nome
            const data_nascimento = req.body.data_nascimento
            const cep = req.body.cep
            const sexo = req.body.sexo
            const cpf = req.body.cpf
            const rua = req.body.rua
            const bairro = req.body.bairro
            const cidade = req.body.cidade

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
                email: email,
                password: password,
                nome: nome,
                data_nascimento: data_nascimento,
                cep: cep,
                sexo: sexo,
                cpf: cpf,
                rua: rua,
                bairro: bairro,
                cidade: cidade
            })

            res.status(201).json(usuarios)

        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: 'Não possível cadastrar o usuário' })
        }
    }

}

module.exports = new UsuarioController()

