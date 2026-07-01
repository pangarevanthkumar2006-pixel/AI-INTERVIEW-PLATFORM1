import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
  selectedAnswer: { type: Number, default: null },
  isCorrect: { type: Boolean, default: false }
});

const aptitudeAttemptSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    test: { type: mongoose.Schema.Types.ObjectId, ref: 'AptitudeTest', required: true },
    answers: [answerSchema],
    score: { type: Number, default: 0 },
    totalQuestions: { type: Number, default: 0 },
    timeTakenSeconds: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('AptitudeAttempt', aptitudeAttemptSchema);
