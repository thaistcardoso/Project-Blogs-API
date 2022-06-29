const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (password.length < 6) {
        const error = new Error('"password" length must be at least 6 characters long');
        error.status = 400;
        throw error;
    }
    next();
};

module.exports = { validatePassword };