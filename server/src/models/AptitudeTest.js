import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true },
  explanation: { type: String, default: '' }
});

const aptitudeTestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: 'General Aptitude' },
    durationMinutes: { type: Number, default: 15 },
    questions: [questionSchema]
  },
  { timestamps: true }
);

export default mongoose.model('AptitudeTest', aptitudeTestSchema);
