const validateName = (req, _res, next) => {
    const { displayName } = req.body;
    
    if (displayName.length < 8) {
        const error = new Error('"displayName" length must be at least 8 characters long');
        error.status = 400;
        throw error;
    }
   next();
};

module.exports = { validateName };