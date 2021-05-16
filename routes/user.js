const express = require('express');
const user = express.Router();
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