import express from "express";
import type { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { auth } from "./utils/auth";
import { toNodeHandler } from "better-auth/node";
import "dotenv/config";

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
app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());
app.get("/test", (Req: Request, res: Response) =>
  res.json({ message: "Hello World!" }),
);

const PORT: number = Number(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
