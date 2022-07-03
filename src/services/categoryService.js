const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
    const newCategory = await Category.create({ name });

    return newCategory;
};

const getCategory = async () => {
    const findCategory = await Category.findAll({
        attributes: ['id', 'name'],
    });

    return findCategory;
};

module.exports = {
    createCategory,
    getCategory,
};