const { sequelize, Sequelize } = require("../config/db");

const DataTypes = Sequelize;

const Invoice = sequelize.define(
  "invoiceService",
  {
    rate: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    forignRate: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "invoiceService",
    paranoid: true,
  }
);

module.exports = Invoice;
