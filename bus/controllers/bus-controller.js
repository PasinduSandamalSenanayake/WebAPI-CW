const Buses = require("../models/bus-model");

// Create a new bus
exports.create_bus = async (req, res) => {
  const { busType, busNumber, seatCount, busStatus } = req.body;

  // Validate required fields
  if (!busType || !busNumber || !seatCount || !busStatus) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Attempt to create and save the bus
    const bus = new Buses({ busType, busNumber, seatCount, busStatus });
    await bus.save();
    res.status(201).json({ message: "Bus created successfully", data: bus });
  } catch (error) {
    // Handle duplicate key error
    if (error.code === 11000 && error.keyPattern.busNumber) {
      return res.status(400).json({ message: "Bus number already exists" });
    }
    // Handle other errors
    res.status(500).json({ message: error.message });
  }
};

// Get all buses
exports.get_all_buses = async (req, res) => {
  try {
    const buses = await Buses.find();
    res.status(200).json({ data: buses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a bus
exports.update_bus = async (req, res) => {
  try {
    const updatedBus = await Buses.findById(req.params.id);
    if (!updatedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    updatedBus.busType = req.body.busType;
    updatedBus.busNumber = req.body.busNumber;
    updatedBus.seatCount = req.body.seatCount;
    updatedBus.busStatus = req.body.busStatus;
    await updatedBus.save();
    res.status(200).json({ message: "Bus updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a bus
exports.delete_bus = async (req, res) => {
  try {
    const bus = await Buses.findByIdAndDelete(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    res.status(200).json({ message: "Bus deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a bus by id
exports.get_bus_by_id = async (req, res) => {
  try {
    const bus = await Buses.findById(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    res.status(200).json({ data: bus });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
