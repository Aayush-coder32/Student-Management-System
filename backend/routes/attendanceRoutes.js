import { Router } from 'express';
import { listAttendance, upsertAttendance } from '../controllers/attendanceController.js';
import { authenticate, requireRole } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateRequest.js';
import { attendanceSchema } from '../validators/schemas.js';

const router = Router();
router.use(authenticate);
router.get('/', listAttendance);
router.post('/', requireRole('admin', 'teacher'), validate(attendanceSchema), upsertAttendance);
export default router;

