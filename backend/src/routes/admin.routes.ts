import type { Router } from "express";
import express from "express";
import {
  bulkUpdateProperties,
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyById,
  togglePropertyStatus,
  updateProperty,
} from "../controllers/admin/property_management.controller";
import {
  createUser,
  getUserStatistics,
} from "../controllers/admin/user_management.controller";

const AdminRoute: Router = express.Router();

AdminRoute.post("/create-user", createUser)
  .post("/create-property/:landlordId", createProperty) //for creating property for specific landlord
  .get("/properties", getAllProperties)
  .get("/property/:id", getPropertyById)
  .delete("/delete-property/:propertyId", deleteProperty) //for deleting a property by id
  .patch("/update-property/:propertyId", updateProperty) //for updating a property by id
  .post("/toggle-property-status/:propertyId", togglePropertyStatus) //for toggling the status of a property
  .patch("/update-many-properties", bulkUpdateProperties)
  .get("/stats", getUserStatistics);
export default AdminRoute;
