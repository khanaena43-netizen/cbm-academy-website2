import React from 'react';
import { TESTIMONIALS } from '../data/cbmData';
import { Quote, Star, UserCheck, MessageSquarePlus } from 'lucide-react';

interface TestimonialsProps {
  onOpenEnquire: (source?: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenEnquire }) => {
  return (
    <section className="py-20 bg-[#0D0D0D] relative border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-bold text-[#FF6B00]">
            Student Stories & Success
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            What Our <span className="text-gradient-orange">Graduates Say</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base">
            Verified feedback from students, working professionals, and business owners who transformed their careers at CBM Academy.
          </p>
        </div>

        {/* 3 Dark Placeholder Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              className="bento-card p-8 bg-[#121212] border border-[#2A2A2A] hover:border-[#FF6B00]/50 rounded-[20px] transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                {/* Header Rating + Quote Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] flex items-center justify-center text-[#FF6B00]">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Testimonial Quote Content - Strictly incorporating requested placeholder text */}
                <div className="p-4 rounded-xl bg-[#1E1E1E]/60 border border-[#2A2A2A] mb-6">
                  <p className="text-sm font-medium text-zinc-300 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Student Metadata Footer */}
              <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E1E1E] border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] font-bold text-sm">
                    S{index + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-zinc-400 block">
                      {item.role} • {item.company}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#FF6B00] bg-[#FF6B00]/15 px-2 py-0.5 rounded font-semibold">
                  {item.batch}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Share Your Story Banner */}
        <div className="mt-12 text-center bg-[#121212] p-6 rounded-2xl border border-[#2A2A2A] max-w-2xl mx-auto flex items-center justify-between gap-4">
          <div className="text-left flex items-center gap-3">
            <UserCheck className="w-5 h-5 text-[#FF6B00]" />
            <span className="text-xs text-zinc-300 font-medium">
              Are you an alumnus of CBM Academy Delhi? Submit your video testimonial.
            </span>
          </div>
          <button
            onClick={() => onOpenEnquire('submit_testimonial')}
            className="text-xs text-[#FF6B00] font-bold hover:underline shrink-0 flex items-center gap-1"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" /> Submit Review
          </button>
        </div>

      </div>
    </section>
  );
};
