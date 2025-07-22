import React from 'react';
import { Mail, Phone, MapPin, Calendar, User, Globe, Award } from 'lucide-react';
import { PersonalInfo } from '../types/cv';

interface CVHeaderProps {
  data: PersonalInfo;
}

export const CVHeader: React.FC<CVHeaderProps> = ({ data }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative p-8 print:p-6">
        {/* Main Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 border border-white/30">
            <span className="text-4xl">🪑</span>
          </div>
          <h1 className="text-4xl font-bold mb-3 print:text-3xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {data.name}
          </h1>
          <p className="text-xl text-blue-100 font-medium print:text-lg max-w-2xl mx-auto">
            {data.title}
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-blue-200">Expert certifié • 3+ années d'expérience</span>
          </div>
        </div>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-medium">Email</p>
                <a href={`mailto:${data.email}`} className="text-white hover:text-blue-200 transition-colors text-sm font-medium">
                  {data.email}
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/30 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-200" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-medium">Téléphone</p>
                <span className="text-white text-sm font-medium">{data.phone}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-200" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-medium">Localisation</p>
                <span className="text-white text-sm font-medium">{data.location}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500/30 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-yellow-200" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-medium">Naissance</p>
                <span className="text-white text-sm font-medium">{data.birthDate}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500/30 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-red-200" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-medium">Statut</p>
                <span className="text-white text-sm font-medium">{data.status}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500/30 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-cyan-200" />
              </div>
              <div>
                <p className="text-xs text-blue-200 uppercase font-medium">Portfolio</p>
                <a href={`https://${data.website}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors text-sm font-medium">
                  {data.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};