import * as db from "../db/mongoose";
import * as app from "./app";

export const bootstrap = async () => {
  try {
    await db.connect();
    app.start();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
