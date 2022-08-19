const express = require("express");
const {
  Invoice,
  InvoiceService,
  Customer,
  InvoiceTax,
  Company,
  Service,
} = require("../model");
const router = express.Router();
const { sequelize } = require("../config/db");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const invoice = await Invoice.findAll();
      if (invoice) {
        res.status(200).send({ Message: "Succcess!", data: invoice });
      } else {
        res.status(400).send("Something went wrong!");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  })
  .post(async (req, res) => {
    const t = await sequelize.transaction();
    try {
      const {
        invoice_no,
        header,
        billing_period,
        subtotal,
        foreign_currency,
        total_tax,
        companyId, // foreign key
        customer, // foreign key
        services, // array of services { rate,foreignRate,service_Id  }
      } = req.body;

      console.log(req.body);

      if (invoice_no !== "") {
      }
      const invoice = await Invoice.create({
        invoice_no,
        header,
        billing_period,
        subtotal,
        foreign_currency,
        total_tax,
        companyId: companyId,
        customerId: customer,
      });

      console.log(invoice);

      if (invoice) {
        const defaultInvoiceId = invoice.id;

        services.map((service) => {
          service.invoiceId = defaultInvoiceId;
        });
        await InvoiceService.bulkCreate(services);

        const foundCustomer = await Customer.findOne({
          where: { id: customer },
        });

        const ifIndia = [
          { name: "CGST", tax_percentage: 9, invoiceId: defaultInvoiceId },
          { name: "SGST", tax_percentage: 9, invoiceId: defaultInvoiceId },
        ];

        if (foundCustomer) {
          if (
            foundCustomer.country.toLowerCase() === "india" &&
            foundCustomer.placeofsupply.toLowerCase() === "delhi"
          ) {
            await InvoiceTax.bulkCreate(ifIndia);
          } else if (
            foundCustomer.country.toLowerCase() === "india" &&
            foundCustomer.placeofsupply.toLowerCase() !== "delhi"
          ) {
            await InvoiceTax.create({
              name: "IGST",
              tax_percentage: 18,
              invoiceId: defaultInvoiceId,
            });
          }
        }

        console.log(services);
        res.status(200).send({ Message: "Success!!", data: invoice });
      } else {
        res.status(400).send("Something went wrong Invoice");
      }

      await t.commit();
    } catch (error) {
      await t.rollback();
      res.status(500).send(error.message);
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const invoice = await Invoice.findOne({ where: { id: req.params.id } });

      if (invoice) {
        // Company getting
        const company = await Company.findOne({
          where: { id: invoice.companyId },
        });
        // Customer getting
        const customer = await Customer.findOne({
          where: { id: invoice.customerId },
        });
        // invoice tax
        const InvoiceTaxs = await InvoiceTax.findAll({
          where: { invoiceId: invoice.id },
        });
        // Invoice Services
        const InvoiceServices = await InvoiceService.findAll({
          where: { invoiceId: invoice.id },
          include: [
            {
              model: Service,
              // attributes: ["bankId", "bank_name", "account_number"],
            },
          ],
        });

        const data = {
          invoice,
          company,
          customer,
          InvoiceTaxs,
          InvoiceServices,
        };
        res.status(200).send({ Message: "Success", data: data });
      } else {
        res.status(400).send("Something went wrong!");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  })
  .delete(async (req, res) => {
    try {
      const invoice = await Invoice.destroy({ where: { id: req.params.id } });

      if (invoice > 0) {
        res.status(200).send("Success!");
      } else {
        res.status(400).send("Something went Wrong!");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = router;
