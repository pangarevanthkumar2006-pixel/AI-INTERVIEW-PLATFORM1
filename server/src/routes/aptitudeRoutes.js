import express from 'express';
import { getTest, listTests, submitTest } from '../controllers/aptitudeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/tests', protect, listTests);
router.get('/tests/:id', protect, getTest);
router.post('/tests/:id/submit', protect, submitTest);
export default router;
