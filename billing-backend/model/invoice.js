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

    billing_period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // it will be not on client side form
    subtotal: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    foreign_currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "invoice",
    paranoid: true,
  }
);

module.exports = Invoice;
