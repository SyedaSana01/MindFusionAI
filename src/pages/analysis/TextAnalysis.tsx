import React from 'react';
import TextAnalysisComponent from '../../components/assessment/TextAnalysis';
import EmotionSummary from '../../components/assessment/EmotionSummary';

export default function TextAnalysisPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Text Analysis</h1>
      <div className="grid grid-cols-1 gap-6">
        <TextAnalysisComponent />
        <EmotionSummary />
      </div>
    </div>
  );
}