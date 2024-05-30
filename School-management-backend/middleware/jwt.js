const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log("req",token)
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
};

module.exports = verifyToken;
