import type { Router } from "express";
import express from "express";
import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
} from "../controllers/admin/property_management.controller";
import { createUser } from "../controllers/admin/user.controller";

const AdminRoute: Router = express.Router();

AdminRoute.post("/create-user", createUser)
  .post("/create-property/:landlordId", createProperty) //for creating property for specific landlord
  .get("/properties", getAllProperties)
  .get("/property/:id", getPropertyById)
  .delete("/delete-property/:propertyId", deleteProperty) //for deleting a property by id
  .patch("/update-property/:propertyId", updateProperty); //for updating a property by id

export default AdminRoute;
