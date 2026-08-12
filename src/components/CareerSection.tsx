import React from 'react';
import { CAREER_HIGHLIGHTS, ACADEMY_INFO } from '../data/cbmData';
import { Building2, FileCheck, FolderKanban, DollarSign, ArrowRight, Sparkles, Briefcase, Award } from 'lucide-react';

interface CareerSectionProps {
  onOpenEnquire: (source?: string) => void;
}

export const CareerSection: React.FC<CareerSectionProps> = ({ onOpenEnquire }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-[#FF6B00]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#FF6B00]" />;
      case 'FolderKanban': return <FolderKanban className="w-6 h-6 text-[#FF6B00]" />;
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-[#FF6B00]" />;
      default: return <Briefcase className="w-6 h-6 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="career" className="py-20 bg-[#0D0D0D] relative border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-bold text-[#FF6B00]">
            Career & Placement Cell
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Turn Skills Into <span className="text-gradient-orange">Opportunities</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base">
            We bridge the gap between classroom training and high-paying jobs in performance marketing, AI automation, and agency growth across Delhi-NCR.
          </p>
        </div>

        {/* 4 Bulleted Dark Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CAREER_HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="bento-card p-8 bg-[#121212] border border-[#2A2A2A] hover:border-[#FF6B00]/50 rounded-[20px] transition-all duration-300 relative group flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1E1E1E] border border-[#2A2A2A] group-hover:border-[#FF6B00]/40 flex items-center justify-center shrink-0 transition-colors shadow-inner">
                {getIcon(item.iconName)}
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF6B00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Salary Stats + Main CTA Banner */}
        <div className="bento-card p-8 sm:p-10 bg-gradient-to-r from-[#121212] via-[#1E1E1E] to-[#121212] border-2 border-[#FF6B00]/40 rounded-[28px] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Placement Records
            </div>
            
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Ready to Accelerate Your Career in Digital Marketing?
            </h3>
            
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Avg. Starting Salary: <strong className="text-white">{ACADEMY_INFO.avgPackage}</strong> | Highest Package Secured: <strong className="text-[#FF6B00]">{ACADEMY_INFO.highestPackage}</strong> across 150+ Hiring Partners in Gurgaon, Noida, and South Delhi.
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onOpenEnquire('career_section_cta')}
              className="w-full lg:w-auto bg-[#FF6B00] hover:bg-[#FF5500] text-black font-extrabold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
