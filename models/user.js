"use strict";

const { Model } = require("sequelize");
const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      // password: {
      //   type: DataTypes.STRING,
      //   set(value) {
      //     this.setDataValue('password', hash(value))
      //   }
      // }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
