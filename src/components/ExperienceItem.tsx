import React from 'react';
import { Building, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  responsibilities
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow print:shadow-none avoid-page-break">
      {/* Job Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-2 print:text-base">{title}</h3>
      
      {/* Company and Period Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
        <div className="flex items-center gap-2 text-gray-600">
          <Building className="w-4 h-4" />
          <span className="font-medium text-sm">{company} – {location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="italic text-sm">{period}</span>
        </div>
      </div>
      
      {/* Responsibilities */}
      <ul className="space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-3">
            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};