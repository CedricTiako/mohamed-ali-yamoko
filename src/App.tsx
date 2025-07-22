import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { CVHeader } from './components/CVHeader';
import { CVSection } from './components/CVSection';
import { TimelineItem } from './components/Timeline';
import { SkillBar } from './components/SkillBar';
import { cvData } from './data/cvData';
import {
  Target,
  Briefcase,
  GraduationCap,
  Globe,
  Heart,
  CheckCircle,
  Download,
  Printer,
  Star,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  async function downloadPDF() {
    setIsGeneratingPDF(true);
    const element = document.getElementById('cv-content');
    
    if (!element) return;

    try {
      // Préparer l'élément pour un rendu optimal
      element.classList.add('pdf-rendering');
      
      // Attendre que tous les styles soient appliqués
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Forcer le recalcul des styles
      element.offsetHeight;
      
      // Capturer les dimensions exactes de l'élément
      const rect = element.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(element);
      
      // Configuration PDF ultra-optimisée pour rendu pixel-perfect
      const opt = {
        margin: 0, // Pas de marge pour un contrôle total
        filename: `${cvData.personalInfo.name.replace(/\s+/g, '_')}_CV_Premium.pdf`,
        image: { 
          type: 'jpeg', 
          quality: 1.0,
          crossOrigin: 'anonymous'
        },
        html2canvas: { 
          scale: 2, // Échelle optimale pour la qualité
          useCORS: true, 
          allowTaint: false,
          backgroundColor: '#ffffff',
          letterRendering: true,
          logging: false,
          width: Math.ceil(rect.width),
          height: Math.ceil(rect.height),
          scrollX: 0,
          scrollY: 0,
          windowWidth: rect.width,
          windowHeight: rect.height,
          dpi: 300,
          foreignObjectRendering: true,
          imageTimeout: 30000,
          removeContainer: false,
          async: true,
          proxy: undefined,
          onclone: (clonedDoc: Document) => {
            // Optimiser le document cloné
            const clonedElement = clonedDoc.getElementById('cv-content');
            if (clonedElement) {
              // Appliquer les styles critiques directement
              clonedElement.style.width = `${rect.width}px`;
              clonedElement.style.minHeight = `${rect.height}px`;
              clonedElement.style.maxWidth = 'none';
              clonedElement.style.transform = 'none';
              clonedElement.style.boxShadow = 'none';
              clonedElement.style.margin = '0';
              clonedElement.style.padding = '0';
              
              // Optimiser tous les éléments enfants
              const allElements = clonedElement.querySelectorAll('*');
              allElements.forEach((el: Element) => {
                const htmlEl = el as HTMLElement;
                htmlEl.style.transform = 'none';
                htmlEl.style.transition = 'none';
                htmlEl.style.animation = 'none';
                htmlEl.style.willChange = 'auto';
                
                // Préserver les gradients et couleurs
                if (htmlEl.style.background && htmlEl.style.background.includes('gradient')) {
                  htmlEl.style.webkitPrintColorAdjust = 'exact';
                  htmlEl.style.colorAdjust = 'exact';
                }
              });
              
              // Ajouter les styles CSS critiques directement dans le document cloné
              const style = clonedDoc.createElement('style');
              style.textContent = `
                * {
                  -webkit-print-color-adjust: exact !important;
                  color-adjust: exact !important;
                  print-color-adjust: exact !important;
                  box-sizing: border-box !important;
                }
                
                body {
                  margin: 0 !important;
                  padding: 0 !important;
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                  -webkit-font-smoothing: antialiased !important;
                  -moz-osx-font-smoothing: grayscale !important;
                }
                
                #cv-content {
                  width: ${rect.width}px !important;
                  min-height: ${rect.height}px !important;
                  max-width: none !important;
                  margin: 0 !important;
                  padding: 0 !important;
                  box-shadow: none !important;
                  transform: none !important;
                  background: white !important;
                }
                
                .bg-gradient-to-br {
                  background: linear-gradient(135deg, var(--tw-gradient-stops)) !important;
                }
                
                .bg-gradient-to-r {
                  background: linear-gradient(90deg, var(--tw-gradient-stops)) !important;
                }
                
                .from-slate-900 { --tw-gradient-from: #0f172a !important; }
                .via-blue-900 { --tw-gradient-via: #1e3a8a !important; }
                .to-slate-800 { --tw-gradient-to: #1e293b !important; }
                
                .text-white { color: #ffffff !important; }
                .text-blue-100 { color: #dbeafe !important; }
                .text-blue-200 { color: #bfdbfe !important; }
                
                .shadow-2xl, .shadow-xl, .shadow-lg, .shadow-md, .shadow-sm {
                  box-shadow: none !important;
                }
              `;
              clonedDoc.head.appendChild(style);
            }
          }
        },
        jsPDF: { 
          unit: 'px',
          format: [rect.width, rect.height],
          orientation: rect.width > rect.height ? 'landscape' : 'portrait',
          compress: false, // Pas de compression pour préserver la qualité
          precision: 32,
          putOnlyUsedFonts: true,
          floatPrecision: 16,
          hotfixes: ['px_scaling']
        },
        pagebreak: { 
          mode: ['avoid-all'],
          avoid: ['*']
        }
      };

      // Générer le PDF avec la configuration optimisée
      const pdf = await html2pdf()
        .set(opt)
        .from(element)
        .toPdf()
        .get('pdf');
      
      // Métadonnées PDF professionnelles
      pdf.setProperties({
        title: `CV Premium - ${cvData.personalInfo.name}`,
        subject: 'Curriculum Vitae Professionnel',
        author: cvData.personalInfo.name,
        creator: 'CV Generator Premium',
        producer: 'html2pdf.js Enhanced',
        keywords: 'CV, Resume, Assembleur, Meubles, Professionnel'
      });
      
      // Sauvegarder le PDF
      await pdf.save();
      
    } catch (error) {
      console.error('Erreur génération PDF:', error);
      
      // Fallback avec une configuration simplifiée
      const fallbackOpt = {
        margin: [0.2, 0.2, 0.2, 0.2],
        filename: `${cvData.personalInfo.name.replace(/\s+/g, '_')}_CV_Premium.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 1.5,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait'
        }
      };
      
      try {
        await html2pdf().set(fallbackOpt).from(element).save();
      } catch (fallbackError) {
        console.error('Erreur fallback PDF:', fallbackError);
        alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
      }
    } finally {
      element.classList.remove('pdf-rendering');
      setIsGeneratingPDF(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Barre d'actions premium */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV Premium</h1>
                <p className="text-sm text-gray-600">Format A4 Professionnel</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl no-print font-medium"
              >
                <Printer className="w-4 h-4" />
                Imprimer
              </button>
              <button
                onClick={downloadPDF}
                disabled={isGeneratingPDF}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl no-print font-medium disabled:opacity-50"
              >
                {isGeneratingPDF ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Génération...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Télécharger PDF
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="pt-20 pb-12 print:pt-0">
        <div className="max-w-7xl mx-auto px-6 print:px-0 print:max-w-none">
          <div 
            id="cv-content" 
            className={`bg-white shadow-2xl transition-all duration-1000 transform print:shadow-none print:w-full mx-auto ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ 
              minHeight: '297mm', 
              width: '210mm',
              maxWidth: '210mm'
            }}
          >
            {/* Header Premium */}
            <CVHeader data={cvData.personalInfo} />

            {/* Contenu principal */}
            <div className="p-8 print:p-6">
              {/* Objectif - Pleine largeur avec design premium */}
              <CVSection 
                title="Objectif Professionnel" 
                icon={<Target className="w-5 h-5 text-blue-600" />}
                gradient="from-blue-500 to-cyan-500"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Vision Professionnelle</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed text-justify font-medium">
                      {cvData.objective}
                    </p>
                  </div>
                </div>
              </CVSection>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Colonne principale - Expériences */}
                <div className="lg:col-span-2 space-y-8">
                  <CVSection 
                    title="Parcours Professionnel" 
                    icon={<Briefcase className="w-5 h-5 text-purple-600" />}
                    gradient="from-purple-500 to-pink-500"
                  >
                    <div className="space-y-6">
                      {cvData.experiences.map((exp, index) => (
                        <TimelineItem
                          key={index}
                          title={exp.title}
                          company={exp.company}
                          location={exp.location}
                          period={exp.period}
                          responsibilities={exp.responsibilities}
                          achievements={exp.achievements}
                          isLast={index === cvData.experiences.length - 1}
                        />
                      ))}
                    </div>
                  </CVSection>

                  {/* Points forts avec design premium */}
                  <CVSection 
                    title="Atouts Professionnels" 
                    icon={<Award className="w-5 h-5 text-green-600" />}
                    gradient="from-green-500 to-emerald-500"
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {cvData.strengths.map((strength, index) => (
                        <div
                          key={index}
                          className="group bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-800 font-medium leading-relaxed">{strength}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CVSection>
                </div>

                {/* Sidebar premium */}
                <div className="space-y-8">
                  {/* Compétences avec barres de progression */}
                  <CVSection 
                    title="Expertise" 
                    icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
                    gradient="from-blue-500 to-indigo-500"
                  >
                    <div className="bg-gray-50 p-4 rounded-xl">
                      {cvData.skills.map((skill, index) => (
                        <SkillBar
                          key={index}
                          name={skill.name}
                          level={skill.level}
                          category={skill.category}
                        />
                      ))}
                    </div>
                  </CVSection>

                  {/* Formation premium */}
                  <CVSection 
                    title="Formation" 
                    icon={<GraduationCap className="w-5 h-5 text-purple-600" />}
                    gradient="from-purple-500 to-violet-500"
                  >
                    <div className="space-y-4">
                      {cvData.education.map((edu, index) => (
                        <div key={index} className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 rounded-xl p-4 hover:shadow-md transition-all">
                          <h3 className="font-bold text-gray-900 mb-2">{edu.degree}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-purple-700">
                              <GraduationCap className="w-4 h-4" />
                              <span className="font-medium">{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2 text-purple-600">
                              <span className="italic">{edu.period}</span>
                            </div>
                            {edu.description && (
                              <p className="text-gray-700 mt-2">{edu.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CVSection>

                  {/* Langues */}
                  <CVSection 
                    title="Langues" 
                    icon={<Globe className="w-5 h-5 text-cyan-600" />}
                    gradient="from-cyan-500 to-teal-500"
                  >
                    <div className="space-y-3">
                      {cvData.languages.map((language, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-cyan-50 to-teal-50 p-3 rounded-lg border border-cyan-100"
                        >
                          <span className="text-gray-800 font-medium">{language}</span>
                        </div>
                      ))}
                    </div>
                  </CVSection>

                  {/* Centres d'intérêt */}
                  <CVSection 
                    title="Centres d'intérêt" 
                    icon={<Heart className="w-5 h-5 text-red-500" />}
                    gradient="from-red-500 to-pink-500"
                  >
                    <div className="flex flex-wrap gap-2">
                      {cvData.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-red-100 to-pink-100 text-red-800 px-3 py-2 rounded-full text-sm font-medium border border-red-200 hover:shadow-sm transition-all"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </CVSection>
                </div>
              </div>
            </div>

            {/* Footer premium */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-4 text-center border-t border-gray-200 print:px-6">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Star className="w-4 h-4 text-blue-500" />
                <p className="text-sm font-medium">
                  CV généré le {new Date().toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} • Version Premium
                </p>
                <Star className="w-4 h-4 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;