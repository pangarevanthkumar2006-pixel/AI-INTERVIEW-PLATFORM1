import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import AptitudeTest from '../models/AptitudeTest.js';
import DSAQuestion from '../models/DSAQuestion.js';
import { aptitudeTests } from './aptitudeQuestions.js';
import { dsaQuestions } from './dsaQuestions.js';

dotenv.config();
await connectDB();
await AptitudeTest.deleteMany({});
await DSAQuestion.deleteMany({});
await AptitudeTest.insertMany(aptitudeTests);
await DSAQuestion.insertMany(dsaQuestions);
console.log('Seed data inserted');
process.exit(0);
