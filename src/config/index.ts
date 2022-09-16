export const SERVER_PORT = Number(process.env.SERVER_PORT) || 5050;
export const BASE_URL =
  process.env.BASE_URL || "";
export const DOMAIN =
  process.env.DOMAIN || "localhost:5050";
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
export const MONGO_LOG_URI =
  process.env.MONGO_LOG_URI ||
  "mongodb://localhost:27017/Shortener";
export const MONGODB_USER = process.env.MONGODB_USER || "";
export const MONGODB_PASS = process.env.MONGODB_PASS || "";
export const MONGODB_DATABASE_NAME = "Shortener";
export const DEBUG = process.env.DEBUG || false;
