const { authenticateToken } = require('../utils/jwt');

const authenticateMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const user = await authenticateToken(token);

    if (!user) {
        const error = new Error('JWT malformed');
        error.status = 401;
        throw error;
    }
    res.locals.user = user;
    next();
};

module.exports = { authenticateMiddleware };