// routes/admin.routes.ts
import { Router } from "express";
import { createAgent } from "../controllers/admin.controller";
import { requireAdmin } from "../middleware/adminSession.middleware";

const adminRouter = Router();

// All routes here are protected by requireAdmin
adminRouter.post("/agents", requireAdmin, createAgent);

export default adminRouter;
