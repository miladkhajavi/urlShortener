import { Router } from "express";
import {
  getShortenerUrl,
  shortUrlGenerator,
} from "../controllers/shortenerController";
import errorHandler from "../middlewares/errorHandler";

export default function (app: Router) {
  /*Route: GET root*/
  app.get("/", (req, res) => {
    res.send("Welcome to Shortener");
  });
  app.get("/:id", getShortenerUrl);
  app.post("/generate", shortUrlGenerator);

  app.use(errorHandler);

  return app;
}
