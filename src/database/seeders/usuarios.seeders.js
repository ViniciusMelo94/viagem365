const { QueryInterface, Sequelize } = require("sequelize");
const Usuario = require("../../models/Usuario");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Usuario.bulkCreate([
            {
                email: "vinicius@gmail.com",
                password: "1234567",
                nome: "Vinicius",
                data_nascimento: "1996-12-15",
                sexo: "masculino",
                cpf: "88899977766",
                cep: "88190000",
                rua: "Rua dos Ipês",
                bairro: "Palmas",
                cidade: "Governador Celso Ramos"
            },
            {
                email: "joao@gmail.com",
                password: "1234567",
                nome: "João",
                data_nascimento: "1994-11-01",
                sexo: "masculino",
                cpf: "88899977755",
                cep: "88190000",
                rua: "Rua das Laranjeiras",
                bairro: "Palmas",
                cidade: "Governador Celso Ramos"
            }
        ])
    },

    down: async (QueryInterface, Sequelize) => {
        await Usuario.destroy({
            email: [
                "vinicius@gmail.com", 
                "joao@gmail.com"
            ] 
        })
    }
}