const { TIMESTAMP } = require("mysql2/lib/constants/types");

const UsersSchema = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define("user", {
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
