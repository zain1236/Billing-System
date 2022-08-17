const { Company } = require("../model");
const multer = require("multer");
const router = require("express").Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("File type not Supported"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get("/", async (req, res) => {
  try {
    const company = await Company.findAll();
    if (company) {
      return res.status(200).send(company);
    }
    res.send(400).send("No data Found");
    console.log(company);
  } catch (error) {
    res.status(500).send(err.message);
  }
});

router.post(
  "/",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "signature", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      console.log(req.files.logo[0].path);
      console.log(req.files.signature[0].path);

      const company = await Company.create({
        ...req.body,
        logo: req.files.logo[0].path,
        signature: req.files.signature[0].path,
      });
      return res.status(200).send("Successfully Created Company");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

router.delete("/", async (req, res) => {
  try {
    const customer = await Company.destroy({ truncate: true });
    res.status(200).send("Deleted Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
