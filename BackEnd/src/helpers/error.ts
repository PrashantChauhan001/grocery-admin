import express, { NextFunction } from 'express';

export class ErrorHandler extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string, stack?: any) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.stack = stack || null;
  }
}

export const handleError = (err: ErrorHandler, _req: express.Request, res: express.Response, _next: NextFunction): void => {
  const { statusCode, message, stack } = err;
  res.status(statusCode || 500).json({
    success: false,
    statusCode,
    errorMessage: message,
    stack,
  });
};
