import React from 'react';
import { Brain } from 'lucide-react';
import { CBTExercise } from '../../types/therapy';
import ExerciseCard from './ExerciseCard';
import AnimatedContent from './AnimatedContent';

interface CBTExercisesProps {
  recommendations?: CBTExercise[];
}

export default function CBTExercises({ recommendations = [] }: CBTExercisesProps) {
  const handleExploreMore = () => {
    // Handle explore more click
    console.log('Exploring more CBT exercises');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Brain className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">CBT Exercises</h2>
      </div>

      <AnimatedContent type="cbt" />
      
      <div className="space-y-4">
        {recommendations.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            title={exercise.title}
            description={exercise.description}
            duration={exercise.duration}
            completed={exercise.completed}
            type="cbt"
            onClick={() => {/* Handle exercise click */}}
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