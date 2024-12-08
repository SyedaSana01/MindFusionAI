import React from 'react';
import MoodChart from '../components/dashboard/MoodChart';
import RiskLevel from '../components/dashboard/RiskLevel';
import ActivitySummary from '../components/dashboard/ActivitySummary';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <ActivitySummary />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MoodChart />
        <RiskLevel level="low" score={3} />
      </div>
    </div>
  );
}