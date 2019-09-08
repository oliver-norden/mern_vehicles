const jwt = require('jsonwebtoken');
const config = require('config'); // JWT secret

module.exports = returnUser = (user, res) =>{
    // Send user data as response with new jwt (no password included)
    jwt.sign(
        { id: user.id },
        config.get('jwtSecret'),
        { expiresIn: 1800 }, // Token expiration
        (err, token) => {
            if(err) throw err;
            const { id, name, userName } = user;
            res.json({
                token,
                user: {
                    id,
                    name,
                    userName
                }
            });
        }
    );
}