import { useState, useEffect } from 'react';
import { TherapyRecommendations } from '../types/therapy';

export function useTherapyRecommendations() {
  const [recommendations, setRecommendations] = useState<TherapyRecommendations | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call - replace with actual API integration
    const fetchRecommendations = async () => {
      try {
        // Simulated data
        const mockData: TherapyRecommendations = {
          cbtExercises: [
            {
              id: '1',
              title: 'Thought Record',
              description: 'Document and analyze negative thoughts',
              duration: 15,
              completed: false,
              type: 'thought-record',
            },
            {
              id: '2',
              title: 'Activity Planning',
              description: 'Schedule enjoyable activities',
              duration: 10,
              completed: true,
              type: 'behavioral-activation',
            },
          ],
          mindfulness: [
            {
              id: '3',
              title: 'Box Breathing',
              description: 'Simple breathing exercise for stress relief',
              duration: 5,
              completed: false,
              type: 'breathing',
              audioUrl: '/audio/box-breathing.mp3',
            },
          ],
          relaxation: [
            {
              id: '4',
              title: 'Progressive Muscle Relaxation',
              description: 'Release tension through guided relaxation',
              duration: 20,
              completed: false,
              type: 'progressive-muscle',
              audioUrl: '/audio/pmr.mp3',
            },
          ],
        };

        setRecommendations(mockData);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return { recommendations, loading };
}