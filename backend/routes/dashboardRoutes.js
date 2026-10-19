import { Router } from 'express';
import { dashboard } from '../controllers/dashboardController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/', authenticate, dashboard);
export default router;

