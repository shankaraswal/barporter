import { Request, Response, NextFunction } from "express";

const asyncHandler = (requestHandler: any): any => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
