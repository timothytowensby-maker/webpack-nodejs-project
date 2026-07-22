import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  status?: number;
}

export default function errorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  console.error(`[Error] ${status}: ${message}`);

  res.status(status).json({
    error: message,
    status,
    timestamp: new Date().toISOString(),
  });
}
