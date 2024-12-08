import React from 'react';
import FacialAnalysisComponent from '../../components/assessment/FacialAnalysis';
import EmotionSummary from '../../components/assessment/EmotionSummary';

export default function FacialAnalysisPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Facial Expression Analysis</h1>
      <div className="grid grid-cols-1 gap-6">
        <FacialAnalysisComponent />
        <EmotionSummary />
      </div>
    </div>
  );
}