const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const nodemon = require('nodemon')

const Usuario = connection.define('usuarios', {
    nome:{
        type: DataTypes.STRING,
    },
    sexo:{
        type: DataTypes.STRING,
    },
    cpf:{
        type: DataTypes.STRING
    },
    data_nascimento:{
        type: DataTypes.DATE,
    },
    email:{
        type: DataTypes.STRING,
    },
    rua:{
        type: DataTypes.STRING,
    },
    cep:{
        type: DataTypes.STRING,
    },
    bairro:{
        type: DataTypes.STRING,
    },
    cidade:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    }
})


module.exports = Usuario