import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import ExceptionBase from "../exceptions/ExceptionBase";
import ServerError from "../exceptions/ServerError";
import PageNotFoundError from "../exceptions/PageNotFoundError";

export const errorHandler = (
  error: ErrorRequestHandler,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error) {
    const errorInstance =
      error instanceof ExceptionBase ? error : new ServerError(error);

    return response
      .status(errorInstance.getStatus())
      .json(errorInstance.getMessage());
  }

  next();
};

export const routeNotFoundHandler = (
  _request: Request,
  _response: Response,
  next: NextFunction
) => {
  next(new PageNotFoundError());
};
