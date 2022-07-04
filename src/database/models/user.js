const UsersSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define("User", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, { timestamps: false, tableName: 'Users' });

  UserTable.associate = models => {
    UserTable.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'BlogPost'
    })
  };

  return UserTable;

};

module.exports = UsersSchema;
