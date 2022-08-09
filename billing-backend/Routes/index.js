const express = require("express");

const CustomerRoute = require("./customer");
const ServicesRoute = require("./services");
const InvoiceRoute = require("./invoice");
const InvoiceServiceRoute = require("./invoice-service");

const router = express.Router();

router.use("/customer", CustomerRoute);
router.use("/services", ServicesRoute);
router.use("/invoice", InvoiceRoute);
router.use("/invoiceservice", InvoiceServiceRoute);

module.exports = router;
