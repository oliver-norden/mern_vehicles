const jwt = require('jsonwebtoken');
const config = (process.env.NODE_ENV === 'production') ? null : require('config'); // JWT secret

module.exports = returnUser = (user, res) =>{
    // Send user data as response with new jwt (no password included)
    const jwtSecret = process.env.jwtSecret || config.get('jwtSecret');

    jwt.sign(
        { id: user.id },
        jwtSecret,
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