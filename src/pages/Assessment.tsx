import React from 'react';
import TextAnalysis from '../components/assessment/TextAnalysis';
import AudioAnalysis from '../components/assessment/AudioAnalysis';
import FacialAnalysis from '../components/assessment/FacialAnalysis';
import BehavioralAnalysis from '../components/assessment/BehavioralAnalysis';
import EmotionSummary from '../components/assessment/EmotionSummary';

export default function Assessment() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Mental Health Assessment</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TextAnalysis />
        <AudioAnalysis />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FacialAnalysis />
        <BehavioralAnalysis />
      </div>
      <EmotionSummary />
    </div>
  );
}