import React from 'react';
import { BENTO_WHY_US } from '../data/cbmData';
import { Cpu, FolderKanban, Sparkles, Users, Award, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenEnquire: (source?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnquire }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#FF6B00]" />;
      case 'FolderKanban': return <FolderKanban className="w-6 h-6 text-[#FF6B00]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#FF6B00]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#FF6B00]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#FF6B00]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#FF6B00]" />;
      default: return <Sparkles className="w-6 h-6 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#0D0D0D] relative border-t border-[#2A2A2A]">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF6B00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-bold text-[#FF6B00]">
            The Bento Advantage
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Why <span className="text-gradient-orange">CBM Academy?</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base">
            Designed for 2026. We replaced outdated slides with AI agents, real campaign budgets, and agency mentorship.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENTO_WHY_US.map((item, index) => (
            <div
              key={index}
              onClick={() => onOpenEnquire(`why_us_${index}`)}
              className={`bento-card ${item.colSpan} p-8 bg-[#121212] border border-[#2A2A2A] hover:border-[#FF6B00]/50 rounded-[20px] transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Subtle top background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FF6B00]/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#2A2A2A] group-hover:border-[#FF6B00]/40 flex items-center justify-center transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white group-hover:text-[#FF6B00] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom detail row */}
              <div className="pt-6 mt-6 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-zinc-400 font-medium">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" /> Verified Standard
                </span>
                <span className="text-[#FF6B00] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Enquire <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
