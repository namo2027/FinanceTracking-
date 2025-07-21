import { ErrorRequestHandler, Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { HTTPSTATUS } from "../config/http.config";

export const errorhandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {
  console.log("error occurred on path:", req.path, "Error", error);

  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
    error: error?.message || "unknown error occurred",
  });
};
