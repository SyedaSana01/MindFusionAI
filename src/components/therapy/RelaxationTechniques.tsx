import React from 'react';
import { Wind } from 'lucide-react';
import { RelaxationTechnique } from '../../types/therapy';
import ExerciseCard from './ExerciseCard';
import AnimatedContent from './AnimatedContent';

interface RelaxationTechniquesProps {
  recommendations?: RelaxationTechnique[];
}

export default function RelaxationTechniques({ recommendations = [] }: RelaxationTechniquesProps) {
  const handleExploreMore = () => {
    // Handle explore more click
    console.log('Exploring more relaxation techniques');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Wind className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">Relaxation Techniques</h2>
      </div>

      <AnimatedContent type="relaxation" />

      <div className="space-y-4">
        {recommendations.map((technique) => (
          <ExerciseCard
            key={technique.id}
            title={technique.title}
            description={technique.description}
            duration={technique.duration}
            completed={technique.completed}
            type="relaxation"
            onClick={() => {/* Handle technique click */}}
          />
        ))}
      </div>

      <button 
        onClick={handleExploreMore}
        className="mt-4 w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
      >
        Explore More
      </button>
    </div>
  );
}