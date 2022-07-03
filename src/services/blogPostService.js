const { BlogPost, Category, User } = require('../database/models');

const getAllPost = async () => {
    const getPost = await BlogPost.findAll({
        include: [
            { model: User, as: 'users', attributes: { exclude: ['password'] } },
            { model: Category, as: 'Category', through: { attributes: [] } }],
    });

    return getPost;
};

module.exports = {
    getAllPost,
};