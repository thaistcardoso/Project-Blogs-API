const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const generateJWToken = ({ id, displayName, email, image }) =>
    jwt.sign({ id, displayName, email, image }, TOKEN_SECRET, jwtConfig);

const authenticateToken = async (token) => {
    if (!token) {
        const e = new Error('jwt malformed');
        e.status = 401;
        throw e;
    }

    try {
        const validate = await jwt.verify(token, TOKEN_SECRET);
        return validate;
    } catch (error) {
        console.log('errocatch', error);
        const erro = new Error('jwt malformed');
        erro.status = 401;
        throw erro;
    }
};

module.exports = {
    generateJWToken,
    authenticateToken,
};