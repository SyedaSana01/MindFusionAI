import React from 'react';
import { Flower2 } from 'lucide-react';
import { MindfulnessActivity } from '../../types/therapy';
import ExerciseCard from './ExerciseCard';
import AnimatedContent from './AnimatedContent';

interface MindfulnessActivitiesProps {
  recommendations?: MindfulnessActivity[];
}

export default function MindfulnessActivities({ recommendations = [] }: MindfulnessActivitiesProps) {
  const handleExploreMore = () => {
    // Handle explore more click
    console.log('Exploring more mindfulness activities');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <Flower2 className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">Mindfulness Activities</h2>
      </div>

      <AnimatedContent type="mindfulness" />

      <div className="space-y-4">
        {recommendations.map((activity) => (
          <ExerciseCard
            key={activity.id}
            title={activity.title}
            description={activity.description}
            duration={activity.duration}
            completed={activity.completed}
            type="mindfulness"
            onClick={() => {/* Handle activity click */}}
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