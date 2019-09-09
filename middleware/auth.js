const config = (process.env.NODE_ENV === 'production') ? require('../server-config') : require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    // Attempt to get token from request header
    const token = req.header('x-auth-token');

    // Check for token
    if (!token) return res.status(401).json({ msg: 'No token' });

    try {
        // Verify token
        const decodedToken = jwt.verify(token, config.get('jwtSecret'));

        // Add user from token payload
        req.user = decodedToken;

        next();
    }
    catch (e) {
        res.status(400).json({ msg: 'Invalid token' });
    }
}

module.exports = auth;