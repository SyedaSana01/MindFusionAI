import React from 'react';

type RiskLevelProps = {
  level: 'low' | 'moderate' | 'high';
  score: number;
};

const riskColors = {
  low: 'bg-green-500',
  moderate: 'bg-yellow-500',
  high: 'bg-red-500',
};

export default function RiskLevel({ level, score }: RiskLevelProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Depression Risk Level</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Current Risk:</span>
          <span className={`px-3 py-1 rounded-full text-white text-sm ${riskColors[level]}`}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Risk Score</span>
            <span className="font-medium">{score}/10</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className={`h-full rounded-full ${riskColors[level]}`}
              style={{ width: `${score * 10}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}