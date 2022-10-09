const mongoose = require("mongoose");

//connect to the db
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    //TODO: Remove console.log
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    //TODO: Remove console.log
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
module.exports = connectdb;
