import React from 'react';
import { useState } from 'react';
import api from '../services/api.js';

const roleOptions = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Software Engineer (General)',
  'Data Analyst',
  'DevOps Engineer',
  'Mobile App Developer',
  'QA/Testing Engineer',
  'Machine Learning Engineer'
];

export default function AIQuestions() {
  const [form, setForm] = useState({ role: 'Frontend Developer', level: 'entry', skills: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const skillList = form.skills
        .split(',')
        .map((skill) => skill.trim())
        .filter(Boolean);
      const { data } = await api.post('/ai/questions', { ...form, skills: skillList });
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page narrow">
      <h1>AI Interview Questions</h1>
      <form className="form panel" onSubmit={submit}>
        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          {roleOptions.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
        <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
          <option value="entry">Entry</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
        <input
          placeholder="Skills, e.g. Java, Spring Boot, MySQL"
          value={form.skills}
          onChange={(e) => setForm({ ...form, skills: e.target.value })}
        />
        <button className="btn primary" disabled={loading}>{loading ? 'Generating...' : 'Generate Questions'}</button>
      </form>
      {result && <ol className="panel question-list">{result.questions.map((question) => <li key={question}>{question}</li>)}</ol>}
    </section>
  );
}