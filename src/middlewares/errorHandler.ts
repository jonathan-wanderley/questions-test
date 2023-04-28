import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ValidationError } from "express-validation";

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json({
    error: `Internal Server Error - ${err.message}`
  });
}
