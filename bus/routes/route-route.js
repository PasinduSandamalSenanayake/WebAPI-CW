const express = require("express");

const router = express.Router();
const routeController = require("../controllers/route-controller");

// Create a new route
router.post("/routes", routeController.router_create_route);

// Get all routes
router.get("/routes", routeController.routes_get_all);

// Get a route by id
router.get("/routes/:id", routeController.routes_get_route_by_id);

// Update a route
router.put("/routes/:id", routeController.routes_update_route_by_id);

// Delete a route
router.delete("/routes/:id", routeController.routes_delete_route_by_id);

module.exports = router;
