import React from 'react';
import CBTExercises from '../../components/therapy/CBTExercises';
import MindfulnessActivities from '../../components/therapy/MindfulnessActivities';
import RelaxationTechniques from '../../components/therapy/RelaxationTechniques';
import TherapyProgress from '../../components/therapy/TherapyProgress';
import EmergencySupport from '../../components/therapy/EmergencySupport';
import TherapistApproved from '../../components/therapy/TherapistApproved';
import { useTherapyRecommendations } from '../../hooks/useTherapyRecommendations';

export default function TherapyDashboard() {
  const { recommendations, loading } = useTherapyRecommendations();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Therapeutic Recommendations</h1>
        <EmergencySupport />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CBTExercises recommendations={recommendations?.cbtExercises} />
        <MindfulnessActivities recommendations={recommendations?.mindfulness} />
        <RelaxationTechniques recommendations={recommendations?.relaxation} />
      </div>

      <TherapistApproved />
      <TherapyProgress />
    </div>
  );
}