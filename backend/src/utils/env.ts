import { config } from "dotenv";
config();

const env = {
  PORT: Number(process.env.PORT) || 8080,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET!,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET!,
  NODE_ENV: process.env.NODE_ENV!,
  TEMP_TOKEN_SECRET: process.env.TEMP_TOKEN_SECRET!,
  EMAIL_USER: process.env.EMAIL_USER!,
  EMAIL_PASS: process.env.EMAIL_PASS!,
};
export default env;
