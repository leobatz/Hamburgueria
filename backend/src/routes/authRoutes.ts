import { Router } from 'express';
import { fazerLogin } from '../controllers/authController';

const router = Router();

router.post('/', fazerLogin);

export default router;