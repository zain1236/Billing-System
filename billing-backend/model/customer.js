const { sequelize, Sequelize } = require("../config/db");

const DataTypes = Sequelize;

const Customer = sequelize.define(
  "customer",
  {
    custType: {
      type: DataTypes.ENUM("Business", "Individual"),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    pan: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    GST_treatement: {
      type: DataTypes.ENUM("Registered", "Unregistered", "Overseas"),
      allowNull: false,
    },

    GST_IN: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    placeofsupply: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "customer",
    paranoid: true,
  }
);

module.exports = Customer;
