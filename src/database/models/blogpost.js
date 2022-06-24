 const BlogSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define("BlogPost", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type:DataTypes.INTEGER,
      foreignKey: true
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  });

  BlogPosts.associate = models => {
    BlogPosts.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'users'
    })
  };

  return BlogPostsTable;

};

  module.exports = BlogSchema;