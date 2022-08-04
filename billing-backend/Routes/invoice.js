const express = require("express");
const { Invoice } = require("../model");
const router = express.Router();

router.get("/", (req, res) => {
  // axios.get("http://localhost:3001/customer");
  // res.render("Invoices/newInvoice");
});

module.exports = router;
