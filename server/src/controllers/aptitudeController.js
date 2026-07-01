import AptitudeAttempt from '../models/AptitudeAttempt.js';
import AptitudeTest from '../models/AptitudeTest.js';

export async function listTests(_req, res) {
  const tests = await AptitudeTest.find().select('title category durationMinutes questions createdAt');
  res.json(tests.map((test) => ({ ...test.toObject(), questionCount: test.questions.length, questions: undefined })));
}

export async function getTest(req, res) {
  const test = await AptitudeTest.findById(req.params.id);
  if (!test) return res.status(404).json({ message: 'Test not found' });
  const safeQuestions = test.questions.map((q) => ({ _id: q._id, question: q.question, options: q.options }));
  res.json({ _id: test._id, title: test.title, category: test.category, durationMinutes: test.durationMinutes, questions: safeQuestions });
}

export async function submitTest(req, res) {
  const { answers = [], timeTakenSeconds = 0 } = req.body;
  const test = await AptitudeTest.findById(req.params.id);
  if (!test) return res.status(404).json({ message: 'Test not found' });
  let score = 0;
  const graded = test.questions.map((question) => {
    const submitted = answers.find((answer) => String(answer.questionId) === String(question._id));
    const selectedAnswer = submitted?.selectedAnswer ?? null;
    const isCorrect = selectedAnswer === question.correctAnswer;
    if (isCorrect) score += 1;
    return { questionId: question._id, selectedAnswer, isCorrect };
  });
  const attempt = await AptitudeAttempt.create({ user: req.user._id, test: test._id, answers: graded, score, totalQuestions: test.questions.length, timeTakenSeconds });
  res.status(201).json({ attempt, score, totalQuestions: test.questions.length });
}
