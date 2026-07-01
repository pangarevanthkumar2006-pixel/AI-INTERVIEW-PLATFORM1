import AptitudeAttempt from '../models/AptitudeAttempt.js';
import AIQuestionSet from '../models/AIQuestionSet.js';
import ResumeAnalysis from '../models/ResumeAnalysis.js';

export async function getDashboard(req, res) {
  const attempts = await AptitudeAttempt.find({ user: req.user._id }).populate('test', 'title category').sort({ createdAt: 1 });
  const aiSets = await AIQuestionSet.countDocuments({ user: req.user._id });
  const resumeAnalyses = await ResumeAnalysis.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(5);
  const averageScore = attempts.length ? Math.round(attempts.reduce((sum, item) => sum + (item.score / item.totalQuestions) * 100, 0) / attempts.length) : 0;
  res.json({
    totals: { attempts: attempts.length, aiQuestionSets: aiSets, resumeAnalyses: resumeAnalyses.length, averageScore },
    aptitudeTrend: attempts.map((attempt) => ({ label: attempt.test?.title || 'Test', score: Math.round((attempt.score / attempt.totalQuestions) * 100), date: attempt.createdAt })),
    recentResumeScores: resumeAnalyses.map((analysis) => ({ role: analysis.targetRole, score: analysis.score, date: analysis.createdAt }))
  });
}
