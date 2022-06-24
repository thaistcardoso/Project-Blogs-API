const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
    },
    name: DataTypes.STRING
  }, { timestamps: false });
  
     CategoryTable.associate = models => {
      // define association here
    }

  return CategoryTable;
};

module.exports = CategorySchema;