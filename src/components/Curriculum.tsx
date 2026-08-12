import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/cbmData';
import { CourseModule } from '../types';
import { ChevronDown, ChevronUp, CheckCircle2, Cpu, FileCode2, Terminal, ArrowRight, Download, Clock, Wrench } from 'lucide-react';

interface CurriculumProps {
  onOpenEnquire: (source?: string) => void;
  onOpenBrochure: () => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenEnquire, onOpenBrochure }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(COURSE_MODULES[0].id);
  const [expandedMobileModuleId, setExpandedMobileModuleId] = useState<string | null>(COURSE_MODULES[0].id);

  const selectedModule: CourseModule = COURSE_MODULES.find(m => m.id === activeModuleId) || COURSE_MODULES[0];

  const toggleMobileModule = (id: string) => {
    setExpandedMobileModuleId(expandedMobileModuleId === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-20 bg-[#0D0D0D] relative border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-bold text-[#FF6B00]">
            Syllabus Deep-Dive
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Comprehensive <span className="text-gradient-orange">2026 Curriculum</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base">
            From foundation concepts to autonomous AI agents, master every layer of modern performance marketing and brand strategy.
          </p>
        </div>

        {/* DESKTOP VIEW: Two-Column Interactive Timeline Tabs */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline List with Orange Indicator Dots */}
          <div className="col-span-5 space-y-2 bg-[#121212] p-4 rounded-[24px] border border-[#2A2A2A] shadow-xl">
            <div className="px-3 py-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider border-b border-[#2A2A2A] mb-2 flex items-center justify-between">
              <span>Select Module ({COURSE_MODULES.length})</span>
              <span className="text-[#FF6B00]">100% Practical</span>
            </div>

            {COURSE_MODULES.map((mod, index) => {
              const isActive = activeModuleId === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-4 group relative ${
                    isActive
                      ? 'bg-[#1E1E1E] border border-[#FF6B00]/50 shadow-lg'
                      : 'hover:bg-[#1E1E1E]/50 border border-transparent'
                  }`}
                >
                  {/* Timeline Indicator Dot */}
                  <div className="relative flex items-center justify-center shrink-0">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                      isActive
                        ? 'border-[#FF6B00] bg-[#FF6B00] shadow-[0_0_12px_rgba(255,107,0,0.8)]'
                        : 'border-zinc-600 bg-black group-hover:border-[#FF6B00]'
                    }`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#FF6B00] font-bold">
                        Module 0{index + 1} • {mod.duration}
                      </span>
                    </div>
                    <h4 className={`text-sm font-bold truncate transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                    }`}>
                      {mod.title}
                    </h4>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${
                    isActive ? 'text-[#FF6B00] translate-x-1' : 'text-zinc-600 group-hover:text-zinc-300'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Active Module Inspector Panel */}
          <div className="col-span-7 sticky top-24">
            <div className="bento-card p-8 bg-[#121212] border-2 border-[#FF6B00]/40 rounded-[28px] shadow-2xl relative space-y-6">
              
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-2">
                  <span className="bg-[#FF6B00] text-black font-extrabold text-xs px-3 py-1 rounded-full font-mono">
                    {selectedModule.duration}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    Module ID: {selectedModule.id}
                  </span>
                </div>
                
                <button
                  onClick={onOpenBrochure}
                  className="text-xs text-[#FF6B00] hover:underline font-bold flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" /> Full Module PDF
                </button>
              </div>

              {/* Title & Short Desc */}
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl text-white">
                  {selectedModule.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedModule.shortDesc}
                </p>
              </div>

              {/* Key Topics List */}
              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-[#FF6B00]" /> Core Learning Outcomes & Topics:
                </h5>
                <div className="space-y-2">
                  {selectedModule.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200 bg-[#1E1E1E]/80 p-2.5 rounded-xl border border-[#2A2A2A]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-[#FF6B00]" /> Tools & Platforms Taught:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedModule.tools.map((tool, i) => (
                    <span key={i} className="text-xs font-semibold text-white bg-black/60 border border-[#2A2A2A] px-3 py-1 rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Deliverable Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#FF6B00]/15 to-[#121212] border border-[#FF6B00]/30 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B00] font-bold block">
                    Capstone Deliverable
                  </span>
                  <p className="text-xs font-bold text-white">
                    {selectedModule.practicalDeliverable}
                  </p>
                </div>
                <button
                  onClick={() => onOpenEnquire(`curriculum_module_${selectedModule.id}`)}
                  className="bg-[#FF6B00] hover:bg-[#FF5500] text-black font-bold text-xs px-4 py-2.5 rounded-xl transition-all shrink-0 shadow"
                >
                  Enquire Module
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* MOBILE VIEW: Dark Expandable Accordion Cards with Crisp Orange Toggle Icons */}
        <div className="lg:hidden space-y-4">
          {COURSE_MODULES.map((mod, index) => {
            const isExpanded = expandedMobileModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className={`bento-card bg-[#121212] border transition-all rounded-2xl overflow-hidden ${
                  isExpanded ? 'border-[#FF6B00] shadow-lg shadow-[#FF6B00]/10' : 'border-[#2A2A2A]'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleMobileModule(mod.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#FF6B00] font-bold bg-[#FF6B00]/15 px-2 py-0.5 rounded">
                        Module 0{index + 1} • {mod.duration}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-white">
                      {mod.title}
                    </h4>
                  </div>

                  {/* Crisp Orange Toggle Icon */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                    isExpanded ? 'bg-[#FF6B00] text-black border-[#FF6B00]' : 'bg-[#1E1E1E] text-[#FF6B00] border-[#2A2A2A]'
                  }`}>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Accordion Body */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-[#2A2A2A] space-y-4 text-left">
                    <p className="text-xs text-zinc-300">
                      {mod.shortDesc}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 font-bold block">
                        Topics Covered:
                      </span>
                      {mod.topics.map((t, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 font-bold block">
                        Tools Used:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.tools.map((tool, idx) => (
                          <span key={idx} className="text-[10px] bg-[#1E1E1E] text-zinc-300 px-2 py-0.5 rounded border border-[#2A2A2A]">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-[#1E1E1E] rounded-xl border border-[#FF6B00]/30 text-xs">
                      <span className="text-[10px] text-[#FF6B00] font-bold font-mono block">Deliverable:</span>
                      <span className="text-white font-medium">{mod.practicalDeliverable}</span>
                    </div>

                    <button
                      onClick={() => onOpenEnquire(`mobile_curriculum_${mod.id}`)}
                      className="w-full bg-[#FF6B00] text-black font-bold text-xs py-2.5 rounded-xl"
                    >
                      Enquire for This Module
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center bg-[#121212] p-8 rounded-[24px] border border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-lg text-white">
              Want the detailed PDF Syllabus with day-by-day timetable?
            </h4>
            <p className="text-xs text-zinc-400">
              Get the complete 2026 CBM Academy Prospectus sent instantly to your WhatsApp or Email.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBrochure}
              className="w-full sm:w-auto bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white border border-[#2A2A2A] hover:border-[#FF6B00] font-bold text-xs px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#FF6B00]" />
              <span>Download Prospectus</span>
            </button>
            <button
              onClick={() => onOpenEnquire('curriculum_footer')}
              className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF5500] text-black font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-lg"
            >
              Enquire Batch Dates
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
