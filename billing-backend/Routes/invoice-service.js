const express = require("express");
const { InvoiceService } = require("../model");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { rate, foreignRate, invoice, service } = req.body;

    const invoiceServices = await InvoiceService.create({
      rate,
      foreignRate,
      invoice,
      service,
    });

    if (invoiceServices < 1) {
      res.status(400).send("Something went wrong");
    } else {
      res.status(200).send("Success");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
