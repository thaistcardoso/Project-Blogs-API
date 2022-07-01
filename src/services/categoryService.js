const { Category } = require('../database/models');

const createCategory = async ({ id, name }) => {
    const newCategory = await Category.create({ id, name });

    return newCategory;
};

module.exports = { createCategory };