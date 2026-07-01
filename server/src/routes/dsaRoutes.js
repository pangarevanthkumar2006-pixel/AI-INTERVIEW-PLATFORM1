import express from 'express';
import { getDSAQuestion, listDSAQuestions } from '../controllers/dsaController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/questions', protect, listDSAQuestions);
router.get('/questions/:id', protect, getDSAQuestion);
export default router;
