require("./models/User");
require("./models/Track");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = process.env.DB_CONN;
mongoose.connect(mongoUri, {
  //arguments to prevent errors
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to Mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  console.log("Root hit");
  res.send(`Your email: ${req.user.email}`);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
