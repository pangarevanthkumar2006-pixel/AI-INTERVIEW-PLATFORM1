import React from 'react';
import { Brain, Code2, FileText, LayoutDashboard, LogOut, Sparkles, TimerReset } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <header className="topbar">
      <Link className="brand" to="/"><Brain size={24} /> Interview Prep AI</Link>
      {isAuthenticated && (
        <nav className="navlinks">
          <NavLink to="/"><LayoutDashboard size={18} /> Dashboard</NavLink>
          <NavLink to="/aptitude"><TimerReset size={18} /> Aptitude</NavLink>
          <NavLink to="/dsa"><Code2 size={18} /> DSA</NavLink>
          <NavLink to="/ai-questions"><Sparkles size={18} /> AI Questions</NavLink>
          <NavLink to="/resume"><FileText size={18} /> Resume</NavLink>
        </nav>
      )}
      <div className="top-actions">
        {isAuthenticated ? <><span>{user?.name}</span><button className="icon-btn" onClick={logout} title="Logout"><LogOut size={18} /></button></> : <Link className="btn" to="/login">Login</Link>}
      </div>
    </header>
  );
}
