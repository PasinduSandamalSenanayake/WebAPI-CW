const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// paths
const authRoutes = require("./routes/auth-route");
const routeRoutes = require("./routes/route-route");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/routes", routeRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
