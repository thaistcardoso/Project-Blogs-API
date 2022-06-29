const { User, BlogPost } = require('../database/models');

const createLogin = ({
    displayname,
    email,
    password,
    image,
}) => User.create({
        displayname,
        email,
        password,
        image,
    });

const getUser = () => User.findAll({
        include: { model: BlogPost, as: 'users' },
        attributes: { exclude: ['password'] },
    });

module.export = {
    getUser,
    createLogin,
};