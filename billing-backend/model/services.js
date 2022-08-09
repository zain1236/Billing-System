const { sequelize, Sequelize } = require("../config/db");

const DataTypes = Sequelize;

const Service = sequelize.define(
  "service",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    HSN_SAC: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 99319,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rate: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "service",
    paranoid: true,
  }
);

module.exports = Service;
