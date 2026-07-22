import { Router } from 'express';
import * as mathController from '@/controllers/mathController';
import { requestLogger } from '@/middleware/requestLogger';

const router = Router();

// Apply request logger middleware
router.use(requestLogger);

// Health check route
router.get('/health', mathController.getHealth);

// Math routes
router.get('/math/sum', mathController.calculateSum);
router.get('/greet/:name', mathController.greetUser);

export default router;
