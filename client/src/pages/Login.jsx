import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    setError('');
    try {
      await login(form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  }

  return <section className="auth-panel"><h1>Login</h1><form onSubmit={submit} className="form"><input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><button className="btn primary">Login</button>{error && <p className="error">{error}</p>}</form><p>New here? <Link to="/register">Create an account</Link></p></section>;
}
