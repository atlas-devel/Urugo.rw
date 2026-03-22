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
  banUser,
  createUser,
  deactivateUser,
  deleteUser,
  getAllUsers,
  getUserDetailsById,
  getUserStatistics,
  unbanUser,
  updateUser,
} from "../controllers/admin/user_management.controller";

const AdminRoute: Router = express.Router();

AdminRoute
//user management routes  
  .post("/user/create-user", createUser)
  .get("/user/users-list", getAllUsers)
  .get("/user/user-details/:userId", getUserDetailsById)
  .post("/user/ban-user/:userId", banUser)
  .post("/user/unban-user/:userId", unbanUser) //for unbanning a user by id
  .patch("/user/update-user/:userId",updateUser) //for updating user details by id
  .delete("/user/delete-user/:userId", deleteUser  ) //for deleting a user by id, we can use the same banUser function to set isBanned to true, but we can also implement a separate deleteUser function if we want to permanently delete the user from the database
  .get("/user/stats", getUserStatistics)
  .post("/user/deactivate/:userId", deactivateUser)
  
  //property management routes
  .post("/property/create-property/:landlordId", createProperty) //for creating property for specific landlord
  .get("/properties", getAllProperties)
  .get("/property/:id", getPropertyById)
  .delete("/property/delete-property/:propertyId", deleteProperty) //for deleting a property by id
  .patch("/property/update-property/:propertyId", updateProperty) //for updating a property by id
  .post("/property/toggle-property-status/:propertyId", togglePropertyStatus) //for toggling the status of a property
  .patch("/property/update-many-properties", bulkUpdateProperties)
export default AdminRoute;
