const asyncHandler = require("express-async-handler");
const Holiday = require("../models/holidayModel");

/* 
@Desc get all holiday requests
@Route api/holidays
@access Private
 */
const getHolidays = asyncHandler(async (req, res) => {
  const holidays = await Holiday.find({ user: req.user.id });
  res.status(200).json(holidays);
});
/* 
@Desc create a holiday request
@Route api/holidays
@access Private
 */
const createHoliday = asyncHandler(async (req, res) => {
  //destructure request body
  const { fromDate, toDate, returnToWorkDate, totalDaysUsed } = req.body;

  if (!fromDate || !toDate || !totalDaysUsed) {
    res.status(400);
    throw new Error("Incomplete Form");
  }

  const holiday = await Holiday.create({
    fromDate,
    toDate,
    totalDaysUsed,
    returnToWorkDate,
    user: req.user.id,
  });
  res.status(201).json(holiday);
});

module.exports = { createHoliday, getHolidays };
