import React from 'react';
import { Trophy, Target, Calendar, TrendingUp } from 'lucide-react';

const metrics = [
  {
    icon: Trophy,
    label: 'Goals Completed',
    value: '12',
    change: '+3',
    changeType: 'positive',
  },
  {
    icon: Target,
    label: 'Current Streak',
    value: '7 days',
    change: '+2',
    changeType: 'positive',
  },
  {
    icon: Calendar,
    label: 'Consistency Score',
    value: '85%',
    change: '+5%',
    changeType: 'positive',
  },
  {
    icon: TrendingUp,
    label: 'Overall Progress',
    value: '72%',
    change: '+8%',
    changeType: 'positive',
  },
];

export default function ProgressOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.label} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                  <span className={`ml-2 text-sm ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}