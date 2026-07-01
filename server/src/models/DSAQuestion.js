import mongoose from 'mongoose';

const dsaQuestionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Easy' },
    tags: [{ type: String }],
    problem: { type: String, required: true },
    examples: [{ input: String, output: String, explanation: String }],
    constraints: [{ type: String }],
    solutionApproach: { type: String, required: true },
    solutionCode: { type: String, required: true },
    language: { type: String, default: 'javascript' }
  },
  { timestamps: true }
);

export default mongoose.model('DSAQuestion', dsaQuestionSchema);
