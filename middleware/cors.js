<<<<<<< HEAD
module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
=======
module.exports = (req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
>>>>>>> origin/Dev
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
<<<<<<< HEAD
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
}
=======
    if(req.method=='OPTIONS'){
        res.header("Access-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
}
>>>>>>> origin/Dev
