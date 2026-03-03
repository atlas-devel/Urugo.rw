import type { Router } from "express";
import express from "express";
import { createProperty, createUser } from "../controllers/admin.controller";

const AdminRoute: Router = express.Router();

AdminRoute.post("/create-user", createUser).post(
  "/create-property",
  createProperty,
);

export default AdminRoute;
