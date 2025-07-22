import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
  isLast?: boolean;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  location,
  period,
  responsibilities,
  achievements,
  isLast = false
  className = ''
}) => {
  return (
    <div className={`relative pl-8 pb-8 ${className}`}>
      {/* Timeline line */}
      {!isLast && (
        <div className="timeline-line absolute left-4 top-8 w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-300" />
      )}
      
      {/* Timeline dot */}
      <div className="timeline-dot absolute left-2 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg" />
      
      {/* Content */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-5">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">{company} • {location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="italic">{period}</span>
            </div>
          </div>
        </div>
        
        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Responsabilités :</h4>
          <ul className="space-y-1">
            {responsibilities.map((resp, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                {resp}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <h4 className="font-semibold text-green-800 text-sm">Réalisations :</h4>
            </div>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};