import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { PublicPropertyRoute, PublicRoute } from "./routes/public.routes";
import AdminRoute from "./routes/admin.routes";
import { userInfo } from "./middleware/public.middleware";
import { ProtectedRoute } from "./middleware/admin.middleware";

const app: Express = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.PRODUCTION_URL
        : process.env.DEVELOPMENT_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(cookieParser());
app.use(express.json());

// middleware

app.use("/public/auth", PublicRoute);
app.use("/admin", userInfo, ProtectedRoute, AdminRoute);
app.use("/public", PublicPropertyRoute);

// 404 not found route
app.use((req: Request, res: Response) => {
  res.status(500).json({
    message: "route not found",
  });
});

const PORT: number = Number(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
