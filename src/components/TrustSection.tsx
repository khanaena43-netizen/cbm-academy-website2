import React from 'react';
import { TRUST_METRICS } from '../data/cbmData';
import { FolderKanban, Cpu, Briefcase, Users, ArrowUpRight } from 'lucide-react';

interface TrustSectionProps {
  onOpenEnquire: (source?: string) => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenEnquire }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderKanban': return <FolderKanban className="w-6 h-6 text-[#FF6B00]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#FF6B00]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#FF6B00]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#FF6B00]" />;
      default: return <Cpu className="w-6 h-6 text-[#FF6B00]" />;
    }
  };

  return (
    <section className="py-16 bg-[#0D0D0D] relative border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-semibold text-[#FF6B00]">
            The CBM Advantage
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Built For Outcomes. <span className="text-zinc-400">Not Just Attendance Certificates.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Every module at CBM Academy is engineered around practical mastery, AI acceleration, and immediate career deployment in New Delhi.
          </p>
        </div>

        {/* 4 Trust Metric Dark Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_METRICS.map((item, index) => (
            <div
              key={index}
              onClick={() => onOpenEnquire(`trust_card_${index}`)}
              className="bento-card p-6 bg-[#121212] border border-[#2A2A2A] hover:border-[#FF6B00]/60 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top corner ambient accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FF6B00]/15 transition-colors" />

              <div>
                {/* Header Icon + Arrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#2A2A2A] group-hover:border-[#FF6B00]/40 flex items-center justify-center transition-colors shadow-inner">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="text-zinc-500 group-hover:text-[#FF6B00] transition-colors">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                {/* Big Metric Count */}
                <div className="font-display font-black text-3xl lg:text-4xl text-white tracking-tight group-hover:text-gradient-orange transition-all mb-1">
                  {item.number}
                </div>

                {/* Label Title */}
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#FF6B00] transition-colors">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Pill */}
              <div className="pt-4 mt-6 border-t border-[#2A2A2A]/60 flex items-center justify-between text-[11px] text-zinc-500 font-medium">
                <span>Verified Metric</span>
                <span className="text-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Learn More &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
