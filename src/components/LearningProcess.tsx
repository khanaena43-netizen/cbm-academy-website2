import React from 'react';
import { BookOpen, Wrench, Rocket, Briefcase, ArrowRight } from 'lucide-react';

interface LearningProcessProps {
  onOpenEnquire: (source?: string) => void;
}

export const LearningProcess: React.FC<LearningProcessProps> = ({ onOpenEnquire }) => {
  const steps = [
    {
      stepNum: '01',
      title: 'Learn',
      subtitle: 'Understand Concept',
      desc: 'Master marketing fundamentals, buyer psychology, and AI prompt engineering through live agency case studies.',
      icon: BookOpen,
      tag: 'Conceptual Foundation',
    },
    {
      stepNum: '02',
      title: 'Practice',
      subtitle: 'Hands-on Assignments',
      desc: 'Execute guided assignments directly on real Google Ads, Meta Ads Manager, GA4, and WordPress dashboards.',
      icon: Wrench,
      tag: 'Tool Mastery',
    },
    {
      stepNum: '03',
      title: 'Build',
      subtitle: 'Real Projects',
      desc: 'Deploy 25+ capstone client projects with real budgets, build live stores, and construct your digital portfolio.',
      icon: Rocket,
      tag: 'Portfolio Creation',
    },
    {
      stepNum: '04',
      title: 'Apply',
      subtitle: 'Freelance & Career',
      desc: 'Monetize your skills via full-time agency job placement in Delhi-NCR or launching your high-ticket freelance practice.',
      icon: Briefcase,
      tag: 'Monetization',
    },
  ];

  return (
    <section className="py-20 bg-[#0D0D0D] relative border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-bold text-[#FF6B00]">
            The CBM Learning Methodology
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our 4-Step <span className="text-gradient-orange">Practical Framework</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base">
            How we convert absolute beginners into confident, high-earning AI Digital Marketing Specialists.
          </p>
        </div>

        {/* 4 Horizontal Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                onClick={() => onOpenEnquire(`learning_process_${idx}`)}
                className="bento-card p-6 bg-[#121212] border border-[#2A2A2A] hover:border-[#FF6B00]/60 rounded-[20px] transition-all duration-300 group cursor-pointer relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Step Number + Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-zinc-600 group-hover:text-[#FF6B00] transition-colors font-mono">
                      {step.stepNum}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] group-hover:border-[#FF6B00]/40 flex items-center justify-center transition-colors">
                      <IconComponent className="w-5 h-5 text-[#FF6B00]" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-[#FF6B00] uppercase tracking-wider font-bold block mb-1">
                    {step.tag}
                  </span>

                  <h3 className="font-display font-black text-2xl text-white mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-zinc-300 mb-3">
                    ({step.subtitle})
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-zinc-500 font-medium">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-[#FF6B00] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
