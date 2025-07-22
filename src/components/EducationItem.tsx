import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  period,
  description
}) => {
  return (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
      {/* Degree Title */}
      <h3 className="text-base font-bold text-gray-800 mb-2">{degree}</h3>
      
      {/* Institution and Period */}
      <div className="flex flex-col gap-2 mb-3">
        <div className="flex items-center gap-2 text-gray-600">
          <GraduationCap className="w-4 h-4" />
          <span className="font-medium text-sm">{institution}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="italic text-sm">{period}</span>
        </div>
      </div>
      
      {/* Description */}
      {description && (
        <p className="text-gray-700 text-xs">{description}</p>
      )}
    </div>
  );
};