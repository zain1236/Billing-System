const Customer = require("./customer");
const Company = require("./company");
const Invoice = require("./invoice");
const InvoiceService = require("./invoice-service");

const Service = require("./services");
const InvoiceTax = require("./invoice-tax");

const Model = {
  Customer,
  Company,
  Invoice,
  Service,
  InvoiceService,
  InvoiceTax,
};

Company.hasMany(Customer);
Customer.belongsTo(Company);

// Customer.belongsTo(Company);
// Company.hasMany(Customer, {
//   foreignKey: {
//     name: "company",
//     allowNull: false,
//   },
// });

Company.hasMany(Service);
Service.belongsTo(Company);
// // Service.belongsTo(Company);
// Company.hasMany(Service, {
//   foreignKey: {
//     name: "company",
//     allowNull: false,
//   },
// });

Company.hasMany(Invoice);
Invoice.belongsTo(Company);

// // Invoice.belongsTo(Company);
// Company.hasMany(Invoice, {
//   foreignKey: {
//     name: "company",
//     allowNull: false,
//   },
// });

Customer.hasMany(Invoice);
Invoice.belongsTo(Customer);

// // Invoice.belongsTo(Customer);
// Customer.hasMany(Invoice, {
//   foreignKey: {
//     name: "customer",
//     allowNull: false,
//   },
// });
Service.hasMany(InvoiceService);
InvoiceService.belongsTo(Service);
// Service.hasMany(
//   InvoiceService

//   //   {
//   //   foreignKey: {
//   //     name: "service",
//   //     allowNull: false,
//   //   },
//   // }
// );
// InvoiceService.belongsTo(Service);

Invoice.hasMany(InvoiceService);
InvoiceService.belongsTo(Invoice);

// // InvoiceService.belongsTo(Invoice);
// Invoice.hasMany(InvoiceService, {
//   foreignKey: {
//     name: "invoice",
//     allowNull: false,
//   },
// });

Invoice.hasMany(InvoiceTax);
InvoiceTax.belongsTo(Invoice);

// Invoice.hasMany(InvoiceTax, {
//   foreignKey: { name: "invoice", allowNull: false },
// });

// Company.create({});

module.exports = Model;
