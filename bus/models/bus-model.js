const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    busType: { type: String, required: true },
    busNumber: { type: String, required: true, unique: true },
    seatCount: { type: Number, required: true },
    busStatus: { type: String, required: true },
  },
  { collection: "bus" }
);

module.exports = mongoose.model("Bus", userSchema);
