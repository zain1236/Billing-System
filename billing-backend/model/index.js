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

Company.hasMany(Service);
Service.belongsTo(Company);

Company.hasMany(Invoice);
Invoice.belongsTo(Company);

Customer.hasMany(Invoice);
Invoice.belongsTo(Customer);

Service.hasMany(InvoiceService);
InvoiceService.belongsTo(Service);

Invoice.hasMany(InvoiceService);
InvoiceService.belongsTo(Invoice);

Invoice.hasMany(InvoiceTax);
InvoiceTax.belongsTo(Invoice);

module.exports = Model;
