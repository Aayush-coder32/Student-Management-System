import { Router } from 'express';
import { listStudents, getStudent, createStudent, updateStudent, deleteStudent } from '../controllers/studentController.js';
import { authenticate, requireRole } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateRequest.js';
import { studentSchema } from '../validators/schemas.js';

const router = Router();
router.use(authenticate);
router.get('/', listStudents);
router.get('/:id', getStudent);
router.post('/', requireRole('admin', 'teacher'), validate(studentSchema), createStudent);
router.put('/:id', requireRole('admin', 'teacher'), validate(studentSchema.partial()), updateStudent);
router.delete('/:id', requireRole('admin'), deleteStudent);
export default router;

