module.exports=(req,res,next)=>{
    return res.status(200).json({code:200,message:"Bienvenido al sistema de empleados de Taller de Node.js S.A. de C.V."});
}