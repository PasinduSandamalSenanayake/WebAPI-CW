const express = require("express");
const router = express.Router();
const busController = require("../controllers/bus-controller");

// Create a new bus
router.post("/buses", busController.create_bus);

// Get all buses
router.get("/buses", busController.get_all_buses);

// Update a bus
router.patch("/buses/:id", busController.update_bus);

// Delete a bus
router.delete("/buses/:id", busController.delete_bus);

// Get a bus by id
router.get("/buses/:id", busController.get_bus_by_id);

module.exports = router;
