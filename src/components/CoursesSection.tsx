import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/cbmData';
import { Check, Sparkles, Clock, Calendar, Shield, ArrowRight, Download, BookOpen, Layers, Award, CheckCircle2 } from 'lucide-react';

interface CoursesSectionProps {
  onOpenEnquire: (source?: string) => void;
  onOpenBrochure: () => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenEnquire, onOpenBrochure }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'tools'>('overview');

  const includedModulesPills = [
    'Digital Marketing Fundamentals',
    'Search Engine Optimization (SEO)',
    'Generative Engine Optimization (GEO)',
    'Google Ads & Performance Marketing',
    'Meta Ads (Facebook & Instagram)',
    'Social Media Marketing & Reels',
    'Canva, AI Visuals & Design',
    'WordPress & E-commerce Stores',
    'Google Analytics 4 & GTM',
    '15+ AI Tools & Prompt Engineering',
    'Zapier & Marketing Automations',
    '25+ Live Practical Projects',
  ];

  return (
    <section id="courses" className="py-20 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#FF6B00]/40 text-xs font-bold text-[#FF6B00]">
            <Sparkles className="w-3.5 h-3.5" /> Flagship Master Program
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Learn Skills That <span className="text-gradient-orange">Actually Matter</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Our comprehensive 2026 AI-Integrated Digital Marketing Master Course equips you with real-world tools, agency frameworks, and guaranteed portfolio assets.
          </p>
        </div>

        {/* Featured Main Course Bento Box Container */}
        <div className="bento-card bg-[#121212] border-2 border-[#2A2A2A] hover:border-[#FF6B00]/50 rounded-[28px] p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
          
          {/* Top Decorative Glow Corner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 blur-[100px] rounded-full pointer-events-none -z-0" />

          {/* Top Banner Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#2A2A2A] relative z-10">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#FF6B00] text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  2026 Master Certification
                </span>
                <span className="bg-[#1E1E1E] text-zinc-300 border border-[#2A2A2A] text-xs px-3 py-1 rounded-full font-medium">
                  New Delhi Center & Live Online
                </span>
                <span className="bg-[#1E1E1E] text-green-400 border border-green-500/30 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 100% Placement Support
                </span>
              </div>
              
              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white pt-1">
                Pro Digital Marketing Course <span className="text-[#FF6B00]">(AI-Integrated)</span>
              </h3>
              
              <p className="text-zinc-300 text-sm max-w-3xl leading-relaxed">
                A 3-Month Intensive + 1-Month Internship program covering 12 core modules, 15+ AI tools, 25+ live capstone brand assignments, and personal agency mentorship.
              </p>
            </div>

            {/* Course Meta Specs Box */}
            <div className="bg-[#1E1E1E]/90 border border-[#2A2A2A] p-4 rounded-2xl space-y-3 min-w-[240px] shrink-0">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Clock className="w-4 h-4 text-[#FF6B00]" /> Duration:
                </span>
                <span className="font-bold text-white">3 Months + 1 Mo Internship</span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Calendar className="w-4 h-4 text-[#FF6B00]" /> Batch Options:
                </span>
                <span className="font-bold text-white">Weekday / Weekend</span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Shield className="w-4 h-4 text-[#FF6B00]" /> Batch Limit:
                </span>
                <span className="font-bold text-[#FF6B00]">Max 15 Students</span>
              </div>
            </div>
          </div>

          {/* Module Pill Tags Grid */}
          <div className="py-8 space-y-4 border-b border-[#2A2A2A] relative z-10">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FF6B00]" /> Included Modules & Skills Covered:
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {includedModulesPills.map((moduleName, idx) => (
                <div
                  key={idx}
                  className="bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#FF6B00]/40 p-3 rounded-xl flex items-center gap-2.5 transition-colors group"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {moduleName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Syllabus Preview Accordion Grid */}
          <div className="py-8 relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-xl text-white">
                  Curriculum Module Preview
                </h4>
                <p className="text-xs text-zinc-400">
                  Explore what you will build step-by-step during the program.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenBrochure}
                  className="px-4 py-2 rounded-xl bg-[#1E1E1E] hover:bg-[#2A2A2A] border border-[#2A2A2A] text-xs font-semibold text-white hover:text-[#FF6B00] transition-colors flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>Download Syllabus PDF</span>
                </button>
              </div>
            </div>

            {/* Modules Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COURSE_MODULES.slice(0, 4).map((mod) => (
                <div
                  key={mod.id}
                  className="bg-[#1E1E1E]/60 border border-[#2A2A2A] hover:border-[#FF6B00]/40 p-5 rounded-2xl space-y-3 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#FF6B00] bg-[#FF6B00]/15 px-2 py-0.5 rounded font-bold">
                      {mod.duration}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-medium">
                      Deliverable: {mod.practicalDeliverable.slice(0, 35)}...
                    </span>
                  </div>

                  <h5 className="font-display font-bold text-base text-white">
                    {mod.title}
                  </h5>

                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {mod.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {mod.tools.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-black/50 border border-[#2A2A2A] text-zinc-300 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action Footer */}
          <div className="pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <Award className="w-5 h-5 text-[#FF6B00] shrink-0" />
              <span>Includes CBM Academy Master Certificate + Google & Meta Official Certifications</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* View Course Pill button */}
              <a
                href="#curriculum"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-black font-bold text-xs transition-all text-center"
              >
                View Full Syllabus
              </a>

              {/* Solid Orange Primary CTA */}
              <button
                onClick={() => onOpenEnquire('course_card_enroll')}
                className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF5500] text-black font-bold text-xs px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-[#FF6B00]/20 flex items-center justify-center gap-2"
              >
                <span>Enroll / Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
