import mongoose from 'mongoose';

const resumeAnalysisSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fileName: { type: String, default: 'pasted-resume.txt' },
    targetRole: { type: String, default: 'Software Engineer' },
    score: { type: Number, default: 0 },
    strengths: [{ type: String }],
    gaps: [{ type: String }],
    suggestions: [{ type: String }],
    summary: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model('ResumeAnalysis', resumeAnalysisSchema);
