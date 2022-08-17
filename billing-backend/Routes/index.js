const express = require("express");

const CustomerRoute = require("./customer");
const ServicesRoute = require("./services");
const InvoiceRoute = require("./invoice");
const InvoiceServiceRoute = require("./invoice-service");
const CompanyRouter = require("./company");

const router = express.Router();

router.use("/customer", CustomerRoute);
router.use("/services", ServicesRoute);
router.use("/invoice", InvoiceRoute);
router.use("/invoiceservice", InvoiceServiceRoute);
router.use("/company", CompanyRouter);

module.exports = router;
