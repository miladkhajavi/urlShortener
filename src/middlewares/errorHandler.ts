import { Request, Response, NextFunction } from "express";

export default function errorHandler(err, req, res: Response, next) {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err.message);
  res.status(500).send({ error: err.message });
}
