import mongoose from 'mongoose';

const aiQuestionSetSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    role: { type: String, required: true },
    level: { type: String, default: 'entry' },
    skills: [{ type: String }],
    questions: [{ type: String }]
  },
  { timestamps: true }
);

export default mongoose.model('AIQuestionSet', aiQuestionSetSchema);
