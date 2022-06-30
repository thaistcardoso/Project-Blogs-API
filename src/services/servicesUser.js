const { User } = require('../database/models');
const { generateJWToken } = require('../utils/jwt');
// const { generateJWToken } = require('../utils/jwt');

    const createUser = async ({ id, displayName, email, password, image }) => {
        const mail = await User.findOne({
            attributes: ['id', 'displayName', 'email', 'password', 'image'],
            where: { email },
        });
        
        if (mail) {
            const error = new Error('User already registered');
            error.status = 409;
            throw error;
        }
        const newUser = await User.create({ id, displayName, email, password, image });
        const token = generateJWToken(newUser.dataValues);

        return { token };
    };

module.exports = { createUser };