import React, { useState } from 'react';
import { FAQS } from '../data/cbmData';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

interface FAQProps {
  onOpenEnquire: (source?: string) => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenEnquire }) => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-[#0D0D0D] relative border-t border-[#2A2A2A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-bold text-[#FF6B00]">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
          <p className="text-zinc-300 text-sm">
            Everything you need to know about admissions, fees, batch timings, and AI tools at CBM Academy New Delhi.
          </p>

          {/* FAQ Search Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. fees, placement, AI tools)..."
                className="w-full bg-[#121212] border border-[#2A2A2A] focus:border-[#FF6B00] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bento-card bg-[#121212] border transition-all duration-300 rounded-2xl overflow-hidden ${
                    isOpen ? 'border-[#FF6B00] shadow-lg shadow-[#FF6B00]/10 bg-[#121212]' : 'border-[#2A2A2A] hover:border-[#2A2A2A]/80'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`font-display font-bold text-base transition-colors ${
                      isOpen ? 'text-[#FF6B00]' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen ? 'bg-[#FF6B00] text-black border-[#FF6B00] rotate-180' : 'bg-[#1E1E1E] text-zinc-400 border-[#2A2A2A]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#2A2A2A] text-xs sm:text-sm text-zinc-300 leading-relaxed text-left animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#121212] rounded-2xl border border-[#2A2A2A]">
              <p className="text-zinc-400 text-xs">No questions matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#FF6B00] text-xs font-bold hover:underline mt-2"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Didn't find your question CTA */}
        <div className="mt-12 text-center bg-[#121212] p-6 rounded-2xl border border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-sm text-white">
              Have a specific question about batch schedules or Delhi center location?
            </h4>
            <p className="text-xs text-zinc-400">
              Speak directly with an Admissions Counsellor at CBM Academy.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquire('faq_counsellor')}
            className="bg-[#FF6B00] hover:bg-[#FF5500] text-black font-bold text-xs px-6 py-2.5 rounded-xl transition-colors shrink-0 shadow"
          >
            Ask a Counsellor
          </button>
        </div>

      </div>
    </section>
  );
};
