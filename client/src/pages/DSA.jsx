import React from 'react';
import { useEffect, useState } from 'react';
import api from '../services/api.js';

export default function DSA() {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => { api.get('/dsa/questions').then((res) => { setQuestions(res.data); setSelected(res.data[0]); }); }, []);
  return <section className="page"><h1>DSA Practice</h1><div className="grid two dsa-layout"><aside className="panel list-panel">{questions.map((question) => <button key={question._id} className={selected?._id === question._id ? 'list-item active' : 'list-item'} onClick={() => setSelected(question)}>{question.title}<span>{question.difficulty}</span></button>)}</aside>{selected && <article className="panel"><h2>{selected.title}</h2><p><strong>{selected.difficulty}</strong> - {selected.tags.join(', ')}</p><p>{selected.problem}</p><h3>Examples</h3>{selected.examples.map((example) => <pre key={example.input}>{example.input}\nOutput: {example.output}</pre>)}<h3>Approach</h3><p>{selected.solutionApproach}</p><h3>Solution</h3><pre>{selected.solutionCode}</pre></article>}</div></section>;
}
