import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import AnalysisHub from './pages/analysis/AnalysisHub';
import TextAnalysisPage from './pages/analysis/TextAnalysis';
import SpeechAnalysisPage from './pages/analysis/SpeechAnalysis';
import FacialAnalysisPage from './pages/analysis/FacialAnalysis';
import BehavioralAnalysisPage from './pages/analysis/BehavioralAnalysis';
import MoodTracking from './pages/mood/MoodTracking';
import ProgressDashboard from './pages/progress/ProgressDashboard';
import JournalPage from './pages/journal/JournalPage';
import TherapyDashboard from './pages/therapy/TherapyDashboard';
import NotificationsCenter from './pages/notifications/NotificationsCenter';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analysis" element={<AnalysisHub />} />
              <Route path="/analysis/text" element={<TextAnalysisPage />} />
              <Route path="/analysis/speech" element={<SpeechAnalysisPage />} />
              <Route path="/analysis/facial" element={<FacialAnalysisPage />} />
              <Route path="/analysis/behavioral" element={<BehavioralAnalysisPage />} />
              <Route path="/mood" element={<MoodTracking />} />
              <Route path="/progress" element={<ProgressDashboard />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/therapy" element={<TherapyDashboard />} />
              <Route path="/notifications" element={<NotificationsCenter />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}