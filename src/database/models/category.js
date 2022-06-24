const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("categorie", {
    name: DataTypes.STRING
  }, { timestamps: false });
  
     CategoryTable.associate = models => {
      // define association here
    }

  return CategoryTable;
};

module.exports = CategorySchema;