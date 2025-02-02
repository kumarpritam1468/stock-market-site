const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token) return res.status(401).json({error:"Unauthorized Access"});

        const decoded = jwt.verify(token, process.env.JWT_KEY);

        if(!decoded) return res.status(401).json({error:"Unauthorized Access"});

        const user = await User.findById(decoded.userId).select('-password');

        if(!user) return res.status(401).json({error:"User not found"});

        req.user = user;

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Unauthorized Access"});
    }
}

module.exports = protectRoute;