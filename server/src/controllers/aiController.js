import multer from 'multer';
import AIQuestionSet from '../models/AIQuestionSet.js';
import ResumeAnalysis from '../models/ResumeAnalysis.js';
import { analyzeResume, generateInterviewQuestions } from '../services/aiService.js';
import { parseResumeFile } from '../services/resumeParser.js';

export const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 3 * 1024 * 1024 } });

export async function createInterviewQuestions(req, res) {
  const { role, level = 'entry', skills = [] } = req.body;
  if (!role) return res.status(400).json({ message: 'Role is required' });
  const skillList = Array.isArray(skills) ? skills : String(skills).split(',').map((skill) => skill.trim()).filter(Boolean);
  const questions = await generateInterviewQuestions({ role, level, skills: skillList });
  const saved = await AIQuestionSet.create({ user: req.user._id, role, level, skills: skillList, questions });
  res.status(201).json(saved);
}

export async function analyzeResumeController(req, res) {
  const { resumeText = '', targetRole = 'Software Engineer' } = req.body;
  const parsedFileText = await parseResumeFile(req.file);
  const text = parsedFileText || resumeText;
  if (!text.trim()) return res.status(400).json({ message: 'Resume text or file is required' });
  const analysis = await analyzeResume({ resumeText: text, targetRole });
  const saved = await ResumeAnalysis.create({ user: req.user._id, fileName: req.file?.originalname || 'pasted-resume.txt', targetRole, ...analysis });
  res.status(201).json(saved);
}
