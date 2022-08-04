const express = require("express");

const CustomerRoute = require("./customer");
const ServicesRoute = require("./services");
const InvoiceRoute = require("./invoice");

const router = express.Router();

router.use("/customer", CustomerRoute);
router.use("/services", ServicesRoute);

router.use("/invoice", InvoiceRoute);

module.exports = router;
