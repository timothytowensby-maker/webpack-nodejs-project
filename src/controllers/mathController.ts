import { Request, Response } from 'express';
import * as math from '@/utils/math';
import * as str from '@/utils/string';

export function getHealth(req: Request, res: Response): void {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}

export function calculateSum(req: Request, res: Response): void {
  try {
    const { a, b } = req.query;
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      res.status(400).json({ error: 'Invalid numbers provided' });
      return;
    }

    const result = math.add(numA, numB);
    res.json({ a: numA, b: numB, result, operation: 'add' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export function greetUser(req: Request, res: Response): void {
  try {
    const { name } = req.params;
    const greeting = math.greet(str.capitalize(name));
    res.json({ greeting });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
