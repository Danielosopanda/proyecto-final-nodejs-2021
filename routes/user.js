const express = require('express');
const user = express.Router();
<<<<<<< HEAD
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
=======
const db = require();
const jwt = require('jsonwebtoken');

user.post("/login", async(req,res, next)=>{
    const {user_mail, user_password}=req.body;
    const query =`SELECT * FROM user WHERE user_mail = '${user_mail}' $ AND user_password = '${user_password}';`;
    const rows = await db.query(query);

    if(user_mail&&user_password){
        if(rows.length==1){
            const token=jwt.sign({
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
            },"superkey");
            return res.status(200).json({code:200,messagge:token});
        }else{
            return res.status(200).json({code:401,messagge:"Usuario y/o contraseña incorrectos"});
        }
    }
    return res.status(500).json({code:501,messagge:"Campos incompletos"});
});


module.exports=user;
>>>>>>> origin/Dev
