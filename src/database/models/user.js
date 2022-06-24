const UsersSchema = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define("User", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, { timestamps: false });

  UsersTable.associate = models => {
    UsersTable.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'blogPost'
    })
  };

  return UsersTable;

};

module.exports = UsersSchema;
