const express = require("express");
const { Service } = require("../model");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const services = await Service.findAll();

      if (services < 1) {
        res.send({
          Message: "No Service Found",
          status: 200,
        });
      } else {
        res.send({
          Message: "Success",
          status: 200,
          data: services,
        });
      }
    } catch (error) {
      res.status(500).send({
        Message: "INTERNAL SERVER ERROR",
        status: 500,
        error: error,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const servData = req.body;
      // servData.companyId = 1;
      const services = await Service.create(req.body);
      if (services < 1) {
        res.send({ Message: "Something went Wrong!", status: 200 });
      } else {
        res.send({ Message: "Success", status: 200, data: services });
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
      const { id } = req.params;
      const services = await Service.findOne({ where: { id: id } });

      if (services < 1) {
        res.send({ Message: "Something went Wrong!", status: 200 });
      } else {
        res.send({ Message: "Success", status: 200, data: services });
      }
    } catch (error) {
      res.send({ Message: "INTERNAL SERVER ERROR", status: 500, error: error });
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      const services = await Service.update(req.body, { where: { id: id } });
      if (services < 1) {
        res.send({ Message: "Something went Wrong!", status: 200 });
      } else {
        res.send({ Message: "Success", status: 200, data: services });
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
    try {
      const { id } = req.params;

      const services = await Service.destroy({ where: { id: id } });

      if (services < 1) {
        res.send({ Message: "Something went Wrong!", status: 200 });
      } else {
        res.send({ Message: "Success", status: 200, data: services });
      }
    } catch (error) {
      res.send({ Message: "INTERNAL SERVER ERROR", status: 500, error: error });
    }
  });

module.exports = router;
