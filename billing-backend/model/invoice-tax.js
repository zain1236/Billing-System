const { sequelize, Sequelize } = require("../config/db");

const DataTypes = Sequelize;

const InvoiceTax = sequelize.define(
  "InvoiceTax",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    tax_percentage: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "InvoiceTax",
    paranoid: true,
  }
);

module.exports = InvoiceTax;
