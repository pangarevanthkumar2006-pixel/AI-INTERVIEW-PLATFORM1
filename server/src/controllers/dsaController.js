import DSAQuestion from '../models/DSAQuestion.js';

export async function listDSAQuestions(req, res) {
  const { difficulty, tag } = req.query;
  const query = {};
  if (difficulty) query.difficulty = difficulty;
  if (tag) query.tags = tag;
  const questions = await DSAQuestion.find(query).sort({ difficulty: 1, title: 1 });
  res.json(questions);
}

export async function getDSAQuestion(req, res) {
  const question = await DSAQuestion.findById(req.params.id);
  if (!question) return res.status(404).json({ message: 'Question not found' });
  res.json(question);
}
