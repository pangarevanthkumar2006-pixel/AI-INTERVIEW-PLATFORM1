import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/authRoutes.js';
import aptitudeRoutes from './routes/aptitudeRoutes.js';
import dsaRoutes from './routes/dsaRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '2mb' }));
app.use('/api/ai', rateLimit({ windowMs: 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false }));

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/aptitude', aptitudeRoutes);
app.use('/api/dsa', dsaRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
