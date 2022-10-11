const express = require("express");
const router = express.Router();

const {
  createHoliday,
  getHolidays,
} = require("../controllers/holidayController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getHolidays).post(protect, createHoliday);

module.exports = router;
