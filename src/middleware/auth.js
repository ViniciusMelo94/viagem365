const { verify } = require("jsonwebtoken")

async function auth(req, res, next) {
    try {
        const {authorization} = req.headers
        const decoded  = verify(authorization, process.env.SECRET_JWT)
        req.usuario_id = decoded.usuario_id

        next()
    } catch (error) {
        return res.status(401).json({
            message: "A autenticação falhou",
            cause: error.message
        })
    }
}

module.exports = {auth}