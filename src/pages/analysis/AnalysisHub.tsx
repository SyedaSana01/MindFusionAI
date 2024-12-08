import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mic, Camera, Activity } from 'lucide-react';

const analysisTypes = [
  {
    title: 'Text Analysis',
    description: 'Analyze written responses and journal entries',
    icon: MessageSquare,
    path: '/analysis/text',
    color: 'bg-blue-500',
  },
  {
    title: 'Speech Analysis',
    description: 'Analyze voice patterns and emotional tones',
    icon: Mic,
    path: '/analysis/speech',
    color: 'bg-green-500',
  },
  {
    title: 'Facial Expression',
    description: 'Analyze facial expressions and emotions',
    icon: Camera,
    path: '/analysis/facial',
    color: 'bg-purple-500',
  },
  {
    title: 'Behavioral Patterns',
    description: 'Track and analyze behavioral metrics',
    icon: Activity,
    path: '/analysis/behavioral',
    color: 'bg-orange-500',
  },
];

export default function AnalysisHub() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Analysis Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {analysisTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Link
              key={type.path}
              to={type.path}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${type.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-lg font-semibold text-gray-900">{type.title}</h2>
                </div>
                <p className="text-gray-600">{type.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}