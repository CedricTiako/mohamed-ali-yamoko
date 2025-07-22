import React from 'react';

interface ProgressBarProps {
  percentage: number;
  color?: string;
  height?: string;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percentage, 
  color = 'bg-blue-500', 
  height = 'h-2',
  animated = true 
}) => {
  return (
    <div className={`w-full ${height} bg-gray-200 rounded-full overflow-hidden`}>
      <div 
        className={`${height} ${color} rounded-full transition-all duration-1000 ease-out ${
          animated ? 'animate-pulse' : ''
        }`}
        style={{ 
          width: `${percentage}%`,
          background: `linear-gradient(90deg, ${color.includes('blue') ? '#3b82f6' : '#10b981'} 0%, ${color.includes('blue') ? '#1d4ed8' : '#059669'} 100%)`
        }}
      />
    </div>
  );
};