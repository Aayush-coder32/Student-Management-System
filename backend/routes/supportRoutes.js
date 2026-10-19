import { Router } from 'express';
import { submitSupportMessage } from '../controllers/supportController.js';
import { validate } from '../middleware/validateRequest.js';
import { supportMessageSchema } from '../validators/schemas.js';

const router = Router();
router.post('/', validate(supportMessageSchema), submitSupportMessage);
export default router;
