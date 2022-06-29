const { User } = require('../database/models');
// const { generateJWToken } = require('../utils/jwt');

    const createUser = ({ displayName, email, password, image }) =>
     User.create({ displayName, email, password, image });

module.exports = { createUser };