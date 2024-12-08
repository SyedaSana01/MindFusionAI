import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
}

export default function Logo({ size = 'md', variant = 'default' }: LogoProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-xl space-x-1.5';
      case 'lg':
        return 'text-3xl space-x-2.5';
      default:
        return 'text-2xl space-x-2';
    }
  };

  const getColorClasses = () => {
    return variant === 'light' ? 'text-white' : 'text-indigo-600';
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 20;
      case 'lg':
        return 32;
      default:
        return 24;
    }
  };

  return (
    <div className={`flex items-center ${getSizeClasses()}`}>
      <div className="relative">
        <Brain
          size={getIconSize()}
          className={`${getColorClasses()} transition-transform duration-300 transform hover:scale-110`}
        />
        <Sparkles
          size={getIconSize() * 0.6}
          className={`${getColorClasses()} absolute -top-1 -right-1 opacity-75`}
        />
      </div>
      <span className={`font-bold tracking-tight ${getColorClasses()}`}>
        MindFusion<span className="text-indigo-400">AI</span>
      </span>
    </div>
  );
}