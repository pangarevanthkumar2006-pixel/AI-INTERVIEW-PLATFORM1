import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AIQuestions from './pages/AIQuestions.jsx';
import AptitudeAttempt from './pages/AptitudeAttempt.jsx';
import AptitudeTests from './pages/AptitudeTests.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DSA from './pages/DSA.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ResumeAnalyzer from './pages/ResumeAnalyzer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="app-shell">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/aptitude" element={<AptitudeTests />} />
            <Route path="/aptitude/:id" element={<AptitudeAttempt />} />
            <Route path="/dsa" element={<DSA />} />
            <Route path="/ai-questions" element={<AIQuestions />} />
            <Route path="/resume" element={<ResumeAnalyzer />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}
