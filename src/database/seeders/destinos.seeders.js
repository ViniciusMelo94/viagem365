const { QueryInterface, Sequelize } = require("sequelize");
const Destino = require("../../models/Destino");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Destino.bulkCreate([
            {
                nome: "Praia de Palmas",
                cep: "88190000",
                rua: "Rua dos Ipês",
                cidade: "Governador Celso Ramos",
                lat: "-27.34707426142857",
                long: "-48.551851219999996",
                descricao: "Praia de Palmas..",
                usuario_id:"1"
            },
            {
                nome: "Praia do Sissial",
                cep: "88190000",
                rua: "Rua geral de Palmas",
                cidade: "Governador Celso Ramos",
                lat: "-27.34707426142857",
                long: "-48.551851219999996",
                descricao: "Praia do Sissial..",
                usuario_id:"2"

            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await Destino.destroy({
            where: {
                nome: ["Praia de Palmas", "Praia do Sissial"]
            }
        })
    }
      
    
}