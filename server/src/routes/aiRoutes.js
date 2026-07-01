import express from 'express';
import { analyzeResumeController, createInterviewQuestions, upload } from '../controllers/aiController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/questions', protect, createInterviewQuestions);
router.post('/resume', protect, upload.single('resume'), analyzeResumeController);
export default router;
