import { Request, Response } from 'express';

/**
 * @desc    Get health status
 * @route   GET /api/health
 * @access  Public
 */
export const getHealth = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
};
