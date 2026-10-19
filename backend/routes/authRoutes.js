import { Router } from 'express';
import { login, logout, me, register } from '../controllers/authController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateRequest.js';
import { loginSchema, registerSchema } from '../validators/schemas.js';

const router = Router();
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/logout', logout);
router.get('/me', authenticate, me);
export default router;
