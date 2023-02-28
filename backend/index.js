require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const colors = require("colors");
const taskRoute = require("./routes/task.route");

// connect to db
const connectDB = require("./db/connect");
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api", taskRoute);

// listen app
app.listen(PORT, () => {
  console.log(`server is running at port no : ${PORT}`);
});
