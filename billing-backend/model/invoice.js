const { sequelize, Sequelize } = require("../config/db");

const DataTypes = Sequelize;

const Invoice = sequelize.define(
  "invoice",
  {
    invoice_no: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    header: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    placeofsupply: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    billing_Period: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    forignRate: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    tableName: "invoice",
    paranoid: true,
  }
);

module.exports = Invoice;
