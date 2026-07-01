import React from 'react';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import StatCard from '../components/StatCard.jsx';
import api from '../services/api.js';

export default function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => { api.get('/dashboard').then((res) => setData(res.data)); }, []);
  if (!data) return <p>Loading dashboard...</p>;
  return (
    <section className="page">
      <h1>Performance Dashboard</h1>
      <div className="stats"><StatCard label="Average Score" value={data.totals.averageScore + '%'} /><StatCard label="Aptitude Attempts" value={data.totals.attempts} /><StatCard label="AI Sets" value={data.totals.aiQuestionSets} /><StatCard label="Resume Analyses" value={data.totals.resumeAnalyses} /></div>
      <div className="grid two"><section className="panel"><h2>Aptitude Trend</h2><ResponsiveContainer height={260}><LineChart data={data.aptitudeTrend}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="label" /><YAxis /><Tooltip /><Line dataKey="score" stroke="#2563eb" strokeWidth={3} /></LineChart></ResponsiveContainer></section><section className="panel"><h2>Resume Scores</h2><ResponsiveContainer height={260}><BarChart data={data.recentResumeScores}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="role" /><YAxis /><Tooltip /><Bar dataKey="score" fill="#0f766e" /></BarChart></ResponsiveContainer></section></div>
    </section>
  );
}
