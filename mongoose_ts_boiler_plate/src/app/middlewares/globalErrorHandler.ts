/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'something went wrong';

  return res.status(statusCode).json({
    success: true,
    message,
    err: '',
  });
};

export default globalErrorHandler;
