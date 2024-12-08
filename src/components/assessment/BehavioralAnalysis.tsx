import React from 'react';
import { Activity, Brain, Clock } from 'lucide-react';

const metrics = [
  {
    icon: Activity,
    name: 'Activity Level',
    value: '75%',
    change: '+5%',
    positive: true,
  },
  {
    icon: Brain,
    name: 'Response Time',
    value: '1.2s',
    change: '-0.3s',
    positive: true,
  },
  {
    icon: Clock,
    name: 'Daily Usage',
    value: '45m',
    change: '+10m',
    positive: true,
  },
];

export default function BehavioralAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Behavioral Patterns</h2>
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <metric.icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-600">{metric.name}</p>
              <div className="flex items-baseline">
                <p className="text-lg font-semibold text-gray-900">{metric.value}</p>
                <span className={`ml-2 text-sm ${
                  metric.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}