import type { Router } from "express";
import express from "express";
import { createUser } from "../controllers/admin.controller";

const AdminRoute: Router = express.Router();

AdminRoute.post("/create-user", createUser);

export default AdminRoute;
