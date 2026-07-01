import React from 'react';
import { useState } from 'react';
import api from '../services/api.js';

export default function ResumeAnalyzer() {
  const [targetRole, setTargetRole] = useState('Software Engineer');
  const [resumeText, setResumeText] = useState('');
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const body = new FormData();
    body.append('targetRole', targetRole);
    body.append('resumeText', resumeText);
    if (file) body.append('resume', file);
    const { data } = await api.post('/ai/resume', body, { headers: { 'Content-Type': 'multipart/form-data' } });
    setAnalysis(data);
    setLoading(false);
  }

  return <section className="page"><h1>Resume Analyzer</h1><form className="form panel" onSubmit={submit}><input value={targetRole} onChange={(e) => setTargetRole(e.target.value)} /><input type="file" accept=".pdf,.txt" onChange={(e) => setFile(e.target.files[0])} /><textarea rows="10" placeholder="Paste resume text here" value={resumeText} onChange={(e) => setResumeText(e.target.value)} /><button className="btn primary" disabled={loading}>{loading ? 'Analyzing...' : 'Analyze Resume'}</button></form>{analysis && <article className="panel"><h2>Score: {analysis.score}/100</h2><p>{analysis.summary}</p><h3>Strengths</h3><ul>{analysis.strengths.map((item) => <li key={item}>{item}</li>)}</ul><h3>Gaps</h3><ul>{analysis.gaps.map((item) => <li key={item}>{item}</li>)}</ul><h3>Suggestions</h3><ul>{analysis.suggestions.map((item) => <li key={item}>{item}</li>)}</ul></article>}</section>;
}
