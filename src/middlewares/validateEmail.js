const validateEmail = (req, _res, next) => {
    const { email } = req.body;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        const error = new Error('"email" must be a valid email');
        error.status = 400;
        throw error;
    }
    next();
};

module.exports = { validateEmail };