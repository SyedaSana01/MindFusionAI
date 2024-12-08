import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

interface ExerciseCardProps {
  title: string;
  description: string;
  duration: number;
  completed?: boolean;
  type: 'cbt' | 'mindfulness' | 'relaxation';
  onClick: () => void;
}

export default function ExerciseCard({
  title,
  description,
  duration,
  completed = false,
  type,
  onClick,
}: ExerciseCardProps) {
  const getBgColor = () => {
    switch (type) {
      case 'cbt':
        return completed ? 'bg-blue-50' : 'bg-white hover:bg-blue-50';
      case 'mindfulness':
        return completed ? 'bg-green-50' : 'bg-white hover:bg-green-50';
      case 'relaxation':
        return completed ? 'bg-purple-50' : 'bg-white hover:bg-purple-50';
      default:
        return 'bg-white';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg border transition-colors ${getBgColor()}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration} min</span>
          </div>
        </div>
        {completed && (
          <CheckCircle className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
        )}
      </div>
    </button>
  );
}