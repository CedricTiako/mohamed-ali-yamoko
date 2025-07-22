import React from 'react';

interface CVSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export const CVSection: React.FC<CVSectionProps> = ({ 
  title, 
  icon, 
  children, 
  className = '',
  gradient = 'from-blue-500 to-purple-600'
}) => {
  return (
    <section className={`mb-8 ${className} avoid-page-break`}>
      <div className="relative mb-6">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg opacity-10`} />
        <div className="relative flex items-center gap-3 p-4 border-l-4 border-gradient-to-b from-blue-500 to-purple-600">
          {icon && (
            <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
              {icon}
            </div>
          )}
          <h2 className="text-2xl font-bold text-gray-900 print:text-xl">
            {title}
          </h2>
        </div>
      </div>
      
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};