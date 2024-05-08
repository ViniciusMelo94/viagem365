const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const nodemon = require('nodemon')

const Destino = connection.define('destinos', {
    nome:{
        type: DataTypes.STRING,
    },
    cep:{
        type: DataTypes.STRING,
    },
    rua:{
        type: DataTypes.STRING,
    },
    cidade:{
        type:DataTypes.STRING,
    },
    lat: {
        type: DataTypes.FLOAT,
    },
    long:{
        type: DataTypes.FLOAT,
    },
    descricao:{
        type: DataTypes.TEXT,
    },

})

module.exports = Destino