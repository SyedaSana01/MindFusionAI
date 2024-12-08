import React from 'react';
import ProgressOverview from '../../components/progress/ProgressOverview';
import GoalTracker from '../../components/progress/GoalTracker';
import WeeklyReport from '../../components/progress/WeeklyReport';
import ProgressHeatmap from '../../components/progress/ProgressHeatmap';
import ExportButton from '../../components/progress/ExportButton';

export default function ProgressDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Progress Dashboard</h1>
        <ExportButton />
      </div>
      
      <ProgressOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GoalTracker />
        <WeeklyReport />
      </div>
      
      <ProgressHeatmap />
    </div>
  );
}