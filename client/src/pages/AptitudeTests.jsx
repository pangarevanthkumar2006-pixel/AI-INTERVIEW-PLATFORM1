import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api.js';

export default function AptitudeTests() {
  const [tests, setTests] = useState([]);
  useEffect(() => { api.get('/aptitude/tests').then((res) => setTests(res.data)); }, []);
  return <section className="page"><h1>Aptitude Tests</h1><div className="card-grid">{tests.map((test) => <article className="item-card" key={test._id}><h2>{test.title}</h2><p>{test.category}</p><p>{test.questionCount} questions - {test.durationMinutes} min</p><Link className="btn primary" to={'/aptitude/' + test._id}>Start Test</Link></article>)}</div></section>;
}
