import React from 'react';
import AudioAnalysisComponent from '../../components/assessment/AudioAnalysis';
import EmotionSummary from '../../components/assessment/EmotionSummary';

export default function SpeechAnalysisPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Speech Analysis</h1>
      <div className="grid grid-cols-1 gap-6">
        <AudioAnalysisComponent />
        <EmotionSummary />
      </div>
    </div>
  );
}