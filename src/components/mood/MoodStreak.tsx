import React from 'react';
import { Flame } from 'lucide-react';

type MoodStreakProps = {
  streak: number;
};

export default function MoodStreak({ streak }: MoodStreakProps) {
  return (
    <div className="flex items-center bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full">
      <Flame className="w-5 h-5 mr-2" />
      <span className="font-medium">{streak} Day Streak!</span>
    </div>
  );
}