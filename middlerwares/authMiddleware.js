const jwt = require('jsonwebtoken');

const authMiddleware = async (res, res, next) =>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({message:"no token authorization denied"});
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message:"token is invlid"});
    }
};

module.exports ={
    authMiddleware
}