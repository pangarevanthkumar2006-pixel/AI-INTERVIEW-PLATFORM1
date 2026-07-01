import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard.jsx';
import Timer from '../components/Timer.jsx';
import api from '../services/api.js';

export default function AptitudeAttempt() {
  const { id } = useParams();
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [startedAt] = useState(Date.now());

  useEffect(() => { api.get('/aptitude/tests/' + id).then((res) => setTest(res.data)); }, [id]);

  const submit = useCallback(async () => {
    if (!test || result) return;
    const payload = { answers: Object.entries(answers).map(([questionId, selectedAnswer]) => ({ questionId, selectedAnswer })), timeTakenSeconds: Math.round((Date.now() - startedAt) / 1000) };
    const { data } = await api.post('/aptitude/tests/' + id + '/submit', payload);
    setResult(data);
  }, [answers, id, result, startedAt, test]);

  if (!test) return <p>Loading test...</p>;
  if (result) return <section className="page narrow"><h1>Result</h1><div className="result-score">{result.score}/{result.totalQuestions}</div><p>Your test has been submitted.</p></section>;
  return <section className="page"><div className="page-head"><h1>{test.title}</h1><Timer seconds={test.durationMinutes * 60} onComplete={submit} /></div>{test.questions.map((question) => <QuestionCard key={question._id} question={question} value={answers[question._id]} onChange={(value) => setAnswers({ ...answers, [question._id]: value })} />)}<button className="btn primary" onClick={submit}>Submit Test</button></section>;
}
