import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    setError('');
    try {
      await register(form.name, form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  }

  return <section className="auth-panel"><h1>Create Account</h1><form onSubmit={submit} className="form"><input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /><input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><button className="btn primary">Register</button>{error && <p className="error">{error}</p>}</form><p>Already have an account? <Link to="/login">Login</Link></p></section>;
}
