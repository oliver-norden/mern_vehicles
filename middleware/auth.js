const config = (process.env.NODE_ENV === 'production') ? null : require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    // Attempt to get token from request header
    const token = req.header('x-auth-token');

    // Check for token
    if (!token) return res.status(401).json({ msg: 'Unauthorized, Please log in' });

    const jwtSecret = process.env.jwtSecret || config.get('jwtSecret');

    try {
        // Verify token
        const decodedToken = jwt.verify(token, jwtSecret);

        // Add user from token payload
        req.user = decodedToken;

        next();
    }
    catch (e) {
        res.status(400).json({ msg: 'Invalid token' });
    }
}

module.exports = auth;