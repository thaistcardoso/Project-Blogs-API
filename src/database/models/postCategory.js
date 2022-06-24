const PostCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, { timestamps: false });

  PostCategoryTable.associate = models => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'Category',
      through: PostCategoryTable,
      foreingKey: 'postId',
      otherKey: 'categoryId'
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: PostCategoryTable,
      foreingKey: 'categoryId',
      otherKey: 'postId'
    });
  }
  return PostCategoryTable;
};


module.exports = PostCategoriesSchema;