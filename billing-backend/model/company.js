const { sequelize, Sequelize } = require("../config/db");

const DataTypes = Sequelize;

const Company = sequelize.define(
  "company",
  {
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pinCode: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    phoneNumber: {
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

    gst: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "company",
    paranoid: true,
  }
);

module.exports = Company;
