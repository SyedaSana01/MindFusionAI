import React from 'react';
import { Activity, Brain, Heart } from 'lucide-react';

const activities = [
  {
    icon: Activity,
    name: 'Daily Steps',
    value: '8,432',
    change: '+12%',
    positive: true,
  },
  {
    icon: Heart,
    name: 'Avg Heart Rate',
    value: '72 bpm',
    change: '-3 bpm',
    positive: true,
  },
  {
    icon: Brain,
    name: 'Mindfulness',
    value: '45 min',
    change: '+15 min',
    positive: true,
  },
];

export default function ActivitySummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {activities.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.name} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{item.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                  <span className={`ml-2 text-sm ${
                    item.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.change}
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