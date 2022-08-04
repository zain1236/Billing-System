const express = require("express");
const { Customer } = require("../model");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const customer = await Customer.findAll();
      console.log(customer);
      if (customer < 1) {
        res.send({ Message: "No Customers Found", status: 200 });
      } else {
        res.send({ Message: "Success", status: 200, data: customer });
      }
    } catch (error) {
      res.send({
        Message: "INTERNAL SERVER ERROR",
        status: 500,
        error: error.message,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const custdata = req.body;
      if (custdata.country.toLowerCase() === "india") {
        custdata.placeofsupply = custdata.state;
      } else {
        custdata.placeofsupply = custdata.country;
      }
      custdata.company = 1;
      const customer = await Customer.create(custdata);
      if (customer < 1) {
        res.send({ Message: "Something went Wrong", status: 200 });
      } else {
        res.send({ Message: "Success", status: 200, data: customer });
      }
    } catch (error) {
      res.send({
        Message: "INTERNAL SERVER ERROR",
        status: 500,
        error: error.message,
      });
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const customer = await Customer.findOne({ where: { id: req.params.id } });

      if (customer < 1) {
        res.send({ Message: "No Customer Found with that id", status: 200 });
      } else {
        res.send({ Message: "Success", status: 200, data: customer });
      }
    } catch (error) {
      res.send({ Message: "INTERNAL SERVER ERROR", status: 500, error: error });
    }
  })
  .put(async (req, res) => {
    try {
      const custdata = req.body;
      if (custdata.country.toLowerCase() === "india") {
        custdata.placeofsupply = custdata.state;
      } else {
        custdata.placeofsupply = custdata.country;
      }
      custdata.company = 1;

      const { id } = req.params;
      const customer = await Customer.update(custdata, { where: { id: id } });

      if (customer < 1) {
        res.send({
          Message: "No Customer found with that id",
          status: 200,
        });
      } else {
        res.send({ Message: "Success", status: 200, data: customer });
      }
    } catch (error) {
      res.send({
        Message: "INTERNAL SERVER ERROR",
        status: 500,
        error: error.message,
      });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;

    try {
      const customer = await Customer.destroy({ where: { id: id } });

      if (customer < 1) {
        res.send({
          Message: "No Customer found with that id",
          status: 200,
        });
      } else {
        res.send({
          Message: "Success deleted",
          status: 200,
        });
      }
    } catch (error) {
      res.send({ Message: "INTERNAL SERVER ERROR", status: 500, error: error });
    }
  });
module.exports = router;
