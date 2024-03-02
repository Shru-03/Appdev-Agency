const express = require("express");
const router = express.Router();

const { sendEmail } = require("./emailcontroller");

router.post("/sendEmail", sendEmail);

module.exports = router;
