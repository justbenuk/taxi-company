/* 
import all requirements
*/
const express = require("express");
require("colors");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

/* 
connect to the db
*/
connectDB();

/* 
start the app config
*/
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* 
routes
*/
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/holidays", require("./routes/holidayRoutes"));

app.get("/", (_, res) => {
  res.status(200).json({ message: "Welcome to Taxi Company API" });
});
/* 
error handler
*/
app.use(errorHandler);

/* 
start listening
*/
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
