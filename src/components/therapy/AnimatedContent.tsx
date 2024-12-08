import React from 'react';
import VideoPlayer from './VideoPlayer';

interface AnimatedContentProps {
  type: 'cbt' | 'mindfulness' | 'relaxation';
}

export default function AnimatedContent({ type }: AnimatedContentProps) {
  const getVideoContent = () => {
    switch (type) {
      case 'cbt':
        return {
          title: 'Understanding CBT Techniques',
          url: 'https://www.example.com/videos/cbt-intro.mp4',
          thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80'
        };
      case 'mindfulness':
        return {
          title: 'Guided Mindfulness Meditation',
          url: 'https://www.example.com/videos/mindfulness.mp4',
          thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
        };
      case 'relaxation':
        return {
          title: 'Progressive Muscle Relaxation Guide',
          url: 'https://www.example.com/videos/relaxation.mp4',
          thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
        };
      default:
        return null;
    }
  };

  const content = getVideoContent();
  if (!content) return null;

  return (
    <div className="mb-6">
      <VideoPlayer {...content} />
    </div>
  );
}