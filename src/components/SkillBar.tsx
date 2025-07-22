import React from 'react';
import { ProgressBar } from './ProgressBar';

interface SkillBarProps {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'language';
  className?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, category, className = '' }) => {
  const getColor = () => {
    switch (category) {
      case 'technical': return 'bg-blue-500';
      case 'soft': return 'bg-green-500';
      case 'language': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = () => {
    switch (category) {
      case 'technical': return '⚙️';
      case 'soft': return '🤝';
      case 'language': return '🌍';
      default: return '📊';
    }
  };

  return (
    <div className={`mb-4 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{getCategoryIcon()}</span>
          <span className="font-medium text-gray-800 text-sm">{name}</span>
        </div>
        <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
          {level}%
        </span>
      </div>
      <div className="progress-bar-container">
        <ProgressBar percentage={level} color={getColor()} />
      </div>
    </div>
  );
};