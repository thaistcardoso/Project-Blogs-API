const PostCategoriesSchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategorie", {
    postId:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId:{
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, { timestamps: false });

    PostCategoryTable.associate = models => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'Categories',
        through: PostCategoryTable,
        foreingKey: 'postId',
        otherKey: 'categoryId'
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPosts',
        through: PostCategoryTable,
        foreingKey: 'categoryId',
        otherKey: 'postId'
      });
    }
  };
    
  return PostCategories;

  module.exports = PostCategoriesSchema;