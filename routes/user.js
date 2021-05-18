const express = require('express');
const user = express.Router();
const db = require("../config/database");
const jwt = require('jsonwebtoken');

user.post("/login", async (req, res, next)=>{
    const { correoUsuario, passwordUsuario } = req.body;
    const query = `SELECT * FROM Usuario WHERE correoUsuario = '${correoUsuario}' AND passwordUsuario = '${passwordUsuario}';`;
    console.log(query)
    
    const rows = await db.query(query);

    if(correoUsuario && passwordUsuario){
        if(rows.length == 1){
            const token = jwt.sign({
                idUsuario: rows[0].idUsuario,
                correoUsuario: rows[0].correoUsuario
            }, "debugkey");
            return res.status(200).json({ code:200, message: token });
        } else {
            return res.status(200).json({ code: 401, message: "Usuario y/o contraseña incorrectos" });
        }
    }
    return res.status(500).json({ code: 501, message: "Campos incompletos" });
});

module.exports = user;
