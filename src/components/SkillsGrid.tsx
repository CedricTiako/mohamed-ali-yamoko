import React from 'react';
import { Check } from 'lucide-react';

interface SkillsGridProps {
  skills: string[];
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-start gap-2 p-2 bg-green-50 rounded-lg border border-green-200"
        >
          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span className="text-gray-800 font-medium text-sm">{skill}</span>
        </div>
      ))}
    </div>
  );
};