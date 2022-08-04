const Customer = require("./customer");
const Company = require("./company");
const Invoice = require("./invoice");

const Service = require("./services");

const Model = {
  Customer,
  Company,
  Invoice,
  Service,
};

Company.hasMany(Customer, {
  foreignKey: {
    name: "company",
    allowNull: false,
  },
});

// Customer.belongsTo(Company);

// Company.hasMany(Service, {
//   foreignKey: {
//     name: "company",
//     allowNull: false,
//   },
// });

// Service.belongsTo(Company);

// Company.hasMany(Invoice, {
//   foreignKey: {
//     name: "company",
//     allowNull: false,
//   },
// });

// Invoice.belongsTo(Company);

// Customer.hasMany(Invoice, {
//   foreignKey: {
//     name: "customer",
//     allowNull: false,
//   },
// });


Company.create({})

module.exports = Model;
