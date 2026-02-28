import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import publicRoute from "./routes/public.routes";
import AdminRoute from "./routes/admin.routes";

const app: Express = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.PRODUCTION_URL
        : process.env.DEVELOPMENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(cookieParser());
app.use(express.json());

// middleware

app.use("/public/auth", publicRoute);
app.use("/admin", AdminRoute);

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
