const { BlogPost, Category, User } = require('../database/models');

const getAllPost = async () => {
    const getPost = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } }],
    });

    return getPost;
};

module.exports = {
    getAllPost,
};