const { User } = require('../database/models');
const { generateJWToken } = require('../utils/jwt');
// const { generateJWToken } = require('../utils/jwt');

const createUser = async ({ id, displayName, email, password, image }) => {
    const user = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'password', 'image'],
        where: { email },
    });

    if (user) {
        const error = new Error('User already registered');
        error.status = 409;
        throw error;
    }
    const newUser = await User.create({ id, displayName, email, password, image });
    const token = generateJWToken(newUser.dataValues);

    return { token };
};

const getUser = async () => {
    const findUser = await User.findAll({
        attributes: ['id', 'displayName', 'email', 'image'],
    });

    return findUser;
};

const getUserId = async (id) => {
    const findUserId = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'image'],
        where: { id },
    });
    
    return findUserId;
};

module.exports = {
    createUser,
    getUser,
    getUserId,
};