import React from 'react';
import BehavioralAnalysisComponent from '../../components/assessment/BehavioralAnalysis';
import EmotionSummary from '../../components/assessment/EmotionSummary';

export default function BehavioralAnalysisPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Behavioral Analysis</h1>
      <div className="grid grid-cols-1 gap-6">
        <BehavioralAnalysisComponent />
        <EmotionSummary />
      </div>
    </div>
  );
}