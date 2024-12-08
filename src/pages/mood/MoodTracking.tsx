import React from 'react';
import DailyMoodInput from '../../components/mood/DailyMoodInput';
import MoodJournal from '../../components/mood/MoodJournal';
import MoodInsights from '../../components/mood/MoodInsights';
import MoodStreak from '../../components/mood/MoodStreak';

export default function MoodTracking() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Mood Tracking</h1>
        <MoodStreak streak={7} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DailyMoodInput />
        <MoodJournal />
      </div>
      <MoodInsights />
    </div>
  );
}